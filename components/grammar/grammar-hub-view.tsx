"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ListFilter, Search } from "lucide-react";
import { useGrammarAuth } from "@/components/grammar/grammar-auth-context";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import {
  aggregateCategoryProgress,
  aggregateDifficultyProgress,
  grammarProgressPercent,
  overallGrammarProgressPercent,
  type GrammarTopicProgressMap,
} from "@/lib/grammar/grammar-progress";
import {
  buildGrammarPathLevels,
  filterGrammarTopics,
  grammarPathLevelHref,
  GRAMMAR_CATEGORY_FILTER_OPTIONS,
  GRAMMAR_EXPLORE_TOPICS,
  GRAMMAR_LEARNING_PROGRESS_LABELS,
  GRAMMAR_OVERALL_PROGRESS,
  GRAMMAR_TOTAL_TOPIC_COUNT,
  GRAMMAR_TOPICS_SECTION_SUBTITLE,
  grammarDifficultyColor,
  grammarProgressBarColor,
  grammarTopicCardSubtitle,
  type GrammarCategoryFilter,
  type GrammarPathLevel,
  type GrammarTopic,
} from "@/lib/grammar/grammar-hub-data";
import {
  GRAMMAR_PATH_SECTION_ID,
  GRAMMAR_TOPICS_SECTION_ID,
} from "@/lib/grammar/grammar-hub-nav";
import { grammarTopicPracticeHref } from "@/lib/grammar/grammar-exercise-registry";
import { getGrammarWeeklyFeatured } from "@/lib/grammar/grammar-weekly-featured";
import { grammarTopicHref } from "@/lib/grammar/grammar-topic-registry";

const grammarNavy = "bg-[#000001]";
const grammarPurpleBar = "bg-[#4b2876]";
const grammarBadgeClass =
  "rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#4b2876]";
const iconToolButtonClass =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#000001] transition hover:border-[#000001]/30 hover:bg-[#fafafa]";

