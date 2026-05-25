"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

export type SelectionAnchor = {
  text: string;
  rect: DOMRect;
};

export function useArticleTextSelection(articleRef: RefObject<HTMLElement | null>) {
  const [selection, setSelection] = useState<SelectionAnchor | null>(null);

  const syncSelection = useCallback(() => {
    const root = articleRef.current;
    if (!root) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) {
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

  useEffect(() => {
    const onUp = () => queueMicrotask(syncSelection);
    document.addEventListener("mouseup", onUp);
    return () => document.removeEventListener("mouseup", onUp);
  }, [syncSelection]);

  const clearSelection = useCallback(() => {
    setSelection(null);
    window.getSelection()?.removeAllRanges();
  }, []);

  return { selection, clearSelection };
}
