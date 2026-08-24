"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, ClipboardList, Lightbulb } from "lucide-react";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import type { WritingPracticePrompt } from "@/lib/ielts-samples/writing-sample-types";
import { stripWritingPromptHtml } from "@/lib/ielts-samples/writing-sample-types";
import {
  formatWritingSampleTitle,
  mapWritingSourceType,
  writingSubtypeLabel,
} from "@/lib/ielts-samples/writing-sample-taxonomy";
import { recordWritingProgress } from "@/lib/writing/writing-progress-client";
import { writingHistoryItemHref } from "@/lib/writing/writing-hub-nav";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";

type EssayPanelMode = "essay" | "tips";

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function PracticeHeader({
  taskLabel,
  typeLabel,
  title,
}: {
  taskLabel: string;
  typeLabel: string;
  title: string;
}) {
  return (
    <header className="min-w-0 shrink-0">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4b2876]">{taskLabel}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#47464b]">{typeLabel}</span>
      </div>
      <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#000001] md:text-[1.85rem]">
        {title}
      </h1>
    </header>
  );
}

function WritingTipsBody() {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg font-bold text-[#000001]">Gợi ý cách viết</h3>
      <p className="text-sm leading-relaxed text-[#47464b]">
        Phần gợi ý cấu trúc và ngôn ngữ sẽ bổ sung sau. Hiện tại bạn có thể tập trung viết theo đề.
      </p>
      <p className="text-sm leading-relaxed text-[#47464b]/80">
        Chọn Your essay hoặc Xem gợi ý lần nữa để quay lại khung viết.
      </p>
    </div>
  );
}

function EssayWorkspaceHeader({
  mode,
  tipsDisabled,
  onShowEssay,
  onShowTips,
}: {
  mode: EssayPanelMode;
  tipsDisabled?: boolean;
  onShowEssay: () => void;
  onShowTips: () => void;
}) {
  const tipsOpen = mode === "tips";

  const tabClass =
    "inline-flex h-7 items-center gap-2 rounded-md px-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition";

  return (
    <div className="flex h-11 shrink-0 items-center justify-between gap-3 border-b border-[#E4E4E7] px-5">
      <button
        type="button"
        onClick={onShowEssay}
        className={`${tabClass} ${
          mode === "essay" ? "text-[#000001]" : "text-[#47464b]/70 hover:text-[#000001]"
        }`}
        aria-pressed={mode === "essay"}
      >
        <BookOpen className="size-4 shrink-0 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
        Your essay
      </button>
      <button
        type="button"
        onClick={() => {
          if (tipsDisabled) return;
          if (tipsOpen) onShowEssay();
          else onShowTips();
        }}
        disabled={tipsDisabled}
        className={`${tabClass} disabled:cursor-not-allowed disabled:opacity-35 ${
          tipsOpen
            ? "bg-[#f3f0f8] text-[#4b2876]"
            : "text-[#47464b]/70 hover:bg-[#f3f0f8] hover:text-[#4b2876]"
        }`}
        aria-pressed={tipsOpen}
        title={tipsDisabled ? "Đã nộp bài — không xem gợi ý" : "Xem gợi ý cách viết"}
      >
        <Lightbulb className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
        Xem gợi ý
      </button>
    </div>
  );
}

function EssayWorkspaceBody({
  mode,
  draft,
  onDraftChange,
  wordCount,
  minWords,
  fillHeight,
  onSubmit,
  submitLabel,
  submitDisabled,
  submitError,
  submittedHref,
}: {
  mode: EssayPanelMode;
  draft: string;
  onDraftChange: (value: string) => void;
  wordCount: number;
  minWords: number;
  fillHeight?: boolean;
  onSubmit: () => void;
  submitLabel: string;
  submitDisabled?: boolean;
  submitError?: string | null;
  submittedHref?: string | null;
}) {
  if (mode === "tips") {
    return (
      <div className={`min-h-0 overflow-y-auto px-5 py-5 ${fillHeight ? "flex-1" : "min-h-72"}`}>
        <WritingTipsBody />
      </div>
    );
  }

  return (
    <>
      <textarea
        value={draft}
        onChange={(event) => onDraftChange(event.target.value)}
        rows={fillHeight ? undefined : 14}
        placeholder="Viết bài của bạn tại đây…"
        className={
          fillHeight
            ? "min-h-0 w-full flex-1 resize-none overflow-y-auto border-0 bg-white px-5 py-4 text-[15px] leading-relaxed text-[#142238] outline-none placeholder:text-[#47464b]/45"
            : "min-h-72 w-full resize-y border-0 bg-white px-5 py-4 text-[15px] leading-relaxed text-[#142238] outline-none placeholder:text-[#47464b]/45"
        }
      />
      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#E4E4E7] px-5 py-3">
        <div className="min-w-0">
          <p className="text-xs font-medium tabular-nums text-[#47464b]/70">
            {wordCount} / {minWords} words
          </p>
          {submitError ? <p className="mt-1 text-xs text-red-600">{submitError}</p> : null}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {submittedHref ? (
            <Link
              href={submittedHref}
              className="text-xs font-semibold text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2"
            >
              Xem bài đã nộp
            </Link>
          ) : null}
          <button
            type="button"
            onClick={onSubmit}
            disabled={submitDisabled}
            className="rounded-md bg-[#000001] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:bg-[#000001]/35 disabled:opacity-100"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </>
  );
}

