interface GlassCardProps {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
  small?: boolean;
}

export function GlassCard({ label, value, sub, color, small }: GlassCardProps) {
  const c = color || "#6366f1";
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border border-white/5"
      style={{
        background: "linear-gradient(135deg, rgba(10,15,30,0.95), rgba(20,30,50,0.7))",
        padding: small ? "10px 12px" : "16px 18px",
        flex: small ? "1 1 80px" : "1 1 120px",
        minWidth: small ? 80 : 110,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${c}44, transparent)` }}
      />
      <div className="text-[9px] uppercase tracking-[1.5px] font-semibold" style={{ color: "#64748b" }}>
        {label}
      </div>
      <div
        className="font-extrabold leading-tight"
        style={{
          color: color || "#e2e8f0",
          fontSize: small ? 18 : 26,
          margin: "3px 0 1px",
        }}
      >
        {value}
      </div>
      {sub && <div className="text-[9px]" style={{ color: "#475569" }}>{sub}</div>}
    </div>
  );
}
