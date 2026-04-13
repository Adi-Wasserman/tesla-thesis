export interface FleetRevenueProjection {
  year: string;
  fleet: number;
  rev: number;
  phase: string;
}

export interface RevenueComposition {
  year: string;
  auto: number;
  energy: number;
  svc: number;
  robotaxi: number;
}

export interface GrossProfitComposition {
  year: string;
  auto: number;
  energy: number;
  svc: number;
  robotaxi: number;
}

export interface CostComparison {
  name: string;
  cost: number;
  color: string;
  note: string;
}

export const FLEET_REVENUE: FleetRevenueProjection[] = [
  { year: "2026E", fleet: 15000, rev: 2000, phase: "Expansion" },
  { year: "2027E", fleet: 200000, rev: 15000, phase: "Early Scale" },
  { year: "2028E", fleet: 1000000, rev: 50000, phase: "Breakout" },
  { year: "2029E", fleet: 2000000, rev: 100000, phase: "Acceleration" },
  { year: "2030E", fleet: 3000000, rev: 150000, phase: "Platform Scale" },
];

export const REVENUE_BUILD: RevenueComposition[] = [
  { year: "2025", auto: 71033, energy: 12774, svc: 11827, robotaxi: 0 },
  { year: "2026E", auto: 78000, energy: 16000, svc: 13000, robotaxi: 2000 },
  { year: "2027E", auto: 85000, energy: 20000, svc: 14500, robotaxi: 15000 },
  { year: "2028E", auto: 90000, energy: 25000, svc: 16000, robotaxi: 50000 },
  { year: "2029E", auto: 92000, energy: 30000, svc: 17000, robotaxi: 100000 },
  { year: "2030E", auto: 95000, energy: 35000, svc: 18000, robotaxi: 150000 },
];

export const GP_BUILD: GrossProfitComposition[] = [
  { year: "2025", auto: 12502, energy: 3743, svc: 1041, robotaxi: 0 },
  { year: "2026E", auto: 14040, energy: 4800, svc: 1400, robotaxi: 0 },
  { year: "2027E", auto: 15300, energy: 6400, svc: 1800, robotaxi: 7500 },
  { year: "2028E", auto: 16200, energy: 8000, svc: 2200, robotaxi: 30000 },
  { year: "2029E", auto: 16600, energy: 9600, svc: 2500, robotaxi: 68000 },
  { year: "2030E", auto: 17100, energy: 11200, svc: 2800, robotaxi: 108000 },
];

export const COST_DATA: CostComparison[] = [
  { name: "Uber/Lyft", cost: 2.80, color: "#64748b", note: "Human driver" },
  { name: "Personal Car", cost: 0.77, color: "#94a3b8", note: "AAA avg" },
  { name: "Waymo (now)", cost: 1.00, color: "#f87171", note: "Lidar + HD maps" },
  { name: "Tesla Robotaxi", cost: 0.50, color: "#22c55e", note: "Avg fare at scale" },
];
