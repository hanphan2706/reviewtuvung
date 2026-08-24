import type { WritingSampleCatalogEntry } from "@/lib/ielts-samples/writing-sample-types";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import { WRITING_HUB_HREF, writingSampleHref } from "@/lib/writing/writing-hub-nav";

/** Minh họa kỹ năng — cùng thư mục `public/` với luyện nghe / đọc / nói / ngữ pháp. */
export const WRITING_ILLUSTRATION_PRIMARY = "/luyen%20viet.jpg";
export const WRITING_ILLUSTRATION_SECONDARY = "/luyen%20viet%201.jpg";

export const WRITING_HUB_INTRO = {
  title: "Luyện viết",
  subtitle:
    "Viết học thuật rõ ý, đúng giọng — luyện từ bài mẫu IELTS đến từng câu, để bài viết chắc tay hơn.",
} as const;

/** Featured demo tĩnh (trang /mau-bai/digitalization) — hub dùng bài random từ thư viện. */
export const WRITING_FEATURED_SAMPLE = {
  title: "The Impact of Digitalization on Traditional Education",
  href: `${WRITING_HUB_HREF}/mau-bai/digitalization`,
} as const;

export type WritingFeaturedCard = {
  id: string;
  title: string;
  taskLabel: string;
  excerpt: string;
  href: string;
  viewsLabel: string;
};

function viewsLabelForId(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  const count = 240 + (hash % 2600);
  if (count >= 1000) {
    const k = (count / 1000).toFixed(1).replace(/\.0$/, "");
    return `${k}k Views`;
  }
  return `${count} Views`;
}

export function writingFeaturedCardFromCatalog(entry: WritingSampleCatalogEntry): WritingFeaturedCard {
  return {
    id: entry.id,
    title: formatWritingSampleTitle(entry.title, entry.id),
    taskLabel: entry.task === "task1" ? "IELTS Writing Task 1" : "IELTS Writing Task 2",
    excerpt: entry.excerpt,
    href: writingSampleHref(entry.id),
    viewsLabel: viewsLabelForId(entry.id),
  };
}

export function pickRandomWritingFeaturedCard(
  cards: readonly WritingFeaturedCard[],
): WritingFeaturedCard | null {
  if (cards.length === 0) return null;
  return cards[Math.floor(Math.random() * cards.length)] ?? null;
}

export type WritingCoreModule = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "book" | "chart" | "pen";
};

export const WRITING_CORE_MODULES: readonly WritingCoreModule[] = [
  {
    id: "sample-library",
    title: "Sample Writing Library",
    description: "Kho bài mẫu band cao, lọc theo dạng Task 1 và Task 2 để xem cách triển khai ý.",
    href: `${WRITING_HUB_HREF}/thu-vien-mau`,
    icon: "book",
  },
  {
    id: "task-1",
    title: "IELTS Writing Task 1",
    description: "Luyện miêu tả biểu đồ, bản đồ và số liệu so sánh bằng ngôn ngữ học thuật.",
    href: `${WRITING_HUB_HREF}/task-1`,
    icon: "chart",
  },
  {
    id: "task-2",
    title: "IELTS Writing Task 2",
    description: "Luyện lập luận, mạch ý và từ vựng học thuật cho bài luận.",
    href: `${WRITING_HUB_HREF}/task-2`,
    icon: "pen",
  },
];

export type WritingSentenceSkill = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "translate" | "cloze" | "grammar";
};

export const WRITING_SENTENCE_SKILLS: readonly WritingSentenceSkill[] = [
  {
    id: "dich-cau",
    title: "Dịch câu (Việt → Anh)",
    description: "Luyện dịch câu tiếng Việt phức tạp sang tiếng Anh học thuật.",
    href: `${WRITING_HUB_HREF}/dich-cau`,
    icon: "translate",
  },
  {
    id: "cloze",
    title: "Hoàn thành câu (Cloze)",
    description: "Luyện collocation và từ vựng học thuật ngay trong ngữ cảnh.",
    href: `${WRITING_HUB_HREF}/cloze`,
    icon: "cloze",
  },
  {
    id: "sua-loi",
    title: "Sửa lỗi câu",
    description: "Tìm và sửa lỗi ngữ pháp, từ vựng hoặc chính tả thường gặp trong câu viết học thuật.",
    href: `${WRITING_HUB_HREF}/sua-loi`,
    icon: "grammar",
  },
];
