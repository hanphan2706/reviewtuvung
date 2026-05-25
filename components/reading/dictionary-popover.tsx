"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Loader2,
  Plus,
  Volume2,
  X,
} from "lucide-react";
import type { SelectionAnchor } from "@/components/reading/use-article-text-selection";
import { formatLookupForDeck, type LookupPronunciation, type ReadingLookupResult } from "@/lib/reading/lookup-types";
import { htmlToPlainTrim } from "@/lib/sanitize-word-html";
import type { Deck } from "@/lib/types";
import { useSrsStore } from "@/store/srs-store";

type PopoverPhase = "lookup" | "pick-deck" | "add" | "done";

type DictionaryPopoverProps = {
  anchor: SelectionAnchor | null;
  lookup: ReadingLookupResult | null;
  loading: boolean;
  canAddWord: boolean;
  decks: Deck[];
  onClose: () => void;
};

function PronunciationButton({ label, data }: { label: string; data: LookupPronunciation }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (!data.audioUrl) return;
    if (!audioRef.current) audioRef.current = new Audio(data.audioUrl);
    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => undefined);
  }, [data.audioUrl]);

  if (!data.ipa && !data.audioUrl) return null;

  const Root = "di" + "v" as "div";

  return (
    <Root className="flex items-center gap-2 text-sm text-[#47464b]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">{label}</span>
      {data.audioUrl ? (
        <button
          type="button"
          onClick={play}
          className="inline-flex size-7 items-center justify-center rounded-md text-[#47464b] hover:bg-zinc-100"
          aria-label={`Phát âm ${label}`}
        >
          <Volume2 className="size-4" aria-hidden />
        </button>
      ) : null}
      {data.ipa ? <span className="font-mono text-xs text-[#47464b]">{data.ipa}</span> : null}
    </Root>
  );
}

function popoverLayout(anchor: SelectionAnchor) {
  const pad = 12;
  const gap = 8;
  const maxW = 380;

  const left = Math.min(
    Math.max(pad, anchor.rect.left + anchor.rect.width / 2 - maxW / 2),
    window.innerWidth - maxW - pad,
  );

  const spaceBelow = window.innerHeight - anchor.rect.bottom - gap - pad;
  const spaceAbove = anchor.rect.top - gap - pad;
  const flipAbove = spaceBelow < spaceAbove;
  const maxHeight = Math.max(200, Math.min(flipAbove ? spaceAbove : spaceBelow, 520));

  if (flipAbove) {
    return {
      left,
      top: undefined as number | undefined,
      bottom: window.innerHeight - anchor.rect.top + gap,
      maxHeight,
    };
  }

  return {
    left,
    top: anchor.rect.bottom + gap,
    bottom: undefined as number | undefined,
    maxHeight,
  };
}

