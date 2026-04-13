"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Panel } from "@/components/ui/panel";
import { FLEET_REVENUE } from "@/data/projections";
import type { FleetRevenueProjection } from "@/data/projections";

function FleetTooltip(p: { active?: boolean; payload?: Array<{ payload: FleetRevenueProjection }> }) {
  if (!p.active || !p.payload || !p.payload.length) return null;
  const d = p.payload[0].payload;
  return (
    <div
      className="rounded-[10px]"
      style={{
        background: "rgba(5,10,20,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "10px 14px",
      }}
    >
      <div className="text-[11px] font-bold mb-1" style={{ color: "#94a3b8" }}>
        {d.year} &mdash; {d.phase}
      </div>
      <div className="text-[11px]" style={{ color: "#00f0ff" }}>
        Fleet:{" "}
        {d.fleet >= 1000000
          ? (d.fleet / 1000000).toFixed(1) + "M"
          : d.fleet >= 1000
            ? (d.fleet / 1000).toFixed(0) + "K"
            : d.fleet}
      </div>
      <div className="text-[11px]" style={{ color: "#22c55e" }}>
        Revenue: {d.rev >= 1000 ? "$" + (d.rev / 1000).toFixed(0) + "B" : "$" + d.rev + "M"}
      </div>
    </div>
  );
}

export function FleetToRevenue() {
  return (
    <Panel
      title="Projected Fleet & Revenue Ramp"
      sub="Fleet = owned Cybercabs + owner-operator network vehicles"
      accent="rgba(0,240,255,0.25)"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={FLEET_REVENUE} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
          <XAxis
            dataKey="year"
            tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 600 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
          />
          <YAxis
            yAxisId="r"
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            tickFormatter={(v: number) => (v >= 1000 ? "$" + (v / 1000).toFixed(0) + "B" : "$" + v + "M")}
          />
          <YAxis
            yAxisId="f"
            orientation="right"
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            tickFormatter={(v: number) => (v >= 1000 ? (v / 1000).toFixed(0) + "K" : String(v))}
          />
          <Tooltip content={<FleetTooltip />} />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
          <Bar yAxisId="r" dataKey="rev" name="Robotaxi Revenue" fill="#22c55e" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.85} />
          <Bar yAxisId="f" dataKey="fleet" name="Fleet Size" fill="#00f0ff" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.45} />
        </BarChart>
      </ResponsiveContainer>

      <div
        className="flex gap-2 flex-wrap mt-2.5 pt-2.5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        {[
          { l: "2027", v: "$15B", c: "#fbbf24", n: "Early Scale" },
          { l: "2028", v: "$50B", c: "#f97316", n: "Breakout" },
          { l: "2030", v: "$150B", c: "#22c55e", n: "Platform" },
        ].map((m, i) => (
          <div key={i} className="flex-[1_1_70px] rounded-lg" style={{ padding: "7px 9px", background: "rgba(0,0,0,0.2)" }}>
            <div className="text-[8px] uppercase tracking-[1px] font-semibold" style={{ color: "#64748b" }}>{m.l}</div>
            <div className="text-sm font-extrabold" style={{ color: m.c }}>{m.v}</div>
            <div className="text-[8px]" style={{ color: "#475569" }}>{m.n}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-md" style={{ padding: "8px 12px", background: "rgba(0,0,0,0.1)" }}>
        <div className="text-[9px] italic" style={{ color: "#475569" }}>
          Early bars are small by design &mdash; this is the S-curve. Slow at first, then exponential.
          The same pattern played out with Model 3 production in 2017-2018.
        </div>
      </div>
    </Panel>
  );
}
