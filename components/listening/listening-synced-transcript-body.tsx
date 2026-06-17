"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { useCueSeekGesture } from "@/hooks/use-flow-text-selection";
import { findActiveCueId } from "@/lib/listening/build-transcript-sync";
import type { ListeningTranscriptCue, ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";

function highlightQuestionMarkers(text: string, muted: boolean): ReactNode[] {
  const parts = text.split(/(Q\d+)/g);
  let offset = 0;
  return parts.map((part) => {
    const key = `${offset}-${part.slice(0, 16)}`;
    offset += part.length;
    return /^Q\d+$/.test(part) ? (
      <span
        key={key}
        className={muted ? "font-semibold text-[#4b2876]/55" : "font-bold text-[#4b2876]"}
      >
        {part}
      </span>
    ) : (
      <span key={key}>{part}</span>
    );
  });
}

function formatCueTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type ListeningSyncedTranscriptBodyProps = {
  sync: ListeningTranscriptSyncFile;
  audioCurrentTime: number;
  onCueSeek?: (cue: ListeningTranscriptCue) => void;
};

export function ListeningSyncedTranscriptBody({
  sync,
  audioCurrentTime,
  onCueSeek,
}: ListeningSyncedTranscriptBodyProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeId = findActiveCueId(sync.cues, audioCurrentTime);
  const { onPointerDown, onPointerMove, canSeekFromClick } = useCueSeekGesture();

  useEffect(() => {
    if (!activeId || !scrollRef.current) return;
    const el = scrollRef.current.querySelector(`[data-cue-id="${activeId}"]`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  const seekToCue = (cue: ListeningTranscriptCue, clickDetail = 1) => {
    if (!canSeekFromClick(clickDetail)) return;
    onCueSeek?.(cue);
  };

  const handleRowClick = (event: MouseEvent<HTMLButtonElement>, cue: ListeningTranscriptCue) => {
    seekToCue(cue, event.detail);
  };

  return (
    <div
      ref={scrollRef}
      className="space-y-1 font-sans text-[15px] leading-[1.45] tracking-[-0.01em] antialiased"
    >
      {sync.cues.map((cue: ListeningTranscriptCue) => {
        const isActive = cue.id === activeId;
        const preAudio = Boolean(cue.preAudio);
        const seekable = Boolean(onCueSeek);
        const isSeparator = /^[-—–\s]+$/.test(cue.text.trim());

        if (isSeparator) {
          return (
            <div
              key={cue.id}
              data-cue-id={cue.id}
              className="py-2 opacity-50"
              aria-hidden
            >
              <div className="h-px bg-gradient-to-r from-transparent via-[#e8e8e8] to-transparent" />
            </div>
          );
        }

        const timestamp = (
          <time
            dateTime={`PT${Math.floor(cue.start)}S`}
            className={`w-12 shrink-0 pt-0.5 text-left text-[13px] tabular-nums transition-colors duration-300 ${
              isActive ? "font-bold text-[#4b2876]" : "font-semibold text-[#4b2876]/55"
            }`}
          >
            {formatCueTime(cue.start)}
          </time>
        );

        const textClass = `min-w-0 flex-1 cursor-text select-text transition-all duration-300 ${
          isActive
            ? "font-semibold text-[#0a0a0a]"
            : "font-normal text-[#b3b3b3]"
        } ${preAudio && !isActive ? "italic" : ""}`;

        const textContent = (
          <>
            {cue.speaker ? (
              <span className={isActive ? "font-semibold text-[#4b2876]" : "font-medium text-[#4b2876]/50"}>
                {cue.speaker}:{" "}
              </span>
            ) : null}
            {highlightQuestionMarkers(cue.text, !isActive)}
          </>
        );

        const rowClass = `flex w-full items-start gap-3 rounded-lg border-0 bg-transparent px-1 py-2 text-left font-inherit text-inherit transition-all duration-300 ${
          isActive
            ? "relative bg-[#4b2876]/[0.07] px-3 py-3 shadow-[inset_0_-12px_12px_-8px_rgba(255,255,255,0.85)]"
            : seekable
              ? "cursor-pointer hover:bg-[#faf8fb]"
              : ""
        }`;

        if (!seekable) {
          return (
            <div
              key={cue.id}
              data-cue-id={cue.id}
              className={rowClass}
              title={preAudio ? "Trước đoạn thoại trên file audio (intro / đọc đề IELTS)" : undefined}
            >
              {timestamp}
              <span className={textClass}>{textContent}</span>
            </div>
          );
        }

        return (
          <button
            type="button"
            key={cue.id}
            data-cue-id={cue.id}
            className={rowClass}
            aria-label={`Nghe từ ${formatCueTime(cue.start)}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onClick={(event) => handleRowClick(event, cue)}
          >
            {timestamp}
            <span className={textClass}>{textContent}</span>
          </button>
        );
      })}
    </div>
  );
}
