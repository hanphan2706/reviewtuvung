import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { createSupabaseSrsRepository } from "@/lib/srs-supabase-repository";
import { createStarterUserPayload } from "@/lib/srs-starter-payload";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { UserSrsPayload } from "@/lib/types";

function isUserSrsPayload(value: unknown): value is UserSrsPayload {
  if (!value || typeof value !== "object") return false;
  const p = value as UserSrsPayload;
  return (
    typeof p.userId === "string" &&
    Array.isArray(p.decks) &&
    Array.isArray(p.words) &&
    p.settings != null &&
    typeof p.settings.dailyReviewLimit === "number" &&
    p.reviewDayTallies != null &&
    typeof p.reviewDayTallies === "object"
  );
}

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase chưa được cấu hình." }, { status: 503 });
  }

  try {
    const repository = createSupabaseSrsRepository(supabase);
    const payload = await repository.fetchUserPayload(auth.user.id);
    return NextResponse.json(payload ?? createStarterUserPayload(auth.user.id));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Không tải được dữ liệu từ vựng.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!isUserSrsPayload(body)) {
    return NextResponse.json({ error: "Payload không hợp lệ." }, { status: 400 });
  }

  if (body.userId !== auth.user.id) {
    return NextResponse.json({ error: "userId không khớp tài khoản." }, { status: 403 });
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase chưa được cấu hình." }, { status: 503 });
  }

  try {
    const repository = createSupabaseSrsRepository(supabase);
    await repository.upsertUserPayload(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Không lưu được dữ liệu từ vựng.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
