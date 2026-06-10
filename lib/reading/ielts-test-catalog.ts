import type { ReadingPilotId } from "@/lib/reading/hub-articles";

export type ReadingIeltsTest = {
  pilotId: ReadingPilotId;
  /** e.g. Cambridge 20 · Test 1 */
  label: string;
  bookTitle: string;
  testNumber: number;
  coverImageUrl: string;
  /** Tuỳ chỉnh crop ảnh bìa trên thẻ Luyện đề (vd. `50% 42%`). */
  coverImageObjectPosition?: string;
  /** Thứ tự catalog — mới hơn = chỉ số lớn hơn. */
  catalogOrder: number;
};

export const CAMBRIDGE_IELTS_19_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/i/bia1_ielts_19aca.jpg";

export const CAMBRIDGE_IELTS_18_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-18aca_1.jpg";

/** Ảnh bìa Cambridge IELTS 20 Academic. */
export const CAMBRIDGE_IELTS_20_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/i/bia_1_ielts_20_aca.jpg";

export const READING_IELTS_EXAM_HREF = "/tu-hoc/luyen-doc/luyen-de-ielts";

export function readingIeltsTestExamHref(pilotId: ReadingPilotId): string {
  return `${READING_IELTS_EXAM_HREF}/${pilotId}/lam-bai`;
}

export const READING_CAMBRIDGE_TESTS: readonly ReadingIeltsTest[] = [
  {
    pilotId: "cam19-test4",
    label: "Cambridge 19 · Test 4",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 8,
  },
  {
    pilotId: "cam19-test3",
    label: "Cambridge 19 · Test 3",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 7,
  },
  {
    pilotId: "cam19-test2",
    label: "Cambridge 19 · Test 2",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 6,
  },
  {
    pilotId: "cam19-test1",
    label: "Cambridge 19 · Test 1",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 5,
  },
  {
    pilotId: "cam18-test1",
    label: "Cambridge 18 · Test 1",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    coverImageObjectPosition: "50% 42%",
    catalogOrder: 4,
  },
  {
    pilotId: "cam20-test4",
    label: "Cambridge 20 · Test 4",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 3,
  },
  {
    pilotId: "cam20-test3",
    label: "Cambridge 20 · Test 3",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 2,
  },
  {
    pilotId: "cam20-test2",
    label: "Cambridge 20 · Test 2",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 1,
  },
  {
    pilotId: "cam20-test1",
    label: "Cambridge 20 · Test 1",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: 0,
  },
] as const;

const TEST_BY_PILOT = new Map(READING_CAMBRIDGE_TESTS.map((test) => [test.pilotId, test]));

export function getReadingIeltsTest(pilotId: string): ReadingIeltsTest | null {
  return TEST_BY_PILOT.get(pilotId as ReadingPilotId) ?? null;
}

export function isReadingIeltsTestPilotId(pilotId: string): pilotId is ReadingPilotId {
  return TEST_BY_PILOT.has(pilotId as ReadingPilotId);
}