function LookupBody({
  lookup,
  loading,
}: {
  lookup: ReadingLookupResult;
  loading: boolean;
}) {
  const { pronunciation, senses, paraphrases, phraseGlossVi, error, kind } = lookup;
  const isTranslateOnly = phraseGlossVi && senses.length === 0 && !error;
  const showPronunciation = kind === "word" && pronunciation && (pronunciation.us || pronunciation.uk);
  const Root = "di" + "v" as "div";

  if (loading) {
    return (
      <p className="flex items-center gap-2 text-sm text-[#47464b]">
        <Loader2 className="size-4 animate-spin" aria-hidden />
        Đang tra…
      </p>
    );
  }

  if (error) {
    return <p className="text-sm text-[#47464b]">{error}</p>;
  }

  return (
    <>
      {showPronunciation ? (
        <Root className="mb-4 flex flex-wrap gap-4 border-b border-[#f1eded] pb-3">
          {pronunciation?.us ? <PronunciationButton label="US" data={pronunciation.us} /> : null}
          {pronunciation?.uk ? <PronunciationButton label="UK" data={pronunciation.uk} /> : null}
        </Root>
      ) : null}

      {phraseGlossVi && (kind === "phrase" || isTranslateOnly) ? (
        <Root className="rounded-lg bg-[#f7f3f2] px-3 py-3">
          {isTranslateOnly ? (
            <p className="text-sm italic leading-relaxed text-[#47464b]">&ldquo;{lookup.query}&rdquo;</p>
          ) : null}
          <p
            className={`text-sm font-medium leading-relaxed text-[#1c1b1c] ${
              isTranslateOnly ? "mt-2" : ""
            }`}
          >
            {phraseGlossVi}
          </p>
        </Root>
      ) : null}

      {senses.length > 0 ? (
        <Root className="space-y-4">
          {senses.map((sense) => (
            <Root
              key={`${sense.partOfSpeech}-${sense.definitionEn.slice(0, 40)}`}
              className="border-b border-[#f1eded] pb-4 last:border-0 last:pb-0"
            >
              <p className="text-xs font-medium lowercase text-[#c45c26]">{sense.partOfSpeech}</p>
              {sense.glossVi && sense.glossViReliable !== false ? (
                <p className="mt-1 text-sm font-semibold leading-relaxed text-[#1c1b1c]">{sense.glossVi}</p>
              ) : null}
              <p
                className={`text-sm leading-relaxed text-[#47464b] ${
                  sense.glossVi && sense.glossViReliable !== false ? "mt-1" : "mt-1 font-medium text-[#1c1b1c]"
                }`}
              >
                {sense.definitionEn}
              </p>
              {!sense.glossVi && sense.glossViReliable === false ? (
                <p className="mt-1 text-[11px] leading-snug text-[#71717A]">
                  Chưa có nghĩa tiếng Việt ngắn — đọc định nghĩa tiếng Anh.
                </p>
              ) : null}
              {sense.examples.map((ex) => (
                <Root key={ex.en} className="mt-2 rounded-md bg-[#fafafa] px-3 py-2 text-sm">
                  <p className="italic text-[#47464b]">&ldquo;{ex.en}&rdquo;</p>
                  {ex.vi ? <p className="mt-1 text-[#1c1b1c]">{ex.vi}</p> : null}
                </Root>
              ))}
            </Root>
          ))}
        </Root>
      ) : null}

      {paraphrases.length > 0 ? (
        <Root className="mt-4 border-t border-[#f1eded] pt-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
            Diễn đạt khác (paraphrase)
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {paraphrases.map((p) => (
              <li
                key={p.en}
                className="rounded-md border border-[#E4E4E7] bg-[#fafafa] px-2.5 py-1.5 text-sm leading-snug"
              >
                <span className="font-medium text-[#1c1b1c]">{p.en}</span>
                {p.vi ? <span className="mt-0.5 block text-xs text-[#47464b]">{p.vi}</span> : null}
              </li>
            ))}
          </ul>
        </Root>
      ) : null}
    </>
  );
}

