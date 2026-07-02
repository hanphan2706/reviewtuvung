"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BookOpen, FolderPlus, Lightbulb, Link2, Play } from "lucide-react";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { useVocabularyAuth } from "@/components/vocabulary/vocabulary-auth-context";
import { VocabularyUnitExerciseQuiz } from "@/components/vocabulary/vocabulary-unit-exercise-quiz";
import { VocabularyUnitWordList } from "@/components/vocabulary/vocabulary-unit-word-list";
import { WordRichDisplay } from "@/components/word-rich-display";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import {
  ensureUnitDeck,
  importVocabularyUnit,
  normalizeVocabularyLemma,
} from "@/lib/vocabulary/import-vocabulary-unit";
import { buildUnitDeckName } from "@/lib/vocabulary/vocabulary-unit-registry";
import type { VocabularyTheoryBlock, VocabularyUnit, VocabularyWordPreset } from "@/lib/vocabulary/vocabulary-unit-types";
import { computeDeckLearnedPercent } from "@/lib/vocabulary/vocabulary-library-stats";
import { useSrsStore } from "@/store/srs-store";

type DeckTab = "theory" | "words" | "exercises";

const exerciseProgressKey = (unitId: string) => `vocab-unit-exercise-progress-${unitId}`;

function FeatureIcon({ icon }: { icon: "link" | "lightbulb" | "book" }) {
  const className = "size-5 text-[#47464b]";
  if (icon === "link") return <Link2 className={className} strokeWidth={1.75} />;
  if (icon === "lightbulb") return <Lightbulb className={className} strokeWidth={1.75} />;
  return <BookOpen className={className} strokeWidth={1.75} />;
}

const richTextClass =
  "text-sm leading-relaxed text-[#47464b] [&_b]:font-bold [&_span]:font-semibold [&_span]:text-[#4b2876]";

function splitPrincipleExampleLine(line: string): { english: string; vietnamese?: string } {
  const trimmed = line.trim();
  const lastOpen = trimmed.lastIndexOf(" (");
  if (lastOpen === -1 || !trimmed.endsWith(")")) {
    return { english: trimmed };
  }

  return {
    english: trimmed.slice(0, lastOpen).trim(),
    vietnamese: trimmed.slice(lastOpen + 2, -1).trim(),
  };
}

