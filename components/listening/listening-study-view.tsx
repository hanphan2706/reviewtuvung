"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ListeningHub } from "@/components/listening/listening-hub";
import { ListeningPilotSession } from "@/components/listening-pilot-session";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyHubLoggedIn } from "@/hooks/use-study-hub-logged-in";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

type ListeningStudyViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

function ListeningStudyViewInner({ isLoggedIn, userProfile = null, supabaseConfigured }: ListeningStudyViewProps) {
  const loggedIn = useStudyHubLoggedIn(isLoggedIn);
  const [mode, setMode] = useState<"hub" | "session">("hub");
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

  const tryStartPilot = () => {
    if (loggedIn) {
      setMode("session");
      return;
    }
    setShowLogin(true);
  };

  if (mode === "session") {
    return (
      <div className="min-h-dvh bg-[#f5f5f7]">
        <div className="mx-auto w-full max-w-3xl px-5 pb-10 pt-6">
          <button
            type="button"
            onClick={() => setMode("hub")}
            className="mb-6 inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Luyện nghe
          </button>
          <ListeningPilotSession />
        </div>
      </div>
    );
  }

  return (
    <>
      <ListeningHub
        isLoggedIn={loggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        onStartPilot={tryStartPilot}
      />
      {showLogin ? (
        <StudyLoginPrompt
          title="Đăng nhập để nghe bài này"
          description="Bạn có thể khám phá Luyện nghe khi chưa đăng nhập. Đăng nhập để bắt đầu phiên nghe chủ động và xem transcript."
          oauthNext={`${pathname}?pilot=1`}
          supabaseConfigured={supabaseConfigured}
          onClose={() => setShowLogin(false)}
        />
      ) : null}
    </>
  );
}

export function ListeningStudyView(props: ListeningStudyViewProps) {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-[#f5f5f7]" />}>
      <ListeningStudyViewInner {...props} />
    </Suspense>
  );
}
