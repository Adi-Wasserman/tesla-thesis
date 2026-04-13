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
          setFs({
            totalFleetCount: f.totalFleetCount,
            cybercabCount: f.cybercabCount || 0,
            unsupervisedCount: f.unsupervisedCount || 0,
            austinCount: f.austinCount || null,
            bayAreaCount: f.bayAreaCount || null,
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
