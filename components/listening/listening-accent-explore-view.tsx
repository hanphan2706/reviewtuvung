"use client";

import { Suspense, useCallback, useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AccentCompareSection } from "@/components/listening/accent-compare-section";
import { AccentIpaPreviewSection } from "@/components/listening/accent-ipa-preview-section";
import { AccentRecordingSection } from "@/components/listening/accent-recording-section";
import { SpeechAccentAttribution } from "@/components/listening/speech-accent-attribution";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
  studyHubSubpageTitleWideClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { ACCENT_EXPLORE_PAGE_DESCRIPTION } from "@/lib/listening/accent-explore-content";
import {
  parseAccentComparisonSetId,
  type ListeningAccentExplorePageConfig,
} from "@/lib/listening/accent-nav";

type ListeningAccentExploreViewProps = {
  config: ListeningAccentExplorePageConfig;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningAccentExploreViewInner({
  config,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningAccentExploreViewProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const querySetId = parseAccentComparisonSetId(searchParams.get("bo"));
  const defaultSetId = config.comparisonSets[0]?.id ?? "set-1";
  const activeSetId = querySetId ?? defaultSetId;

  const activeSet = useMemo(
    () => config.comparisonSets.find((set) => set.id === activeSetId) ?? config.comparisonSets[0],
    [activeSetId, config.comparisonSets],
  );

  const selectSet = useCallback(
    (setId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (setId === defaultSetId) {
        params.delete("bo");
      } else {
        params.set("bo", setId);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [defaultSetId, pathname, router, searchParams],
  );

  useEffect(() => {
    if (searchParams.get("bo") && !querySetId) {
      selectSet(defaultSetId);
    }
  }, [defaultSetId, querySetId, searchParams, selectSet]);

  if (!activeSet) return null;

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
        <header className={studyHubSubpageTitleWideClass}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.5rem]">
            {config.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#47464b]">
            {ACCENT_EXPLORE_PAGE_DESCRIPTION}
          </p>
        </header>

        <AccentIpaPreviewSection />
        <AccentCompareSection
          activeSet={activeSet}
          comparisonSets={config.comparisonSets}
          onSelectSet={selectSet}
        />
        <AccentRecordingSection />

        <div className="mt-10 border-t border-[#E4E4E7] pt-8">
          <SpeechAccentAttribution />
        </div>
      </div>
    </div>
  );
}

export function ListeningAccentExploreView(props: ListeningAccentExploreViewProps) {
  return (
    <Suspense fallback={<div className={studyHubPageBgClass} />}>
      <ListeningAccentExploreViewInner {...props} />
    </Suspense>
  );
}
