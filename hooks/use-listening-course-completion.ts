"use client";

import { useEffect, useRef, useState } from "react";
import type { CourseCompletionStats } from "@/lib/listening/listening-course-progress";

export function useListeningCourseCompletion(
  lessonIds: readonly string[],
  isLoggedIn: boolean,
): { stats: CourseCompletionStats; loading: boolean } {
  const idsKey = lessonIds.join(",");
  const total = lessonIds.length;

  const [stats, setStats] = useState<CourseCompletionStats>({
    completed: 0,
    total,
    percent: 0,
  });
  const [loading, setLoading] = useState(false);
  const loadedRef = useRef<{ idsKey: string; loggedIn: boolean } | null>(null);

  useEffect(() => {
    if (!isLoggedIn || total === 0) {
      setStats({ completed: 0, total, percent: 0 });
      loadedRef.current = null;
      setLoading(false);
      return;
    }

    if (loadedRef.current?.idsKey === idsKey && loadedRef.current.loggedIn === isLoggedIn) {
      return;
    }

    let cancelled = false;
    setLoading(true);

    const params = new URLSearchParams();
    for (const id of idsKey.split(",")) {
      if (id) params.append("id", id);
    }

    void fetch(`/api/listening/course-progress?${params.toString()}`, { credentials: "include" })
      .then((res) => res.json())
      .then((data: Partial<CourseCompletionStats>) => {
        if (cancelled) return;
        setStats({
          completed: typeof data.completed === "number" ? data.completed : 0,
          total: typeof data.total === "number" ? data.total : total,
          percent: typeof data.percent === "number" ? data.percent : 0,
        });
        loadedRef.current = { idsKey, loggedIn: isLoggedIn };
      })
      .catch(() => {
        if (!cancelled) setStats({ completed: 0, total, percent: 0 });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [idsKey, isLoggedIn, total]);

  return { stats, loading };
}
