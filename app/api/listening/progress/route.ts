import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { normalizeListeningLessonId } from "@/lib/listening/listening-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: { lessonId?: string; progress?: number };
  try {
    body = (await req.json()) as { lessonId?: string; progress?: number };
  } catch {
    body = {};
  }

  const lessonId = typeof body.lessonId === "string" ? normalizeListeningLessonId(body.lessonId) : null;
  if (!lessonId) {
    return NextResponse.json({ ok: false, error: "Invalid lessonId" }, { status: 400 });
  }

  const progress =
    typeof body.progress === "number" && body.progress >= 0 && body.progress <= 1 ? body.progress : 0;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const { data: existing } = await supabase
    .from("listening_lesson_log")
    .select("progress")
    .eq("user_id", auth.user.id)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  const mergedProgress = Math.max(
    typeof existing?.progress === "number" ? existing.progress : 0,
    progress,
  );

  const { error } = await supabase.from("listening_lesson_log").upsert({
    user_id: auth.user.id,
    lesson_id: lessonId,
    progress: mergedProgress,
    opened_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message });
  }

  return NextResponse.json({ ok: true, progress: mergedProgress, configured: true });
}
