import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  countCompletedListeningLessons,
  countCompletedReadingArticles,
  LISTENING_LESSONS_TOTAL,
  READING_ARTICLES_TOTAL,
  vocabularyReviewedToday,
} from "@/lib/profile/learning-progress";
import { parseReviewDayTallies } from "@/lib/review-day-stats";
import { countDue } from "@/lib/srs";
import { mapServerStreak } from "@/lib/reading/reading-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ configured: false });
  }

  const userId = auth.user.id;
  const now = Date.now();

  const [progressResult, logResult, listeningLogResult, wordsResult, settingsResult] = await Promise.all([
    supabase
      .from("reading_progress")
      .select("current_streak,longest_streak,last_read_date,articles_opened")
      .eq("user_id", userId)
      .maybeSingle(),
    supabase.from("reading_article_log").select("article_key,progress").eq("user_id", userId),
    supabase.from("listening_lesson_log").select("lesson_id,progress").eq("user_id", userId),
    supabase.from("srs_words").select("id,next_review_at").eq("user_id", userId),
    supabase
      .from("srs_settings")
      .select("review_day_tallies")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (progressResult.error) {
    return NextResponse.json({ configured: true, error: progressResult.error.message }, { status: 500 });
  }

  if (logResult.error || listeningLogResult.error || wordsResult.error || settingsResult.error) {
    const message =
      logResult.error?.message ??
      listeningLogResult.error?.message ??
      wordsResult.error?.message ??
      settingsResult.error?.message ??
      "Lỗi tải dữ liệu";
    return NextResponse.json({ configured: true, error: message }, { status: 500 });
  }

  const streakRow = progressResult.data ?? {
    current_streak: 0,
    longest_streak: 0,
    last_read_date: null,
    articles_opened: 0,
  };
  const streak = mapServerStreak(streakRow);

  const logRows =
    (logResult.data as { article_key: string; progress: number }[] | null)?.filter(
      (r) => typeof r.article_key === "string",
    ) ?? [];

  const listeningLogRows =
    (listeningLogResult.data as { lesson_id: string; progress: number }[] | null)?.filter(
      (r) => typeof r.lesson_id === "string",
    ) ?? [];

  const wordRows =
    (wordsResult.data as { id: string; next_review_at: string }[] | null)?.filter(
      (r) => typeof r.next_review_at === "string",
    ) ?? [];

  const wordsForDue = wordRows.map((r) => ({
    id: r.id,
    userId,
    deckId: "",
    term: "",
    definition: "",
    createdAt: now,
    nextReviewAt: new Date(r.next_review_at).getTime(),
    lastReviewedAt: null,
    lastRating: null,
    hardPriority: false,
  }));

  const tallies = parseReviewDayTallies(
    (settingsResult.data as { review_day_tallies?: unknown } | null)?.review_day_tallies,
  );

  return NextResponse.json({
    configured: true,
    readingStreak: streak.currentStreak,
    readingLongestStreak: streak.longestStreak,
    readingArticlesCompleted: countCompletedReadingArticles(logRows),
    readingArticlesTotal: READING_ARTICLES_TOTAL,
    listeningLessonsCompleted: countCompletedListeningLessons(listeningLogRows),
    listeningLessonsTotal: LISTENING_LESSONS_TOTAL,
    vocabularyTotal: wordRows.length,
    vocabularyReviewedToday: vocabularyReviewedToday(tallies, now),
    vocabularyDueToday: countDue(wordsForDue, now),
  });
}
