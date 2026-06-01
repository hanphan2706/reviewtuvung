"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ReadingPilotSession } from "@/components/reading-pilot-session";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import { READING_HUB_HREF } from "@/lib/reading/library-nav";
import type { PassageVocabItem } from "@/lib/reading/passage-vocabulary";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingArticleSessionViewProps = {
  article: ReadingHubArticle;
  initialPassage?: ReadingPassageBlock | null;
  vocabularyItems?: PassageVocabItem[];
  translationParagraphs?: string[] | null;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

export function ReadingArticleSessionView({
  article,
  initialPassage = null,
  vocabularyItems = [],
  translationParagraphs = null,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingArticleSessionViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const [showLogin, setShowLogin] = useState(!loggedIn);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) setShowLogin(false);
    else setShowLogin(true);
  }, [loggedIn]);

  return (
    <>
      <div className={studyHubPageBgClass}>
        <StudyHubHeader
          title="Luyện đọc"
          showReadingFilters
          onTitleClick={() => router.push(READING_HUB_HREF)}
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        {loggedIn ? (
          <ReadingPilotSession
            pilotId={article.pilotId}
            initialPassageIndex={article.passage - 1}
            initialPassage={initialPassage}
            vocabularyItems={vocabularyItems}
            translationParagraphs={translationParagraphs}
            isLoggedIn={loggedIn}
            onBack={() => router.push(READING_HUB_HREF)}
          />
        ) : (
          <div className="mx-auto max-w-3xl px-4 py-16 text-center text-[#47464b]">
            <p className="font-serif text-xl text-[#000001]">{article.title}</p>
            <p className="mt-3 text-sm">Đăng nhập để mở bài đọc, tra từ và thêm vào deck.</p>
          </div>
        )}
      </div>
      {showLogin ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài này"
          description="Bạn có thể xem thư viện Luyện đọc khi chưa đăng nhập. Đăng nhập để mở bài đọc, tra từ và thêm vào deck."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(READING_HUB_HREF)}
        />
      ) : null}
    </>
  );
}
