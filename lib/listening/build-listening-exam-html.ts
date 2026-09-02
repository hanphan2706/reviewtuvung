import { formatExamInstructionHtml } from "@/lib/exam/format-exam-instruction-html";
import { getListeningRealExam, type RealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadRealExamTranscriptSync } from "@/lib/exam/real-exam-sync-files";
import { loadRealExamTranscriptText } from "@/lib/exam/real-exam-transcript-files";
import { realExamListeningPartMeta } from "@/lib/exam/real-exam-listening-parts";
import { getListeningPartById, type ListeningPartMeta } from "@/lib/listening/content-manifest";
import { loadListeningFullTestTranscriptByPart } from "@/lib/listening/load-listening-full-test-transcript";
import { loadListeningTranscriptText } from "@/lib/listening/load-listening-transcript-text";
import {
  listeningSyncCuesToExamHtml,
  listeningSyncCuesToExamHtmlByPart,
} from "@/lib/listening/listening-sync-cues-to-exam-html";
import { readListeningSyncFile } from "@/lib/listening/listening-sync-fs";
import {
  getListeningIeltsTest,
  listeningPartIdForTest,
  type ListeningIeltsTestId,
} from "@/lib/listening/ielts-test-catalog";
import { loadListeningQnaFile, loadListeningQnaTest } from "@/lib/listening/generate-ielts-listening-flow-content";
import { getListeningTestQnaRef } from "@/lib/listening/listening-qna-catalog";
import { getPinballEntryListeningPart, PINBALL_ENTRY_TEST_ID } from "@/lib/listening/pinball-entry-listening";
import { enrichListeningQnaPartMapImages } from "@/lib/listening/listening-map-image";
import { realTestListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";
import { BLANK_RE, getListeningQnaPart } from "@/lib/listening/parse-listening-qna";
import {
  collectBlankNumbersFromLines,
  inferNoteBodyLayout,
  type NoteFormLayout,
  type NoteGridTableLayout,
} from "@/lib/listening/listening-note-layout";
import type {
  ListeningQnaChooseTwoSection,
  ListeningQnaMapSection,
  ListeningQnaMatchingSection,
  ListeningQnaMcqSection,
  ListeningQnaNoteSection,
  ListeningQnaPart,
  ListeningQnaSection,
} from "@/lib/listening/parse-listening-qna";
import { listeningTranscriptPlainToSafeHtml } from "@/lib/listening/transcript-to-display-html";

export type ListeningExamPayload = {
  partId: string;
  partNumber: number;
  title: string;
  pilotLabel: string;
  questionsHtml: string;
  questionNums: number[];
  timeMinutes: number;
  audioUrl: string;
  transcriptHtml: string;
  hasTranscript: boolean;
  answerKey: Record<string, string>;
  hasAnswerKey: boolean;
  back: string;
  skipLogin: true;
};

export type ListeningPartQuestionRange = {
  part: number;
  min: number;
  max: number;
};

export type ListeningFullTestExamPayload = {
  testId: ListeningIeltsTestId;
  title: string;
  pilotLabel: string;
  questionsHtml: string;
  questionNums: number[];
  audioUrls: string[];
  transcriptHtml: string;
  transcriptHtmlByPart: Partial<Record<number, string>>;
  hasTranscript: boolean;
  answerKey: Record<string, string>;
  hasAnswerKey: boolean;
  back: string;
  skipLogin: true;
  isFullTest: true;
  partQuestionRanges: ListeningPartQuestionRange[];
};

export function buildListeningFullTestTranscriptBodyHtml(
  transcriptHtmlByPart: Partial<Record<number, string>>,
): string {
  const panels = [1, 2, 3, 4]
    .map((part) => {
      const raw = transcriptHtmlByPart[part];
      const inner = raw
        ? raw
        : '<p class="transcript-empty">Không có transcript cho Part này.</p>';
      const active = part === 1 ? " active" : "";
      return `<div class="transcript-part-panel${active}" data-part="${part}">${inner}</div>`;
    })
    .join("\n");
  return panels;
}

function buildSyncedTranscriptHtmlForPart(partId: string): string | null {
  const sync = readListeningSyncFile(partId);
  if (!sync) return null;
  return listeningSyncCuesToExamHtml(sync);
}

function buildSyncedFullTestTranscriptHtmlByPart(
  testId: ListeningIeltsTestId,
): Partial<Record<number, string>> | null {
  const transcriptHtmlByPart: Partial<Record<number, string>> = {};
  let hasAny = false;

  for (const part of [1, 2, 3, 4] as const) {
    const partId = listeningPartIdForTest(testId, part);
    const html = buildSyncedTranscriptHtmlForPart(partId);
    if (html) {
      transcriptHtmlByPart[part] = html;
      hasAny = true;
    }
  }

  return hasAny ? transcriptHtmlByPart : null;
}

function escHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function letterRangeToLetters(range: string | undefined, fallback = 8): string[] {
  if (!range) {
    return Array.from({ length: fallback }, (_, i) => String.fromCharCode(65 + i));
  }
  const m = range.match(/([A-I])\s*(?:–|-)\s*([A-Il])/i);
  if (!m) {
    return Array.from({ length: fallback }, (_, i) => String.fromCharCode(65 + i));
  }
  const start = m[1]!.toUpperCase().charCodeAt(0);
  const endRaw = m[2]!;
  const endChar = endRaw === "l" || endRaw === "L" ? "I" : endRaw.toUpperCase();
  const end = endChar.charCodeAt(0);
  const letters: string[] = [];
  for (let code = start; code <= end; code += 1) {
    letters.push(String.fromCharCode(code));
  }
  return letters;
}

function renderLetterSelectOptions(letters: string[]): string {
  return letters.map((l) => `<option value="${l}">${l}</option>`).join("");
}

function renderSectionHeader(
  partNumber: number,
  minQ: number,
  maxQ: number,
  instructionLines: string[],
  topicLine?: string,
): string {
  return `<div class="sec-hdr">
  ${topicLine ? `<div class="sec-topic">${escHtml(topicLine)}</div>` : ""}
  <div class="sec-range">Part ${partNumber} &mdash; Questions ${minQ}&ndash;${maxQ}</div>
  <div class="sec-instr">${formatExamInstructionHtml(instructionLines, { includeSix: true })}</div>
</div>`;
}

function stripStrayPunctuationAfterBlank(text: string): string {
  return text.replace(/^[\s.,;:!?，、；：]+/, "");
}

function lineHasBlank(line: string): boolean {
  BLANK_RE.lastIndex = 0;
  return BLANK_RE.test(line);
}

function stripNoteBulletPrefix(line: string): { level: number | null; text: string } {
  const trimmed = line.trim();
  if (!trimmed) return { level: null, text: "" };
  if (/^[●•]\s*/u.test(trimmed)) {
    return { level: 0, text: trimmed.replace(/^[●•]\s*/u, "") };
  }
  if (/^[-–—]\s*/u.test(trimmed)) {
    return { level: 1, text: trimmed.replace(/^[-–—]\s*/u, "") };
  }
  return { level: null, text: trimmed };
}

/**
 * Pinball / OCR notes often dump `6 The clerk … 6…………` — leading number duplicates the blank.
 * Strip that prefix so the line can render as a bullet instead of `6 … (6)`.
 */
function stripRedundantLeadingBlankNumber(line: string): string | null {
  const trimmed = line.trim();
  const m = trimmed.match(/^(\d{1,2})\s+(.+)$/);
  if (!m) return null;
  const num = m[1]!;
  const rest = m[2]!;
  BLANK_RE.lastIndex = 0;
  let match: RegExpExecArray | null = BLANK_RE.exec(rest);
  while (match) {
    if (match[1] === num) return rest;
    match = BLANK_RE.exec(rest);
  }
  return null;
}

/** Soft indent from QnA (spaces / NBSP), e.g. Cam 21 survey sub-bullets under a label. */
function hasLeadingSoftIndent(line: string): boolean {
  return /^[\t \u00a0]{2,}\S/.test(line);
}

/** Dòng tiêu đề section: không bullet, không blank, không câu mô tả dài. */
function isNoteSectionTitleLine(line: string): boolean {
  const { level, text } = stripNoteBulletPrefix(line);
  if (level !== null || !text) return false;
  if (lineHasBlank(line)) return false;
  if (/:/.test(text)) return false;
  if (/^[a-z]/.test(text)) return false;
  // Câu mô tả dài (Cam 14 T1: "Uses a difference in temperature…") không phải tiêu đề.
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount >= 6) return false;
  if (/\b(includes?|contain|were|are|was|is|have|has|uses?|brought|made|built)\b/i.test(text) && text.length > 24) {
    return false;
  }
  return true;
}

