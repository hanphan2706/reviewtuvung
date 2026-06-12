import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import { CAMBRIDGE_IELTS_19_COVER_URL } from "@/lib/reading/ielts-test-catalog";

export type ListeningIeltsTestId = "cam19-test1" | "cam19-test2";

export type ListeningIeltsTest = {
  testId: ListeningIeltsTestId;
  /** e.g. Cambridge 19 · Test 1 */
  label: string;
  bookTitle: string;
  testNumber: number;
  coverImageUrl: string;
  catalogOrder: number;
};

export const LISTENING_IELTS_EXAM_HREF = `${LISTENING_HUB_HREF}/luyen-de-ielts`;

export function listeningIeltsTestExamHref(testId: ListeningIeltsTestId): string {
  return `${LISTENING_IELTS_EXAM_HREF}/${testId}/lam-bai`;
}

export const LISTENING_CAMBRIDGE_TESTS: readonly ListeningIeltsTest[] = [
  {
    testId: "cam19-test2",
    label: "Cambridge 19 · Test 2",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 2,
  },
  {
    testId: "cam19-test1",
    label: "Cambridge 19 · Test 1",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: 1,
  },
] as const;

const TEST_BY_ID = new Map(LISTENING_CAMBRIDGE_TESTS.map((test) => [test.testId, test]));

export function getListeningIeltsTest(testId: string): ListeningIeltsTest | null {
  return TEST_BY_ID.get(testId as ListeningIeltsTestId) ?? null;
}

export function isListeningIeltsTestId(testId: string): testId is ListeningIeltsTestId {
  return TEST_BY_ID.has(testId as ListeningIeltsTestId);
}

export function listeningPartIdForTest(testNumber: number, part: number): string {
  return `cam19-t${testNumber}-p${part}`;
}
