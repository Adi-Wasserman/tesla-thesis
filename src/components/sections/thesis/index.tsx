"use client";

import { useWidth } from "@/lib/use-width";
import { SectionHeader } from "@/components/ui/section-header";
import { FleetToRevenue } from "./fleet-to-revenue";
import { RevenueBuild } from "./revenue-build";
import { GrossProfitBuild } from "./gross-profit-build";
import { ArkComparison } from "./ark-comparison";
import { DoneBefore } from "./done-before";

interface ThesisSectionProps {
  fleetCount: number;
}

export function ThesisSection({ fleetCount }: ThesisSectionProps) {
  const w = useWidth();
  const mob = w < 640;

  return (
    <div>
      {/* Roadmap steps */}
      <div
        className="flex flex-wrap mb-[22px] rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(10,15,30,0.9), rgba(20,30,50,0.5))",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {[
          { i: "\uD83D\uDE97", t: "Sell Cars", d: "$96B rev, 18% margin", c: "#64748b" },
          { i: "\uD83E\uDD16", t: "Build Fleet", d: `${fleetCount} today \u2192 3M by 2030`, c: "#f97316" },
          { i: "\uD83D\uDCB0", t: "Mobility Platform", d: "$150B rev, 72% margin by 2030", c: "#22c55e" },
        ].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2"
            style={{
              flex: mob ? "1 1 100%" : "1",
              padding: "12px 14px",
              borderRight: !mob && i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
              borderBottom: mob && i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}
          >
            <span className="text-lg">{c.i}</span>
            <div>
              <div className="text-[11px] font-extrabold" style={{ color: c.c }}>{c.t}</div>
              <div className="text-[9px]" style={{ color: "#94a3b8" }}>{c.d}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader
        icon={"\u25B2"}
        title="Fleet Scale to Revenue"
        sub={`From ${fleetCount} vehicles today to 3M fleet generating $150B`}
        color="#00f0ff"
      />

      <FleetToRevenue />

      {/* Fleet scaling explainer */}
      <div
        className="rounded-xl mb-[18px]"
        style={{
          padding: "14px 16px",
          background: "linear-gradient(135deg, rgba(0,240,255,0.03), rgba(10,15,30,0.95))",
          border: "1px solid rgba(0,240,255,0.08)",
        }}
      >
        <div className="text-xs font-extrabold mb-2" style={{ color: "#00f0ff" }}>
          How the fleet scales from 15K to 3M
        </div>
        <div
          className="gap-2.5"
          style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr 1fr" }}
        >
          {[
            {
              t: "Model 3 Precedent",
              d: "260 units (Q3 2017) \u2192 5,000/week (mid-2018) \u2014 75x production rate increase in under a year. Nearly went bankrupt, came out building the best-selling EV in the US.",
            },
            {
              t: "Unboxed Manufacturing",
              d: "5 modules built in parallel, gigacasting cuts parts from 200+ to 80. Target: 1 Cybercab every 5\u201310 sec (vs 34s for Model Y). Goal: 2\u20134M units/yr per factory.",
            },
            {
              t: "Owner-Operator Network",
              d: "2.5M+ existing FSD-capable Teslas become fleet supply once unsupervised approval scales. This is the step function that requires zero manufacturing.",
            },
          ].map((x, i) => (
            <div key={i} className="rounded-lg" style={{ padding: "10px 12px", background: "rgba(0,0,0,0.2)" }}>
              <div className="text-[10px] font-bold mb-0.5" style={{ color: "#e2e8f0" }}>{x.t}</div>
              <div className="text-[10px] leading-normal" style={{ color: "#94a3b8" }}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader
        icon={"\uD83D\uDCB0"}
        title="Where the Profit Comes From"
        sub="Revenue and profit projections by segment through 2030"
        color="#22c55e"
      />

      <RevenueBuild />
      <GrossProfitBuild />

      <div className="text-xs leading-normal mx-1 mb-2 italic" style={{ color: "#94a3b8" }}>
        Those numbers depend on a specific set of assumptions. Here&rsquo;s what the model requires.
      </div>

      <SectionHeader
        icon="$"
        title="The Math Behind It"
        sub="Fleet composition, unit economics, and the margin engine"
        color="#22c55e"
      />

      {/* Fleet Composition & Margin Model */}
      <div
        className="rounded-xl mb-4"
        style={{
          padding: "14px 16px",
          background: "linear-gradient(135deg, rgba(34,197,94,0.04), rgba(10,15,30,0.95))",
          border: "1px solid rgba(34,197,94,0.12)",
        }}
      >
        <div className="text-[9px] uppercase tracking-[1.5px] font-bold mb-2" style={{ color: "#22c55e" }}>
          Fleet Composition &amp; Margin Model &mdash; 2030E
        </div>
        <div className="gap-2.5" style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr" }}>
          <div className="rounded-[10px]" style={{ padding: "12px 14px", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(34,197,94,0.1)" }}>
            <div className="flex justify-between items-center mb-1.5">
              <div className="text-xs font-bold" style={{ color: "#e2e8f0" }}>Tesla Fleet (1.5M)</div>
              <div className="text-lg font-black" style={{ color: "#22c55e" }}>~68%</div>
            </div>
            <div className="text-[10px] leading-normal" style={{ color: "#94a3b8" }}>
              Revenue: ~$100B | Tesla keeps 100% of $0.50/mi avg fare. Op cost ~$0.16/mi (electricity, depreciation, insurance, maintenance, teleops). ~100K mi/vehicle/yr.
            </div>
          </div>
          <div className="rounded-[10px]" style={{ padding: "12px 14px", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(168,85,247,0.1)" }}>
            <div className="flex justify-between items-center mb-1.5">
              <div className="text-xs font-bold" style={{ color: "#e2e8f0" }}>Owner-Operator (1.5M)</div>
              <div className="text-lg font-black" style={{ color: "#a855f7" }}>~80%</div>
            </div>
            <div className="text-[10px] leading-normal" style={{ color: "#94a3b8" }}>
              Revenue: ~$50B | Tesla takes 40% of gross fares from private Teslas and third-party fleet operators (e.g. rental/fleet companies buying Teslas for robotaxi). Vehicle costs borne by owner. ~60K mi/vehicle/yr avg.
            </div>
          </div>
        </div>
        <div className="mt-2.5 rounded-lg" style={{ padding: "10px 12px", background: "rgba(0,0,0,0.15)" }}>
          <div className="flex justify-between flex-wrap gap-1.5">
            <span className="text-[11px]" style={{ color: "#94a3b8" }}>
              Blended: $150B rev | <span className="font-extrabold" style={{ color: "#22c55e" }}>72% GM</span>
            </span>
            <span className="text-[10px]" style={{ color: "#475569" }}>
              ARK models ~$756B rev at ~90% margins (2029)
            </span>
          </div>
        </div>
      </div>

      {/* Unit economics cards */}
      <div
        className="gap-2.5 mb-4"
        style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "1fr 1fr 1fr 1fr" }}
      >
        {[
          { l: "Avg Consumer Fare", v: "$0.50/mi", c: "#22c55e", d: "82% cheaper than Uber" },
          { l: "Tesla Op Cost", v: "$0.16/mi", c: "#00f0ff", d: "Owned fleet at scale" },
          { l: "Cybercab Payback", v: "~1 Year", c: "#f97316", d: "<$30K COGS, ~$50K rev/yr" },
          { l: "Network Take Rate", v: "40%", c: "#a855f7", d: "Tesla's cut on owner rides" },
        ].map((m, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl"
            style={{
              padding: "14px 14px",
              background: "linear-gradient(135deg, rgba(10,15,30,0.95), rgba(20,30,50,0.7))",
              border: `1px solid ${m.c}18`,
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${m.c}44, transparent)` }}
            />
            <div className="text-[8px] uppercase tracking-[1.5px] font-semibold" style={{ color: "#64748b" }}>{m.l}</div>
            <div className="text-[22px] font-black leading-tight my-1" style={{ color: m.c }}>{m.v}</div>
            <div className="text-[9px] leading-snug" style={{ color: "#94a3b8" }}>{m.d}</div>
          </div>
        ))}
      </div>

      {/* Pricing note */}
      <div
        className="rounded-lg mb-4"
        style={{ padding: "10px 14px", background: "rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.03)" }}
      >
        <div className="text-[10px] leading-normal" style={{ color: "#94a3b8" }}>
          Note: $0.50/mi is the mature-state average, not the launch price. Tesla could charge $1.00+/mi initially (still 65% cheaper than Uber) and compress pricing as fleet utilization scales &mdash; implying stronger near-term revenue than our model assumes.
        </div>
      </div>

      <SectionHeader
        icon={"\u26A0\uFE0F"}
        title="Key Risks & Mitigants"
        sub="What could go wrong and how Tesla is positioned"
        color="#f87171"
      />

      {/* Risk cards */}
      <div
        className="gap-2.5 mb-3.5"
        style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr" }}
      >
        {[
          {
            r: "Regulatory delays",
            d: "Level 4 not yet achieved. City-by-city approval.",
            m: "40 US states allow AVs. Waymo/Cruise paved the path. Unsupervised rides already in Austin.",
          },
          {
            r: "FSD: the binary gate",
            d: "The entire $150B model requires unsupervised approval at scale. If it doesn\u2019t happen by 2027-2028, the model breaks.",
            m: "The software is improving ~17x per 18 months in safety metrics. Unsupervised rides are already live in Austin since January 2026. The question is no longer if \u2014 it\u2019s how fast approval scales.",
          },
          {
            r: "Cybercab production ramp",
            d: "New vehicle, new process. Musk warns early production 'agonizingly slow.'",
            m: "Giga Texas line. Unboxed manufacturing. 2.5M+ existing FSD-capable vehicles bridge the gap via owner-operator network.",
          },
          {
            r: "Valuation prices in success",
            d: "~$1.25T cap at ~190x forward earnings.",
            m: "At $150B rev and 72% margins = $108B GP. At 25x GP, robotaxi alone justifies $2.7T. Still conservative vs ARK's $9T.",
          },
        ].map((x, i) => (
          <div
            key={i}
            className="rounded-[10px]"
            style={{ padding: 12, background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-xs font-bold mb-0.5" style={{ color: "#e2e8f0" }}>{x.r}</div>
            <div className="text-[10px] leading-snug mb-1.5" style={{ color: "#94a3b8" }}>{x.d}</div>
            <div
              className="rounded-md"
              style={{
                padding: "6px 8px",
                background: "rgba(34,197,94,0.04)",
                border: "1px solid rgba(34,197,94,0.08)",
              }}
            >
              <div className="text-[8px] uppercase tracking-[1px] font-bold mb-px" style={{ color: "#22c55e" }}>
                Mitigant
              </div>
              <div className="text-[10px] leading-snug" style={{ color: "#cbd5e1" }}>{x.m}</div>
            </div>
          </div>
        ))}
      </div>

      <ArkComparison />
      <DoneBefore />
    </div>
  );
}
