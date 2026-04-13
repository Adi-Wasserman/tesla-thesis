"use client";

import { useWidth } from "@/lib/use-width";

const METRICS = [
  { l: "Revenue", a: "$96B", b: "$300B" },
  { l: "Gross Profit", a: "$17B", b: "$139B" },
  { l: "Gross Margin", a: "18%", b: "~47%" },
  { l: "Robotaxi Revenue", a: "$0", b: "$150B" },
];

export function Hero() {
  const w = useWidth();
  const mob = w < 640;

  if (mob) {
    return (
      <div className="mb-[22px]">
        <div
          className="relative overflow-hidden rounded-[14px]"
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
            padding: "16px",
            border: "1px solid rgba(100,116,139,0.15)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(100,116,139,0.3), transparent)" }}
          />
          <div className="flex justify-between mb-2.5">
            <div className="text-[9px] uppercase tracking-[2px] font-bold" style={{ color: "#64748b" }}>
              Today (2025)
            </div>
            <div className="text-[9px] uppercase tracking-[2px] font-bold" style={{ color: "#22c55e" }}>
              2030E
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {METRICS.map((x, i) => (
              <div
                key={i}
                className="flex justify-between items-baseline"
                style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}
              >
                <div>
                  <div className="text-[8px] uppercase tracking-[1px] font-semibold" style={{ color: "#475569" }}>
                    {x.l}
                  </div>
                  <div className="text-base font-black" style={{ color: x.a === "$0" ? "#334155" : "#94a3b8" }}>
                    {x.a}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-black" style={{ color: "#22c55e" }}>
                    {x.b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 mb-[22px]">
      <div
        className="relative overflow-hidden rounded-[14px]"
        style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          padding: "18px",
          border: "1px solid rgba(100,116,139,0.15)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(100,116,139,0.3), transparent)" }}
        />
        <div className="text-[9px] uppercase tracking-[2px] font-bold mb-3" style={{ color: "#64748b" }}>
          Tesla Today (2025)
        </div>
        {METRICS.map((x, i) => (
          <div key={i} className="mb-2.5">
            <div className="text-[8px] uppercase tracking-[1px] font-semibold" style={{ color: "#475569" }}>
              {x.l}
            </div>
            <div
              className="font-black leading-tight"
              style={{
                fontSize: i === 0 ? 26 : 18,
                color: x.a === "$0" ? "#334155" : "#94a3b8",
              }}
            >
              {x.a}
            </div>
          </div>
        ))}
        <div className="text-[10px] italic" style={{ color: "#475569" }}>
          Car company. One-time hardware sales.
        </div>
      </div>
      <div
        className="relative overflow-hidden rounded-[14px]"
        style={{
          background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(10,15,30,0.9))",
          padding: "18px",
          border: "1px solid rgba(34,197,94,0.15)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }}
        />
        <div className="text-[9px] uppercase tracking-[2px] font-bold mb-3" style={{ color: "#22c55e" }}>
          Tesla 2030E (Projected)
        </div>
        {METRICS.map((x, i) => (
          <div key={i} className="mb-2.5">
            <div className="text-[8px] uppercase tracking-[1px] font-semibold" style={{ color: "#34d399" }}>
              {x.l}
            </div>
            <div
              className="font-black leading-tight"
              style={{ fontSize: i === 0 ? 26 : 18, color: "#22c55e" }}
            >
              {x.b}
            </div>
          </div>
        ))}
        <div className="text-[10px] italic" style={{ color: "#34d399" }}>
          Mobility platform. 8x profit growth.
        </div>
      </div>
    </div>
  );
}
