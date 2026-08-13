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
const P_STYLE = "margin:0 0 0.45em";

export type ListeningTranscriptDisplayBlock =
  | { type: "part"; text: string }
  | { type: "rule" }
  | { type: "speaker"; speaker: string; body: string }
  | { type: "line"; text: string };

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

/** Tách transcript thành dòng/lượt nói — mỗi block render một `<p>` (F12 không còn 1 cục). */
export function parseListeningTranscriptDisplayBlocks(plain: string): ListeningTranscriptDisplayBlock[] {
  const blocks: ListeningTranscriptDisplayBlock[] = [];

  for (const raw of plain.split(/\r?\n/)) {
    const t = raw.trim();
    if (t.length === 0) continue;
    if (PART_LINE.test(t)) {
      blocks.push({ type: "part", text: t });
      continue;
    }
    if (RULE_LINE.test(t)) {
      blocks.push({ type: "rule" });
      continue;
    }
    const split = splitTranscriptSpeakerLine(raw.trimEnd());
    if (split.speaker) {
      blocks.push({ type: "speaker", speaker: split.speaker, body: split.body });
      continue;
    }
    blocks.push({ type: "line", text: raw.trimEnd() });
  }

  return blocks;
}

function blockToSafeHtml(block: ListeningTranscriptDisplayBlock): string {
  if (block.type === "part") {
    return `<p style="${P_STYLE};font-weight:700;color:rgb(75,40,118)">${escapeHtml(block.text)}</p>`;
  }
  if (block.type === "rule") {
    return `<p style="${P_STYLE};color:#a1a1aa">——————————————</p>`;
  }
  if (block.type === "speaker") {
    return `<p style="${P_STYLE}"><span style="color:rgb(75,40,118);font-weight:600">${escapeHtml(block.speaker)}:</span> ${qMarkers(escapeHtml(block.body))}</p>`;
  }
  return `<p style="${P_STYLE}">${qMarkers(escapeHtml(block.text))}</p>`;
}

/**
 * Plaintext transcript → HTML an toàn: mỗi lượt nói / dòng là một `<p>`.
 * Không chạy sanitizeWordHtml (allowlist bỏ `<p>` / `data-q`).
 */
export function listeningTranscriptPlainToSafeHtml(plain: string): string {
  return parseListeningTranscriptDisplayBlocks(plain).map(blockToSafeHtml).join("");
}
