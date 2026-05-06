import type { Rating, ReviewDayTalliesMap, ReviewDayTally } from "@/lib/types";

export const REVIEW_STATS_DAY_MS = 86_400_000;

export function startOfLocalDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function localDayKey(ts: number): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function parseReviewDayTallies(raw: unknown): ReviewDayTalliesMap {
  if (!raw || typeof raw !== "object") return {};
  const out: ReviewDayTalliesMap = {};
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(k)) continue;
    if (!v || typeof v !== "object") continue;
    const o = v as Record<string, unknown>;
    out[k] = {
      hard: Math.max(0, Math.floor(Number(o.hard) || 0)),
      ok: Math.max(0, Math.floor(Number(o.ok) || 0)),
      easy: Math.max(0, Math.floor(Number(o.easy) || 0)),
    };
  }
  return out;
}

export function pruneReviewDayTallies(map: ReviewDayTalliesMap, now: number, keepDays = 120): ReviewDayTalliesMap {
  const cutoff = startOfLocalDay(now) - keepDays * REVIEW_STATS_DAY_MS;
  const out: ReviewDayTalliesMap = {};
  for (const [k, v] of Object.entries(map)) {
    const parts = k.split("-").map(Number);
    if (parts.length !== 3 || parts.some((n) => !Number.isFinite(n))) continue;
    const dayStart = new Date(parts[0], parts[1] - 1, parts[2]).setHours(0, 0, 0, 0);
    if (dayStart >= cutoff) out[k] = v;
  }
  return out;
}

export function bumpReviewDayTally(
  map: ReviewDayTalliesMap,
  now: number,
  rating: Rating,
  keepDays = 120,
): ReviewDayTalliesMap {
  const key = localDayKey(now);
  const prev = map[key] ?? { hard: 0, ok: 0, easy: 0 };
  const next: ReviewDayTally = { ...prev, [rating]: prev[rating] + 1 };
  return pruneReviewDayTallies({ ...map, [key]: next }, now, keepDays);
}

/** % recall trong ngày: (ok + easy − hard) / tổng lượt, clamp 0–100; không ôn → null. */
export function recallPercentForDay(tally: ReviewDayTally | undefined): number | null {
  if (!tally) return null;
  const total = tally.hard + tally.ok + tally.easy;
  if (total <= 0) return null;
  const raw = (100 * (tally.ok + tally.easy - tally.hard)) / total;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

export type RecallDayPoint = {
  dayStart: number;
  /** null = không có lượt ôn trong ngày */
  recallPercent: number | null;
  /** Giá trị vẽ đường (giữ điểm trước / 50 nếu chưa có dữ liệu) */
  lineY: number;
};

export function buildRecallPercentSeries(
  tallies: ReviewDayTalliesMap,
  now: number,
  dayCount: number,
): RecallDayPoint[] {
  const todayStart = startOfLocalDay(now);
  const firstDay = todayStart - (dayCount - 1) * REVIEW_STATS_DAY_MS;
  let lastKnown: number | null = null;
  return Array.from({ length: dayCount }, (_, i) => {
    const dayStart = firstDay + i * REVIEW_STATS_DAY_MS;
    const key = localDayKey(dayStart);
    const p = recallPercentForDay(tallies[key]);
    if (p !== null) lastKnown = p;
    const lineY = p !== null ? p : lastKnown ?? 50;
    return { dayStart, recallPercent: p, lineY };
  });
}
