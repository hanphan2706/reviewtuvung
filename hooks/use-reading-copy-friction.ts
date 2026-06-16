"use client";

import type { RefObject } from "react";
import { useCopyFriction } from "@/hooks/use-copy-friction";

export function useReadingCopyFriction(
  containerRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useCopyFriction(containerRef, { enabled });
}
