import type { Rating, Word } from "./types";

const DAY_MS = 86_400_000;

export function scheduleAfterRating(word: Word, rating: Rating, now: number): Word {
  let nextReviewAt: number;
  let hardPriority = false;

  switch (rating) {
    case "hard":
      nextReviewAt = now + DAY_MS;
      hardPriority = true;
      break;
    case "ok":
      nextReviewAt = now + 3 * DAY_MS;
      break;
    case "easy":
      nextReviewAt = now + 7 * DAY_MS;
      break;
  }

  return {
    ...word,
    nextReviewAt,
    lastReviewedAt: now,
    lastRating: rating,
    hardPriority,
  };
}

/**
 * Due words for the current moment, ordered for the daily session:
 * 1. Hard-priority (from last Hard rating) first
 * 2. More overdue / expired first
 * 3. Older reviews (stale) before newer reviews
 * 4. New (never reviewed) words last
 */
export function sortDueForSession(words: Word[], now: number): Word[] {
  const due = words.filter((w) => w.nextReviewAt <= now);
  return [...due].sort((a, b) => compareQueue(a, b, now));
}

function compareQueue(a: Word, b: Word, now: number): number {
  if (a.hardPriority !== b.hardPriority) {
    return a.hardPriority ? -1 : 1;
  }

  const overdueA = now - a.nextReviewAt;
  const overdueB = now - b.nextReviewAt;
  if (overdueA !== overdueB) {
    return overdueB - overdueA;
  }

  const la = a.lastReviewedAt ?? Number.POSITIVE_INFINITY;
  const lb = b.lastReviewedAt ?? Number.POSITIVE_INFINITY;
  if (la !== lb) {
    return la - lb;
  }

  return a.createdAt - b.createdAt;
}

export function takeSessionQueue(sortedDue: Word[], dailyLimit: number): Word[] {
  const cap = Math.max(0, Math.floor(dailyLimit));
  return sortedDue.slice(0, cap);
}

export function countDue(words: Word[], now: number): number {
  return words.filter((w) => w.nextReviewAt <= now).length;
}
