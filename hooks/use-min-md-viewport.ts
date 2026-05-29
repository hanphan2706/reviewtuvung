import { useSyncExternalStore } from "react";

/** Khớp Tailwind `md:` — layout đọc bài dùng nút Dịch neo theo đoạn. */
const MIN_MD_VIEWPORT_MQ = "(min-width: 768px)";

function subscribeMinMdViewport(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(MIN_MD_VIEWPORT_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMinMdViewportSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MIN_MD_VIEWPORT_MQ).matches;
}

function getMinMdViewportServerSnapshot() {
  return false;
}

export function useMinMdViewport(): boolean {
  return useSyncExternalStore(
    subscribeMinMdViewport,
    getMinMdViewportSnapshot,
    getMinMdViewportServerSnapshot,
  );
}
