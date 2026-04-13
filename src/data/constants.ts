export const PROXY_URL = "https://robotaxi-proxy.vercel.app/api/fleet";
export const POLL_INTERVAL = 120000;
export const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export const FALLBACK_FLEET = {
  totalFleetCount: 430,
  cybercabCount: 35,
  unsupervisedCount: 8,
  austinCount: null,
  bayAreaCount: null,
} as const;
