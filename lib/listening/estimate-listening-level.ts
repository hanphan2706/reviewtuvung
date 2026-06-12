import type { ReadingDifficulty } from "@/lib/reading/hub-articles";
import { countPassageWords } from "@/lib/reading/estimate-read-minutes";

function averageWordLength(words: string[]): number {
  if (words.length === 0) return 0;
  const total = words.reduce((sum, w) => sum + w.replace(/[^a-z'-]/gi, "").length, 0);
  return total / words.length;
}

function longWordRatio(words: string[]): number {
  if (words.length === 0) return 0;
  const long = words.filter((w) => w.replace(/[^a-z'-]/gi, "").length >= 8).length;
  return long / words.length;
}

/** IELTS part 3–4 thường khó hơn — dùng khi chưa có transcript. */
export function listeningDifficultyFromPart(part: number, examSlug?: string): ReadingDifficulty {
  if (examSlug === "tactics-basic") return "Dễ";
  if (part <= 1) return "Dễ";
  if (part === 2) return "Trung bình";
  if (part === 3) return "Trung bình – khó";
  return "Khó";
}

export function listeningDifficultyForLesson(meta: {
  examSlug: string;
  part: number;
}): ReadingDifficulty {
  return listeningDifficultyFromPart(meta.part, meta.examSlug);
}

/**
 * Ước lượng độ khó (cùng thang Dễ / Trung bình / … như luyện đọc) từ transcript.
 */
export function estimateListeningDifficultyFromTranscript(
  plain: string,
  part: number,
  examSlug?: string,
): ReadingDifficulty {
  if (examSlug === "tactics-basic") return "Dễ";

  const trimmed = plain.trim();
  if (!trimmed) return listeningDifficultyFromPart(part, examSlug);

  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = countPassageWords(trimmed);
  const avgLen = averageWordLength(words);
  const longRatio = longWordRatio(words);

  let score = part - 1;
  if (wordCount >= 450) score += 1;
  if (wordCount >= 700) score += 1;
  if (avgLen >= 4.8) score += 1;
  if (longRatio >= 0.06) score += 1;
  if (longRatio >= 0.1) score += 1;

  if (score <= 1) return "Dễ";
  if (score === 2) return "Trung bình";
  if (score === 3) return "Trung bình – khó";
  return "Khó";
}
