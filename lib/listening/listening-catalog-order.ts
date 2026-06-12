import { LISTENING_PARTS_PILOT, type ListeningPartMeta } from "@/lib/listening/content-manifest";

const CATALOG_ORDER_BY_ID = new Map(
  LISTENING_PARTS_PILOT.map((lesson, index) => [lesson.id, index]),
);

/** Thứ tự xuất bản trong app — chỉ số lớn hơn = mới hơn. */
export function listeningLessonCatalogOrder(lesson: Pick<ListeningPartMeta, "id">): number {
  return CATALOG_ORDER_BY_ID.get(lesson.id) ?? 0;
}
