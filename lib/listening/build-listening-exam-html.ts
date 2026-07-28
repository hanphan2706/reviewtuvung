import { formatExamInstructionHtml } from "@/lib/exam/format-exam-instruction-html";
import { getListeningPartById, type ListeningPartMeta } from "@/lib/listening/content-manifest";
import { loadListeningFullTestTranscriptByPart } from "@/lib/listening/load-listening-full-test-transcript";
import { loadListeningTranscriptText } from "@/lib/listening/load-listening-transcript-text";
import { listeningSyncCuesToExamHtml } from "@/lib/listening/listening-sync-cues-to-exam-html";
import { readListeningSyncFile } from "@/lib/listening/listening-sync-fs";
import {
  getListeningIeltsTest,
  listeningPartIdForTest,
  type ListeningIeltsTestId,
} from "@/lib/listening/ielts-test-catalog";
import { loadListeningQnaTest } from "@/lib/listening/generate-ielts-listening-flow-content";
import { enrichListeningQnaPartMapImages } from "@/lib/listening/listening-map-image";
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

/** Dòng tiêu đề section: không bullet, không blank, không câu mô tả. */
function isNoteSectionTitleLine(line: string): boolean {
  const { level, text } = stripNoteBulletPrefix(line);
  if (level !== null || !text) return false;
  if (lineHasBlank(line)) return false;
  if (/:/.test(text)) return false;
  if (/^[a-z]/.test(text)) return false;
  if (/\b(includes?|contain|were|are|was|is|have|has)\b/i.test(text) && text.length > 24) return false;
  return true;
}

function renderNoteLineWithBlanks(line: string): string {
  const content = line.trim();
  if (!content) return "";

  let html = "";
  let lastIndex = 0;
  BLANK_RE.lastIndex = 0;
  let match: RegExpExecArray | null = BLANK_RE.exec(content);
  while (match) {
    const num = match[1]!;
    html += escHtml(content.slice(lastIndex, match.index));
    html += `<span class="fi-stack"><span class="fi-num">(${num})</span><input class="fi" id="q${num}" autocomplete="off" oninput="markFill('q${num}',this.value)"></span>`;
    lastIndex = match.index + match[0].length;
    match = BLANK_RE.exec(content);
  }
  html += escHtml(stripStrayPunctuationAfterBlank(content.slice(lastIndex)));
  return html;
}

function renderNoteBodyLine(line: string, options?: { docTitle?: boolean }): string {
  const { level, text } = stripNoteBulletPrefix(line);
  const content = level !== null ? text : line.trim();
  if (!content) return `<p class="note-line note-gap">&nbsp;</p>`;

  if (level === null && isNoteSectionTitleLine(line)) {
    const cls = options?.docTitle ? "note-doc-title" : "note-section-title";
    return `<p class="${cls}">${escHtml(content)}</p>`;
  }

  const html = renderNoteLineWithBlanks(content);

  if (level === 0) return `<p class="note-line note-bullet-0"><span class="note-bullet-mark">•</span> ${html}</p>`;
  if (level === 1) return `<p class="note-line note-bullet-1"><span class="note-bullet-mark">–</span> ${html}</p>`;
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
    .map((header) => `<th class="note-grid-th">${header ? escHtml(header) : "&nbsp;"}</th>`)
    .join("");
  const bodyRows = layout.rows
    .map((row) => {
      const cells = row
        .map((cell) => `<td class="note-grid-td">${renderNoteLineWithBlanks(cell)}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");
  return `${title}<table class="note-grid-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
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
  const layout = inferNoteBodyLayout(section.instructionLines, section.bodyLines);
  const nums = collectBlankNumbersFromLines(section.bodyLines);
  const minQ = nums[0] ?? (partNumber - 1) * 10 + 1;
  const maxQ = nums[nums.length - 1] ?? partNumber * 10;

  let body = "";
  if (layout.kind === "form") {
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
            `<label class="opt"><input type="radio" name="${qid}" value="${escHtml(o.letter)}" onchange="selMCQ('${qid}',this)"> <span><b>${escHtml(o.letter)}.</b> ${escHtml(o.text)}</span></label>`,
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
  const letters = letterRangeToLetters(section.letterRange);
  const letterOpts = renderLetterSelectOptions(letters);
  const rows = section.items
    .map((item) => {
      const qid = `q${item.number}`;
      return `<div class="mrow mrow-inline"><div class="mrow-top"><div class="mqnum">${item.number}</div><div class="mtext">${escHtml(item.label)}</div><select class="msel" id="sel-${qid}" onchange="selMatch('${qid}',this)"><option value="">—</option>${letterOpts}</select></div></div>`;
    })
    .join("");
  const questionsBlock = `<div class="map-layout-questions">${rows}</div>`;
  const mapBlock = section.imageUrl
    ? `<div class="map-layout-map"><div class="map-img-wrap"><img src="${escHtml(section.imageUrl)}" alt="Map for questions ${minQ}–${maxQ}" class="map-img"></div></div>`
    : "";
  const layout = section.imageUrl
    ? `<div class="map-layout">${mapBlock}${questionsBlock}</div>`
    : questionsBlock;
  return {
    html: `${renderSectionHeader(partNumber, minQ, maxQ, section.instructionLines)}${layout}`,
    nums,
  };
}

function renderChooseTwoSection(section: ListeningQnaChooseTwoSection, partNumber: number): { html: string; nums: number[] } {
  const [a, b] = section.questionNumbers;
  const nums = [a, b];
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
  const rows = [a, b]
    .map(
      (n) =>
        `<div class="choose-two-row" data-q="${n}"><span class="choose-two-label">Question ${n}</span><select class="msel choose-two-sel" id="sel-q${n}" onchange="selMatch('q${n}',this)"><option value="">—</option>${letterOpts}</select></div>`,
    )
    .join("");
  return {
    html: `${renderSectionHeader(partNumber, a, b, section.instructionLines)}
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

function buildListeningPartQuestionsChunk(
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
