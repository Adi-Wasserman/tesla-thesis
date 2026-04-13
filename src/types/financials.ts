export interface QuarterlyData {
  q: string;
  rev: number;
  autoRev: number;
  energyRev: number;
  svcRev: number;
  gp: number;
  opInc: number;
  netInc: number;
  opCF: number;
  capex: number;
  fcf: number;
  opex: number;
  gm: number;
  om: number;
  autoGM: number;
  energyGM: number;
  del: number;
  storage: number;
}

export type AnnualData = QuarterlyData;

export interface CashData extends QuarterlyData {
  cash: number;
}
