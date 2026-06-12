"use client";

import Image from "next/image";
import {
  ACCENT_RECORDING_MIC_IMAGE,
  ACCENT_RECORDING_SECTION,
} from "@/lib/listening/accent-explore-content";

export function AccentRecordingSection() {
  const handleStart = () => {
    window.alert(ACCENT_RECORDING_SECTION.comingSoonMessage);
  };

  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#f8f7fa]">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[220px] bg-[#111] md:min-h-[320px]">
          <Image
            src={ACCENT_RECORDING_MIC_IMAGE}
            alt="Microphone studio"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10">
          <h2 className="font-serif text-2xl font-semibold text-[#000001] md:text-[1.85rem]">
            {ACCENT_RECORDING_SECTION.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#47464b] md:text-[15px]">
            {ACCENT_RECORDING_SECTION.description}
          </p>
          <button
            type="button"
            onClick={handleStart}
            className="mt-6 inline-flex w-fit cursor-pointer items-center justify-center rounded-lg bg-[#000001] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#1a1a1b]"
          >
            {ACCENT_RECORDING_SECTION.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
