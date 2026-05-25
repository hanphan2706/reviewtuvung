"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReadingHub } from "@/components/reading/reading-hub";
import { ReadingPilotSession } from "@/components/reading-pilot-session";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass } from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingStudyViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingStudyViewInner({ isLoggedIn, userProfile = null, supabaseConfigured }: ReadingStudyViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const [mode, setMode] = useState<"hub" | "session">("hub");
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
          onTitleClick={() => setMode("hub")}
          isLoggedIn={loggedIn}
          userProfile={userProfile}
          supabaseConfigured={supabaseConfigured}
          signInNext={pathname}
        />
        <ReadingPilotSession
          pilotId={sessionPilotId}
          initialPassageIndex={sessionPassageIndex}
          onBack={() => setMode("hub")}
        />
      </div>
    );
  }

  return (
    <>
      <ReadingHub
        isLoggedIn={loggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        onStartArticle={tryStartArticle}
      />
      {showLogin ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài này"
          description="Bạn có thể xem thư viện Luyện đọc khi chưa đăng nhập. Đăng nhập để mở bài đọc, tra từ và thêm vào deck."
          oauthNext={`${pathname}?pilot=1`}
          supabaseConfigured={supabaseConfigured}
          onClose={() => setShowLogin(false)}
        />
      ) : null}
    </>
  );
}

export function ReadingStudyView(props: ReadingStudyViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ReadingStudyViewInner {...props} />
    </Suspense>
  );
}
