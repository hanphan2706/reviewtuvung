import { parsePassageAudioUrl } from "@/lib/reading/parse-passage-audio";
import { readingAudioApiPath, readingAudioObjectKey } from "@/lib/reading/reading-audio-storage";

/** Ưu tiên khối AUDIO trong .txt; phát qua API có auth (Supabase signed URL). */
export function resolveReadingArticleAudio(
  articleId: string,
  passage?: { audioUrl?: string },
): string {
  const fromTxt = passage?.audioUrl?.trim();
  if (fromTxt || readingAudioObjectKey(articleId)) {
    return readingAudioApiPath(articleId);
  }
  return "";
}

export function parsePassageAudioFromBlock(audioText: string): string {
  return parsePassageAudioUrl(audioText);
}