function renderNoteLineWithBlanks(line: string, options?: { multiline?: boolean }): string {
  const content = line.trim();
  if (!content) return "";

  let html = "";
  let lastIndex = 0;
  BLANK_RE.lastIndex = 0;
  let match: RegExpExecArray | null = BLANK_RE.exec(content);
  while (match) {
    const num = match[1]!;
    html += escHtml(content.slice(lastIndex, match.index));
    const control = options?.multiline
      ? `<textarea class="fi fi-multiline" id="q${num}" rows="1" autocomplete="off" onkeydown="if(event.key==='Enter'){event.preventDefault();}" oninput="markFill('q${num}',this.value);autoSizeFi(this)"></textarea>`
      : `<input class="fi" id="q${num}" autocomplete="off" oninput="markFill('q${num}',this.value)">`;
    html += `<span class="fi-stack"><span class="fi-num">(${num})</span>${control}</span>`;
    lastIndex = match.index + match[0].length;
    match = BLANK_RE.exec(content);
  }
  html += escHtml(stripStrayPunctuationAfterBlank(content.slice(lastIndex)));
  return html;
}

function renderNoteBodyLine(line: string, options?: { docTitle?: boolean }): string {
  const { level, text } = stripNoteBulletPrefix(line);
  let effectiveLevel = level;
  let content = level !== null ? text : line.trim();

  if (effectiveLevel === null) {
    const withoutLeadingNum = stripRedundantLeadingBlankNumber(content);
    if (withoutLeadingNum) {
      effectiveLevel = 0;
      content = withoutLeadingNum;
    }
  }

  if (!content) return `<p class="note-line note-gap">&nbsp;</p>`;

  if (effectiveLevel === null && isNoteSectionTitleLine(line)) {
    const cls = options?.docTitle ? "note-doc-title" : "note-section-title";
    return `<p class="${cls}">${escHtml(content)}</p>`;
  }

  const html = renderNoteLineWithBlanks(content);

  if (effectiveLevel === 0) {
    return `<p class="note-line note-bullet-0"><span class="note-bullet-mark">•</span> ${html}</p>`;
  }
  if (effectiveLevel === 1) {
    return `<p class="note-line note-bullet-1"><span class="note-bullet-mark">–</span> ${html}</p>`;
  }
  if (hasLeadingSoftIndent(line)) return `<p class="note-line note-indent">${html}</p>`;
  return `<p class="note-line">${html}</p>`;
}

