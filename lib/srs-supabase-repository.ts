import type { SupabaseClient } from "@supabase/supabase-js";
import { parseReviewDayTallies } from "@/lib/review-day-stats";
import type { Deck, Rating, UserId, UserSettings, UserSrsPayload, Word } from "@/lib/types";
import type { SrsRepository } from "@/lib/repository";

type DeckRow = {
  id: string;
  user_id: string;
  name: string;
  created_at: string;
};

type WordRow = {
  id: string;
  user_id: string;
  deck_id: string;
  term: string;
  definition: string | null;
  accent_color?: string | null;
  created_at: string;
  next_review_at: string;
  last_reviewed_at: string | null;
  last_rating: Rating | null;
  hard_priority: boolean;
};

type SettingsRow = {
  user_id: string;
  daily_review_limit: number;
  review_day_tallies?: unknown;
};

const toIso = (ms: number) => new Date(ms).toISOString();
const toMs = (iso: string) => new Date(iso).getTime();
const defaultDailyReviewLimit = 15;

function mapDeck(row: DeckRow): Deck {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    createdAt: toMs(row.created_at),
  };
}

function mapWord(row: WordRow): Word {
  return {
    id: row.id,
    userId: row.user_id,
    deckId: row.deck_id,
    term: row.term,
    definition: row.definition ?? "",
    createdAt: toMs(row.created_at),
    nextReviewAt: toMs(row.next_review_at),
    lastReviewedAt: row.last_reviewed_at ? toMs(row.last_reviewed_at) : null,
    lastRating: row.last_rating,
    hardPriority: row.hard_priority,
  };
}

function mapSettings(row: SettingsRow | null): UserSettings {
  return {
    dailyReviewLimit: row?.daily_review_limit ?? defaultDailyReviewLimit,
  };
}

export function createSupabaseSrsRepository(supabase: SupabaseClient): SrsRepository {
  return {
    async fetchUserPayload(userId: UserId) {
      const [decksResult, wordsResult, settingsResult] = await Promise.all([
        supabase.from("srs_decks").select("id,user_id,name,created_at").eq("user_id", userId).order("created_at"),
        supabase
          .from("srs_words")
          .select(
            "id,user_id,deck_id,term,definition,accent_color,created_at,next_review_at,last_reviewed_at,last_rating,hard_priority",
          )
          .eq("user_id", userId)
          .order("created_at"),
        supabase
          .from("srs_settings")
          .select("user_id,daily_review_limit,review_day_tallies")
          .eq("user_id", userId)
          .maybeSingle(),
      ]);

      if (decksResult.error) throw decksResult.error;
      if (wordsResult.error) throw wordsResult.error;
      if (settingsResult.error) throw settingsResult.error;

      const decks = (decksResult.data as DeckRow[] | null)?.map(mapDeck) ?? [];
      const words = (wordsResult.data as WordRow[] | null)?.map(mapWord) ?? [];

      if (decks.length === 0 && words.length === 0 && !settingsResult.data) {
        return null;
      }

      const settingsRow = settingsResult.data as SettingsRow | null;

      return {
        userId,
        decks,
        words,
        settings: mapSettings(settingsRow),
        reviewDayTallies: parseReviewDayTallies(settingsRow?.review_day_tallies),
      };
    },

    async upsertUserPayload(payload: UserSrsPayload) {
      const now = new Date().toISOString();
      const deckRows = payload.decks.map((deck) => ({
        id: deck.id,
        user_id: payload.userId,
        name: deck.name,
        created_at: toIso(deck.createdAt),
        updated_at: now,
      }));
      const wordRows = payload.words.map((word) => ({
        id: word.id,
        user_id: payload.userId,
        deck_id: word.deckId,
        term: word.term,
        definition: word.definition,
        accent_color: null,
        created_at: toIso(word.createdAt),
        next_review_at: toIso(word.nextReviewAt),
        last_reviewed_at: word.lastReviewedAt ? toIso(word.lastReviewedAt) : null,
        last_rating: word.lastRating,
        hard_priority: word.hardPriority,
        updated_at: now,
      }));

      const settingsResult = await supabase.from("srs_settings").upsert({
        user_id: payload.userId,
        daily_review_limit: payload.settings.dailyReviewLimit,
        review_day_tallies: payload.reviewDayTallies,
        updated_at: now,
      });
      if (settingsResult.error) throw settingsResult.error;

      if (deckRows.length > 0) {
        const result = await supabase.from("srs_decks").upsert(deckRows);
        if (result.error) throw result.error;
      }

      if (wordRows.length > 0) {
        const result = await supabase.from("srs_words").upsert(wordRows);
        if (result.error) throw result.error;
      }

      const [existingWords, existingDecks] = await Promise.all([
        supabase.from("srs_words").select("id").eq("user_id", payload.userId),
        supabase.from("srs_decks").select("id").eq("user_id", payload.userId),
      ]);

      if (existingWords.error) throw existingWords.error;
      if (existingDecks.error) throw existingDecks.error;

      const wordIds = new Set(payload.words.map((word) => word.id));
      const staleWordIds = ((existingWords.data as { id: string }[] | null) ?? [])
        .map((row) => row.id)
        .filter((id) => !wordIds.has(id));
      if (staleWordIds.length > 0) {
        const result = await supabase.from("srs_words").delete().eq("user_id", payload.userId).in("id", staleWordIds);
        if (result.error) throw result.error;
      }

      const deckIds = new Set(payload.decks.map((deck) => deck.id));
      const staleDeckIds = ((existingDecks.data as { id: string }[] | null) ?? [])
        .map((row) => row.id)
        .filter((id) => !deckIds.has(id));
      if (staleDeckIds.length > 0) {
        const result = await supabase.from("srs_decks").delete().eq("user_id", payload.userId).in("id", staleDeckIds);
        if (result.error) throw result.error;
      }
    },
  };
}
