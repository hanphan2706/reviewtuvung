"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
  studyHubSubpageTitleWideClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";

type ListeningAccentComingSoonViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function ListeningAccentComingSoonView({
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningAccentComingSoonViewProps) {
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
        <header className={studyHubSubpageTitleWideClass}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.25rem]">
            Đang cập nhật
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#47464b]">
            Mục Khám phá chất giọng đang được hoàn thiện. Bạn quay lại sau nha — mình sẽ cập nhật trên trang Luyện nghe
            khi đã sẵn sàng.
          </p>
          <p className="mt-6">
            <Link
              href={LISTENING_HUB_HREF}
              className="text-[15px] text-[#4B2876] underline decoration-[#4B2876]/30 underline-offset-2 transition hover:decoration-[#4B2876]/70"
            >
              ← Quay lại Luyện nghe
            </Link>
          </p>
        </header>
      </div>
    </div>
  );
}
