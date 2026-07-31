import { cambridgeIeltsCatalogOrder } from "@/lib/exam/ielts-catalog-order";
import { LISTENING_PARTS_PILOT, type ListeningPartMeta } from "@/lib/listening/content-manifest";

const CATALOG_ORDER_BY_ID = new Map(
  LISTENING_PARTS_PILOT.map((lesson, index) => [lesson.id, index]),
);

const CAM_EXAM_RE = /^cam(\d+)$/i;

/**
 * Thứ tự catalog — số lớn hơn = mới hơn.
 * Cambridge: book → test → part (Cam 21 · Test 4 · Part 4 cao nhất), không phụ thuộc
 * vị trí trong `LISTENING_PARTS_PILOT` (prepend Cam mới sẽ không bị xếp “cũ nhất”).
 * Nguồn khác: fallback index trong manifest (thêm sau = mới hơn).
 */
export function listeningLessonCatalogOrder(
  lesson: Pick<ListeningPartMeta, "id" | "examSlug" | "test" | "part">,
): number {
  const cam = lesson.examSlug.match(CAM_EXAM_RE);
  if (cam) {
    const book = Number.parseInt(cam[1]!, 10);
    // Part 1 trước Part 4 trong cùng test khi sort newest (số lớn hơn = mới hơn).
    const partRank = Math.max(0, 5 - lesson.part);
    return cambridgeIeltsCatalogOrder(book, lesson.test) * 10 + partRank;
  }
  return CATALOG_ORDER_BY_ID.get(lesson.id) ?? 0;
}
