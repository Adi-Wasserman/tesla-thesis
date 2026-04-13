"use client";

import { useMemo } from "react";
import { FGD } from "@/data/fleet-growth";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { FleetStatusCards } from "./fleet-status";
import { FsdMiles } from "./fsd-miles";
import { FleetGrowthChart } from "./fleet-growth-chart";
import { CybercabCard } from "./cybercab-card";
import { ExpansionMap } from "./expansion-map";
import { HiringTracker } from "./hiring-tracker";
import type { FleetStatus } from "@/types/fleet";

interface ProgramSectionProps {
  fs: FleetStatus | null;
  lastUpdated: string | null;
  live: boolean;
}

export function ProgramSection({ fs, lastUpdated, live }: ProgramSectionProps) {
  const s = fs || { totalFleetCount: 430, cybercabCount: 35, unsupervisedCount: 8, austinCount: null, bayAreaCount: null };

  const gd = useMemo(() => {
    const b = FGD.map((d) => ({ austin: d.austin, bayArea: d.bayArea, label: d.label }));
    if (live && s.totalFleetCount) {
      const l = b[b.length - 1];
      if (s.austinCount !== null && s.bayAreaCount !== null) {
        b[b.length - 1] = { label: "Now", austin: s.austinCount, bayArea: s.bayAreaCount };
      } else {
        const r = s.totalFleetCount / (l.austin + l.bayArea);
        b[b.length - 1] = {
          label: "Now",
          austin: Math.round(l.austin * r),
          bayArea: Math.round(l.bayArea * r),
        };
      }
    }
    return b;
  }, [live, s.totalFleetCount, s.austinCount, s.bayAreaCount]);

  return (
    <div>
      <SectionHeader
        icon={"\u25CF"}
        title="Where We Are"
        sub="The robotaxi fleet is live and growing exponentially"
        color="#00f0ff"
      />

      <FleetStatusCards fs={fs} lastUpdated={lastUpdated} live={live} />
      <FsdMiles />
      <FleetGrowthChart data={gd} />

      <div className="text-xs leading-normal mx-1 mb-2 italic" style={{ color: "#94a3b8" }}>
        The current fleet runs on Model Y. The Cybercab is what makes the unit economics work at scale.
      </div>

      <SectionHeader
        icon={"\u25C6"}
        title="What's Coming"
        sub="Cybercab production starts April 2026 — 7 new cities launching H1 2026"
        color="#f97316"
      />

      <CybercabCard cybercabCount={s.cybercabCount} />

      <div className="my-4">
        <div className="text-xs leading-normal italic mb-3.5" style={{ color: "#94a3b8" }}>
          Production solves supply. Geographic expansion solves demand.
        </div>
        <div className="text-[15px] font-extrabold mb-1" style={{ color: "#a855f7" }}>
          Expansion Map
        </div>
        <div className="text-xs mb-3" style={{ color: "#94a3b8" }}>
          Active markets and planned cities for H1 2026
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap mb-3.5">
        <GlassCard small label="Active" value="2" sub="Austin + Bay Area" color="#00f0ff" />
        <GlassCard small label="Planned" value="7" sub="H1 2026" color="#a855f7" />
        <GlassCard small label="Total" value="9" sub="by mid-2026" color="#6366f1" />
      </div>

      <div className="mb-[18px]">
        <ExpansionMap />
      </div>

      <SectionHeader
        icon={"\uD83D\uDCCB"}
        title="How We Know It's Real"
        sub="50+ active job postings across 20 countries reveal the scaling roadmap"
        color="#34d399"
      />

      <HiringTracker />
    </div>
  );
}
