// Scrapes Tesla careers for robotaxi-related job postings
// and updates src/data/careers.ts with fresh data.
//
// Run: node .github/scripts/scrape-careers.mjs

import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CAREERS_FILE = resolve(__dirname, "../../src/data/careers.ts");

const TESLA_CAREERS_URL =
  "https://www.tesla.com/careers/search/?query=robotaxi&site=US";

const CATEGORY_RULES = [
  {
    cat: "Fleet Ops & Vehicle Operators",
    keywords: ["operator", "fleet", "vehicle ops", "safety operator", "data collection", "driver"],
  },
  {
    cat: "Teleoperation & Remote Support",
    keywords: ["teleoperation", "teleops", "remote support", "fleet support", "remote operator"],
  },
  {
    cat: "Software & Hardware Engineering",
    keywords: ["engineer", "software", "hardware", "firmware", "integration", "developer", "analyst", "code", "pcb"],
  },
  {
    cat: "Global Production",
    keywords: ["production", "manufacturing", "design engineer", "giga", "factory", "supply chain"],
  },
];

function categorizeJob(title) {
  const t = title.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((kw) => t.includes(kw))) return rule.cat;
  }
  return "Other";
}

async function scrape() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Navigating to ${TESLA_CAREERS_URL}`);
  await page.goto(TESLA_CAREERS_URL, { waitUntil: "networkidle", timeout: 30000 });

  // Wait for job listings to appear
  await page
    .waitForSelector('a[href*="/careers/job/"]', { timeout: 15000 })
    .catch(() => console.log("No job links found via selector, trying fallback..."));

  // Extract jobs from the page
  const jobs = await page.evaluate(() => {
    const results = [];

    // Strategy 1: job links
    const jobLinks = document.querySelectorAll('a[href*="/careers/job/"]');
    for (const link of jobLinks) {
      const title = link.textContent?.trim();
      const parent = link.closest("li, article, div, tr");
      const location = parent
        ?.querySelector('[class*="location"], [class*="loc"], [class*="city"]')
        ?.textContent?.trim();
      if (title && title.length > 3) {
        results.push({ title, location: location || "", url: link.href });
      }
    }

    // Strategy 2: __NEXT_DATA__
    if (results.length === 0) {
      const nd = document.getElementById("__NEXT_DATA__");
      if (nd) {
        try {
          const data = JSON.parse(nd.textContent || "");
          const items = data?.props?.pageProps?.results || data?.props?.pageProps?.jobs || [];
          for (const job of items) {
            if (job.title) {
              results.push({
                title: job.title,
                location: job.location || [job.city, job.state, job.country].filter(Boolean).join(", "),
              });
            }
          }
        } catch {}
      }
    }

    return results;
  });

  const pageTitle = await page.title();
  const pageUrl = page.url();
  console.log(`Page title: "${pageTitle}", URL: ${pageUrl}`);
  console.log(`Found ${jobs.length} job listings`);

  await browser.close();

  if (jobs.length === 0) {
    console.log("No jobs found — page may be blocked. Keeping existing data.");
    // Take a screenshot for debugging in CI
    process.exit(0);
  }

  // Categorize jobs
  const catMap = new Map();
  const usCities = new Set();
  const countries = new Set();

  for (const job of jobs) {
    const cat = categorizeJob(job.title);
    if (!catMap.has(cat)) catMap.set(cat, { titles: [], locs: new Set() });
    const entry = catMap.get(cat);
    entry.titles.push(job.title);
    if (job.location) {
      entry.locs.add(job.location);
      const parts = job.location.split(",").map((s) => s.trim());
      if (parts.length >= 2) {
        usCities.add(parts[0]);
        const last = parts[parts.length - 1];
        if (last.length > 2 && last !== "United States" && last !== "US") {
          countries.add(last);
        }
      }
    }
  }

  const categories = [];
  for (const [cat, data] of catMap) {
    if (cat === "Other" && data.titles.length < 2) continue;
    const sampleRoles = data.titles.slice(0, 3).map((r) => JSON.stringify(r)).join(", ");
    const locsArr = [...data.locs];
    const sampleLocs =
      locsArr.length > 3
        ? locsArr.slice(0, 3).map((l) => JSON.stringify(l)).join(", ") + ` + "${locsArr.length - 3} more"`
        : locsArr.map((l) => JSON.stringify(l)).join(", ");
    categories.push({
      cat,
      count: data.titles.length >= 10 ? `~${data.titles.length}+` : `~${data.titles.length}`,
      roles: data.titles.slice(0, 3).join(", "),
      locs: locsArr.length > 3
        ? locsArr.slice(0, 3).join(", ") + ` + ${locsArr.length - 3} more`
        : locsArr.join(", ") || "Various",
    });
  }

  categories.sort((a, b) => {
    const na = parseInt(a.count.replace(/\D/g, "")) || 0;
    const nb = parseInt(b.count.replace(/\D/g, "")) || 0;
    return nb - na;
  });

  const totalRoles = jobs.length >= 50 ? `${jobs.length}+` : `${jobs.length}`;
  const usCitiesStr = usCities.size > 0 ? `${usCities.size}+` : "12+";
  const countriesStr = countries.size > 0 ? `${countries.size}` : "20";

  // Generate the TypeScript file
  const catEntries = categories
    .map(
      (c) =>
        `    {\n      cat: ${JSON.stringify(c.cat)},\n      count: ${JSON.stringify(c.count)},\n      roles: ${JSON.stringify(c.roles)},\n      locs: ${JSON.stringify(c.locs)},\n    }`
    )
    .join(",\n");

  const ts = `export interface CareerCategory {
  cat: string;
  count: string;
  roles: string;
  locs: string;
}

export interface CareersData {
  totalRoles: string;
  usCities: string;
  countries: string;
  operations: string;
  categories: CareerCategory[];
  fetchedAt: string | null;
}

export const FALLBACK_CAREERS: CareersData = {
  totalRoles: ${JSON.stringify(totalRoles)},
  usCities: ${JSON.stringify(usCitiesStr)},
  countries: ${JSON.stringify(countriesStr)},
  operations: "24/7",
  categories: [
${catEntries}
  ],
  fetchedAt: ${JSON.stringify(new Date().toISOString())},
};
`;

  writeFileSync(CAREERS_FILE, ts);
  console.log(`Updated ${CAREERS_FILE}`);
  console.log(`  Total roles: ${totalRoles}`);
  console.log(`  Categories: ${categories.length}`);
  for (const c of categories) {
    console.log(`    ${c.cat}: ${c.count}`);
  }
}

scrape().catch((err) => {
  console.error("Scrape failed:", err.message);
  process.exit(0); // Don't fail the workflow — keep existing data
});
