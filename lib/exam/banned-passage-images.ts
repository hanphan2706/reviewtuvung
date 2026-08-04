/**
 * Unsplash base URLs that must never be reused for reading or listening heroes.
 * Keep when replacing a bad/mismatched illustration so it cannot creep back in.
 */
export const BANNED_PASSAGE_IMAGE_BASE_URLS: ReadonlySet<string> = new Set([
  // Former "Saving the saiga" hero — ocean dive, not saiga antelope
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
  // Former Silbo Gomero hero — generic portrait, not Canary Islands / whistle language
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  // Former coconut palm — pizza / rice treats, not coconut
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
  "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
  "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
  // Former "bring back the big cats" — house cat
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
  // Former Lost City / bilingual — lab glassware, not Machu Picchu / languages
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
  // Former History of Glass — bedside lamp / near-black broken crop, not glass craft
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
  // Former Cork — wine toast, not cork stoppers
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
  // Former Collecting — abstract wallpaper, not a collection
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  // Former Bilingual — wooden world map, not national flags
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  // Former Flying tortoises — school of fish, not tortoise
  "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c",
  // Former Tourism NZ — Italian alpine lake, not New Zealand
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
  // Former Harappan — Thailand karst / James Bond Island, not Indus ruins
  "https://images.unsplash.com/photo-1609137144813-7d9921338f24",
  // Former Cutty Sark — beer bottles, not a sailing ship
  "https://images.unsplash.com/photo-1436076863939-06870fe779c2",
  // Cam 21 heroes — Unsplash 404 (removed upstream)
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd734",
  "https://images.unsplash.com/photo-1551632811-561732d1e5ec",
  "https://images.unsplash.com/photo-1542744173-8e2bd1a5d0c8",
  // Oyster Bay Sailing Club — intermittent/broken in hub cards; use local Cam 21 cover
  "https://images.unsplash.com/photo-1519046904884-53103b34b206",
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
