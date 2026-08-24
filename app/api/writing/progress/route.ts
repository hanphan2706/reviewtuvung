import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingPracticePrompt, listWritingSamples } from "@/lib/ielts-samples/writing-sample-registry";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import { stripWritingPromptHtml } from "@/lib/ielts-samples/writing-sample-types";
import type {
  WritingProgressPostPayload,
  WritingProgressSnapshot,
} from "@/lib/writing/writing-progress-types";
import {
  EMPTY_WRITING_PROGRESS,
  MAX_WRITING_ESSAY_BODY_CHARS,
} from "@/lib/writing/writing-progress-types";
import { WRITING_HISTORY_HREF } from "@/lib/writing/writing-hub-nav";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayUtc(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

type ProgressRow = {
  essays_completed: number;
  skill_checks_total: number;
  skill_checks_correct: number;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
};

function practicePromptTotal(): number {
  return listWritingSamples().length;
}

function toSnapshot(row: ProgressRow | null): WritingProgressSnapshot {
  const totalChecks = row?.skill_checks_total ?? 0;
  const correctChecks = row?.skill_checks_correct ?? 0;
  const languageAccuracyPercent =
    totalChecks > 0 ? Math.round((100 * correctChecks) / totalChecks) : 0;

  return {
    essaysCompleted: {
      current: row?.essays_completed ?? 0,
      total: practicePromptTotal(),
    },
    languageAccuracyPercent,
    streakDays: row?.current_streak ?? 0,
    historyHref: WRITING_HISTORY_HREF,
  };
}

function nextStreak(
  existing: ProgressRow | null,
  today: string,
): { currentStreak: number; longestStreak: number; alreadyActiveToday: boolean } {
  const alreadyActiveToday = existing?.last_activity_date === today;
  let currentStreak = 1;
  if (alreadyActiveToday) {
    currentStreak = existing?.current_streak ?? 1;
  } else if (existing?.last_activity_date === yesterdayUtc()) {
    currentStreak = (existing.current_streak ?? 0) + 1;
  }
  const longestStreak = Math.max(existing?.longest_streak ?? 0, currentStreak);
  return { currentStreak, longestStreak, alreadyActiveToday };
}

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({
      progress: { ...EMPTY_WRITING_PROGRESS, essaysCompleted: { current: 0, total: practicePromptTotal() } },
      configured: false,
    });
  }

  const { data, error } = await supabase
    .from("writing_progress")
    .select(
      "essays_completed,skill_checks_total,skill_checks_correct,current_streak,longest_streak,last_activity_date",
    )
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({
      progress: toSnapshot(null),
      configured: true,
      error: error.message,
    });
  }

  return NextResponse.json({ progress: toSnapshot(data as ProgressRow | null), configured: true });
}

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: WritingProgressPostPayload;
  try {
    body = (await req.json()) as WritingProgressPostPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const today = todayUtc();
  const { data: existing } = await supabase
    .from("writing_progress")
    .select(
      "essays_completed,skill_checks_total,skill_checks_correct,current_streak,longest_streak,last_activity_date",
    )
    .eq("user_id", auth.user.id)
    .maybeSingle();

  const row = (existing as ProgressRow | null) ?? null;
  const { currentStreak, longestStreak } = nextStreak(row, today);

  let essaysCompleted = row?.essays_completed ?? 0;
  let skillChecksTotal = row?.skill_checks_total ?? 0;
  let skillChecksCorrect = row?.skill_checks_correct ?? 0;
  let submissionId: number | undefined;

  if (body.kind === "essay") {
    const promptId = typeof body.promptId === "string" ? body.promptId.trim() : "";
    const task = body.task === "task1" || body.task === "task2" ? body.task : null;
    const wordCount =
      typeof body.wordCount === "number" && body.wordCount >= 0 ? Math.floor(body.wordCount) : 0;
    const essayBody = typeof body.body === "string" ? body.body.trim() : "";
    if (!promptId || !task) {
      return NextResponse.json({ ok: false, error: "Missing promptId/task" }, { status: 400 });
    }
    if (!essayBody) {
      return NextResponse.json({ ok: false, error: "Missing essay body" }, { status: 400 });
    }
    if (essayBody.length > MAX_WRITING_ESSAY_BODY_CHARS) {
      return NextResponse.json({ ok: false, error: "Essay too long" }, { status: 400 });
    }
    const minWords = task === "task1" ? 150 : 250;
    if (wordCount < minWords) {
      return NextResponse.json({ ok: false, error: "Below minimum word count" }, { status: 400 });
    }

    const catalogPrompt = getWritingPracticePrompt(promptId, task);
    const title = catalogPrompt
      ? formatWritingSampleTitle(catalogPrompt.title, catalogPrompt.id)
      : typeof body.title === "string"
        ? body.title.trim()
        : "";
    const promptText = catalogPrompt
      ? stripWritingPromptHtml(catalogPrompt.promptHtml)
      : typeof body.promptText === "string"
        ? body.promptText.trim()
        : "";

    const { data: submission, error: submissionError } = await supabase
      .from("writing_essay_submissions")
      .insert({
        user_id: auth.user.id,
        prompt_id: promptId,
        task,
        title,
        prompt_text: promptText,
        body: essayBody,
        word_count: wordCount,
        submitted_at: new Date().toISOString(),
      })
      .select("id")
      .single();
    if (submissionError) {
      return NextResponse.json({ ok: false, error: submissionError.message });
    }
    submissionId =
      typeof submission?.id === "number"
        ? submission.id
        : Number.isFinite(Number(submission?.id))
          ? Number(submission.id)
          : undefined;

    const { data: prior } = await supabase
      .from("writing_essay_log")
      .select("prompt_id")
      .eq("user_id", auth.user.id)
      .eq("prompt_id", promptId)
      .maybeSingle();

    const { error: logError } = await supabase.from("writing_essay_log").upsert({
      user_id: auth.user.id,
      prompt_id: promptId,
      task,
      word_count: wordCount,
      completed_at: new Date().toISOString(),
    });
    if (logError) {
      return NextResponse.json({ ok: false, error: logError.message });
    }

    if (!prior) {
      essaysCompleted += 1;
    }
  } else if (body.kind === "skill") {
    const skill =
      body.skill === "dich-cau" || body.skill === "cloze" || body.skill === "sua-loi"
        ? body.skill
        : null;
    const itemId = typeof body.itemId === "string" ? body.itemId.trim() : "";
    const totalCount =
      typeof body.totalCount === "number" && body.totalCount >= 1 ? Math.floor(body.totalCount) : 0;
    const correctCount =
      typeof body.correctCount === "number" && body.correctCount >= 0
        ? Math.min(Math.floor(body.correctCount), totalCount)
        : 0;
    if (!skill || !itemId || totalCount < 1) {
      return NextResponse.json({ ok: false, error: "Invalid skill payload" }, { status: 400 });
    }

    const { error: logError } = await supabase.from("writing_skill_check_log").insert({
      user_id: auth.user.id,
      skill,
      item_id: itemId,
      correct_count: correctCount,
      total_count: totalCount,
      checked_at: new Date().toISOString(),
    });
    if (logError) {
      return NextResponse.json({ ok: false, error: logError.message });
    }

    skillChecksTotal += totalCount;
    skillChecksCorrect += correctCount;
  } else {
    return NextResponse.json({ ok: false, error: "Unknown kind" }, { status: 400 });
  }

  const nextRow: ProgressRow = {
    essays_completed: essaysCompleted,
    skill_checks_total: skillChecksTotal,
    skill_checks_correct: skillChecksCorrect,
    current_streak: currentStreak,
    longest_streak: longestStreak,
    last_activity_date: today,
  };

  const { error: upsertError } = await supabase.from("writing_progress").upsert({
    user_id: auth.user.id,
    ...nextRow,
    updated_at: new Date().toISOString(),
  });

  if (upsertError) {
    return NextResponse.json({ ok: false, error: upsertError.message });
  }

  return NextResponse.json({
    ok: true,
    configured: true,
    progress: toSnapshot(nextRow),
    ...(submissionId ? { submissionId } : {}),
  });
}
