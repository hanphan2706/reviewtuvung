"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import { createSupabaseSrsRepository } from "@/lib/srs-supabase-repository";
import { createStarterUserPayload } from "@/lib/srs-starter-payload";
import { resolveWordIpa } from "@/lib/vocabulary/ipa/vocabulary-ipa-lookup";
import { useSrsStore } from "@/store/srs-store";
import type { Word } from "@/lib/types";

function withResolvedIpa(word: Word, preferredIpa?: string): Word {
  const ipa = resolveWordIpa(htmlToPlainTrim(word.term) || word.term, preferredIpa ?? word.ipa);
  if (!ipa) return word;
  if (word.ipa?.trim() === ipa) return word;
  return { ...word, ipa };
}

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

        const local = useSrsStore.getState();
        const remote = remotePayload ?? createStarterUserPayload(userId);

        // Giữ thẻ vừa thêm local trong lúc fetch remote (tránh mất IPA / mất từ mới).
        const remoteWordIds = new Set(remote.words.map((word) => word.id));
        const remoteDeckIds = new Set(remote.decks.map((deck) => deck.id));
        const localOnlyWords = local.words.filter((word) => !remoteWordIds.has(word.id));
        const localOnlyDecks = local.decks.filter((deck) => !remoteDeckIds.has(deck.id));
        const localIpaById = new Map(
          local.words.filter((word) => word.ipa?.trim()).map((word) => [word.id, word.ipa!.trim()]),
        );

        // Remote thường thiếu `ipa` (cột chưa migrate / upsert cũ) — giữ IPA local + backfill lookup.
        const mergedWords = [
          ...remote.words.map((word) => withResolvedIpa(word, localIpaById.get(word.id))),
          ...localOnlyWords.map((word) => withResolvedIpa(word)),
        ];

        useSrsStore.getState().replacePayload({
          ...remote,
          decks: [...remote.decks, ...localOnlyDecks],
          words: mergedWords,
        });

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
