"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { bumpReviewDayTally, pruneReviewDayTallies } from "@/lib/review-day-stats";
import { scheduleAfterRating, sortDueForSession, takeSessionQueue } from "@/lib/srs";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { Deck, Rating, ReviewDayTalliesMap, UserId, UserSettings, UserSrsPayload, Word } from "@/lib/types";

const DEFAULT_USER_ID = "local-user";

const defaultSettings: UserSettings = {
  dailyReviewLimit: 15,
};

function newWord(userId: UserId, deckId: string, term: string, definition: string, now: number): Word {
  return {
    id: crypto.randomUUID(),
    userId,
    deckId,
    term: term.trim(),
    definition: definition.trim(),
    createdAt: now,
    nextReviewAt: now,
    lastReviewedAt: null,
    lastRating: null,
    hardPriority: false,
  };
}

function newDeck(userId: UserId, name: string, now: number): Deck {
  return {
    id: crypto.randomUUID(),
    userId,
    name: name.trim() || "Untitled deck",
    createdAt: now,
  };
}

interface SrsState {
  userId: UserId;
  decks: Deck[];
  /** `null` = library (deck list). Set when user opens a deck. */
  viewingDeckId: string | null;
  words: Word[];
  settings: UserSettings;
  /** Chấm điểm ôn theo ngày (local), phục vụ biểu đồ recall. */
  reviewDayTallies: ReviewDayTalliesMap;
  sessionQueueIds: string[];
  sessionIndex: number;

  setUserId: (userId: UserId) => void;
  replacePayload: (payload: UserSrsPayload) => void;
  getPayload: () => UserSrsPayload;
  setDailyReviewLimit: (n: number) => void;
  createDeck: (name: string) => string;
  openDeck: (deckId: string) => void;
  closeDeck: () => void;
  deleteDeck: (deckId: string) => void;
  addWord: (term: string, definition: string) => void;
  updateWord: (id: string, term: string, definition: string) => void;
  removeWord: (id: string) => void;
  startOrRefreshSession: (opts?: { allDecks?: boolean }) => void;
  rateCurrent: (rating: Rating) => void;
  getCurrentWord: () => Word | null;
  getSessionProgress: () => { current: number; total: number };
  wordsForDeck: (deckId: string) => Word[];
}

const storageKey = "srs-user-data-v1";

function clearSession(set: (partial: Partial<SrsState>) => void) {
  set({ sessionQueueIds: [], sessionIndex: 0 });
}

