"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { createSupabaseSrsRepository } from "@/lib/srs-supabase-repository";
import { defaultSettings, useSrsStore } from "@/store/srs-store";

function formatSupabaseLikeError(error: unknown): string {
  if (error && typeof error === "object") {
    const o = error as Record<string, unknown>;
    const parts = [o.code, o.message, o.details, o.hint].filter((v) => typeof v === "string" && v.length > 0);
    if (parts.length > 0) return parts.join(" — ");
  }
  if (error instanceof Error) return error.message;
  return String(error);
}

export function SrsSyncProvider({ userId, children }: { userId: string; children: ReactNode }) {
  const saveTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      return;
    }

    const repository = createSupabaseSrsRepository(supabase);
    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    const clearSaveTimer = () => {
      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
      }
    };

    const loadAndSubscribe = async () => {
      try {
        const remotePayload = await repository.fetchUserPayload(userId);
        if (cancelled) return;

        useSrsStore.getState().replacePayload(
          remotePayload ?? {
            userId,
            decks: [],
            words: [],
            settings: defaultSettings,
            reviewDayTallies: {},
          },
        );

        unsubscribe = useSrsStore.subscribe((state) => {
          clearSaveTimer();
          saveTimerRef.current = window.setTimeout(() => {
            repository.upsertUserPayload(state.getPayload()).catch((error) => {
              console.warn("[SRS sync] Failed to persist payload:", formatSupabaseLikeError(error));
            });
          }, 600);
        });
      } catch (error) {
        console.warn("[SRS sync] Failed to load remote payload:", formatSupabaseLikeError(error));
      }
    };

    void loadAndSubscribe();

    return () => {
      cancelled = true;
      clearSaveTimer();
      unsubscribe?.();
    };
  }, [userId]);

  return children;
}
