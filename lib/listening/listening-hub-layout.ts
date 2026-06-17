import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { LISTENING_HUB_HERO_EXCLUDED_PART_IDS } from "@/lib/listening/listening-passage-media";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = tmp as T;
  }
  return copy;
}

export function listeningHubHeroEligibleParts(
  pool: readonly ListeningPartMeta[],
): ListeningPartMeta[] {
  const eligible = pool.filter((part) => !LISTENING_HUB_HERO_EXCLUDED_PART_IDS.has(part.id));
  return eligible.length > 0 ? eligible : [...pool];
}

/** Chọn ngẫu nhiên một bài làm hero hub Luyện nghe (mỗi lần load trang). */
export function pickListeningHubFeaturedPart(pool: readonly ListeningPartMeta[]): ListeningPartMeta {
  if (pool.length === 0) {
    throw new Error("LISTENING_PARTS_PILOT must not be empty");
  }
  const candidates = listeningHubHeroEligibleParts(pool);
  const [picked] = shuffle(candidates);
  if (!picked) {
    throw new Error("Không chọn được bài nổi bật cho hub Luyện nghe.");
  }
  return picked;
}
