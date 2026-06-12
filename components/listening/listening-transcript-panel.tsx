"use client";

import { useEffect, useMemo, useState } from "react";
import { WordRichDisplay } from "@/components/word-rich-display";
import { ListeningSyncedTranscriptBody } from "@/components/listening/listening-synced-transcript-body";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { ListeningTranscriptCue, ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";
import {
  fetchListeningTranscriptText,
  listeningTranscriptUsesPartSplit,
} from "@/lib/listening/listening-transcript-client";
import { listeningTranscriptPlainToSafeHtml } from "@/lib/listening/transcript-to-display-html";

async function fetchTranscriptPart(
  tryFiles: readonly string[],
  part: number,
  usesPartSplit: boolean,
): Promise<{ text: string; loginRequired: boolean }> {
  try {
    const text = await fetchListeningTranscriptText(tryFiles, part, { usesPartSplit });
    return { text, loginRequired: false };
  } catch (error) {
    if (error instanceof Error && error.message === "LOGIN_REQUIRED") {
      return { text: "", loginRequired: true };
    }
    return { text: "", loginRequired: false };
  }
}

async function fetchTranscriptSync(partId: string): Promise<ListeningTranscriptSyncFile | null> {
  const res = await fetch(`/api/listening/transcript-sync?partId=${encodeURIComponent(partId)}`);
  if (!res.ok) return null;
  const data = (await res.json()) as ListeningTranscriptSyncFile & { missing?: boolean };
  if (data.missing || !data.cues?.length) return null;
  return data;
}

export type ListeningTranscriptPanelProps = {
  part: number;
  partId: string;
  examSlug: ListeningPartMeta["examSlug"];
  transcriptTryFiles: readonly string[];
  audioCurrentTime?: number;
  onCueSeek?: (cue: ListeningTranscriptCue) => void;
  variant?: "card" | "flow";
  onSyncStatusChange?: (hasSync: boolean) => void;
};

export function ListeningTranscriptPanel({
  part,
  partId,
  examSlug,
  transcriptTryFiles,
  audioCurrentTime = 0,
  onCueSeek,
  variant = "card",
  onSyncStatusChange,
}: ListeningTranscriptPanelProps) {
  const [text, setText] = useState("");
  const [sync, setSync] = useState<ListeningTranscriptSyncFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loginRequired, setLoginRequired] = useState(false);
  const usesPartSplit = listeningTranscriptUsesPartSplit({ examSlug });

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    setLoginRequired(false);
    setSync(null);

    void Promise.all([
      fetchTranscriptPart(transcriptTryFiles, part, usesPartSplit),
      fetchTranscriptSync(partId),
    ]).then(([{ text: plain, loginRequired: needsLogin }, syncFile]) => {
      if (cancelled) return;
      setLoading(false);
      if (needsLogin) {
        setLoginRequired(true);
        setError(true);
        setText("");
        setSync(null);
        onSyncStatusChange?.(false);
        return;
      }
      if (!plain) {
        setError(true);
        setText("");
        setSync(null);
        onSyncStatusChange?.(false);
        return;
      }
      setText(plain);
      setSync(syncFile);
      onSyncStatusChange?.(Boolean(syncFile?.cues?.length));
    });

    return () => {
      cancelled = true;
    };
  }, [part, partId, transcriptTryFiles, usesPartSplit, onSyncStatusChange]);

  const html = useMemo(() => (text ? listeningTranscriptPlainToSafeHtml(text) : ""), [text]);
  const hasSync = sync !== null && sync.cues.length > 0;
  const scrollMaxClass =
    variant === "flow"
      ? "max-h-[min(70vh,28rem)]"
      : hasSync
        ? "max-h-64"
        : "max-h-[min(70vh,28rem)]";

  return (
    <div className={`relative ${scrollMaxClass}`}>
      <div className={`h-full overflow-auto ${scrollMaxClass}`}>
        {loading ? (
          <p className="font-serif text-base text-[#47464b]">Đang tải bản dịch…</p>
        ) : null}
        {error && !loading ? (
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            {loginRequired
              ? "Đăng nhập để xem bản dịch trực tiếp và nghe audio."
              : usesPartSplit
                ? `Chưa có transcript cho Part ${part}. Đặt file trong `
                : "Chưa có transcript cho bài này. Chạy "}
            {!loginRequired && usesPartSplit ? (
              <>
                <code className="font-mono text-xs">reviewtuvung/listening materials/transcript/</code> (ví dụ{" "}
                <code className="font-mono text-xs">cam19-test1.cleaned.txt</code>) rồi tải lại trang.
              </>
            ) : null}
            {!loginRequired && !usesPartSplit ? (
              <>
                <code className="font-mono text-xs">npm run listening:sync-tactics</code> rồi tải lại trang.
              </>
            ) : null}
          </p>
        ) : null}
        {!loading && hasSync && sync ? (
          <ListeningSyncedTranscriptBody
            sync={sync}
            audioCurrentTime={audioCurrentTime}
            onCueSeek={onCueSeek}
          />
        ) : null}
        {!loading && !hasSync && html ? (
          <WordRichDisplay
            html={html}
            as="div"
            className="word-rich-html text-sm leading-relaxed text-[#47464b] **:text-inherit [&_b]:font-bold [&_strong]:font-bold [&_span]:text-inherit"
          />
        ) : null}
      </div>
      {hasSync ? (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-white to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-white to-transparent"
            aria-hidden
          />
        </>
      ) : null}
    </div>
  );
}
