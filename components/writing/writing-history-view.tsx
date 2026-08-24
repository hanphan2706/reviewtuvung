"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import {
  fetchWritingEssayHistory,
  fetchWritingSavedSamples,
} from "@/lib/writing/writing-progress-client";
import type {
  WritingEssayHistoryItem,
  WritingSavedSampleItem,
} from "@/lib/writing/writing-progress-types";
import { WRITING_HUB_HREF, writingHistoryItemHref } from "@/lib/writing/writing-hub-nav";

const cardClass =
  "flex h-full w-full flex-col rounded-lg border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:shadow-md md:p-6";
const filterPillActive = "rounded-full bg-[#000001] px-3.5 py-1.5 text-xs font-semibold text-white";
const filterPillIdle =
  "rounded-full bg-[#f0f0ee] px-3.5 py-1.5 text-xs font-semibold text-[#47464b] transition hover:bg-[#e8e8e6]";

type HistoryFilter = "all" | "written" | "saved";

type HistoryCard = {
  key: string;
  kind: "written" | "saved";
  href: string;
  task: "task1" | "task2";
  title: string;
  excerpt: string;
  date: string;
  wordCount: number;
};

function formatSubmittedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("vi-VN", { dateStyle: "medium", timeStyle: "short" });
}

function toWrittenCard(essay: WritingEssayHistoryItem): HistoryCard {
  return {
    key: `written-${essay.id}`,
    kind: "written",
    href: writingHistoryItemHref(essay.id),
    task: essay.task,
    title: essay.title,
    excerpt: essay.excerpt,
    date: essay.submittedAt,
    wordCount: essay.wordCount,
  };
}

function toSavedCard(sample: WritingSavedSampleItem): HistoryCard {
  return {
    key: `saved-${sample.sampleId}`,
    kind: "saved",
    href: sample.href,
    task: sample.task,
    title: sample.title,
    excerpt: sample.excerpt,
    date: sample.savedAt,
    wordCount: sample.wordCount,
  };
}

export function WritingHistoryView() {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [essays, setEssays] = useState<WritingEssayHistoryItem[]>([]);
  const [saved, setSaved] = useState<WritingSavedSampleItem[]>([]);
  const [loading, setLoading] = useState(loggedIn);
  const [loadError, setLoadError] = useState(false);
  const [filter, setFilter] = useState<HistoryFilter>("all");

  useEffect(() => {
    if (!loggedIn) {
      setEssays([]);
      setSaved([]);
      setLoading(false);
      setLoadError(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    void Promise.all([fetchWritingEssayHistory(), fetchWritingSavedSamples()]).then(
      ([essayResult, savedResult]) => {
        if (cancelled) return;
        setEssays(essayResult.essays);
        setSaved(savedResult.samples);
        setLoadError(!essayResult.configured && essayResult.loggedIn && essayResult.essays.length === 0);
        setLoading(false);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [loggedIn]);

  const cards = useMemo(() => {
    const next = [...essays.map(toWrittenCard), ...saved.map(toSavedCard)];
    next.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return next;
  }, [essays, saved]);

  const visible = useMemo(() => {
    if (filter === "written") return cards.filter((card) => card.kind === "written");
    if (filter === "saved") return cards.filter((card) => card.kind === "saved");
    return cards;
  }, [cards, filter]);

  if (!loggedIn) {
    return (
      <>
        <main className={studyHubPageContentClass}>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2rem]">
            Lịch sử bài viết
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#47464b]">
            Đăng nhập để xem bài đã nộp và bài mẫu đã lưu.
          </p>
        </main>
        <StudyLoginPrompt
          title="Đăng nhập để xem lịch sử"
          description="Bài đã viết và bài mẫu đã lưu được gắn với tài khoản. Đăng nhập để xem lại."
          oauthNext={pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={() => router.push(WRITING_HUB_HREF)}
        />
      </>
    );
  }

  return (
    <main className={studyHubPageContentClass}>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2rem]">
          Lịch sử bài viết
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#47464b]">
          Các bài Task 1 và Task 2 bạn đã nộp, cùng bài mẫu đã lưu từ thư viện.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-[#E4E4E7] pb-5">
        {(
          [
            ["all", "Tất cả"],
            ["written", "Đã viết"],
            ["saved", "Đã lưu"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={filter === id ? filterPillActive : filterPillIdle}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-[#47464b]">Đang tải lịch sử…</p>
      ) : loadError && cards.length === 0 ? (
        <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
          Không tải được lịch sử. Thử tải lại trang.
        </p>
      ) : visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
          {filter === "saved"
            ? "Chưa có bài mẫu đã lưu. Mở thư viện sample rồi bấm Save Article."
            : filter === "written"
              ? "Chưa có bài nộp. Luyện Task 1 hoặc Task 2, rồi bấm Submit để lưu bài vào đây."
              : "Chưa có bài nộp hoặc bài đã lưu. Luyện viết hoặc lưu sample từ thư viện để xem lại tại đây."}
        </p>
      ) : (
        <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((card) => (
            <Link key={card.key} href={card.href} className={cardClass}>
              <div className="flex items-start justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#4b2876]">
                  {card.task === "task1" ? "IELTS Task 1" : "IELTS Task 2"}
                </p>
                <p className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
                  {card.kind === "saved" ? "Đã lưu" : "Đã viết"}
                </p>
              </div>
              <h2 className="mt-3 line-clamp-2 font-serif text-lg font-bold leading-snug text-[#000001] md:text-[1.2rem]">
                {card.title}
              </h2>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#47464b]">
                {card.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#E4E4E7] pt-4">
                <span className="text-xs font-medium tabular-nums text-[#47464b]/70">
                  {formatSubmittedAt(card.date)}
                  {card.wordCount > 0 ? ` · ${card.wordCount} words` : ""}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#000001]">
                  {card.kind === "saved" ? "Xem sample" : "Xem bài"}
                  <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
