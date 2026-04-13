"use client";

import { useWidth } from "@/lib/use-width";

const ROWS = [
  ["", "My 2030E", "ARK 2029"],
  ["Robotaxi Rev", "$150B", "$756B"],
  ["Total Rev", "$300B", "$1.2T"],
  ["Robotaxi GM", "72%", "~90%"],
  ["Total GP/EBITDA", "$139B GP", "$440B EBITDA"],
  ["Fleet", "3M", "Tens of millions"],
  ["Take Rate", "40% network", "80% avg"],
  ["Implied Mkt Cap", "$2.7T+ (25x GP)", "$9T+ (~20x EBITDA)"],
];

export function ArkComparison() {
  const w = useWidth();
  const mob = w < 640;

  return (
    <div
      className="rounded-xl mb-3.5"
      style={{
        padding: "14px 16px",
        background: "linear-gradient(135deg, rgba(168,85,247,0.04), rgba(10,15,30,0.95))",
        border: "1px solid rgba(168,85,247,0.1)",
      }}
    >
      <div
        className="text-[9px] uppercase tracking-[1.5px] font-bold mb-2"
        style={{ color: "#a855f7" }}
      >
        My Model vs ARK Invest (2029/2030)
      </div>
      <div
        className="text-[11px]"
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "auto 1fr 1fr",
        }}
      >
        {ROWS.map((row, ri) => (
          <div key={ri} style={{ display: "contents" }}>
            {row.map((cell, ci) => (
              <div
                key={ci}
                style={{
                  padding: "6px 10px",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  fontWeight: ri === 0 ? 700 : ci === 0 ? 600 : 400,
                  color: ri === 0 ? "#a855f7" : ci === 0 ? "#94a3b8" : ci === 1 ? "#22c55e" : "#f97316",
                  background: ri === 0 ? "rgba(168,85,247,0.06)" : "transparent",
                  fontSize: ri === 0 ? 9 : 11,
                  textTransform: ri === 0 ? "uppercase" : "none",
                  letterSpacing: ri === 0 ? 1 : 0,
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] leading-normal" style={{ color: "#94a3b8" }}>
        My model is the moderate bull case &mdash; 5x current revenue, 8x current profit. ARK&rsquo;s
        base case requires $756B in robotaxi revenue from near-zero in 4 years (17x Uber&rsquo;s global
        revenue). The truth likely falls between the two.
      </div>
    </div>
  );
}
