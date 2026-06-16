import type { ListeningTranscriptCue, ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";

function buildTranscriptPartPanelsHtml(transcriptHtmlByPart: Partial<Record<number, string>>): string {
  return [1, 2, 3, 4]
    .map((part) => {
      const raw = transcriptHtmlByPart[part];
      const inner = raw ?? '<p class="transcript-empty">Không có transcript cho Part này.</p>';
      const active = part === 1 ? " active" : "";
      return `<div class="transcript-part-panel${active}" data-part="${part}">${inner}</div>`;
    })
    .join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatCueTime(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function highlightQuestionMarkers(text: string): string {
  return escapeHtml(text).replace(
    /Q\d+/g,
    (m) => `<span class="transcript-q-marker">${m}</span>`,
  );
}

function listeningPartForQuestion(q: number): number {
  if (q <= 10) return 1;
  if (q <= 20) return 2;
  if (q <= 30) return 3;
  return 4;
}

function resolveCuePart(cue: ListeningTranscriptCue, state: { part: number }): number {
  if (cue.speaker?.toUpperCase() === "LECTURER") {
    state.part = 4;
    return 4;
  }

  const matches = [...cue.text.matchAll(/\bQ(\d+)\b/g)];
  if (matches.length > 0) {
    const maxQ = Math.max(...matches.map((m) => Number.parseInt(m[1] ?? "0", 10)));
    state.part = listeningPartForQuestion(maxQ);
    return state.part;
  }

  return state.part;
}

function splitSyncCuesByPart(cues: ListeningTranscriptCue[]): Record<number, ListeningTranscriptCue[]> {
  const byPart: Record<number, ListeningTranscriptCue[]> = { 1: [], 2: [], 3: [], 4: [] };
  const state = { part: 1 };

  for (const cue of cues) {
    const part = resolveCuePart(cue, state);
    byPart[part].push(cue);
  }

  return byPart;
}

function cuesToExamHtml(cues: ListeningTranscriptCue[]): string {
  if (!cues.length) {
    return '<p class="transcript-empty">Không có transcript cho Part này.</p>';
  }

  return cues
    .map((cue: ListeningTranscriptCue) => {
      const speaker = cue.speaker
        ? `<span class="transcript-cue-speaker">${escapeHtml(cue.speaker)}:</span> `
        : "";
      return `<div role="button" tabindex="0" class="transcript-cue" data-cue-id="${escapeHtml(cue.id)}" data-start="${cue.start}" data-end="${cue.end}">
  <time class="transcript-cue-time">${formatCueTime(cue.start)}</time>
  <span class="transcript-cue-text">${speaker}${highlightQuestionMarkers(cue.text)}</span>
</div>`;
    })
    .join("\n");
}

/** Cambridge-style transcript rows for exam review HTML (seek + highlight theo audio). */
export function listeningSyncCuesToExamHtml(sync: ListeningTranscriptSyncFile): string {
  const cues = sync.cues.filter((cue) => !cue.preAudio && cue.text.trim().length > 0);
  if (!cues.length) {
    return '<p class="transcript-empty">Không có transcript cho bài thi này.</p>';
  }

  return cuesToExamHtml(cues);
}

/** Full-test review: một panel transcript cho mỗi Part (1–4). */
export function listeningSyncCuesToExamHtmlByPart(sync: ListeningTranscriptSyncFile): string {
  const cues = sync.cues.filter((cue) => !cue.preAudio && cue.text.trim().length > 0);
  if (!cues.length) {
    return '<p class="transcript-empty">Không có transcript cho bài thi này.</p>';
  }

  const byPart = splitSyncCuesByPart(cues);
  const transcriptHtmlByPart: Partial<Record<number, string>> = {};
  for (const part of [1, 2, 3, 4] as const) {
    transcriptHtmlByPart[part] = cuesToExamHtml(byPart[part]);
  }

  return buildTranscriptPartPanelsHtml(transcriptHtmlByPart);
}
