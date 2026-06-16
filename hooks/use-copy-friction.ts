"use client";

import { useEffect, type RefObject } from "react";
import {
  applyCopyFriction,
  shouldApplyCopyFriction,
} from "@/lib/content/copy-friction";

function selectionIsInside(root: HTMLElement): boolean {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return false;
  return root.contains(sel.getRangeAt(0).commonAncestorContainer);
}

type CopyFrictionOptions = {
  enabled?: boolean;
  shouldApply?: (raw: string) => boolean;
  apply?: (raw: string) => string;
};

export function useCopyFriction(
  containerRef: RefObject<HTMLElement | null>,
  options: CopyFrictionOptions = {},
) {
  const { enabled = true, shouldApply = shouldApplyCopyFriction, apply = applyCopyFriction } = options;

  useEffect(() => {
    if (!enabled) return;
    const root = containerRef.current;
    if (!root) return;

    const onCopy = (event: ClipboardEvent) => {
      if (!selectionIsInside(root)) return;

      const raw = window.getSelection()?.toString() ?? "";
      if (!shouldApply(raw)) return;

      const plain = apply(raw);
      event.preventDefault();
      event.clipboardData?.clearData();
      event.clipboardData?.setData("text/plain", plain);
    };

    root.addEventListener("copy", onCopy);
    return () => root.removeEventListener("copy", onCopy);
  }, [containerRef, enabled, shouldApply, apply]);
}