export function WritingPracticeDetailView({ prompt }: { prompt: WritingPracticePrompt }) {
  const mapped = mapWritingSourceType(prompt.task, prompt.type);
  const typeLabel =
    writingSubtypeLabel(mapped) === "Sample" ? prompt.type || "Sample" : writingSubtypeLabel(mapped);
  const title = formatWritingSampleTitle(prompt.title, prompt.id);
  const promptPlain = useMemo(() => stripWritingPromptHtml(prompt.promptHtml), [prompt.promptHtml]);
  const [draft, setDraft] = useState("");
  const [mode, setMode] = useState<EssayPanelMode>("essay");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedHref, setSubmittedHref] = useState<string | null>(null);
  const wordCount = countWords(draft);
  const minWords = prompt.task === "task1" ? 150 : 250;
  const isTask1 = prompt.task === "task1";
  const submitLabel = submitting ? "Đang nộp…" : submitted ? "Đã nộp" : "Submit";

  async function handleSubmit() {
    if (wordCount < minWords || submitted || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    setMode("essay");
    const result = await recordWritingProgress({
      kind: "essay",
      promptId: prompt.id,
      task: prompt.task,
      wordCount,
      body: draft,
      title,
      promptText: promptPlain,
    });
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError("Không lưu được bài. Thử nộp lại.");
      return;
    }
    setSubmitted(true);
    if (result.submissionId) {
      setSubmittedHref(writingHistoryItemHref(result.submissionId));
    }
  }

  function showTips() {
    if (submitted) return;
    setMode("tips");
  }

  function showEssay() {
    setMode("essay");
  }

  const workspaceHeader = (
    <EssayWorkspaceHeader
      mode={mode}
      tipsDisabled={submitted}
      onShowEssay={showEssay}
      onShowTips={showTips}
    />
  );

  function essayWorkspace(fillHeight?: boolean) {
    return (
      <EssayWorkspaceBody
        mode={mode}
        draft={draft}
        onDraftChange={(value) => {
          setDraft(value);
          setSubmitted(false);
          setSubmittedHref(null);
          setSubmitError(null);
        }}
        wordCount={wordCount}
        minWords={minWords}
        fillHeight={fillHeight}
        onSubmit={() => {
          void handleSubmit();
        }}
        submitLabel={submitLabel}
        submitDisabled={wordCount < minWords || submitted || submitting}
        submitError={submitError}
        submittedHref={submittedHref}
      />
    );
  }

  if (isTask1) {
    return (
      <main className="flex flex-col px-4 pt-6 pb-10 md:px-6 md:pt-8 md:pb-12 lg:min-h-[calc(100dvh-4rem)]">
        <PracticeHeader taskLabel="IELTS Task 1" typeLabel={typeLabel} title={title} />

        {/* Desktop: 50/50; min-height để cửa sổ thấp vẫn cuộn trang được */}
        <div
          className="mt-4 hidden min-h-[32rem] w-full flex-1 overflow-hidden rounded-lg border border-[#E4E4E7] bg-white lg:grid"
          style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}
        >
          <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-r border-[#E4E4E7] bg-[#fafafa]">
            <div className="flex h-11 shrink-0 items-center gap-2 border-b border-[#E4E4E7] bg-white px-5">
              <ClipboardList className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
                Essay Prompt
              </h2>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-5 py-4">
              <p className="text-sm italic leading-relaxed text-[#47464b]">{promptPlain}</p>
              {prompt.visualSrc ? (
                <div className="mt-5 w-full max-w-full overflow-hidden">
                  <Image
                    src={prompt.visualSrc}
                    alt={`Visual for ${title}`}
                    width={1200}
                    height={900}
                    className="h-auto w-full object-contain"
                    sizes="50vw"
                    unoptimized
                  />
                </div>
              ) : null}
            </div>
          </section>

          <section className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-white">
            {workspaceHeader}
            {essayWorkspace(true)}
          </section>
        </div>

        <div className="mt-6 space-y-6 lg:hidden">
          <section className={`p-5 ${cardClass}`}>
            <div className="mb-3 flex items-center gap-2">
              <ClipboardList className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
                Essay Prompt
              </h2>
            </div>
            <p className="text-sm italic leading-relaxed text-[#47464b]">{promptPlain}</p>
            {prompt.visualSrc ? (
              <Image
                src={prompt.visualSrc}
                alt={`Visual for ${title}`}
                width={1200}
                height={900}
                className="mt-5 h-auto max-w-full object-contain"
                sizes="100vw"
                unoptimized
              />
            ) : null}
          </section>
          <section className={`overflow-hidden ${cardClass}`}>
            {workspaceHeader}
            {essayWorkspace()}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={studyHubSubpageContentClass}>
      <PracticeHeader taskLabel="IELTS Task 2" typeLabel={typeLabel} title={title} />

      <div className="mt-6 space-y-6">
        <section className={`p-5 md:p-6 ${cardClass}`}>
          <div className="mb-3 flex items-center gap-2">
            <ClipboardList className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
              Essay Prompt
            </h2>
          </div>
          <p className="text-sm italic leading-relaxed text-[#47464b]">{promptPlain}</p>
        </section>

        <section className={`flex flex-col overflow-hidden ${cardClass}`}>
          {workspaceHeader}
          {essayWorkspace()}
        </section>
      </div>
    </main>
  );
}
