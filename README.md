# The Tesla Robotaxi Thesis

Interactive investment thesis dashboard tracking Tesla's transition from car company to mobility platform.

**Live:** [tesla-thesis.vercel.app](https://tesla-thesis.vercel.app)

## Sections

- **The Case** — Revenue and profit projections through 2030, fleet-to-revenue model, unit economics, risk analysis, and ARK Invest comparison
- **Live Tracker** — Real-time fleet count via robotaxitracker.com, fleet growth chart, Cybercab specs, D3 expansion map, and hiring tracker
- **The Numbers** — Tesla financials from SEC filings (Q4 2020 – Q4 2025): margins, revenue by segment, cash flow, energy storage, and more

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts v3
- **Maps:** D3.js + TopoJSON
- **Deployment:** Vercel

## Development

```bash
npm install
npm run dev
```

## Data Sources

- Fleet data: [robotaxitracker.com](https://robotaxitracker.com) via [robotaxi-proxy.vercel.app](https://robotaxi-proxy.vercel.app/api/fleet)
- Financials: SEC 8-K/10-K filings (GAAP)
- Projections: Wolfe Research, ARK Invest, S&P Global
