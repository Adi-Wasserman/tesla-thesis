interface BottomLineProps {
  fleetCount: number;
}

export function BottomLine({ fleetCount }: BottomLineProps) {
  const stats = [
    { n: "Fleet live today", v: fleetCount.toLocaleString(), c: "#00f0ff" },
    { n: "2030E fleet", v: "3M", c: "#f97316" },
    { n: "2030E robotaxi GP", v: "$108B", c: "#22c55e" },
    { n: "At 25x GP", v: "$2.7T+", c: "#a855f7" },
  ];

  return (
    <>
      <div
        className="relative overflow-hidden rounded-2xl mt-6"
        style={{
          padding: "20px 18px",
          background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(10,15,30,0.95))",
          border: "1px solid rgba(34,197,94,0.12)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }}
        />
        <div
          className="text-[9px] uppercase tracking-[2px] font-bold mb-2.5"
          style={{ color: "#22c55e" }}
        >
          The Bottom Line
        </div>
        <div className="text-[15px] font-extrabold leading-normal mb-3" style={{ color: "#f1f5f9" }}>
          Tesla is building a robotaxi platform across 1.5M owned Cybercabs and 1.5M owner-operator
          vehicles &mdash; targeting $150B in revenue at 72% blended margins by 2030.
        </div>
        <div className="flex gap-2.5 flex-wrap mb-3">
          {stats.map((m, i) => (
            <div
              key={i}
              className="flex-[1_1_80px] rounded-lg text-center"
              style={{ padding: "7px 8px", background: "rgba(0,0,0,0.2)" }}
            >
              <div className="text-[13px] font-extrabold" style={{ color: m.c }}>
                {m.v}
              </div>
              <div className="text-[8px] mt-px" style={{ color: "#64748b" }}>
                {m.n}
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs leading-normal" style={{ color: "#94a3b8" }}>
          The fleet is live. The hiring is underway. The factory line is being built. No other company
          has the manufacturing scale, the AI training data, and the fleet to make autonomous mobility
          work. It&rsquo;s a matter of execution &mdash; and Tesla is the only one with all the pieces.
        </div>
      </div>
      <div
        className="mt-3 rounded-xl"
        style={{
          padding: "10px 14px",
          background: "rgba(10,15,30,0.4)",
          border: "1px solid rgba(255,255,255,0.02)",
        }}
      >
        <p className="m-0 text-[9px] leading-relaxed" style={{ color: "#1e293b" }}>
          Fleet: robotaxitracker.com | Financials: SEC 8-K/10-K (GAAP) | Projections: Wolfe, ARK,
          S&amp;P Global | Moderate bull case, not investment advice
        </p>
      </div>
    </>
  );
}
