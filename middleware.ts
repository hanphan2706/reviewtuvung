import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  AUTH_ENTRY_PATH,
  isProtectedApiPath,
  isProtectedAppPath,
  isPublicListeningAudioApi,
  isPublicReadingExamApi,
  isPublicReadingExamBootApi,
  isPublicMarketingPath,
  isPublicStudyHubPath,
} from "@/lib/auth/protected-routes";
import {
  isListeningAccentPath,
  isStudyExamPath,
  listeningAccentAuthGatePath,
  studyExamAuthGatePath,
} from "@/lib/auth/study-exam-auth-shared";
import { isPrivateReadingAudioPath } from "@/lib/reading/reading-audio-storage";
import { isBlockedPublicListeningAssetAudio } from "@/lib/media/media-audio-storage";
import { OAUTH_NEXT_COOKIE, OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import {
  OAUTH_ORIGIN_COOKIE,
  readOAuthNextFromCookieValue,
  readOAuthOriginFromCookieValue,
} from "@/lib/oauth-return-path";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { normalizeAppOrigin } from "@/lib/app-origin";
import { refreshSupabaseSession } from "@/lib/supabase/middleware-session";

/**
 * 1) OAuth đôi khi redirect nhầm về `/` với `?code=` → chuyển sang `/auth/callback`.
 * 2) Làm mới session cookie (@supabase/ssr).
 * 3) Chặn route/API học tập khi chưa đăng nhập.
 */
export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (pathname === "/" && url.searchParams.has("code")) {
    const stashedOrigin = readOAuthOriginFromCookieValue(request.cookies.get(OAUTH_ORIGIN_COOKIE)?.value);
    const callbackOrigin = stashedOrigin ?? normalizeAppOrigin(url.origin);
    const target = new URL("/auth/callback", callbackOrigin);
    url.searchParams.forEach((value, key) => {
      target.searchParams.set(key, value);
    });
    if (!target.searchParams.has("next")) {
      const fromCookie = readOAuthNextFromCookieValue(request.cookies.get(OAUTH_NEXT_COOKIE)?.value);
      if (fromCookie) {
        target.searchParams.set("next", fromCookie);
      }
    }
    if (!target.searchParams.has("popup") && request.cookies.get(OAUTH_POPUP_COOKIE)?.value === "1") {
      target.searchParams.set("popup", "1");
    }
    return NextResponse.redirect(target);
  }

  if (pathname.startsWith("/auth/callback")) {
    return NextResponse.next();
  }

  if (isPrivateReadingAudioPath(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  if (isBlockedPublicListeningAssetAudio(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  if (isPublicMarketingPath(pathname)) {
    return NextResponse.next();
  }

  const { response: supabaseResponse, user } = await refreshSupabaseSession(request);
  const hostname = resolveRequestHostname(url.hostname, request.headers.get("host"));
  const devBypass = !user && isDevAuthBypassForHost(hostname);
  const allowAccess = Boolean(user) || devBypass;

  if (isPublicStudyHubPath(pathname)) {
    return supabaseResponse;
  }

  const publicReadingApi =
    isPublicReadingExamApi(pathname, url.searchParams) ||
    isPublicReadingExamBootApi(pathname, url.searchParams);
  const publicListeningApi = isPublicListeningAudioApi(pathname, url.searchParams);

  if (!allowAccess && isProtectedApiPath(pathname) && !publicReadingApi && !publicListeningApi) {
    return NextResponse.json({ error: "Đăng nhập để tiếp tục." }, { status: 401 });
  }

  if (!allowAccess && isProtectedAppPath(pathname)) {
    const returnPath = `${pathname}${url.search}`;
    const loginPath = isStudyExamPath(pathname)
      ? studyExamAuthGatePath(returnPath)
      : isListeningAccentPath(pathname)
        ? listeningAccentAuthGatePath(returnPath)
        : AUTH_ENTRY_PATH;
    const login = new URL(loginPath, url.origin);
    login.searchParams.set("next", returnPath);
    return NextResponse.redirect(login);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
