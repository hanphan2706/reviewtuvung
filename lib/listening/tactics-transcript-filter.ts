import type { WhisperSegment } from "@/lib/listening/build-transcript-sync";
import type {
  ListeningTranscriptSyncFile,
} from "@/lib/listening/listening-transcript-sync-types";

const TACTICS_PART_ID_PREFIX = "tactics-basic-";
const TACTICS_TRANSCRIPT_FILE_PREFIX = "tactics-basic-";

/** Metadata sách Tactics — Whisper thường ghi lại trước đoạn nghe thật. */
const TACTICS_BOOK_INSTRUCTION_LINE = /^(?:Unit\s+\d+\.|Page\s+\d+\.)/i;

export function isTacticsListeningPartId(partId: string): boolean {
  return partId.startsWith(TACTICS_PART_ID_PREFIX);
}

export function isTacticsListeningTranscriptFile(fileName: string): boolean {
  return fileName.startsWith(TACTICS_TRANSCRIPT_FILE_PREFIX);
}

export function isTacticsBookInstructionLine(text: string): boolean {
  return TACTICS_BOOK_INSTRUCTION_LINE.test(text.trim());
}

export function filterTacticsBookInstructionLines(text: string): string {
  return text
    .split(/\r?\n/)
    .filter((line) => !isTacticsBookInstructionLine(line))
    .join("\n")
    .trim();
}

export function filterTacticsWhisperSegments(segments: readonly WhisperSegment[]): WhisperSegment[] {
  return segments.filter((segment) => !isTacticsBookInstructionLine(segment.text));
}

export function filterTacticsTranscriptSync(sync: ListeningTranscriptSyncFile): ListeningTranscriptSyncFile {
  return {
    ...sync,
    cues: sync.cues.filter((cue) => !isTacticsBookInstructionLine(cue.text)),
  };
}
