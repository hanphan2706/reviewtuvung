import type { ReadingIeltsLibrarySort } from "@/lib/reading/library-sort";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";

export {
  parseReadingIeltsLibrarySort,
  type ReadingIeltsLibrarySort,
} from "@/lib/reading/library-sort";

export function sortReadingIeltsTests(
  tests: readonly ReadingIeltsTest[],
  sort: ReadingIeltsLibrarySort,
): ReadingIeltsTest[] {
  const list = [...tests];
  list.sort((a, b) => {
    const orderA = a.catalogOrder;
    const orderB = b.catalogOrder;
    return sort === "newest" ? orderB - orderA : orderA - orderB;
  });
  return list;
}
