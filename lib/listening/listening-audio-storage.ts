import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";

export const LISTENING_AUDIO_BUCKET = "listening-audio";

/** Object key trong Supabase Storage (bucket private, flat root). */
export function listeningAudioObjectKey(fileName: string): string | null {
  if (!isAllowedListeningAudioFile(fileName)) return null;
  return fileName;
}

/** URL API — chỉ phát sau khi đăng nhập (signed redirect hoặc stream). */
export function listeningAudioApiPath(fileName: string): string {
  return `/api/listening/audio?file=${encodeURIComponent(fileName)}`;
}
