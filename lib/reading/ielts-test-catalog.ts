import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { cambridgeIeltsCatalogOrder } from "@/lib/exam/ielts-catalog-order";

export type ReadingIeltsTest = {
  pilotId: ReadingPilotId;
  /** e.g. Cambridge 20 · Test 1 */
  label: string;
  bookTitle: string;
  testNumber: number;
  coverImageUrl: string;
  /** Tuỳ chỉnh crop ảnh bìa trên thẻ Luyện đề (vd. `50% 42%`). */
  coverImageObjectPosition?: string;
  /** Phóng to ảnh nguồn có viền trắng (vd. bìa Fahasa ISBN). */
  coverImageScale?: number;
  /** Gốc scale — mặc định trùng `coverImageObjectPosition` hoặc `center center`. */
  coverImageTransformOrigin?: string;
  /** Thứ tự catalog — mới hơn = chỉ số lớn hơn. */
  catalogOrder: number;
};

export const CAMBRIDGE_IELTS_17_COVER_URL = "/cambridge-ielts-17-academic.jpg";

/** Bìa local portrait 915px — cùng kiểu full-bleed như Fahasa Cam 18–20. */
const CAMBRIDGE_IELTS_17_COVER_STYLE = {
  coverImageObjectPosition: "40% 39.5%",
} as const;

export const CAMBRIDGE_IELTS_19_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/i/bia1_ielts_19aca.jpg";

export const CAMBRIDGE_IELTS_18_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-18aca_1.jpg";

/** Ảnh bìa Cambridge IELTS 20 Academic. */
export const CAMBRIDGE_IELTS_20_COVER_URL =
  "https://cdn1.fahasa.com/media/catalog/product/b/i/bia_1_ielts_20_aca.jpg";

export const CAMBRIDGE_IELTS_16_COVER_URL = "/cambridge-ielts-16-academic.jpg";

/** Ảnh nguồn 600×600 có viền trắng hai bên (~13%) — scale để full-bleed; crop giữ lề trên như Cam 17. */
const CAMBRIDGE_IELTS_16_COVER_STYLE = {
  coverImageScale: 1.38,
  coverImageObjectPosition: "40% 39.5%",
  coverImageTransformOrigin: "40% 52%",
} as const;

export const CAMBRIDGE_IELTS_15_COVER_URL = "/cam 15.jpg";

const CAMBRIDGE_IELTS_15_COVER_STYLE = {
  coverImageObjectPosition: "50% 40%",
} as const;

export const CAMBRIDGE_IELTS_14_COVER_URL = "/cam 14.webp";

const CAMBRIDGE_IELTS_14_COVER_STYLE = {
  coverImageObjectPosition: "50% 40%",
} as const;

export const CAMBRIDGE_IELTS_13_COVER_URL = "/cam 13.jpg";

/** Ảnh nguồn 800×800 có viền trắng hai bên (~11%) — scale để full-bleed như Cam 16. */
const CAMBRIDGE_IELTS_13_COVER_STYLE = {
  coverImageScale: 1.3,
  coverImageObjectPosition: "50% 50%",
  coverImageTransformOrigin: "50% 50%",
} as const;

export const CAMBRIDGE_IELTS_12_COVER_URL = "/cam 12.jpg";

/** Ảnh nguồn 800×800 có viền trắng hai bên (~11%) — scale để full-bleed. */
const CAMBRIDGE_IELTS_12_COVER_STYLE = {
  coverImageScale: 1.3,
  coverImageObjectPosition: "50% 50%",
  coverImageTransformOrigin: "50% 50%",
} as const;

export const CAMBRIDGE_IELTS_21_COVER_URL = "/cam 21.png";

export const READING_IELTS_EXAM_HREF = "/tu-hoc/luyen-doc/luyen-de-ielts";

export function readingIeltsTestExamHref(pilotId: ReadingPilotId): string {
  return `${READING_IELTS_EXAM_HREF}/${pilotId}/lam-bai`;
}

