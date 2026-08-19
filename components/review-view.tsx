"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ActiveLearningDraftSection } from "@/components/active-learning-draft-section";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { WordRichDisplay } from "@/components/word-rich-display";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { Rating, Word } from "@/lib/types";
import { resolveWordIpa } from "@/lib/vocabulary/ipa/vocabulary-ipa-lookup";
import { useSrsStore } from "@/store/srs-store";
import { pickRandomPhraseEmoji } from "@/lib/phrase-emojis";

type ReviewViewProps = { allDecks?: false; deckId: string } | { allDecks: true };

/** Khoảng cách tiêu đề ↔ thẻ = thẻ ↔ dòng “Nhấn thẻ…” (cùng token). */
const REVIEW_SECTION_GAP = "gap-4";

/** Lời kết ngẫu nhiên khi hết phiên ôn (flashcard hoặc active learning). */
const REVIEW_CLOSING_LINES = [
  "Ôn tập ngắn nhưng đều đặn mỗi ngày là chìa khoá để củng cố kiến thức và trí nhớ.",
  "Bạn có thấy các từ hôm nay càng ngày càng dễ nhớ và sử dụng hơn không?",
  "Mỗi ngày chỉ cần một bước nhỏ như vậy là được!",
  "Những từ hôm qua bạn quên, hôm nay bạn đã nhớ tốt hơn chưa?",
] as const;

/** Cùng khoảng trên với màn từ vựng (pt-10); dưới giữ safe area cho vùng nút chấm điểm. */
const REVIEW_SHELL_EDGE_Y =
  "pt-[max(2.5rem,env(safe-area-inset-top,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px)+0.25rem)] sm:pb-4";

/** Tablet dọc từ iPad Air (~1180) trở lên; min-width tránh phone cao hẹp. */
const TT_TABLET_MQ = "(min-height: 1000px) and (min-width: 700px)";