export function DictionaryPopover({
  anchor,
  lookup,
  loading,
  canAddWord,
  decks,
  onClose,
}: DictionaryPopoverProps) {
  const createDeck = useSrsStore((s) => s.createDeck);
  const addWordToDeck = useSrsStore((s) => s.addWordToDeck);

  const [phase, setPhase] = useState<PopoverPhase>("lookup");
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [creatingDeck, setCreatingDeck] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const openedAtRef = useRef(0);
  const newDeckInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPhase("lookup");
    setCreatingDeck(false);
    setNewDeckName("");
  }, [lookup?.query, lookup?.kind]);

  useEffect(() => {
    setSelectedDeckId((prev) =>
      prev && decks.some((d) => d.id === prev) ? prev : (decks[0]?.id ?? null),
    );
  }, [decks]);

  useEffect(() => {
    if (!lookup || phase === "lookup" || phase === "pick-deck") return;
    setTerm(lookup.query);
    setDefinition(formatLookupForDeck(lookup));
  }, [lookup, phase]);

  useEffect(() => {
    if (creatingDeck) newDeckInputRef.current?.focus();
  }, [creatingDeck]);

  useEffect(() => {
    openedAtRef.current = performance.now();
  }, [lookup?.query]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (performance.now() - openedAtRef.current < 120) return;
      const panel = panelRef.current;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (panel?.contains(target)) return;
      onClose();
    };
    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [onClose]);

  if (!anchor || !lookup) return null;

  const layout = popoverLayout(anchor);
  const isTranslateOnly = Boolean(lookup.phraseGlossVi && lookup.senses.length === 0 && !lookup.error);
  const showAddButton =
    canAddWord &&
    !lookup.error &&
    !isTranslateOnly &&
    (lookup.kind === "word" || (lookup.kind === "phrase" && Boolean(lookup.phraseGlossVi)));
  const selectedDeck = decks.find((d) => d.id === selectedDeckId) ?? null;

  const onCreateDeck = () => {
    const name = newDeckName.trim();
    if (!name) return;
    const id = createDeck(name);
    setSelectedDeckId(id);
    setNewDeckName("");
    setCreatingDeck(false);
  };

  const onSaveWord = () => {
    if (!selectedDeckId || !htmlToPlainTrim(term)) return;
    addWordToDeck(selectedDeckId, term, definition);
    setPhase("done");
  };

  const Root = "di" + "v" as "div";

  const headerTitle =
    phase === "add"
      ? "Thêm từ"
      : phase === "pick-deck"
        ? "Thêm vào bộ thẻ"
        : phase === "done"
          ? "Đã lưu"
          : lookup.query;

  const pickDeckHeader = phase === "pick-deck";

  return (
    <Root
      ref={panelRef}
      data-reading-dictionary-popover
      aria-label="Từ điển"
      className="fixed z-[100] flex w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-xl border border-[#E4E4E7] bg-white shadow-[0_8px_30px_rgb(0_0_0/0.12)]"
      style={{
        left: layout.left,
        top: layout.top,
        bottom: layout.bottom,
        maxHeight: layout.maxHeight,
      }}
    >
      <Root className="flex shrink-0 items-center gap-1 border-b border-[#f1eded] px-3 py-2.5">
        {phase !== "lookup" ? (
          <button
            type="button"
            onClick={() => {
              if (phase === "add") setPhase("pick-deck");
              else if (phase === "pick-deck" || phase === "done") setPhase("lookup");
            }}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#47464b] hover:bg-zinc-100"
            aria-label="Quay lại"
          >
            <ArrowLeft className="size-4" aria-hidden />
          </button>
        ) : null}
        <Root className={`min-w-0 flex-1 ${pickDeckHeader ? "text-center" : ""}`}>
          {phase === "lookup" ? (
            <Root className="flex flex-wrap items-center gap-2">
              <p className="font-serif text-lg font-semibold capitalize text-[#1c1b1c]">{headerTitle}</p>
              <span className="rounded-full bg-[#ebebeb] px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-[#47464b]">
                {isTranslateOnly ? "Dịch nhanh" : "Tra nhanh"}
              </span>
            </Root>
          ) : (
            <p className="text-sm font-semibold text-[#1c1b1c]">{headerTitle}</p>
          )}
        </Root>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[#47464b] hover:bg-zinc-100"
          aria-label="Đóng"
        >
          <X className="size-4" aria-hidden />
        </button>
      </Root>

      <Root className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-3 [-webkit-overflow-scrolling:touch]">
        {phase === "lookup" ? <LookupBody lookup={lookup} loading={loading} /> : null}

        {phase === "pick-deck" ? (
          <Root className="space-y-3 pb-1">
            <Root className="rounded-lg bg-[#f7f3f8] px-2.5 py-2">
              <p className="text-[10px] font-bold uppercase leading-none tracking-wider text-[#71717A]">
                Từ đang chọn
              </p>
              <p className="mt-1 font-serif text-base font-semibold capitalize leading-tight text-[#1c1b1c]">
                {lookup.query}
              </p>
            </Root>

            <Root>
              <Root className="mb-2 flex items-center justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
                  Chọn bộ thẻ của bạn
                </p>
                {!creatingDeck ? (
                  <button
                    type="button"
                    onClick={() => setCreatingDeck(true)}
                    className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-[#4b2876] hover:text-[#3d1f5c]"
                  >
                    <Plus className="size-3.5" strokeWidth={2.5} aria-hidden />
                    Mới
                  </button>
                ) : null}
              </Root>

              {creatingDeck ? (
                <Root className="mb-2 flex items-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-[#fafafa] p-1.5">
                  <input
                    ref={newDeckInputRef}
                    type="text"
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onCreateDeck();
                      if (e.key === "Escape") {
                        setCreatingDeck(false);
                        setNewDeckName("");
                      }
                    }}
                    placeholder="Tên bộ thẻ mới…"
                    className="min-w-0 flex-1 rounded-md border border-[#E4E4E7] bg-white px-2.5 py-1.5 text-sm text-[#1c1b1c] outline-none focus:border-[#4b2876]/50 focus:ring-1 focus:ring-[#4b2876]/15"
                  />
                  <button
                    type="button"
                    onClick={onCreateDeck}
                    disabled={!newDeckName.trim()}
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#4b2876] text-white disabled:opacity-40"
                    aria-label="Tạo bộ thẻ"
                  >
                    <Check className="size-3.5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCreatingDeck(false);
                      setNewDeckName("");
                    }}
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[#71717A] hover:bg-zinc-200/80"
                    aria-label="Huỷ"
                  >
                    <X className="size-3.5" aria-hidden />
                  </button>
                </Root>
              ) : null}

              {decks.length === 0 ? (
                <p className="rounded-lg border border-dashed border-[#E4E4E7] px-3 py-4 text-center text-sm text-[#71717A]">
                  Chưa có bộ thẻ. Bấm <span className="font-semibold text-[#4b2876]">+ Mới</span> để tạo.
                </p>
              ) : (
                <ul className="space-y-1.5">
                  {decks.map((deck) => {
                    const selected = deck.id === selectedDeckId;
                    return (
                      <li key={deck.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedDeckId(deck.id)}
                          className={`flex w-full items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-left text-xs leading-snug transition-colors ${
                            selected
                              ? "border-[#4b2876] bg-white shadow-[0_0_0_1px_#4b2876]"
                              : "border-[#E4E4E7] bg-white hover:border-[#d4d4d8]"
                          }`}
                        >
                          <span
                            className={`inline-flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              selected
                                ? "border-[#4b2876] bg-[#4b2876] text-white"
                                : "border-[#d4d4d8] bg-white"
                            }`}
                            aria-hidden
                          >
                            {selected ? <Check className="size-2.5" strokeWidth={3} /> : null}
                          </span>
                          <span
                            className={`min-w-0 flex-1 truncate ${
                              selected ? "font-medium text-[#1c1b1c]" : "font-normal text-[#47464b]"
                            }`}
                          >
                            {deck.name}
                          </span>
                          <ChevronRight
                            className={`size-3 shrink-0 ${selected ? "text-[#71717A]" : "text-[#a1a1aa]"}`}
                            aria-hidden
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Root>
          </Root>
        ) : null}

        {phase === "add" ? (
          <Root className="space-y-3">
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Từ / cụm</span>
              <textarea
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                rows={2}
                className="mt-1 w-full resize-none rounded-lg border border-[#E4E4E7] px-3 py-2 text-sm text-[#1c1b1c] outline-none focus:border-[#1c1b1c]"
                lang="en"
              />
            </label>
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">
                Định nghĩa (tuỳ chọn)
              </span>
              <textarea
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
                rows={5}
                className="mt-1 w-full resize-y rounded-lg border border-[#E4E4E7] px-3 py-2 text-sm leading-relaxed text-[#1c1b1c] outline-none focus:border-[#1c1b1c]"
                lang="vi"
              />
            </label>
            {selectedDeck ? (
              <p className="text-xs text-[#71717A]">
                Lưu vào: <span className="font-medium text-[#47464b]">{selectedDeck.name}</span>
              </p>
            ) : null}
          </Root>
        ) : null}

        {phase === "done" ? (
          <Root className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ecfdf3] text-[#15803d]">
              <Check className="size-6" strokeWidth={2.5} aria-hidden />
            </span>
            <p className="text-sm font-medium text-[#1c1b1c]">
              Đã thêm &ldquo;{htmlToPlainTrim(term) || lookup.query}&rdquo;
            </p>
            {selectedDeck ? (
              <p className="text-xs text-[#71717A]">vào deck {selectedDeck.name}</p>
            ) : null}
          </Root>
        ) : null}
      </Root>

      {phase === "lookup" && showAddButton && !loading ? (
        <Root className="shrink-0 border-t border-[#f1eded] px-4 py-3">
          <button
            type="button"
            onClick={() => setPhase("pick-deck")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1c1b1c] px-3 py-2.5 text-xs font-semibold text-white hover:bg-black/90"
          >
            <BookOpen className="size-3.5" aria-hidden />
            Thêm vào bộ thẻ
          </button>
        </Root>
      ) : null}

      {phase === "pick-deck" && !creatingDeck ? (
        <Root className="shrink-0 border-t border-[#f1eded] px-4 py-3">
          <button
            type="button"
            onClick={() => setPhase("add")}
            disabled={!selectedDeckId}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#1c1b1c] px-3 py-2.5 text-xs font-semibold text-white hover:bg-black/90 disabled:opacity-40"
          >
            Tiếp tục — chỉnh sửa & lưu
            <ArrowRight className="size-3.5" aria-hidden />
          </button>
        </Root>
      ) : null}

      {phase === "add" ? (
        <Root className="shrink-0 border-t border-[#f1eded] px-4 py-3">
          <button
            type="button"
            onClick={onSaveWord}
            disabled={!htmlToPlainTrim(term) || !selectedDeckId}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1c1b1c] px-3 py-2.5 text-xs font-semibold text-white hover:bg-black/90 disabled:opacity-40"
          >
            <BookOpen className="size-3.5" aria-hidden />
            Lưu từ
          </button>
        </Root>
      ) : null}

      {phase === "done" ? (
        <Root className="shrink-0 border-t border-[#f1eded] px-4 py-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-lg border border-[#E4E4E7] px-3 py-2.5 text-xs font-semibold text-[#1c1b1c] hover:bg-zinc-50"
          >
            Tiếp tục đọc
          </button>
        </Root>
      ) : null}
    </Root>
  );
}
