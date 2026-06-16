"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Flame, LogOut } from "lucide-react";
import { AuthButton } from "@/components/auth-button";
import { StudyHubUserAvatar } from "@/components/study-module/study-hub-user-avatar";
import { studyTokens } from "@/components/study-module/study-tokens";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { useProfileReturnPath } from "@/hooks/use-profile-return-path";
import { profilePageHref } from "@/lib/profile/profile-return-path";
import {
  LISTENING_LESSONS_TOTAL,
  READING_ARTICLES_TOTAL,
  vocabularyReviewedToday,
  type ProfileLearningProgress,
} from "@/lib/profile/learning-progress";
import { formatIeltsBandDisplay } from "@/lib/ielts/ielts-band-average";
import { readLocalIeltsBandAverage } from "@/lib/ielts/ielts-practice-attempts";
import { LISTENING_IELTS_EXAM_HREF } from "@/lib/listening/ielts-test-catalog";
import { READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";
import { localStreakSnapshot } from "@/lib/reading/reading-progress";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";

type ApiSummary = ProfileLearningProgress & { configured?: boolean };

const EMPTY_SUMMARY: ProfileLearningProgress = {
  readingStreak: 0,
  readingLongestStreak: 0,
  vocabularyTotal: 0,
  vocabularyReviewedToday: 0,
  vocabularyDueToday: 0,
  readingArticlesCompleted: 0,
  readingArticlesTotal: READING_ARTICLES_TOTAL,
  listeningLessonsCompleted: 0,
  listeningLessonsTotal: LISTENING_LESSONS_TOTAL,
  ieltsReadingBandAverage: null,
  ieltsListeningBandAverage: null,
};

function formatCount(n: number): string {
  return n.toLocaleString("vi-VN");
}

const metricValueClass =
  "font-serif text-3xl font-bold leading-none text-ink";

const metricSuffixClass = "text-lg font-semibold text-ink-muted";

const rowLinkClass =
  "max-w-[9.5rem] shrink-0 text-right text-xs font-medium leading-snug text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2";

const ieltsBandValueClass =
  "font-serif text-2xl font-bold leading-none text-[#000001]";

function ProgressRow({
  label,
  metric,
  trailing,
  footnote,
  className = "",
}: {
  label: string;
  metric: ReactNode;
  trailing?: ReactNode;
  footnote?: ReactNode;
  className?: string;
}) {
  const padClass = footnote ? "pt-3.5 pb-5" : "py-3.5";

  return (
    <div
      className={`border-b border-zinc-200/90 px-5 ${padClass} last:border-b-0 ${className}`.trim()}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">{label}</p>
      <div className="mt-1 flex items-center justify-between gap-4">
        <div className="min-w-0">{metric}</div>
        {trailing ? <div className="shrink-0">{trailing}</div> : null}
      </div>
      {footnote ? <div className="mt-2.5">{footnote}</div> : null}
    </div>
  );
}

export function ProfileProgressView({
  userProfile,
  isLoggedIn,
}: {
  userProfile: StudyHubUserProfile | null;
  isLoggedIn: boolean;
}) {
  const returnTo = useProfileReturnPath();
  const now = useNowTick();
  const words = useSrsStore((s) => s.words);
  const reviewDayTallies = useSrsStore((s) => s.reviewDayTallies);

  const [remote, setRemote] = useState<ProfileLearningProgress | null>(null);
  const [loading, setLoading] = useState(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      setRemote(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    void fetch("/api/profile/summary", { credentials: "include" })
      .then((r) => r.json())
      .then((data: ApiSummary) => {
        if (cancelled || !data.configured) return;
        setRemote({
          readingStreak: data.readingStreak ?? 0,
          readingLongestStreak: data.readingLongestStreak ?? 0,
          vocabularyTotal: data.vocabularyTotal ?? 0,
          vocabularyReviewedToday: data.vocabularyReviewedToday ?? 0,
          vocabularyDueToday: data.vocabularyDueToday ?? 0,
          readingArticlesCompleted: data.readingArticlesCompleted ?? 0,
          readingArticlesTotal: data.readingArticlesTotal ?? READING_ARTICLES_TOTAL,
          listeningLessonsCompleted: data.listeningLessonsCompleted ?? 0,
          listeningLessonsTotal: data.listeningLessonsTotal ?? LISTENING_LESSONS_TOTAL,
          ieltsReadingBandAverage: data.ieltsReadingBandAverage ?? null,
          ieltsListeningBandAverage: data.ieltsListeningBandAverage ?? null,
        });
      })
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]);

  const localReading = useMemo(() => localStreakSnapshot(), []);

  const clientVocab = useMemo(
    () => ({
      total: words.length,
      reviewedToday: vocabularyReviewedToday(reviewDayTallies, now),
      due: countDue(words, now),
    }),
    [words, reviewDayTallies, now],
  );

  const [localIeltsBands, setLocalIeltsBands] = useState({
    reading: null as number | null,
    listening: null as number | null,
  });

  useEffect(() => {
    const refreshLocalIeltsBands = () => {
      setLocalIeltsBands({
        reading: readLocalIeltsBandAverage("reading"),
        listening: readLocalIeltsBandAverage("listening"),
      });
    };
    refreshLocalIeltsBands();
    window.addEventListener("focus", refreshLocalIeltsBands);
    return () => window.removeEventListener("focus", refreshLocalIeltsBands);
  }, []);

  const localIeltsBandsSnapshot = localIeltsBands;

  const stats = useMemo((): ProfileLearningProgress => {
    const base = remote ?? EMPTY_SUMMARY;
    return {
      readingStreak: isLoggedIn ? base.readingStreak : localReading.currentStreak,
      readingLongestStreak: isLoggedIn ? base.readingLongestStreak : localReading.longestStreak,
      vocabularyTotal: Math.max(base.vocabularyTotal, clientVocab.total),
      vocabularyReviewedToday: Math.max(base.vocabularyReviewedToday, clientVocab.reviewedToday),
      vocabularyDueToday: clientVocab.due || base.vocabularyDueToday,
      readingArticlesCompleted: base.readingArticlesCompleted,
      readingArticlesTotal: base.readingArticlesTotal || READING_ARTICLES_TOTAL,
      listeningLessonsCompleted: base.listeningLessonsCompleted,
      listeningLessonsTotal: base.listeningLessonsTotal || LISTENING_LESSONS_TOTAL,
      ieltsReadingBandAverage: isLoggedIn
        ? (base.ieltsReadingBandAverage ?? localIeltsBandsSnapshot.reading)
        : localIeltsBandsSnapshot.reading,
      ieltsListeningBandAverage: isLoggedIn
        ? (base.ieltsListeningBandAverage ?? localIeltsBandsSnapshot.listening)
        : localIeltsBandsSnapshot.listening,
    };
  }, [remote, clientVocab, isLoggedIn, localReading, localIeltsBandsSnapshot]);

  const readingPct =
    stats.readingArticlesTotal > 0
      ? Math.round((stats.readingArticlesCompleted / stats.readingArticlesTotal) * 100)
      : 0;

  const listeningPct =
    stats.listeningLessonsTotal > 0
      ? Math.round((stats.listeningLessonsCompleted / stats.listeningLessonsTotal) * 100)
      : 0;

  const signInNext = profilePageHref();

  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-[#f5f5f7] px-5 pb-8 pt-6 sm:pt-7">
      <div className="relative w-full max-w-md">
        <Link
          href={returnTo}
          className="absolute left-0 top-0 inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
          aria-label="Quay lại"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
        </Link>

        <div className="flex flex-col items-center">
        <StudyHubUserAvatar profile={userProfile} className="size-24 text-2xl" />
        <h1 className="mt-3 text-center font-serif text-2xl font-bold tracking-tight text-ink">
          {userProfile?.displayName ?? "Tài khoản"}
        </h1>

        <section className="mt-6 w-full overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/5">
          <h2 className="border-b border-zinc-200/90 px-5 py-3 text-center font-serif text-lg font-bold text-ink">
            Tiến độ học tập
          </h2>

          {loading ? (
            <p className="px-5 py-8 text-center text-sm text-ink-muted">Đang tải tiến độ…</p>
          ) : (
            <>
              <ProgressRow
                label="Chuỗi đọc hiện tại"
                metric={
                  <p className={metricValueClass}>
                    {formatCount(stats.readingStreak)}{" "}
                    <span className={metricSuffixClass}>ngày</span>
                  </p>
                }
                trailing={<Flame className="size-6 text-[#4b2876]" aria-hidden />}
              />

              <ProgressRow
                label="Từ vựng đã học"
                metric={
                  <p className={metricValueClass}>{formatCount(stats.vocabularyTotal)}</p>
                }
                trailing={
                  stats.vocabularyDueToday > 0 ? (
                    <Link href="/review" className={rowLinkClass}>
                      {formatCount(stats.vocabularyDueToday)} từ đến hạn ôn →
                    </Link>
                  ) : stats.vocabularyReviewedToday > 0 ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      +{formatCount(stats.vocabularyReviewedToday)} hôm nay
                    </span>
                  ) : null
                }
                footnote={
                  stats.vocabularyReviewedToday > 0 && stats.vocabularyDueToday > 0 ? (
                    <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      +{formatCount(stats.vocabularyReviewedToday)} hôm nay
                    </span>
                  ) : undefined
                }
              />

              <ProgressRow
                label="Bài nghe đã hoàn thành"
                metric={
                  <p className={metricValueClass}>
                    {formatCount(stats.listeningLessonsCompleted)}
                    <span className={metricSuffixClass}>
                      {" "}
                      / {formatCount(stats.listeningLessonsTotal)}
                    </span>
                  </p>
                }
                trailing={
                  <Link href="/tu-hoc/luyen-nghe" className={rowLinkClass}>
                    Mở thư viện luyện nghe →
                  </Link>
                }
                footnote={
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full transition-[width] duration-300"
                      style={{ width: `${listeningPct}%`, backgroundColor: studyTokens.accent }}
                    />
                  </div>
                }
              />

              <ProgressRow
                label="Bài đọc đã hoàn thành"
                metric={
                  <p className={metricValueClass}>
                    {formatCount(stats.readingArticlesCompleted)}
                    <span className={metricSuffixClass}>
                      {" "}
                      / {formatCount(stats.readingArticlesTotal)}
                    </span>
                  </p>
                }
                trailing={
                  <Link href="/tu-hoc/luyen-doc" className={rowLinkClass}>
                    Mở thư viện luyện đọc →
                  </Link>
                }
                footnote={
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full transition-[width] duration-300"
                      style={{ width: `${readingPct}%`, backgroundColor: studyTokens.accent }}
                    />
                  </div>
                }
              />
            </>
          )}

          <div className="border-b border-zinc-200/90 px-5 pt-3.5 pb-5 last:border-b-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
              Tiến độ luyện đề IELTS
            </p>
            <div className="mt-3 flex flex-col gap-5">
              <div className="flex items-baseline justify-between gap-5">
                <div className="flex items-baseline gap-5">
                  <span className="text-sm font-medium text-ink-muted">Đọc</span>
                  <span className={ieltsBandValueClass}>
                    {formatIeltsBandDisplay(stats.ieltsReadingBandAverage)}
                  </span>
                </div>
                <Link href={READING_IELTS_EXAM_HREF} className={rowLinkClass}>
                  Luyện đề đọc →
                </Link>
              </div>
              <div className="flex items-baseline justify-between gap-5">
                <div className="flex items-baseline gap-5">
                  <span className="text-sm font-medium text-ink-muted">Nghe</span>
                  <span className={ieltsBandValueClass}>
                    {formatIeltsBandDisplay(stats.ieltsListeningBandAverage)}
                  </span>
                </div>
                <Link href={LISTENING_IELTS_EXAM_HREF} className={rowLinkClass}>
                  Luyện đề nghe →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {isLoggedIn ? (
          <div className="mt-6 flex w-full justify-center">
            <div className="flex items-center gap-1.5">
              <LogOut className="size-4 shrink-0 text-red-600" aria-hidden />
              <AuthButton
                mode="sign-out"
                menuRow
                signOutLabel="Đăng xuất"
                redirectTo="/"
                className="cursor-pointer text-xs font-medium text-red-600 sm:text-sm"
              />
            </div>
          </div>
        ) : null}

        {!isLoggedIn ? (
          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-center text-xs text-ink-muted">
              Đăng nhập để đồng bộ tiến độ đọc, nghe và từ vựng trên mọi thiết bị.
            </p>
            <AuthButton mode="sign-in" next={signInNext} signInLabel="Đăng nhập" />
          </div>
        ) : null}
        </div>
      </div>
    </div>
  );
}