function renderNoteFormTable(layout: NoteFormLayout): string {
  const title = layout.title ? `<p class="note-doc-title">${escHtml(layout.title)}</p>` : "";
  const rows = layout.rows
    .map((row) => {
      const valueHtml = row.valueLines
        .map((line) => renderNoteLineWithBlanks(line))
        .filter(Boolean)
        .join("<br>");
      return `<tr><th class="note-form-label" scope="row">${escHtml(row.label)}</th><td class="note-form-value">${valueHtml}</td></tr>`;
    })
    .join("");
  return `${title}<table class="note-form-table"><tbody>${rows}</tbody></table>`;
}

function renderNoteGridTable(layout: NoteGridTableLayout): string {
  const title = layout.title ? `<p class="note-doc-title">${escHtml(layout.title)}</p>` : "";
  const headerCells = layout.headers
    .map((header) => {
      if (!header) return `<th class="note-grid-th">&nbsp;</th>`;
      const withBlanks = renderNoteLineWithBlanks(header);
      return `<th class="note-grid-th">${withBlanks || "&nbsp;"}</th>`;
    })
    .join("");
  const bodyRows = layout.rows
    .map((row) => {
      const cells = row
        .map((cell) => {
          const trimmed = cell.trim();
          if (trimmed === "—" || trimmed === "-" || trimmed === "–") {
            return `<td class="note-grid-td">&nbsp;</td>`;
          }
          return `<td class="note-grid-td">${renderNoteLineWithBlanks(cell)}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");
  return `${title}<table class="note-grid-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
}

const FLOW_ARROW_RE = /^[↓↑→←⟷▾▴]+$/u;
const FLOW_SPLIT_RE = /^FLOW\s+SPLIT$/i;
const FLOW_OPTION_LINE_RE = /^([A-H])\s+(.+)$/;
const FLOW_CHOOSE_BOX_RE = /choose\s+.+\s+from the box/i;

function peelFlowchartOptionBank(lines: readonly string[]): { bankHtml: string; lines: string[] } {
  const start = lines.findIndex((line) => FLOW_CHOOSE_BOX_RE.test(line) || FLOW_OPTION_LINE_RE.test(line));
  if (start < 0 || start > 2) return { bankHtml: "", lines: [...lines] };

  let index = start;
  let title = "";
  if (FLOW_CHOOSE_BOX_RE.test(lines[index] ?? "")) {
    title = lines[index] ?? "";
    index += 1;
  }

  const options: { letter: string; text: string }[] = [];
  while (index < lines.length) {
    const match = (lines[index] ?? "").match(FLOW_OPTION_LINE_RE);
    if (!match) break;
    options.push({ letter: match[1]!, text: match[2]!.trim() });
    index += 1;
  }
  if (options.length < 2) return { bankHtml: "", lines: [...lines] };

  const titleHtml = title ? `<div class="people-bank-title">${escHtml(title)}</div>` : "";
  const bankHtml = `<div class="people-bank flow-option-bank">${titleHtml}<ul class="people-bank-list">${options
    .map(
      (option) =>
        `<li><span class="people-bank-letter">${escHtml(option.letter)}</span><span class="people-bank-name">${escHtml(option.text)}</span></li>`,
    )
    .join("")}</ul></div>`;
  return { bankHtml, lines: [...lines.slice(0, start), ...lines.slice(index)] };
}

function renderFlowchartBox(line: string): string {
  return renderFlowchartBoxLines([line]);
}

function renderFlowchartBoxLines(lines: readonly string[]): string {
  const parts = lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line, index, all) => {
      const html = renderNoteLineWithBlanks(line, { multiline: true });
      const isHeading = index === 0 && all.length > 1 && (!lineHasBlank(line) || /:\s*$/.test(line));
      return `<div class="${isHeading ? "flow-box-heading" : "flow-box-line"}">${html}</div>`;
    });
  if (parts.length === 0) return "";
  return `<div class="flow-box">${parts.join("")}</div>`;
}

/** Branching flowchart (Pinball entry Q26–30 style) using `FLOW SPLIT` markers in QnA. */
function renderFlowchartBody(bodyLines: readonly string[]): string {
  const peeled = peelFlowchartOptionBank(bodyLines.map((line) => line.trim()).filter((line) => line.length > 0));
  const lines = peeled.lines;
  if (lines.length === 0) return peeled.bankHtml;

  let titleHtml = "";
  let start = 0;
  if (lines[0] && !lineHasBlank(lines[0]) && !FLOW_SPLIT_RE.test(lines[0]) && !FLOW_ARROW_RE.test(lines[0])) {
    const maybeTitle = lines[0]!;
    const next = lines[1] ?? "";
    const afterNext = lines[2] ?? "";
    const allCapsTitle = /^[A-Z]/.test(maybeTitle) && maybeTitle === maybeTitle.toUpperCase();
    const nextIsStepStart =
      !FLOW_SPLIT_RE.test(next) &&
      (/:\s*$/.test(next) ||
        FLOW_ARROW_RE.test(next) ||
        (!lineHasBlank(next) && (FLOW_ARROW_RE.test(afterNext) || lineHasBlank(afterNext))));
    const plainChartTitle = !/:\s*$/.test(maybeTitle) && nextIsStepStart;
    if (allCapsTitle || plainChartTitle) {
      titleHtml = `<p class="note-doc-title flow-title">${escHtml(maybeTitle)}</p>`;
      start = 1;
    }
  }

  const rest = lines.slice(start);
  const splitIndexes = rest
    .map((line, index) => (FLOW_SPLIT_RE.test(line) ? index : -1))
    .filter((index) => index >= 0);

  if (splitIndexes.length >= 1) {
    const rootLines = rest.slice(0, splitIndexes[0]).filter((line) => !FLOW_ARROW_RE.test(line));
    const afterFirst = rest.slice(splitIndexes[0]! + 1);
    const secondSplitRel = afterFirst.findIndex((line) => FLOW_SPLIT_RE.test(line));

    let leftCol: string[] = [];
    let rightCol: string[] = [];
    let afterSecond: string[] = [];

    if (secondSplitRel >= 0) {
      const mid = afterFirst.slice(0, secondSplitRel).filter((line) => !FLOW_ARROW_RE.test(line));
      leftCol = mid.slice(0, 1);
      rightCol = mid.slice(1);
      afterSecond = afterFirst.slice(secondSplitRel + 1).filter((line) => !FLOW_ARROW_RE.test(line));
    } else {
      const mid = afterFirst.filter((line) => !FLOW_ARROW_RE.test(line));
      leftCol = mid.slice(0, Math.ceil(mid.length / 2));
      rightCol = mid.slice(Math.ceil(mid.length / 2));
    }

    /** After second split: left leaf + right branch (may include a final ↓ child under the right leaf). */
    let leftLeaf = afterSecond[0] ? [afterSecond[0]] : [];
    let rightBranch = afterSecond.slice(1);

    const rootHtml = rootLines.map(renderFlowchartBox).join("");
    const leftMidHtml = leftCol.map(renderFlowchartBox).join('<div class="flow-arrow" aria-hidden="true">↓</div>');
    const rightMidHtml = rightCol.map(renderFlowchartBox).join('<div class="flow-arrow" aria-hidden="true">↓</div>');

    let rightLower = "";
    if (rightBranch.length > 0) {
      const rightLeaf = rightBranch[0]!;
      const underRight = rightBranch.slice(1);
      rightLower = `${renderFlowchartBox(rightLeaf)}${
        underRight.length
          ? `<div class="flow-arrow" aria-hidden="true">↓</div>${underRight.map(renderFlowchartBox).join('<div class="flow-arrow" aria-hidden="true">↓</div>')}`
          : ""
      }`;
    }

    const leftLower = leftLeaf.map(renderFlowchartBox).join('<div class="flow-arrow" aria-hidden="true">↓</div>');

    return `${peeled.bankHtml}
<div class="flow-chart">${titleHtml}
  ${rootHtml}
  <div class="flow-split" aria-hidden="true"><span class="flow-arrow">↓</span><span class="flow-arrow">↓</span></div>
  <div class="flow-row">
    <div class="flow-col">${leftMidHtml}</div>
    <div class="flow-col">
      ${rightMidHtml}
      ${
        leftLower || rightLower
          ? `<div class="flow-split" aria-hidden="true"><span class="flow-arrow">↓</span><span class="flow-arrow">↓</span></div>
      <div class="flow-row">
        <div class="flow-col">${leftLower}</div>
        <div class="flow-col">${rightLower}</div>
      </div>`
          : ""
      }
    </div>
  </div>
</div>`;
  }

  const groups: string[][] = [];
  let current: string[] = [];
  for (const line of rest) {
    if (FLOW_SPLIT_RE.test(line)) continue;
    if (FLOW_ARROW_RE.test(line)) {
      if (current.length > 0) groups.push(current);
      current = [];
      continue;
    }
    current.push(line);
  }
  if (current.length > 0) groups.push(current);

  const boxes = groups
    .map((group) => renderFlowchartBoxLines(group))
    .filter(Boolean)
    .join('<div class="flow-arrow" aria-hidden="true">↓</div>');
  return `${peeled.bankHtml}<div class="flow-chart">${titleHtml}${boxes}</div>`;
}

function renderNoteFreeformBody(bodyLines: readonly string[]): string {
  let docTitlePending = true;
  return bodyLines
    .map((line) => {
      if (isNoteSectionTitleLine(line) && docTitlePending) {
        docTitlePending = false;
        return renderNoteBodyLine(line, { docTitle: true });
      }
      if (line.trim()) docTitlePending = false;
      return renderNoteBodyLine(line);
    })
    .join("");
}

function renderNoteSection(section: ListeningQnaNoteSection, partNumber: number): { html: string; nums: number[] } {
  const instructionText = section.instructionLines.join(" ");
  const layout = inferNoteBodyLayout(section.instructionLines, section.bodyLines);
  const nums = collectBlankNumbersFromLines(section.bodyLines);
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? partNumber * 10;

  let body = "";
  if (/complete the flow[\s-]?chart below/i.test(instructionText)) {
    body = renderFlowchartBody(section.bodyLines);
  } else if (layout.kind === "form") {
    body = renderNoteFormTable(layout);
  } else if (layout.kind === "grid-table") {
    body = renderNoteGridTable(layout);
  } else {
    body = renderNoteFreeformBody(layout.lines);
  }

  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines)}
<div class="sumbox"><div class="sumtext">${body}</div></div>`,
    nums,
  };
}

function renderMcqSection(section: ListeningQnaMcqSection, partNumber: number): { html: string; nums: number[] } {
  const nums = section.questions.map((q) => q.number);
  if (nums.length === 0) return { html: "", nums: [] };
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? partNumber * 10;
  const blocks = section.questions
    .map((q) => {
      const qid = `q${q.number}`;
      const opts = q.options
        .map(
          (o) =>
            `<label class="opt"><input type="radio" name="${qid}" value="${escHtml(o.letter)}" onchange="selMCQ('${qid}',this)"><span class="opt-letter">${escHtml(o.letter)}</span><span class="opt-text">${escHtml(o.text)}</span></label>`,
        )
        .join("");
      return `<div class="qb"><div class="qnum">Question ${q.number}</div><div class="qtext">${escHtml(q.prompt)}</div><div class="opts" id="${qid}-opts">${opts}</div></div>`;
    })
    .join("");
  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines, section.topicLine)}${blocks}`,
    nums,
  };
}

