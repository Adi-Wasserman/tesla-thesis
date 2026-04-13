"use client";

import { useWidth } from "@/lib/use-width";

interface CybercabCardProps {
  cybercabCount: number;
}

export function CybercabCard({ cybercabCount }: CybercabCardProps) {
  const w = useWidth();
  const mob = w < 640;

  return (
    <div className="flex gap-3 mb-[18px]" style={{ flexDirection: mob ? "column" : "row" }}>
      <div
        className="rounded-xl overflow-hidden"
        style={{
          flex: "1 1 260px",
          border: "1px solid rgba(249,115,22,0.1)",
          background: "#050508",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.motor1.com/images/mgl/1ZEy49/0:71:2999:2246/tesla-cybercab-robotaxi.webp"
          alt="Cybercab"
          className="w-full block"
          style={{ height: "auto", maxHeight: 240, objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-2" style={{ flex: "1 1 180px" }}>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { l: "Type", v: "2-Seat Robotaxi" },
            { l: "Controls", v: "No steering wheel/pedals" },
            { l: "Range", v: "200 mi" },
            { l: "Price", v: "Under $30K" },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-lg"
              style={{
                padding: "8px 10px",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(249,115,22,0.08)",
              }}
            >
              <div className="text-[8px] uppercase tracking-[1px] font-semibold" style={{ color: "#64748b" }}>
                {c.l}
              </div>
              <div className="text-[11px] font-bold mt-px" style={{ color: "#f97316" }}>
                {c.v}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          {[
            { l: "Test Fleet", v: String(cybercabCount || 35) },
            { l: "Production", v: "Apr '26" },
          ].map((c, i) => (
            <div
              key={i}
              className="flex-1 relative overflow-hidden rounded-[10px]"
              style={{
                background: "linear-gradient(135deg, rgba(10,15,30,0.95), rgba(20,30,50,0.7))",
                padding: "10px 12px",
                border: "1px solid rgba(249,115,22,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)" }}
              />
              <div className="text-[8px] uppercase tracking-[1.5px] font-semibold" style={{ color: "#64748b" }}>
                {c.l}
              </div>
              <div
                className="text-2xl font-extrabold"
                style={{ color: "#f97316", textShadow: "0 0 12px rgba(249,115,22,0.2)" }}
              >
                {c.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
