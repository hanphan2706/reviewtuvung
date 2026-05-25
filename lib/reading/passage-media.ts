/** Ảnh bài đọc trong `/public` — hub + reader (cùng article id = cùng ảnh). */
const READING_ARTICLE_IMAGES: Record<string, string> = {
  "cam20-test2-p1": "/manatees.avif",
  "cam20-test2-p2": "/procastination.avif",
  "cam20-test2-p3":
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
  "cam20-test1-p1": "/the kakapo.avif",
  "cam20-test1-p2": "/to-britain.avif",
  "cam20-test1-p3":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p1":
    "https://images.unsplash.com/photo-1749763829318-29b75632f934?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p2":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p3":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p4":
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p5":
    "https://images.unsplash.com/photo-1528518075085-9b611b334e85?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p6":
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p7":
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p8":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p9":
    "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p10":
    "https://images.unsplash.com/photo-1561400494-b382c3713d76?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p11":
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p12":
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p13":
    "https://images.unsplash.com/photo-1772289093245-218447e77b64?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p14":
    "https://images.unsplash.com/photo-1660668435924-ee5bcddc236c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p15":
    "https://images.unsplash.com/photo-1639013166378-c556a9ef4758?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p16":
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p17":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p18":
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p19":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-1-p20":
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p1":
    "https://images.unsplash.com/photo-1499638472904-ea5c6178a300?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p2":
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80&auto=format&fit=crop",
  "cam20-test3-p3":
    "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p1":
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p2":
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
  "cam20-test4-p3":
    "https://images.unsplash.com/photo-1695738881481-8c8695197fea?w=1200&q=80&auto=format&fit=crop",
};

function assertUniqueArticleImages(map: Record<string, string>): void {
  const byBaseUrl = new Map<string, string[]>();
  for (const [articleId, url] of Object.entries(map)) {
    const base = url.split("?")[0] ?? url;
    const ids = byBaseUrl.get(base) ?? [];
    ids.push(articleId);
    byBaseUrl.set(base, ids);
  }
  const duplicates = [...byBaseUrl.entries()].filter(([, ids]) => ids.length > 1);
  if (duplicates.length > 0) {
    const detail = duplicates
      .map(([url, ids]) => `${ids.join(", ")} → ${url}`)
      .join("; ");
    throw new Error(`Duplicate reading article images: ${detail}`);
  }
}

assertUniqueArticleImages(READING_ARTICLE_IMAGES);

function publicAssetPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return `/${parts.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

export function readingArticleImage(articleId: string, passageFallback = 1): string {
  const raw =
    READING_ARTICLE_IMAGES[articleId] ??
    READING_ARTICLE_IMAGES[`cam20-test2-p${passageFallback}`] ??
    READING_ARTICLE_IMAGES["cam20-test2-p1"];
  if (raw.startsWith("/")) return publicAssetPath(raw);
  return raw;
}

/** Ưu tiên ảnh curated để hub/reader nhất quán; nếu chưa có mới lấy `IMAGE` từ file .txt. */
export function resolveReadingArticleImage(
  articleId: string,
  passage?: { imageUrl?: string; passage?: number },
): string {
  if (READING_ARTICLE_IMAGES[articleId]) {
    return readingArticleImage(articleId, passage?.passage ?? 1);
  }
  const fromTxt = passage?.imageUrl?.trim();
  if (fromTxt) return fromTxt;
  return readingArticleImage(articleId, passage?.passage ?? 1);
}
