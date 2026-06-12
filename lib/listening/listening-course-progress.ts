import { LISTENING_COMPLETE_PROGRESS } from "@/lib/listening/listening-progress";

export type CourseCompletionStats = {
  completed: number;
  total: number;
  percent: number;
};

export function computeCourseCompletion(
  rows: readonly { lesson_id: string; progress: number }[],
  lessonIds: readonly string[],
): CourseCompletionStats {
  const idSet = new Set(lessonIds);
  const best = new Map<string, number>();

  for (const row of rows) {
    if (!idSet.has(row.lesson_id)) continue;
    const progress = typeof row.progress === "number" ? row.progress : 0;
    best.set(row.lesson_id, Math.max(best.get(row.lesson_id) ?? 0, progress));
  }

  let completed = 0;
  for (const id of lessonIds) {
    if ((best.get(id) ?? 0) >= LISTENING_COMPLETE_PROGRESS) completed += 1;
  }

  const total = lessonIds.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percent };
}
