"use client";

import { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { topojsonFeature } from "@/lib/topojson";
import { MC } from "@/data/cities";
import { GEO_URL } from "@/data/constants";

export function ExpansionMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const w = 900;
    const h = 500;
    const proj = d3.geoAlbersUsa().scale(1050).translate([w / 2, h / 2]);
    const path = d3.geoPath().projection(proj);

    fetch(GEO_URL)
      .then((r) => r.json())
      .then((us) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const st = topojsonFeature(us as any, (us as any).objects.states);

        svg
          .append("g")
          .selectAll("path")
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .data(st.features as any[])
          .enter()
          .append("path")
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .attr("d", path as any)
          .attr("fill", "#0f172a")
          .attr("stroke", "#1e3a5f")
          .attr("stroke-width", 0.6);

        MC.forEach((c) => {
          const co = proj([c.lng, c.lat]);
          if (!co) return;
          const x = co[0];
          const y = co[1];
          const cl = c.on ? "#00f0ff" : "#a855f7";
          const g = svg.append("g");

          if (c.on) {
            g.append("circle").attr("cx", x).attr("cy", y).attr("r", 20).attr("fill", cl).attr("opacity", 0.06);
            g.append("circle").attr("cx", x).attr("cy", y).attr("r", 10).attr("fill", cl).attr("opacity", 0.12);
          }

          g.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", c.on ? 5 : 3)
            .attr("fill", cl);

          g.append("text")
            .attr("x", x)
            .attr("y", y - 12)
            .attr("text-anchor", "middle")
            .attr("fill", "#e2e8f0")
            .attr("font-size", "9px")
            .attr("font-weight", "700")
            .attr("font-family", "system-ui")
            .text(c.city);

          g.append("text")
            .attr("x", x)
            .attr("y", y - 2)
            .attr("text-anchor", "middle")
            .attr("fill", cl)
            .attr("font-size", "7px")
            .attr("font-weight", "600")
            .attr("font-family", "system-ui")
            .text(c.on ? "LIVE " + c.v : "H1 2026");
        });

        setOk(true);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0c1929, #070d17)",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {!ok && (
        <div className="py-12 text-center text-[11px]" style={{ color: "#475569" }}>
          Loading...
        </div>
      )}
      <svg ref={ref} viewBox="0 0 900 500" className="w-full block" style={{ height: "auto" }} />
    </div>
  );
}
