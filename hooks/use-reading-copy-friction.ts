"use client";

import { useEffect, type RefObject } from "react";
import {
  applyReadingCopyFriction,
  shouldApplyReadingCopyFriction,
} from "@/lib/reading/reading-copy-friction";

function selectionIsInside(root: HTMLElement): boolean {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return false;
  return root.contains(sel.getRangeAt(0).commonAncestorContainer);
}

export function useReadingCopyFriction(
  containerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;
    const root = containerRef.current;
    if (!root) return;

    const onCopy = (event: ClipboardEvent) => {
      if (!selectionIsInside(root)) return;

      const raw = window.getSelection()?.toString() ?? "";
      if (!shouldApplyReadingCopyFriction(raw)) return;

      const plain = applyReadingCopyFriction(raw);
      event.preventDefault();
      event.clipboardData?.clearData();
      event.clipboardData?.setData("text/plain", plain);
    };

    root.addEventListener("copy", onCopy);
    return () => root.removeEventListener("copy", onCopy);
  }, [containerRef, enabled]);
}
