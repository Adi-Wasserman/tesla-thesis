"use client";

import { useState } from "react";
import { Q, CASH_QUARTERLY } from "@/data/quarterly";
import { AN, CASH_ANNUAL } from "@/data/annual";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { PeriodToggle, type Period } from "./period-toggle";
import { MarginChart } from "./margin-chart";
import { RevenueChart } from "./revenue-chart";
import { ProfitVsOpex } from "./profit-vs-opex";
import { CashChart } from "./cash-chart";
import { EnergyStorage } from "./energy-storage";
import { CashFlowChart } from "./cash-flow-chart";
import type { CashData } from "@/types/financials";

export function FinSection() {
  const [p, setP] = useState<Period>("annual");
  const data = p === "quarterly" ? Q : AN;
  const bs = p === "quarterly" ? 20 : 50;
  const cashArr = p === "quarterly" ? CASH_QUARTERLY : CASH_ANNUAL;
  const cD: CashData[] = data.map((d, i) => ({
    ...d,
    cash: cashArr[i] || 0,
  }));

  return (
    <div>
      <PeriodToggle period={p} onChange={setP} />

      <SectionHeader
        icon={"\u26A0\uFE0F"}
        title="Why the Business Must Transform"
        sub="Auto margins fell from 33% to 18% — the core business needs a new growth engine"
        color="#f87171"
      />

      <MarginChart data={data} />
      <RevenueChart data={data} barSize={bs} />
      <ProfitVsOpex data={data} />

      <SectionHeader
        icon={"\uD83D\uDCB0"}
        title="The Foundation Funding the Bet"
        sub="$43.5B cash, record capex, and Energy proving the diversification playbook"
        color="#34d399"
      />

      <div className="flex gap-2.5 flex-wrap mb-3.5">
        <GlassCard label="Cash Position" value="$43.5B" sub="End of 2025" color="#34d399" />
        <GlassCard label="2026 CapEx" value="$20B+" sub="Record" color="#f87171" />
        <GlassCard label="Energy GM" value="29.3%" sub="2025" color="#f97316" />
        <GlassCard label="Energy Storage" value="15x" sub="growth 2020-25" color="#00f0ff" />
      </div>

      <CashChart data={cD} />
      <EnergyStorage data={data} />

      <div
        className="rounded-xl mb-[18px]"
        style={{
          padding: "14px 16px",
          background: "linear-gradient(135deg, rgba(0,240,255,0.03), rgba(10,15,30,0.95))",
          border: "1px solid rgba(0,240,255,0.1)",
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-sm">{"\uD83D\uDD04"}</span>
          <div className="text-[13px] font-extrabold" style={{ color: "#00f0ff" }}>
            Tesla Has Done This Before &mdash; Twice
          </div>
        </div>
        <div className="text-xs leading-relaxed mb-2.5" style={{ color: "#cbd5e1" }}>
          Tesla is the only company in the US &mdash; and arguably the world &mdash; to scale EVs
          profitably from zero. Every legacy OEM loses money on EVs (Ford&rsquo;s Model e: -$4.7B in
          2024). Every EV startup has either gone bankrupt or burns cash. Tesla built a $71B automotive
          business at 18% gross margins in a category everyone said was impossible to make money in.
        </div>
        <div className="text-xs leading-relaxed" style={{ color: "#cbd5e1" }}>
          Then they did it again: Energy went from $2B to $13B revenue in 3 years at 29% margins.
          Robotaxi is attempt #3 &mdash; same playbook:{" "}
          <span className="font-bold" style={{ color: "#22c55e" }}>
            new product &rarr; rapid scale &rarr; high-margin recurring revenue
          </span>
          . The difference is this time the margins are software-like, not hardware-bound.
        </div>
      </div>

      <CashFlowChart data={data} />
    </div>
  );
}
