/** Supabase bucket private — accent clips, intro ngắn, v.v. (không phát qua /public). */
export const MEDIA_AUDIO_BUCKET = "media-audio";

const ALLOWED_PREFIXES = ["accent-challenge/", "accent-discover/", "accents/", "cam19/"] as const;

export function isAllowedMediaAudioKey(key: string): boolean {
  const normalized = key.trim().replace(/^\/+/, "");
  if (!normalized || normalized.includes("..")) return false;
  if (!ALLOWED_PREFIXES.some((prefix) => normalized.startsWith(prefix))) return false;
  return /\.(mp3|wav)$/i.test(normalized);
}

export function mediaAudioApiPath(key: string): string {
  return `/api/media/audio?key=${encodeURIComponent(key)}`;
}

export function mediaAudioContentType(key: string): "audio/mpeg" | "audio/wav" {
  return key.toLowerCase().endsWith(".wav") ? "audio/wav" : "audio/mpeg";
}

/** Path tương đối trong `public/listening-assets/` — dev đọc trực tiếp từ đĩa. */
export function mediaAudioLocalPath(key: string): string | null {
  if (!isAllowedMediaAudioKey(key)) return null;
  return key.replace(/^\/+/, "");
}

export function isBlockedPublicListeningAssetAudio(pathname: string): boolean {
  if (!pathname.startsWith("/listening-assets/")) return false;
  return /\.(mp3|wav)$/i.test(pathname);
}
