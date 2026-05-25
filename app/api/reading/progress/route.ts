import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { mapServerStreak } from "@/lib/reading/reading-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayUtc(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ streak: null, configured: false });
  }

  const { data, error } = await supabase
    .from("reading_progress")
    .select("current_streak,longest_streak,last_read_date,articles_opened")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ streak: null, configured: true, error: error.message });
  }

  if (!data) {
    return NextResponse.json({
      streak: mapServerStreak({
        current_streak: 0,
        longest_streak: 0,
        last_read_date: null,
        articles_opened: 0,
      }),
      configured: true,
    });
  }

  return NextResponse.json({ streak: mapServerStreak(data), configured: true });
}

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: { articleKey?: string; progress?: number; vocabFlashcards?: boolean };
  try {
    body = (await req.json()) as { articleKey?: string; progress?: number; vocabFlashcards?: boolean };
  } catch {
    body = {};
  }

  const articleKey = typeof body.articleKey === "string" ? body.articleKey.trim() : "";
  const progress =
    typeof body.progress === "number" && body.progress >= 0 && body.progress <= 1 ? body.progress : 0;
  const vocabFlashcards = body.vocabFlashcards === true;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const today = todayUtc();
  const { data: existing } = await supabase
    .from("reading_progress")
    .select("current_streak,longest_streak,last_read_date,articles_opened")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  let currentStreak = 1;
  if (existing?.last_read_date === today) {
    currentStreak = existing.current_streak;
  } else if (existing?.last_read_date === yesterdayUtc()) {
    currentStreak = (existing.current_streak ?? 0) + 1;
  }

  const longestStreak = Math.max(existing?.longest_streak ?? 0, currentStreak);
  const articlesOpened = (existing?.articles_opened ?? 0) + (existing?.last_read_date === today ? 0 : 1);

  const { error: upsertError } = await supabase.from("reading_progress").upsert({
    user_id: auth.user.id,
    current_streak: currentStreak,
    longest_streak: longestStreak,
    last_read_date: today,
    articles_opened: articlesOpened,
    updated_at: new Date().toISOString(),
  });

  if (upsertError) {
    return NextResponse.json({ ok: false, error: upsertError.message });
  }

  if (articleKey) {
    await supabase.from("reading_article_log").upsert({
      user_id: auth.user.id,
      article_key: vocabFlashcards ? `${articleKey}:vocab` : articleKey,
      progress: vocabFlashcards ? 1 : progress,
      opened_at: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    ok: true,
    streak: mapServerStreak({
      current_streak: currentStreak,
      longest_streak: longestStreak,
      last_read_date: today,
      articles_opened: articlesOpened,
    }),
  });
}
