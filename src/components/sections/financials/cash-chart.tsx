"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Panel } from "@/components/ui/panel";
import { renderChartTooltip } from "@/components/ui/chart-tooltip";
import type { CashData } from "@/types/financials";

interface CashChartProps {
  data: CashData[];
}

export function CashChart({ data }: CashChartProps) {
  return (
    <Panel
      title="Cash, Equivalents & Investments"
      sub="Balance sheet strength funding the autonomy bet"
      accent="rgba(52,211,153,0.25)"
    >
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart syncId="f" data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="cash"
            name="Cash"
            stroke="#34d399"
            strokeWidth={2.5}
            fill="url(#cg)"
            dot={false}
            activeDot={{ r: 4, fill: "#34d399", stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Panel>
  );
}
