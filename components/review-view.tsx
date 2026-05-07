"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { WordRichDisplay } from "@/components/word-rich-display";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { Rating, Word } from "@/lib/types";
import { useSrsStore } from "@/store/srs-store";

type ReviewViewProps = { allDecks?: false; deckId: string } | { allDecks: true };

/** Khoảng cách tiêu đề ↔ thẻ = thẻ ↔ dòng “Nhấn thẻ…” (cùng token). */
const REVIEW_SECTION_GAP = "gap-4";

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

  const activeDeck = deckId ? (decks.find((d) => d.id === deckId) ?? null) : null;
  const current = getCurrentWord();
  const progress = getSessionProgress();
  const sessionActive = sessionQueueIds.length > 0;
  const sessionDone = sessionActive && sessionIndex >= sessionQueueIds.length;
  const atCard = sessionActive && !sessionDone && current;

  const noCardsToReview = sessionQueueIds.length === 0 && !sessionDone;
  const completedSessionWithCards = sessionDone && sessionQueueIds.length > 0;

  useEffect(() => {
    setAlActive(false);
    setAlComplete(false);
    setAlQueueSnapshot([]);
    setReviewMode("pick");

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
  }, [allDecks, deckId, decks, closeDeck, openDeck, router, startOrRefreshSession]);

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
  const backLabel = allDecks ? "All decks" : (activeDeck?.name ?? "Bộ thẻ");

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
            onFinish={finishActiveLearning}
            vocabularyHref={backHref}
          />
        ) : showCongratsComplete ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-start overflow-y-auto px-3 py-8">
            <div className="w-full max-w-md space-y-6 text-center text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
              <div>
                <p>Đã hết phiên ôn.</p>
                <p className="mt-2 sm:mt-2.5">
                  Chúc mừng bạn đã tiến thêm một bước nhỏ trên con đường học tập của mình!
                </p>
              </div>
              <Link
                href={backHref}
                className="inline-flex w-full max-w-xs justify-center rounded-xl bg-[#4b2876] px-5 py-3.5 text-sm font-semibold text-white shadow-sm"
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
                <p className="text-center text-sm font-medium text-[#4b2876]">Tất cả deck</p>
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
  onFinish: () => void;
  vocabularyHref: string;
};

