"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Rating } from "@/lib/types";
import { useSrsStore } from "@/store/srs-store";

type ReviewViewProps = { allDecks?: false; deckId: string } | { allDecks: true };

export function ReviewView(props: ReviewViewProps) {
  const router = useRouter();
  const allDecks = props.allDecks === true;
  const deckId = !allDecks ? props.deckId : undefined;

  const decks = useSrsStore((s) => s.decks);
  const closeDeck = useSrsStore((s) => s.closeDeck);
  const openDeck = useSrsStore((s) => s.openDeck);
  const startOrRefreshSession = useSrsStore((s) => s.startOrRefreshSession);
  const rateCurrent = useSrsStore((s) => s.rateCurrent);
  const getCurrentWord = useSrsStore((s) => s.getCurrentWord);
  const getSessionProgress = useSrsStore((s) => s.getSessionProgress);
  const sessionQueueIds = useSrsStore((s) => s.sessionQueueIds);
  const sessionIndex = useSrsStore((s) => s.sessionIndex);

  const [cardExiting, setCardExiting] = useState(false);

  const activeDeck = deckId ? (decks.find((d) => d.id === deckId) ?? null) : null;
  const current = getCurrentWord();
  const progress = getSessionProgress();
  const sessionActive = sessionQueueIds.length > 0;
  const sessionDone = sessionActive && sessionIndex >= sessionQueueIds.length;
  const atCard = sessionActive && !sessionDone && current;

  const noCardsToReview = sessionQueueIds.length === 0 && !sessionDone;

  useEffect(() => {
    if (allDecks) {
      if (decks.length < 2) {
        router.replace("/");
        return;
      }
      closeDeck();
      startOrRefreshSession({ allDecks: true });
      return;
    }
    if (!deckId || !decks.some((d) => d.id === deckId)) {
      router.replace("/");
      return;
    }
    openDeck(deckId);
    startOrRefreshSession();
  }, [allDecks, deckId, decks, closeDeck, openDeck, router, startOrRefreshSession]);

  if (!allDecks && !activeDeck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-zinc-500">
        Loading…
      </div>
    );
  }

  const showDone = sessionActive && sessionDone;

  const handleRate = (rating: Rating) => {
    if (cardExiting) return;
    setCardExiting(true);
    window.setTimeout(() => {
      rateCurrent(rating);
      setCardExiting(false);
    }, 220);
  };

  const backHref = allDecks ? "/" : `/deck/${deckId}`;
  const backLabel = allDecks ? "Library" : (activeDeck?.name ?? "Deck");

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <header className="flex w-full flex-col gap-4">
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-2 rounded-2xl px-2 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-200/60 hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            {backLabel}
          </Link>
          {allDecks ? (
            <p className="text-center text-sm font-medium text-zinc-700">All decks</p>
          ) : null}
          <p className="text-center text-xs text-zinc-500">
            {noCardsToReview
              ? "Nothing due right now."
              : showDone
                ? "Session complete."
                : atCard
                  ? `Card ${progress.current} of ${progress.total}`
                  : "…"}
          </p>
        </header>

        {noCardsToReview && (
          <p className="text-center text-sm text-zinc-500">
            No cards in this session. Add words or check back later.
          </p>
        )}

        {showDone && (
          <p className="rounded-2xl bg-emerald-50 px-6 py-4 text-center text-sm font-medium text-emerald-800">
            Nice work — see you next round.
          </p>
        )}

        {atCard && current && (
          <div
            key={current.id}
            className={`flex w-full flex-col items-center gap-8 ${
              cardExiting
                ? "pointer-events-none translate-y-2 scale-[0.98] opacity-0 transition-all duration-220 ease-out"
                : "animate-review-card-in opacity-100"
            }`}
          >
            <FlipCard term={current.term} definition={current.definition} disabled={cardExiting} />

            <div className={`w-full ${cardExiting ? "pointer-events-none" : ""}`}>
              <p className="mb-3 text-center text-xs font-medium text-zinc-500">How well did you know this?</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <ReviewRatingButton
                  title="Hard"
                  subtitle="Review tomorrow"
                  onPick={() => handleRate("hard")}
                  disabled={cardExiting}
                  titleClassName="text-red-600"
                  borderClassName="border-red-500 hover:bg-red-50"
                />
                <ReviewRatingButton
                  title="OK"
                  subtitle="In a few days"
                  onPick={() => handleRate("ok")}
                  disabled={cardExiting}
                  titleClassName="text-orange-600"
                  borderClassName="border-orange-500 hover:bg-orange-50"
                />
                <ReviewRatingButton
                  title="Easy"
                  subtitle="In a week"
                  onPick={() => handleRate("easy")}
                  disabled={cardExiting}
                  titleClassName="text-emerald-700"
                  borderClassName="border-emerald-600 hover:bg-emerald-50"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FlipCard({
  term,
  definition,
  disabled = false,
}: {
  term: string;
  definition: string;
  disabled?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm [perspective:1200px]">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setFlipped((f) => !f)}
        className="relative aspect-square w-full cursor-pointer text-left outline-none ring-zinc-400 focus-visible:ring-2"
        aria-label={flipped ? "Show term" : "Show definition"}
      >
        <div
          className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white p-8 shadow-sm [backface-visibility:hidden]">
            <p className="text-center text-3xl font-semibold leading-tight tracking-tight text-zinc-900">{term}</p>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 p-8 shadow-sm [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <p className="text-center text-xl font-medium leading-relaxed text-zinc-700">
              {definition?.trim() ? definition : "—"}
            </p>
          </div>
        </div>
      </button>
      <p className="mt-3 text-center text-xs text-zinc-400">Tap the card to flip</p>
    </div>
  );
}

function ReviewRatingButton({
  title,
  subtitle,
  onPick,
  disabled,
  titleClassName,
  borderClassName,
}: {
  title: string;
  subtitle: string;
  onPick: () => void;
  disabled?: boolean;
  titleClassName: string;
  borderClassName: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onPick}
      className={`min-w-0 flex-1 rounded-xl border-2 bg-white px-2 py-3 text-center shadow-sm transition enabled:active:scale-[0.98] disabled:opacity-50 sm:px-3 sm:py-3.5 ${borderClassName}`}
    >
      <span className={`block text-sm font-semibold sm:text-base ${titleClassName}`}>{title}</span>
      <span className="mt-0.5 block text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs">{subtitle}</span>
    </button>
  );
}
