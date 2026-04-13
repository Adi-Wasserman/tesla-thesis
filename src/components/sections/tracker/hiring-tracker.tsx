"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Panel } from "@/components/ui/panel";
import { FALLBACK_CAREERS } from "@/data/careers";

export function HiringTracker() {
  const careers = FALLBACK_CAREERS;

  const lastFetched = careers.fetchedAt
    ? new Date(careers.fetchedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <>
      <div className="flex gap-2.5 flex-wrap mb-3.5">
        <GlassCard small label="Robotaxi Roles" value={careers.totalRoles} color="#34d399" />
        <GlassCard small label="US Cities" value={careers.usCities} color="#00f0ff" />
        <GlassCard small label="Countries" value={careers.countries} color="#a855f7" />
        <GlassCard small label="Operations" value={careers.operations} color="#f97316" />
      </div>

      <Panel title="Open Positions by Category" sub="From tesla.com/careers" accent="rgba(52,211,153,0.25)">
        <div className="flex flex-col gap-2">
          {careers.categories.map((h, i) => (
            <div
              key={i}
              className="rounded-[10px]"
              style={{
                padding: "10px 12px",
                background: "rgba(0,0,0,0.2)",
                border: "1px solid rgba(52,211,153,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold" style={{ color: "#e2e8f0" }}>
                  {h.cat}
                </span>
                <span className="text-[11px] font-extrabold" style={{ color: "#34d399" }}>
                  {h.count}
                </span>
              </div>
              <div className="text-[10px] leading-snug" style={{ color: "#94a3b8" }}>
                <span className="font-semibold" style={{ color: "#64748b" }}>
                  Roles:{" "}
                </span>
                {h.roles}
              </div>
              <div className="text-[10px]" style={{ color: "#94a3b8" }}>
                <span className="font-semibold" style={{ color: "#64748b" }}>
                  Locations:{" "}
                </span>
                {h.locs}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-2.5 flex justify-between items-center"
          style={{ padding: "8px 12px", borderTop: "1px solid rgba(52,211,153,0.08)" }}
        >
          <span className="text-[9px]" style={{ color: "#64748b" }}>
            {lastFetched ? `Updated ${lastFetched}` : "Updated daily"}
          </span>
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
