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

/** Đề thi thật luôn trên đầu; Cambridge sắp theo `catalogOrder` (mặc định Cam 21 → 16). */
function buildIeltsExamGridItems<TItem>(
  realExams: readonly RealExamListing[],
  tests: readonly { catalogOrder: number }[],
  mapReal: (exam: RealExamListing) => TItem,
  mapCambridge: (test: (typeof tests)[number]) => TItem,
  sort: ReadingIeltsLibrarySort,
): TItem[] {
  const realRows = sortByCatalogOrder(
    realExams.map((exam) => ({ catalogOrder: exam.catalogOrder, item: mapReal(exam) })),
    sort,
  );
  const camRows = sortByCatalogOrder(
    tests.map((test) => ({ catalogOrder: test.catalogOrder, item: mapCambridge(test) })),
    sort,
  );
  return [...realRows, ...camRows].map((row) => row.item);
}

export function buildReadingIeltsExamGridItems(
  realExams: readonly RealExamListing[],
  tests: readonly ReadingIeltsTest[],
  sort: ReadingIeltsLibrarySort,
): ReadingIeltsExamGridItem[] {
  return buildIeltsExamGridItems(
    realExams,
    tests,
    (exam) => ({ kind: "real", key: `real:${exam.slug}`, exam }),
    (test) => ({ kind: "cambridge", key: test.pilotId, test }),
    sort,
  );
}

export function buildListeningIeltsExamGridItems(
  realExams: readonly RealExamListing[],
  tests: readonly ListeningIeltsTest[],
  sort: ReadingIeltsLibrarySort,
): ListeningIeltsExamGridItem[] {
  return buildIeltsExamGridItems(
    realExams,
    tests,
    (exam) => ({ kind: "real", key: `real:${exam.slug}`, exam }),
    (test) => ({ kind: "cambridge", key: test.testId, test }),
    sort,
  );
}
