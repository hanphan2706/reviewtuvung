/** Đề thi thật luôn cao hơn mọi Cambridge trong catalog. */
export const REAL_IELTS_EXAM_CATALOG_ORDER_BASE = 10_000;

export function realIeltsExamCatalogOrder(seriesNumber: number): number {
  return REAL_IELTS_EXAM_CATALOG_ORDER_BASE + seriesNumber;
}

/** Cambridge — chỉ số lớn hơn = mới hơn (Cam 21 · Test 4 → 214). */
export function cambridgeIeltsCatalogOrder(bookNumber: number, testNumber: number): number {
  return bookNumber * 10 + testNumber;
}