function renderMapSection(section: ListeningQnaMapSection, partNumber: number): { html: string; nums: number[] } {
  const nums = section.items.map((i) => i.number);
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? partNumber * 10;
  const hasOptionBank = (section.options?.length ?? 0) > 0;
  const letterOpts = hasOptionBank
    ? section.options!
        .map((o) => `<option value="${escHtml(o.letter)}">${escHtml(o.letter)} — ${escHtml(o.text)}</option>`)
        .join("")
    : renderLetterSelectOptions(letterRangeToLetters(section.letterRange));
  const bank = hasOptionBank
    ? `<div class="people-bank map-option-bank"><ul class="people-bank-list">${section
        .options!.map(
          (o) =>
            `<li><span class="people-bank-letter">${escHtml(o.letter)}</span><span class="people-bank-name">${escHtml(o.text)}</span></li>`,
        )
        .join("")}</ul></div>`
    : "";
  const rows = section.items
    .map((item) => {
      const qid = `q${item.number}`;
      const label = item.label.replace(/^[.\s…_]+$/u, "").trim();
      /** Plan/map blanks with numbers on the image: keep row as number + select only. */
      const labelHtml = label
        ? `<div class="mtext">${escHtml(label)}</div>`
        : `<div class="mtext mtext-blank" aria-hidden="true">…………</div>`;
      return `<div class="mrow mrow-inline"><div class="mrow-top${label ? "" : " mrow-top-blank"}"><div class="mqnum">${item.number}</div>${labelHtml}<select class="msel" id="sel-${qid}" onchange="selMatch('${qid}',this)"><option value="">—</option>${letterOpts}</select></div></div>`;
    })
    .join("");
  const questionsBlock = `<div class="map-layout-questions">${rows}</div>`;
  const mapBlock = section.imageUrl
    ? `<div class="map-layout-map"><div class="map-img-wrap"><img src="${escHtml(section.imageUrl)}" alt="Map for questions ${minQ}–${maxQ}" class="map-img"></div></div>`
    : "";
  /** Desktop: map trái (fit viewport) + options/câu hỏi phải — khỏi kéo lên xuống giữa hình và đáp án. */
  const layout = section.imageUrl
    ? `<div class="map-layout">${mapBlock}<div class="map-layout-side">${bank}${questionsBlock}</div></div>`
    : `${bank}${questionsBlock}`;
  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines)}${layout}`,
    nums,
  };
}

function renderChooseTwoSection(section: ListeningQnaChooseTwoSection, partNumber: number): { html: string; nums: number[] } {
  const nums = section.questionNumbers;
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? minQ;
  const letterOpts = section.options
    .map((o) => `<option value="${escHtml(o.letter)}">${escHtml(o.letter)} — ${escHtml(o.text)}</option>`)
    .join("");
  const bank =
    section.options.length > 0
      ? `<div class="choose-two-bank people-bank"><ul class="choose-two-options people-bank-list">${section.options
          .map(
            (o) =>
              `<li data-letter="${escHtml(o.letter)}"><span class="people-bank-letter">${escHtml(o.letter)}</span><span class="people-bank-name">${escHtml(o.text)}</span></li>`,
          )
          .join("")}</ul></div>`
      : "";
  const rows = nums
    .map(
      (n) =>
        `<div class="choose-two-row" data-q="${n}"><span class="choose-two-label">Question ${n}</span><select class="msel choose-two-sel" id="sel-q${n}" onchange="selMatch('q${n}',this)"><option value="">—</option>${letterOpts}</select></div>`,
    )
    .join("");
  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines)}
<p class="qtext choose-two-prompt">${escHtml(section.prompt)}</p>
<div class="choose-two-block">${bank}<div class="choose-two-answers">${rows}</div></div>`,
    nums,
  };
}

