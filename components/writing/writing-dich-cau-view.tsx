"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { BookOpen, CheckCircle2, Lightbulb, SkipForward } from "lucide-react";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import { useShuffledDeck } from "@/hooks/use-shuffled-deck";
import {
  WRITING_DICH_CAU_ILLUSTRATION,
  WRITING_DICH_CAU_ITEMS,
} from "@/lib/writing/writing-dich-cau-items";
import { diffSampleAgainstTranslation, type TranslationDiffToken } from "@/lib/writing/diff-translation";
import { recordWritingProgress } from "@/lib/writing/writing-progress-client";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";
const secondaryBtnClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#E4E4E7] bg-white px-4 py-2.5 text-sm font-semibold text-[#000001] transition hover:border-[#000001]/25 hover:bg-[#fafafa] disabled:opacity-50";
const primaryBtnClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#000001] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/90 disabled:opacity-50";

function normalizeTranslation(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKC")
    .replace(/['’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type CheckResult = {
  matched: boolean;
  sampleDiff: TranslationDiffToken[];
};

export function WritingDichCauView() {
  const { loggedIn } = useWritingHubAuth();
  const sampleAnswerRef = useRef<HTMLParagraphElement>(null);
  const deck = useShuffledDeck(WRITING_DICH_CAU_ITEMS);
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const item = deck?.[index] ?? null;
  const total = deck?.length ?? 0;
  const { popover: dictionaryPopover } = useListeningFlowDictionary(sampleAnswerRef, {
    enabled: Boolean(result),
    isLoggedIn: loggedIn,
    allowAddAnySelection: true,
  });

  const wordCount = useMemo(() => {
    const t = draft.trim();
    if (!t) return 0;
    return t.split(/\s+/).filter(Boolean).length;
  }, [draft]);

  function goNext() {
    if (!total) return;
    setDraft("");
    setResult(null);
    setIndex((current) => (current + 1) % total);
  }

  function checkAnswer() {
    if (!item || !draft.trim() || result) return;
    const matched = normalizeTranslation(draft) === normalizeTranslation(item.answerEn);
    setResult({
      matched,
      sampleDiff: diffSampleAgainstTranslation(item.answerEn, draft),
    });
    void recordWritingProgress({
      kind: "skill",
      skill: "dich-cau",
      itemId: item.id,
      correctCount: matched ? 1 : 0,
      totalCount: 1,
    });
  }

  return (
    <main className={studyHubPageContentClass}>
      <h1 className="font-serif text-2xl font-bold tracking-tight text-[#000001] md:text-[1.85rem]">
        Dịch câu
      </h1>

      {!item ? (
        <p className="mt-6 text-sm text-[#47464b]/70">Đang tải câu luyện…</p>
      ) : (
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,17rem)] lg:items-start lg:gap-8">
        <div className="min-w-0 space-y-5">
          <section>
            <div className="mb-2 flex items-center gap-2 text-[#4b2876]">
              <BookOpen className="size-4" strokeWidth={1.75} aria-hidden />
              <h2 className="text-sm font-bold">Nguyên văn (Tiếng Việt)</h2>
            </div>
            <div className={`p-4 md:p-5 ${cardClass}`}>
              <p className="text-sm italic leading-relaxed text-[#47464b]">&ldquo;{item.sourceVi}&rdquo;</p>
            </div>
          </section>

          <section>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <label htmlFor="writing-translation" className="text-sm font-semibold text-[#000001]">
                Your Translation
              </label>
              <span className="text-xs text-[#47464b]/70">{wordCount} words</span>
            </div>
            <textarea
              id="writing-translation"
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                setResult(null);
              }}
              rows={8}
              placeholder="Type your English translation here…"
              className="w-full resize-y rounded-lg border border-[#E4E4E7] bg-white px-4 py-3 text-sm leading-relaxed text-[#000001] outline-none placeholder:text-[#47464b]/45 focus:border-[#4b2876]/35 focus:ring-1 focus:ring-[#4b2876]/15"
            />
          </section>

          <div
            className={`rounded-lg border p-4 ${
              result?.matched
                ? "border-emerald-200 bg-emerald-50/80"
                : "border-[#E4E4E7] bg-[#fafafa]"
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb className="size-4 text-[#4b2876]" strokeWidth={1.75} aria-hidden />
              <h3 className="text-sm font-bold text-[#000001]">{result ? "Sample" : "Tip"}</h3>
            </div>
            {result?.matched ? (
              <p className="mb-2 text-sm font-semibold text-emerald-800">Khớp đáp án sample.</p>
            ) : null}
            {result ? (
              <p className="mb-2 text-xs leading-relaxed text-[#47464b]/70">
                {result.matched
                  ? "Chọn từ trong sample để tra nghĩa và thêm vào deck."
                  : "Phần tô là chỗ chưa khớp với bản dịch của bạn. Chọn từ trong sample để tra nghĩa và thêm vào deck."}
              </p>
            ) : null}
            {result ? (
              <p
                ref={sampleAnswerRef}
                className="select-text text-sm leading-relaxed text-[#47464b]"
              >
                {result.sampleDiff.map((token, tokenIndex) => (
                  <span key={`${token.text}-${tokenIndex}`}>
                    {tokenIndex > 0 ? " " : null}
                    {token.kind === "mismatch" ? (
                      <mark className="rounded-[3px] bg-amber-200/90 px-0.5 text-[#000001]">{token.text}</mark>
                    ) : (
                      token.text
                    )}
                  </span>
                ))}
              </p>
            ) : (
              <p className="font-mono text-xs leading-relaxed text-[#47464b]">{item.lexicalTipCloze}</p>
            )}
          </div>
        </div>

        <aside>
          <div className="mb-2 hidden items-center gap-2 lg:flex" aria-hidden>
            <BookOpen className="size-4 shrink-0 opacity-0" strokeWidth={1.75} />
            <span className="text-sm font-bold opacity-0">Nguyên văn (Tiếng Việt)</span>
          </div>
          <div className="space-y-3">
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg border border-[#E4E4E7] bg-[#f3f0f8] lg:block">
              <Image
                src={WRITING_DICH_CAU_ILLUSTRATION}
                alt=""
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <button type="button" className={secondaryBtnClass} onClick={goNext}>
              <SkipForward className="size-4" strokeWidth={1.75} aria-hidden />
              Skip
            </button>
            <button
              type="button"
              className={primaryBtnClass}
              onClick={checkAnswer}
              disabled={!draft.trim() || Boolean(result)}
            >
              <CheckCircle2 className="size-4" strokeWidth={1.75} aria-hidden />
              Check answers
            </button>
          </div>
        </aside>
      </div>
      )}
      {dictionaryPopover}
    </main>
  );
}
