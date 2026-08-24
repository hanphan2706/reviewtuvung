import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";
import { countCompletedListeningLessons } from "@/lib/listening/listening-progress";
import { READING_HUB_ARTICLES } from "@/lib/reading/hub-articles";
import { localDayKey } from "@/lib/review-day-stats";
import type { ReviewDayTalliesMap } from "@/lib/types";

const READ_COMPLETE_PROGRESS = 0.88;

const VALID_ARTICLE_IDS = new Set(READING_HUB_ARTICLES.map((a) => a.id));

export type ProfileLearningProgress = {
  readingStreak: number;
  readingLongestStreak: number;
  vocabularyTotal: number;
  vocabularyReviewedToday: number;
  vocabularyDueToday: number;
  readingArticlesCompleted: number;
  readingArticlesTotal: number;
  listeningLessonsCompleted: number;
  listeningLessonsTotal: number;
  writingStreak: number;
  writingEssaysCompleted: number;
  writingEssaysTotal: number;
  writingLanguageAccuracyPercent: number;
  writingSavedCount: number;
  ieltsReadingBandAverage: number | null;
  ieltsListeningBandAverage: number | null;
};

export function normalizeReadingArticleKey(key: string): string | null {
  const base = key.replace(/:vocab$/i, "").trim();
  return VALID_ARTICLE_IDS.has(base) ? base : null;
}

export function countCompletedReadingArticles(
  rows: readonly { article_key: string; progress: number }[],
): number {
  const best = new Map<string, number>();
  for (const row of rows) {
    const id = normalizeReadingArticleKey(row.article_key);
    if (!id) continue;
    const p = typeof row.progress === "number" ? row.progress : 0;
    best.set(id, Math.max(best.get(id) ?? 0, p));
  }
  let completed = 0;
  for (const p of best.values()) {
    if (p >= READ_COMPLETE_PROGRESS) completed += 1;
  }
  return completed;
}

export { countCompletedListeningLessons };

export function vocabularyReviewedToday(tallies: ReviewDayTalliesMap, now = Date.now()): number {
  const tally = tallies[localDayKey(now)];
  if (!tally) return 0;
  return tally.hard + tally.ok + tally.easy;
}

export const READING_ARTICLES_TOTAL = READING_HUB_ARTICLES.length;
export const LISTENING_LESSONS_TOTAL = LISTENING_PARTS_PILOT.length;
