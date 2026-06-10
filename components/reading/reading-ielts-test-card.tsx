"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";

export function ReadingIeltsTestCard({
  test,
  onClick,
}: {
  test: ReadingIeltsTest;
  onClick: () => void;
}) {
  const seriesTitle = test.label.split(" · ")[0];
  const footerLabel = `${seriesTitle} - Test ${test.testNumber}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={footerLabel}
      className="group relative flex h-full min-h-0 cursor-pointer flex-col overflow-hidden rounded-lg border border-[#E4E4E7] bg-white text-left transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7]">
        <Image
          src={test.coverImageUrl}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex min-h-[132px] flex-1 flex-col p-5 md:min-h-[144px] md:p-6">
        <h3 className="font-serif text-xl font-semibold leading-snug text-[#000001] md:text-[22px]">
          {footerLabel}
        </h3>
        <div className="min-h-4 flex-1" aria-hidden />
        <div className="mt-auto flex shrink-0 items-center justify-between border-t border-[#ebe6f4] pt-4 text-[#47464b]">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Academic Reading</span>
          <ArrowRight className="h-4 w-4 text-[#000001]" aria-hidden />
        </div>
      </div>
    </button>
  );
}
