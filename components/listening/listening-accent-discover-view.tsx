"use client";

import { AccentChallengePromoSection } from "@/components/listening/accent-challenge-promo-section";
import { AccentPassageCompareSection } from "@/components/listening/accent-passage-compare-section";
import { AccentVideoLessonsSection } from "@/components/listening/accent-video-lessons-section";
import { AccentWordPairsSection } from "@/components/listening/accent-word-pairs-section";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
  studyHubSubpageTitleWideClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { ACCENT_EXPLORE_PAGE_DESCRIPTION } from "@/lib/listening/accent-explore-content";
import type { ListeningAccentExplorePageConfig } from "@/lib/listening/accent-nav";
import { usePathname } from "next/navigation";

type ListeningAccentDiscoverViewProps = {
  config: ListeningAccentExplorePageConfig;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function ListeningAccentDiscoverView({
  config,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningAccentDiscoverViewProps) {
  const pathname = usePathname();

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

      <div className={studyHubSubpageContentClass}>
        <header className={`${studyHubSubpageTitleWideClass} mb-10 md:mb-14`}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.5rem]">
            {config.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#47464b]">
            {ACCENT_EXPLORE_PAGE_DESCRIPTION}
          </p>
        </header>

        <AccentVideoLessonsSection />
        <AccentWordPairsSection />
        <AccentPassageCompareSection />
        <AccentChallengePromoSection />
      </div>
    </div>
  );
}
