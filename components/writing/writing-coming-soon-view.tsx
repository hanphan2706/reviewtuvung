"use client";

import Link from "next/link";
import { studyHubPageContentClass, studyHubSubpageTitleClass } from "@/components/study-module/study-hub-shell";
import { WRITING_HUB_HREF } from "@/lib/writing/writing-hub-nav";

export function WritingComingSoonView({
  title,
  description = "Phần này đang được chuẩn bị. Quay lại hub Luyện viết để khám phá các module khác.",
}: {
  title: string;
  description?: string;
}) {
  return (
    <main className={studyHubPageContentClass}>
      <div className={studyHubSubpageTitleClass}>
        <h2 className="font-serif text-3xl font-bold text-[#000001] md:text-[2rem]">{title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#47464b]">{description}</p>
      </div>
      <Link
        href={WRITING_HUB_HREF}
        className="inline-flex items-center rounded-lg border border-[#E4E4E7] bg-white px-4 py-2.5 text-sm font-semibold text-[#000001] transition hover:border-[#000001]/25"
      >
        ← Về Luyện viết
      </Link>
    </main>
  );
}
