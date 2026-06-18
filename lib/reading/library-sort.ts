import { readingArticleCatalogOrder } from "@/lib/reading/article-catalog-order";
import {
  isCompassPublishingPilot,
  type ReadingDifficulty,
  type ReadingHubArticle,
} from "@/lib/reading/hub-articles";

export const READING_LIBRARY_SORT_VALUES = [
  "newest",
  "oldest",
  "difficulty-desc",
  "difficulty-asc",
  "length-desc",
  "length-asc",
] as const;

export type ReadingLibrarySort = (typeof READING_LIBRARY_SORT_VALUES)[number];

export const READING_LIBRARY_SORT_DEFAULT: ReadingLibrarySort = "newest";

/** Chỉ dùng trên trang luyện đề IELTS (full test). */
export const READING_IELTS_LIBRARY_SORT_VALUES = ["newest", "oldest"] as const;

export type ReadingIeltsLibrarySort = (typeof READING_IELTS_LIBRARY_SORT_VALUES)[number];

export type ReadingLibrarySortOption = {
  value: ReadingLibrarySort;
  label: string;
};

const READING_DIFFICULTY_ORDER: ReadingDifficulty[] = ["Dễ", "Trung bình", "Trung bình – khó", "Khó"];

export const READING_LIBRARY_SORT_OPTIONS: ReadingLibrarySortOption[] = [
  { value: "newest", label: "Mới nhất → Cũ nhất" },
  { value: "oldest", label: "Cũ nhất → Mới nhất" },
  { value: "difficulty-desc", label: "Khó → Dễ" },
  { value: "difficulty-asc", label: "Dễ → Khó" },
  { value: "length-desc", label: "Dài nhất → Ngắn nhất" },
  { value: "length-asc", label: "Ngắn nhất → Dài nhất" },
];

export const READING_IELTS_LIBRARY_SORT_OPTIONS: ReadingLibrarySortOption[] =
  READING_LIBRARY_SORT_OPTIONS.filter((option) =>
    (READING_IELTS_LIBRARY_SORT_VALUES as readonly string[]).includes(option.value),
  );

export function parseReadingLibrarySort(raw: string | null | undefined): ReadingLibrarySort {
  if (raw && (READING_LIBRARY_SORT_VALUES as readonly string[]).includes(raw)) {
    return raw as ReadingLibrarySort;
  }
  return READING_LIBRARY_SORT_DEFAULT;
}

export function parseReadingIeltsLibrarySort(raw: string | null | undefined): ReadingIeltsLibrarySort {
  if (raw && (READING_IELTS_LIBRARY_SORT_VALUES as readonly string[]).includes(raw)) {
    return raw as ReadingIeltsLibrarySort;
  }
  return "newest";
}

export function readingDifficultyRank(difficulty: ReadingDifficulty): number {
  return READING_DIFFICULTY_ORDER.indexOf(difficulty);
}

function fallbackReadMinutes(article: ReadingHubArticle): number {
  return isCompassPublishingPilot(article.pilotId) ? 4 : 13;
}

function articleReadMinutes(
  article: ReadingHubArticle,
  readMinutesByArticleId: Record<string, number>,
): number {
  return readMinutesByArticleId[article.id] ?? fallbackReadMinutes(article);
}

function catalogTieBreak(a: ReadingHubArticle, b: ReadingHubArticle): number {
  return readingArticleCatalogOrder(b) - readingArticleCatalogOrder(a);
}

export function sortReadingLibraryArticles(
  articles: ReadingHubArticle[],
  sort: ReadingLibrarySort,
  readMinutesByArticleId: Record<string, number> = {},
): ReadingHubArticle[] {
  const list = [...articles];
  list.sort((a, b) => {
    if (sort === "difficulty-desc" || sort === "difficulty-asc") {
      const diff = readingDifficultyRank(b.difficulty) - readingDifficultyRank(a.difficulty);
      if (diff !== 0) return sort === "difficulty-desc" ? diff : -diff;
      return catalogTieBreak(a, b);
    }

    if (sort === "length-desc" || sort === "length-asc") {
      const diff =
        articleReadMinutes(b, readMinutesByArticleId) - articleReadMinutes(a, readMinutesByArticleId);
      if (diff !== 0) return sort === "length-desc" ? diff : -diff;
      return catalogTieBreak(a, b);
    }

    const orderA = readingArticleCatalogOrder(a);
    const orderB = readingArticleCatalogOrder(b);
    return sort === "newest" ? orderB - orderA : orderA - orderB;
  });
  return list;
}
