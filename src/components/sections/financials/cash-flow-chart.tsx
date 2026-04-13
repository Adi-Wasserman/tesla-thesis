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
  ReferenceLine,
} from "recharts";
import { Panel } from "@/components/ui/panel";
import { renderChartTooltip } from "@/components/ui/chart-tooltip";
import type { QuarterlyData } from "@/types/financials";

interface CashFlowChartProps {
  data: QuarterlyData[];
}

export function CashFlowChart({ data }: CashFlowChartProps) {
  return (
    <Panel title="Cash Flow" sub="Operating CF, FCF, and CapEx" accent="rgba(99,102,241,0.25)">
      <ResponsiveContainer width="100%" height={240}>
        <BarChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barGap={2}>
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
          <ReferenceLine y={0} stroke="rgba(255,255,255,0.1)" />
          <Bar dataKey="opCF" name="Operating CF" fill="#6366f1" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.85} />
          <Bar dataKey="fcf" name="FCF" fill="#00f0ff" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.8} />
          <Bar dataKey="capex" name="CapEx" fill="#f87171" radius={[3, 3, 0, 0] as [number, number, number, number]} opacity={0.7} />
        </BarChart>
      </ResponsiveContainer>
    </Panel>
  );
}
