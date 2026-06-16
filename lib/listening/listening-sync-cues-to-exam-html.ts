import type { ListeningTranscriptCue, ListeningTranscriptSyncFile } from "@/lib/listening/listening-transcript-sync-types";

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

/** Cambridge-style transcript rows for exam review HTML (seek + highlight theo audio). */
export function listeningSyncCuesToExamHtml(sync: ListeningTranscriptSyncFile): string {
  const cues = sync.cues.filter((cue) => !cue.preAudio && cue.text.trim().length > 0);
  if (!cues.length) {
    return '<p class="transcript-empty">Không có transcript cho bài thi này.</p>';
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
