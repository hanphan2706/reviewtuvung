"use client";

import type { ReactNode } from "react";
import {
  parseListeningTranscriptDisplayBlocks,
  type ListeningTranscriptDisplayBlock,
} from "@/lib/listening/transcript-to-display-html";

function highlightQuestionMarkers(text: string): ReactNode[] {
  const parts = text.split(/(Q\d+(?:\/\d+)?)/g);
  let offset = 0;
  return parts.map((part) => {
    const key = `${offset}-${part.slice(0, 16)}`;
    offset += part.length;
    const qMatch = part.match(/^Q(\d+)(?:\/(\d+))?$/);
    if (!qMatch) {
      return <span key={key}>{part}</span>;
    }
    const primary = Number.parseInt(qMatch[1] ?? "0", 10);
    const secondary = qMatch[2] ? Number.parseInt(qMatch[2], 10) : NaN;
    return (
      <span
        key={key}
        className="font-semibold text-[#4b2876]"
        data-q={Number.isFinite(primary) ? primary : undefined}
        data-q-also={Number.isFinite(secondary) && secondary !== primary ? secondary : undefined}
      >
        {part}
      </span>
    );
  });
}

function blockKey(block: ListeningTranscriptDisplayBlock, index: number): string {
  if (block.type === "part") return `${index}-part-${block.text}`;
  if (block.type === "rule") return `${index}-rule`;
  if (block.type === "speaker") return `${index}-${block.speaker}-${block.body.slice(0, 24)}`;
  return `${index}-${block.text.slice(0, 32)}`;
}

export function ListeningPlainTranscriptBody({
  text,
  className = "space-y-2 text-sm leading-relaxed text-[#47464b]",
}: {
  text: string;
  className?: string;
}) {
  const blocks = parseListeningTranscriptDisplayBlocks(text);
  if (blocks.length === 0) return null;

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const key = blockKey(block, index);
        if (block.type === "part") {
          return (
            <p key={key} className="font-bold text-[#4b2876]">
              {block.text}
            </p>
          );
        }
        if (block.type === "rule") {
          return (
            <p key={key} className="text-[#a1a1aa]" aria-hidden>
              ——————————————
            </p>
          );
        }
        if (block.type === "speaker") {
          return (
            <p key={key}>
              <span className="font-semibold text-[#4b2876]">{block.speaker}: </span>
              {highlightQuestionMarkers(block.body)}
            </p>
          );
        }
        return <p key={key}>{highlightQuestionMarkers(block.text)}</p>;
      })}
    </div>
  );
}
