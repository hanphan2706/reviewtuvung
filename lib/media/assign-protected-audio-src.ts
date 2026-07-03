import { resolveProtectedAudioSrc } from "@/lib/media/resolve-protected-audio-src";

/** Gán src cho HTMLAudioElement sau khi fetch + blob (trả revoke để cleanup). */
export async function assignProtectedAudioSrc(
  audio: HTMLAudioElement,
  apiSrc: string,
): Promise<() => void> {
  const { src, revoke } = await resolveProtectedAudioSrc(apiSrc);
  audio.src = src;
  return revoke ?? (() => {});
}
