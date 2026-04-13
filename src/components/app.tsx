"use client";

import { useState } from "react";
import { useFleetPolling } from "@/lib/fleet-api";
import { StarsBg } from "@/components/layout/stars-bg";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { TabNav, type Section } from "@/components/layout/tab-nav";
import { BottomLine } from "@/components/layout/bottom-line";
import { FinSection } from "@/components/sections/financials";
import { ThesisSection } from "@/components/sections/thesis";
import { ProgramSection } from "@/components/sections/tracker";

export function App() {
  const [sec, setSec] = useState<Section>("thesis");
  const { fleetStatus, live, lastUpdated } = useFleetPolling();
  const fleetCount = fleetStatus ? fleetStatus.totalFleetCount : 430;

  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: "radial-gradient(ellipse at 20% 0%, #0c1222, #030712 40%, #000309)",
        color: "#e2e8f0",
        padding: "20px 16px",
      }}
    >
      <StarsBg />
      <div className="max-w-[920px] mx-auto relative z-[1]">
        <Header />
        <Hero />
        <TabNav active={sec} onChange={setSec} />

        {sec === "thesis" && <ThesisSection fleetCount={fleetCount} />}
        {sec === "program" && <ProgramSection fs={fleetStatus} lastUpdated={lastUpdated} live={live} />}
        {sec === "financials" && <FinSection />}

        <BottomLine fleetCount={fleetCount} />
      </div>
    </div>
  );
}
