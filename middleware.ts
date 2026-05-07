import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * OAuth đôi khi redirect nhầm về `/` với `?code=` (Site URL trong Supabase).
 * Chuyển sang `/auth/callback` để đổi code lấy session cookie đúng chỗ.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname !== "/" || !url.searchParams.has("code")) {
    return NextResponse.next();
  }

  const target = new URL("/auth/callback", url.origin);
  url.searchParams.forEach((value, key) => {
    target.searchParams.set(key, value);
  });
  if (!target.searchParams.has("next")) {
    target.searchParams.set("next", "/tu-hoc/tu-vung");
  }
  if (!target.searchParams.has("popup")) {
    target.searchParams.set("popup", "1");
  }

  return NextResponse.redirect(target);
}

export const config = {
  matcher: "/",
};
