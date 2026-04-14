"use client";

import { GlassCard } from "@/components/ui/glass-card";
import type { FleetStatus } from "@/types/fleet";

interface FleetStatusProps {
  fs: FleetStatus | null;
  lastUpdated: string | null;
  live: boolean;
}

export function FleetStatusCards({ fs, lastUpdated, live }: FleetStatusProps) {
  const s = fs || { totalFleetCount: 430, cybercabCount: 35, unsupervisedCount: 8 };
  return (
    <>
      <div
        className="flex items-center gap-2 mb-3.5 w-fit rounded-[10px]"
        style={{
          padding: "6px 12px",
          background: "rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <span
          className="rounded-full animate-pulse-glow"
          style={{
            width: 7,
            height: 7,
            background: live ? "#00f0ff" : "#6366f1",
          }}
        />
        <span className="font-bold text-[10px]" style={{ color: live ? "#00f0ff" : "#818cf8" }}>
          {live ? "LIVE" : "CACHED"}
        </span>
        <span className="text-[9px]" style={{ color: "#334155" }}>
          {lastUpdated ? "Updated " + lastUpdated : "fallback data"}
        </span>
      </div>
      <div className="flex gap-2.5 flex-wrap mb-4">
        <GlassCard
          label="Total Fleet"
          value={s.totalFleetCount.toLocaleString()}
          sub={live ? "robotaxitracker.com" : "cached"}
          color="#00f0ff"
        />
        <GlassCard label="Cybercabs" value={s.cybercabCount} sub="test vehicles" color="#f97316" />
        <GlassCard label="Unsupervised" value={s.unsupervisedCount} sub="no safety monitor" color="#a855f7" />
      </div>
    </>
  );
}
