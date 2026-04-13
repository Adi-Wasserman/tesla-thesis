export interface FleetStatus {
  totalFleetCount: number;
  cybercabCount: number;
  unsupervisedCount: number;
  austinCount: number | null;
  bayAreaCount: number | null;
}

export interface CityMarker {
  lng: number;
  lat: number;
  city: string;
  on?: boolean;
  v?: string;
}

export interface FleetGrowthPoint {
  austin: number;
  bayArea: number;
  label: string;
  ms?: string;
}
