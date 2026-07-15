import { localDayKey, REVIEW_STATS_DAY_MS, startOfLocalDay } from "@/lib/review-day-stats";
import type { ReviewDayTalliesMap, Word } from "@/lib/types";

export type VocabularyWeekBar = {
  dayStart: number;
  label: string;
  count: number;
  isToday: boolean;
};

const VI_WEEKDAY_SHORT = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"] as const;

export function reviewsCountForDay(tallies: ReviewDayTalliesMap, dayStart: number): number {
  const tally = tallies[localDayKey(dayStart)];
  if (!tally) return 0;
  return tally.hard + tally.ok + tally.easy;
}

export function buildVocabularyWeekBars(
  tallies: ReviewDayTalliesMap,
  now: number,
  dayCount = 7,
): VocabularyWeekBar[] {
  const todayStart = startOfLocalDay(now);
  const firstDay = todayStart - (dayCount - 1) * REVIEW_STATS_DAY_MS;

  return Array.from({ length: dayCount }, (_, i) => {
    const dayStart = firstDay + i * REVIEW_STATS_DAY_MS;
    const d = new Date(dayStart);
    const isToday = dayStart === todayStart;
    return {
      dayStart,
      label: isToday ? "Hôm nay" : VI_WEEKDAY_SHORT[d.getDay()] ?? "T2",
      count: reviewsCountForDay(tallies, dayStart),
      isToday,
    };
  });
}

export function computeVocabularyStreak(tallies: ReviewDayTalliesMap, now: number): number {
  let streak = 0;
  let cursor = startOfLocalDay(now);

  while (reviewsCountForDay(tallies, cursor) > 0) {
    streak += 1;
    cursor -= REVIEW_STATS_DAY_MS;
  }

  return streak;
}

/** % từ đã ôn ít nhất một lần trong deck. */
export function computeDeckLearnedPercent(words: readonly Word[]): number {
  if (words.length === 0) return 0;
  const studied = words.filter((w) => w.lastReviewedAt != null).length;
  return Math.round((studied / words.length) * 100);
}
