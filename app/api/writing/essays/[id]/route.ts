import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingPracticePrompt } from "@/lib/ielts-samples/writing-sample-registry";
import {
  toWritingEssaySubmission,
  type WritingEssaySubmissionRow,
} from "@/lib/writing/map-essay-submission";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { id: rawId } = await context.params;
  const id = Number.parseInt(rawId, 10);
  if (!Number.isFinite(id) || id < 1) {
    return NextResponse.json({ error: "Không tìm thấy bài viết." }, { status: 404 });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }

  const { data, error } = await supabase
    .from("writing_essay_submissions")
    .select("id,prompt_id,task,title,prompt_text,body,word_count,submitted_at")
    .eq("user_id", auth.user.id)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Không tìm thấy bài viết." }, { status: 404 });
  }

  const row = data as WritingEssaySubmissionRow;
  const catalog = getWritingPracticePrompt(row.prompt_id, row.task === "task1" ? "task1" : "task2");
  const essay = toWritingEssaySubmission(row, catalog?.visualSrc);

  return NextResponse.json({ essay, configured: true });
}
