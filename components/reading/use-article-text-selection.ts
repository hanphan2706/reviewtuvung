"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

export type SelectionAnchor = {
  text: string;
  rect: DOMRect;
};

const TOUCH_SYNC_DELAY_MS = 80;
const SELECTION_CHANGE_DELAY_MS = 120;

export function useArticleTextSelection(articleRef: RefObject<HTMLElement | null>) {
  const [selection, setSelection] = useState<SelectionAnchor | null>(null);
  const syncTimerRef = useRef<number | undefined>(undefined);
  const selectingRef = useRef(false);

  const syncSelection = useCallback(() => {
    const root = articleRef.current;
    if (!root) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
      if (document.querySelector("[data-reading-dictionary-popover]")) {
        return;
      }
      setSelection(null);
      return;
    }
    const range = sel.getRangeAt(0);
    if (!root.contains(range.commonAncestorContainer)) {
      setSelection(null);
      return;
    }
    const text = sel.toString().trim();
    if (!text) {
      setSelection(null);
      return;
    }
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      setSelection(null);
      return;
    }
    setSelection({ text, rect });
  }, [articleRef]);

  const scheduleSync = useCallback(
    (delayMs = 0) => {
      if (syncTimerRef.current !== undefined) window.clearTimeout(syncTimerRef.current);
      syncTimerRef.current = window.setTimeout(() => {
        syncTimerRef.current = undefined;
        syncSelection();
      }, delayMs);
    },
    [syncSelection],
  );

  const clearPendingSync = useCallback(() => {
    if (syncTimerRef.current !== undefined) {
      window.clearTimeout(syncTimerRef.current);
      syncTimerRef.current = undefined;
    }
  }, []);

  useEffect(() => {
    const onMouseUp = () => queueMicrotask(syncSelection);
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [syncSelection]);

  useEffect(() => {
    const onSelectionChange = () => {
      if (selectingRef.current) return;
      scheduleSync(SELECTION_CHANGE_DELAY_MS);
    };
    document.addEventListener("selectionchange", onSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", onSelectionChange);
      clearPendingSync();
    };
  }, [scheduleSync, clearPendingSync]);

  useEffect(() => {
    const root = articleRef.current;
    if (!root) return;

    const onTouchStart = () => {
      selectingRef.current = true;
      clearPendingSync();
    };

    const onTouchEnd = () => {
      selectingRef.current = false;
      scheduleSync(TOUCH_SYNC_DELAY_MS);
    };

    root.addEventListener("touchstart", onTouchStart, { passive: true });
    root.addEventListener("touchend", onTouchEnd, { passive: true });
    root.addEventListener("touchcancel", onTouchEnd, { passive: true });
    return () => {
      root.removeEventListener("touchstart", onTouchStart);
      root.removeEventListener("touchend", onTouchEnd);
      root.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [articleRef, scheduleSync, clearPendingSync]);

  const clearSelection = useCallback(() => {
    setSelection(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  return { selection, clearSelection };
}
