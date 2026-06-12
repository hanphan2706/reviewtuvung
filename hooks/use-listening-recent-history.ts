"use client";

import { useEffect, useState } from "react";
import type { ListeningRecentHistoryItem } from "@/lib/listening/listening-progress";

export function useListeningRecentHistory(isLoggedIn: boolean): {
  items: ListeningRecentHistoryItem[];
  loading: boolean;
} {
  const [items, setItems] = useState<ListeningRecentHistoryItem[]>([]);
  const [loading, setLoading] = useState(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      setItems([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    void fetch("/api/listening/recent-history?limit=5", { credentials: "include" })
      .then((r) => r.json())
      .then((data: { items?: ListeningRecentHistoryItem[] }) => {
        if (!cancelled) setItems(Array.isArray(data.items) ? data.items : []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]);

  return { items, loading };
}
