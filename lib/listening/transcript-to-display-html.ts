import { sanitizeWordHtml } from "@/lib/sanitize-word-html";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const PART_LINE = /^PART\s+\d+\s*$/i;
const SPEAKER_LINE = /^([A-Z][A-Z'\s]{1,22}):\s*(.*)$/;
const RULE_LINE = /^[—\-_\s]{4,}$/;

function qMarkers(htmlEscapedLine: string): string {
  return htmlEscapedLine.replace(/Q\d+/g, (m) => `<span style="color: #6d28d9; font-weight: 600">${m}</span>`);
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
    const sm = raw.trimEnd().match(SPEAKER_LINE);
    if (sm?.[1]) {
      const label = sm[1].trim();
      const rest = sm[2] ?? "";
      chunks.push(
        `<br><span style="color:rgb(75,40,118);font-weight:600">${escapeHtml(label)}:</span> ${qMarkers(escapeHtml(rest))}<br>`,
      );
      continue;
    }
    chunks.push(`<br>${qMarkers(escapeHtml(raw.trimEnd()))}<br>`);
  }

  return sanitizeWordHtml(chunks.join(""));
}
