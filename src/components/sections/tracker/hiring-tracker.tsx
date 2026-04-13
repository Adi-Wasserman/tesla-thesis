"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Panel } from "@/components/ui/panel";

const CATEGORIES = [
  {
    cat: "Fleet Ops & Vehicle Operators",
    count: "~30+",
    roles: "AI Safety Operator, Robotaxi Ops Manager, Data Collection Supervisor",
    locs: "12+ US cities, 7 states + 20 countries",
    color: "#34d399",
  },
  {
    cat: "Teleoperation & Remote Support",
    count: "~8-10",
    roles: "C++ Engineer Teleoperation ($120-318K), Fleet Support Supervisor (Night Shift)",
    locs: "Palo Alto, Miami",
    color: "#34d399",
  },
  {
    cat: "Software & Hardware Engineering",
    count: "~10-15",
    roles: "Electronic Systems Integration, Code Hardening, PCB Layout, Business Analyst",
    locs: "Palo Alto, Austin, Remote",
    color: "#34d399",
  },
  {
    cat: "Global Production",
    count: "~5-8",
    roles: "Sr. Electrical Design Engineer (Robotaxi) at Giga Berlin, Intl Vehicle Operators",
    locs: "Giga Berlin + 20 countries",
    color: "#34d399",
  },
];

export function HiringTracker() {
  return (
    <>
      <div className="flex gap-2.5 flex-wrap mb-3.5">
        <GlassCard small label="Robotaxi Roles" value="50+" color="#34d399" />
        <GlassCard small label="US Cities" value="12+" color="#00f0ff" />
        <GlassCard small label="Countries" value="20" color="#a855f7" />
        <GlassCard small label="Operations" value="24/7" color="#f97316" />
      </div>

      <Panel title="Open Positions by Category" sub="From tesla.com/careers" accent="rgba(52,211,153,0.25)">
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((h, i) => (
            <div
              key={i}
              className="rounded-[10px]"
              style={{
                padding: "10px 12px",
                background: "rgba(0,0,0,0.2)",
                border: `1px solid ${h.color}10`,
              }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold" style={{ color: "#e2e8f0" }}>
                  {h.cat}
                </span>
                <span className="text-[11px] font-extrabold" style={{ color: h.color }}>
                  {h.count}
                </span>
              </div>
              <div className="text-[10px] leading-snug" style={{ color: "#94a3b8" }}>
                <span className="font-semibold" style={{ color: "#64748b" }}>Roles: </span>
                {h.roles}
              </div>
              <div className="text-[10px]" style={{ color: "#94a3b8" }}>
                <span className="font-semibold" style={{ color: "#64748b" }}>Locations: </span>
                {h.locs}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-2.5 flex justify-between items-center"
          style={{ padding: "8px 12px", borderTop: "1px solid rgba(52,211,153,0.08)" }}
        >
          <span className="text-[9px]" style={{ color: "#64748b" }}>Updated daily</span>
          <a
            href="https://www.tesla.com/careers/search/?query=robotaxi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-bold no-underline rounded-[5px]"
            style={{
              color: "#34d399",
              padding: "3px 10px",
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.15)",
              textDecoration: "none",
            }}
          >
            tesla.com/careers &rarr;
          </a>
        </div>
      </Panel>
    </>
  );
}
