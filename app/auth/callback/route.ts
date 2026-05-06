import { NextResponse, type NextRequest } from "next/server";
import { safeInternalPath } from "@/lib/safe-internal-path";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function popupCloseHtml(nextPath: string): string {
  const nextJson = JSON.stringify(nextPath);
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Đăng nhập</title></head><body style="margin:0;font-family:system-ui,sans-serif;background:#f5f5f7;color:#444;padding:1rem;text-align:center"><p>Đã đăng nhập.</p><p style="font-size:0.875rem">Bạn có thể đóng cửa sổ này.</p><script>(function(){var next=${nextJson};var go=window.location.origin+next;try{if(window.opener&&!window.opener.closed){window.opener.location.assign(go);window.close();return;}}catch(e){}window.location.assign(go);})();</script></body></html>`;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const oauthError = requestUrl.searchParams.get("error");
  const nextPath = safeInternalPath(requestUrl.searchParams.get("next"));
  const popup = requestUrl.searchParams.get("popup") === "1";

  if (code) {
    const supabase = await createServerSupabaseClient();
    await supabase?.auth.exchangeCodeForSession(code);
  }

  if (popup) {
    if (!code || oauthError) {
      const errHtml = `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"/></head><body style="margin:0;font-family:system-ui,sans-serif;padding:1rem;text-align:center"><p>Không đăng nhập được.</p><script>(function(){try{if(window.opener&&!window.opener.closed){window.close();return;}}catch(e){}window.location.assign(window.location.origin+"/tu-hoc/tu-vung");})();</script></body></html>`;
      return new NextResponse(errHtml, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    return new NextResponse(popupCloseHtml(nextPath), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl.origin));
}
