"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { WRITING_HUB_HREF } from "@/lib/writing/writing-hub-nav";

export function WritingSkillLoginGate({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (!loggedIn) {
    return (
      <>
        <main className={`${studyHubSubpageContentClass} max-w-3xl`}>
          <h1 className="font-serif text-2xl font-bold text-[#000001]">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">{description}</p>
        </main>
        <StudyLoginPrompt
          title="Đăng nhập để luyện kỹ năng"
          description="Bạn có thể xem hub Luyện viết khi chưa đăng nhập. Đăng nhập để mở bài luyện câu."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(WRITING_HUB_HREF)}
        />
      </>
    );
  }

  return children;
}
