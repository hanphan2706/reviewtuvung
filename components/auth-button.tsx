"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
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

export function AuthButton(props: AuthButtonProps) {
  const router = useRouter();
  const popupPollRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
      const origin = window.location.origin;
      const next = safeInternalPath(props.next ?? "/tu-hoc/tu-vung");
      const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(next)}&popup=1`;

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
            router.refresh();
          }
        }, 500);
        return;
      }

      window.location.assign(data.url);
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

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={onClick}
      className={props.className ?? defaultClassName}
    >
      {props.mode === "sign-in" ? (
        <>
          <span className="hidden sm:inline">Đăng nhập để bắt đầu học, lưu và theo dõi tiến độ</span>
          <span className="flex flex-col items-center gap-0.5 leading-snug sm:hidden">
            <span>Đăng nhập để bắt đầu học,</span>
            <span>lưu và theo dõi tiến độ</span>
          </span>
        </>
      ) : (
        (props.signOutLabel ?? "Đăng xuất")
      )}
    </button>
  );
}
