import { NextResponse, type NextRequest } from "next/server";
import { OAUTH_NEXT_COOKIE, OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import { safeInternalPath } from "@/lib/safe-internal-path";
import { exchangeOAuthCodeOnResponse } from "@/lib/supabase/server";

function readNextPath(request: NextRequest, requestUrl: URL): string {
  const fromQuery = requestUrl.searchParams.get("next");
  const raw = request.cookies.get(OAUTH_NEXT_COOKIE)?.value;
  let fromCookie: string | null = null;
  if (raw) {
    try {
      fromCookie = decodeURIComponent(raw);
    } catch {
      fromCookie = null;
    }
  }
  return safeInternalPath(fromQuery ?? fromCookie ?? undefined);
}

function clearOauthReturnCookies(response: NextResponse) {
  response.cookies.set(OAUTH_NEXT_COOKIE, "", { path: "/", maxAge: 0 });
  response.cookies.set(OAUTH_POPUP_COOKIE, "", { path: "/", maxAge: 0 });
}

function popupCloseHtml(nextPath: string): string {
  const nextJson = JSON.stringify(nextPath);
  const msgType = JSON.stringify("anthichtuhoc-oauth");
  /** Ưu tiên điều hướng thẳng tab opener — postMessage đôi khi không kích hoạt đổi giao diện trên localhost. */
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Đăng nhập</title></head><body style="margin:0;font-family:system-ui,sans-serif;background:#f5f5f7;color:#444;padding:1rem;text-align:center"><p>Đã đăng nhập.</p><p style="font-size:0.875rem">Bạn có thể đóng cửa sổ này.</p><script>(function(){var next=${nextJson};var go=(next&&next.charAt(0)==="/"?next:"/tu-hoc/tu-vung");var full=window.location.origin+go;var type=${msgType};try{if(window.opener&&!window.opener.closed){try{window.opener.location.replace(full);setTimeout(function(){try{window.close()}catch(e){}},80);return}catch(e){}try{window.opener.postMessage({type:type,ok:true,next:go},"*");setTimeout(function(){try{window.close()}catch(e){}},80);return}catch(e2){}}}catch(e){}window.location.replace(full)})();</script></body></html>`;
}

/** Popup báo lỗi đổi code → session (PKCE, redirect URL, v.v.). */
function popupExchangeErrorHtml(message: string): string {
  const msgJson = JSON.stringify(message);
  const msgType = JSON.stringify("anthichtuhoc-oauth");
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Đăng nhập</title></head><body style="margin:0;font-family:system-ui,sans-serif;background:#fff5f5;color:#7f1d1d;padding:1rem;text-align:center"><p>Không hoàn tất đăng nhập.</p><p style="font-size:0.875rem;word-break:break-word">${message}</p><script>(function(){var type=${msgType};var reason=${msgJson};var errUrl=window.location.origin+"/tu-hoc/tu-vung?auth_error="+encodeURIComponent(reason);try{if(window.opener&&!window.opener.closed){try{window.opener.location.replace(errUrl);setTimeout(function(){try{window.close()}catch(e){}},80);return}catch(e){}try{window.opener.postMessage({type:type,ok:false,reason:reason},"*");setTimeout(function(){try{window.close()}catch(e){}},80);return}catch(e2){}}}catch(e){}window.location.replace(errUrl)})();</script></body></html>`;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const oauthError = requestUrl.searchParams.get("error");
  const nextPath = readNextPath(request, requestUrl);
  const popup =
    requestUrl.searchParams.get("popup") === "1" || request.cookies.get(OAUTH_POPUP_COOKIE)?.value === "1";

  const skipExchange = Boolean(oauthError) || !code;

  if (popup) {
    if (!code || oauthError) {
      const errHtml = `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"/></head><body style="margin:0;font-family:system-ui,sans-serif;padding:1rem;text-align:center"><p>Không đăng nhập được.</p><script>(function(){var type="anthichtuhoc-oauth";try{if(window.opener&&!window.opener.closed){window.opener.postMessage({type:type,ok:false},"*");window.close();return;}}catch(e){}window.location.assign(window.location.origin+"/tu-hoc/tu-vung");})();</script></body></html>`;
      const errRes = new NextResponse(errHtml, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
      clearOauthReturnCookies(errRes);
      return errRes;
    }
    const res = new NextResponse(popupCloseHtml(nextPath), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
    const { error: exchangeError } = await exchangeOAuthCodeOnResponse(request, res, code, skipExchange);
    if (exchangeError) {
      const errRes = new NextResponse(popupExchangeErrorHtml(exchangeError), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
      clearOauthReturnCookies(errRes);
      return errRes;
    }
    clearOauthReturnCookies(res);
    return res;
  }

  const redirectRes = NextResponse.redirect(new URL(nextPath, requestUrl.origin));
  const { error: redirectExchangeError } = await exchangeOAuthCodeOnResponse(
    request,
    redirectRes,
    code,
    skipExchange,
  );
  clearOauthReturnCookies(redirectRes);
  if (redirectExchangeError) {
    const failUrl = new URL("/tu-hoc/tu-vung", requestUrl.origin);
    failUrl.searchParams.set("auth_error", redirectExchangeError);
    const failRes = NextResponse.redirect(failUrl);
    clearOauthReturnCookies(failRes);
    return failRes;
  }
  return redirectRes;
}
