@AGENTS.md

# Tesla Robotaxi Thesis

## Quick Reference

- **Live:** https://tesla-thesis.vercel.app
- **Stack:** Next.js 16 / TypeScript strict / Tailwind v4 / Recharts v3 / D3.js
- **Deploy:** Vercel auto-deploys on push to `main`

## Commands

- `npm run dev` — Dev server (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — Type-check

## Rules

- No `any` types, no `@ts-ignore`
- No external UI libraries (no shadcn, MUI, Chakra)
- Named exports only (except page.tsx/layout.tsx)
- `"use client"` only where interactivity is required
- All data in `src/data/` — no inline data arrays in components
- Recharts v3 tooltips use render functions, not JSX elements
- Every component gets its own file, kebab-case filenames, PascalCase exports

## Updating Data

- **Quarterly earnings:** `src/data/quarterly.ts` + `src/data/annual.ts`
- **Fleet milestones:** `src/data/fleet-growth.ts`
- **FSD miles:** `src/components/sections/tracker/fsd-miles.tsx` (manual, from tesla.com/fsd/safety)
- **New cities:** `src/data/cities.ts`
- **Hiring data:** `src/data/careers.ts` (web search for Tesla robotaxi/self-driving jobs, then update file)

## Key Patterns

- Fleet total derived from Austin + Bay Area counts, not API's `totalFleetCount`
- City counts derived from `service_area_id` on each vehicle in the Convex response
- Fleet polling: `src/lib/fleet-api.ts` (2-min interval from robotaxi-proxy.vercel.app)
- Proxy repo: `~/robotaxi-proxy` → deploys to robotaxi-proxy.vercel.app
- Cybercab count from proxy uses `getCybercabsByRegion` query (filtered, matches robotaxitracker.com)
- City counts from proxy use `getFleetGrowthData` query (full vehicle list with `service_area_id`)
- Financial chart sync: `syncId="f"` | Thesis chart sync: `syncId="th"`
- Theme palette: CSS custom properties in `src/app/globals.css`

## Known Limitations

- Tesla careers page (tesla.com) is behind Akamai WAF — blocks all cloud/datacenter IPs (Vercel, GitHub Actions, direct fetch). Hiring data is updated via web search instead.
