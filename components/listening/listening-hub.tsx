"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Headphones, Play, Timer } from "lucide-react";
import { ListeningSourceExploreCarousel } from "@/components/listening/listening-source-explore-carousel";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass, studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { ListeningSuggestionsSection } from "@/components/listening/listening-suggestions-section";
import { useListeningRecentHistory } from "@/hooks/use-listening-recent-history";
import {
  getListeningFeaturedPart,
  listeningPartDurationMinutes,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import { LISTENING_LIBRARY_ALL_HREF } from "@/lib/listening/library-nav";

function formatDurationMinutes(minutes: number): string {
  return `${minutes} phút`;
}

type ListeningHubProps = {
  onStartFeatured: (slug: string) => void;
  onOpenLesson: (slug: string) => void;
  onOpenLibrary: (href: string) => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningHubHero({
  featuredPart,
  onStartFeatured,
}: {
  featuredPart: ListeningPartMeta;
  onStartFeatured: (slug: string) => void;
}) {
  const minutes = listeningPartDurationMinutes(featuredPart);

  return (
    <section className="mb-14">
      <div className="relative aspect-[16/10] max-h-[min(400px,52vh)] w-full overflow-hidden rounded-lg border border-[#E4E4E7] sm:aspect-[21/9] sm:max-h-[min(440px,58vh)]">
        <Image
          src={featuredPart.heroImage}
          alt={featuredPart.title}
          fill
          quality={90}
          className="object-cover object-center"
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-[#4B2876] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Nổi bật
              </span>
              <span className="text-sm font-medium text-white/90">{featuredPart.metaPill}</span>
            </div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-[2.5rem]">
              {featuredPart.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <button
                type="button"
                onClick={() => onStartFeatured(featuredPart.slug)}
                className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-[#000001] transition hover:bg-[#f3f0f8]"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                Bắt đầu nghe
              </button>
              <span className="inline-flex h-10 items-center gap-2 text-sm font-medium text-white/85">
                <Timer className="h-4 w-4 shrink-0" aria-hidden />
                {formatDurationMinutes(minutes)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ListeningHub({
  onStartFeatured,
  onOpenLesson,
  onOpenLibrary,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningHubProps) {
  const pathname = usePathname();
  const featuredPart = getListeningFeaturedPart();
  const { items: recentHistory, loading: recentHistoryLoading } = useListeningRecentHistory(isLoggedIn);

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />

      <div className={studyHubPageContentClass}>
        <ListeningHubHero featuredPart={featuredPart} onStartFeatured={onStartFeatured} />

        <ListeningSourceExploreCarousel onOpenSource={onOpenLibrary} />

        <section className="mb-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#000001]">Lịch sử luyện tập gần đây</h2>
          <div className="overflow-hidden rounded-lg border border-[#E4E4E7] bg-[#FAFAFA] shadow-sm">
            {recentHistoryLoading ? (
              <div className="divide-y divide-[#E4E4E7] bg-white">
                {(["a", "b", "c"] as const).map((key) => (
                  <div key={key} className="px-8 py-6">
                    <div className="h-5 w-2/3 animate-pulse rounded bg-[#ebebeb]" />
                    <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-[#ebebeb]" />
                  </div>
                ))}
              </div>
            ) : !isLoggedIn ? (
              <p className="bg-white px-8 py-8 text-[13px] text-[#47464b]">
                Đăng nhập để xem lịch sử nghe gần đây và đồng bộ trên mọi thiết bị.
              </p>
            ) : recentHistory.length === 0 ? (
              <p className="bg-white px-8 py-8 text-[13px] text-[#47464b]">
                Chưa có bài nghe nào. Chọn một bài trong{" "}
                <button
                  type="button"
                  onClick={() => onOpenLibrary(LISTENING_LIBRARY_ALL_HREF)}
                  className="cursor-pointer font-semibold text-[#000001] underline decoration-[#000001]/25 underline-offset-2"
                >
                  thư viện luyện nghe
                </button>{" "}
                để bắt đầu.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] table-fixed text-left">
                  <colgroup>
                    <col className="w-[44%]" />
                    <col className="w-[22%]" />
                    <col className="w-[17%]" />
                    <col className="w-[17%]" />
                  </colgroup>
                  <thead>
                    <tr className="border-b border-[#E4E4E7] bg-[#F4F4F5]">
                      <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#47464b] md:px-6 md:py-4 md:tracking-[0.2em]">
                        Bài học
                      </th>
                      <th className="whitespace-nowrap px-3 py-3 pl-4 text-[10px] font-bold uppercase tracking-[0.08em] text-[#47464b] md:px-5 md:py-4 md:pl-6 md:tracking-[0.14em]">
                        Ngày học
                      </th>
                      <th className="whitespace-nowrap px-3 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#47464b] md:px-5 md:py-4 md:tracking-[0.14em]">
                        Độ khó
                      </th>
                      <th className="whitespace-nowrap px-3 py-3 pr-6 text-right text-[10px] font-bold uppercase tracking-[0.08em] text-[#47464b] md:px-5 md:py-4 md:pr-8 md:tracking-[0.14em]">
                        Tiến độ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E4E7] bg-white">
                    {recentHistory.map((row) => (
                      <tr
                        key={row.lessonId}
                        className="group cursor-pointer transition-colors hover:bg-[#FAFAFA]"
                        onClick={() => onOpenLesson(row.slug)}
                      >
                        <td className="px-4 py-4 md:px-6 md:py-6">
                          <div className="flex items-center gap-3 md:gap-4">
                            <Headphones
                              className="h-5 w-5 shrink-0 text-[#616365] transition-colors group-hover:text-[#000001]"
                              aria-hidden
                            />
                            <div className="min-w-0">
                              <p className="truncate text-[15px] font-bold text-[#000001]">{row.title}</p>
                              <p className="mt-1 truncate text-[11px] text-[#47464b]">{row.subtitle}</p>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 pl-4 text-[13px] text-[#47464b] md:px-5 md:py-6 md:pl-6">
                          {row.listenedAtLabel}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 md:px-5 md:py-6">
                          <span className="inline-block whitespace-nowrap rounded bg-[#F4F4F5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#47464b] md:px-3">
                            {row.difficultyLabel}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 pr-6 text-right md:px-5 md:py-6 md:pr-8">
                          <span className="font-serif text-[18px] font-bold text-[#4B2876] md:text-[22px]">
                            {row.progressLabel}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <ListeningSuggestionsSection onOpenLesson={onOpenLesson} />
      </div>
    </div>
  );
}
