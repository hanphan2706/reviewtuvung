import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { OAUTH_NEXT_COOKIE, OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import {
  OAUTH_ORIGIN_COOKIE,
  readOAuthNextFromCookieValue,
  readOAuthOriginFromCookieValue,
} from "@/lib/oauth-return-path";
import { normalizeAppOrigin } from "@/lib/app-origin";
import { safeInternalPath } from "@/lib/safe-internal-path";
import { getSupabaseBrowserConfig } from "@/lib/supabase/config";

function clearOauthMetaCookies(response: NextResponse): NextResponse {
  response.cookies.set(OAUTH_NEXT_COOKIE, "", { path: "/", maxAge: 0 });
  response.cookies.set(OAUTH_ORIGIN_COOKIE, "", { path: "/", maxAge: 0 });
  response.cookies.set(OAUTH_POPUP_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}

function failRedirect(origin: string, message: string): NextResponse {
  const fail = new URL("/tu-hoc/tu-vung", origin);
  fail.searchParams.set("auth_error", message);
  return clearOauthMetaCookies(NextResponse.redirect(fail));
}

/**
 * Đổi `?code=` → session trên server (đọc PKCE verifier từ cookie request).
 * Redirect về cùng host với request callback (nơi session cookie được gắn).
 */
export async function GET(request: NextRequest) {
  const requestUrl = request.nextUrl;
  const stashedOrigin = readOAuthOriginFromCookieValue(request.cookies.get(OAUTH_ORIGIN_COOKIE)?.value);
  const requestOrigin = normalizeAppOrigin(requestUrl.origin);
  /** Session cookie gắn trên host callback; ưu tiên host đó. Nếu Supabase về localhost nhưng user bắt đầu từ ngrok → vẫn về localhost (cookie không chia sẻ cross-host). */
  const origin = requestOrigin;
  const originMismatch =
    stashedOrigin != null && stashedOrigin !== requestOrigin && process.env.NODE_ENV === "development";
  if (originMismatch) {
    console.warn(
      `[auth] OAuth bắt đầu từ ${stashedOrigin} nhưng callback về ${requestOrigin}. Kiểm tra Redirect URLs (không query) và NEXT_PUBLIC_SITE_URL.`,
    );
  }
  const code = requestUrl.searchParams.get("code");
  const oauthError = requestUrl.searchParams.get("error");

  const fromCookie = readOAuthNextFromCookieValue(request.cookies.get(OAUTH_NEXT_COOKIE)?.value);
  const nextPath = safeInternalPath(fromCookie ?? requestUrl.searchParams.get("next") ?? undefined);

  if (oauthError) {
    return failRedirect(origin, oauthError);
  }

  if (!code) {
    return clearOauthMetaCookies(NextResponse.redirect(new URL("/tu-hoc/tu-vung", origin)));
  }

  const config = getSupabaseBrowserConfig();
  if (!config) {
    return failRedirect(origin, "Thiếu cấu hình Supabase");
  }

  const successUrl = new URL(nextPath, origin);
  successUrl.searchParams.set("auth_sync", "1");
  let response = NextResponse.redirect(successUrl);

  const supabase = createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.redirect(successUrl);
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return failRedirect(origin, error.message);
  }

  return clearOauthMetaCookies(response);
}
