import type { ReadingDifficulty } from "@/lib/reading/hub-articles";
import {
  getListeningPartById,
  LISTENING_PARTS_PILOT,
  listeningPartDurationMinutes,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import { listeningDifficultyForLesson } from "@/lib/listening/estimate-listening-level";

const LISTEN_COMPLETE_PROGRESS = 0.88;

const VALID_LESSON_IDS = new Set(LISTENING_PARTS_PILOT.map((lesson) => lesson.id));

export type ListeningLessonLogRow = {
  lesson_id: string;
  progress: number;
  opened_at: string;
};

export type ListeningRecentHistoryItem = {
  lessonId: string;
  slug: string;
  title: string;
  subtitle: string;
  difficulty: ReturnType<typeof listeningDifficultyForLesson>;
  difficultyLabel: string;
  listenedAt: string;
  listenedAtLabel: string;
  progress: number;
  progressLabel: string;
};

const DIFFICULTY_HISTORY_LABELS: Record<ReadingDifficulty, string> = {
  "Dễ": "Cơ bản",
  "Trung bình": "Trung bình",
  "Trung bình – khó": "Trung bình – khó",
  Khó: "Nâng cao",
};

export function normalizeListeningLessonId(id: string): string | null {
  const trimmed = id.trim();
  return VALID_LESSON_IDS.has(trimmed) ? trimmed : null;
}

export function countCompletedListeningLessons(
  rows: readonly { lesson_id: string; progress: number }[],
): number {
  const best = new Map<string, number>();
  for (const row of rows) {
    const id = normalizeListeningLessonId(row.lesson_id);
    if (!id) continue;
    const progress = typeof row.progress === "number" ? row.progress : 0;
    best.set(id, Math.max(best.get(id) ?? 0, progress));
  }
  let completed = 0;
  for (const progress of best.values()) {
    if (progress >= LISTEN_COMPLETE_PROGRESS) completed += 1;
  }
  return completed;
}

export function formatListeningProgressLabel(progress: number): string {
  if (!Number.isFinite(progress) || progress <= 0) return "—";
  if (progress >= LISTEN_COMPLETE_PROGRESS) return "100%";
  return `${Math.round(Math.min(1, progress) * 100)}%`;
}

export function formatListeningHistorySubtitle(meta: ListeningPartMeta): string {
  const minutes = listeningPartDurationMinutes(meta);
  return `${meta.metaPill} • ${minutes} phút`;
}

export function formatListeningHistoryDifficultyLabel(
  difficulty: ReadingDifficulty,
): string {
  return DIFFICULTY_HISTORY_LABELS[difficulty] ?? difficulty;
}

export function formatListeningHistoryDate(iso: string, now = new Date()): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";

  const startOfDay = (d: Date) => {
    const copy = new Date(d);
    copy.setHours(0, 0, 0, 0);
    return copy;
  };

  const today = startOfDay(now);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const listenedDay = startOfDay(date);

  const time = date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (listenedDay.getTime() === today.getTime()) return `Hôm nay, ${time}`;
  if (listenedDay.getTime() === yesterday.getTime()) return "Hôm qua";

  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function mapListeningRecentHistoryItem(
  row: ListeningLessonLogRow,
  meta: ListeningPartMeta,
): ListeningRecentHistoryItem {
  const progress = typeof row.progress === "number" ? row.progress : 0;
  const difficulty = listeningDifficultyForLesson(meta);
  return {
    lessonId: meta.id,
    slug: meta.slug,
    title: meta.title,
    subtitle: formatListeningHistorySubtitle(meta),
    difficulty,
    difficultyLabel: formatListeningHistoryDifficultyLabel(difficulty),
    listenedAt: row.opened_at,
    listenedAtLabel: formatListeningHistoryDate(row.opened_at),
    progress,
    progressLabel: formatListeningProgressLabel(progress),
  };
}

export const LISTENING_LESSONS_TOTAL = LISTENING_PARTS_PILOT.length;
export const LISTENING_COMPLETE_PROGRESS = LISTEN_COMPLETE_PROGRESS;
