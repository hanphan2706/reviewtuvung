import fs from "node:fs";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { resolveListeningTranscriptPath } from "@/lib/listening/listening-materials-fs";
import { listeningTranscriptUsesPartSplit } from "@/lib/listening/listening-transcript-client";
import { sanitizeListeningTranscript } from "@/lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "@/lib/listening/split-transcript-parts";
import {
  filterTacticsBookInstructionLines,
  isTacticsListeningTranscriptFile,
} from "@/lib/listening/tactics-transcript-filter";

/** Đọc transcript trên server (không qua HTTP). */
export function loadListeningTranscriptText(meta: ListeningPartMeta): string {
  const usesPartSplit = listeningTranscriptUsesPartSplit(meta);

  for (const file of meta.transcriptTryFiles) {
    const transcriptPath = resolveListeningTranscriptPath(file);
    if (!transcriptPath || !fs.existsSync(transcriptPath)) continue;

    try {
      const raw = fs.readFileSync(transcriptPath, "utf8");
      let full = sanitizeListeningTranscript(raw);
      if (isTacticsListeningTranscriptFile(file)) {
        full = filterTacticsBookInstructionLines(full);
        return full;
      }
      if (usesPartSplit) {
        const byPart = splitTranscriptByPart(full);
        const text = byPart[meta.part] ?? "";
        if (text.length > 0) return text;
      } else if (full.length > 0) {
        return full;
      }
    } catch {
      continue;
    }
  }

  return "";
}
