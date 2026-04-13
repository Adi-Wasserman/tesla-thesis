export function Header() {
  return (
    <div
      className="flex items-center gap-3 mb-3.5 rounded-[18px] relative overflow-hidden"
      style={{
        padding: "14px 18px",
        background: "linear-gradient(135deg, rgba(10,15,30,0.95), rgba(20,30,50,0.6))",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 10%, rgba(0,240,255,0.3) 50%, transparent 90%)" }}
      />
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-[11px] font-black text-xl text-white"
        style={{
          background: "linear-gradient(135deg, #ef4444, #b91c1c)",
          width: 38,
          height: 38,
        }}
      >
        T
      </div>
      <div>
        <h1 className="m-0 text-xl font-extrabold" style={{ color: "#f1f5f9" }}>
          The Tesla Robotaxi Thesis
        </h1>
        <p className="m-0 mt-0.5 text-[11px] font-medium" style={{ color: "#94a3b8" }}>
          From Car Company to Mobility Platform
        </p>
      </div>
    </div>
  );
}
