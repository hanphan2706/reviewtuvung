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
  "reading-challenge-2-p1":
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p2":
    "https://images.unsplash.com/photo-1611146033545-5e1e5ad951d8?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p3":
    "https://images.unsplash.com/photo-1720709734276-cd14a216bcad?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p4":
    "https://images.unsplash.com/photo-1660646463659-df77c1580723?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p5":
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p6":
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p7":
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p8":
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p9":
    "https://images.unsplash.com/photo-1768005419000-d53e45851b50?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p10":
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p11":
    "https://images.unsplash.com/photo-1664938011651-3a9772a672f9?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p12":
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p13":
    "https://images.unsplash.com/photo-1774830970925-e176508dc0ab?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p14":
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p15":
    "https://images.unsplash.com/photo-1741517287377-3fdbd87ac5f2?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p16":
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p17":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p18":
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p19":
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-2-p20":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p1":
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p2":
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p3":
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p4":
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p5":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p6":
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p7":
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p8":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p9":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p10":
    "https://images.unsplash.com/photo-1754450927348-9e2ac72dd4b2?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p11":
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p12":
    "https://images.unsplash.com/photo-1657069342866-2d11c2509b02?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p13":
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p14":
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p15":
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p16":
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p17":
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p18":
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p19":
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop",
  "reading-challenge-3-p20":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
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
  "cam19-test4-p1":
    "https://images.unsplash.com/photo-1587405254461-abd1d1c7440e?w=1200&q=80&auto=format&fit=crop",
  "cam19-test4-p2":
    "https://images.unsplash.com/photo-1674736921632-8b7fd0cff5bc?w=1200&q=80&auto=format&fit=crop",
  "cam19-test4-p3":
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p1":
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p2":
    "https://images.unsplash.com/photo-1632505650704-3ee94dc083cc?w=1200&q=80&auto=format&fit=crop",
  "cam19-test3-p3":
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p1":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p2":
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&q=80&auto=format&fit=crop",
  "cam19-test2-p3":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p1":
    "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p2":
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80&auto=format&fit=crop",
  "cam19-test1-p3":
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p1":
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p2":
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80&auto=format&fit=crop",
  "cam18-test1-p3":
    "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&q=80&auto=format&fit=crop",
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

/** Base Unsplash URLs already used by luyện đọc (không gồm `/public`). */
export function readingUnsplashBaseUrls(): Set<string> {
  const urls = new Set<string>();
  for (const raw of Object.values(READING_ARTICLE_IMAGES)) {
    if (raw.startsWith("http")) {
      urls.add(raw.split("?")[0] ?? raw);
    }
  }
  return urls;
}

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

/** Ưu tiên `IMAGE` trong file .txt; không có thì map curated / fallback. */
export function resolveReadingArticleImage(
  articleId: string,
  passage?: { imageUrl?: string; passage?: number },
): string {
  const fromTxt = passage?.imageUrl?.trim();
  if (fromTxt) return fromTxt;
  return readingArticleImage(articleId, passage?.passage ?? 1);
}

/** `object-position` cho ảnh crop chật (vd. tượng Shakespeare cần giữ phần đầu). */
const READING_ARTICLE_IMAGE_OBJECT_POSITION: Partial<Record<string, string>> = {
  "reading-challenge-2-p11": "object-top",
  "cam19-test4-p2": "object-[center_35%]",
  "cam19-test4-p3": "object-center",
};

export function readingArticleImageObjectPosition(articleId: string): string {
  return READING_ARTICLE_IMAGE_OBJECT_POSITION[articleId] ?? "object-center";
}
