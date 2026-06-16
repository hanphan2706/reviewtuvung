"use client";

import type { RefObject } from "react";
import { useCopyFriction } from "@/hooks/use-copy-friction";
import {
  applyListeningCopyFriction,
  shouldApplyListeningCopyFriction,
} from "@/lib/listening/listening-copy-friction";

export function useListeningCopyFriction(
  containerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useCopyFriction(containerRef, {
    enabled,
    shouldApply: shouldApplyListeningCopyFriction,
    apply: applyListeningCopyFriction,
  });
}
