"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { OAUTH_NEXT_COOKIE, OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import { safeInternalPath } from "@/lib/safe-internal-path";

function readNextFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${OAUTH_NEXT_COOKIE}=`))
    ?.split("=")[1];
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return null;
  }
}

function isPopupFlow(searchParams: URLSearchParams): boolean {
  if (searchParams.get("popup") === "1") return true;
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((row) => {
    const i = row.indexOf("=");
    if (i === -1) return false;
    const name = row.slice(0, i);
    const val = row.slice(i + 1);
    return name === OAUTH_POPUP_COOKIE && val === "1";
  });
}

function clearOauthCookiesOnClient() {
  document.cookie = `${OAUTH_NEXT_COOKIE}=; Path=/; Max-Age=0`;
  document.cookie = `${OAUTH_POPUP_COOKIE}=; Path=/; Max-Age=0`;
}

function redirectOpenerAndClose(nextPath: string) {
  const go = nextPath.startsWith("/") ? nextPath : "/tu-hoc/tu-vung";
  const full = `${window.location.origin}${go}`;
  const type = "anthichtuhoc-oauth";
  try {
    if (window.opener && !window.opener.closed) {
      try {
        window.opener.location.replace(full);
        setTimeout(() => {
          try {
            window.close();
          } catch {
            /* ignore */
          }
        }, 80);
        return;
      } catch {
        /* fall through */
      }
      try {
        window.opener.postMessage({ type, ok: true, next: go }, "*");
        setTimeout(() => {
          try {
            window.close();
          } catch {
            /* ignore */
          }
        }, 80);
        return;
      } catch {
        /* fall through */
      }
    }
  } catch {
    /* fall through */
  }
  window.location.replace(full);
}

export function AuthCallbackInner() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Đang đăng nhập…");

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const oauthError = searchParams.get("error");
      const code = searchParams.get("code");
      const nextPath = safeInternalPath(searchParams.get("next") ?? readNextFromCookie() ?? undefined);
      const popup = isPopupFlow(searchParams);

      if (oauthError) {
        clearOauthCookiesOnClient();
        const fail = `/tu-hoc/tu-vung?auth_error=${encodeURIComponent(oauthError)}`;
        if (popup) {
          try {
            if (window.opener && !window.opener.closed) {
              window.opener.location.replace(`${window.location.origin}${fail}`);
            }
          } catch {
            /* ignore */
          }
          window.location.replace(`${window.location.origin}${fail}`);
        } else {
          window.location.replace(`${window.location.origin}${fail}`);
        }
        return;
      }

      if (!code) {
        clearOauthCookiesOnClient();
        window.location.replace(`${window.location.origin}/tu-hoc/tu-vung`);
        return;
      }

      const supabase = createBrowserSupabaseClient();
      if (!supabase) {
        clearOauthCookiesOnClient();
        window.location.replace(`${window.location.origin}/tu-hoc/tu-vung?auth_error=${encodeURIComponent("Thiếu cấu hình Supabase")}`);
        return;
      }

      /** Đổi code → session trong trình duyệt để PKCE verifier đọc từ cùng cookie storage với lúc signInWithOAuth. */
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (cancelled) return;

      if (error) {
        clearOauthCookiesOnClient();
        const msg = error.message;
        const failUrl = `/tu-hoc/tu-vung?auth_error=${encodeURIComponent(msg)}`;
        if (popup) {
          try {
            if (window.opener && !window.opener.closed) {
              window.opener.location.replace(`${window.location.origin}${failUrl}`);
            }
          } catch {
            /* ignore */
          }
        }
        window.location.replace(`${window.location.origin}${failUrl}`);
        return;
      }

      clearOauthCookiesOnClient();

      if (popup) {
        redirectOpenerAndClose(nextPath);
        return;
      }

      window.location.replace(`${window.location.origin}${nextPath}`);
    };

    void run().catch(() => {
      if (!cancelled) {
        setMessage("Đăng nhập thất bại.");
        window.location.replace(`${window.location.origin}/tu-hoc/tu-vung?auth_error=${encodeURIComponent("exchange failed")}`);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#f5f5f7] px-4 text-sm text-zinc-600">
      {message}
    </div>
  );
}
