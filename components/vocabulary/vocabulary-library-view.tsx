"use client";

import { Check, Plus, Trash2, X } from "lucide-react";
import { EmojiPickerAnchor } from "@/components/emoji-picker-anchor";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import { VocabularyCuratedSection } from "@/components/vocabulary/vocabulary-curated-section";
import {
  VocabularyReviewCta,
  VocabularyWeeklyChart,
} from "@/components/vocabulary/vocabulary-library-sections";
import { useNowTick } from "@/hooks/use-now-tick";
import {
  buildVocabularyWeekBars,
  computeDeckLearnedPercent,
  computeVocabularyStreak,
} from "@/lib/vocabulary/vocabulary-library-stats";
import { useSrsStore } from "@/store/srs-store";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { vocabularyReviewedToday } from "@/lib/profile/learning-progress";

export function VocabularyLibraryView() {
  const { loggedIn, navigateWithAuth, runWithAuth } = useVocabularyAuth();
  const now = useNowTick();
  const decks = useSrsStore((s) => s.decks);
  const settings = useSrsStore((s) => s.settings);
  const createDeck = useSrsStore((s) => s.createDeck);
  const deleteDeck = useSrsStore((s) => s.deleteDeck);
  const words = useSrsStore((s) => s.words);
  const reviewDayTallies = useSrsStore((s) => s.reviewDayTallies);
  const closeDeck = useSrsStore((s) => s.closeDeck);
  const setDailyReviewLimit = useSrsStore((s) => s.setDailyReviewLimit);

  const [showAllDecks, setShowAllDecks] = useState(false);
  const [deckCreateOpen, setDeckCreateOpen] = useState(false);
  const [deckToDelete, setDeckToDelete] = useState<{ id: string; name: string } | null>(null);
  const [newDeckName, setNewDeckName] = useState("");
  const newDeckNameInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    closeDeck();
  }, [closeDeck]);

  useEffect(() => {
    if (!deckCreateOpen) return;
    const el = newDeckNameInputRef.current;
    if (!el) return;
    el.focus();
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [deckCreateOpen]);

  const weekBars = useMemo(
    () => buildVocabularyWeekBars(reviewDayTallies, now, 7),
    [reviewDayTallies, now],
  );
  const streakDays = useMemo(
    () => computeVocabularyStreak(reviewDayTallies, now),
    [reviewDayTallies, now],
  );
  const reviewedToday = useMemo(
    () => vocabularyReviewedToday(reviewDayTallies, now),
    [reviewDayTallies, now],
  );

  const sortedDecks = useMemo(
    () => [...decks].sort((a, b) => b.createdAt - a.createdAt),
    [decks],
  );
  const visibleDecks = showAllDecks ? sortedDecks : sortedDecks.slice(0, 2);

  const openCreateDeck = useCallback(() => {
    runWithAuth("/tu-hoc/tu-vung", () => {
      setDeckCreateOpen(true);
      setNewDeckName("");
    });
  }, [runWithAuth]);

  const openDeck = useCallback(
    (deckId: string) => {
      navigateWithAuth(`/deck/${deckId}`);
    },
    [navigateWithAuth],
  );

  const startReview = useCallback(() => {
    navigateWithAuth("/review");
  }, [navigateWithAuth]);

  const onCreateDeck = useCallback(() => {
    createDeck(newDeckName);
    setNewDeckName("");
    setDeckCreateOpen(false);
  }, [createDeck, newDeckName]);

  const resizeNewDeckNameInput = useCallback(() => {
    const el = newDeckNameInputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  const insertEmojiNewDeck = useCallback(
    (emoji: string) => {
      const el = newDeckNameInputRef.current;
      let start = newDeckName.length;
      let end = newDeckName.length;
      if (
        el &&
        document.activeElement === el &&
        typeof el.selectionStart === "number" &&
        typeof el.selectionEnd === "number"
      ) {
        start = el.selectionStart;
        end = el.selectionEnd;
      }
      const caret = start + emoji.length;
      const next = newDeckName.slice(0, start) + emoji + newDeckName.slice(end);
      setNewDeckName(next);
      queueMicrotask(() => {
        const input = newDeckNameInputRef.current;
        input?.focus();
        try {
          input?.setSelectionRange(caret, caret);
        } catch {
          /* ignore */
        }
        resizeNewDeckNameInput();
      });
    },
    [newDeckName, resizeNewDeckNameInput],
  );

  return (
    <div className={studyHubSubpageContentClass}>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:gap-5">
        <VocabularyWeeklyChart
          bars={weekBars}
          reviewedToday={reviewedToday}
          dailyGoal={settings.dailyReviewLimit}
          streakDays={streakDays}
          onDailyGoalChange={setDailyReviewLimit}
        />
        <VocabularyReviewCta onStartReview={startReview} onCreateDeck={openCreateDeck} />
      </div>

      <section className="mt-10 md:mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="font-serif text-xl font-bold text-[#000001] md:text-2xl">Bộ thẻ của tôi</h2>
          {sortedDecks.length > 2 ? (
            <button
              type="button"
              onClick={() => setShowAllDecks((v) => !v)}
              className="shrink-0 text-sm font-semibold text-[#4b2876] hover:underline"
            >
              {showAllDecks ? "Thu gọn" : "Xem tất cả"}
            </button>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleDecks.map((deck) => {
            const deckWords = words.filter((w) => w.deckId === deck.id);
            const learnedPct = computeDeckLearnedPercent(deckWords);

            return (
              <div
                key={deck.id}
                className="group relative flex min-h-[132px] flex-col rounded-2xl border border-[#E4E4E7] bg-white p-4 shadow-sm transition hover:border-[#4b2876]/25 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!loggedIn) {
                      runWithAuth("/tu-hoc/tu-vung", () => setDeckToDelete({ id: deck.id, name: deck.name }));
                      return;
                    }
                    setDeckToDelete({ id: deck.id, name: deck.name });
                  }}
                  className="absolute right-3 top-3 rounded-lg p-1.5 text-[#47464b]/40 opacity-0 transition hover:bg-[#f5f5f7] hover:text-red-600 group-hover:opacity-100 focus:opacity-100"
                  aria-label={`Xoá deck ${deck.name}`}
                >
                  <Trash2 className="size-4" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={() => openDeck(deck.id)}
                  className="flex min-h-0 flex-1 flex-col text-left"
                >
                  <h3 className="mt-2 pr-8 font-serif text-lg font-bold leading-snug text-[#000001]">{deck.name}</h3>
                  <div className="mt-auto space-y-3 pt-4">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#47464b]">
                      <span>{deckWords.length} từ</span>
                      <span>Đã học {learnedPct}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-[#ece7f2]">
                      <div
                        className="h-full rounded-full bg-[#4b2876]"
                        style={{ width: `${learnedPct}%` }}
                      />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={openCreateDeck}
            className="flex min-h-[132px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d4d4d8] bg-white/60 p-4 text-[#47464b] transition hover:border-[#4b2876]/40 hover:bg-[#fbf8fd] hover:text-[#4b2876]"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-[#E4E4E7] bg-white">
              <Plus className="size-5" strokeWidth={1.75} />
            </span>
            <span className="text-sm font-semibold">Thêm bộ thẻ mới</span>
          </button>
        </div>
      </section>

      <VocabularyCuratedSection showViewAll />

      {deckToDelete ? (
        <dialog
          open
          className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-full max-w-none items-end justify-center border-0 bg-black/40 p-4 backdrop:bg-black/40 sm:items-center"
          aria-labelledby="delete-deck-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-xl">
            <h2 id="delete-deck-title" className="font-serif text-xl font-bold text-[#000001]">
              Xoá deck?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#47464b]">
              Bạn có chắc muốn xoá <span className="font-semibold text-[#000001]">«{deckToDelete.name}»</span>?
              Toàn bộ từ trong deck cũng sẽ bị xoá.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setDeckToDelete(null)}
                className="rounded-xl border border-[#E4E4E7] px-4 py-2.5 text-sm font-semibold text-[#47464b]"
              >
                Huỷ
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteDeck(deckToDelete.id);
                  setDeckToDelete(null);
                }}
                className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                Xoá deck
              </button>
            </div>
          </div>
        </dialog>
      ) : null}

      {deckCreateOpen ? (
        <dialog
          open
          className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-full max-w-none items-end justify-center border-0 bg-black/40 p-4 backdrop:bg-black/40 sm:items-center"
          aria-labelledby="create-deck-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-[#E4E4E7] bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <h2 id="create-deck-title" className="font-serif text-xl font-bold text-[#000001]">
                Tạo bộ thẻ mới
              </h2>
              <button
                type="button"
                onClick={() => {
                  setDeckCreateOpen(false);
                  setNewDeckName("");
                }}
                className="rounded-lg p-1 text-[#47464b] hover:bg-[#f5f5f7]"
                aria-label="Đóng"
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-0.5 rounded-xl border border-[#E4E4E7] bg-white pr-1.5 focus-within:border-[#000001]/30 focus-within:ring-1 focus-within:ring-[#000001]/15">
              <textarea
                ref={newDeckNameInputRef}
                value={newDeckName}
                rows={1}
                onChange={(e) => {
                  setNewDeckName(e.target.value);
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onCreateDeck();
                  }
                  if (e.key === "Escape") {
                    setDeckCreateOpen(false);
                    setNewDeckName("");
                  }
                }}
                placeholder="Tên bộ thẻ..."
                className="max-h-40 min-w-0 flex-1 resize-none overflow-y-auto border-0 bg-transparent py-2.5 pl-4 pr-1 text-base leading-snug text-ink outline-none"
              />
              <EmojiPickerAnchor
                placement="inline"
                onPick={insertEmojiNewDeck}
                aria-label="Chèn emoji vào tên deck"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setDeckCreateOpen(false);
                  setNewDeckName("");
                }}
                className="rounded-xl border border-[#E4E4E7] px-4 py-2.5 text-sm font-semibold text-[#47464b]"
              >
                Huỷ
              </button>
              <button
                type="button"
                onClick={onCreateDeck}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white"
              >
                <Check className="size-4" strokeWidth={2} />
                Tạo
              </button>
            </div>
          </div>
        </dialog>
      ) : null}
    </div>
  );
}
