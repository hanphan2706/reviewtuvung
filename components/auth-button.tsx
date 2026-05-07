"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { OAUTH_NEXT_COOKIE, OAUTH_POPUP_COOKIE } from "@/lib/oauth-return-cookies";
import { safeInternalPath } from "@/lib/safe-internal-path";
import { DEFAULT_USER_ID, defaultSettings, useSrsStore } from "@/store/srs-store";

type AuthButtonProps =
  | {
      mode: "sign-in";
      disabled?: boolean;
      next?: string;
      className?: string;
    }
  | {
      mode: "sign-out";
      disabled?: boolean;
      className?: string;
      /** Mặc định: "Đăng xuất". */
      signOutLabel?: string;
    };

const defaultClassName =
  "inline-flex cursor-pointer items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm disabled:pointer-events-none disabled:opacity-45";

const OAUTH_POPUP_W = 520;
const OAUTH_POPUP_H = 680;

function oauthPopupFeatures(): string {
  const sx = window.screenX ?? window.screenLeft ?? 0;
  const sy = window.screenY ?? window.screenTop ?? 0;
  const vw = window.outerWidth > 80 ? window.outerWidth : window.innerWidth;
  const vh = window.outerHeight > 80 ? window.outerHeight : window.innerHeight;
  const left = Math.max(0, Math.round(sx + (vw - OAUTH_POPUP_W) / 2));
  const top = Math.max(0, Math.round(sy + (vh - OAUTH_POPUP_H) / 2));
  return `width=${OAUTH_POPUP_W},height=${OAUTH_POPUP_H},left=${left},top=${top},scrollbars=yes,resizable=yes`;
}

/** PKCE (code verifier) nằm cookie cùng ngữ cảnh tab. Popup đi Google rồi về thường tách partition → /auth/callback từ popup thiếu cookie → đổi code thất bại. Trên loopback bắt buộc cùng tab. */
function isLoopbackDevHost(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]";
}

/** Supabase chỉ khớp Redirect URL không có query — `.../auth/callback?next=` làm fail → Site URL production. */
function setOAuthReturnCookies(nextInternalPath: string, popupFlow: boolean) {
  const maxAge = 600;
  const enc = encodeURIComponent(nextInternalPath);
  document.cookie = `${OAUTH_NEXT_COOKIE}=${enc}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  if (popupFlow) {
    document.cookie = `${OAUTH_POPUP_COOKIE}=1; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  } else {
    document.cookie = `${OAUTH_POPUP_COOKIE}=; Path=/; Max-Age=0`;
  }
}

export function AuthButton(props: AuthButtonProps) {
  const router = useRouter();
  const popupPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fallbackOAuthUrlRef = useRef<string | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);

  const clearPopupPoll = useCallback(() => {
    if (popupPollRef.current != null) {
      clearInterval(popupPollRef.current);
      popupPollRef.current = null;
    }
  }, []);

  useEffect(() => () => clearPopupPoll(), [clearPopupPoll]);

  const onClick = async () => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      return;
    }

    if (props.mode === "sign-in") {
      setPopupBlocked(false);
      fallbackOAuthUrlRef.current = null;

      const origin = window.location.origin;
      const next = safeInternalPath(props.next ?? "/tu-hoc/tu-vung");

      const sameTabLoopback = isLoopbackDevHost();

      const redirectTo = `${origin}/auth/callback`;

      if (sameTabLoopback) {
        setOAuthReturnCookies(next, false);
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo,
            skipBrowserRedirect: true,
          },
        });
        if (!error && data?.url) {
          window.location.assign(data.url);
        }
        return;
      }

      setOAuthReturnCookies(next, true);

      /** Mở popup ngay (trước await) để không mất “user gesture” — trình duyệt hay chặn window.open sau async. */
      const popupName = "supabase-google-oauth";
      const popup = window.open("", popupName, oauthPopupFeatures());

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          skipBrowserRedirect: true,
        },
      });

      if (error || !data?.url) {
        popup?.close();
        return;
      }

      if (popup && !popup.closed) {
        try {
          popup.location.href = data.url;
        } catch {
          popup.location.assign(data.url);
        }

        clearPopupPoll();
        popupPollRef.current = setInterval(() => {
          if (popup.closed) {
            clearPopupPoll();
            /** reload để server đọc lại cookie session — router.refresh() đôi khi không đổi shell đăng nhập trên localhost */
            window.location.reload();
          }
        }, 500);
        return;
      }

      /** Adblock / “Block pop-ups” thường làm `window.open` trả về null — không redirect ngay để người dùng chủ động trên tab này. */
      fallbackOAuthUrlRef.current = data.url;
      setPopupBlocked(true);
      return;
    }

    await supabase.auth.signOut();
    useSrsStore.getState().replacePayload({
      userId: DEFAULT_USER_ID,
      decks: [],
      words: [],
      settings: defaultSettings,
      reviewDayTallies: {},
    });
    router.refresh();
  };

  if (props.mode === "sign-out") {
    return (
      <button
        type="button"
        disabled={props.disabled}
        onClick={onClick}
        className={props.className ?? defaultClassName}
      >
        {props.signOutLabel ?? "Đăng xuất"}
      </button>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        disabled={props.disabled}
        onClick={onClick}
        className={props.className ?? defaultClassName}
      >
        <>
          <span className="hidden sm:inline">Đăng nhập để bắt đầu học, lưu và theo dõi tiến độ</span>
          <span className="flex flex-col items-center gap-0.5 leading-snug sm:hidden">
            <span>Đăng nhập để bắt đầu học,</span>
            <span>lưu và theo dõi tiến độ</span>
          </span>
        </>
      </button>

      {popupBlocked && fallbackOAuthUrlRef.current ? (
        <output
          aria-live="polite"
          className="block rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 shadow-sm"
        >
          <p className="mb-2 leading-snug">
            Trình duyệt đã chặn cửa sổ đăng nhập (thường do Adblock hoặc chặn pop-up). Bạn có thể đăng nhập trên{" "}
            <strong>cùng tab này</strong>, hoặc tạm tắt chặn pop-up cho trang này rồi thử lại.
          </p>
          <button
            type="button"
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            onClick={() => {
              const url = fallbackOAuthUrlRef.current;
              if (url) window.location.assign(url);
            }}
          >
            Tiếp tục đăng nhập Google trên tab này
          </button>
        </output>
      ) : null}
    </div>
  );
}
