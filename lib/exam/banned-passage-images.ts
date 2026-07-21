/**
 * Unsplash base URLs that must never be reused for reading or listening heroes.
 * Keep when replacing a bad/mismatched illustration so it cannot creep back in.
 */
export const BANNED_PASSAGE_IMAGE_BASE_URLS: ReadonlySet<string> = new Set([
  // Former "Saving the saiga" hero — ocean dive, not saiga antelope
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
  // Former Silbo Gomero hero — generic portrait, not Canary Islands / whistle language
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
]);

export function unsplashImageBaseUrl(url: string): string {
  if (!url.startsWith("http")) return url;
  return url.split("?")[0] ?? url;
}

export function assertNoBannedPassageImages(
  map: Record<string, string>,
  sourceLabel: string,
): void {
  const hits: string[] = [];
  for (const [id, url] of Object.entries(map)) {
    const base = unsplashImageBaseUrl(url);
    if (BANNED_PASSAGE_IMAGE_BASE_URLS.has(base)) {
      hits.push(`${id} → ${base}`);
    }
  }
  if (hits.length > 0) {
    throw new Error(`Banned ${sourceLabel} images: ${hits.join("; ")}`);
  }
}
