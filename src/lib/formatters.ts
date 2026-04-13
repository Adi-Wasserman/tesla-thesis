export function fmt(v: number | null | undefined): string {
  if (v == null) return "-";
  const a = Math.abs(v);
  return a >= 1000
    ? (v < 0 ? "-$" : "$") + (a / 1000).toFixed(1) + "B"
    : (v < 0 ? "-$" : "$") + a + "M";
}
