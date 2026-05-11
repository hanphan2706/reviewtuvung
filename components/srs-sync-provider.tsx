"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { createSupabaseSrsRepository } from "@/lib/srs-supabase-repository";
import { createStarterUserPayload } from "@/lib/srs-starter-payload";
import { useSrsStore } from "@/store/srs-store";

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
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

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

    let remoteStarted = false;

    const loadAndSubscribe = async () => {
      setLoadError(null);
      try {
        const remotePayload = await repository.fetchUserPayload(userId);
        if (cancelled) return;

        useSrsStore.getState().replacePayload(remotePayload ?? createStarterUserPayload(userId));

        unsubscribe = useSrsStore.subscribe((state) => {
          clearSaveTimer();
          saveTimerRef.current = window.setTimeout(() => {
            repository
              .upsertUserPayload(state.getPayload())
              .then(() => {
                if (!cancelled) setSaveError(null);
              })
              .catch((error) => {
                const msg = formatSupabaseLikeError(error);
                console.warn("[SRS sync] Failed to persist payload:", msg);
                if (!cancelled) setSaveError(msg);
              });
          }, 600);
        });
      } catch (error) {
        const msg = formatSupabaseLikeError(error);
        console.warn("[SRS sync] Failed to load remote payload:", msg);
        if (!cancelled) setLoadError(msg);
      }
    };

    const startRemoteOnce = () => {
      if (cancelled || remoteStarted) return;
      remoteStarted = true;
      void loadAndSubscribe();
    };

    /** Đợi persist (localStorage) hydrate xong rồi mới merge remote — tránh local ghi đè cloud sau đó. */
    const unsubHydration = useSrsStore.persist.onFinishHydration(() => {
      startRemoteOnce();
    });

    if (useSrsStore.persist.hasHydrated()) {
      startRemoteOnce();
    }

    return () => {
      cancelled = true;
      clearSaveTimer();
      unsubscribe?.();
      unsubHydration();
    };
  }, [userId]);

  return (
    <>
      {loadError ? (
        <div
          role="alert"
          className="border-b border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-900"
        >
          <strong>Không tải được dữ liệu từ tài khoản.</strong> Kiểm tra mạng và bảng{" "}
          <code className="rounded bg-red-100 px-1">srs_*</code> trên Supabase (RLS / schema). Chi tiết: {loadError}
        </div>
      ) : null}
      {saveError ? (
        <div
          role="alert"
          className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950"
        >
          <strong>Không lưu được lên server.</strong> Thay đổi chỉ còn trên máy này. Chi tiết: {saveError}
          <button
            type="button"
            className="ml-2 underline"
            onClick={() => setSaveError(null)}
          >
            Đóng
          </button>
        </div>
      ) : null}
      {children}
    </>
  );
}
