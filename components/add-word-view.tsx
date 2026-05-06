"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { RichTextField } from "@/components/rich-text-field";
import { SignedInTopBar } from "@/components/signed-in-top-bar";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
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
      router.replace("/on-tap");
      return;
    }
    openDeck(deckId);
  }, [deckId, decks, openDeck, router]);

  const onSave = () => {
    if (!htmlToPlainTrim(term)) return;
    addWord(term, definition);
    setTerm("");
    setDefinition("");
    router.push(`/deck/${deckId}`);
  };

  if (!deck) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 text-sm text-ink-muted">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center px-5 pb-16 pt-10">
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <header className="flex w-full flex-col gap-4">
          <SignedInTopBar
            left={
              <Link
                href={`/deck/${deckId}`}
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-none px-2 py-1.5 text-sm font-medium text-ink-muted"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                {deck.name}
              </Link>
            }
          />
          <h1 className="text-center text-xl font-bold tracking-tight text-[#4b2876]">Add word</h1>
        </header>

        <section className="w-full rounded-lg border border-zinc-200/80 bg-white p-5 shadow-sm ring-1 ring-zinc-950/5">
          <div className="flex flex-col gap-4">
            <RichTextField
              value={term}
              onChange={setTerm}
              hint="Bôi đen để chọn màu chữ và/hoặc in đậm."
              minHeightClass="min-h-14"
              aria-label="Term"
            />
            <RichTextField
              value={definition}
              onChange={setDefinition}
              hint="Định nghĩa (tuỳ chọn)"
              minHeightClass="min-h-24"
              aria-label="Definition"
            />
            <button
              type="button"
              onClick={onSave}
              disabled={!htmlToPlainTrim(term)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm disabled:pointer-events-none disabled:opacity-40"
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
