"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { useProtectedAudioSrc } from "@/hooks/use-protected-audio-src";

type ProtectedAudioProps = Omit<ComponentPropsWithoutRef<"audio">, "src"> & {
  apiSrc: string;
};

export const ProtectedAudio = forwardRef<HTMLAudioElement, ProtectedAudioProps>(function ProtectedAudio(
  { apiSrc, ...rest },
  ref,
) {
  const src = useProtectedAudioSrc(apiSrc);
  return <audio {...rest} ref={ref} src={src ?? undefined} />;
});
