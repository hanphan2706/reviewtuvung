import { sanitizeWordHtml } from "@/lib/sanitize-word-html";
import { splitTranscriptSpeakerLine } from "@/lib/listening/parse-transcript-speaker";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const PART_LINE = /^PART\s+\d+\s*$/i;
const RULE_LINE = /^[—\-_\s]{4,}$/;

/** Wrap `Q12` / `Q21/22` for exam review jump targets (plain transcript fallback). */
function qMarkers(htmlEscapedLine: string): string {
  return htmlEscapedLine.replace(/Q(\d+)(?:\/(\d+))?/g, (full, a, b) => {
    const primary = Number.parseInt(String(a), 10);
    const secondary = b != null && b !== "" ? Number.parseInt(String(b), 10) : NaN;
    const also =
      Number.isFinite(secondary) && secondary !== primary
        ? ` data-q-also="${secondary}"`
        : "";
    return `<span class="transcript-q-marker" data-q="${primary}"${also} style="color:#6d28d9;font-weight:600">${full}</span>`;
  });
}

/**
 * Plaintext transcript (đã sanitize) → HTML an toàn: PART tiêu đề, tên người nói màu tím, Qn nổi bật.
 */
export function listeningTranscriptPlainToSafeHtml(plain: string): string {
  const lines = plain.split(/\r?\n/);
  const chunks: string[] = [];

  for (const raw of lines) {
    const t = raw.trim();
    if (t.length === 0) {
      chunks.push("<br>");
      continue;
    }
    if (PART_LINE.test(t)) {
      chunks.push(`<br><br><span style="font-weight:700;color:rgb(75,40,118)">${escapeHtml(t)}</span>`);
      continue;
    }
    if (RULE_LINE.test(t)) {
      chunks.push('<br><span style="color: #a1a1aa">——————————————</span><br>');
      continue;
    }
    const split = splitTranscriptSpeakerLine(raw.trimEnd());
    if (split.speaker) {
      chunks.push(
        `<br><span style="color:rgb(75,40,118);font-weight:600">${escapeHtml(split.speaker)}:</span> ${qMarkers(escapeHtml(split.body))}<br>`,
      );
      continue;
    }
    chunks.push(`<br>${qMarkers(escapeHtml(raw.trimEnd()))}<br>`);
  }

  return sanitizeWordHtml(chunks.join(""));
}
