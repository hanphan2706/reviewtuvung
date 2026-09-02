import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { requireAdminUser } from "@/lib/classroom/admin-auth";
import { requireApiUser } from "@/lib/auth/require-api-user";

type RequireApiAdminResult =
  | { user: User; response: null }
  | { user: null; response: NextResponse };

export async function requireApiAdmin(): Promise<RequireApiAdminResult> {
  const auth = await requireApiUser();
  if (auth.response) return auth;
  if (!requireAdminUser(auth.user)) {
    return {
      user: null,
      response: NextResponse.json({ error: "Không có quyền admin." }, { status: 403 }),
    };
  }
  return { user: auth.user, response: null };
}

import { ClassroomRepositoryError } from "@/lib/classroom/repository";

export function classroomApiError(error: unknown): NextResponse {
  if (error instanceof ClassroomRepositoryError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  const message = error instanceof Error ? error.message : "Đã có lỗi.";
  return NextResponse.json({ error: message }, { status: 500 });
}
