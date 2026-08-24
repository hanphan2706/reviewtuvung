import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingSample } from "@/lib/ielts-samples/writing-sample-registry";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type RouteContext = {
  params: Promise<{ sampleId: string }>;
};

export async function GET(_req: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { sampleId } = await context.params;
  const sample = getWritingSample(sampleId);
  if (!sample) {
    return NextResponse.json({ saved: false }, { status: 404 });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ saved: false, configured: false });
  }

  const { data, error } = await supabase
    .from("writing_saved_samples")
    .select("sample_id")
    .eq("user_id", auth.user.id)
    .eq("sample_id", sample.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ saved: false, configured: true, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ saved: Boolean(data), configured: true });
}

export async function DELETE(_req: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { sampleId } = await context.params;
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, configured: false });
  }

  const { error } = await supabase
    .from("writing_saved_samples")
    .delete()
    .eq("user_id", auth.user.id)
    .eq("sample_id", sampleId);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, saved: false });
}
