"use client";

import { Suspense, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { StudyHubLibraryPagination } from "@/components/study-module/study-hub-library-pagination";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { useStudyHubLibraryGrid } from "@/hooks/use-study-hub-library-grid";
import { useWritingSampleNav } from "@/hooks/use-writing-sample-nav";
import type { WritingPracticeCatalogEntry } from "@/lib/ielts-samples/writing-sample-types";
import {
  formatWritingSampleTitle,
  formatWritingSourceTypeLabel,
  formatWritingTopicLabel,
  mapWritingSourceType,
  WRITING_TASK1_SUBTYPES,
  WRITING_TASK2_SUBTYPES,
  writingSubtypeLabel,
  type WritingSubtype,
  type WritingTaskKind,
} from "@/lib/ielts-samples/writing-sample-taxonomy";
import { writingPracticeHref } from "@/lib/writing/writing-hub-nav";

const cardClass =
  "flex h-full w-full flex-col rounded-lg border border-[#E4E4E7] bg-white p-5 text-left shadow-sm transition hover:shadow-md md:p-6";
const bodyMutedClass = "text-sm leading-relaxed text-[#47464b]";
const labelCapsLeftClass = "text-[10px] font-bold uppercase tracking-wider text-[#4b2876]";
const labelCapsRightClass = "text-[10px] font-bold uppercase tracking-wider text-[#47464b]";

const filterPillActive =
  "rounded-full bg-[#000001] px-3.5 py-1.5 text-xs font-semibold text-white";
const filterPillIdle =
  "rounded-full bg-[#f0f0ee] px-3.5 py-1.5 text-xs font-semibold text-[#47464b] transition hover:bg-[#e8e8e6]";

function WritingPracticeLibraryViewInner({
  task,
  catalog,
  pageTitle,
  pageDescription,
}: {
  task: WritingTaskKind;
  catalog: readonly WritingPracticeCatalogEntry[];
  pageTitle: string;
  pageDescription: string;
}) {
  const { loggedIn, supabaseConfigured } = useWritingHubAuth();
  const { openSample, loginHref, closeLoginPrompt, loginOauthNext } = useWritingSampleNav(loggedIn);
  const [subtype, setSubtype] = useState<WritingSubtype | "">("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const subtypeOptions = task === "task1" ? WRITING_TASK1_SUBTYPES : WRITING_TASK2_SUBTYPES;

  const filtered = useMemo(() => {
    return catalog.filter((entry) => {
      const mapped = mapWritingSourceType(entry.task, entry.type);
      if (subtype && mapped !== subtype) return false;
      return true;
    });
  }, [catalog, subtype]);

  const { pageItems, totalPages } = useStudyHubLibraryGrid(filtered);

  function resetPage() {
    if (!searchParams.get("trang")) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete("trang");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function selectSubtype(next: WritingSubtype | "") {
    setSubtype(next);
    resetPage();
  }

  return (
    <>
      <main className={studyHubPageContentClass}>
        <div className="mb-6">
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2rem]">
            {pageTitle}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#47464b] lg:whitespace-nowrap">
            {pageDescription}
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 border-b border-[#E4E4E7] pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/60">
              Type
            </span>
            <button
              type="button"
              onClick={() => selectSubtype("")}
              className={subtype === "" ? filterPillActive : filterPillIdle}
            >
              All types
            </button>
            {subtypeOptions.map((opt) => {
              const active = subtype === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectSubtype(opt.id)}
                  className={active ? filterPillActive : filterPillIdle}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
            Không có đề khớp bộ lọc. Chạy <code className="text-xs">npm run samples:sync:writing</code> nếu
            kho đề trống.
          </p>
        ) : (
          <>
            <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {pageItems.map((entry) => {
                const mapped = mapWritingSourceType(entry.task, entry.type);
                const typeLabel =
                  writingSubtypeLabel(mapped) === "Sample"
                    ? entry.type || "Sample"
                    : writingSubtypeLabel(mapped);
                const rightLabel =
                  entry.task === "task1"
                    ? formatWritingSourceTypeLabel(entry.type)
                    : formatWritingTopicLabel(entry.topic || "general");
                const href = writingPracticeHref(task, entry.id);
                return (
                  <a
                    key={entry.id}
                    href={href}
                    className={cardClass}
                    onClick={(event) => {
                      event.preventDefault();
                      openSample(href);
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className={labelCapsLeftClass}>{typeLabel}</p>
                      <p className={`shrink-0 ${labelCapsRightClass}`}>{rightLabel}</p>
                    </div>
                    <h2 className="mt-3 line-clamp-2 font-serif text-lg font-bold leading-snug text-[#000001] md:text-[1.2rem]">
                      {formatWritingSampleTitle(entry.title, entry.id)}
                    </h2>
                    <p className={`mt-3 line-clamp-3 flex-1 ${bodyMutedClass}`}>{entry.promptExcerpt}</p>
                    <div className="mt-5 flex items-center justify-end border-t border-[#E4E4E7] pt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#000001]">
                        Write
                        <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
            <StudyHubLibraryPagination totalPages={totalPages} ariaLabel="Phân trang kho đề luyện viết" />
          </>
        )}
      </main>
      {loginHref ? (
        <StudyLoginPrompt
          title="Đăng nhập để luyện đề"
          description="Bạn có thể duyệt danh sách đề khi chưa đăng nhập. Đăng nhập để mở đề và viết bài."
          oauthNext={loginOauthNext ?? pathname}
          supabaseConfigured={supabaseConfigured}
          onClose={closeLoginPrompt}
        />
      ) : null}
    </>
  );
}

export function WritingPracticeLibraryView(props: {
  task: WritingTaskKind;
  catalog: readonly WritingPracticeCatalogEntry[];
  pageTitle: string;
  pageDescription: string;
}) {
  return (
    <Suspense fallback={<main className={studyHubPageContentClass} />}>
      <WritingPracticeLibraryViewInner {...props} />
    </Suspense>
  );
}
