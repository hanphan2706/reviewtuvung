export const READING_AUDIO_BUCKET = "reading-audio";

/** Object key trong Supabase Storage (bucket private). */
export function readingAudioObjectKey(articleId: string): string | null {
  if (/^reading-challenge-1-p\d+$/i.test(articleId)) {
    return `${articleId.toLowerCase()}.mp3`;
  }
  return null;
}

/** URL API — chỉ phát sau khi đăng nhập (signed redirect). */
export function readingAudioApiPath(articleId: string): string {
  return `/api/reading/audio?articleId=${encodeURIComponent(articleId)}`;
}

export function isPrivateReadingAudioPath(pathname: string): boolean {
  return pathname === "/reading-audio" || pathname.startsWith("/reading-audio/");
}
