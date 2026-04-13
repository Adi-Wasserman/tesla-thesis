"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Panel } from "@/components/ui/panel";
import { renderChartTooltip } from "@/components/ui/chart-tooltip";
import type { QuarterlyData } from "@/types/financials";

interface MarginChartProps {
  data: QuarterlyData[];
}

export function MarginChart({ data }: MarginChartProps) {
  return (
    <Panel
      title="Gross Margin by Segment"
      sub="Auto compressing, Energy surging — this is why robotaxi matters"
      accent="rgba(59,130,246,0.25)"
    >
      <ResponsiveContainer width="100%" height={320}>
        <LineChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
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
            unit="%"
            domain={[-25, 40]}
          />
          <Tooltip content={renderChartTooltip} />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
          <ReferenceLine y={0} stroke="rgba(255,255,255,0.06)" />
          <Line
            type="monotone"
            dataKey="autoGM"
            name="Auto"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={{ r: 2, fill: "#3b82f6" }}
          />
          <Line
            type="monotone"
            dataKey="energyGM"
            name="Energy"
            stroke="#f97316"
            strokeWidth={2.5}
            dot={{ r: 2, fill: "#f97316" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Panel>
  );
}
