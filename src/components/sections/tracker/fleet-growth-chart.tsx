"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Panel } from "@/components/ui/panel";

interface FleetGrowthPoint {
  austin: number;
  bayArea: number;
  label: string;
}

interface FleetGrowthChartProps {
  data: FleetGrowthPoint[];
}

function FleetGrowthTooltip(p: { active?: boolean; payload?: Array<{ dataKey: string; value: number }>; label?: string }) {
  if (!p.active || !p.payload || !p.payload.length) return null;
  const a = p.payload.find((x) => x.dataKey === "austin");
  const b = p.payload.find((x) => x.dataKey === "bayArea");
  const av = a ? a.value : 0;
  const bv = b ? b.value : 0;
  return (
    <div
      className="rounded-[10px]"
      style={{
        background: "rgba(15,23,42,0.95)",
        border: "1px solid rgba(255,255,255,0.1)",
        padding: "10px 14px",
      }}
    >
      <div className="text-[10px] mb-0.5" style={{ color: "#94a3b8" }}>{p.label}</div>
      <div className="text-[11px]" style={{ color: "#f87171" }}>Austin: {av}</div>
      <div className="text-[11px]" style={{ color: "#60a5fa" }}>Bay Area: {bv}</div>
      <div
        className="text-[13px] font-extrabold mt-0.5 pt-0.5"
        style={{ color: "#fff", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        Total: {av + bv}
      </div>
    </div>
  );
}

export function FleetGrowthChart({ data }: FleetGrowthChartProps) {
  return (
    <Panel title="Fleet Growth" sub="Cumulative vehicles tracked since launch">
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 8, right: 14, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
          <XAxis
            dataKey="label"
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
          />
          <YAxis
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            width={34}
          />
          <Tooltip content={<FleetGrowthTooltip />} />
          <Area
            type="monotone"
            dataKey="austin"
            stackId="1"
            stroke="#f87171"
            strokeWidth={2}
            fill="url(#ag)"
            name="Austin"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="bayArea"
            stackId="1"
            stroke="#60a5fa"
            strokeWidth={2}
            fill="url(#bg)"
            name="Bay Area"
            dot={false}
          />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
        </AreaChart>
      </ResponsiveContainer>
    </Panel>
  );
}
