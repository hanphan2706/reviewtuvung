export const WRITING_HUB_HREF = "/tu-hoc/luyen-viet" as const;
export const WRITING_HISTORY_HREF = `${WRITING_HUB_HREF}/lich-su` as const;

export const WRITING_FEATURED_SECTION_ID = "writing-featured";
export const WRITING_MODULES_SECTION_ID = "writing-modules";
export const WRITING_SENTENCE_SECTION_ID = "writing-sentence-skills";

export type WritingHeaderNavItem = {
  href: string;
  label: string;
};

export type WritingHeaderDropdown = {
  id: string;
  label: string;
  items: readonly WritingHeaderNavItem[];
};

export const WRITING_MODULES_NAV: readonly WritingHeaderNavItem[] = [
  { href: `${WRITING_HUB_HREF}/thu-vien-mau`, label: "Thư viện bài mẫu" },
  { href: `${WRITING_HUB_HREF}/task-1`, label: "IELTS Writing Task 1" },
  { href: `${WRITING_HUB_HREF}/task-2`, label: "IELTS Writing Task 2" },
];

export const WRITING_SENTENCE_NAV: readonly WritingHeaderNavItem[] = [
  { href: `${WRITING_HUB_HREF}/dich-cau`, label: "Dịch câu (Việt → Anh)" },
  { href: `${WRITING_HUB_HREF}/cloze`, label: "Hoàn thành câu (Cloze)" },
  { href: `${WRITING_HUB_HREF}/sua-loi`, label: "Sửa lỗi câu" },
];

/** Nav header / curtain — dropdown giống luyện nghe & luyện đọc. */
export const WRITING_HEADER_DROPDOWNS: readonly WritingHeaderDropdown[] = [
  { id: "modules", label: "Module chính", items: WRITING_MODULES_NAV },
  { id: "sentence", label: "Luyện kỹ năng câu", items: WRITING_SENTENCE_NAV },
];

export function scrollToWritingSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function writingSampleHref(id: string): string {
  return `${WRITING_HUB_HREF}/thu-vien-mau/${id}`;
}

export function writingPracticeHref(task: "task1" | "task2", id: string): string {
  const segment = task === "task1" ? "task-1" : "task-2";
  return `${WRITING_HUB_HREF}/${segment}/${id}`;
}

export function writingPracticeLibraryHref(task: "task1" | "task2"): string {
  return task === "task1" ? `${WRITING_HUB_HREF}/task-1` : `${WRITING_HUB_HREF}/task-2`;
}

export function writingHistoryItemHref(id: number | string): string {
  return `${WRITING_HISTORY_HREF}/${id}`;
}
