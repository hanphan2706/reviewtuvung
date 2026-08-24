import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  toWritingEssayHistoryItem,
  type WritingEssaySubmissionRow,
} from "@/lib/writing/map-essay-submission";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ essays: [], configured: false });
  }

  const { data, error } = await supabase
    .from("writing_essay_submissions")
    .select("id,prompt_id,task,title,prompt_text,body,word_count,submitted_at")
    .eq("user_id", auth.user.id)
    .order("submitted_at", { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ essays: [], configured: true, error: error.message }, { status: 500 });
  }

  const essays = ((data as WritingEssaySubmissionRow[] | null) ?? []).map(toWritingEssayHistoryItem);
  return NextResponse.json({ essays, configured: true });
}
