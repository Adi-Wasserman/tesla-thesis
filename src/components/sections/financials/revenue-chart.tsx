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

interface RevenueChartProps {
  data: QuarterlyData[];
  barSize: number;
}

export function RevenueChart({ data, barSize }: RevenueChartProps) {
  return (
    <Panel
      title="Revenue by Segment"
      sub="Automotive dominant but flat — Energy and Services growing"
      accent="rgba(96,165,250,0.25)"
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }} barSize={barSize}>
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
          <Bar dataKey="autoRev" name="Automotive" stackId="r" fill="#3b82f6" />
          <Bar dataKey="energyRev" name="Energy" stackId="r" fill="#f97316" />
          <Bar dataKey="svcRev" name="Services" stackId="r" fill="#67e8f9" radius={[3, 3, 0, 0] as [number, number, number, number]} />
        </BarChart>
      </ResponsiveContainer>
    </Panel>
  );
}
