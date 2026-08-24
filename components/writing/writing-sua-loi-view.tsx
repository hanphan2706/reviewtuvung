"use client";

import { useMemo, useRef, useState } from "react";
import { Lightbulb, SkipForward } from "lucide-react";
import { studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { useWritingHubAuth } from "@/components/writing/writing-hub-auth";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import { useShuffledDeck } from "@/hooks/use-shuffled-deck";
import { WRITING_SUA_LOI_ITEMS } from "@/lib/writing/writing-sua-loi-items";
import { recordWritingProgress } from "@/lib/writing/writing-progress-client";

const cardClass = "rounded-lg border border-[#E4E4E7] bg-white shadow-sm";
const primaryBtnClass =
  "inline-flex items-center gap-2 rounded-lg bg-[#000001] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/90 disabled:opacity-50";

function normalizeSentence(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKC")
    .replace(/['’]/g, "'")
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function WritingSuaLoiView() {
  const { loggedIn } = useWritingHubAuth();
  const answerRef = useRef<HTMLSpanElement>(null);
  const deck = useShuffledDeck(WRITING_SUA_LOI_ITEMS);
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [checked, setChecked] = useState(false);
  const [matched, setMatched] = useState(false);
  const item = deck?.[index] ?? null;
  const { popover: dictionaryPopover } = useListeningFlowDictionary(answerRef, {
    enabled: Boolean(item) && checked,
    isLoggedIn: loggedIn,
  });

  const wordCount = useMemo(() => {
    const t = draft.trim();
    if (!t) return 0;
    return t.split(/\s+/).filter(Boolean).length;
  }, [draft]);

  function resetForIndex(nextIndex: number) {
    setIndex(nextIndex);
    setDraft("");
    setChecked(false);
    setMatched(false);
  }

  function checkAnswer() {
    if (!item || !draft.trim() || checked) return;
    const ok = normalizeSentence(draft) === normalizeSentence(item.sentenceCorrect);
    setMatched(ok);
    setChecked(true);
    void recordWritingProgress({
      kind: "skill",
      skill: "sua-loi",
      itemId: item.id,
      correctCount: ok ? 1 : 0,
      totalCount: 1,
    });
  }

  function goNext() {
    if (!deck?.length) return;
    resetForIndex((index + 1) % deck.length);
  }

  return (
    <main className={`${studyHubPageContentClass} max-w-3xl`}>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-[#000001] md:text-[2rem]">
        Sửa lỗi câu
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[#47464b]">
        Tìm lỗi trong câu dưới đây (ngữ pháp, từ vựng hoặc chính tả), rồi viết lại câu đúng vào ô
        sửa. Giúp bạn nhận biết các lỗi thường gặp và từ đó xử lý câu cú tốt hơn.
      </p>

      {!item ? (
        <p className="mt-8 text-sm text-[#47464b]/70">Đang tải câu luyện…</p>
      ) : (
        <section className={`mt-8 px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 ${cardClass}`}>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/60">
              Câu gốc
            </p>
            <p className="font-serif text-xl font-bold leading-relaxed text-[#000001] md:text-[1.35rem]">
              {item.sentenceWrong}
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <label htmlFor="sua-loi-draft" className="text-sm font-semibold text-[#000001]">
                Câu sửa của bạn
              </label>
              <span className="text-xs text-[#47464b]/70">{wordCount} words</span>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
              <textarea
                id="sua-loi-draft"
                value={draft}
                onChange={(event) => {
                  setDraft(event.target.value);
                  setChecked(false);
                }}
                rows={3}
                readOnly={checked}
                placeholder="Viết lại câu đúng tại đây…"
                className="min-h-[5.5rem] w-full min-w-0 flex-1 resize-y rounded-lg border border-[#E4E4E7] bg-white px-4 py-3 text-sm leading-relaxed text-[#000001] outline-none placeholder:text-[#47464b]/45 focus:border-[#4b2876]/35 focus:ring-1 focus:ring-[#4b2876]/15 read-only:bg-[#fafafa]"
              />
              <aside className="flex w-full shrink-0 flex-col rounded-lg border border-[#4b2876]/20 bg-[#f3f0f8] p-4 lg:w-[14rem]">
                <div className="mb-1.5 flex shrink-0 items-center gap-1.5 text-[#4b2876]">
                  <Lightbulb className="size-3.5" strokeWidth={1.75} aria-hidden />
                  <p className="text-xs font-bold">Tip</p>
                </div>
                <p className="flex flex-1 items-center text-xs leading-relaxed text-[#4b2876]">
                  {item.tip}
                </p>
              </aside>
            </div>
          </div>

          {checked ? (
            <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-8">
              <div className="min-w-0 flex-1 overflow-hidden break-words">
                {matched ? (
                  <p className="mb-2 text-sm font-semibold text-emerald-800">Khớp đáp án.</p>
                ) : null}
                <p className="break-words text-sm leading-relaxed text-[#47464b]">
                  <span className="font-semibold text-[#000001]">Đáp án: </span>
                  <span ref={answerRef} className="select-text">
                    {item.sentenceCorrect}
                  </span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#47464b]/70">
                  Chọn từ trong đáp án để tra nghĩa và thêm vào deck.
                </p>
                <p className="mt-3 break-words text-sm leading-relaxed text-[#47464b]">
                  <span className="font-semibold text-[#000001]">Giải thích: </span>
                  {item.explanation}
                </p>
              </div>
              <div className="flex w-full shrink-0 justify-end lg:w-[14rem]">
                <button
                  type="button"
                  className={`${primaryBtnClass} mt-2 shrink-0`}
                  onClick={goNext}
                >
                  <SkipForward className="size-4" strokeWidth={1.75} aria-hidden />
                  Câu tiếp theo
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                className={primaryBtnClass}
                onClick={checkAnswer}
                disabled={!draft.trim() || checked}
              >
                Check answers
              </button>
            </div>
          )}
        </section>
      )}
      {dictionaryPopover}
    </main>
  );
}
