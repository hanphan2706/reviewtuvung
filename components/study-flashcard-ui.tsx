"use client";

import { useState } from "react";

export const STUDY_FLASHCARD_SECTION_GAP = "gap-4";

export const STUDY_FLASHCARD_SHELL_EDGE_Y =
  "pt-[max(2.5rem,env(safe-area-inset-top,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px)+0.25rem)] sm:pb-4";

type StudyFlipCardProps = {
  front: string;
  back: string;
  disabled?: boolean;
};

export function StudyFlipCard({ front, back, disabled = false }: StudyFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`mx-auto flex w-full shrink-0 flex-col items-stretch ${STUDY_FLASHCARD_SECTION_GAP} max-w-[calc(28rem*0.8)] [perspective:1200px]`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (!disabled) setFlipped((f) => !f);
        }}
        className="relative aspect-square w-full cursor-pointer text-left outline-none ring-zinc-400 focus-visible:ring-2"
        aria-label={flipped ? "Xem mặt thuật ngữ" : "Xem mặt định nghĩa"}
      >
        <div
          className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl border-2 border-zinc-200 bg-white p-4 shadow-sm [backface-visibility:hidden] sm:p-5">
            <span className="inline-block max-w-full text-center text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
              {front}
            </span>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl border-2 border-zinc-200 bg-zinc-50 p-4 shadow-sm [backface-visibility:hidden] sm:p-5"
            style={{ transform: "rotateY(180deg)" }}
          >
            <span className="inline-block max-w-full text-center text-base font-medium leading-snug text-ink/90 sm:text-lg">
              {back}
            </span>
          </div>
        </div>
      </button>
      <p className="text-center text-xs text-ink-faint sm:text-sm">Nhấn thẻ để lật</p>
    </div>
  );
}

type StudyRatingButtonProps = {
  title: string;
  subtitle: string;
  onPick: () => void;
  disabled?: boolean;
  titleClassName: string;
  borderClassName: string;
};

export function StudyRatingButton({
  title,
  subtitle,
  onPick,
  disabled,
  titleClassName,
  borderClassName,
}: StudyRatingButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onPick}
      className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 bg-white px-2 py-3 text-center shadow-sm transition enabled:active:scale-[0.98] disabled:opacity-50 sm:min-h-[5.25rem] sm:px-3 sm:py-3.5 min-h-[4.75rem] ${borderClassName}`}
    >
      <span className={`block text-sm font-semibold sm:text-base ${titleClassName}`}>{title}</span>
      <span className="mt-1 block text-[10px] font-medium leading-snug text-ink-muted sm:text-xs">
        {subtitle}
      </span>
    </button>
  );
}
