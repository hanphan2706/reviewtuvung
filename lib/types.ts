/**
 * User-scoped shapes for local persistence and future Supabase/Firebase sync.
 */

export type UserId = string;

export type Rating = "hard" | "ok" | "easy";

/** Số lượt chấm điểm theo từng ngày (local), key `YYYY-MM-DD`. */
export interface ReviewDayTally {
  hard: number;
  ok: number;
  easy: number;
}

export type ReviewDayTalliesMap = Record<string, ReviewDayTally>;

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
  /** Rich text (HTML được phép: b, strong, span color, br). */
  term: string;
  definition: string;
  /** Phiên âm IPA (tuỳ chọn), ví dụ `/ˈmʌðə/`. */
  ipa?: string;
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
  reviewDayTallies: ReviewDayTalliesMap;
}
