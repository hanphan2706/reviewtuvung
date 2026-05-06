"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Play, Trash2 } from "lucide-react";
import { RichTextField } from "@/components/rich-text-field";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { WordRichDisplay } from "@/components/word-rich-display";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import { countDue } from "@/lib/srs";
import { useSrsStore } from "@/store/srs-store";
import { useNowTick } from "@/hooks/use-now-tick";
import type { Word } from "@/lib/types";

export function DeckView({ deckId }: { deckId: string }) {
  const router = useRouter();
  const now = useNowTick();

  const decks = useSrsStore((s) => s.decks);
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
      router.replace("/on-tap");
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
    if (!htmlToPlainTrim(editTerm)) return;
    updateWord(id, editTerm, editDefinition);
    cancelEdit();
  };

  if (!activeDeck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-ink-muted">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <SignedInTopBar
          left={
            <Link
              href="/on-tap"
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              Decks
            </Link>
          }
        />

        <section className="w-full rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-950/5">
          <h1 className="text-center font-serif text-2xl font-bold tracking-tight text-[#4b2876]">{activeDeck.name}</h1>
          <p className="mt-2 text-center text-sm text-zinc-500">
            {deckWords.length} từ · {dueInDeck} đến hạn
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
            <Link
              href={`/deck/${deckId}/add-word`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-sm"
            >
              Add word
            </Link>
            <Link
              href={`/deck/${deckId}/review`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <Play className="h-4 w-4" />
              Start review
            </Link>
          </div>

          <ul className="mt-6 space-y-3">
            {[...deckWords]
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((w) => (
                <li key={w.id} className="rounded-lg border border-zinc-100 bg-zinc-50/50 px-4 py-3">
                  {editingId === w.id ? (
                    <div className="flex flex-col gap-3">
                      <RichTextField
                        key={`${w.id}-t`}
                        value={editTerm}
                        onChange={setEditTerm}
                        hint="Bôi đen để chọn màu chữ và/hoặc in đậm."
                        minHeightClass="min-h-14"
                        aria-label="Edit term"
                      />
                      <RichTextField
                        key={`${w.id}-d`}
                        value={editDefinition}
                        onChange={setEditDefinition}
                        hint="Định nghĩa (tuỳ chọn)"
                        minHeightClass="min-h-24"
                        aria-label="Edit definition"
                      />
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => saveEdit(w.id)}
                          disabled={!htmlToPlainTrim(editTerm)}
                          className="cursor-pointer rounded-xl bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="cursor-pointer rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-ink/90"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1 text-ink">
                        <div className="text-sm font-semibold leading-snug text-ink [&_span]:leading-snug">
                          <WordRichDisplay html={w.term} className="" as="div" />
                        </div>
                        {htmlToPlainTrim(w.definition) ? (
                          <div className="mt-1 text-xs leading-relaxed text-ink-muted [&_span]:leading-relaxed">
                            <WordRichDisplay html={w.definition} className="" as="div" />
                          </div>
                        ) : null}
                      </div>
                      <div className="flex shrink-0 items-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => startEdit(w)}
                          className="cursor-pointer rounded-none p-2 text-ink-faint"
                          aria-label="Edit word"
                        >
                          <Pencil className="h-4 w-4" strokeWidth={1.75} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeWord(w.id)}
                          className="cursor-pointer rounded-none p-2 text-ink-faint"
                          aria-label="Remove word"
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
