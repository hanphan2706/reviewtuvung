"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LISTENING_SOURCE_ICONS } from "@/components/listening/listening-source-icons";
import type { ListeningSourceCategory } from "@/lib/listening/listening-source-catalog";

type ListeningSourceCategoryCardProps = {
  category: ListeningSourceCategory;
};

function formatLessonCount(count: number): string {
  return `${count} bài`;
}

export function ListeningSourceCategoryCard({ category }: ListeningSourceCategoryCardProps) {
  const Icon = LISTENING_SOURCE_ICONS[category.id];

  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col rounded-lg border border-[#E4E4E7] bg-white p-6 text-left transition hover:shadow-md md:p-8"
    >
      <div className="h-[3.25rem] shrink-0">
        <div className="flex h-8 items-end overflow-hidden">
          <Icon className="h-6 w-6 shrink-0 text-[#000001]" strokeWidth={1.75} aria-hidden />
        </div>
      </div>
      <h2 className="min-h-[4.125rem] font-serif text-2xl font-semibold leading-snug text-[#000001]">
        {category.title}
      </h2>
      <p className="mt-3 flex-1 text-base leading-relaxed text-[#47464b]">{category.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-[#ebe6f4] pt-4 text-sm font-bold tracking-wide text-[#47464b] md:mt-8">
        <span className="inline-flex items-center leading-none">
          {formatLessonCount(category.lessonCount)}
        </span>
        <ArrowRight
          className="size-4 shrink-0 transition group-hover:translate-x-0.5"
          aria-hidden
        />
      </div>
    </Link>
  );
}
