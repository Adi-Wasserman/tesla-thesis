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
import { renderChartTooltip } from "@/components/ui/chart-tooltip";
import type { QuarterlyData } from "@/types/financials";

interface ProfitVsOpexProps {
  data: QuarterlyData[];
}

export function ProfitVsOpex({ data }: ProfitVsOpexProps) {
  return (
    <Panel
      title="Gross Profit vs Operating Expenses"
      sub="OpEx rising as Tesla invests in AI, robotics, and autonomy"
      accent="rgba(167,139,250,0.25)"
    >
      <ResponsiveContainer width="100%" height={260}>
        <BarChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barGap={3}>
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
            tickFormatter={(v: number) => "$" + (v / 1000).toFixed(0) + "B"}
          />
          <Tooltip content={renderChartTooltip} />
          <Legend wrapperStyle={{ fontSize: 10, paddingTop: 6 }} />
          <Bar dataKey="gp" name="Gross Profit" fill="#818cf8" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.85} />
          <Bar dataKey="opex" name="OpEx" fill="#f87171" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.7} />
        </BarChart>
      </ResponsiveContainer>
    </Panel>
  );
}
