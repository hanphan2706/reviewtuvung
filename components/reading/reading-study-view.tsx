"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { ReadingHub } from "@/components/reading/reading-hub";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import { useReadingArticleNav } from "@/hooks/use-reading-article-nav";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ReadingStudyViewProps = {
  readMinutesByArticleId: Record<string, number>;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ReadingStudyViewInner({
  readMinutesByArticleId,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ReadingStudyViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const pathname = usePathname();
  const { openArticle, loginArticle, closeLoginPrompt, loginOauthNext } = useReadingArticleNav(loggedIn);

  const onStartArticle = (article: ReadingHubArticle) => {
    openArticle(article);
  };

  return (
    <>
      <ReadingHub
        readMinutesByArticleId={readMinutesByArticleId}
        isLoggedIn={loggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        onStartArticle={onStartArticle}
      />
      {loginArticle ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài này"
          description="Đăng nhập để mở bài đọc, nghe audio, làm bài và thêm từ vào deck."
          oauthNext={loginOauthNext ?? pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
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
