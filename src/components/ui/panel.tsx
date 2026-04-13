interface PanelProps {
  title: string;
  sub?: string;
  accent?: string;
  children: React.ReactNode;
}

export function Panel({ title, sub, accent, children }: PanelProps) {
  const accentColor = accent || "rgba(0,240,255,0.2)";
  return (
    <div
      className="relative overflow-hidden rounded-[18px] border mb-[18px]"
      style={{
        background: "linear-gradient(135deg, rgba(10,15,30,0.95), rgba(20,30,50,0.5))",
        padding: "18px 16px",
        borderColor: "rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
      <h3 className="m-0 mb-0.5 ml-1 text-[15px] font-extrabold" style={{ color: "#f1f5f9" }}>
        {title}
      </h3>
      {sub && (
        <p className="m-0 mb-3 ml-1 text-xs" style={{ color: "#94a3b8" }}>
          {sub}
        </p>
      )}
      {!sub && <div className="mb-3" />}
      {children}
    </div>
  );
}
