"use client";

import { useEffect } from "react";

function isSameOriginHref(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return true;
  }
  if (href.startsWith("/") && !href.startsWith("//")) return true;
  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  } catch {
    return true;
  }
}

/**
 * Link ra ngoài origin hiện tại → mở tab mới (kể cả HTML Notion inject).
 * Không đụng link nội bộ anthichtuhoc.
 */
export function ExternalLinkNewTab() {
  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || isSameOriginHref(href)) return;

      anchor.target = "_blank";
      const rel = anchor.rel || "";
      if (!/\bnoopener\b/i.test(rel) || !/\bnoreferrer\b/i.test(rel)) {
        anchor.rel = [rel, "noopener", "noreferrer"].filter(Boolean).join(" ").trim();
      }
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  return null;
}