export const READING_CAMBRIDGE_TESTS: readonly ReadingIeltsTest[] = [
  {
    pilotId: "cam21-test4",
    label: "Cambridge 21 · Test 4",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 4),
  },
  {
    pilotId: "cam21-test3",
    label: "Cambridge 21 · Test 3",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 3),
  },
  {
    pilotId: "cam21-test2",
    label: "Cambridge 21 · Test 2",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 2),
  },
  {
    pilotId: "cam21-test1",
    label: "Cambridge 21 · Test 1",
    bookTitle: "Cambridge IELTS 21 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_21_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(21, 1),
  },
  {
    pilotId: "cam16-test4",
    label: "Cambridge 16 · Test 4",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 4),
  },
  {
    pilotId: "cam16-test3",
    label: "Cambridge 16 · Test 3",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 3),
  },
  {
    pilotId: "cam16-test2",
    label: "Cambridge 16 · Test 2",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 2),
  },
  {
    pilotId: "cam16-test1",
    label: "Cambridge 16 · Test 1",
    bookTitle: "Cambridge IELTS 16 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_16_COVER_URL,
    ...CAMBRIDGE_IELTS_16_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(16, 1),
  },
  {
    pilotId: "cam15-test4",
    label: "Cambridge 15 · Test 4",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 4),
  },
  {
    pilotId: "cam15-test3",
    label: "Cambridge 15 · Test 3",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 3),
  },
  {
    pilotId: "cam15-test2",
    label: "Cambridge 15 · Test 2",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 2),
  },
  {
    pilotId: "cam15-test1",
    label: "Cambridge 15 · Test 1",
    bookTitle: "Cambridge IELTS 15 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_15_COVER_URL,
    ...CAMBRIDGE_IELTS_15_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(15, 1),
  },
  {
    pilotId: "cam14-test4",
    label: "Cambridge 14 · Test 4",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 4),
  },
  {
    pilotId: "cam14-test3",
    label: "Cambridge 14 · Test 3",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 3),
  },
  {
    pilotId: "cam14-test2",
    label: "Cambridge 14 · Test 2",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 2),
  },
  {
    pilotId: "cam14-test1",
    label: "Cambridge 14 · Test 1",
    bookTitle: "Cambridge IELTS 14 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_14_COVER_URL,
    ...CAMBRIDGE_IELTS_14_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(14, 1),
  },
  {
    pilotId: "cam13-test4",
    label: "Cambridge 13 · Test 4",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 4),
  },
  {
    pilotId: "cam13-test3",
    label: "Cambridge 13 · Test 3",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 3),
  },
  {
    pilotId: "cam13-test2",
    label: "Cambridge 13 · Test 2",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 2),
  },
  {
    pilotId: "cam13-test1",
    label: "Cambridge 13 · Test 1",
    bookTitle: "Cambridge IELTS 13 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_13_COVER_URL,
    ...CAMBRIDGE_IELTS_13_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(13, 1),
  },
  {
    pilotId: "cam12-test4",
    label: "Cambridge 12 · Test 4",
    bookTitle: "Cambridge IELTS 12 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_12_COVER_URL,
    ...CAMBRIDGE_IELTS_12_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(12, 4),
  },
  {
    pilotId: "cam12-test3",
    label: "Cambridge 12 · Test 3",
    bookTitle: "Cambridge IELTS 12 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_12_COVER_URL,
    ...CAMBRIDGE_IELTS_12_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(12, 3),
  },
  {
    pilotId: "cam12-test2",
    label: "Cambridge 12 · Test 2",
    bookTitle: "Cambridge IELTS 12 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_12_COVER_URL,
    ...CAMBRIDGE_IELTS_12_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(12, 2),
  },
  {
    pilotId: "cam12-test1",
    label: "Cambridge 12 · Test 1",
    bookTitle: "Cambridge IELTS 12 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_12_COVER_URL,
    ...CAMBRIDGE_IELTS_12_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(12, 1),
  },
  {
    pilotId: "cam17-test4",
    label: "Cambridge 17 · Test 4",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 4),
  },
  {
    pilotId: "cam17-test3",
    label: "Cambridge 17 · Test 3",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 3),
  },
  {
    pilotId: "cam17-test2",
    label: "Cambridge 17 · Test 2",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 2),
  },
  {
    pilotId: "cam17-test1",
    label: "Cambridge 17 · Test 1",
    bookTitle: "Cambridge IELTS 17 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_17_COVER_URL,
    ...CAMBRIDGE_IELTS_17_COVER_STYLE,
    catalogOrder: cambridgeIeltsCatalogOrder(17, 1),
  },
  {
    pilotId: "cam18-test4",
    label: "Cambridge 18 · Test 4",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    coverImageObjectPosition: "50% 42%",
    catalogOrder: cambridgeIeltsCatalogOrder(18, 4),
  },
  {
    pilotId: "cam18-test3",
    label: "Cambridge 18 · Test 3",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    coverImageObjectPosition: "50% 42%",
    catalogOrder: cambridgeIeltsCatalogOrder(18, 3),
  },
  {
    pilotId: "cam18-test2",
    label: "Cambridge 18 · Test 2",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    coverImageObjectPosition: "50% 42%",
    catalogOrder: cambridgeIeltsCatalogOrder(18, 2),
  },
  {
    pilotId: "cam18-test1",
    label: "Cambridge 18 · Test 1",
    bookTitle: "Cambridge IELTS 18 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_18_COVER_URL,
    coverImageObjectPosition: "50% 42%",
    catalogOrder: cambridgeIeltsCatalogOrder(18, 1),
  },
  {
    pilotId: "cam19-test4",
    label: "Cambridge 19 · Test 4",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 4),
  },
  {
    pilotId: "cam19-test3",
    label: "Cambridge 19 · Test 3",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 3),
  },
  {
    pilotId: "cam19-test2",
    label: "Cambridge 19 · Test 2",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 2),
  },
  {
    pilotId: "cam19-test1",
    label: "Cambridge 19 · Test 1",
    bookTitle: "Cambridge IELTS 19 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_19_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(19, 1),
  },
  {
    pilotId: "cam20-test4",
    label: "Cambridge 20 · Test 4",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 4,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 4),
  },
  {
    pilotId: "cam20-test3",
    label: "Cambridge 20 · Test 3",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 3,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 3),
  },
  {
    pilotId: "cam20-test2",
    label: "Cambridge 20 · Test 2",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 2,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 2),
  },
  {
    pilotId: "cam20-test1",
    label: "Cambridge 20 · Test 1",
    bookTitle: "Cambridge IELTS 20 Academic",
    testNumber: 1,
    coverImageUrl: CAMBRIDGE_IELTS_20_COVER_URL,
    catalogOrder: cambridgeIeltsCatalogOrder(20, 1),
  },
] as const;

const TEST_BY_PILOT = new Map(READING_CAMBRIDGE_TESTS.map((test) => [test.pilotId, test]));

export function getReadingIeltsTest(pilotId: string): ReadingIeltsTest | null {
  return TEST_BY_PILOT.get(pilotId as ReadingPilotId) ?? null;
}

export function isReadingIeltsTestPilotId(pilotId: string): pilotId is ReadingPilotId {
  return TEST_BY_PILOT.has(pilotId as ReadingPilotId);
}
