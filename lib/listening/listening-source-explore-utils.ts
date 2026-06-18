import type { ListeningLibrarySort } from "@/lib/listening/library-sort";
import type {
  ListeningSourceCategory,
  ListeningSourceDifficulty,
} from "@/lib/listening/listening-source-catalog";

const SOURCE_DIFFICULTY_ORDER: ListeningSourceDifficulty[] = ["Beginner", "Intermediate", "Advanced"];

function sourceDifficultyRank(difficulty: ListeningSourceDifficulty): number {
  return SOURCE_DIFFICULTY_ORDER.indexOf(difficulty);
}

export function filterListeningSourceCategories(
  categories: readonly ListeningSourceCategory[],
  query: string,
): ListeningSourceCategory[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...categories];
  return categories.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.id.includes(q),
  );
}

export function sortListeningSourceCategories(
  categories: readonly ListeningSourceCategory[],
  sort: ListeningLibrarySort,
): ListeningSourceCategory[] {
  const list = [...categories];
  list.sort((a, b) => {
    if (sort === "listens-desc") {
      const diff = b.lessonCount - a.lessonCount;
      if (diff !== 0) return diff;
      return b.catalogOrder - a.catalogOrder;
    }
    if (sort === "difficulty-asc") {
      const diff = sourceDifficultyRank(a.difficulty) - sourceDifficultyRank(b.difficulty);
      if (diff !== 0) return diff;
      return b.catalogOrder - a.catalogOrder;
    }
    if (sort === "oldest") {
      return a.catalogOrder - b.catalogOrder;
    }
    return b.catalogOrder - a.catalogOrder;
  });
  return list;
}
