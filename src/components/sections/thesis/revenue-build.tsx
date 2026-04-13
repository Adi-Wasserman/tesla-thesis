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
import { REVENUE_BUILD } from "@/data/projections";
import type { RevenueComposition } from "@/data/projections";

function RevTooltip(p: { active?: boolean; payload?: Array<{ payload: RevenueComposition }> }) {
  if (!p.active || !p.payload || !p.payload.length) return null;
  const d = p.payload[0].payload;
  const t = d.auto + d.energy + d.svc + d.robotaxi;
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
        {d.year} | ${(t / 1000).toFixed(0)}B total
      </div>
      <div className="text-[11px]" style={{ color: "#3b82f6" }}>
        Auto: ${(d.auto / 1000).toFixed(0)}B ({((d.auto / t) * 100).toFixed(0)}%)
      </div>
      <div className="text-[11px]" style={{ color: "#f97316" }}>
        Energy: ${(d.energy / 1000).toFixed(0)}B ({((d.energy / t) * 100).toFixed(0)}%)
      </div>
      <div className="text-[11px]" style={{ color: "#67e8f9" }}>
        Services: ${(d.svc / 1000).toFixed(0)}B ({((d.svc / t) * 100).toFixed(0)}%)
      </div>
      <div className="text-[11px] font-bold" style={{ color: "#22c55e" }}>
        Robotaxi: {d.robotaxi >= 1000 ? "$" + (d.robotaxi / 1000).toFixed(0) + "B" : "$" + d.robotaxi + "M"} ({((d.robotaxi / t) * 100).toFixed(0)}%)
      </div>
    </div>
  );
}

export function RevenueBuild() {
  return (
    <Panel
      title="Revenue Composition"
      sub="Robotaxi becomes the largest segment by 2029"
      accent="rgba(99,102,241,0.25)"
    >
      <ResponsiveContainer width="100%" height={220}>
        <BarChart syncId="th" data={REVENUE_BUILD} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barSize={38}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
          <XAxis
            dataKey="year"
            tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 600 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
          />
          <YAxis
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            tickFormatter={(v: number) => "$" + (v / 1000).toFixed(0) + "B"}
          />
          <Tooltip content={<RevTooltip />} />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
          <Bar dataKey="auto" name="Automotive" stackId="r" fill="#3b82f6" />
          <Bar dataKey="energy" name="Energy" stackId="r" fill="#f97316" />
          <Bar dataKey="svc" name="Services" stackId="r" fill="#67e8f9" />
          <Bar dataKey="robotaxi" name="Robotaxi" stackId="r" fill="#22c55e" radius={[3, 3, 0, 0] as [number, number, number, number]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-2 rounded-md" style={{ padding: "6px 10px", background: "rgba(0,0,0,0.1)" }}>
        <div className="text-[9px] leading-normal" style={{ color: "#475569" }}>
          Auto assumes modest unit growth offset by ASP compression. Energy continues its 3-year 3x growth trend at 32% margins.
        </div>
      </div>
    </Panel>
  );
}
