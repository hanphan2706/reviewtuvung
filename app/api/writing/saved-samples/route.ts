import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingSample } from "@/lib/ielts-samples/writing-sample-registry";
import { excerptWritingPrompt } from "@/lib/ielts-samples/writing-sample-types";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import type { WritingSavedSampleItem } from "@/lib/writing/writing-progress-types";
import { writingSampleHref } from "@/lib/writing/writing-hub-nav";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type { WritingSavedSampleItem };

type SavedRow = {
  sample_id: string;
  saved_at: string;
};

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ samples: [], configured: false });
  }

  const { data, error } = await supabase
    .from("writing_saved_samples")
    .select("sample_id,saved_at")
    .eq("user_id", auth.user.id)
    .order("saved_at", { ascending: false })
    .limit(200);

  if (error) {
    return NextResponse.json({ samples: [], configured: true, error: error.message }, { status: 500 });
  }

  const samples: WritingSavedSampleItem[] = [];
  for (const row of (data as SavedRow[] | null) ?? []) {
    const sample = getWritingSample(row.sample_id);
    if (!sample) continue;
    samples.push({
      sampleId: sample.id,
      task: sample.task,
      title: formatWritingSampleTitle(sample.title, sample.id),
      excerpt: excerptWritingPrompt(sample.promptHtml, 180),
      wordCount: sample.wordCount ?? 0,
      savedAt: row.saved_at,
      href: writingSampleHref(sample.id),
    });
  }

  return NextResponse.json({ samples, configured: true });
}

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let sampleId = "";
  try {
    const body = (await req.json()) as { sampleId?: unknown };
    sampleId = typeof body.sampleId === "string" ? body.sampleId.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const sample = getWritingSample(sampleId);
  if (!sample) {
    return NextResponse.json({ ok: false, error: "Không tìm thấy bài mẫu." }, { status: 404 });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const { error } = await supabase.from("writing_saved_samples").upsert({
    user_id: auth.user.id,
    sample_id: sample.id,
    saved_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    saved: true,
    sample: {
      sampleId: sample.id,
      task: sample.task,
      title: formatWritingSampleTitle(sample.title, sample.id),
      excerpt: excerptWritingPrompt(sample.promptHtml, 180),
      wordCount: sample.wordCount ?? 0,
      href: writingSampleHref(sample.id),
    },
  });
}
