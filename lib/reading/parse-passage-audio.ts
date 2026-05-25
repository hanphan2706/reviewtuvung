/** Parse khối AUDIO trong file .txt (`url | /reading-audio/...`). */
export function parsePassageAudioUrl(audioText: string): string {
  if (!audioText.trim()) return "";

  for (const line of audioText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || /^audio$/i.test(trimmed)) continue;

    const pipe = trimmed.match(/^url\s*\|\s*(.+)$/i);
    if (pipe?.[1]) return pipe[1].trim();

    if (/^\/[\w\-./]+$/i.test(trimmed)) return trimmed;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
  }

  return "";
}
