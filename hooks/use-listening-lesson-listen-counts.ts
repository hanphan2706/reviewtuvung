"use client";

import { useEffect, useState } from "react";

/** Lượt nghe theo lesson id — dùng khi API sẵn sàng; hiện trả về rỗng. */
export function useListeningLessonListenCounts(): {
  listenCounts: Record<string, number>;
  loading: boolean;
} {
  const [listenCounts, setListenCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    void fetch("/api/listening/lesson-listen-counts", { credentials: "same-origin" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { counts?: Record<string, number> } | null) => {
        if (cancelled) return;
        setListenCounts(data?.counts ?? {});
      })
      .catch(() => {
        if (!cancelled) setListenCounts({});
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { listenCounts, loading };
}
