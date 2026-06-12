import type { ListeningLibrarySort } from "@/lib/listening/library-sort";
import type { ListeningSourceCategory } from "@/lib/listening/listening-source-catalog";

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
      return a.catalogOrder - b.catalogOrder;
    }
    if (sort === "oldest") {
      return b.catalogOrder - a.catalogOrder;
    }
    // Mặc định — cùng thứ tự hub: chất giọng → beginners → IELTS parts → Luyện đề IELTS
    return a.catalogOrder - b.catalogOrder;
  });
  return list;
}
