"use client";

import { AmericanIpaChartEmbed } from "@/components/listening/american-ipa-chart-embed";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
  studyHubSubpageTitleWideClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  AMERICAN_IPA_CHART_ATTRIBUTION,
  AMERICAN_IPA_CHART_SITE_URL,
} from "@/lib/listening/american-ipa-chart";
import type { ListeningIpaChartPageConfig } from "@/lib/listening/ipa-chart-nav";

type ListeningIpaChartViewProps = {
  config: ListeningIpaChartPageConfig;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext: string;
};

export function ListeningIpaChartView({
  config,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
  signInNext,
}: ListeningIpaChartViewProps) {
  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={signInNext}
      />

      <div className={studyHubSubpageContentClass}>
        <header className={studyHubSubpageTitleWideClass}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.25rem]">
            {config.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#47464b]">{config.description}</p>
        </header>

        <p className="mb-4 text-sm leading-relaxed text-[#47464b]">
          Bấm vào ký hiệu IPA hoặc hình minh họa để nghe âm mẫu. Bảng dưới chỉ còn phụ âm, nguyên âm
          và nguyên đôi — phần giới thiệu và hướng dẫn đã được rút gọn.
        </p>

        <AmericanIpaChartEmbed />

        <p className="mt-6 text-sm leading-relaxed text-[#616365]">
          Bảng{" "}
          <a
            href={AMERICAN_IPA_CHART_ATTRIBUTION.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#4B2876] underline decoration-[#4B2876]/30 underline-offset-2"
          >
            {AMERICAN_IPA_CHART_ATTRIBUTION.label}
          </a>{" "}
          bởi {AMERICAN_IPA_CHART_ATTRIBUTION.author} (phiên bản đã tùy chỉnh giao diện). General
          American ·{" "}
          <a
            href={AMERICAN_IPA_CHART_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#4B2876] underline decoration-[#4B2876]/30 underline-offset-2"
          >
            americanipachart.com
          </a>
        </p>
      </div>
    </div>
  );
}
