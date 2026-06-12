"use client";

import { Volume2 } from "lucide-react";
import {
  speechAccentArchiveSampleUrl,
  speechAccentAudioUrl,
  type SpeechAccentSample,
} from "@/lib/listening/speech-accent-catalog";

type AccentComparisonColumnProps = {
  id: string;
  regionLabel: string;
  flagEmoji: string;
  sample: SpeechAccentSample;
};

export function AccentComparisonColumn({
  id,
  regionLabel,
  flagEmoji,
  sample,
}: AccentComparisonColumnProps) {
  const sexLabel = sample.sex === "female" ? "Nữ" : "Nam";

  return (
    <article
      id={id}
      className="flex flex-col rounded-xl border border-[#E4E4E7] bg-white p-5 md:p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          {flagEmoji}
        </span>
        <h2 className="text-base font-bold text-[#000001]">{regionLabel}</h2>
      </div>
      <p className="text-sm font-semibold text-[#000001]">{sample.location}</p>
      <p className="mt-1 text-sm text-[#47464b]">
        {sexLabel} ·{" "}
        <a
          href={speechAccentArchiveSampleUrl(sample.speakerId)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#4B2876] underline decoration-[#4B2876]/30 underline-offset-2"
        >
          GMU Archive
        </a>
      </p>
      <div className="mt-5 flex items-center gap-2 border-t border-[#E4E4E7] pt-4">
        <Volume2 className="size-4 shrink-0 text-[#616365]" aria-hidden />
        <audio
          controls
          preload="none"
          src={speechAccentAudioUrl(sample.sampleId)}
          className="h-9 w-full min-w-0"
          aria-label={`Nghe giọng ${regionLabel}: ${sample.location}`}
        />
      </div>
    </article>
  );
}
