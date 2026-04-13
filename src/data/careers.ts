export interface CareerCategory {
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
  totalRoles: "99+",
  usCities: "14+",
  countries: "20+",
  operations: "24/7",
  categories: [
    {
      cat: "Fleet Ops & Vehicle Operators",
      count: "~50+",
      roles: "AI Safety Operator, Vehicle Operator Robotaxi, Fleet Support Specialist",
      locs: "14 US cities across 9 states + 20 countries",
    },
    {
      cat: "Teleoperation & Remote Support",
      count: "~8-10",
      roles: "C++ Engineer Teleoperation ($120-318K), Fleet Support Supervisor (Night Shift)",
      locs: "Palo Alto, Miami",
    },
    {
      cat: "Software & Hardware Engineering",
      count: "~15-20",
      roles: "Electronic Systems Integration Engineer, Code Hardening, PCB Layout Designer",
      locs: "Palo Alto, Austin, Remote",
    },
    {
      cat: "Global Production & Data Collection",
      count: "~20+",
      roles: "Vehicle Operator (Data Collection), Robotaxi Operations Manager",
      locs: "Giga Berlin, Thailand, India, Israel + 17 countries",
    },
  ],
  fetchedAt: "2026-04-13T00:00:00.000Z",
};
