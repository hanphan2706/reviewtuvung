"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  ChevronRight,
  Eye,
  PenLine,
  Sparkles,
} from "lucide-react";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { WritingStudentOnlyPrompt } from "@/components/writing/writing-student-only-prompt";
import { useWritingSampleNav } from "@/hooks/use-writing-sample-nav";
import { isWritingSampleLibraryUnlockedClient } from "@/lib/writing/writing-sample-access";
import {
  WRITING_CORE_MODULES,
  WRITING_SENTENCE_SKILLS,
  pickRandomWritingFeaturedCard,
  type WritingCoreModule,
  type WritingFeaturedCard,
  type WritingSentenceSkill,
} from "@/lib/writing/writing-hub-data";
import { fetchWritingProgress } from "@/lib/writing/writing-progress-client";
import {
  EMPTY_WRITING_PROGRESS,
  type WritingProgressSnapshot,
} from "@/lib/writing/writing-progress-types";
import {
  WRITING_FEATURED_SECTION_ID,
  WRITING_HISTORY_HREF,
  WRITING_MODULES_SECTION_ID,
  WRITING_SENTENCE_SECTION_ID,
} from "@/lib/writing/writing-hub-nav";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";
const sectionTitleClass = "font-serif text-2xl font-bold tracking-tight text-[#000001] md:text-[1.65rem]";
const bodyMutedClass = "text-sm leading-relaxed text-[#47464b]";

function ThinProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="h-1 overflow-hidden rounded-full bg-[#ececec]">
      <div className="h-full rounded-full bg-[#000001]" style={{ width: `${clamped}%` }} />
    </div>
  );
}

