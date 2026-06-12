import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { isTacticsListeningTranscriptFile } from "@/lib/listening/tactics-transcript-filter";

/** IELTS: tách theo PART 1–4; Tactics: một file nguyên bài — không gửi `part`. */
export function listeningTranscriptUsesPartSplit(meta: Pick<ListeningPartMeta, "examSlug">): boolean {
  return meta.examSlug !== "tactics-basic";
}

export function buildListeningTranscriptApiUrl(file: string, part: number): string {
  const base = `/api/listening/transcript?file=${encodeURIComponent(file)}`;
  if (isTacticsListeningTranscriptFile(file)) {
    return base;
  }
  return `${base}&part=${part}`;
}

export async function fetchListeningTranscriptText(
  tryFiles: readonly string[],
  part: number,
  options?: { usesPartSplit?: boolean },
): Promise<string> {
  const usesPartSplit = options?.usesPartSplit ?? true;

  for (const file of tryFiles) {
    const url = usesPartSplit
      ? buildListeningTranscriptApiUrl(file, part)
      : `/api/listening/transcript?file=${encodeURIComponent(file)}`;
    const res = await fetch(url);
    if (res.status === 401) {
      throw new Error("LOGIN_REQUIRED");
    }
    if (!res.ok) continue;
    const data = (await res.json()) as { text?: string };
    if (data.text && data.text.length > 0) return data.text;
  }
  return "";
}
