"use client";

import { useState, useEffect, useCallback } from "react";
import type { CareersData } from "@/data/careers";
import { FALLBACK_CAREERS } from "@/data/careers";

const POLL_INTERVAL = 3_600_000; // 1 hour

interface CareersApiResult {
  careers: CareersData;
  live: boolean;
  loading: boolean;
}

export function useCareersPolling(): CareersApiResult {
  const [careers, setCareers] = useState<CareersData>(FALLBACK_CAREERS);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCareers = useCallback(() => {
    fetch("/api/careers")
      .then((r) => r.json())
      .then((j: { careers?: CareersData; live?: boolean }) => {
        if (j.careers) {
          setCareers(j.careers);
          setLive(!!j.live);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchCareers();
    const id = setInterval(fetchCareers, POLL_INTERVAL);
    return () => clearInterval(id);
  }, [fetchCareers]);

  return { careers, live, loading };
}
