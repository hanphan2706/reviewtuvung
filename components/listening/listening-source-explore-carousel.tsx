"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { LISTENING_SOURCE_ICONS } from "@/components/listening/listening-source-icons";
import {
  LISTENING_SOURCE_CATEGORIES,
  LISTENING_SOURCES_EXPLORE_HREF,
  LISTENING_SOURCES_EXPLORE_SUBTITLE,
  type ListeningSourceCategory,
} from "@/lib/listening/listening-source-catalog";

type ListeningSourceExploreCarouselProps = {
  onOpenSource: (href: string) => void;
};

function formatLessonCount(n: number): string {
  return `${n} bài`;
}

function ListeningSourceHubCard({
  card,
  onOpen,
}: {
  card: ListeningSourceCategory;
  onOpen: (href: string) => void;
}) {
  const Icon = LISTENING_SOURCE_ICONS[card.id];
  return (
    <button
      type="button"
      data-carousel-item
      onClick={() => onOpen(card.href)}
      className="flex h-full cursor-pointer flex-col rounded-lg border border-[#E4E4E7] bg-white p-8 text-left transition hover:shadow-md"
    >
      <div className="h-14 shrink-0">
        <div className="flex h-8 items-end overflow-hidden">
          <Icon className="h-6 w-6 shrink-0 text-[#000001]" strokeWidth={1.75} aria-hidden />
        </div>
      </div>
      <h3 className="min-h-[4.125rem] font-serif text-2xl font-semibold leading-snug text-[#000001]">
        {card.title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-[#47464b]">{card.description}</p>
      <div className="mt-8 flex items-center justify-between border-t border-[#ebe6f4] pt-4 text-sm font-bold tracking-wide text-[#47464b]">
        <span className="inline-flex items-center leading-none">{formatLessonCount(card.lessonCount)}</span>
        <ArrowRight className="size-4 shrink-0" aria-hidden />
      </div>
    </button>
  );
}

/** Carousel nguồn nghe trên hub — 2 thẻ/lượt (tablet), 3 thẻ trên desktop rộng. */
export function ListeningSourceExploreCarousel({ onOpenSource }: ListeningSourceExploreCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselHasOverflow, setCarouselHasOverflow] = useState(false);

  const updateCarouselOverflow = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCarouselHasOverflow(el.scrollWidth > el.clientWidth + 2);
  }, []);

  useLayoutEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateCarouselOverflow();
    const ro = new ResizeObserver(() => {
      updateCarouselOverflow();
    });
    ro.observe(el);
    window.addEventListener("resize", updateCarouselOverflow);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateCarouselOverflow);
    };
  }, [updateCarouselOverflow]);

  const scrollCarousel = (dir: "prev" | "next") => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-carousel-item]");
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24") || 24;
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="mb-14">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-2xl font-semibold text-[#000001]">
            Khám phá các nguồn nghe đa dạng
          </h2>
          <p className="mt-1 text-base leading-relaxed text-[#47464b] lg:max-w-none">
            {LISTENING_SOURCES_EXPLORE_SUBTITLE}{" "}
            <Link
              href={LISTENING_SOURCES_EXPLORE_HREF}
              className="inline-flex items-center gap-0.5 text-[15px] font-bold text-[#4B2876] transition hover:opacity-80"
            >
              Xem tất cả
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </p>
        </div>
        {carouselHasOverflow ? (
          <div className="flex shrink-0 gap-2.5 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#000001]/10 bg-[#000001]/10 text-[#616365] transition hover:bg-[#000001]/15 md:h-10 md:w-10"
              aria-label="Nguồn nghe trước"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#000001] bg-[#000001] text-white transition hover:bg-[#000001]/90 md:h-10 md:w-10"
              aria-label="Nguồn nghe tiếp"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
            </button>
          </div>
        ) : null}
      </div>

      <div
        ref={carouselRef}
        className="grid auto-cols-[100%] grid-flow-col items-stretch gap-6 overflow-x-auto scroll-smooth pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:auto-cols-[calc((100%-1.5rem)/2)] xl:auto-cols-[calc((100%-3rem)/3)] [&::-webkit-scrollbar]:hidden [&>*]:snap-start"
      >
        {LISTENING_SOURCE_CATEGORIES.map((card) => (
          <ListeningSourceHubCard key={card.id} card={card} onOpen={onOpenSource} />
        ))}
      </div>
    </section>
  );
}
