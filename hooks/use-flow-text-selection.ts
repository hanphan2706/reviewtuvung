"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

export type FlowSelectionAnchor = {
  text: string;
  rect: DOMRect;
};

const TOUCH_SYNC_DELAY_MS = 80;
const SELECTION_CHANGE_DELAY_MS = 120;

/** Text selection within a container — shared by article reader and listening flow. */
export function useFlowTextSelection(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [selection, setSelection] = useState<FlowSelectionAnchor | null>(null);
  const syncTimerRef = useRef<number | undefined>(undefined);
  const selectingRef = useRef(false);

  const syncSelection = useCallback(() => {
    if (!enabled) {
      setSelection(null);
      return;
    }
    const root = rootRef.current;
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
  }, [enabled, rootRef]);

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
    if (!enabled) return;
    const onMouseUp = () => queueMicrotask(syncSelection);
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [enabled, syncSelection]);

  useEffect(() => {
    if (!enabled) return;
    const onSelectionChange = () => {
      if (selectingRef.current) return;
      scheduleSync(SELECTION_CHANGE_DELAY_MS);
    };
    document.addEventListener("selectionchange", onSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", onSelectionChange);
      clearPendingSync();
    };
  }, [enabled, scheduleSync, clearPendingSync]);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
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
  }, [enabled, rootRef, scheduleSync, clearPendingSync]);

  const clearSelection = useCallback(() => {
    setSelection(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  return { selection, clearSelection };
}

export function hasNonEmptyTextSelection(): boolean {
  const sel = window.getSelection();
  return Boolean(sel && !sel.isCollapsed && sel.toString().trim());
}