function renderMatchingSection(section: ListeningQnaMatchingSection, partNumber: number): { html: string; nums: number[] } {
  const nums = section.items.map((i) => i.number);
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? partNumber * 10;
  const letterOpts = section.options
    .map((o) => `<option value="${escHtml(o.letter)}">${escHtml(o.letter)} — ${escHtml(o.text)}</option>`)
    .join("");
  const bank =
    section.options.length > 0
      ? `<div class="people-bank"><div class="people-bank-title">${escHtml(section.optionsTitle)}</div><ul class="people-bank-list">${section.options
          .map(
            (o) =>
              `<li><span class="people-bank-letter">${escHtml(o.letter)}</span><span class="people-bank-name">${escHtml(o.text)}</span></li>`,
          )
          .join("")}</ul></div>`
      : "";
  const rows = section.items
    .map((item) => {
      const qid = `q${item.number}`;
      return `<div class="mrow"><div class="mrow-top"><div class="mqnum">${item.number}</div><div class="mtext">${escHtml(item.label)}</div><select class="msel" id="sel-${qid}" onchange="selMatch('${qid}',this)"><option value="">—</option>${letterOpts}</select></div></div>`;
    })
    .join("");
  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines)}${bank}${rows}`,
    nums,
  };
}

function renderSection(section: ListeningQnaSection, partNumber: number): { html: string; nums: number[] } {
  switch (section.kind) {
    case "note-completion":
      return renderNoteSection(section, partNumber);
    case "mcq":
      return renderMcqSection(section, partNumber);
    case "map":
      return renderMapSection(section, partNumber);
    case "choose-two":
      return renderChooseTwoSection(section, partNumber);
    case "matching":
      return renderMatchingSection(section, partNumber);
    default:
      return { html: "", nums: [] };
  }
}

export function buildListeningExamPayload(
  meta: ListeningPartMeta,
  qnaPart: ListeningQnaPart,
  options: { back: string; pilotLabel: string },
): ListeningExamPayload | null {
  const enrichedPart = enrichListeningQnaPartMapImages(qnaPart, {
    examSlug: meta.examSlug,
    test: meta.test,
    part: meta.part,
  });
  if (enrichedPart.sections.length === 0) return null;

  const chunks: string[] = [];
  const questionNums: number[] = [];

  for (const section of enrichedPart.sections) {
    const rendered = renderSection(section, enrichedPart.partNumber);
    if (rendered.html) chunks.push(rendered.html);
    questionNums.push(...rendered.nums);
  }

  const uniqueNums = [...new Set(questionNums)].sort((a, b) => a - b);
  if (uniqueNums.length === 0) return null;

  const minQ = uniqueNums[0]!;
  const maxQ = uniqueNums[uniqueNums.length - 1]!;
  const questionsHtml = `<div class="qsection active" id="q-section">
