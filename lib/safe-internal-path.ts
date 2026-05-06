/** Chỉ cho phép path nội bộ (chống open redirect). */
export function safeInternalPath(next: string | null | undefined, fallback = "/tu-hoc/tu-vung"): string {
  if (next == null || typeof next !== "string") return fallback;
  const t = next.trim();
  if (!t.startsWith("/") || t.startsWith("//") || t.includes("://")) return fallback;
  return t;
}
