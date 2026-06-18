import type { RealExamListing } from "@/lib/exam/real-exam-catalog";
import type { ListeningIeltsTest } from "@/lib/listening/ielts-test-catalog";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";
import type { ReadingIeltsLibrarySort } from "@/lib/reading/library-sort";

export type ReadingIeltsExamGridItem =
  | { kind: "real"; key: string; exam: RealExamListing }
  | { kind: "cambridge"; key: string; test: ReadingIeltsTest };

export type ListeningIeltsExamGridItem =
  | { kind: "real"; key: string; exam: RealExamListing }
  | { kind: "cambridge"; key: string; test: ListeningIeltsTest };

function sortByCatalogOrder<T extends { catalogOrder: number }>(
  rows: T[],
  sort: ReadingIeltsLibrarySort,
): T[] {
  rows.sort((a, b) => (sort === "newest" ? b.catalogOrder - a.catalogOrder : a.catalogOrder - b.catalogOrder));
  return rows;
}

export function buildReadingIeltsExamGridItems(
  realExams: readonly RealExamListing[],
  tests: readonly ReadingIeltsTest[],
  sort: ReadingIeltsLibrarySort,
): ReadingIeltsExamGridItem[] {
  const rows = sortByCatalogOrder(
    [
      ...realExams.map((exam) => ({
        catalogOrder: exam.catalogOrder,
        item: { kind: "real" as const, key: `real:${exam.slug}`, exam },
      })),
      ...tests.map((test) => ({
        catalogOrder: test.catalogOrder,
        item: { kind: "cambridge" as const, key: test.pilotId, test },
      })),
    ],
    sort,
  );
  return rows.map((row) => row.item);
}

export function buildListeningIeltsExamGridItems(
  realExams: readonly RealExamListing[],
  tests: readonly ListeningIeltsTest[],
  sort: ReadingIeltsLibrarySort,
): ListeningIeltsExamGridItem[] {
  const rows = sortByCatalogOrder(
    [
      ...realExams.map((exam) => ({
        catalogOrder: exam.catalogOrder,
        item: { kind: "real" as const, key: `real:${exam.slug}`, exam },
      })),
      ...tests.map((test) => ({
        catalogOrder: test.catalogOrder,
        item: { kind: "cambridge" as const, key: test.testId, test },
      })),
    ],
    sort,
  );
  return rows.map((row) => row.item);
}
