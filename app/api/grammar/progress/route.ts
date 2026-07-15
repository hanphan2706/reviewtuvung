import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { clampGrammarProgress } from "@/lib/grammar/grammar-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ progress: {}, configured: false });
  }

  const { data, error } = await supabase
    .from("grammar_topic_log")
    .select("topic_slug,progress")
    .eq("user_id", auth.user.id);

  if (error) {
    return NextResponse.json({ progress: {}, configured: false, error: error.message });
  }

  const progress: Record<string, number> = {};
  for (const row of data ?? []) {
    if (typeof row.topic_slug === "string") {
      progress[row.topic_slug] = clampGrammarProgress(Number(row.progress) || 0);
    }
  }

  return NextResponse.json({ progress, configured: true });
}

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: { topicSlug?: string; progress?: number };
  try {
    body = (await req.json()) as { topicSlug?: string; progress?: number };
  } catch {
    body = {};
  }

  const topicSlug = typeof body.topicSlug === "string" ? body.topicSlug.trim() : "";
  if (!topicSlug) {
    return NextResponse.json({ ok: false, error: "Invalid topicSlug" }, { status: 400 });
  }

  const progress = clampGrammarProgress(typeof body.progress === "number" ? body.progress : 0);

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const { data: existing } = await supabase
    .from("grammar_topic_log")
    .select("progress")
    .eq("user_id", auth.user.id)
    .eq("topic_slug", topicSlug)
    .maybeSingle();

  const mergedProgress = Math.max(
    clampGrammarProgress(typeof existing?.progress === "number" ? existing.progress : 0),
    progress,
  );

  const { error } = await supabase.from("grammar_topic_log").upsert({
    user_id: auth.user.id,
    topic_slug: topicSlug,
    progress: mergedProgress,
    opened_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ ok: false, configured: false, error: error.message });
  }

  return NextResponse.json({ ok: true, progress: mergedProgress, configured: true });
}
