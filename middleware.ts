import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSupabaseBrowserConfig } from "@/lib/supabase/config";

/**
 * 1) OAuth đôi khi redirect nhầm về `/` với `?code=` → chuyển sang `/auth/callback`.
 * 2) Làm mới session cookie (chuẩn @supabase/ssr + Next.js) — tránh tab sau OAuth không có JWT.
 */
export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname === "/" && url.searchParams.has("code")) {
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

  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  const config = getSupabaseBrowserConfig();
  if (!config) {
    return response;
  }

  const supabase = createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
