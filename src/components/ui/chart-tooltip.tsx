import { fmt } from "@/lib/formatters";
import type { ChartTooltipProps } from "@/types/charts";

export function ChartTooltip(p: ChartTooltipProps) {
  if (!p.active || !p.payload || !p.payload.length) return null;
  return (
    <div
      className="rounded-[10px] min-w-[130px]"
      style={{
        background: "rgba(5,10,20,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "10px 14px",
      }}
    >
      <div
        className="text-[11px] font-bold mb-1.5 pb-1"
        style={{ color: "#94a3b8", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {(p.payload[0].payload as Record<string, unknown>).q as string ||
          (p.payload[0].payload as Record<string, unknown>).label as string ||
          p.label}
      </div>
      {p.payload.map((e, i) => {
        const v = e.value as number;
        let l: string;
        if (e.dataKey === "del") {
          l = (v / 1000).toFixed(0) + "K";
        } else if (e.dataKey === "storage") {
          l = v >= 1000 ? (v / 1000).toFixed(1) + "GWh" : v + "MWh";
        } else if (e.dataKey === "cash") {
          l = "$" + (v / 1000).toFixed(1) + "B";
        } else if (e.dataKey === "austin" || e.dataKey === "bayArea") {
          l = String(v);
        } else if (typeof v === "number" && Math.abs(v) > 100) {
          l = fmt(v);
        } else if (typeof v === "number" && Math.abs(v) < 50) {
          l = v.toFixed(1) + "%";
        } else {
          l = "$" + v;
        }
        return (
          <div key={i} className="flex justify-between gap-3 text-[11px] mb-0.5">
            <span className="flex items-center gap-1.5" style={{ color: "#64748b" }}>
              <span
                className="inline-block rounded-sm"
                style={{ width: 7, height: 7, background: e.color }}
              />
              {e.name}
            </span>
            <span className="font-bold" style={{ color: "#e2e8f0" }}>
              {l}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function renderChartTooltip(p: ChartTooltipProps) {
  return <ChartTooltip {...p} />;
}
