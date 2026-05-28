"use client";

import { useEffect, useState } from "react";

export function useReadingArticleReadCounts(): {
  readCounts: Record<string, number>;
  loading: boolean;
} {
  const [readCounts, setReadCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    void fetch("/api/reading/article-read-counts", { credentials: "same-origin" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { counts?: Record<string, number> } | null) => {
        if (cancelled) return;
        setReadCounts(data?.counts ?? {});
      })
      .catch(() => {
        if (!cancelled) setReadCounts({});
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { readCounts, loading };
}
