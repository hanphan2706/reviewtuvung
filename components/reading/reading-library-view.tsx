"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingArticleGrid } from "@/components/reading/reading-article-grid";
import { ReadingPilotSession } from "@/components/reading-pilot-session";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubContainerClass, studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { ReadingHubArticle, ReadingPilotId } from "@/lib/reading/hub-articles";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingLibraryViewProps = {
  pageTitle: string;
  pageDescription: string;
  articles: ReadingHubArticle[];
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingLibraryViewInner({
  pageTitle,
  pageDescription,
  articles,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingLibraryViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const [mode, setMode] = useState<"browse" | "session">("browse");
  const [sessionPilotId, setSessionPilotId] = useState<ReadingPilotId>("cam20-test2");
  const [sessionPassageIndex, setSessionPassageIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (loggedIn && searchParams.get("pilot") === "1") {
      setMode("session");
      router.replace(pathname, { scroll: false });
    }
  }, [loggedIn, pathname, router, searchParams]);

  const tryStartArticle = (pilotId: ReadingPilotId, passageIndex = 0) => {
    setSessionPilotId(pilotId);
    setSessionPassageIndex(passageIndex);
    if (loggedIn) {
      setMode("session");
      return;
    }
    setShowLogin(true);
  };

  if (mode === "session") {
    return (
      <div className={studyHubPageBgClass}>
        <StudyHubHeader
          title="Luyện đọc"
          showReadingFilters
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        <ReadingPilotSession
          pilotId={sessionPilotId}
          initialPassageIndex={sessionPassageIndex}
          onBack={() => setMode("browse")}
        />
      </div>
    );
  }

  return (
    <>
      <div className={studyHubPageBgClass}>
        <StudyHubHeader
          title="Luyện đọc"
          showReadingFilters
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        <div className={`${studyHubContainerClass} py-10 md:py-12`}>
          <header className="mb-10 max-w-2xl">
            <h1 className="font-serif text-3xl font-bold leading-tight text-[#1c1b1c] md:text-[2rem]">{pageTitle}</h1>
            {pageDescription ? (
              <p className="mt-3 text-base leading-relaxed text-[#47464b]">{pageDescription}</p>
            ) : null}
          </header>
          <ReadingArticleGrid articles={articles} onStartArticle={tryStartArticle} />
        </div>
      </div>
      {showLogin ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài này"
          description="Bạn có thể duyệt thư viện Luyện đọc khi chưa đăng nhập. Đăng nhập để mở bài đọc, tra từ và thêm vào deck."
          oauthNext={`${pathname}?pilot=1`}
          supabaseConfigured={supabaseConfigured}
          onClose={() => setShowLogin(false)}
        />
      ) : null}
    </>
  );
}

export function ReadingLibraryView(props: ReadingLibraryViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ReadingLibraryViewInner {...props} />
    </Suspense>
  );
}
