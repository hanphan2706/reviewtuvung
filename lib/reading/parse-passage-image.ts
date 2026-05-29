/** Parse khối IMAGE trong file .txt Compass (`url | https://...`). */
export function parsePassageImageUrl(imageText: string): string {
  if (!imageText.trim()) return "";

  for (const line of imageText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || /^image$/i.test(trimmed)) continue;

    const pipe = trimmed.match(/^url\s*\|\s*(.+)$/i);
    if (pipe?.[1]) return pipe[1].trim();

    if (/^https?:\/\//i.test(trimmed)) return trimmed;
  }

  return "";
}
