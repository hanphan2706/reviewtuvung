import { readingArticleCatalogOrder } from "@/lib/reading/article-catalog-order";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";

export const READING_LIBRARY_SORT_VALUES = ["newest", "oldest", "reads-desc"] as const;

export type ReadingLibrarySort = (typeof READING_LIBRARY_SORT_VALUES)[number];

export const READING_LIBRARY_SORT_DEFAULT: ReadingLibrarySort = "newest";

export type ReadingLibrarySortOption = {
  value: ReadingLibrarySort;
  label: string;
};

export const READING_LIBRARY_SORT_OPTIONS: ReadingLibrarySortOption[] = [
  { value: "newest", label: "Mới nhất → Cũ nhất" },
  { value: "oldest", label: "Cũ nhất → Mới nhất" },
  { value: "reads-desc", label: "Nhiều lượt đọc → Ít lượt đọc" },
];

export function parseReadingLibrarySort(raw: string | null | undefined): ReadingLibrarySort {
  if (raw && (READING_LIBRARY_SORT_VALUES as readonly string[]).includes(raw)) {
    return raw as ReadingLibrarySort;
  }
  return READING_LIBRARY_SORT_DEFAULT;
}

export function sortReadingLibraryArticles(
  articles: ReadingHubArticle[],
  sort: ReadingLibrarySort,
  readCounts: Record<string, number>,
): ReadingHubArticle[] {
  const list = [...articles];
  list.sort((a, b) => {
    if (sort === "reads-desc") {
      const diff = (readCounts[b.id] ?? 0) - (readCounts[a.id] ?? 0);
      if (diff !== 0) return diff;
      return readingArticleCatalogOrder(b) - readingArticleCatalogOrder(a);
    }
    const orderA = readingArticleCatalogOrder(a);
    const orderB = readingArticleCatalogOrder(b);
    return sort === "newest" ? orderB - orderA : orderA - orderB;
  });
  return list;
}
