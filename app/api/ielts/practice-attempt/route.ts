import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import type { IeltsPracticeSkill } from "@/lib/ielts/ielts-practice-attempts";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function parseSkill(value: unknown): IeltsPracticeSkill | null {
  return value === "reading" || value === "listening" ? value : null;
}

export async function POST(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const skill = parseSkill((body as { skill?: unknown }).skill);
  const band = Number((body as { band?: unknown }).band);
  const examKeyRaw = (body as { examKey?: unknown }).examKey;
  const examKey = typeof examKeyRaw === "string" ? examKeyRaw.slice(0, 240) : null;

  if (!skill || !Number.isFinite(band) || band < 0 || band > 9) {
    return NextResponse.json({ error: "invalid skill or band" }, { status: 400 });
  }

  const roundedBand = Math.round(band * 2) / 2;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("ielts_practice_attempt_log").insert({
    user_id: auth.user.id,
    skill,
    band: roundedBand,
    exam_key: examKey,
  });

  if (error) {
    return NextResponse.json({ ok: false, stored: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
