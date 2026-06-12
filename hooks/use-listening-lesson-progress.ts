"use client";

import { useCallback, useEffect, useRef } from "react";
import { LISTENING_COMPLETE_PROGRESS } from "@/lib/listening/listening-progress";

type SyncOptions = {
  lessonId: string;
  isLoggedIn: boolean;
};

async function postListeningProgress(lessonId: string, progress: number): Promise<number | null> {
  const res = await fetch("/api/listening/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ lessonId, progress }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { progress?: number };
  return typeof data.progress === "number" ? data.progress : progress;
}

export function useListeningLessonProgress({ lessonId, isLoggedIn }: SyncOptions): {
  reportPlaybackProgress: (progress: number) => void;
} {
  const syncedProgressRef = useRef(0);
  const pendingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    syncedProgressRef.current = 0;
    if (pendingTimeoutRef.current !== null) {
      window.clearTimeout(pendingTimeoutRef.current);
      pendingTimeoutRef.current = null;
    }

    if (!isLoggedIn) return;

    const syncOpen = () => {
      void postListeningProgress(lessonId, 0.05).then((progress) => {
        if (typeof progress === "number") {
          syncedProgressRef.current = Math.max(syncedProgressRef.current, progress);
        }
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(syncOpen, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = window.setTimeout(syncOpen, 400);
    return () => window.clearTimeout(t);
  }, [isLoggedIn, lessonId]);

  const reportPlaybackProgress = useCallback(
    (progress: number) => {
      if (!isLoggedIn) return;
      if (!Number.isFinite(progress) || progress <= syncedProgressRef.current) return;

      const nextProgress = Math.min(1, progress);
      const delta = nextProgress - syncedProgressRef.current;
      const shouldSyncNow =
        nextProgress >= LISTENING_COMPLETE_PROGRESS || delta >= 0.08 || syncedProgressRef.current <= 0.05;

      if (!shouldSyncNow) return;

      if (pendingTimeoutRef.current !== null) {
        window.clearTimeout(pendingTimeoutRef.current);
      }

      pendingTimeoutRef.current = window.setTimeout(() => {
        pendingTimeoutRef.current = null;
        void postListeningProgress(lessonId, nextProgress).then((saved) => {
          if (typeof saved === "number") {
            syncedProgressRef.current = Math.max(syncedProgressRef.current, saved);
          }
        });
      }, 1200);
    },
    [isLoggedIn, lessonId],
  );

  useEffect(
    () => () => {
      if (pendingTimeoutRef.current !== null) {
        window.clearTimeout(pendingTimeoutRef.current);
      }
    },
    [],
  );

  return { reportPlaybackProgress };
}
