"use client";

import { useEffect, useState } from "react";
import { resolveProtectedAudioSrc } from "@/lib/media/resolve-protected-audio-src";

/** Resolve API audio URL → blob URL for <audio> (ẩn link gốc khỏi DOM). */
export function useProtectedAudioSrc(apiSrc: string | null | undefined): string | null {
  const [resolved, setResolved] = useState<string | null>(null);

  useEffect(() => {
    if (!apiSrc) {
      setResolved(null);
      return;
    }

    let cancelled = false;
    let revoke: (() => void) | undefined;

    void resolveProtectedAudioSrc(apiSrc)
      .then(({ src, revoke: revokeFn }) => {
        if (cancelled) {
          revokeFn?.();
          return;
        }
        revoke = revokeFn;
        setResolved(src);
      })
      .catch(() => {
        if (!cancelled) setResolved(null);
      });

    return () => {
      cancelled = true;
      revoke?.();
    };
  }, [apiSrc]);

  return resolved;
}
