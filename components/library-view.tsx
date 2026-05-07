"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronRight, Pencil, Play, Plus, Settings2, Trash2 } from "lucide-react";
import { LandingSectionLink } from "@/components/landing-section-link";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";

export function LibraryView() {
  const router = useRouter();
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
  const newDeckNameInputRef = useRef<HTMLInputElement>(null);
  const [renameDeckId, setRenameDeckId] = useState<string | null>(null);
  const [renameDeckDraft, setRenameDeckDraft] = useState("");
  const renameInputRef = useRef<HTMLInputElement>(null);

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
    const id = createDeck(newDeckName);
    setNewDeckName("");
    setDeckCreateOpen(false);
    router.push(`/deck/${id}`);
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
          <p className="mt-2 text-center text-sm text-zinc-500">
            <span className="inline-flex max-w-full flex-col items-center gap-y-1 @min-[400px]:w-full @min-[400px]:flex-row @min-[400px]:flex-wrap @min-[400px]:justify-center @min-[400px]:gap-x-1 @min-[400px]:gap-y-0">
              <span>Giới hạn từ cho hôm nay là {settings.dailyReviewLimit}.</span>
              <span className="inline-flex flex-wrap items-center justify-center gap-x-0.5 @min-[400px]:hidden">
                Bạn có thể chỉnh lại ở đây{" "}
                <button
                  type="button"
                  onClick={() => setShowDailyLimit((v) => !v)}
                  className="inline-flex size-[1.35rem] shrink-0 items-center justify-center rounded-md text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/80"
                  aria-label="Mở tùy chọn giới hạn ôn tập mỗi ngày"
                >
                  <Settings2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                </button>
              </span>
              <span className="hidden @min-[400px]:inline">Bạn có thể chỉnh lại trong mục option.</span>
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
              className="col-span-2 row-start-2 box-border hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center justify-self-center rounded-lg bg-zinc-900 text-white shadow-sm @min-[400px]:col-span-1 @min-[400px]:row-start-1 @min-[400px]:inline-flex @min-[400px]:justify-self-auto"
              aria-label="Giới hạn ôn tập mỗi ngày (tùy chọn)"
            >
              <Settings2 className="h-3 w-3 shrink-0 @min-[400px]:h-3.5 @min-[400px]:w-3.5" strokeWidth={1.75} />
            </button>
          </div>

          {deckCreateOpen ? (
            <div className="flex w-full gap-2">
              <input
                ref={newDeckNameInputRef}
                value={newDeckName}
                onChange={(e) => setNewDeckName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onCreateDeck();
                  if (e.key === "Escape") {
                    setDeckCreateOpen(false);
                    setNewDeckName("");
                  }
                }}
                placeholder="Deck name"
                className="min-w-0 flex-1 rounded-xl border border-[#eadff2] bg-[#fbf8fd] px-4 py-3 text-sm text-ink placeholder:text-[#4b2876]/35 outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1"
              />
              <button
                type="button"
                onClick={onCreateDeck}
                className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-white shadow-sm"
                aria-label="Save deck"
              >
                <Check className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          ) : null}

          {showDailyLimit ? (
            <div className="w-full max-w-sm rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-5">
              <p className="text-center text-xs text-ink-muted">Only this many cards per session (queue can be larger).</p>
              <div className="mt-4 flex items-center justify-center gap-3">
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
                  className="w-24 rounded-xl border border-[#eadff2] bg-[#fbf8fd] px-4 py-2.5 text-sm font-medium text-ink outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1"
                />
                <span className="text-sm text-ink-muted">words / session</span>
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
                      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 px-1 py-1">
                        <input
                          ref={renameInputRef}
                          value={renameDeckDraft}
                          onChange={(e) => setRenameDeckDraft(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              commitRenameDeck();
                            }
                            if (e.key === "Escape") {
                              e.preventDefault();
                              cancelRenameDeck();
                            }
                          }}
                          className="min-w-0 flex-1 rounded-lg border border-[#eadff2] bg-white px-3 py-2 text-sm font-semibold text-[#4b2876] outline-none ring-[#4b2876]/20 focus:border-[#4b2876]/40 focus:ring-1"
                          aria-label="Tên deck"
                        />
                        <button
                          type="button"
                          onClick={commitRenameDeck}
                          className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg bg-zinc-900 px-3 py-2 text-white"
                          aria-label="Lưu tên deck"
                        >
                          <Check className="h-5 w-5" strokeWidth={2} />
                        </button>
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