export const useSrsStore = create<SrsState>()(
  persist(
    (set, get) => ({
      userId: DEFAULT_USER_ID,
      decks: [],
      viewingDeckId: null,
      words: [],
      settings: defaultSettings,
      reviewDayTallies: {},
      sessionQueueIds: [],
      sessionIndex: 0,

      setUserId: (userId) => set({ userId }),

      replacePayload: (payload) => {
        const now = Date.now();
        const tallies =
          payload.reviewDayTallies && typeof payload.reviewDayTallies === "object"
            ? pruneReviewDayTallies(payload.reviewDayTallies as ReviewDayTalliesMap, now)
            : {};
        set({
          userId: payload.userId,
          decks: payload.decks,
          words: payload.words,
          settings: payload.settings,
          reviewDayTallies: tallies,
          viewingDeckId: null,
          sessionQueueIds: [],
          sessionIndex: 0,
        });
      },

      getPayload: () => {
        const { userId, decks, words, settings, reviewDayTallies } = get();
        return { userId, decks, words, settings, reviewDayTallies };
      },

      setDailyReviewLimit: (n) => {
        const dailyReviewLimit = Number.isFinite(n) && n > 0 ? Math.min(500, Math.floor(n)) : defaultSettings.dailyReviewLimit;
        set({ settings: { ...get().settings, dailyReviewLimit } });
      },

      createDeck: (name) => {
        const now = Date.now();
        const { userId } = get();
        const deck = newDeck(userId, name, now);
        set((s) => ({ decks: [...s.decks, deck] }));
        return deck.id;
      },

      openDeck: (deckId) => {
        set({ viewingDeckId: deckId });
        clearSession(set);
      },

      closeDeck: () => {
        set({ viewingDeckId: null });
        clearSession(set);
      },

      deleteDeck: (deckId) => {
        set((s) => {
          const removedIds = new Set(
            s.words.filter((w) => w.deckId === deckId).map((w) => w.id)
          );
          const nextViewing = s.viewingDeckId === deckId ? null : s.viewingDeckId;
          return {
            decks: s.decks.filter((d) => d.id !== deckId),
            words: s.words.filter((w) => w.deckId !== deckId),
            sessionQueueIds: s.sessionQueueIds.filter((id) => !removedIds.has(id)),
            sessionIndex: 0,
            viewingDeckId: nextViewing,
          };
        });
      },

      addWord: (term, definition) => {
        if (!htmlToPlainTrim(term)) return;
        const { userId, viewingDeckId } = get();
        if (!viewingDeckId) return;
        const now = Date.now();
        const t = term.trim();
        const def = definition.trim();
        set((s) => ({
          words: [...s.words, newWord(userId, viewingDeckId, t, def, now)],
        }));
      },

      updateWord: (id, term, definition) => {
        if (!htmlToPlainTrim(term)) return;
        const t = term.trim();
        const def = definition.trim();
        set((s) => ({
          words: s.words.map((w) => (w.id === id ? { ...w, term: t, definition: def } : w)),
        }));
      },

      removeWord: (id) => {
        set((s) => ({
          words: s.words.filter((w) => w.id !== id),
          sessionQueueIds: s.sessionQueueIds.filter((x) => x !== id),
        }));
      },

      startOrRefreshSession: (opts) => {
        const { words, settings, viewingDeckId } = get();
        const now = Date.now();
        let pool: Word[];
        if (opts?.allDecks) {
          pool = words;
        } else {
          if (!viewingDeckId) return;
          pool = words.filter((w) => w.deckId === viewingDeckId);
        }
        const sorted = sortDueForSession(pool, now);
        const session = takeSessionQueue(sorted, settings.dailyReviewLimit);
        set({
          sessionQueueIds: session.map((w) => w.id),
          sessionIndex: 0,
        });
      },

      rateCurrent: (rating) => {
        const { sessionQueueIds, sessionIndex, words, reviewDayTallies } = get();
        const id = sessionQueueIds[sessionIndex];
        if (!id) return;
        const now = Date.now();
        const idx = words.findIndex((w) => w.id === id);
        if (idx === -1) return;
        const updated = scheduleAfterRating(words[idx], rating, now);
        const nextWords = [...words];
        nextWords[idx] = updated;
        set({
          words: nextWords,
          sessionIndex: sessionIndex + 1,
          reviewDayTallies: bumpReviewDayTally(reviewDayTallies, now, rating),
        });
      },

      getCurrentWord: () => {
        const { sessionQueueIds, sessionIndex, words } = get();
        const id = sessionQueueIds[sessionIndex];
        if (!id) return null;
        return words.find((w) => w.id === id) ?? null;
      },

      getSessionProgress: () => {
        const { sessionQueueIds, sessionIndex } = get();
        const total = sessionQueueIds.length;
        if (total === 0) {
          return { current: 0, total: 0 };
        }
        return { current: sessionIndex + 1, total };
      },

      wordsForDeck: (deckId) => get().words.filter((w) => w.deckId === deckId),
    }),
    {
      name: storageKey,
      version: 3,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        userId: s.userId,
        decks: s.decks,
        words: s.words,
        settings: s.settings,
        reviewDayTallies: s.reviewDayTallies,
        viewingDeckId: s.viewingDeckId,
      }),
      migrate: (persisted, version) => {
        const p = persisted as {
          userId?: UserId;
          words?: Word[];
          decks?: Deck[];
          settings?: UserSettings;
          viewingDeckId?: string | null;
          reviewDayTallies?: ReviewDayTalliesMap;
        };
        if (version < 2 && p.words?.length) {
          const hasDeckIds = p.words.some((w) => "deckId" in w && (w as Word).deckId);
          if (!hasDeckIds) {
            const deckId = crypto.randomUUID();
            const uid = p.userId ?? DEFAULT_USER_ID;
            p.decks = [{ id: deckId, userId: uid, name: "My deck", createdAt: Date.now() }];
            p.words = p.words.map((w) => ({ ...(w as Word), deckId }));
          }
        }
        if (version < 3) {
          p.reviewDayTallies = p.reviewDayTallies && typeof p.reviewDayTallies === "object" ? p.reviewDayTallies : {};
        }
        return persisted as typeof persisted;
      },
    },
  ),
);

export { DEFAULT_USER_ID, defaultSettings };
