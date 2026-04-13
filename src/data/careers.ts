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
  totalRoles: "50+",
  usCities: "12+",
  countries: "20",
  operations: "24/7",
  categories: [
    {
      cat: "Fleet Ops & Vehicle Operators",
      count: "~30+",
      roles: "AI Safety Operator, Robotaxi Ops Manager, Data Collection Supervisor",
      locs: "12+ US cities, 7 states + 20 countries",
    },
    {
      cat: "Teleoperation & Remote Support",
      count: "~8-10",
      roles: "C++ Engineer Teleoperation ($120-318K), Fleet Support Supervisor (Night Shift)",
      locs: "Palo Alto, Miami",
    },
    {
      cat: "Software & Hardware Engineering",
      count: "~10-15",
      roles: "Electronic Systems Integration, Code Hardening, PCB Layout, Business Analyst",
      locs: "Palo Alto, Austin, Remote",
    },
    {
      cat: "Global Production",
      count: "~5-8",
      roles: "Sr. Electrical Design Engineer (Robotaxi) at Giga Berlin, Intl Vehicle Operators",
      locs: "Giga Berlin + 20 countries",
    },
  ],
  fetchedAt: null,
};
