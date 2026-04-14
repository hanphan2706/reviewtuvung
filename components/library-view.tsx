"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ChevronRight, Play, Plus, Settings2, Trash2 } from "lucide-react";
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
  const deleteDeck = useSrsStore((s) => s.deleteDeck);
  const words = useSrsStore((s) => s.words);
  const closeDeck = useSrsStore((s) => s.closeDeck);

  const [limitDraft, setLimitDraft] = useState<string | null>(null);
  const [showDailyLimit, setShowDailyLimit] = useState(false);
  const [deckCreateOpen, setDeckCreateOpen] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");

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

  const onCreateDeck = () => {
    const id = createDeck(newDeckName);
    setNewDeckName("");
    setDeckCreateOpen(false);
    router.push(`/deck/${id}`);
  };

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <header className="w-full text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">anthichtuhoc</h1>
        </header>

        <div className="flex w-full flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {!deckCreateOpen ? (
              <button
                type="button"
                onClick={() => {
                  setDeckCreateOpen(true);
                  setNewDeckName("");
                }}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                <Plus className="h-4 w-4" strokeWidth={2} />
                Create deck
              </button>
            ) : null}

            {decks.length > 1 ? (
              <Link
                href="/review"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                <Play className="h-4 w-4" strokeWidth={2} />
                Review all decks
              </Link>
            ) : null}

            <button
              type="button"
              onClick={() => setShowDailyLimit((v) => !v)}
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 p-3 text-white shadow-sm transition hover:bg-zinc-800"
              aria-label="Daily review limit"
            >
              <Settings2 className="h-5 w-5 shrink-0" strokeWidth={1.75} />
            </button>
          </div>

          {deckCreateOpen ? (
            <div className="flex w-full max-w-md gap-2">
              <input
                autoFocus
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
                className="min-w-0 flex-1 rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none ring-zinc-300 focus:ring-2"
              />
              <button
                type="button"
                onClick={onCreateDeck}
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-zinc-900 px-4 py-3 text-white shadow-sm transition hover:bg-zinc-800"
                aria-label="Save deck"
              >
                <Check className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          ) : null}

          {showDailyLimit ? (
            <div className="w-full max-w-sm rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm">
              <p className="text-center text-xs text-zinc-500">Only this many cards per session (queue can be larger).</p>
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
                  className="w-24 rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none ring-zinc-300 focus:ring-2"
                />
                <span className="text-sm text-zinc-500">words / session</span>
              </div>
            </div>
          ) : null}
        </div>

        {decks.length > 0 ? (
          <ul className="w-full space-y-2">
            {[...decks]
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((d) => {
                const w = words.filter((x) => x.deckId === d.id);
                const due = countDue(w, now);
                return (
                  <li key={d.id} className="flex items-stretch gap-2">
                    <Link
                      href={`/deck/${d.id}`}
                      className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-2xl border border-zinc-100 bg-white px-4 py-4 text-left shadow-sm transition hover:bg-zinc-50"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-zinc-900">{d.name}</p>
                        <p className="text-xs text-zinc-500">
                          {w.length} {w.length === 1 ? "word" : "words"}
                          {due > 0 ? ` · ${due} due` : ""}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 text-zinc-400" strokeWidth={2} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteDeck(d.id)}
                      className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-zinc-100 bg-white px-3 text-zinc-400 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      aria-label={`Delete deck ${d.name}`}
                    >
                      <Trash2 className="h-5 w-5" strokeWidth={1.75} />
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
