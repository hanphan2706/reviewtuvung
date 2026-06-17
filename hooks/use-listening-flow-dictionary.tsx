"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { DictionaryPopover } from "@/components/reading/dictionary-popover";
import { useFlowTextSelection, type FlowSelectionAnchor } from "@/hooks/use-flow-text-selection";
import {
  fetchDictionaryEnrich,
  fetchDictionaryEntry,
  parseReadingSelection,
} from "@/lib/reading/fetch-dictionary";
import type { ReadingLookupResult } from "@/lib/reading/lookup-types";
import { useSrsStore } from "@/store/srs-store";

type UseListeningFlowDictionaryOptions = {
  enabled: boolean;
  isLoggedIn: boolean;
};

export function useListeningFlowDictionary(
  containerRef: RefObject<HTMLElement | null>,
  { enabled, isLoggedIn }: UseListeningFlowDictionaryOptions,
) {
  const decks = useSrsStore((s) => s.decks);
  const { selection, clearSelection } = useFlowTextSelection(containerRef, enabled);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictLookup, setDictLookup] = useState<ReadingLookupResult | null>(null);
  const popoverAnchorRef = useRef<FlowSelectionAnchor | null>(null);
  const pickedRef = useRef<ReturnType<typeof parseReadingSelection>>(null);

  const selectionText = selection?.text ?? null;
  const picked = useMemo(
    () => (selectionText ? parseReadingSelection(selectionText) : null),
    [selectionText],
  );
  if (picked) pickedRef.current = picked;

  const popoverAnchor = selection ?? popoverAnchorRef.current;
  const showDictionaryPopover = Boolean(enabled && popoverAnchor && dictLookup);
  const pickedForLookup =
    picked ?? (showDictionaryPopover ? pickedRef.current : null);

  const lookupKey = pickedForLookup
    ? `${pickedForLookup.mode}\0${pickedForLookup.query}`
    : null;

  const canAddWord = Boolean(
    isLoggedIn && pickedForLookup && pickedForLookup.mode !== "translate-only",
  );

  useEffect(() => {
    if (selection) popoverAnchorRef.current = selection;
  }, [selection]);

  useEffect(() => {
    if (!enabled || !lookupKey) {
      setDictLookup(null);
      setDictLoading(false);
      return;
    }
    const sep = lookupKey.indexOf("\0");
    const mode = lookupKey.slice(0, sep) as "word" | "phrase" | "translate-only";
    const query = lookupKey.slice(sep + 1);
    let cancelled = false;
    setDictLoading(true);
    setDictLookup({
      query,
      kind: mode === "word" ? "word" : "phrase",
      senses: [],
      paraphrases: [],
      source: "",
    });
    void fetchDictionaryEntry(query)
      .then((result) => {
        if (cancelled) return;
        setDictLookup(result);
        if (result.kind === "word" && !result.error) {
          void fetchDictionaryEnrich(query).then((paraphrases) => {
            if (cancelled || !paraphrases.length) return;
            setDictLookup((prev) =>
              prev && prev.query === query ? { ...prev, paraphrases } : prev,
            );
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDictLookup({
            query,
            kind: mode === "word" ? "word" : "phrase",
            error: "Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",
            senses: [],
            paraphrases: [],
            source: "",
          });
        }
      })
      .finally(() => {
        if (!cancelled) setDictLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [enabled, lookupKey]);

  const closePopover = useCallback(() => {
    clearSelection();
    setDictLookup(null);
    popoverAnchorRef.current = null;
    pickedRef.current = null;
  }, [clearSelection]);

  const popover =
    showDictionaryPopover && popoverAnchor && dictLookup ? (
      <DictionaryPopover
        anchor={popoverAnchor}
        lookup={dictLookup}
        loading={dictLoading}
        canAddWord={canAddWord}
        decks={decks}
        onClose={closePopover}
      />
    ) : null;

  return { popover, closePopover };
}
