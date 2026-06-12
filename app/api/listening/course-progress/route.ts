import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { computeCourseCompletion } from "@/lib/listening/listening-course-progress";
import { normalizeListeningLessonId } from "@/lib/listening/listening-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const url = new URL(req.url);
  const lessonIds = [...new Set(url.searchParams.getAll("id"))]
    .map((id) => normalizeListeningLessonId(id))
    .filter((id): id is string => id !== null);

  if (lessonIds.length === 0) {
    return NextResponse.json({ completed: 0, total: 0, percent: 0, configured: true });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ completed: 0, total: lessonIds.length, percent: 0, configured: false });
  }

  const { data, error } = await supabase
    .from("listening_lesson_log")
    .select("lesson_id,progress")
    .eq("user_id", auth.user.id)
    .in("lesson_id", lessonIds);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows =
    (data as { lesson_id: string; progress: number }[] | null)?.filter(
      (row) => typeof row.lesson_id === "string",
    ) ?? [];

  const stats = computeCourseCompletion(rows, lessonIds);
  return NextResponse.json({ ...stats, configured: true });
}
