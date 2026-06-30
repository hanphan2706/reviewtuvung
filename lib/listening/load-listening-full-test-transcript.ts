import fs from "node:fs";
import { getListeningPartById } from "@/lib/listening/content-manifest";
import {
  listeningPartIdForTest,
  type ListeningIeltsTestId,
} from "@/lib/listening/ielts-test-catalog";
import { resolveListeningTranscriptPath } from "@/lib/listening/listening-materials-fs";
import { sanitizeListeningTranscript } from "@/lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "@/lib/listening/split-transcript-parts";

function readFullTestTranscriptByPart(testId: ListeningIeltsTestId): Partial<Record<number, string>> {
  const meta = getListeningPartById(listeningPartIdForTest(testId, 1));
  if (!meta) return {};

  for (const file of meta.transcriptTryFiles) {
    const transcriptPath = resolveListeningTranscriptPath(file);
    if (!transcriptPath || !fs.existsSync(transcriptPath)) continue;

    try {
      const raw = fs.readFileSync(transcriptPath, "utf8");
      const full = sanitizeListeningTranscript(raw);
      const byPart = splitTranscriptByPart(full);
      const out: Partial<Record<number, string>> = {};
      for (const part of [1, 2, 3, 4]) {
        const text = byPart[part] ?? "";
        if (text.length > 0) out[part] = text;
      }
      if (Object.keys(out).length > 0) return out;
    } catch {
      continue;
    }
  }

  return {};
}

/** Transcript đủ 4 Part (ghép) — legacy. */
export function loadListeningFullTestTranscriptText(testId: ListeningIeltsTestId): string {
  const byPart = readFullTestTranscriptByPart(testId);
  return [1, 2, 3, 4]
    .map((part) => byPart[part] ?? "")
    .filter((text) => text.length > 0)
    .join("\n\n");
}

/** Transcript theo từng Part cho full test listening. */
export function loadListeningFullTestTranscriptByPart(
  testId: ListeningIeltsTestId,
): Partial<Record<number, string>> {
  return readFullTestTranscriptByPart(testId);
}
