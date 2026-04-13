"use client";

import { useState, useEffect, useCallback } from "react";
import type { FleetStatus } from "@/types/fleet";
import { PROXY_URL, POLL_INTERVAL } from "@/data/constants";

interface FleetApiResult {
  fleetStatus: FleetStatus | null;
  lastUpdated: string | null;
  live: boolean;
}

export function useFleetPolling(): FleetApiResult {
  const [fs, setFs] = useState<FleetStatus | null>(null);
  const [lu, setLu] = useState<string | null>(null);

  const fd = useCallback(() => {
    fetch(PROXY_URL)
      .then((r) => r.json())
      .then((j: { fleet?: FleetStatus }) => {
        const f = j.fleet;
        if (f && f.totalFleetCount) {
          const austin = f.austinCount || null;
          const bayArea = f.bayAreaCount || null;
          const cityTotal = austin != null && bayArea != null ? austin + bayArea : null;
          setFs({
            totalFleetCount: cityTotal ?? f.totalFleetCount,
            cybercabCount: f.cybercabCount || 0,
            unsupervisedCount: f.unsupervisedCount || 0,
            austinCount: austin,
            bayAreaCount: bayArea,
          });
          setLu(
            new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })
          );
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fd();
    const id = setInterval(fd, POLL_INTERVAL);
    return () => clearInterval(id);
  }, [fd]);

  return {
    fleetStatus: fs,
    lastUpdated: lu,
    live: !!fs,
  };
}
