import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import { cambridgeIeltsCatalogOrder } from "@/lib/exam/ielts-catalog-order";
import {
  CAMBRIDGE_IELTS_18_COVER_URL,
  CAMBRIDGE_IELTS_19_COVER_URL,
  CAMBRIDGE_IELTS_20_COVER_URL,
} from "@/lib/reading/ielts-test-catalog";

export type ListeningIeltsTestId =
  | "cam20-test1"
  | "cam20-test2"
  | "cam20-test3"
  | "cam20-test4"
  | "cam18-test1"
  | "cam18-test2"
  | "cam18-test3"
  | "cam18-test4"
  | "cam19-test1"
  | "cam19-test2"
  | "cam19-test3"
  | "cam19-test4";

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
    testId: "cam20-test4",
    label: "Cambridge 20 · Test 4",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 4),
  },
  {
    testId: "cam20-test3",
    label: "Cambridge 20 · Test 3",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 3),
  },
  {
    testId: "cam20-test2",
    label: "Cambridge 20 · Test 2",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 2),
  },
  {
    testId: "cam20-test1",
    label: "Cambridge 20 · Test 1",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 1),
  },
  {
    testId: "cam19-test4",
    label: "Cambridge 19 · Test 4",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 4),
  },
  {
    testId: "cam19-test3",
    label: "Cambridge 19 · Test 3",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 3),
  },
  {
    testId: "cam19-test2",
    label: "Cambridge 19 · Test 2",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 2),
  },
  {
    testId: "cam19-test1",
    label: "Cambridge 19 · Test 1",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 1),
  },
  {
    testId: "cam18-test4",
    label: "Cambridge 18 · Test 4",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(18, 4),
  },
  {
    testId: "cam18-test3",
    label: "Cambridge 18 · Test 3",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(18, 3),
  },
  {
    testId: "cam18-test2",
    label: "Cambridge 18 · Test 2",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(18, 2),
  },
  {
    testId: "cam18-test1",
    label: "Cambridge 18 · Test 1",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(18, 1),
  },
] as const;

const TEST_BY_ID = new Map(LISTENING_CAMBRIDGE_TESTS.map((test) => [test.testId, test]));

export function getListeningIeltsTest(testId: string): ListeningIeltsTest | null {
  return TEST_BY_ID.get(testId as ListeningIeltsTestId) ?? null;
}

export function isListeningIeltsTestId(testId: string): testId is ListeningIeltsTestId {
  return TEST_BY_ID.has(testId as ListeningIeltsTestId);
}

export function listeningPartIdForTest(testId: ListeningIeltsTestId, part: number): string {
  const m = testId.match(/^(cam\d+)-test(\d+)$/);
  if (!m) throw new Error(`Invalid listening test id: ${testId}`);
  return `${m[1]}-t${m[2]}-p${part}`;
}
