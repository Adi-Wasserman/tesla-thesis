export type Section = "thesis" | "program" | "financials";

interface TabNavProps {
  active: Section;
  onChange: (section: Section) => void;
}

const TABS: [Section, string, string, string][] = [
  ["thesis", "The Case", "#22c55e", "\u25B6"],
  ["program", "Live Tracker", "#00f0ff", "\u25C8"],
  ["financials", "The Numbers", "#818cf8", "\u25A3"],
];

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <div className="flex gap-1.5 mb-[18px]">
      {TABS.map(([id, label, color, icon]) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex-1 rounded-xl text-[13px] font-extrabold cursor-pointer transition-all duration-200"
            style={{
              padding: "13px 12px",
              border: isActive ? `1px solid ${color}44` : "1px solid rgba(255,255,255,0.08)",
              background: isActive
                ? `linear-gradient(135deg, ${color}22, ${color}08)`
                : "rgba(15,23,42,0.6)",
              color: isActive ? "#f1f5f9" : "#94a3b8",
              boxShadow: isActive ? `0 0 20px ${color}12` : "none",
            }}
          >
            <span
              className="mr-1.5 text-[11px]"
              style={{ opacity: isActive ? 0.9 : 0.5 }}
            >
              {icon}
            </span>
            {label}
          </button>
        );
      })}
    </div>
  );
}