function subscribeTtTablet(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(TT_TABLET_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getTtTabletMatch() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(TT_TABLET_MQ).matches;
}

function useTtTabletLayout() {
  return useSyncExternalStore(subscribeTtTablet, getTtTabletMatch, () => false);
}

export function ReviewView(props: ReviewViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const flashcardOnly = searchParams.get("mode") === "flashcard";
  const allDecks = props.allDecks === true;
  const deckId = !allDecks ? props.deckId : undefined;

  const decks = useSrsStore((s) => s.decks);
  const words = useSrsStore((s) => s.words);
  const closeDeck = useSrsStore((s) => s.closeDeck);
  const openDeck = useSrsStore((s) => s.openDeck);
  const startOrRefreshSession = useSrsStore((s) => s.startOrRefreshSession);
  const rateCurrent = useSrsStore((s) => s.rateCurrent);
  const getCurrentWord = useSrsStore((s) => s.getCurrentWord);
  const getSessionProgress = useSrsStore((s) => s.getSessionProgress);
  const sessionQueueIds = useSrsStore((s) => s.sessionQueueIds);
  const sessionIndex = useSrsStore((s) => s.sessionIndex);

  const [cardExiting, setCardExiting] = useState(false);
  const [alActive, setAlActive] = useState(false);
  const [alComplete, setAlComplete] = useState(false);
  const [alQueueSnapshot, setAlQueueSnapshot] = useState<string[]>([]);
  /** `pick` = vừa vào review, chọn Flashcard hoặc Active learning (không gộp hai luồng). */
  const [reviewMode, setReviewMode] = useState<"pick" | "flashcard" | "al">("pick");
  const isTtTablet = useTtTabletLayout();
  const [closingPick, setClosingPick] = useState<{ line: number; tailEmoji: string } | null>(null);

  const activeDeck = deckId ? (decks.find((d) => d.id === deckId) ?? null) : null;
  const current = getCurrentWord();
  const progress = getSessionProgress();
  const sessionActive = sessionQueueIds.length > 0;
  const sessionDone = sessionActive && sessionIndex >= sessionQueueIds.length;
  const atCard = sessionActive && !sessionDone && current;

  const noCardsToReview = sessionQueueIds.length === 0 && !sessionDone;
  const completedSessionWithCards = sessionDone && sessionQueueIds.length > 0;

  useEffect(() => {
    queueMicrotask(() => {
      setAlActive(false);
      setAlComplete(false);
      setAlQueueSnapshot([]);
      setReviewMode(flashcardOnly ? "flashcard" : "pick");
    });

    if (allDecks) {
      if (decks.length === 0) {
        router.replace("/tu-hoc/tu-vung");
        return;
      }
      closeDeck();
      startOrRefreshSession({ allDecks: true });
      return;
    }
    if (!deckId || !decks.some((d) => d.id === deckId)) {
      router.replace("/tu-hoc/tu-vung");
      return;
    }
    openDeck(deckId);
    startOrRefreshSession();
  }, [allDecks, deckId, decks, closeDeck, flashcardOnly, openDeck, router, startOrRefreshSession]);

  if (!allDecks && !activeDeck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-ink-muted">
        Đang tải…
      </div>
    );
  }

  const handleRate = (rating: Rating) => {
    if (cardExiting) return;
    setCardExiting(true);
    window.setTimeout(() => {
      rateCurrent(rating);
      setCardExiting(false);
    }, 220);
  };

  const backHref = allDecks ? "/tu-hoc/tu-vung" : `/deck/${deckId}`;
  const backLabel = allDecks ? "Tất cả decks" : (activeDeck?.name ?? "Bộ thẻ");

  const startActiveLearningFromPick = () => {
    setAlQueueSnapshot([...sessionQueueIds]);
    setAlActive(true);
    setAlComplete(false);
    setReviewMode("al");
  };

  const finishActiveLearning = () => {
    setAlActive(false);
    setAlComplete(true);
  };

  const showAlFlow = alActive && alQueueSnapshot.length > 0;
  const showAlDone = alComplete && !alActive;
  const showEmptyQueueScreen = noCardsToReview;
  const showModePicker =
    !flashcardOnly &&
    !showEmptyQueueScreen &&
    reviewMode === "pick" &&
    sessionQueueIds.length > 0 &&
    !sessionDone;
  const showFlashcardSession =
    reviewMode === "flashcard" && sessionActive && !sessionDone && atCard && current;
  const showFlashcardComplete =
    completedSessionWithCards && reviewMode === "flashcard" && !alActive && !alComplete;
  /** Cùng lời chúc cho kết thúc phiên flashcard hoặc active learning. */
  const showCongratsComplete = showFlashcardComplete || showAlDone;

  useEffect(() => {
    if (showCongratsComplete) {
      setClosingPick((prev) =>
        prev ?? {
          line: Math.floor(Math.random() * REVIEW_CLOSING_LINES.length),
          tailEmoji: pickRandomPhraseEmoji(),
        },
      );
    } else {
      setClosingPick(null);
    }
  }, [showCongratsComplete]);

  return (
    <div
      className={`flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-[#f5f5f7] px-5 ${REVIEW_SHELL_EDGE_Y}`}
    >
      <div
        className={`mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col ${isTtTablet ? "max-w-xl" : ""}`}
      >
        <header className="w-full shrink-0">
          <SignedInTopBar
            left={
              <Link
                href={backHref}
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                {backLabel}
              </Link>
            }
          />
        </header>

        {showEmptyQueueScreen ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-start overflow-y-auto px-3 py-8">
            <div className="w-full max-w-md text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
              <p>Hiện không có thẻ đến hạn trong phiên này.</p>
              <p className="mt-6">
                <Link
                  href={backHref}
                  className="inline-flex rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm"
                >
                  Về từ vựng
                </Link>
              </p>
            </div>
          </div>
        ) : showAlFlow ? (
          <ActiveLearningFlow
            key={alQueueSnapshot.join(",")}
            queueIds={alQueueSnapshot}
            words={words}
            isTtTablet={isTtTablet}
            allDecks={allDecks}
            onFinish={finishActiveLearning}
          />
        ) : showCongratsComplete ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-3 py-8">
            <div className="flex w-full max-w-md flex-col items-center gap-4 text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
              <p className="max-w-prose text-pretty">
                {REVIEW_CLOSING_LINES[closingPick?.line ?? 0]}
                {closingPick ? (
                  <>
                    {" "}
                    <span aria-hidden>{closingPick.tailEmoji}</span>
                  </>
                ) : null}
              </p>
              <Link
                href={backHref}
                className="box-border inline-flex h-10 w-auto max-w-full shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-[#4b2876] px-3.5 text-center text-xs font-semibold leading-none text-white shadow-sm @max-[320px]:text-[10px] @min-[400px]:h-auto @min-[400px]:px-3.5 @min-[400px]:py-2 @min-[400px]:leading-normal @min-[640px]:px-4 @min-[640px]:text-sm"
              >
                Về từ vựng
              </Link>
            </div>
          </div>
        ) : showModePicker ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-start overflow-y-auto px-3 py-8">
            <div className="w-full max-w-md space-y-6 text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
              <p className="text-base font-semibold sm:text-lg">Chọn cách ôn</p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  onClick={() => setReviewMode("flashcard")}
                  className="min-w-0 flex-1 rounded-xl bg-[#4b2876] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
                >
                  Flashcard
                </button>
                <button
                  type="button"
                  onClick={startActiveLearningFromPick}
                  className="min-w-0 flex-1 rounded-xl border border-zinc-200/90 bg-white px-4 py-3.5 text-sm font-semibold text-ink shadow-sm ring-1 ring-zinc-950/5 transition active:scale-[0.99]"
                >
                  Active learning
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-2 shrink-0 sm:mt-3">
              {allDecks ? (
                <p className="text-center text-sm font-medium text-[#4b2876]">Tất cả decks</p>
              ) : null}
              <p
                className={`text-center text-xs text-ink-muted sm:text-sm ${allDecks ? "mt-1" : "mt-0.5"}`}
              >
                {showFlashcardSession && atCard ? `Thẻ ${progress.current} / ${progress.total}` : "…"}
              </p>
            </div>

            {showFlashcardSession && current ? (
              <FlashcardReviewBlock
                key={current.id}
                word={current}
                isTtTablet={isTtTablet}
                cardExiting={cardExiting}
                onRate={handleRate}
              />
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

type FlashcardReviewBlockProps = {
  word: Word;
  isTtTablet: boolean;
  cardExiting: boolean;
  onRate: (rating: Rating) => void;
};

function FlashcardReviewBlock({ word, isTtTablet, cardExiting, onRate }: FlashcardReviewBlockProps) {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col overflow-hidden ${cardExiting ? "pointer-events-none" : ""}`}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-py-4">
        <div
          className={`mx-auto flex min-h-full w-full max-w-md flex-1 flex-col py-3 sm:py-5 ${REVIEW_SECTION_GAP} ${isTtTablet ? "max-w-xl min-h-0 justify-start py-4" : "justify-center"} ${cardExiting ? "translate-y-1 scale-[0.98] opacity-0 transition-all duration-220 ease-out" : "animate-review-card-in opacity-100"}`}
        >
          {isTtTablet ? (
            <div aria-hidden className="min-h-0 min-w-0 w-full flex-1 basis-0" />
          ) : null}
          <div className="w-full shrink-0">
            <FlipCard word={word} disabled={cardExiting} tabletLayout={isTtTablet} />
          </div>
          {isTtTablet ? (
            <div aria-hidden className="min-h-0 min-w-0 w-full flex-1 basis-0" />
          ) : null}
          <div className={`w-full shrink-0 pt-1 ${cardExiting ? "pointer-events-none" : ""}`}>
            <p
              className={`mb-2 text-center text-xs font-medium text-ink-muted sm:mb-2.5 sm:text-sm ${isTtTablet ? "mb-4 text-lg" : ""}`}
            >
              Bạn nhớ từ này đến mức nào?
            </p>
            <div className={`grid w-full grid-cols-3 gap-2 sm:gap-3 ${isTtTablet ? "gap-5" : ""}`}>
              <ReviewRatingButton
                title="Khó"
                subtitle="Ôn lại ngày mai"
                onPick={() => onRate("hard")}
                disabled={cardExiting}
                tabletLayout={isTtTablet}
                titleClassName="text-red-600"
                borderClassName="border-red-500"
              />
              <ReviewRatingButton
                title="OK"
                subtitle="Vài ngày tới"
                onPick={() => onRate("ok")}
                disabled={cardExiting}
                tabletLayout={isTtTablet}
                titleClassName="text-orange-600"
                borderClassName="border-orange-500"
              />
              <ReviewRatingButton
                title="Dễ"
                subtitle="Khoảng một tuần"
                onPick={() => onRate("easy")}
                disabled={cardExiting}
                tabletLayout={isTtTablet}
                titleClassName="text-emerald-700"
                borderClassName="border-emerald-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ActiveLearningFlowProps = {
  queueIds: string[];
  words: Word[];
  isTtTablet: boolean;
  allDecks: boolean;
  onFinish: () => void;
};

const AL_AI_HINT =
  "Gợi ý AI sẽ hiện ở đây sau khi tích hợp API. Hiện tại bạn có thể tự đánh giá bên dưới.";

type AlTurn = { userText: string; aiText: string };

const AL_TASK_PROMPTS = [
  "Đưa một ví dụ cá nhân liên quan đến từ này.",
  "So sánh từ này với một từ khác cùng/gần nghĩa.",
  "Giải thích từ này bằng ngôn ngữ của riêng bạn.",
  "Từ này hay đi chung với các từ nào (collocation)?",
  "Bạn đã từng gặp và dùng từ này trong thực tế chưa? Như thế nào?",
] as const;

function ActiveLearningFlow({ queueIds, words, isTtTablet, allDecks, onFinish }: ActiveLearningFlowProps) {
  const recordActiveLearningHard = useSrsStore((s) => s.recordActiveLearningHard);

  const list = queueIds
    .map((id) => words.find((w) => w.id === id))
    .filter((w): w is Word => Boolean(w));

  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  /** Sau “Gửi và xem gợi ý”: hiện gợi ý + tự đánh giá cho lượt gửi cuối. */
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  /** Sau lần đầu “Chưa ổn” (đã quay lại gửi): nút phải đổi thành «Ghi nhận chưa nhớ». */
  const [alSecondTry, setAlSecondTry] = useState(false);
  /** Mỗi lần gửi: thêm { tin nhắn người dùng + đoạn gợi ý }; giữ lại các lượt trước khi gửi lại sau «Chưa ổn». */
  const [turns, setTurns] = useState<AlTurn[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const word = list[index];
  const total = list.length;
  const taskLeadEmoji = useMemo(() => pickRandomPhraseEmoji(), [word?.id]);
  const taskPrompt = AL_TASK_PROMPTS[index % AL_TASK_PROMPTS.length];

  useEffect(() => {
    queueMicrotask(() => {
      setAlSecondTry(false);
      setTurns([]);
      setFeedbackOpen(false);
    });
  }, [word?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [feedbackOpen, turns.length, word?.id, alSecondTry]);

  if (!word || total === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-3 py-8 text-center text-sm text-ink-muted">
        <p>Không tìm thấy thẻ để ôn active learning.</p>
      </div>
    );
  }

  const submitInput = () => {
    const t = draft.trim();
    setTurns((prev) => [...prev, { userText: t, aiText: AL_AI_HINT }]);
    setDraft("");
    setFeedbackOpen(true);
  };

  const advanceAfterReflect = () => {
    if (index >= total - 1) {
      setTurns([]);
      setFeedbackOpen(false);
      onFinish();
      return;
    }
    setFeedbackOpen(false);
    setDraft("");
    setAlSecondTry(false);
    setTurns([]);
    setIndex((i) => i + 1);
  };

  const finishWithHardTally = () => {
    recordActiveLearningHard();
    advanceAfterReflect();
  };

  /** «Chưa ổn»: đóng tự đánh giá, giữ các lượt đã gửi + gợi ý; cho phép gửi thêm lượt mới. */
  const onChuaOnFirstRound = () => {
    setFeedbackOpen(false);
    setAlSecondTry(true);
  };

  const ipa = resolveWordIpa(htmlToPlainTrim(word.term) || word.term, word.ipa);

  /** Giống ChatGPT (light): chỉ khoảng trống + bo góc, không kẻ ngăn giữa các khối. */
  const chatSurface = "bg-[#f5f5f7]";

  const userBubbleRight =
    "max-w-[min(85%,24rem)] rounded-[1.35rem] bg-[#4b2876] px-3.5 py-2.5 text-[15px] leading-relaxed text-white";

  /** Xám nhạt kiểu bubble phụ (ChatGPT light), không viền. */
  const reflectBubbleRight =
    "max-w-[min(85%,24rem)] rounded-[1.35rem] bg-zinc-200/80 px-3 py-2.5";

  return (
    <div className={`flex min-h-0 flex-1 flex-col overflow-hidden ${chatSurface}`}>
      <div className={`shrink-0 px-4 py-3 sm:py-3.5 ${chatSurface}`}>
        {allDecks ? <p className="text-center text-sm font-medium text-[#4b2876]">Tất cả decks</p> : null}
        <p className={`text-center text-xs text-ink-muted sm:text-sm ${isTtTablet ? "text-base" : ""}`}>
          Thẻ {index + 1} / {total}
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden scroll-py-4">
        <div
          className={`mx-auto flex w-full max-w-md flex-col gap-10 px-3 py-6 sm:px-4 ${isTtTablet ? "max-w-xl gap-12" : ""}`}
        >
          <div className="w-full max-w-[min(100%,42rem)]">
            <div
              key={word.id}
              className="text-[15px] font-bold leading-relaxed text-ink [&_*]:text-inherit [&_b]:font-bold [&_strong]:font-bold"
            >
              <WordRichDisplay html={word.term} className="inline-block max-w-full" />
            </div>
            {ipa ? (
              <p className="mt-1 font-ipa text-sm leading-none text-ink-muted">{ipa}</p>
            ) : null}
            <div className="mt-3 text-[15px] leading-relaxed text-[#142238]">
              <p className="font-medium text-ink">
                <span className="select-none" aria-hidden>
                  {taskLeadEmoji}
                </span>{" "}
                {taskPrompt}
              </p>
            </div>
          </div>

          {turns.map((turn, turnIdx) => (
            <div key={`${word.id}-${turnIdx}`} className="flex flex-col gap-8">
              <div className="flex justify-end">
                <div className={userBubbleRight}>{turn.userText}</div>
              </div>
              <div className="w-full max-w-[min(100%,42rem)]">
                <p className="text-[15px] leading-relaxed text-ink">{turn.aiText}</p>
              </div>
            </div>
          ))}

          {feedbackOpen ? (
            <div className="flex justify-end">
              <div className={reflectBubbleRight}>
                <p className="mb-2 text-xs font-medium text-ink/75">Tự đánh giá</p>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-2">
                  <button
                    type="button"
                    onClick={advanceAfterReflect}
                    className="rounded-xl bg-white px-2.5 py-1.5 text-left text-[13px] leading-snug text-[#4b2876] transition hover:bg-violet-50/90 active:scale-[0.99]"
                  >
                    <span aria-hidden>⚡️</span> <span>Ổn, đúng hướng</span>
                  </button>
                  {alSecondTry ? (
                    <button
                      type="button"
                      onClick={finishWithHardTally}
                      className="rounded-xl bg-white px-2.5 py-1.5 text-left text-[13px] leading-snug text-ink transition hover:bg-white/90 active:scale-[0.99]"
                    >
                      <span aria-hidden>😣</span> <span>Ghi nhận chưa nhớ</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onChuaOnFirstRound}
                      className="rounded-xl bg-white px-2.5 py-1.5 text-left text-[13px] leading-snug text-ink transition hover:bg-white/90 active:scale-[0.99]"
                    >
                      <span aria-hidden>🤔</span> <span>Chưa ổn</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          <div ref={messagesEndRef} className="h-px shrink-0" aria-hidden />
        </div>
      </div>

      <div
        className={`shrink-0 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-3 ${chatSurface}`}
      >
        <ActiveLearningDraftSection
          draft={draft}
          onDraftChange={setDraft}
          inputId={`al-draft-${word.id}`}
          voiceDisabled={feedbackOpen}
          onSubmit={feedbackOpen ? undefined : submitInput}
          submitDisabled={feedbackOpen || draft.trim() === ""}
        />
      </div>
    </div>
  );
}

function FlipCard({
  word,
  disabled = false,
  tabletLayout = false,
}: {
  word: Word;
  disabled?: boolean;
  tabletLayout?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  const defText = htmlToPlainTrim(word.definition);
  const ipa = resolveWordIpa(htmlToPlainTrim(word.term) || word.term, word.ipa);

  return (
    <div
      className={`mx-auto flex w-full shrink-0 flex-col items-stretch ${REVIEW_SECTION_GAP} ${tabletLayout ? "max-w-full gap-5 [perspective:2000px]" : "max-w-[calc(28rem*0.8)] [perspective:1200px]"}`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (!disabled) setFlipped((f) => !f);
        }}
        className={`relative aspect-square w-full cursor-pointer text-left outline-none ring-zinc-400 focus-visible:ring-2 ${tabletLayout ? "rounded-3xl" : ""}`}
        aria-label={flipped ? "Xem mặt thuật ngữ" : "Xem mặt định nghĩa"}
      >
        <div
          className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div
            className={`absolute inset-0 overflow-hidden border-zinc-200 bg-white [backface-visibility:hidden] ${tabletLayout ? "rounded-3xl border-[3px] shadow-lg" : "rounded-xl border-2 shadow-sm"}`}
          >
            <div className={`flex h-full flex-col overflow-y-auto overscroll-contain touch-pan-y ${tabletLayout ? "p-8" : "p-4 sm:p-5"}`}>
              <div className="my-auto flex w-full flex-col items-center gap-2">
                <WordRichDisplay
                  html={word.term}
                  className={`inline-block max-w-full text-center leading-snug tracking-tight text-ink [&_b]:font-bold [&_strong]:font-bold ${tabletLayout ? "text-[2rem] sm:text-4xl" : "text-xl sm:text-2xl"}`}
                />
                {ipa ? (
                  <span className="font-ipa text-center text-sm leading-none text-ink-muted sm:text-base">
                    {ipa}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className={`absolute inset-0 overflow-hidden border-zinc-200 bg-zinc-50 [backface-visibility:hidden] ${tabletLayout ? "rounded-3xl border-[3px] shadow-lg" : "rounded-xl border-2 shadow-sm"}`}
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className={`flex h-full flex-col overflow-y-auto overscroll-contain touch-pan-y ${tabletLayout ? "p-8" : "p-4 sm:p-5"}`}>
              <div className="my-auto w-full">
                {defText ? (
                  <WordRichDisplay
                    html={word.definition}
                    className={`inline-block max-w-full text-center font-medium leading-snug text-ink/90 ${tabletLayout ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}
                  />
                ) : (
                  <span
                    className={`text-center font-medium leading-snug text-ink-muted ${tabletLayout ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}
                  >
                    —
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
      <p className={`text-center text-ink-faint ${tabletLayout ? "text-lg" : "text-xs sm:text-sm"}`}>Nhấn thẻ để lật</p>
    </div>
  );
}

function ReviewRatingButton({
  title,
  subtitle,
  onPick,
  disabled,
  tabletLayout = false,
  titleClassName,
  borderClassName,
}: {
  title: string;
  subtitle: string;
  onPick: () => void;
  disabled?: boolean;
  tabletLayout?: boolean;
  titleClassName: string;
  borderClassName: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onPick}
      className={`flex w-full cursor-pointer flex-col items-center justify-center border bg-white text-center transition enabled:active:scale-[0.98] disabled:opacity-50 ${tabletLayout ? "min-h-[8.25rem] rounded-2xl border-[3px] px-5 py-5 shadow-lg" : "min-h-[4.75rem] rounded-lg border-2 px-2 py-3 shadow-sm sm:min-h-[5.25rem] sm:px-3 sm:py-3.5"} ${borderClassName}`}
    >
      <span
        className={`block font-semibold ${tabletLayout ? "text-xl sm:text-2xl" : "text-sm sm:text-base"} ${titleClassName}`}
      >
        {title}
      </span>
      <span
        className={`block font-medium leading-snug text-ink-muted ${tabletLayout ? "mt-2 text-base" : "mt-1 text-[10px] sm:text-xs"}`}
      >
        {subtitle}
      </span>
    </button>
  );
}
