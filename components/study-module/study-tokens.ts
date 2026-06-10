/** Token từ Stitch export (scholarly_minimalist + listening hub). */
export const studyTokens = {
  surface: "#f8f6fc",
  border: "#E4E4E7",
  accent: "#4B2876",
  primary: "#000001",
  muted: "#47464b",
  container: "#ebe6f4",
  containerLow: "#f3f0f8",
  /** Nền pill nguồn (IELTS Cambridge, Compass Publishing, …). */
  sourcePillBg: "#f5f5f7",
  sourcePillText: "#616365",
} as const;

/** Pill nguồn bài — dùng chung luyện đọc + luyện nghe (hero audio). */
export const studySourcePillClassName =
  "bg-[#f5f5f7] text-[10px] font-bold uppercase tracking-wide text-[#616365]" as const;
