"use client";

import { AudioLines, Pause, Play } from "lucide-react";

type AccentPlayerCardProps = {
  title: string;
  subtitle: string;
  isPlaying: boolean;
  isActive: boolean;
  disabled?: boolean;
  onToggle: () => void;
};

export function AccentPlayerCard({
  title,
  subtitle,
  isPlaying,
  isActive,
  disabled = false,
  onToggle,
}: AccentPlayerCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border px-4 py-4 text-left transition disabled:cursor-not-allowed disabled:opacity-55 ${
        isActive
          ? "border-[#4B2876] bg-[#f7f4fc] shadow-sm"
          : "border-[#E4E4E7] bg-white hover:border-[#4B2876]/35 hover:bg-[#faf9fc]"
      }`}
      aria-pressed={isActive}
    >
      <span
        className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full border ${
          isActive
            ? "border-[#4B2876] bg-[#4B2876] text-white"
            : "border-[#E4E4E7] bg-[#FAFAFA] text-[#4B2876]"
        }`}
        aria-hidden
      >
        {isPlaying ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-[#000001]">{title}</span>
        <span className="mt-0.5 block text-xs text-[#616365]">{subtitle}</span>
      </span>
      <AudioLines
        className={`size-4 shrink-0 ${isPlaying ? "text-[#4B2876]" : "text-[#c4c4cc]"}`}
        aria-hidden
      />
    </button>
  );
}
