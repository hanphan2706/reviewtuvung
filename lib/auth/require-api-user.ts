import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { getCurrentUser } from "@/lib/supabase/server";

type RequireApiUserResult =
  | { user: User; response: null }
  | { user: null; response: NextResponse };

/** Route Handler: trả 401 nếu chưa đăng nhập (bổ sung cho middleware). */
export async function requireApiUser(): Promise<RequireApiUserResult> {
  const user = await getCurrentUser();
  if (user) {
    return { user, response: null };
  }

  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname("", hostHeader);
  if (isDevAuthBypassForHost(hostname)) {
    return { user: devAuthBypassUser(), response: null };
  }

  return {
    user: null,
    response: NextResponse.json({ error: "Đăng nhập để tiếp tục." }, { status: 401 }),
  };
}
