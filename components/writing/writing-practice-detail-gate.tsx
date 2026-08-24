"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { WritingPracticeDetailView } from "@/components/writing/writing-practice-detail-view";
import type { WritingPracticePrompt, WritingTaskKind } from "@/lib/ielts-samples/writing-sample-types";
import { formatWritingSampleTitle } from "@/lib/ielts-samples/writing-sample-taxonomy";
import { writingPracticeLibraryHref } from "@/lib/writing/writing-hub-nav";

export function WritingPracticeDetailGate({
  promptId,
  title,
  task,
}: {
  promptId: string;
  title: string;
  task: WritingTaskKind;
}) {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const pathname = usePathname();
  const router = useRouter();
  const libraryHref = writingPracticeLibraryHref(task);
  const [prompt, setPrompt] = useState<WritingPracticePrompt | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "forbidden">("idle");

  useEffect(() => {
    if (!loggedIn) {
      setPrompt(null);
      setStatus("idle");
      return;
    }

    let cancelled = false;
    setStatus("loading");
    void fetch(
      `/api/writing/prompts/${encodeURIComponent(promptId)}?task=${encodeURIComponent(task)}`,
      {
        credentials: "include",
        cache: "no-store",
      },
    )
      .then(async (res) => {
        if (res.status === 401) return { kind: "forbidden" as const };
        if (res.status === 404) return { kind: "error" as const };
        if (!res.ok) return { kind: "error" as const };
        const data = (await res.json()) as { prompt?: WritingPracticePrompt };
        if (!data.prompt) return { kind: "error" as const };
        return { kind: "ok" as const, prompt: data.prompt };
      })
      .then((result) => {
        if (cancelled) return;
        if (result.kind === "ok") {
          setPrompt(result.prompt);
          setStatus("idle");
          return;
        }
        setPrompt(null);
        setStatus(result.kind);
      })
      .catch(() => {
        if (cancelled) return;
        setPrompt(null);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [loggedIn, promptId, task]);

  if (!loggedIn) {
    return (
      <>
        <main className={`${studyHubSubpageContentClass} max-w-3xl`}>
          <h1 className="font-serif text-2xl font-bold text-[#000001]">
            {formatWritingSampleTitle(title, promptId)}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
            Đăng nhập để mở đề và viết bài luyện Task {task === "task1" ? "1" : "2"}.
          </p>
        </main>
        <StudyLoginPrompt
          title="Đăng nhập để luyện đề"
          description="Bạn có thể duyệt danh sách đề khi chưa đăng nhập. Đăng nhập để mở đề và viết bài."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(libraryHref)}
        />
      </>
    );
  }

  if (status === "loading" || (!prompt && status === "idle")) {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Đang tải đề bài…</p>
      </main>
    );
  }

  if (status === "forbidden") {
    return (
      <StudyLoginPrompt
        title="Đăng nhập để luyện đề"
        description="Phiên đăng nhập đã hết hạn. Đăng nhập lại để mở đề."
        oauthNext={pathname}
        supabaseConfigured={supabaseConfigured}
        onClose={() => router.push(libraryHref)}
      />
    );
  }

  if (status === "error" || !prompt) {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Không tải được đề bài. Thử tải lại trang.</p>
      </main>
    );
  }

  return <WritingPracticeDetailView prompt={prompt} />;
}