function ActiveLearningFlow({
  queueIds,
  words,
  isTtTablet,
  onFinish,
  vocabularyHref,
}: ActiveLearningFlowProps) {
  const recordActiveLearningHard = useSrsStore((s) => s.recordActiveLearningHard);

  const list = queueIds
    .map((id) => words.find((w) => w.id === id))
    .filter((w): w is Word => Boolean(w));

  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  /** Sau “Gửi và xem gợi ý”: hiện gợi ý + tự đánh giá ngay dưới ô nhập, không đổi màn. */
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  /** Placeholder cho API AI — hiển thị cùng màn tự đánh giá. */
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  /** Sau lần đầu “Chưa ổn” (đã quay lại gửi): nút phải đổi thành «Ghi nhận chưa nhớ». */
  const [alSecondTry, setAlSecondTry] = useState(false);

  const word = list[index];
  const total = list.length;

  useEffect(() => {
    setAlSecondTry(false);
  }, [word.id]);

  if (!word || total === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-3 py-8 text-center text-sm text-ink-muted">
        <p>Không tìm thấy thẻ để ôn active learning.</p>
        <Link href={vocabularyHref} className="mt-4 text-[#4b2876] underline">
          Về từ vựng
        </Link>
      </div>
    );
  }

  const submitInput = () => {
    setAiFeedback(
      "Gợi ý AI sẽ hiện ở đây sau khi tích hợp API (dự kiến bản trả phí). Hiện tại bạn có thể tự đánh giá bên dưới.",
    );
    setFeedbackOpen(true);
  };

  const advanceAfterReflect = () => {
    if (index >= total - 1) {
      onFinish();
      return;
    }
    setFeedbackOpen(false);
    setDraft("");
    setAiFeedback(null);
    setAlSecondTry(false);
    setIndex((i) => i + 1);
  };

  const finishWithHardTally = () => {
    recordActiveLearningHard();
    advanceAfterReflect();
  };

  /** Lần đầu «Chưa ổn»: quay lại màn Gửi ngay; lần sau nút đổi thành «Ghi nhận chưa nhớ». */
  const onChuaOnFirstRound = () => {
    setFeedbackOpen(false);
    setAiFeedback(null);
    setAlSecondTry(true);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mt-2 shrink-0 text-center sm:mt-3">
        <p className="text-sm font-medium text-[#4b2876]">Active learning</p>
        <p className={`mt-0.5 text-xs text-ink-muted sm:text-sm ${isTtTablet ? "text-base" : ""}`}>
          Thẻ {index + 1} / {total}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-py-4">
        <div
          className={`mx-auto flex w-full max-w-md flex-1 flex-col gap-4 px-3 py-4 sm:px-4 ${isTtTablet ? "max-w-xl" : ""}`}
        >
          <div className="space-y-2.5 text-left text-sm font-medium leading-snug text-[#4b2876] sm:text-[15px]">
            <p>
              Đặt một câu hoàn chỉnh có chứa thuật ngữ này. Thêm các thông tin khác (nếu có) để tạo thành một đoạn nói
              ngắn.
            </p>
            <p className="text-sm font-normal leading-relaxed text-ink sm:text-[15px]">
              <span className="block text-ink-muted">Ví dụ:</span>
              <span className="mt-1 block font-normal italic text-zinc-500 sm:text-[15px]">
                I tried to <strong className="font-bold">blend into</strong>{" "}
                the crowd. I didn&apos;t want to be noticed. I wasn&apos;t comfortable with that.
              </span>
            </p>
          </div>

          <div>
            <div className="rounded-xl border border-zinc-200/90 bg-white px-3 py-2.5 text-center shadow-sm ring-1 ring-zinc-950/5">
              <WordRichDisplay
                html={word.term}
                className="inline-block max-w-full text-base font-medium text-ink [&_b]:font-bold [&_strong]:font-bold sm:text-lg"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`al-draft-${word.id}`} className="sr-only">
              Bài làm của bạn
            </label>
            <textarea
              id={`al-draft-${word.id}`}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={5}
              spellCheck
              lang="en"
              placeholder="Viết đoạn của bạn bằng tiếng Anh…"
              className="w-full resize-y rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-sm text-ink outline-none ring-zinc-300/80 placeholder:text-ink-faint focus-visible:border-zinc-400 focus-visible:ring-1 sm:text-[15px]"
            />
          </div>

          {!feedbackOpen ? (
            <button
              type="button"
              onClick={submitInput}
              className="w-full rounded-xl bg-[#4b2876] py-3.5 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
            >
              Gửi và xem gợi ý
            </button>
          ) : null}

          {feedbackOpen ? (
            <div className="flex flex-col gap-5 border-t border-zinc-200/90 pt-5">
              {aiFeedback ? (
                <div className="rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-left shadow-sm ring-1 ring-zinc-950/5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#4b2876]">Gợi ý (AI)</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{aiFeedback}</p>
                </div>
              ) : null}

              <div className="space-y-4">
                <p className="text-center text-sm font-medium leading-snug text-ink sm:text-[15px]">
                  Tự đánh giá bài làm
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={advanceAfterReflect}
                    className="rounded-xl border border-zinc-200/90 bg-white px-4 py-4 text-center text-sm font-semibold text-[#4b2876] shadow-sm ring-1 ring-zinc-950/5 transition active:scale-[0.99]"
                  >
                    Ổn, đúng hướng
                  </button>
                  {alSecondTry ? (
                    <button
                      type="button"
                      onClick={finishWithHardTally}
                      className="rounded-xl border border-zinc-200/90 bg-white px-4 py-4 text-center text-sm font-semibold text-ink shadow-sm ring-1 ring-zinc-950/5 transition active:scale-[0.99]"
                    >
                      Ghi nhận chưa nhớ
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onChuaOnFirstRound}
                      className="rounded-xl border border-zinc-200/90 bg-white px-4 py-4 text-center text-sm font-semibold text-ink shadow-sm ring-1 ring-zinc-950/5 transition active:scale-[0.99]"
                    >
                      Chưa ổn
                    </button>
                  )}
                </div>
              </div>

              <Link
                href={vocabularyHref}
                className="block text-center text-sm text-ink-muted underline underline-offset-2"
              >
                Thoát — về từ vựng
              </Link>
            </div>
          ) : null}
        </div>
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
            className={`absolute inset-0 flex items-center justify-center overflow-hidden border-zinc-200 bg-white [backface-visibility:hidden] ${tabletLayout ? "rounded-3xl border-[3px] p-8 shadow-lg" : "rounded-xl border-2 p-4 shadow-sm sm:p-5"}`}
          >
            <WordRichDisplay
              html={word.term}
              className={`inline-block max-w-full text-center leading-snug tracking-tight text-ink [&_b]:font-bold [&_strong]:font-bold ${tabletLayout ? "text-[2rem] sm:text-4xl" : "text-xl sm:text-2xl"}`}
            />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center overflow-hidden border-zinc-200 bg-zinc-50 [backface-visibility:hidden] ${tabletLayout ? "rounded-3xl border-[3px] p-8 shadow-lg" : "rounded-xl border-2 p-4 shadow-sm sm:p-5"}`}
            style={{ transform: "rotateY(180deg)" }}
          >
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
