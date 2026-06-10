import type { ReadingPilotId } from "@/lib/reading/hub-articles";

export type ReadingIeltsTest = {
  pilotId: ReadingPilotId;
  /** e.g. Cambridge 20 · Test 1 */
  label: string;
  bookTitle: string;
  testNumber: number;
  coverImageUrl: string;
  /** Thứ tự catalog — Test 4 mới nhất. */
  catalogOrder: number;
};

/** Ảnh bìa Cambridge IELTS 20 Academic. */
export const CAMBRIDGE_IELTS_20_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/i/bia_1_ielts_20_aca.jpg";

export const READING_IELTS_EXAM_HREF = "/tu-hoc/luyen-doc/luyen-de-ielts";

export function readingIeltsTestExamHref(pilotId: ReadingPilotId): string {
  return `${READING_IELTS_EXAM_HREF}/${pilotId}/lam-bai`;
}

export const READING_CAMBRIDGE_TESTS: readonly ReadingIeltsTest[] = [
  {
    pilotId: "cam20-test4",
    label: "Cambridge 20 · Test 4",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 4,
  },
  {
    pilotId: "cam20-test3",
    label: "Cambridge 20 · Test 3",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 3,
  },
  {
    pilotId: "cam20-test2",
    label: "Cambridge 20 · Test 2",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 2,
  },
  {
    pilotId: "cam20-test1",
    label: "Cambridge 20 · Test 1",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 1,
  },
] as const;

const TEST_BY_PILOT = new Map(READING_CAMBRIDGE_TESTS.map((test) => [test.pilotId, test]));

export function getReadingIeltsTest(pilotId: string): ReadingIeltsTest | null {
  return TEST_BY_PILOT.get(pilotId as ReadingPilotId) ?? null;
}

export function isReadingIeltsTestPilotId(pilotId: string): pilotId is ReadingPilotId {
  return TEST_BY_PILOT.has(pilotId as ReadingPilotId);
}
