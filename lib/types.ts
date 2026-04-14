/**
 * User-scoped shapes for local persistence and future Supabase/Firebase sync.
 */

export type UserId = string;

export type Rating = "hard" | "ok" | "easy";

export interface UserSettings {
  dailyReviewLimit: number;
}

export interface Deck {
  id: string;
  userId: UserId;
  name: string;
  createdAt: number;
}

export interface Word {
  id: string;
  userId: UserId;
  deckId: string;
  term: string;
  definition: string;
  createdAt: number;
  /** When the word should appear in the review queue (ms epoch). */
  nextReviewAt: number;
  lastReviewedAt: number | null;
  lastRating: Rating | null;
  /**
   * After a Hard rating, set true so the next due session sorts this word first.
   * Cleared when the word is reviewed again.
   */
  hardPriority: boolean;
}

export interface UserSrsPayload {
  userId: UserId;
  decks: Deck[];
  words: Word[];
  settings: UserSettings;
}