function CoreModuleIcon({ icon }: { icon: WritingCoreModule["icon"] }) {
  const Icon = icon === "book" ? BookOpen : icon === "chart" ? BarChart3 : PenLine;
  return (
    <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[#f3f0f8] text-[#4b2876]">
      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
    </div>
  );
}

function SentenceSkillGlyph({ icon }: { icon: WritingSentenceSkill["icon"] }) {
  if (icon === "translate") {
    return (
      <span className="font-serif text-sm font-bold tracking-tight text-[#4b2876]" aria-hidden>
        XA
      </span>
    );
  }
  if (icon === "cloze") {
    return (
      <span className="font-serif text-base font-bold leading-none text-[#4b2876]" aria-hidden>
        A_
      </span>
    );
  }
  return <PenLine className="size-5 text-[#4b2876]" strokeWidth={1.75} aria-hidden />;
}

function FeaturedSampleCard({
  sample,
  onOpen,
}: {
  sample: WritingFeaturedCard;
  onOpen: (href: string) => void;
}) {
  return (
    <article className={`${cardClass} flex h-full flex-col p-6 md:p-7`}>
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#47464b]/55">
        {sample.taskLabel}
      </p>
      <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-[#000001] md:text-[1.35rem]">
        {sample.title}
      </h3>
      <p className={`mt-4 line-clamp-3 flex-1 ${bodyMutedClass}`}>{sample.excerpt}</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E4E4E7] pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#47464b]/80">
          <Eye className="size-3.5" aria-hidden />
          {sample.viewsLabel}
        </span>
        <a
          href={sample.href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#000001] transition hover:opacity-70"
          onClick={(event) => {
            event.preventDefault();
            onOpen(sample.href);
          }}
        >
          Read Full Analysis
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

function RecentProgressCard() {
  const { loggedIn } = useWritingHubAuth();
  const [progress, setProgress] = useState<WritingProgressSnapshot>(EMPTY_WRITING_PROGRESS);

  useEffect(() => {
    if (!loggedIn) {
      setProgress(EMPTY_WRITING_PROGRESS);
      return;
    }
    let cancelled = false;
    void fetchWritingProgress().then((result) => {
      if (!cancelled) setProgress(result.progress);
    });
    return () => {
      cancelled = true;
    };
  }, [loggedIn]);

  const essayTotal = Math.max(progress.essaysCompleted.total, 1);
  const essaysPct = Math.round((progress.essaysCompleted.current / essayTotal) * 100);

  return (
    <aside className={`${cardClass} flex h-full flex-col p-4 md:p-5`}>
      <h3 className="font-serif text-lg font-bold text-[#000001]">Recent Progress</h3>

      {!loggedIn ? (
        <p className="mt-4 text-sm leading-relaxed text-[#47464b]">
          Đăng nhập để lưu và xem tiến độ luyện viết theo tài khoản của bạn.
        </p>
      ) : (
        <>
          <div className="mt-4 space-y-3">
            <div>
              <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs font-medium text-[#47464b]">
                <span>Essays Completed</span>
                <span>
                  {progress.essaysCompleted.current}/{progress.essaysCompleted.total}
                </span>
              </div>
              <ThinProgressBar value={essaysPct} />
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between gap-2 text-xs font-medium text-[#47464b]">
                <span>Language Accuracy</span>
                <span>{progress.languageAccuracyPercent}%</span>
              </div>
              <ThinProgressBar value={progress.languageAccuracyPercent} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5 rounded-lg border border-[#E4E4E7] bg-[#fafafa] px-2.5 py-2">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[#E4E4E7] bg-white font-serif text-lg font-bold tabular-nums text-[#000001]">
              {String(progress.streakDays).padStart(2, "0")}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/60">
                Streak
              </p>
              <p className="text-sm font-semibold text-[#000001]">Day Master</p>
            </div>
          </div>
        </>
      )}

      <div className="mt-auto pt-4">
        <Link
          href={progress.historyHref || WRITING_HISTORY_HREF}
          className="flex w-full items-center justify-center rounded-md bg-[#000001] px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-80"
        >
          View History
        </Link>
      </div>
    </aside>
  );
}

function CoreModulesGrid({
  onLockedSampleLibrary,
}: {
  onLockedSampleLibrary: () => void;
}) {
  const router = useRouter();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {WRITING_CORE_MODULES.map((module) => {
        if (module.id === "sample-library") {
          return (
            <button
              key={module.id}
              type="button"
              onClick={() => {
                if (!isWritingSampleLibraryUnlockedClient()) {
                  onLockedSampleLibrary();
                  return;
                }
                router.push(module.href);
              }}
              className={`${cardClass} flex h-full flex-col p-5 text-left transition hover:border-[#000001]/20 hover:shadow-md md:p-6`}
            >
              <CoreModuleIcon icon={module.icon} />
              <h3 className="font-serif text-lg font-bold leading-snug text-[#000001]">{module.title}</h3>
              <p className={`mt-3 flex-1 ${bodyMutedClass}`}>{module.description}</p>
            </button>
          );
        }

        return (
          <Link
            key={module.id}
            href={module.href}
            className={`${cardClass} flex h-full flex-col p-5 transition hover:border-[#000001]/20 hover:shadow-md md:p-6`}
          >
            <CoreModuleIcon icon={module.icon} />
            <h3 className="font-serif text-lg font-bold leading-snug text-[#000001]">{module.title}</h3>
            <p className={`mt-3 flex-1 ${bodyMutedClass}`}>{module.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

function SentenceSkillsList() {
  return (
    <ul className="space-y-3">
      {WRITING_SENTENCE_SKILLS.map((skill) => (
        <li key={skill.id}>
          <Link
            href={skill.href}
            className={`${cardClass} flex items-center gap-4 px-4 py-4 transition hover:border-[#000001]/20 hover:shadow-md md:gap-5 md:px-5`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#f3f0f8]">
              <SentenceSkillGlyph icon={skill.icon} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-base font-bold text-[#000001] md:text-lg">{skill.title}</h3>
              <p className={`mt-1 ${bodyMutedClass}`}>{skill.description}</p>
            </div>
            <ChevronRight className="size-5 shrink-0 text-[#47464b]/45" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function WritingHubView({
  featuredCandidates,
}: {
  featuredCandidates: readonly WritingFeaturedCard[];
}) {
  const [featuredSample] = useState(() => pickRandomWritingFeaturedCard(featuredCandidates));
  const pathname = usePathname();
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const { openSample, loginHref, closeLoginPrompt, loginOauthNext, studentOnlyOpen, closeStudentOnlyPrompt } =
    useWritingSampleNav(loggedIn);
  const [moduleStudentOnlyOpen, setModuleStudentOnlyOpen] = useState(false);
  const showStudentOnly = studentOnlyOpen || moduleStudentOnlyOpen;

  return (
    <>
      <main className={studyHubPageContentClass}>
        <section id={WRITING_FEATURED_SECTION_ID} className="scroll-mt-24">
          <h3 className={`${sectionTitleClass} mb-4 inline-flex items-center gap-2`}>
            <Sparkles className="size-5 text-[#000001]" aria-hidden />
            Featured Sample
          </h3>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(240px,18.5rem)] lg:items-stretch">
            {featuredSample ? (
              <FeaturedSampleCard sample={featuredSample} onOpen={openSample} />
            ) : (
              <p className={`rounded-lg border border-dashed border-[#E4E4E7] bg-white px-5 py-8 ${bodyMutedClass}`}>
                Chưa có bài mẫu trong thư viện.
              </p>
            )}
            <RecentProgressCard />
          </div>
        </section>

        <section id={WRITING_MODULES_SECTION_ID} className="mt-10 scroll-mt-24 md:mt-12">
          <h3 className={`${sectionTitleClass} mb-4`}>Module chính</h3>
          <CoreModulesGrid onLockedSampleLibrary={() => setModuleStudentOnlyOpen(true)} />
        </section>

        <section id={WRITING_SENTENCE_SECTION_ID} className="mt-10 scroll-mt-24 md:mt-14">
          <h3 className={`${sectionTitleClass} mb-4`}>Luyện kỹ năng câu</h3>
          <SentenceSkillsList />
        </section>
      </main>
      {loginHref ? (
        <StudyLoginPrompt
          title="Đăng nhập để đọc bài mẫu"
          description="Bạn có thể xem hub Luyện viết khi chưa đăng nhập. Đăng nhập để mở bài viết đầy đủ."
          oauthNext={loginOauthNext ?? pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
      {showStudentOnly ? (
        <WritingStudentOnlyPrompt
          onClose={() => {
            closeStudentOnlyPrompt();
            setModuleStudentOnlyOpen(false);
          }}
        />
      ) : null}
    </>
  );
}