function PrincipleExampleLine({ line }: { line: string }) {
  const { english, vietnamese } = splitPrincipleExampleLine(line);

  if (!vietnamese) {
    return (
      <p className="text-sm italic leading-relaxed text-[#47464b]">
        &ldquo;{english}&rdquo;
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-[#47464b]">
      <span className="italic">&ldquo;{english}&rdquo;</span>{" "}
      <span className="not-italic text-[#47464b]/80">({vietnamese})</span>
    </p>
  );
}

function PrincipleExampleBox({ html }: { html: string }) {
  const lines = html
    .split(/<br\s*\/?>/i)
    .map((line) => htmlToPlainTrim(line))
    .filter(Boolean);

  return (
    <div className="mt-3 w-full space-y-2 rounded-xl border border-[#E4E4E7] bg-white px-4 py-3">
      {lines.map((line, i) => (
        <PrincipleExampleLine key={`${i}-${line.slice(0, 24)}`} line={line} />
      ))}
    </div>
  );
}

function TheoryBlockView({ block }: { block: VocabularyTheoryBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="font-serif text-xl font-bold tracking-tight text-[#000001] md:text-2xl">{block.text}</h2>
    );
  }
  if (block.type === "paragraph") {
    return <WordRichDisplay html={block.html} as="p" className={`md:text-[15px] md:leading-relaxed ${richTextClass}`} />;
  }
  if (block.type === "feature-cards") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {block.cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-[#E4E4E7] bg-white p-4 md:p-5">
            <FeatureIcon icon={card.icon} />
            <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-[#000001]">{card.title}</h3>
            <WordRichDisplay html={card.description} as="p" className={`mt-2 ${richTextClass}`} />
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "principles") {
    return (
      <ol className="space-y-8">
        {block.items.map((item) => (
          <li key={item.number} className="flex gap-4">
            <span className="shrink-0 font-serif text-2xl font-bold text-[#E4E4E7]">{item.number}</span>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#000001]">{item.title}</h3>
              <WordRichDisplay
                html={item.body}
                as="p"
                className="mt-2 text-[15px] leading-relaxed text-[#47464b] [&_b]:font-bold [&_span]:font-semibold [&_span]:text-[#4b2876]"
              />
              {item.exampleHtml ? <PrincipleExampleBox html={item.exampleHtml} /> : null}
            </div>
          </li>
        ))}
      </ol>
    );
  }
  return null;
}

function blockKey(block: VocabularyTheoryBlock): string {
  if (block.type === "heading") return `h-${block.text}`;
  if (block.type === "feature-cards") return `fc-${block.cards.map((c) => c.title).join("-")}`;
  if (block.type === "principles") return `p-${block.items[0]?.number ?? "x"}`;
  return `para-${block.type === "paragraph" ? block.html.slice(0, 24) : "x"}`;
}

function splitTheoryBlocks(blocks: readonly VocabularyTheoryBlock[]) {
  const principlesIdx = blocks.findIndex((b) => b.type === "principles");
  if (principlesIdx < 0) {
    return { lead: [...blocks], principlesSection: [] as VocabularyTheoryBlock[] };
  }
  const headingIdx =
    principlesIdx > 0 && blocks[principlesIdx - 1]?.type === "heading" ? principlesIdx - 1 : principlesIdx;
  return {
    lead: blocks.slice(0, headingIdx),
    principlesSection: blocks.slice(headingIdx),
  };
}

function UnitProgressCard({
  wordMasteredCount,
  totalWords,
  wordProgressPct,
  importMessage,
  onStartReview,
  onImport,
}: {
  wordMasteredCount: number;
  totalWords: number;
  wordProgressPct: number;
  importMessage: string | null;
  onStartReview: () => void;
  onImport: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#E4E4E7] bg-white px-6 py-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#47464b]">Tiến độ từ vựng</p>
      <p className="mt-3 font-serif text-4xl font-bold tabular-nums text-[#000001]">
        {wordMasteredCount}
        <span className="text-xl font-semibold text-[#47464b]">/{totalWords}</span>
      </p>
      <p className="mt-1 text-sm font-medium text-[#47464b]">từ đã học</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#ece7f2]">
        <div
          className="h-full rounded-full bg-[#4b2876] transition-all"
          style={{ width: `${wordProgressPct}%` }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onStartReview}
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-4 text-[11px] font-bold uppercase tracking-wide text-white hover:bg-[#1a1a1a]"
        >
          <Play className="size-4" fill="currentColor" strokeWidth={0} />
          Bắt đầu ôn tập
        </button>
        <button
          type="button"
          onClick={onImport}
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#E4E4E7] bg-white px-4 text-[11px] font-bold uppercase tracking-wide text-[#000001] hover:border-[#0a0a0a]/20"
        >
          <FolderPlus className="size-4" strokeWidth={1.75} />
          Thêm vào deck của tôi
        </button>
      </div>
      {importMessage ? <p className="mt-3 text-center text-xs leading-relaxed text-emerald-700">{importMessage}</p> : null}
    </div>
  );
}

export function VocabularyCuratedDeckView({ unit }: { unit: VocabularyUnit }) {
  const router = useRouter();
  const pathname = usePathname();
  const { runWithAuth } = useVocabularyAuth();
  const decks = useSrsStore((s) => s.decks);
  const words = useSrsStore((s) => s.words);
  const createDeck = useSrsStore((s) => s.createDeck);
  const addWordToDeck = useSrsStore((s) => s.addWordToDeck);

  const [tab, setTab] = useState<DeckTab>("theory");
  const [checkedExercises, setCheckedExercises] = useState<Record<string, boolean>>({});
  const [importMessage, setImportMessage] = useState<string | null>(null);

  const theoryBlocks = unit.theory;
  const { lead: theoryLeadBlocks, principlesSection: theoryPrinciplesBlocks } = useMemo(
    () => splitTheoryBlocks(theoryBlocks),
    [theoryBlocks],
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(exerciseProgressKey(unit.id));
      if (raw) setCheckedExercises(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
  }, [unit.id]);

  useEffect(() => {
    try {
      localStorage.setItem(exerciseProgressKey(unit.id), JSON.stringify(checkedExercises));
    } catch {
      /* ignore */
    }
  }, [checkedExercises, unit.id]);

  const deckName = buildUnitDeckName(unit);
  const userDeck = useMemo(() => decks.find((d) => d.name === deckName) ?? null, [decks, deckName]);
  const userDeckWords = useMemo(
    () => (userDeck ? words.filter((w) => w.deckId === userDeck.id) : []),
    [userDeck, words],
  );
  const wordMasteredCount = useMemo(
    () => userDeckWords.filter((w) => w.lastReviewedAt != null).length,
    [userDeckWords],
  );
  const totalWords = unit.words.length;
  const wordProgressPct = userDeck ? computeDeckLearnedPercent(userDeckWords) : 0;

  const deckLemmaSet = useMemo(
    () => new Set(userDeckWords.map((w) => normalizeVocabularyLemma(w.term))),
    [userDeckWords],
  );

  const handleImport = useCallback(() => {
    runWithAuth(pathname, () => {
      const result = importVocabularyUnit(
        unit,
        { decks, words, createDeck, addWordToDeck },
        { skipGlobalDuplicates: true, reuseExistingDeckByName: true },
      );
      setImportMessage(
        result.added > 0
          ? `Đã thêm ${result.added} từ vào deck của bạn.`
          : result.skipped > 0
            ? "Các từ trong bộ này đã có trong deck của bạn."
            : "Đã sẵn sàng trong deck của bạn.",
      );
    });
  }, [unit, decks, words, createDeck, addWordToDeck, pathname, runWithAuth]);

  const handleStartReview = useCallback(() => {
    runWithAuth(pathname, () => {
      const { deckId } = ensureUnitDeck(unit, { decks, createDeck });
      router.push(`/deck/${deckId}/review?mode=flashcard`);
    });
  }, [unit, decks, createDeck, router, pathname, runWithAuth]);

  const handleAddWord = useCallback(
    (preset: VocabularyWordPreset) => {
      runWithAuth(pathname, () => {
        const lemma = normalizeVocabularyLemma(preset.term);
        if (deckLemmaSet.has(lemma)) {
          setImportMessage(`«${preset.term}» đã có trong deck.`);
          return;
        }
        const { deckId } = ensureUnitDeck(unit, { decks, createDeck });
        const definition = preset.example
          ? `${preset.definition}<br><b>${preset.example}</b>`
          : preset.definition;
        addWordToDeck(deckId, preset.term, definition);
        setImportMessage(`Đã thêm «${preset.term}» vào deck.`);
      });
    },
    [unit, decks, createDeck, addWordToDeck, deckLemmaSet, pathname, runWithAuth],
  );

  const tabs: { id: DeckTab; label: string }[] = [
    { id: "theory", label: "Lý thuyết" },
    { id: "words", label: "Danh sách từ" },
    { id: "exercises", label: "Bài tập" },
  ];

  return (
    <div className={studyHubSubpageContentClass}>
      <div className="max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]">{unit.sourceBook}</p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#000001] md:text-4xl">{unit.title}</h1>
      </div>

      <div className="mt-10 flex gap-6 border-b border-[#E4E4E7]">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`pb-3 text-[11px] font-bold uppercase tracking-[0.14em] transition ${
              tab === t.id
                ? "border-b-2 border-[#0a0a0a] text-[#000001]"
                : "text-[#47464b]/60 hover:text-[#47464b]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "theory" ? (
        <div className="mt-6 space-y-8">
          {theoryLeadBlocks.map((block, i) => (
            <TheoryBlockView key={`lead-${i}-${blockKey(block)}`} block={block} />
          ))}

          {theoryPrinciplesBlocks.length > 0 ? (
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] lg:gap-10">
              <div className="min-w-0 space-y-8">
                {theoryPrinciplesBlocks.map((block, i) => (
                  <TheoryBlockView key={`principles-${i}-${blockKey(block)}`} block={block} />
                ))}
              </div>
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <UnitProgressCard
                  wordMasteredCount={wordMasteredCount}
                  totalWords={totalWords}
                  wordProgressPct={wordProgressPct}
                  importMessage={importMessage}
                  onStartReview={handleStartReview}
                  onImport={handleImport}
                />
              </aside>
            </div>
          ) : (
            <aside className="max-w-sm">
              <UnitProgressCard
                wordMasteredCount={wordMasteredCount}
                totalWords={totalWords}
                wordProgressPct={wordProgressPct}
                importMessage={importMessage}
                onStartReview={handleStartReview}
                onImport={handleImport}
              />
            </aside>
          )}
        </div>
      ) : null}

      {tab === "words" || tab === "exercises" ? (
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] lg:gap-10">
          <div className="min-w-0">
            {tab === "words" ? (
              <VocabularyUnitWordList words={unit.words} onAddWord={handleAddWord} addedLemmaSet={deckLemmaSet} />
            ) : (
              <VocabularyUnitExerciseQuiz
                exercises={unit.exercises}
                completed={checkedExercises}
                onComplete={(id) => setCheckedExercises((prev) => ({ ...prev, [id]: true }))}
              />
            )}
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <UnitProgressCard
              wordMasteredCount={wordMasteredCount}
              totalWords={totalWords}
              wordProgressPct={wordProgressPct}
              importMessage={importMessage}
              onStartReview={handleStartReview}
              onImport={handleImport}
            />
          </aside>
        </div>
      ) : null}
    </div>
  );
}
