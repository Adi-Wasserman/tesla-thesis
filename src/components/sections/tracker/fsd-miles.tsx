export function FsdMiles() {
  return (
    <a
      href="https://www.tesla.com/fsd/safety"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3.5 rounded-xl mb-[18px] no-underline cursor-pointer flex-wrap"
      style={{
        padding: "14px 18px",
        background: "linear-gradient(135deg, rgba(0,240,255,0.04), rgba(10,15,30,0.9))",
        border: "1px solid rgba(0,240,255,0.1)",
        textDecoration: "none",
      }}
    >
      <div>
        <div className="text-[9px] uppercase tracking-[1.5px] font-bold" style={{ color: "#00f0ff" }}>
          FSD Cumulative Miles
        </div>
        <div
          className="text-[32px] font-black leading-tight"
          style={{ color: "#00f0ff", textShadow: "0 0 20px rgba(0,240,255,0.2)" }}
        >
          9.22B
        </div>
      </div>
      <div className="flex-1 min-w-[160px] ml-2">
        <div className="text-xs font-semibold mb-0.5" style={{ color: "#e2e8f0" }}>
          Tesla&rsquo;s data moat
        </div>
        <div className="text-[11px] leading-snug" style={{ color: "#94a3b8" }}>
          19M+ miles driven per day across the global fleet. Waymo logs ~70K/day. This ~270x data
          advantage trains the AI powering the robotaxi network.
        </div>
      </div>
      <div className="text-[10px] font-semibold whitespace-nowrap opacity-70" style={{ color: "#00f0ff" }}>
        tesla.com &rarr;
      </div>
    </a>
  );
}
