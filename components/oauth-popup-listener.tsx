"use client";

import { useEffect } from "react";

/** Nhận postMessage từ tab OAuth popup (nếu bật lại luồng popup). */
export const AUTH_POPUP_MESSAGE_TYPE = "anthichtuhoc-oauth";

function isAllowedMessageOrigin(origin: string): boolean {
  if (typeof window === "undefined") return false;
  if (origin === window.location.origin) return true;
  try {
    const a = new URL(origin);
    const b = new URL(window.location.href);
    const loopback = new Set(["localhost", "127.0.0.1"]);
    if (
      a.port === b.port &&
      a.protocol === b.protocol &&
      loopback.has(a.hostname) &&
      loopback.has(b.hostname)
    ) {
      return true;
    }
  } catch {
    /* ignore */
  }
  const extra =
    process.env.NEXT_PUBLIC_AUTH_MESSAGE_ORIGINS?.split(",").map((s) => s.trim()).filter(Boolean) ?? [];
  return extra.includes(origin);
}

export function OAuthPopupListener() {
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data as { type?: string; ok?: boolean; next?: string; reason?: string } | null;
      if (!data || data.type !== AUTH_POPUP_MESSAGE_TYPE) return;
      if (!isAllowedMessageOrigin(event.origin)) return;

      if (data.ok) {
        const next =
          typeof data.next === "string" && data.next.startsWith("/") ? data.next : "/tu-hoc/tu-vung";
        window.location.assign(`${window.location.origin}${next}`);
      } else if (data.ok === false && typeof data.reason === "string") {
        console.warn("[OAuth popup]", data.reason);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
