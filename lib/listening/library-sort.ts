import { listeningDifficultyForLesson } from "@/lib/listening/estimate-listening-level";
import { listeningLessonCatalogOrder } from "@/lib/listening/listening-catalog-order";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { readingDifficultyRank } from "@/lib/reading/library-sort";

export const LISTENING_LIBRARY_SORT_VALUES = [
  "newest",
  "oldest",
  "difficulty-asc",
  "listens-desc",
] as const;

export type ListeningLibrarySort = (typeof LISTENING_LIBRARY_SORT_VALUES)[number];

export const LISTENING_LIBRARY_SORT_DEFAULT: ListeningLibrarySort = "newest";

export type ListeningLibrarySortOption = {
  value: ListeningLibrarySort;
  label: string;
};

export const LISTENING_LIBRARY_SORT_OPTIONS: ListeningLibrarySortOption[] = [
  { value: "newest", label: "Mới nhất → Cũ nhất" },
  { value: "oldest", label: "Cũ nhất → Mới nhất" },
  { value: "difficulty-asc", label: "Dễ nhất → Khó nhất" },
  { value: "listens-desc", label: "Nhiều lượt nghe → Ít lượt nghe" },
];

export function parseListeningLibrarySort(raw: string | null | undefined): ListeningLibrarySort {
  if (raw && (LISTENING_LIBRARY_SORT_VALUES as readonly string[]).includes(raw)) {
    return raw as ListeningLibrarySort;
  }
  return LISTENING_LIBRARY_SORT_DEFAULT;
}

export function sortListeningLibraryLessons(
  lessons: readonly ListeningPartMeta[],
  sort: ListeningLibrarySort,
  listenCounts: Record<string, number>,
): ListeningPartMeta[] {
  const list = [...lessons];
  list.sort((a, b) => {
    if (sort === "listens-desc") {
      const diff = (listenCounts[b.id] ?? 0) - (listenCounts[a.id] ?? 0);
      if (diff !== 0) return diff;
      return listeningLessonCatalogOrder(b) - listeningLessonCatalogOrder(a);
    }
    if (sort === "difficulty-asc") {
      const diff =
        readingDifficultyRank(listeningDifficultyForLesson(a)) -
        readingDifficultyRank(listeningDifficultyForLesson(b));
      if (diff !== 0) return diff;
      return listeningLessonCatalogOrder(b) - listeningLessonCatalogOrder(a);
    }
    const orderA = listeningLessonCatalogOrder(a);
    const orderB = listeningLessonCatalogOrder(b);
    return sort === "newest" ? orderB - orderA : orderA - orderB;
  });
  return list;
}
