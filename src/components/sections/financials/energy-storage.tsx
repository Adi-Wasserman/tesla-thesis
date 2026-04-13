"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Panel } from "@/components/ui/panel";
import { renderChartTooltip } from "@/components/ui/chart-tooltip";
import type { QuarterlyData } from "@/types/financials";

interface EnergyStorageProps {
  data: QuarterlyData[];
}

export function EnergyStorage({ data }: EnergyStorageProps) {
  return (
    <Panel
      title="Energy Storage Deployed"
      sub="Tesla already built a second business from scratch — 15x growth in 5 years at 29% margins"
      accent="rgba(0,240,255,0.25)"
    >
      <ResponsiveContainer width="100%" height={260}>
        <BarChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
          <XAxis
            dataKey="q"
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
          />
          <YAxis
            tick={{ fill: "#475569", fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.06)" }}
            tickFormatter={(v: number) =>
              v >= 1000 ? (v / 1000).toFixed(1) + "GWh" : v + "MWh"
            }
          />
          <Tooltip content={renderChartTooltip} />
          <Bar
            dataKey="storage"
            name="Storage (MWh)"
            fill="#00f0ff"
            radius={[3, 3, 0, 0] as [number, number, number, number]}
            opacity={0.85}
          />
        </BarChart>
      </ResponsiveContainer>
    </Panel>
  );
}
