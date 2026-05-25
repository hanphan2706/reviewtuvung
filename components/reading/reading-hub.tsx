"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReadingArticleCard } from "@/components/reading/reading-article-card";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  READING_HUB_HERO_ARTICLE,
  READING_HUB_HOME_ARTICLES,
  READING_HUB_WIDE_ARTICLE,
  readingArticleHeroMetaLine,
  type ReadingPilotId,
} from "@/lib/reading/hub-articles";

type ReadingHubProps = {
  onStartArticle: (pilotId: ReadingPilotId, passageIndex: number) => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function ReadingHub({
  onStartArticle,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingHubProps) {
  const pathname = usePathname();
  const [passage1, passage2, passage3] = READING_HUB_HOME_ARTICLES;
  const hero = READING_HUB_HERO_ARTICLE;
  const heroMeta = readingArticleHeroMetaLine(hero);

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

      <div className={`${studyHubContainerClass} py-10 md:py-12`}>
        <section
          className="mb-14 grid cursor-pointer gap-8 rounded-lg md:grid-cols-2 md:items-stretch"
          onClick={() => onStartArticle(hero.pilotId, hero.passage - 1)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onStartArticle(hero.pilotId, hero.passage - 1);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Mở bài đọc: ${hero.title}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#E4E4E7] md:aspect-auto md:h-full md:min-h-[280px]">
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
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#47464b]">{hero.subheadline}</p>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#47464b]">{heroMeta}</p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 md:grid-rows-1 md:items-stretch">
          <div className="grid min-h-0 gap-6 md:col-span-2 md:grid-cols-2 md:grid-rows-[minmax(300px,1fr)_minmax(300px,auto)] md:items-stretch">
            <ReadingArticleCard
              article={passage1}
              textOnly
              onClick={() => onStartArticle(passage1.pilotId, passage1.passage - 1)}
            />
            <ReadingArticleCard
              article={passage2}
              textOnly
              onClick={() => onStartArticle(passage2.pilotId, passage2.passage - 1)}
            />
            <div className="flex md:col-span-2 md:min-h-0 md:h-full">
              <ReadingArticleCard
                article={READING_HUB_WIDE_ARTICLE}
                wide
                className="h-full w-full"
                onClick={() =>
                  onStartArticle(READING_HUB_WIDE_ARTICLE.pilotId, READING_HUB_WIDE_ARTICLE.passage - 1)
                }
              />
            </div>
          </div>
          <ReadingArticleCard
            article={passage3}
            dark
            onClick={() => onStartArticle(passage3.pilotId, passage3.passage - 1)}
          />
        </section>
      </div>
    </div>
  );
}
