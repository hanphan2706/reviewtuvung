"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { REAL_EXAM_COVER_IMAGE_URL, type RealExamListing } from "@/lib/exam/real-exam-catalog";

export function RealExamTestCard({
  exam,
  moduleLabel,
  onClick,
}: {
  exam: RealExamListing;
  moduleLabel: "Academic Reading" | "Academic Listening";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={exam.title}
      className="group relative flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-lg border border-[#E4E4E7] bg-white text-left transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
        <Image
          src={REAL_EXAM_COVER_IMAGE_URL}
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex min-h-[132px] flex-1 flex-col p-5 md:min-h-[144px] md:p-6">
        <h3 className="font-serif text-xl font-semibold leading-snug text-[#000001] md:text-[22px]">
          {exam.title}
        </h3>
        <div className="min-h-4 flex-1" aria-hidden />
        <div className="mt-auto flex shrink-0 items-center justify-between border-t border-[#E4E4E7] pt-4 text-[#47464b]">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]">{moduleLabel}</span>
          <ArrowRight className="h-4 w-4 text-[#000001]" aria-hidden />
        </div>
      </div>
    </button>
  );
}
