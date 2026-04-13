interface SectionHeaderProps {
  icon?: string;
  title: string;
  sub?: string;
  color?: string;
}

export function SectionHeader({ icon, title, sub, color }: SectionHeaderProps) {
  const c = color || "#00f0ff";
  return (
    <div
      className="relative overflow-hidden rounded-[14px]"
      style={{
        margin: "30px 0 16px",
        padding: "16px 20px",
        background: "linear-gradient(135deg, rgba(10,15,30,0.9), rgba(20,30,50,0.5))",
        border: `1px solid ${c}12`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${c}55 30%, ${c}22 70%, transparent 95%)` }}
      />
      <div className="flex items-center gap-2.5">
        {icon && (
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-[9px] text-[15px]"
            style={{
              width: 34,
              height: 34,
              background: `${c}18`,
              border: `1px solid ${c}30`,
            }}
          >
            {icon}
          </div>
        )}
        <div>
          <div className="text-lg font-extrabold" style={{ color: "#f1f5f9" }}>
            {title}
          </div>
          {sub && (
            <div className="mt-0.5 text-[13px] leading-snug" style={{ color: "#b0bec5" }}>
              {sub}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
