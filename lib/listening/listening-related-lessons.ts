import {
  getListeningPartById,
  getListeningFeaturedPart,
  LISTENING_PARTS_PILOT,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import { listeningDifficultyBandForLesson } from "@/lib/listening/listening-difficulty-bands";

function lessonCatalogOrder(a: ListeningPartMeta, b: ListeningPartMeta): number {
  return a.test - b.test || a.part - b.part;
}

export function listeningLessonsSameSource(meta: ListeningPartMeta): ListeningPartMeta[] {
  return LISTENING_PARTS_PILOT.filter((lesson) => lesson.metaPill === meta.metaPill).sort(lessonCatalogOrder);
}

function relatednessScore(current: ListeningPartMeta, candidate: ListeningPartMeta): number {
  let score = 0;
  if (candidate.metaPill === current.metaPill) score += 100;
  if (listeningDifficultyBandForLesson(candidate) === listeningDifficultyBandForLesson(current)) score += 50;
  if (candidate.test === current.test) score += 10;
  return score;
}

export function rankListeningRelatedLessons(
  current: ListeningPartMeta,
  excludeIds: ReadonlySet<string> = new Set(),
): ListeningPartMeta[] {
  return LISTENING_PARTS_PILOT.filter(
    (lesson) => lesson.id !== current.id && !excludeIds.has(lesson.id),
  ).sort((a, b) => {
    const diff = relatednessScore(current, b) - relatednessScore(current, a);
    if (diff !== 0) return diff;
    return lessonCatalogOrder(a, b);
  });
}

/** Tiếp theo = bài kế trong cùng nguồn; gợi ý thêm = bài liên quan cùng nguồn/level khác. */
export function getListeningUpNextParts(currentPartId: string): [ListeningPartMeta, ListeningPartMeta] {
  const current = getListeningPartById(currentPartId) ?? getListeningFeaturedPart();
  const sameSource = listeningLessonsSameSource(current);
  const indexInSource = sameSource.findIndex((lesson) => lesson.id === current.id);

  let next: ListeningPartMeta;
  if (indexInSource >= 0 && indexInSource < sameSource.length - 1) {
    next = sameSource[indexInSource + 1]!;
  } else {
    next = rankListeningRelatedLessons(current)[0] ?? current;
  }

  const also = rankListeningRelatedLessons(current, new Set([next.id]))[0] ?? next;
  return [next, also];
}
