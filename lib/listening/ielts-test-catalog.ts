import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import { cambridgeIeltsCatalogOrder } from "@/lib/exam/ielts-catalog-order";
import {
  CAMBRIDGE_IELTS_13_COVER_STYLE,
  CAMBRIDGE_IELTS_13_COVER_URL,
  CAMBRIDGE_IELTS_14_COVER_STYLE,
  CAMBRIDGE_IELTS_14_COVER_URL,
  CAMBRIDGE_IELTS_15_COVER_STYLE,
  CAMBRIDGE_IELTS_15_COVER_URL,
  CAMBRIDGE_IELTS_16_COVER_STYLE,
  CAMBRIDGE_IELTS_16_COVER_URL,
  CAMBRIDGE_IELTS_17_COVER_STYLE,
  CAMBRIDGE_IELTS_17_COVER_URL,
  CAMBRIDGE_IELTS_18_COVER_URL,
  CAMBRIDGE_IELTS_19_COVER_URL,
  CAMBRIDGE_IELTS_20_COVER_URL,
  CAMBRIDGE_IELTS_21_COVER_URL,
} from "@/lib/reading/ielts-test-catalog";

export type ListeningIeltsTestId =
  | "cam21-test1"
  | "cam21-test2"
  | "cam21-test3"
  | "cam21-test4"
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
  | "cam19-test4"
  | "cam17-test1"
  | "cam17-test2"
  | "cam17-test3"
  | "cam17-test4"
  | "cam16-test1"
  | "cam16-test2"
  | "cam16-test3"
  | "cam16-test4"
  | "cam15-test1"
  | "cam15-test2"
  | "cam15-test3"
  | "cam15-test4"
  | "cam14-test1"
  | "cam14-test2"
  | "cam14-test3"
  | "cam14-test4"
  | "cam13-test1"
  | "cam13-test2"
  | "cam13-test3"
  | "cam13-test4";

export type ListeningIeltsTest = {
  testId: ListeningIeltsTestId;
  /** e.g. Cambridge 19 · Test 1 */
  label: string;
  bookTitle: string;
  testNumber: number;
  coverImageUrl: string;
  /** Đồng bộ crop với thẻ luyện đọc (vd. `40% 39.5%`). */
  coverImageObjectPosition?: string;
  /** Phóng to ảnh nguồn có viền trắng (Cam 13). */
  coverImageScale?: number;
  coverImageTransformOrigin?: string;
  catalogOrder: number;
};

export const LISTENING_IELTS_EXAM_HREF = `${LISTENING_HUB_HREF}/luyen-de-ielts`;

export function listeningIeltsTestExamHref(testId: ListeningIeltsTestId): string {
  return `${LISTENING_IELTS_EXAM_HREF}/${testId}/lam-bai`;
}

export const LISTENING_CAMBRIDGE_TESTS: readonly ListeningIeltsTest[] = [
  {
    testId: "cam21-test4",
    label: "Cambridge 21 · Test 4",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 4),
  },
  {
    testId: "cam21-test3",
    label: "Cambridge 21 · Test 3",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 3),
  },
  {
    testId: "cam21-test2",
    label: "Cambridge 21 · Test 2",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 2),
  },
  {
    testId: "cam21-test1",
    label: "Cambridge 21 · Test 1",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 1),
  },
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
  {
    testId: "cam17-test4",
    label: "Cambridge 17 · Test 4",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 4),
  },
  {
    testId: "cam17-test3",
    label: "Cambridge 17 · Test 3",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 3),
  },
  {
    testId: "cam17-test2",
    label: "Cambridge 17 · Test 2",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 2),
  },
  {
    testId: "cam17-test1",
    label: "Cambridge 17 · Test 1",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 1),
  },
  {
    testId: "cam16-test4",
    label: "Cambridge 16 · Test 4",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 4),
  },
  {
    testId: "cam16-test3",
    label: "Cambridge 16 · Test 3",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 3),
  },
  {
    testId: "cam16-test2",
    label: "Cambridge 16 · Test 2",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 2),
  },
  {
    testId: "cam16-test1",
    label: "Cambridge 16 · Test 1",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 1),
  },
  {
    testId: "cam15-test4",
    label: "Cambridge 15 · Test 4",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 4),
  },
  {
    testId: "cam15-test3",
    label: "Cambridge 15 · Test 3",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 3),
  },
  {
    testId: "cam15-test2",
    label: "Cambridge 15 · Test 2",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 2),
  },
  {
    testId: "cam15-test1",
    label: "Cambridge 15 · Test 1",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 1),
  },
  {
    testId: "cam14-test4",
    label: "Cambridge 14 · Test 4",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 4),
  },
  {
    testId: "cam14-test3",
    label: "Cambridge 14 · Test 3",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 3),
  },
  {
    testId: "cam14-test2",
    label: "Cambridge 14 · Test 2",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 2),
  },
  {
    testId: "cam14-test1",
    label: "Cambridge 14 · Test 1",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 1),
  },
  {
    testId: "cam13-test4",
    label: "Cambridge 13 · Test 4",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 4),
  },
  {
    testId: "cam13-test3",
    label: "Cambridge 13 · Test 3",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 3),
  },
  {
    testId: "cam13-test2",
    label: "Cambridge 13 · Test 2",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 2),
  },
  {
    testId: "cam13-test1",
    label: "Cambridge 13 · Test 1",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 1),
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
