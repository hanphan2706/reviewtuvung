import { EGIU_UNITS } from "@/lib/grammar/egiu/egiu-catalog";
import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";
import { READING_HUB_ARTICLES } from "@/lib/reading/hub-articles";
import { readingArticleHref } from "@/lib/reading/article-routes";
import { listPublishedCatalog } from "@/lib/vocabulary/vocabulary-unit-registry";

export type SelfStudyPickerItem = {
  id: string;
  skill: "vocabulary" | "grammar" | "listening" | "reading" | "writing";
  label: string;
  href: string;
  group: string;
};

const WRITING_HUB_ITEMS: SelfStudyPickerItem[] = [
  {
    id: "writing-hub",
    skill: "writing",
    label: "Luyện viết — Hub",
    href: "/tu-hoc/luyen-viet",
    group: "Luyện viết",
  },
  {
    id: "writing-task1",
    skill: "writing",
    label: "Writing Task 1",
    href: "/tu-hoc/luyen-viet/task-1",
    group: "Luyện viết",
  },
  {
    id: "writing-task2",
    skill: "writing",
    label: "Writing Task 2",
    href: "/tu-hoc/luyen-viet/task-2",
    group: "Luyện viết",
  },
  {
    id: "writing-samples",
    skill: "writing",
    label: "Thư viện mẫu bài",
    href: "/tu-hoc/luyen-viet/thu-vien-mau",
    group: "Luyện viết",
  },
];

function vocabularyItems(): SelfStudyPickerItem[] {
  return listPublishedCatalog().map((entry) => ({
    id: `vocab-${entry.id}`,
    skill: "vocabulary" as const,
    label: entry.title,
    href: `/tu-hoc/tu-vung/unit/${entry.id}`,
    group: "Từ vựng",
  }));
}

function grammarItems(): SelfStudyPickerItem[] {
  return EGIU_UNITS.map((unit) => ({
    id: `grammar-${unit.id}`,
    skill: "grammar" as const,
    label: `Unit ${unit.unitNumber}: ${unit.title}`,
    href: `/tu-hoc/ngu-phap/chu-de/${unit.id}`,
    group: "Ngữ pháp",
  }));
}

function readingItems(): SelfStudyPickerItem[] {
  return READING_HUB_ARTICLES.map((article) => ({
    id: `reading-${article.id}`,
    skill: "reading" as const,
    label: article.title,
    href: readingArticleHref(article),
    group: "Luyện đọc",
  }));
}

function listeningItems(): SelfStudyPickerItem[] {
  return LISTENING_PARTS_PILOT.map((part) => ({
    id: `listening-${part.slug}`,
    skill: "listening" as const,
    label: part.title,
    href: `/tu-hoc/luyen-nghe/${part.slug}`,
    group: "Luyện nghe",
  }));
}

let cachedCatalog: SelfStudyPickerItem[] | null = null;

export function listSelfStudyPickerItems(): SelfStudyPickerItem[] {
  if (cachedCatalog) return cachedCatalog;
  cachedCatalog = [
    ...vocabularyItems(),
    ...grammarItems(),
    ...readingItems(),
    ...listeningItems(),
    ...WRITING_HUB_ITEMS,
  ];
  return cachedCatalog;
}

export function filterSelfStudyPickerItems(query: string): SelfStudyPickerItem[] {
  const q = query.trim().toLowerCase();
  const items = listSelfStudyPickerItems();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q) ||
      item.skill.includes(q),
  );
}
