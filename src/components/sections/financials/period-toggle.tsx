"use client";

export type Period = "quarterly" | "annual";

interface PeriodToggleProps {
  period: Period;
  onChange: (p: Period) => void;
}

export function PeriodToggle({ period, onChange }: PeriodToggleProps) {
  return (
    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
      <div>
        <h3 className="m-0 text-base font-extrabold" style={{ color: "#f1f5f9" }}>
          Tesla Financials
        </h3>
        <p className="m-0 mt-0.5 text-[11px]" style={{ color: "#94a3b8" }}>
          Q4 2020 &mdash; Q4 2025 | SEC Filings (GAAP)
          <span className="ml-1 text-[9px]" style={{ color: "#475569" }}>
            Data through Q4 2025
          </span>
        </p>
      </div>
      <div
        className="flex gap-1 rounded-[10px]"
        style={{
          padding: 3,
          background: "rgba(5,10,20,0.6)",
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        {(["quarterly", "annual"] as const).map((x) => {
          const active = period === x;
          return (
            <button
              key={x}
              onClick={() => onChange(x)}
              className="rounded-[7px] border-none cursor-pointer text-[11px] font-bold"
              style={{
                padding: "6px 14px",
                background: active
                  ? "linear-gradient(135deg, rgba(0,240,255,0.12), rgba(99,102,241,0.08))"
                  : "transparent",
                color: active ? "#e2e8f0" : "#475569",
              }}
            >
              {x === "quarterly" ? "Quarterly" : "Annual"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
