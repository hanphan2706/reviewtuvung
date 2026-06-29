"use client";

import { useMemo, useState } from "react";
import { Languages } from "lucide-react";
import { formatAccentVideoTranscriptParagraphs } from "@/lib/listening/format-accent-video-transcript";
import { ACCENT_VIDEO_TRANSCRIPTS_VI } from "@/lib/listening/accent-video-transcript-vi";

type AccentVideoTranscriptBodyProps = {
  lessonId: string;
  text: string;
};

export function AccentVideoTranscriptBody({ lessonId, text }: AccentVideoTranscriptBodyProps) {
  const [showVietnamese, setShowVietnamese] = useState(false);

  const paragraphs = useMemo(() => formatAccentVideoTranscriptParagraphs(text), [text]);
  const vietnameseParagraphs = useMemo(() => {
    const viText = ACCENT_VIDEO_TRANSCRIPTS_VI[lessonId];
    if (!viText) return [];
    return formatAccentVideoTranscriptParagraphs(viText);
  }, [lessonId]);
  const hasVietnamese = vietnameseParagraphs.length > 0;

  return (
    <div>
      {hasVietnamese ? (
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setShowVietnamese((value) => !value)}
            aria-pressed={showVietnamese}
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#E4E4E7] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#47464b] shadow-sm transition hover:bg-[#f3f0f8] ${
              showVietnamese ? "border-[#4b2876]/40 bg-[#4b2876]/10 text-[#4b2876]" : ""
            }`}
          >
            <Languages className="size-3 opacity-80" aria-hidden />
            {showVietnamese ? "Ẩn tiếng Việt" : "Hiện tiếng Việt"}
          </button>
        </div>
      ) : null}

      <div className="relative max-h-[min(70vh,28rem)]">
        <div className="h-full max-h-[min(70vh,28rem)] overflow-auto select-text">
          <div className="space-y-1 font-sans text-[15px] leading-[1.45] tracking-[-0.01em] antialiased">
            {paragraphs.map((paragraph, index) => (
              <div key={`${index}-${paragraph.slice(0, 32)}`} className="rounded-lg px-1 py-2">
                <p className="font-normal text-[#0a0a0a]">{paragraph}</p>
                {showVietnamese && vietnameseParagraphs[index] ? (
                  <p className="mt-1.5 font-normal text-[#616365]">{vietnameseParagraphs[index]}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}