function ThinProgressBar({
  value,
  barClassName = grammarPurpleBar,
}: {
  value: number;
  barClassName?: string;
}) {
  return (
    <div className="h-1 overflow-hidden rounded-full bg-[#ece7f2]">
      <div className={`h-full rounded-full ${barClassName}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function LearningProgressCard({
  loggedIn,
  progressBySlug,
  onLogin,
}: {
  loggedIn: boolean;
  progressBySlug: GrammarTopicProgressMap;
  onLogin: () => void;
}) {
  const overall = loggedIn ? overallGrammarProgressPercent(progressBySlug) : 0;
  const rows = GRAMMAR_LEARNING_PROGRESS_LABELS.map((item) => ({
    ...item,
    progressPercent: loggedIn
      ? aggregateCategoryProgress(GRAMMAR_EXPLORE_TOPICS, progressBySlug, item.id)
      : 0,
  }));

  return (
    <aside className="flex h-full min-h-0 flex-col rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-sm md:p-7">
      <h2 className="font-serif text-xl font-bold text-[#000001]">Tiến độ học tập</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#47464b]">
        {loggedIn
          ? `${GRAMMAR_OVERALL_PROGRESS.summary} Tổng tiến độ hiện tại: ${overall}%.`
          : "Đăng nhập để lưu và xem tiến độ học thật theo tài khoản của bạn."}
      </p>
      <ul className="mt-6 space-y-5">
        {rows.map((item) => (
          <li key={item.id}>
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-[#000001]">{item.label}</span>
              <span className="font-semibold text-[#4b2876]">{item.progressPercent}%</span>
            </div>
            <ThinProgressBar value={item.progressPercent} barClassName={grammarPurpleBar} />
          </li>
        ))}
      </ul>
      {loggedIn ? (
        <button
          type="button"
          disabled
          className="mt-auto inline-flex items-center gap-1 pt-8 text-sm font-semibold text-[#4b2876]/70"
        >
          Xem báo cáo chi tiết
          <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
        </button>
      ) : (
        <button
          type="button"
          onClick={onLogin}
          className="mt-auto inline-flex items-center gap-1 pt-8 text-sm font-semibold text-[#4b2876] transition hover:opacity-80"
        >
          Đăng nhập để theo dõi tiến độ
          <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
        </button>
      )}
    </aside>
  );
}

function WeeklyFeaturedCard({
  onPractice,
  onTheory,
}: {
  onPractice: (slug: string) => void;
  onTheory: (slug: string) => void;
}) {
  const featured = useMemo(() => getGrammarWeeklyFeatured(), []);

  return (
    <section className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-lg border border-[#E4E4E7] shadow-sm md:min-h-[300px]">
      <Image
        src="/grammar/chu-diem-tuan-nay.jpg"
        alt=""
        fill
        quality={90}
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 60vw"
        priority
      />
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" aria-hidden />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-5 text-white sm:p-6 md:p-8">
        <span className={`mb-3 self-end sm:absolute sm:right-6 sm:top-6 sm:mb-0 md:right-8 md:top-8 ${grammarBadgeClass}`}>
          Chủ điểm tuần này
        </span>

        <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-white sm:mt-0 sm:max-w-[calc(100%-9rem)] sm:text-3xl md:text-[2rem]">
          {featured.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4 md:text-base">
          {featured.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-8 sm:pt-10">
          <button
            type="button"
            onClick={() => onPractice(featured.slug)}
            className="inline-flex h-10 items-center rounded-lg bg-white px-5 text-sm font-semibold text-[#000001] transition hover:bg-white/90"
          >
            Kiểm tra ngay
          </button>
          <button
            type="button"
            onClick={() => onTheory(featured.slug)}
            className="inline-flex h-10 items-center rounded-lg border border-white/40 bg-transparent px-5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Xem lý thuyết
          </button>
        </div>
      </div>
    </section>
  );
}

function PathLevelIcon({ level }: { level: GrammarPathLevel }) {
  if (level.completed) {
    return (
      <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg text-white ${grammarNavy}`}>
        <Check className="size-5" strokeWidth={2.5} aria-hidden />
      </span>
    );
  }

  const badge = level.id === "foundation" ? "A2" : level.id === "intermediate" ? "B1" : "B2";
  const active = !level.locked;

  return (
    <span
      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
        active ? `text-white ${grammarNavy}` : "bg-[#e8e8ea] text-[#47464b]/50"
      }`}
    >
      {badge}
    </span>
  );
}

function PathLevelRow({ level }: { level: GrammarPathLevel }) {
  const isActive = level.id === "intermediate";
  const isLocked = level.locked;
  const href = grammarPathLevelHref(level.id);

  const body = (
      <div className="flex gap-4 md:gap-5">
        <PathLevelIcon level={level} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/55">
                {level.cefrLabel}
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold text-[#000001]">
                {level.titleEn}{" "}
                <span className="font-normal text-[#47464b]">({level.titleVi})</span>
              </h3>
            </div>
            {level.statusLabel ? (
              <span
                className={
                  isLocked || level.statusLabel === "Mở"
                    ? "shrink-0 rounded bg-[#f0f0f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#47464b]/70"
                    : level.statusLabel === "Học xong"
                      ? "shrink-0 rounded bg-[#e8f5e9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1b5e20]"
                      : `shrink-0 ${grammarBadgeClass}`
                }
              >
                {level.statusLabel}
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[#47464b]">{level.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md border border-[#E4E4E7] bg-[#fafafa] px-2.5 py-1 text-xs font-semibold text-[#47464b]">
              {level.topicCount} Chủ điểm
            </span>
            {level.completed ? (
              <span className="rounded-md border border-[#E4E4E7] bg-[#fafafa] px-2.5 py-1 text-xs font-semibold text-[#47464b]">
                Đã hoàn thành
              </span>
            ) : level.progressPercent !== null && !isLocked ? (
              <span className="rounded-md border border-[#E4E4E7] bg-[#fafafa] px-2.5 py-1 text-xs font-semibold text-[#47464b]">
                {level.progressPercent}% Hoàn thành
              </span>
            ) : null}
          </div>
        </div>
      </div>
  );

  const shellClass = `block w-full rounded-lg border bg-white p-5 text-left shadow-sm transition md:p-6 ${
    isLocked
      ? "cursor-not-allowed border-[#E4E4E7] opacity-60"
      : "border-[#E4E4E7] hover:border-[#000001]/20 hover:shadow-md"
  } ${isActive ? "ring-1 ring-[#000001]/10" : ""}`;

  if (isLocked) {
    return (
      <div className={shellClass} aria-disabled>
        {body}
      </div>
    );
  }

  return (
    <Link href={href} className={shellClass}>
      {body}
    </Link>
  );
}

function ExploreTopicCard({
  topic,
  progressPercent,
  onOpen,
}: {
  topic: GrammarTopic;
  progressPercent: number;
  onOpen: (slug: string) => void;
}) {
  const subtitle = grammarTopicCardSubtitle(topic.description);

  return (
    <button
      type="button"
      onClick={() => onOpen(topic.id)}
      className="flex min-h-[196px] flex-col rounded-lg border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:border-[#000001]/20 hover:shadow-md md:p-6"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/55">
        Unit {topic.unitNumber} · {topic.categoryLabel}
      </p>
      <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[#000001]">{topic.title}</h3>
      {subtitle ? (
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#47464b]">{subtitle}</p>
      ) : (
        <div className="flex-1" />
      )}
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-[#47464b]/70">
            Độ khó:{" "}
            <span className={`font-semibold ${grammarDifficultyColor(topic.difficulty)}`}>
              {topic.difficultyVi}
            </span>
          </span>
          <span className="font-semibold text-[#47464b]">{progressPercent}%</span>
        </div>
        <ThinProgressBar
          value={progressPercent}
          barClassName={grammarProgressBarColor(topic.difficulty)}
        />
      </div>
    </button>
  );
}

const EXPLORE_PAGE_SIZE = 12;

export function GrammarHubView() {
  const { loggedIn, navigateWithAuth, promptLogin } = useGrammarAuth();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GrammarCategoryFilter>("all");
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [progressBySlug, setProgressBySlug] = useState<GrammarTopicProgressMap>({});
  const filterRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loggedIn) {
      setProgressBySlug({});
      return;
    }
    let cancelled = false;
    void fetch("/api/grammar/progress", { credentials: "include", cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) return null;
        return (await res.json()) as { progress?: GrammarTopicProgressMap };
      })
      .then((data) => {
        if (cancelled || !data?.progress) return;
        setProgressBySlug(data.progress);
      })
      .catch(() => {
        /* keep empty map */
      });
    return () => {
      cancelled = true;
    };
  }, [loggedIn]);

  useEffect(() => {
    if (!filterOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!filterRef.current?.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [filterOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const pathLevels = useMemo(
    () =>
      buildGrammarPathLevels({
        Easy: loggedIn
          ? aggregateDifficultyProgress(GRAMMAR_EXPLORE_TOPICS, progressBySlug, "Easy")
          : 0,
        Medium: loggedIn
          ? aggregateDifficultyProgress(GRAMMAR_EXPLORE_TOPICS, progressBySlug, "Medium")
          : 0,
        Hard: loggedIn
          ? aggregateDifficultyProgress(GRAMMAR_EXPLORE_TOPICS, progressBySlug, "Hard")
          : 0,
      }),
    [loggedIn, progressBySlug],
  );

  const filteredTopics = useMemo(
    () => filterGrammarTopics(GRAMMAR_EXPLORE_TOPICS, query, "all", category),
    [query, category],
  );

  const visibleTopics = useMemo(() => {
    if (showAllTopics || query.trim() || category !== "all") {
      return filteredTopics;
    }
    return filteredTopics.slice(0, EXPLORE_PAGE_SIZE);
  }, [filteredTopics, showAllTopics, query, category]);

  const canExpand =
    !showAllTopics &&
    !query.trim() &&
    category === "all" &&
    filteredTopics.length > EXPLORE_PAGE_SIZE;

  const openTheory = (slug: string) => navigateWithAuth(grammarTopicHref(slug));
  const openPractice = (slug: string) => navigateWithAuth(grammarTopicPracticeHref(slug));

  return (
    <div className={studyHubPageContentClass}>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)] lg:items-stretch lg:gap-5">
        <WeeklyFeaturedCard onPractice={openPractice} onTheory={openTheory} />
        <LearningProgressCard
          loggedIn={loggedIn}
          progressBySlug={progressBySlug}
          onLogin={() => promptLogin()}
        />
      </div>

      <section id={GRAMMAR_PATH_SECTION_ID} className="mt-12 scroll-mt-24 md:mt-14">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#000001]">Lộ trình học</h2>
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#47464b]/60 md:shrink-0 md:whitespace-nowrap md:text-right">
            Theo chuẩn khung tham chiếu CEFR
          </span>
        </div>
        <div className="space-y-4">
          {pathLevels.map((level) => (
            <PathLevelRow key={level.id} level={level} />
          ))}
        </div>
      </section>

      <section id={GRAMMAR_TOPICS_SECTION_ID} className="mt-12 scroll-mt-24 md:mt-14">
        <div className="mb-6 flex flex-col gap-4">
          <div className="min-w-0">
            <h2 className="font-serif text-2xl font-bold text-[#000001]">Khám phá chủ điểm riêng lẻ</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#47464b] md:text-base">
              {GRAMMAR_TOPICS_SECTION_SUBTITLE}
            </p>
          </div>

          <div className="flex w-full items-center justify-end gap-2">
            <div ref={filterRef} className="relative shrink-0">
              <button
                type="button"
                aria-label="Lọc theo chủ điểm"
                aria-expanded={filterOpen}
                aria-haspopup="true"
                onClick={() => {
                  setFilterOpen((open) => !open);
                  if (!filterOpen) setSearchOpen(false);
                }}
                className={`${iconToolButtonClass}${
                  filterOpen || category !== "all" ? " border-[#000001]/40 bg-[#fafafa]" : ""
                }`}
              >
                <ListFilter className="size-4" strokeWidth={2} aria-hidden />
              </button>
              {filterOpen ? (
                <div
                  aria-label="Chủ điểm ngữ pháp"
                  className="absolute right-0 top-full z-30 mt-2 max-h-72 w-56 overflow-auto rounded-lg border border-[#E4E4E7] bg-white py-1 shadow-lg"
                >
                  {GRAMMAR_CATEGORY_FILTER_OPTIONS.map((option) => {
                    const selected = category === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setCategory(option.value);
                          setFilterOpen(false);
                        }}
                        className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition hover:bg-[#fafafa] ${
                          selected ? "font-semibold text-[#000001]" : "text-[#47464b]"
                        }`}
                      >
                        <span>{option.label}</span>
                        {selected ? (
                          <Check className="size-3.5 shrink-0 text-[#4b2876]" strokeWidth={2.5} />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            <div
              className={`flex h-10 min-w-0 flex-row-reverse items-center overflow-hidden rounded-lg border bg-white transition-[width,border-color] duration-300 ease-out ${
                searchOpen || query.trim() ? "border-[#000001]/35" : "border-[#E4E4E7]"
              } ${
                searchOpen
                  ? "w-full max-w-none flex-1 sm:w-[min(100%,18rem)] sm:flex-none"
                  : "w-10 shrink-0"
              }`}
            >
              <button
                type="button"
                aria-label={searchOpen ? "Đóng tìm kiếm" : "Tìm chủ điểm"}
                aria-expanded={searchOpen}
                onClick={() => {
                  if (searchOpen) {
                    setSearchOpen(false);
                    if (!query.trim()) setQuery("");
                    return;
                  }
                  setSearchOpen(true);
                  setFilterOpen(false);
                }}
                className="inline-flex size-10 shrink-0 items-center justify-center text-[#000001] transition hover:bg-[#fafafa]"
              >
                <Search className="size-4" strokeWidth={2} aria-hidden />
              </button>
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setSearchOpen(false);
                    if (!query.trim()) setQuery("");
                  }
                }}
                placeholder="Tìm chủ điểm..."
                aria-label="Tìm chủ điểm theo tên"
                tabIndex={searchOpen ? 0 : -1}
                className={`h-full min-w-0 flex-1 border-0 bg-transparent text-base font-medium text-[#000001] outline-none placeholder:text-[#47464b]/70 ${
                  searchOpen ? "px-3 opacity-100" : "pointer-events-none w-0 px-0 opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTopics.length > 0 ? (
            visibleTopics.map((topic) => (
              <ExploreTopicCard
                key={topic.id}
                topic={topic}
                progressPercent={
                  loggedIn ? grammarProgressPercent(progressBySlug[topic.id] ?? 0) : 0
                }
                onOpen={openTheory}
              />
            ))
          ) : (
            <p className="col-span-full rounded-lg border border-dashed border-[#E4E4E7] bg-white px-4 py-10 text-center text-sm text-[#47464b]">
              Không tìm thấy chủ điểm phù hợp.
            </p>
          )}
        </div>

        {canExpand ? (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllTopics(true)}
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#47464b] transition hover:border-[#000001]/20 hover:text-[#000001]"
            >
              Xem tất cả {GRAMMAR_TOTAL_TOPIC_COUNT} chủ điểm
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
