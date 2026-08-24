"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ClipboardList } from "lucide-react";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { fetchWritingEssaySubmission } from "@/lib/writing/writing-progress-client";
import type { WritingEssaySubmission } from "@/lib/writing/writing-progress-types";
import { WRITING_HISTORY_HREF } from "@/lib/writing/writing-hub-nav";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";

function formatSubmittedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("vi-VN", { dateStyle: "medium", timeStyle: "short" });
}

export function WritingHistoryDetailView({ submissionId }: { submissionId: string }) {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [essay, setEssay] = useState<WritingEssaySubmission | null>(null);
  const [status, setStatus] = useState<"loading" | "missing" | "ready">("loading");

  useEffect(() => {
    if (!loggedIn) {
      setEssay(null);
      setStatus("loading");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    void fetchWritingEssaySubmission(submissionId).then((result) => {
      if (cancelled) return;
      if (!result.loggedIn || !result.essay) {
        setEssay(null);
        setStatus("missing");
        return;
      }
      setEssay(result.essay);
      setStatus("ready");
    });
    return () => {
      cancelled = true;
    };
  }, [loggedIn, submissionId]);

  if (!loggedIn) {
    return (
      <>
        <main className={studyHubSubpageContentClass}>
          <h1 className="font-serif text-2xl font-bold text-[#000001]">Bài đã nộp</h1>
          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">Đăng nhập để xem lại bài viết.</p>
        </main>
        <StudyLoginPrompt
          title="Đăng nhập để xem bài"
          description="Bài viết đã nộp được lưu theo tài khoản. Đăng nhập để xem lại."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(WRITING_HISTORY_HREF)}
        />
      </>
    );
  }

  if (status === "loading") {
    return (
      <main className={studyHubSubpageContentClass}>
        <p className="text-sm text-[#47464b]">Đang tải bài viết…</p>
      </main>
    );
  }

  if (status === "missing" || !essay) {
    return (
      <main className={studyHubSubpageContentClass}>
        <h1 className="font-serif text-2xl font-bold text-[#000001]">Không tìm thấy bài viết</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
          Bài này không tồn tại hoặc không thuộc tài khoản của bạn.
        </p>
        <Link
          href={WRITING_HISTORY_HREF}
          className="mt-6 inline-flex text-sm font-semibold text-[#000001] underline decoration-[#000001]/25 underline-offset-2"
        >
          ← Về lịch sử bài viết
        </Link>
      </main>
    );
  }

  return (
    <main className={studyHubSubpageContentClass}>
      <Link
        href={WRITING_HISTORY_HREF}
        className="text-sm font-medium text-[#47464b] transition hover:text-[#000001]"
      >
        ← Lịch sử bài viết
      </Link>

      <header className="mt-4 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#4b2876]">
            {essay.task === "task1" ? "IELTS Task 1" : "IELTS Task 2"}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
            {formatSubmittedAt(essay.submittedAt)}
          </span>
        </div>
        <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#000001] md:text-[1.85rem]">
          {essay.title}
        </h1>
        <p className="mt-2 text-xs font-medium tabular-nums text-[#47464b]/70">{essay.wordCount} words</p>
      </header>

      <div className="mt-6 space-y-6">
        <section className={`p-5 md:p-6 ${cardClass}`}>
          <div className="mb-3 flex items-center gap-2">
            <ClipboardList className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
              Essay Prompt
            </h2>
          </div>
          <p className="whitespace-pre-wrap text-sm italic leading-relaxed text-[#47464b]">
            {essay.promptText}
          </p>
          {essay.visualSrc ? (
            <Image
              src={essay.visualSrc}
              alt={`Visual for ${essay.title}`}
              width={1200}
              height={900}
              className="mt-5 h-auto max-w-full object-contain"
              sizes="100vw"
              unoptimized
            />
          ) : null}
        </section>

        <section className={`p-5 md:p-6 ${cardClass}`}>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
            Your essay
          </h2>
          <p className="mt-4 whitespace-pre-wrap text-[15px] leading-relaxed text-[#142238]">
            {essay.body}
          </p>
        </section>
      </div>
    </main>
  );
}
