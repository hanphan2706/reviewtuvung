import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";
import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";
import { normalizeListeningLessonId } from "@/lib/listening/listening-progress";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

async function loadListenCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const lesson of LISTENING_PARTS_PILOT) {
    counts[lesson.id] = 0;
  }

  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return counts;

  const { data, error } = await supabase.from("listening_lesson_log").select("lesson_id");
  if (error || !data) return counts;

  for (const row of data) {
    const lessonId =
      typeof row.lesson_id === "string" ? normalizeListeningLessonId(row.lesson_id) : null;
    if (!lessonId) continue;
    counts[lessonId] = (counts[lessonId] ?? 0) + 1;
  }

  return counts;
}

const getCachedListenCounts = unstable_cache(loadListenCounts, ["listening-lesson-listen-counts-v1"], {
  revalidate: 120,
});

export async function GET() {
  const counts = await getCachedListenCounts();
  return NextResponse.json({ counts, configured: Boolean(createServiceRoleSupabaseClient()) });
}
