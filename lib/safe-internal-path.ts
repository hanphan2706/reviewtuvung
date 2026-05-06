/** Chỉ cho phép path nội bộ (chống open redirect). */
export function safeInternalPath(next: string | null | undefined, fallback = "/on-tap"): string {
  if (next == null || typeof next !== "string") return fallback;
  const t = next.trim();
  if (!t.startsWith("/") || t.startsWith("//") || t.includes("://")) return fallback;
  return t;
}
