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
import { GP_BUILD } from "@/data/projections";
import type { GrossProfitComposition } from "@/data/projections";

function GPTooltip(p: { active?: boolean; payload?: Array<{ payload: GrossProfitComposition }> }) {
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
        {d.year} | ${(t / 1000).toFixed(0)}B GP
      </div>
      <div className="text-[11px]" style={{ color: "#3b82f6" }}>Auto: ${(d.auto / 1000).toFixed(1)}B</div>
      <div className="text-[11px]" style={{ color: "#f97316" }}>Energy: ${(d.energy / 1000).toFixed(1)}B</div>
      <div className="text-[11px]" style={{ color: "#67e8f9" }}>Services: ${(d.svc / 1000).toFixed(1)}B</div>
      {d.robotaxi > 0 && (
        <div className="text-[11px] font-bold" style={{ color: "#22c55e" }}>
          Robotaxi: ${(d.robotaxi / 1000).toFixed(0)}B ({((d.robotaxi / t) * 100).toFixed(0)}%)
        </div>
      )}
    </div>
  );
}

export function GrossProfitBuild() {
  return (
    <Panel
      title="Gross Profit by Segment"
      sub="Robotaxi at 72% blended margins dominates profitability by 2028"
      accent="rgba(34,197,94,0.25)"
    >
      <ResponsiveContainer width="100%" height={220}>
        <BarChart syncId="th" data={GP_BUILD} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barSize={38}>
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
          <Tooltip content={<GPTooltip />} />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
          <Bar dataKey="auto" name="Auto" stackId="g" fill="#3b82f6" />
          <Bar dataKey="energy" name="Energy" stackId="g" fill="#f97316" />
          <Bar dataKey="svc" name="Services" stackId="g" fill="#67e8f9" />
          <Bar dataKey="robotaxi" name="Robotaxi" stackId="g" fill="#22c55e" radius={[3, 3, 0, 0] as [number, number, number, number]} />
        </BarChart>
      </ResponsiveContainer>

      <div
        className="mt-2.5 rounded-[10px]"
        style={{
          padding: "12px 14px",
          background: "rgba(34,197,94,0.04)",
          border: "1px solid rgba(34,197,94,0.1)",
        }}
      >
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div>
            <div className="text-[9px] uppercase tracking-[1px] font-semibold" style={{ color: "#64748b" }}>Gross Profit Today</div>
            <div className="text-xl font-black" style={{ color: "#94a3b8" }}>$17B</div>
          </div>
          <div className="text-xl" style={{ color: "#475569" }}>&rarr;</div>
          <div className="text-right">
            <div className="text-[9px] uppercase tracking-[1px] font-semibold" style={{ color: "#22c55e" }}>2030E Gross Profit</div>
            <div className="text-xl font-black" style={{ color: "#22c55e" }}>
              $139B <span className="text-[11px]" style={{ color: "#34d399" }}>8x</span>
            </div>
          </div>
        </div>
        <div className="mt-2 text-xs leading-normal" style={{ color: "#cbd5e1" }}>
          Robotaxi generates <span className="font-extrabold" style={{ color: "#22c55e" }}>$108B in gross profit</span> by 2030 &mdash; 6x Tesla&rsquo;s entire current profit.
        </div>
        <div className="mt-1.5 text-[10px] leading-normal" style={{ color: "#94a3b8" }}>
          Combined with auto, energy, and services, total GP reaches $139B. Blended company GM rises to ~47% as robotaxi (72% GM) becomes half of revenue while auto holds at 18%.
        </div>
      </div>
    </Panel>
  );
}
