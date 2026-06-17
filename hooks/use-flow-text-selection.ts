"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent, type RefObject } from "react";

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

const CUE_SEEK_DRAG_THRESHOLD_PX = 5;

export type CueSeekGestureState = {
  startX: number;
  startY: number;
  dragged: boolean;
};

export function createCueSeekGestureState(): CueSeekGestureState {
  return { startX: 0, startY: 0, dragged: false };
}

export function recordCueSeekPointerDown(
  state: CueSeekGestureState,
  clientX: number,
  clientY: number,
): void {
  state.startX = clientX;
  state.startY = clientY;
  state.dragged = false;
}

export function recordCueSeekPointerMove(
  state: CueSeekGestureState,
  clientX: number,
  clientY: number,
): void {
  if (state.dragged) return;
  if (Math.hypot(clientX - state.startX, clientY - state.startY) > CUE_SEEK_DRAG_THRESHOLD_PX) {
    state.dragged = true;
  }
}

/** Click-to-seek on transcript rows — skip when user dragged to select or double-clicked a word. */
export function shouldPerformCueSeek(state: CueSeekGestureState, clickDetail = 1): boolean {
  if (clickDetail >= 2) return false;
  if (state.dragged) return false;
  if (hasNonEmptyTextSelection()) return false;
  return true;
}

export function useCueSeekGesture() {
  const gestureRef = useRef<CueSeekGestureState>(createCueSeekGestureState());

  const onPointerDown = useCallback((event: PointerEvent) => {
    recordCueSeekPointerDown(gestureRef.current, event.clientX, event.clientY);
  }, []);

  const onPointerMove = useCallback((event: PointerEvent) => {
    recordCueSeekPointerMove(gestureRef.current, event.clientX, event.clientY);
  }, []);

  const canSeekFromClick = useCallback((clickDetail = 1) => {
    return shouldPerformCueSeek(gestureRef.current, clickDetail);
  }, []);

  return { onPointerDown, onPointerMove, canSeekFromClick };
}
