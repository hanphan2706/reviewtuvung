"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useSrsStore } from "@/store/srs-store";

export function AddWordView({ deckId }: { deckId: string }) {
  const router = useRouter();
  const decks = useSrsStore((s) => s.decks);
  const openDeck = useSrsStore((s) => s.openDeck);
  const addWord = useSrsStore((s) => s.addWord);

  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const deck = decks.find((d) => d.id === deckId) ?? null;

  useEffect(() => {
    if (!decks.some((d) => d.id === deckId)) {
      router.replace("/");
      return;
    }
    openDeck(deckId);
  }, [deckId, decks, openDeck, router]);

  const onSave = () => {
    const t = term.trim();
    if (!t) return;
    addWord(term, definition);
    setTerm("");
    setDefinition("");
    router.push(`/deck/${deckId}`);
  };

  if (!deck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-zinc-500">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <header className="flex w-full flex-col gap-4">
          <Link
            href={`/deck/${deckId}`}
            className="inline-flex w-fit items-center gap-2 rounded-2xl px-2 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-200/60 hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            {deck.name}
          </Link>
          <h1 className="text-center text-xl font-semibold tracking-tight text-zinc-900">Add word</h1>
        </header>

        <section className="w-full rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && term.trim()) onSave();
              }}
              placeholder="Term"
              className="rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none ring-zinc-300 focus:ring-2"
            />
            <input
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && term.trim()) onSave();
              }}
              placeholder="Definition (optional)"
              className="rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none ring-zinc-300 focus:ring-2"
            />
            <button
              type="button"
              onClick={onSave}
              disabled={!term.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:pointer-events-none disabled:opacity-40"
            >
              <BookOpen className="h-4 w-4" strokeWidth={2} />
              Save word
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
