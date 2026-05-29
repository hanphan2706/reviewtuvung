import "server-only";

import { estimateReadMinutes } from "@/lib/reading/estimate-read-minutes";
import { isCompassPublishingPilot, READING_HUB_ARTICLES } from "@/lib/reading/hub-articles";
import { loadReadingPassages } from "@/lib/reading/load-reading-raw";

/** Server: per-article read estimates from passage bodies (hub hero, etc.). */
export async function buildReadingReadMinutesByArticleId(): Promise<Record<string, number>> {
  const byPilot = new Map<string, Awaited<ReturnType<typeof loadReadingPassages>>>();

  const out: Record<string, number> = {};
  for (const article of READING_HUB_ARTICLES) {
    let passages = byPilot.get(article.pilotId);
    if (!passages) {
      passages = await loadReadingPassages(article.pilotId);
      byPilot.set(article.pilotId, passages);
    }
    const block = passages.find((p) => p.passage === article.passage);
    out[article.id] = block
      ? estimateReadMinutes(block.body, article.pilotId)
      : isCompassPublishingPilot(article.pilotId)
        ? 3
        : 13;
  }
  return out;
}
