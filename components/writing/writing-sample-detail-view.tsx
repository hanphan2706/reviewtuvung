"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { BookOpen, Bookmark, BookmarkCheck, ClipboardList, Printer } from "lucide-react";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useCopyFriction } from "@/hooks/use-copy-friction";
import { shouldApplyWritingCopyFriction } from "@/lib/writing/writing-copy-friction";
import { splitWritingEssayParagraphs } from "@/lib/writing/writing-sample-paragraphs";
import type { WritingSample } from "@/lib/ielts-samples/writing-sample-types";
import {
  formatWritingSampleTitle,
  mapWritingSourceType,
  writingSubtypeLabel,
} from "@/lib/ielts-samples/writing-sample-taxonomy";
import {
  fetchWritingSampleSaved,
  saveWritingSample,
  unsaveWritingSample,
} from "@/lib/writing/writing-progress-client";
import { printWritingSample } from "@/lib/writing/print-writing-sample";

const ghostBtnClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-white px-3 py-2 text-xs font-semibold text-[#000001] transition hover:border-[#000001]/25 disabled:opacity-50";
const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";
const highlightClass = "rounded-sm bg-[#ece7f2] px-0.5 font-medium text-[#4b2876]";

const STOP_WORDS = new Set(["a", "an", "the", "of", "to", "in", "on", "for", "and", "or", "as"]);

function stripPromptToPlain(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeHighlightPhrase(phrase: string): string {
  return phrase
    .replace(/[.…]+$/u, "")
    .replace(/\s+/g, " ")
    .trim();
}

function wordPattern(word: string): string {
  const escaped = escapeRegExp(word);
  if (STOP_WORDS.has(word.toLowerCase()) || word.length <= 2) return escaped;
  if (word.endsWith("y") && word.length > 3) {
    return `${escaped.slice(0, -1)}(?:y|ies|ied|ying)`;
  }
  return `${escaped}(?:s|es|ed|ing|'s)?`;
}

function phraseToFlexibleRegex(phrase: string): RegExp | null {
  const words = phrase.split(/\s+/).filter(Boolean);
  if (words.length === 0) return null;
  const body = words.map(wordPattern).join("(?:\\s+\\w+){0,3}\\s+");
  return new RegExp(body, "gi");
}

function phraseSkipOneWordVariants(phrase: string): string[] {
  const words = phrase.split(/\s+/).filter(Boolean);
  if (words.length < 3) return [];
  const variants: string[] = [];
  for (let i = 0; i < words.length; i += 1) {
    if (STOP_WORDS.has(words[i]!.toLowerCase())) continue;
    const next = words.filter((_, idx) => idx !== i).join(" ");
    if (next.split(/\s+/).length >= 2) variants.push(next);
  }
  return variants;
}

function collectMatchRanges(text: string, phrases: readonly string[]): Array<{ start: number; end: number }> {
  const ranges: Array<{ start: number; end: number }> = [];

  const tryPhrase = (phrase: string) => {
    const exact = new RegExp(escapeRegExp(phrase), "gi");
    for (const match of text.matchAll(exact)) {
      if (match.index == null) continue;
      ranges.push({ start: match.index, end: match.index + match[0].length });
    }
    const flexible = phraseToFlexibleRegex(phrase);
    if (!flexible) return;
    for (const match of text.matchAll(flexible)) {
      if (match.index == null) continue;
      ranges.push({ start: match.index, end: match.index + match[0].length });
    }
  };

  for (const raw of phrases) {
    const phrase = normalizeHighlightPhrase(raw);
    if (phrase.length < 4) continue;
    tryPhrase(phrase);
    for (const variant of phraseSkipOneWordVariants(phrase)) tryPhrase(variant);
  }

  ranges.sort((a, b) => a.start - b.start || b.end - a.end);
  const merged: Array<{ start: number; end: number }> = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (!last || range.start >= last.end) {
      merged.push({ ...range });
      continue;
    }
    if (range.end > last.end) last.end = range.end;
  }
  return merged;
}

function highlightPhrases(text: string, phrases: readonly string[]): ReactNode[] {
  const ranges = collectMatchRanges(text, phrases);
  if (ranges.length === 0) return [text];

  const nodes: ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((range, index) => {
    if (range.start > cursor) {
      nodes.push(
        <span key={`plain-${cursor}-${range.start}`}>{text.slice(cursor, range.start)}</span>,
      );
    }
    nodes.push(
      <span key={`hl-${range.start}-${range.end}-${index}`} className={highlightClass}>
        {text.slice(range.start, range.end)}
      </span>,
    );
    cursor = range.end;
  });
  if (cursor < text.length) {
    nodes.push(<span key={`plain-end-${cursor}`}>{text.slice(cursor)}</span>);
  }
  return nodes;
}

export function WritingSampleDetailView({ sample }: { sample: WritingSample }) {
  const mapped = mapWritingSourceType(sample.task, sample.type);
  const typeLabel =
    writingSubtypeLabel(mapped) === "Sample" ? sample.type || "Sample" : writingSubtypeLabel(mapped);
  const title = formatWritingSampleTitle(sample.title, sample.id);
  const promptPlain = useMemo(() => stripPromptToPlain(sample.promptHtml), [sample.promptHtml]);
  const essayParagraphs = useMemo(
    () => splitWritingEssayParagraphs(sample.modelAnswer),
    [sample.modelAnswer],
  );
  const highlightSources = sample.usefulLanguage.map((item) => item.phrase);
  const vocab = sample.usefulLanguage;
  const copyRootRef = useRef<HTMLDivElement>(null);
  useCopyFriction(copyRootRef, { shouldApply: shouldApplyWritingCopyFriction });
  const [saved, setSaved] = useState(false);
  const [saveBusy, setSaveBusy] = useState(false);
  const [printBusy, setPrintBusy] = useState(false);
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    let cancelled = false;
    void fetchWritingSampleSaved(sample.id).then((next) => {
      if (!cancelled) setSaved(next);
    });
    return () => {
      cancelled = true;
    };
  }, [sample.id]);

  async function onToggleSave() {
    if (saveBusy) return;
    setSaveBusy(true);
    setActionError("");
    const result = saved ? await unsaveWritingSample(sample.id) : await saveWritingSample(sample.id);
    setSaveBusy(false);
    if (!result.ok) {
      setActionError(
        saved
          ? "Không bỏ lưu được. Thử lại sau."
          : "Không lưu được bài. Chạy SQL writing_saved_samples trên Supabase rồi thử lại.",
      );
      return;
    }
    setSaved(!saved);
  }

  async function onPrint() {
    if (printBusy) return;
    setPrintBusy(true);
    setActionError("");
    try {
      await printWritingSample({
        title,
        taskLabel: sample.task === "task1" ? "IELTS Writing Task 1" : "IELTS Writing Task 2",
        typeLabel,
        band: sample.band,
        prompt: promptPlain,
        visualSrc: sample.visualSrc,
        modelAnswer: sample.modelAnswer,
        vocab,
        wordCount: sample.wordCount,
      });
    } catch {
      setActionError("Không mở được hộp thoại in. Cho phép popup rồi thử lại.");
    } finally {
      setPrintBusy(false);
    }
  }

  return (
    <main className={studyHubSubpageContentClass}>
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4b2876]">
              IELTS {sample.task === "task1" ? "Task 1" : "Task 2"}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#47464b]">
              {typeLabel}
            </span>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#000001] md:text-[2.15rem]">
            {title}
          </h1>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <div className="flex flex-wrap justify-end gap-2">
            <button type="button" className={ghostBtnClass} onClick={() => void onToggleSave()} disabled={saveBusy}>
              {saved ? (
                <BookmarkCheck className="size-3.5 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
              ) : (
                <Bookmark className="size-3.5" strokeWidth={1.75} aria-hidden />
              )}
              {saveBusy ? "Đang lưu…" : saved ? "Saved" : "Save Article"}
            </button>
            <button type="button" className={ghostBtnClass} onClick={() => void onPrint()} disabled={printBusy}>
              <Printer className="size-3.5" strokeWidth={1.75} aria-hidden />
              {printBusy ? "Đang mở…" : "Print"}
            </button>
          </div>
          {actionError ? <p className="max-w-[16rem] text-right text-xs text-red-600">{actionError}</p> : null}
        </div>
      </header>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,20rem)] lg:items-start">
        <div ref={copyRootRef} className="min-w-0 space-y-6">
          <section className={`p-5 md:p-6 ${cardClass}`}>
            <div className="mb-3 flex items-center gap-2">
              <ClipboardList className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/70">
                Essay Prompt
              </h2>
            </div>
            <p className="text-sm italic leading-relaxed text-[#47464b]">{promptPlain}</p>
            {sample.visualSrc ? (
              <Image
                src={sample.visualSrc}
                alt={`Visual for ${title}`}
                width={1200}
                height={900}
                className="mt-5 h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 720px"
                unoptimized
              />
            ) : null}
          </section>

          <section>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#142238]">
              {essayParagraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 32)}`}>
                  {highlightPhrases(paragraph, highlightSources)}
                </p>
              ))}
            </div>
            {sample.wordCount ? (
              <p className="mt-4 text-xs font-medium text-[#47464b]/70">{sample.wordCount} words</p>
            ) : null}
          </section>
        </div>

        {vocab.length > 0 ? (
          <aside className="lg:sticky lg:top-20">
            <section className={`p-5 ${cardClass}`}>
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
                <h2 className="font-serif text-lg font-bold text-[#000001]">Key Vocabulary</h2>
              </div>
              <ul className="space-y-3">
                {vocab.map((item) => (
                  <li key={item.phrase} className="flex gap-2.5 text-sm leading-snug">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full border border-[#4b2876]"
                      aria-hidden
                    />
                    <span>
                      <strong className="font-semibold text-[#000001]">{item.phrase}</strong>
                      {item.glossVi ? (
                        <span className="text-[#47464b]"> — {item.glossVi}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
