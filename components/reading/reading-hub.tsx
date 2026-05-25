"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReadingArticleCard } from "@/components/reading/reading-article-card";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { ensureSentenceEnd } from "@/lib/reading/format-sentence-end";
import { READING_HUB_ARTICLES, readingArticleHeroMetaLine, type ReadingHubArticle } from "@/lib/reading/hub-articles";
import { pickReadingHubLayout, type ReadingHubLayout } from "@/lib/reading/hub-layout";

type ReadingHubProps = {
  onStartArticle: (article: ReadingHubArticle) => void;
  readMinutesByArticleId: Record<string, number>;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingHubSkeleton() {
  return (
    <div className={`${studyHubContainerClass} py-10 md:py-12`}>
      <div className="mb-14 grid gap-8 md:grid-cols-2">
        <div className="aspect-[4/3] min-h-[220px] animate-pulse rounded-lg bg-[#ebebeb] md:min-h-[280px]" />
        <div className="flex flex-col justify-center gap-4">
          <div className="h-3 w-28 animate-pulse rounded bg-[#ebebeb]" />
          <div className="h-10 w-4/5 max-w-md animate-pulse rounded bg-[#ebebeb]" />
          <div className="h-16 w-full max-w-xl animate-pulse rounded bg-[#ebebeb]" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
          <div className="min-h-[300px] animate-pulse rounded-lg bg-[#ebebeb]" />
          <div className="min-h-[300px] animate-pulse rounded-lg bg-[#ebebeb]" />
          <div className="min-h-[200px] animate-pulse rounded-lg bg-[#ebebeb] md:col-span-2" />
        </div>
        <div className="min-h-[300px] animate-pulse rounded-lg bg-[#1c1b1c]/10" />
      </div>
    </div>
  );
}

function ReadingHubContent({
  layout,
  onStartArticle,
  readMinutesByArticleId,
}: {
  layout: ReadingHubLayout;
  onStartArticle: (article: ReadingHubArticle) => void;
  readMinutesByArticleId: Record<string, number>;
}) {
  const { hero, textTopLeft, textTopRight, wide, dark } = layout;
  const heroMeta = readingArticleHeroMetaLine(hero, readMinutesByArticleId[hero.id] ?? 13);

  return (
    <div className={`${studyHubContainerClass} py-10 md:py-12`}>
      <section
        className="mb-14 grid cursor-pointer gap-8 rounded-lg md:grid-cols-2 md:items-stretch"
        onClick={() => onStartArticle(hero)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onStartArticle(hero);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Mở bài đọc: ${hero.title}`}
      >
        <div className="relative aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-lg border border-[#E4E4E7] sm:min-h-[260px] md:min-h-[280px]">
          <Image
            src={hero.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-between gap-8 md:py-1">
          <div>
            <span className="inline-block rounded-sm bg-[#ebebeb] px-2.5 py-0.5 text-[9px] font-normal uppercase tracking-[0.18em] text-[#47464b]">
              Bài đọc nổi bật
            </span>
            <h1 className="mt-5 font-serif text-3xl font-normal leading-tight text-[#1c1b1c] md:text-[2.25rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#47464b]">
              {ensureSentenceEnd(hero.subheadline)}
            </p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#47464b]">{heroMeta}</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3 md:grid-rows-1 md:items-stretch">
        <div className="grid min-h-0 gap-6 md:col-span-2 md:grid-cols-2 md:grid-rows-[minmax(300px,1fr)_minmax(300px,auto)] md:items-stretch">
          <ReadingArticleCard article={textTopLeft} textOnly onClick={() => onStartArticle(textTopLeft)} />
          <ReadingArticleCard article={textTopRight} textOnly onClick={() => onStartArticle(textTopRight)} />
          <div className="flex md:col-span-2 md:min-h-0 md:h-full">
            <ReadingArticleCard
              article={wide}
              wide
              className="h-full w-full"
              onClick={() => onStartArticle(wide)}
            />
          </div>
        </div>
        <ReadingArticleCard article={dark} dark onClick={() => onStartArticle(dark)} />
      </section>
    </div>
  );
}

export function ReadingHub({
  onStartArticle,
  readMinutesByArticleId,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingHubProps) {
  const pathname = usePathname();
  const [layout, setLayout] = useState<ReadingHubLayout | null>(null);

  useEffect(() => {
    setLayout(pickReadingHubLayout(READING_HUB_ARTICLES));
  }, []);

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện đọc"
        showReadingFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />
      {layout ? (
        <ReadingHubContent
          layout={layout}
          onStartArticle={onStartArticle}
          readMinutesByArticleId={readMinutesByArticleId}
        />
      ) : (
        <ReadingHubSkeleton />
      )}
    </div>
  );
}
