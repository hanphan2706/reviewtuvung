export const GRAMMAR_HUB_HREF = "/tu-hoc/ngu-phap" as const;

export const GRAMMAR_PATH_SECTION_ID = "grammar-lo-trinh";
export const GRAMMAR_TOPICS_SECTION_ID = "grammar-chu-de";

export const GRAMMAR_HEADER_NAV = [
  { sectionId: GRAMMAR_PATH_SECTION_ID, label: "Lộ trình học" },
  { sectionId: GRAMMAR_TOPICS_SECTION_ID, label: "Các chủ điểm riêng lẻ" },
] as const;

export function scrollToGrammarSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
