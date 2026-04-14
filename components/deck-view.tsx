"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Play, Trash2 } from "lucide-react";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";
import type { Word } from "@/lib/types";

export function DeckView({ deckId }: { deckId: string }) {
  const router = useRouter();
  const now = useNowTick();

  const decks = useSrsStore((s) => s.decks);
  const settings = useSrsStore((s) => s.settings);
  const openDeck = useSrsStore((s) => s.openDeck);
  const removeWord = useSrsStore((s) => s.removeWord);
  const updateWord = useSrsStore((s) => s.updateWord);
  const words = useSrsStore((s) => s.words);
  const deckWords = useMemo(() => words.filter((w) => w.deckId === deckId), [words, deckId]);

  const activeDeck = decks.find((d) => d.id === deckId) ?? null;
  const dueInDeck = countDue(deckWords, now);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTerm, setEditTerm] = useState("");
  const [editDefinition, setEditDefinition] = useState("");

  useEffect(() => {
    if (!decks.some((d) => d.id === deckId)) {
      router.replace("/");
      return;
    }
    openDeck(deckId);
  }, [deckId, decks, openDeck, router]);

  const startEdit = (w: Word) => {
    setEditingId(w.id);
    setEditTerm(w.term);
    setEditDefinition(w.definition);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTerm("");
    setEditDefinition("");
  };

  const saveEdit = (id: string) => {
    updateWord(id, editTerm, editDefinition);
    cancelEdit();
  };

  if (!activeDeck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-zinc-500">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <header className="flex w-full flex-col items-center gap-4">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 self-start rounded-2xl px-2 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-200/60 hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Decks
          </Link>
          <div className="w-full text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{activeDeck.name}</h1>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {dueInDeck} due · limit {settings.dailyReviewLimit} per day
            </p>
          </div>
        </header>

        <section className="w-full rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm">
          <h2 className="text-center text-sm font-semibold text-zinc-900">Words in this deck ({deckWords.length})</h2>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
            <Link
              href={`/deck/${deckId}/add-word`}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50"
            >
              Add word
            </Link>
            <Link
              href={`/deck/${deckId}/review`}
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              <Play className="h-4 w-4" />
              Start review
            </Link>
          </div>

          <ul className="mt-6 space-y-3">
            {[...deckWords]
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((w) => (
                <li
                  key={w.id}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50/50 px-4 py-3"
                >
                  {editingId === w.id ? (
                    <div className="flex flex-col gap-3">
                      <input
                        value={editTerm}
                        onChange={(e) => setEditTerm(e.target.value)}
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-black outline-none ring-zinc-300 focus:ring-2"
                        placeholder="Term"
                      />
                      <input
                        value={editDefinition}
                        onChange={(e) => setEditDefinition(e.target.value)}
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-black outline-none ring-zinc-300 focus:ring-2"
                        placeholder="Definition (optional)"
                      />
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => saveEdit(w.id)}
                          disabled={!editTerm.trim()}
                          className="rounded-xl bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-zinc-900">{w.term}</p>
                        {w.definition ? <p className="text-xs text-zinc-500">{w.definition}</p> : null}
                      </div>
                      <div className="flex shrink-0 items-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => startEdit(w)}
                          className="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-200/80 hover:text-zinc-700"
                          aria-label={`Edit ${w.term}`}
                        >
                          <Pencil className="h-4 w-4" strokeWidth={1.75} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeWord(w.id)}
                          className="rounded-xl p-2 text-zinc-400 transition hover:bg-red-50 hover:text-red-600"
                          aria-label={`Remove ${w.term}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
