import "server-only";

import fs from "node:fs";
import path from "node:path";
import {
  listeningAudioCandidates,
  listeningTranscriptCandidates,
  LISTENING_AUDIO_SUBDIR,
  LISTENING_MATERIALS_ROOT,
  LISTENING_TRANSCRIPT_SUBDIR,
} from "@/lib/listening/listening-materials-paths";

export {
  LISTENING_AUDIO_SUBDIR,
  LISTENING_MATERIALS_ROOT,
  LISTENING_TRANSCRIPT_SUBDIR,
} from "@/lib/listening/listening-materials-paths";

export function listeningQnaFilePath(fileName: string): string {
  return path.join(process.cwd(), LISTENING_MATERIALS_ROOT, fileName);
}

export function resolveListeningAudioPath(fileName: string): string | null {
  for (const p of listeningAudioCandidates(fileName)) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/** Ưu tiên `listening materials/transcript/`, sau đó `transcript/` (legacy). */
export function resolveListeningTranscriptPath(fileName: string): string | null {
  for (const p of listeningTranscriptCandidates(fileName)) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}
