import type { Deck, UserSrsPayload, Word } from "@/lib/types";
import { sanitizeWordHtml } from "@/lib/sanitize-word-html";
import { WORD_NOTION_TEXT_COLORS } from "@/lib/word-text-colors";

const STARTER_DECK_NAME = "Deck mẫu - xoá hoặc sửa tuỳ ý";

const C = WORD_NOTION_TEXT_COLORS;

const STARTER_PAIRS: ReadonlyArray<{ term: string; definition: string }> = [
  {
    term: `🌿 <span style="color: ${C[5].hex}"><strong>resilient</strong></span>`,
    definition: `<span style="color: ${C[5].hex}"><strong>Kiên cường</strong></span> — phục hồi nhanh sau <strong>khó khăn</strong>. 💪`,
  },
  {
    term: `⏳ <span style="color: ${C[3].hex}"><strong>procrastination</strong></span>`,
    definition: `Sự <span style="color: ${C[3].hex}">trì hoãn</span>; <strong>lùi việc</strong> quan trọng quá lâu. 😅`,
  },
  {
    term: `✨ <span style="color: ${C[7].hex}"><strong>nuance</strong></span>`,
    definition: `<strong>Sắc thái</strong> <span style="color: ${C[7].hex}">tinh tế</span> — khác biệt nhỏ khó nhận ra. 🔍`,
  },
  {
    term: `🔎 <span style="color: ${C[6].hex}"><strong>scrutinize</strong></span>`,
    definition: `<span style="color: ${C[6].hex}">Xem xét kỹ</span> — <strong>rà soát</strong> từng chi tiết. 📋`,
  },
];

function starterWord(userId: string, deckId: string, now: number, offset: number, pair: (typeof STARTER_PAIRS)[number]): Word {
  return {
    id: crypto.randomUUID(),
    userId,
    deckId,
    term: sanitizeWordHtml(pair.term),
    definition: sanitizeWordHtml(pair.definition),
    createdAt: now + offset,
    nextReviewAt: now,
    lastReviewedAt: null,
    lastRating: null,
    hardPriority: false,
  };
}

/** Payload cho tài khoản chưa có hàng nào trên Supabase (deck/từ/settings). */
export function createStarterUserPayload(userId: string): UserSrsPayload {
  const now = Date.now();
  const deck: Deck = {
    id: crypto.randomUUID(),
    userId,
    name: STARTER_DECK_NAME,
    createdAt: now,
  };
  const words = STARTER_PAIRS.map((pair, i) => starterWord(userId, deck.id, now, i, pair));
  return {
    userId,
    decks: [deck],
    words,
    settings: { dailyReviewLimit: 15 },
    reviewDayTallies: {},
  };
}
