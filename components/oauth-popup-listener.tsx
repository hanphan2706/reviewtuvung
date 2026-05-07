"use client";

import { useEffect } from "react";

/** Khớp với script trong `app/auth/callback/route.ts` (popup đăng nhập xong). */
export const AUTH_POPUP_MESSAGE_TYPE = "anthichtuhoc-oauth";

function isAllowedMessageOrigin(origin: string): boolean {
  if (typeof window === "undefined") return false;
  if (origin === window.location.origin) return true;
  const extra = process.env.NEXT_PUBLIC_AUTH_MESSAGE_ORIGINS?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];
  return extra.includes(origin);
}

export function OAuthPopupListener() {
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data as { type?: string; ok?: boolean; next?: string } | null;
      if (!data || data.type !== AUTH_POPUP_MESSAGE_TYPE) return;
      if (!isAllowedMessageOrigin(event.origin)) return;

      if (data.ok) {
        const next =
          typeof data.next === "string" && data.next.startsWith("/") ? data.next : "/tu-hoc/tu-vung";
        window.location.assign(`${window.location.origin}${next}`);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