${chunks.join('<div style="margin-top:28px"></div>')}
</div>`;

  const transcriptText = loadListeningTranscriptText(meta);
  const syncedTranscriptHtml = buildSyncedTranscriptHtmlForPart(meta.id);
  const transcriptHtml = syncedTranscriptHtml
    ?? (transcriptText ? listeningTranscriptPlainToSafeHtml(transcriptText) : "");

  return {
    partId: meta.id,
    partNumber: enrichedPart.partNumber,
    title: meta.title,
    pilotLabel: options.pilotLabel,
    questionsHtml,
    questionNums: uniqueNums,
    timeMinutes: Math.max(meta.durationMinutes + 2, 8),
    audioUrl: meta.audioPublicPath,
    transcriptHtml,
    hasTranscript: transcriptHtml.length > 0,
    answerKey: enrichedPart.answers,
    hasAnswerKey: Object.keys(qnaPart.answers).length > 0,
    back: options.back,
    skipLogin: true,
  };
}

export function buildListeningExamTrackHtml(questionNums: number[]): string {
  if (questionNums.length === 0) return "";
  const minQ = questionNums[0]!;
  const maxQ = questionNums[questionNums.length - 1]!;
  const buttons = questionNums
    .map(
      (num) =>
        `<button type="button" class="qt" id="qt-${num}" onclick="goToQuestion(${num})" aria-label="Question ${num} — not answered">${num}</button>`,
    )
    .join("");
  return `<div class="track-grp"><span class="track-label">Q${minQ}–${maxQ}</span><div class="track-grid" id="track-grid">${buttons}</div></div>`;
}

export function buildListeningFullTestTrackHtml(ranges: readonly ListeningPartQuestionRange[]): string {
  return ranges
    .map((range) => {
      const buttons = Array.from({ length: range.max - range.min + 1 }, (_, index) => {
        const num = range.min + index;
        return `<button type="button" class="qt" id="qt-${num}" onclick="goToQuestion(${num})" aria-label="Question ${num} — not answered">${num}</button>`;
      }).join("");
      return `<div class="track-grp"><span class="track-label">Q${range.min}–${range.max}</span><div class="track-grid">${buttons}</div></div>`;
    })
    .join("");
}

export function buildListeningPartQuestionsChunk(
  meta: ListeningPartMeta,
  qnaPart: ListeningQnaPart,
): { html: string; nums: number[] } | null {
  const enrichedPart = enrichListeningQnaPartMapImages(qnaPart, {
    examSlug: meta.examSlug,
    test: meta.test,
    part: meta.part,
  });
  if (enrichedPart.sections.length === 0) return null;

  const chunks: string[] = [];
  const questionNums: number[] = [];

  for (const section of enrichedPart.sections) {
    const rendered = renderSection(section, enrichedPart.partNumber);
    if (rendered.html) chunks.push(rendered.html);
    questionNums.push(...rendered.nums);
  }

  const uniqueNums = [...new Set(questionNums)].sort((a, b) => a - b);
  if (uniqueNums.length === 0) return null;

  const html = chunks.join('<div style="margin-top:28px"></div>');
  return { html, nums: uniqueNums };
}

export function buildListeningFullTestExamPayload(
  testId: ListeningIeltsTestId,
  options: { back: string; pilotLabel: string },
): ListeningFullTestExamPayload | null {
  const parsed = loadListeningQnaTest(testId);
  if (!parsed) return null;

  const testMeta = getListeningIeltsTest(testId);
  if (!testMeta) return null;
  const questionHtmlParts: string[] = [];
  const allNums: number[] = [];
  const answerKey: Record<string, string> = {};
  const partQuestionRanges: ListeningPartQuestionRange[] = [];
  const audioUrls: string[] = [];

  for (let part = 1; part <= 4; part += 1) {
    const qnaPart = getListeningQnaPart(parsed, part);
    const meta = getListeningPartById(listeningPartIdForTest(testId, part));
    if (!qnaPart || !meta) return null;

    const chunk = buildListeningPartQuestionsChunk(meta, qnaPart);
    if (!chunk) return null;

    questionHtmlParts.push(
      `<div class="qsection${part === 1 ? " active" : ""}" id="q${part}-section">${chunk.html}</div>`,
    );
    allNums.push(...chunk.nums);
    Object.assign(answerKey, qnaPart.answers);
    audioUrls.push(meta.audioPublicPath);

    const minQ = (part - 1) * 10 + 1;
    const maxQ = part * 10;
    partQuestionRanges.push({ part, min: minQ, max: maxQ });
  }

  const questionNums = [...new Set(allNums)].sort((a, b) => a - b);
  if (questionNums.length === 0) return null;

  const transcriptByPart = loadListeningFullTestTranscriptByPart(testId);
  const syncedByPart = buildSyncedFullTestTranscriptHtmlByPart(testId);
  const transcriptHtmlByPart: Partial<Record<number, string>> = syncedByPart ?? {};
  if (!syncedByPart) {
    for (const part of [1, 2, 3, 4] as const) {
      const text = transcriptByPart[part];
      if (text) transcriptHtmlByPart[part] = listeningTranscriptPlainToSafeHtml(text);
    }
  }
  const transcriptHtml = buildListeningFullTestTranscriptBodyHtml(transcriptHtmlByPart);
  const hasAnswerKey = questionNums.some((n) => answerKey[String(n)] != null && answerKey[String(n)] !== "");

  return {
    testId,
    title: options.pilotLabel,
    pilotLabel: options.pilotLabel,
    questionsHtml: questionHtmlParts.join("\n"),
    questionNums,
    audioUrls,
    transcriptHtml,
    transcriptHtmlByPart,
    hasTranscript: Object.keys(transcriptHtmlByPart).length > 0,
    answerKey,
    hasAnswerKey,
    back: options.back,
    skipLogin: true,
    isFullTest: true,
    partQuestionRanges,
  };
}

/** Public no-login payload for `pinball-entry` — mirrors `ListeningFullTestExamPayload` shape. */
export type PinballEntryListeningExamPayload = {
  title: string;
  pilotLabel: string;
  questionsHtml: string;
  questionNums: number[];
  audioUrls: string[];
  transcriptHtml: string;
  transcriptHtmlByPart: Partial<Record<number, string>>;
  hasTranscript: boolean;
  answerKey: Record<string, string>;
  hasAnswerKey: boolean;
  back: string;
  skipLogin: true;
  isFullTest: true;
  partQuestionRanges: ListeningPartQuestionRange[];
};

export function buildRealExamListeningExamPayload(
  slug: RealExamSlug,
  options: { back: string; pilotLabel: string },
): PinballEntryListeningExamPayload | null {
  const exam = getListeningRealExam(slug);
  if (!exam) return null;

  const parsed = loadListeningQnaTest(slug);
  if (!parsed) return null;

  const questionHtmlParts: string[] = [];
  const allNums: number[] = [];
  const answerKey: Record<string, string> = {};
  const partQuestionRanges: ListeningPartQuestionRange[] = [];
  const audioUrl = realTestListeningAudioApiPath(exam.seriesNumber);

  for (let part = 1; part <= 4; part += 1) {
    const qnaPart = getListeningQnaPart(parsed, part);
    const meta = realExamListeningPartMeta(slug, exam.seriesNumber, part);
    if (!qnaPart) return null;

    const chunk = buildListeningPartQuestionsChunk(meta, qnaPart);
    if (!chunk) return null;

    questionHtmlParts.push(
      `<div class="qsection${part === 1 ? " active" : ""}" id="q${part}-section">${chunk.html}</div>`,
    );
    allNums.push(...chunk.nums);
    Object.assign(answerKey, qnaPart.answers);
    partQuestionRanges.push({ part, min: (part - 1) * 10 + 1, max: part * 10 });
  }

  const questionNums = [...new Set(allNums)].sort((a, b) => a - b);
  if (questionNums.length === 0) return null;

  const sync = loadRealExamTranscriptSync(slug);
  let transcriptHtmlByPart: Partial<Record<number, string>> = {};
  let transcriptHtml = "";

  if (sync) {
    transcriptHtml = listeningSyncCuesToExamHtmlByPart(sync);
    transcriptHtmlByPart = { 1: "synced", 2: "synced", 3: "synced", 4: "synced" };
  } else {
    const plain = loadRealExamTranscriptText(slug);
    if (plain) {
      transcriptHtmlByPart = splitPlainTranscriptHtmlByPart(plain);
      transcriptHtml = buildListeningFullTestTranscriptBodyHtml(transcriptHtmlByPart);
    }
  }

  const hasAnswerKey = questionNums.some((n) => answerKey[String(n)] != null && answerKey[String(n)] !== "");

  return {
    title: options.pilotLabel,
    pilotLabel: options.pilotLabel,
    questionsHtml: questionHtmlParts.join("\n"),
    questionNums,
    /** One continuous real-test MP3 — full-test player plays index 0 once. */
    audioUrls: [audioUrl],
    transcriptHtml,
    transcriptHtmlByPart,
    hasTranscript: Boolean(transcriptHtml.trim()),
    answerKey,
    hasAnswerKey,
    back: options.back,
    skipLogin: true,
    isFullTest: true,
    partQuestionRanges,
  };
}

function splitPlainTranscriptHtmlByPart(plain: string): Partial<Record<number, string>> {
  const buckets: Record<number, string[]> = { 1: [], 2: [], 3: [], 4: [] };
  let current = 0;
  for (const raw of plain.split(/\r?\n/)) {
    const partMatch = raw.trim().match(/^PART\s+(\d+)\s*$/i);
    if (partMatch) {
      current = Number.parseInt(partMatch[1] ?? "0", 10);
      continue;
    }
    if (current >= 1 && current <= 4) {
      buckets[current]!.push(raw);
    }
  }
  const out: Partial<Record<number, string>> = {};
  for (const part of [1, 2, 3, 4] as const) {
    const text = buckets[part]!.join("\n").trim();
    if (text) out[part] = listeningTranscriptPlainToSafeHtml(text);
  }
  return out;
}

export function buildPinballEntryListeningExamPayload(options: {
  back: string;
  pilotLabel: string;
}): PinballEntryListeningExamPayload | null {
  const ref = getListeningTestQnaRef(PINBALL_ENTRY_TEST_ID);
  if (!ref) return null;
  const parsed = loadListeningQnaFile(ref);
  if (!parsed) return null;

  const questionHtmlParts: string[] = [];
  const allNums: number[] = [];
  const answerKey: Record<string, string> = {};
  const partQuestionRanges: ListeningPartQuestionRange[] = [];
  const audioUrls: string[] = [];
  const transcriptHtmlByPart: Partial<Record<number, string>> = {};

  for (let part = 1; part <= 4; part += 1) {
    const qnaPart = getListeningQnaPart(parsed, part);
    const meta = getPinballEntryListeningPart(part);
    if (!qnaPart || !meta) return null;

    const chunk = buildListeningPartQuestionsChunk(meta, qnaPart);
    if (!chunk) return null;

    questionHtmlParts.push(
      `<div class="qsection${part === 1 ? " active" : ""}" id="q${part}-section">${chunk.html}</div>`,
    );
    allNums.push(...chunk.nums);
    Object.assign(answerKey, qnaPart.answers);
    audioUrls.push(meta.audioPublicPath);
    partQuestionRanges.push({ part, min: (part - 1) * 10 + 1, max: part * 10 });

    const syncedHtml = buildSyncedTranscriptHtmlForPart(meta.id);
    if (syncedHtml) {
      transcriptHtmlByPart[part] = syncedHtml;
    } else {
      const transcriptText = loadListeningTranscriptText(meta);
      if (transcriptText) transcriptHtmlByPart[part] = listeningTranscriptPlainToSafeHtml(transcriptText);
    }
  }

  const questionNums = [...new Set(allNums)].sort((a, b) => a - b);
  if (questionNums.length === 0) return null;

  const transcriptHtml = buildListeningFullTestTranscriptBodyHtml(transcriptHtmlByPart);
  const hasAnswerKey = questionNums.some((n) => answerKey[String(n)] != null && answerKey[String(n)] !== "");

  return {
    title: options.pilotLabel,
    pilotLabel: options.pilotLabel,
    questionsHtml: questionHtmlParts.join("\n"),
    questionNums,
    audioUrls,
    transcriptHtml,
    transcriptHtmlByPart,
    hasTranscript: Object.keys(transcriptHtmlByPart).length > 0,
    answerKey,
    hasAnswerKey,
    back: options.back,
    skipLogin: true,
    isFullTest: true,
    partQuestionRanges,
  };
}
