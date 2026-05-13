import { useSyncExternalStore } from "react";

const COARSE_POINTER_MQ = "(pointer: coarse)";

function subscribeCoarsePointer(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(COARSE_POINTER_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getCoarsePointerSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(COARSE_POINTER_MQ).matches;
}

function getCoarsePointerServerSnapshot() {
  return false;
}

/** `true` khi thiết bị dùng đầu vào trỏ thô (thường là cảm ứng); bàn phím ảo thường đã có emoji. */
export function useCoarsePointer(): boolean {
  return useSyncExternalStore(subscribeCoarsePointer, getCoarsePointerSnapshot, getCoarsePointerServerSnapshot);
}
