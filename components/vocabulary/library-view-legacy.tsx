"use client";

/**
 * Design thư viện từ vựng cũ (mobile-first, một cột) — giữ lại để tái sử dụng.
 * Trang chính hiện dùng `VocabularyLibraryView`.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Pencil, Play, Plus, Settings2, Trash2, X } from "lucide-react";
import { EmojiPickerAnchor } from "@/components/emoji-picker-anchor";
import { LandingSectionLink } from "@/components/landing-section-link";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";
import { pickRandomPhraseEmoji } from "@/lib/phrase-emojis";

const VOCAB_HEADLINE_ROTATIONS = [
  "Hôm nay có một vài từ đợi bạn ôn nè.",
  "Bạn có dùng được các từ này một cách tự nhiên không?",
  "Chỉ 2 phút để cải thiện trí nhớ.",
  "Bạn sắp chuyển được vài từ sang active vocabulary rồi đó!",
  "Hôm nay tiếp tục củng cố trí nhớ nha!",
] as const;

export function LibraryViewLegacy() {
  const now = useNowTick();
  const decks = useSrsStore((s) => s.decks);
  const settings = useSrsStore((s) => s.settings);
  const setDailyReviewLimit = useSrsStore((s) => s.setDailyReviewLimit);
  const createDeck = useSrsStore((s) => s.createDeck);
  const renameDeck = useSrsStore((s) => s.renameDeck);
  const deleteDeck = useSrsStore((s) => s.deleteDeck);
  const words = useSrsStore((s) => s.words);
  const closeDeck = useSrsStore((s) => s.closeDeck);

  const [limitDraft, setLimitDraft] = useState<string | null>(null);
  const [showDailyLimit, setShowDailyLimit] = useState(false);
  const [deckCreateOpen, setDeckCreateOpen] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  const newDeckNameInputRef = useRef<HTMLTextAreaElement>(null);
  const [renameDeckId, setRenameDeckId] = useState<string | null>(null);
  const [renameDeckDraft, setRenameDeckDraft] = useState("");
  const renameInputRef = useRef<HTMLTextAreaElement>(null);

  const [vocabHeadlineIndex] = useState(() => Math.floor(Math.random() * VOCAB_HEADLINE_ROTATIONS.length));
  const [headlineTailEmoji] = useState(() => pickRandomPhraseEmoji());

  const limitDisplay = limitDraft ?? String(settings.dailyReviewLimit);

  const saveLimitFromRaw = (raw: string) => {
    const n = Number.parseInt(raw, 10);
    setDailyReviewLimit(n);
    setLimitDraft(null);
  };

  const onLimitBlur = () => {
    if (limitDraft === null) return;
    saveLimitFromRaw(limitDisplay);
  };

  useEffect(() => {
    closeDeck();
  }, [closeDeck]);

  useEffect(() => {
    if (deckCreateOpen) {
      newDeckNameInputRef.current?.focus();
    }
  }, [deckCreateOpen]);

  useEffect(() => {
    if (renameDeckId) {
      renameInputRef.current?.focus();
      renameInputRef.current?.select();
    }
  }, [renameDeckId]);

  const onCreateDeck = () => {
    createDeck(newDeckName);
    setNewDeckName("");
    setDeckCreateOpen(false);
  };

  const commitRenameDeck = () => {
    if (!renameDeckId) return;
    renameDeck(renameDeckId, renameDeckDraft);
    setRenameDeckId(null);
    setRenameDeckDraft("");
  };

  const cancelRenameDeck = () => {
    setRenameDeckId(null);
    setRenameDeckDraft("");
  };

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
      });
    },
    [newDeckName],
  );

  const insertEmojiRename = useCallback(
    (emoji: string) => {
      const el = renameInputRef.current;
      let start = renameDeckDraft.length;
      let end = renameDeckDraft.length;
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
      const next = renameDeckDraft.slice(0, start) + emoji + renameDeckDraft.slice(end);
      setRenameDeckDraft(next);
      queueMicrotask(() => {
        const input = renameInputRef.current;
        input?.focus();
        try {
          input?.setSelectionRange(caret, caret);
        } catch {
          /* ignore */
        }
      });
    },
    [renameDeckDraft],
  );

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-6 pt-10">
      <div className="@container flex w-full max-w-md flex-col items-center gap-6">
        <SignedInTopBar
          left={
            <LandingSectionLink
              sectionId="tu-hoc"
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
            >
              ← Tự học
            </LandingSectionLink>
          }
        />

        <section className="w-full rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-950/5">
          <h1 className="text-center font-serif text-2xl font-bold tracking-tight text-[#4b2876]">Từ vựng</h1>
          <p className="mt-4 text-center text-sm text-zinc-500">
            <span className="inline-flex max-w-full flex-col items-center gap-y-1 text-pretty">
              <span>
                {VOCAB_HEADLINE_ROTATIONS[vocabHeadlineIndex]}{" "}
                <span aria-hidden>{headlineTailEmoji}</span>
              </span>
              <span className="inline-flex flex-wrap items-center justify-center gap-x-0.5 @min-[400px]:hidden">
                Bạn có thể chỉnh lại giới hạn từ ở đây{" "}
                <button
                  type="button"
                  onClick={() => setShowDailyLimit((v) => !v)}
                  className="inline-flex size-[1.35rem] shrink-0 items-center justify-center rounded-md text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/80"
                  aria-label="Mở tùy chọn giới hạn ôn tập mỗi ngày"
                >
                  <Settings2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                </button>
              </span>
            </span>
          </p>

        <div className="mt-6 flex w-full flex-col items-center gap-3">
          {/* Cột hẹp (dưới 400px theo @container): 2 nút + bánh răng trong subheadline. Đủ rộng: một hàng cả ba nút */}
          <div className="mx-auto grid w-full min-w-0 grid-cols-2 gap-x-1.5 gap-y-1.5 @min-[400px]:flex @min-[400px]:w-auto @min-[400px]:max-w-full @min-[400px]:flex-row @min-[400px]:flex-nowrap @min-[400px]:items-center @min-[400px]:justify-center @min-[400px]:gap-2">
            {!deckCreateOpen ? (
              <button
                type="button"
                onClick={() => {
                  setDeckCreateOpen(true);
                  setNewDeckName("");
                }}
                className="col-start-1 row-start-1 box-border inline-flex h-10 min-w-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-zinc-900 px-1.5 py-0 text-center text-xs font-semibold leading-none text-white shadow-sm @max-[320px]:text-[10px] @min-[400px]:shrink-0 @min-[400px]:px-3"
              >
                <Plus className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                Tạo deck mới
              </button>
            ) : null}

            <Link
              href="/review"
              className={`box-border inline-flex h-10 min-w-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-zinc-900 px-1.5 py-0 text-center text-xs font-semibold leading-none text-white shadow-sm @max-[320px]:text-[10px] @min-[400px]:shrink-0 @min-[400px]:px-3 ${deckCreateOpen ? "col-span-2 col-start-1 row-start-1" : "col-start-2 row-start-1"}`}
            >
              <Play className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              Ôn tập toàn bộ deck
            </Link>

            <button
              type="button"
              onClick={() => setShowDailyLimit((v) => !v)}
              className="col-span-2 row-start-2 box-border hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center justify-self-center rounded-lg bg-zinc-900 text-white shadow-sm @min-[400px]:col-span-1 @min-[400px]:row-start-1 @min-[400px]:inline-flex @min-[400px]:h-10 @min-[400px]:w-10 @min-[400px]:justify-self-auto"
              aria-label="Giới hạn ôn tập mỗi ngày (tùy chọn)"
            >
              <Settings2 className="h-3 w-3 shrink-0 @min-[400px]:h-3.5 @min-[400px]:w-3.5" strokeWidth={1.75} />
            </button>
          </div>

          {deckCreateOpen ? (
            <div className="flex w-full flex-col gap-2">
              <div className="relative min-w-0 flex-1">
                <textarea
                  ref={newDeckNameInputRef}
                  value={newDeckName}
                  rows={2}
                  onChange={(e) => setNewDeckName(e.target.value)}
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
                  placeholder="Deck name"
                  className="min-h-[3.5rem] w-full resize-none wrap-break-word rounded-xl border border-[#eadff2] bg-[#fbf8fd] py-2.5 pl-4 pr-11 text-base leading-snug text-ink placeholder:text-[#4b2876]/35 outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1"
                />
                <EmojiPickerAnchor
                  placement="center-right"
                  onPick={insertEmojiNewDeck}
                  aria-label="Chèn emoji vào tên deck"
                />
              </div>
              <div className="flex shrink-0 items-stretch justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setDeckCreateOpen(false);
                    setNewDeckName("");
                  }}
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-3 text-ink shadow-sm"
                  aria-label="Huỷ"
                >
                  <X className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={onCreateDeck}
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-white shadow-sm"
                  aria-label="Lưu deck"
                >
                  <Check className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>
            </div>
          ) : null}

          {showDailyLimit ? (
            <div className="w-full max-w-sm rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-5 @min-[400px]:mx-auto @min-[400px]:max-w-[min(100%,220px)] @min-[400px]:p-3">
              <p className="text-center text-[11px] leading-snug text-ink-muted @min-[400px]:text-[10px]">
                Số thẻ tối đa mỗi phiên (hàng đợi có thể dài hơn).
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 @min-[400px]:mt-2 @min-[400px]:gap-2">
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={limitDisplay}
                  onFocus={() => setLimitDraft(String(settings.dailyReviewLimit))}
                  onChange={(e) => setLimitDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const raw = (e.target as HTMLInputElement).value;
                      saveLimitFromRaw(raw);
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  onBlur={onLimitBlur}
                  className="w-24 rounded-xl border border-[#eadff2] bg-[#fbf8fd] px-4 py-2.5 text-base font-medium text-ink outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1 @min-[400px]:w-14 @min-[400px]:px-2 @min-[400px]:py-1.5 @min-[400px]:text-sm"
                />
                <span className="text-xs text-ink-muted @min-[400px]:text-[10px]">từ / phiên</span>
              </div>
            </div>
          ) : null}
        </div>

        {decks.length > 0 ? (
          <ul className="mt-6 flex w-full flex-col gap-3">
            {[...decks]
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((d) => {
                const w = words.filter((x) => x.deckId === d.id);
                const due = countDue(w, now);
                return (
                  <li key={d.id} className="flex items-stretch gap-1 rounded-xl border border-zinc-200/60 bg-zinc-50/40 px-2 py-2">
                    {renameDeckId === d.id ? (
                      <div className="flex min-w-0 flex-1 flex-col gap-2 px-1 py-1">
                        <div className="relative min-w-0 flex-1">
                          <textarea
                            ref={renameInputRef}
                            value={renameDeckDraft}
                            rows={2}
                            onChange={(e) => setRenameDeckDraft(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                commitRenameDeck();
                              }
                              if (e.key === "Escape") {
                                e.preventDefault();
                                cancelRenameDeck();
                              }
                            }}
                            className="min-h-[3.25rem] w-full resize-none wrap-break-word rounded-lg border border-[#eadff2] bg-white py-2 pl-3 pr-11 text-base font-semibold leading-snug text-[#4b2876] outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1"
                            aria-label="Tên deck"
                          />
                          <EmojiPickerAnchor
                            placement="center-right"
                            onPick={insertEmojiRename}
                            aria-label="Chèn emoji vào tên deck"
                          />
                        </div>
                        <div className="flex shrink-0 items-stretch justify-end gap-2">
                          <button
                            type="button"
                            onClick={cancelRenameDeck}
                            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-2 text-ink shadow-sm"
                            aria-label="Huỷ"
                          >
                            <X className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                          </button>
                          <button
                            type="button"
                            onClick={commitRenameDeck}
                            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg bg-zinc-900 px-3 py-2 text-white"
                            aria-label="Lưu tên deck"
                          >
                            <Check className="h-5 w-5" strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={`/deck/${d.id}`}
                        className="flex min-w-0 flex-1 cursor-pointer items-center justify-between gap-3 rounded-lg px-2 py-2 text-left"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#4b2876]">{d.name}</p>
                          <p className="text-xs text-ink-muted">
                            {w.length} từ · {due} đến hạn
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 shrink-0 text-ink-faint" strokeWidth={2} />
                      </Link>
                    )}
                    {renameDeckId === d.id ? null : (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setRenameDeckId(d.id);
                            setRenameDeckDraft(d.name);
                          }}
                          className="-mr-1 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg px-3 py-2 text-ink-faint hover:text-[#4b2876]"
                          aria-label={`Đổi tên deck ${d.name}`}
                        >
                          <Pencil className="h-5 w-5" strokeWidth={1.75} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteDeck(d.id)}
                          className="-mr-1 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg px-3 py-2 text-ink-faint"
                          aria-label={`Delete deck ${d.name}`}
                        >
                          <Trash2 className="h-5 w-5" strokeWidth={1.75} />
                        </button>
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
        ) : null}
        </section>
      </div>
    </div>
  );
}
