import type { ListeningTranscriptCue } from "@/lib/listening/listening-transcript-sync-types";
import { isTacticsBookInstructionLine } from "@/lib/listening/tactics-transcript-filter";

export type TacticsConversationSegment = {
  start: number;
  end: number;
};

function parseLeadingConversationNumber(text: string): number | null {
  const trimmed = text.trim();
  if (/^\d+\.$/.test(trimmed)) {
    return Number.parseInt(trimmed.slice(0, -1), 10);
  }
  const match = trimmed.match(/^(\d+)\.\s+/);
  return match ? Number.parseInt(match[1], 10) : null;
}

function isStandaloneConversationMarker(text: string): boolean {
  return /^\d+\.$/.test(text.trim());
}

export function parseConversationNumberFromLabel(label: string): number | null {
  const match = label.match(/(?:Conversation|Hội thoại)\s+(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : null;
}

/** Map Tactics book conversation numbers → audio segment bounds from sync cues. */
export function buildTacticsConversationSegments(
  cues: readonly ListeningTranscriptCue[],
): Map<number, TacticsConversationSegment> {
  const filtered = cues.filter((cue) => !isTacticsBookInstructionLine(cue.text));
  const segments = new Map<number, TacticsConversationSegment>();

  if (filtered.length === 0) return segments;

  let currentConv = 1;

  const extend = (conversation: number, start: number, end: number) => {
    const existing = segments.get(conversation);
    if (!existing) {
      segments.set(conversation, { start, end });
      return;
    }
    existing.start = Math.min(existing.start, start);
    existing.end = Math.max(existing.end, end);
  };

  for (let index = 0; index < filtered.length; index += 1) {
    const cue = filtered[index];
    const leadingNumber = parseLeadingConversationNumber(cue.text);

    if (leadingNumber !== null && isStandaloneConversationMarker(cue.text)) {
      const nextCue = filtered[index + 1];
      if (nextCue) {
        currentConv = leadingNumber;
        extend(currentConv, nextCue.start, nextCue.end);
      }
      continue;
    }

    if (leadingNumber !== null) {
      currentConv = leadingNumber;
    }

    extend(currentConv, cue.start, cue.end);
  }

  return segments;
}
