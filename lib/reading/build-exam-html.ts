import { BARE_GAP_RE, FILL_GAP_BLANK, FILL_GAP_RE, hasFillGap } from "@/lib/reading/fill-gap-pattern";
import {
  boldTfngInstructionSegment,
  formatExamInstructionHtml,
} from "@/lib/exam/format-exam-instruction-html";
import { splitBodyParagraphs } from "@/lib/reading/format-paragraphs";
import { splitTfngInstructionSegments } from "@/lib/reading/format-tfng-instruction";
import {
  parsePassageExamSections,
  type ExamQuestionSection,
  type McqOption,
} from "@/lib/reading/parse-passage-questions";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import { validatePassageExamSections } from "@/lib/reading/validate-exam-sections";

export type ReadingExamPayload = {
  pilotId: string;
  passageNumber: number;
  title: string;
  pilotLabel: string;
  passageHtml: string;
  questionsHtml: string;
  questionNums: number[];
  timeMinutes: number;
  /** q14 → "E" — chỉ có khi file .txt có khối ANSWERS. */
  answerKey: Record<string, string> | null;
  hasAnswerKey: boolean;
};

export type ReadingPassageQuestionRange = {
  passage: number;
  min: number;
  max: number;
  title: string;
};

export type ReadingFullTestExamPayload = Omit<ReadingExamPayload, "passageNumber"> & {
  isFullTest: true;
  passageNumber: 0;
  passageQuestionRanges: ReadingPassageQuestionRange[];
};

function escHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatTfngInstructionHtml(
  lines: string[],
  variant: "true-false-ng" | "yes-no-ng",
): string {
  const text = lines.join(" ").trim();
  if (!text) return "";

  const segments = splitTfngInstructionSegments(text, variant);
  if (segments.length <= 1) {
    return `<p class="sec-instr-lead">${boldTfngInstructionSegment(text)}</p>`;
  }

  return segments
    .map((seg, i) => {
      const inner = boldTfngInstructionSegment(seg);
      const cls = i === 0 ? "sec-instr-lead" : "sec-instr-tfng-def";
      return `<p class="${cls}">${inner}</p>`;
    })
    .join("");
}

function renderSectionHeader(section: ExamQuestionSection): string {
  const instr =
    section.kind === "tfng"
      ? formatTfngInstructionHtml(
          section.instructionLines,
          section.statements[0]?.kind === "yes-no-ng" ? "yes-no-ng" : "true-false-ng",
        )
      : formatExamInstructionHtml(section.instructionLines);
  const instrBlock = instr ? `<div class="sec-instr">${instr}</div>` : "";
  return `<div class="sec-hdr"><div class="sec-range">${escHtml(section.title)}</div>${instrBlock}</div>`;
}

function mergeLetterOnlyParagraphs(paragraphs: string[]): string[] {
  const merged: string[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i] ?? "";
    if (/^[A-F]\.\s*$/.test(para.trim()) && i + 1 < paragraphs.length) {
      merged.push(`${para.trim()} ${paragraphs[i + 1] ?? ""}`.trim());
      i += 1;
      continue;
    }
    merged.push(para);
  }
  return merged;
}

function formatPassageParagraphs(body: string): string {
  const paragraphs = mergeLetterOnlyParagraphs(splitBodyParagraphs(body));
  return paragraphs
    .map((para) => {
      const letter = para.match(/^([A-F])\.\s+([\s\S]+)$/);
      if (letter?.[1] && letter[2]) {
        return `<p><span class="pid">${escHtml(letter[1])}.</span> ${escHtml(letter[2])}</p>`;
      }
      return `<p>${escHtml(para)}</p>`;
    })
    .join("\n");
}

function gapFillInputHtml(n: number): string {
  return `<span class="fi-stack"><span class="fi-num">(${n})</span><input class="fi" id="q${n}" autocomplete="off" oninput="markFill('q${n}',this.value)"></span>`;
}

function replaceGapPattern(
  raw: string,
  pattern: RegExp,
  renderToken: (n: number) => string,
): { html: string; nums: number[] } | null {
  const nums: number[] = [];
  const parts: string[] = [];
  const re = new RegExp(pattern.source, "g");
  let last = 0;
  let m = re.exec(raw);
  while (m !== null) {
    const n = Number.parseInt(m[1] ?? "", 10);
    if (!Number.isNaN(n)) nums.push(n);
    parts.push(escHtml(raw.slice(last, m.index)));
    parts.push(renderToken(n));
    last = m.index + m[0].length;
    m = re.exec(raw);
  }
  if (nums.length === 0) return null;
  parts.push(escHtml(raw.slice(last)));
  return { html: parts.join(""), nums };
}

function renderGapText(raw: string): { html: string; nums: number[] } {
  const underscored = replaceGapPattern(raw, FILL_GAP_RE, gapFillInputHtml);
  if (underscored) return underscored;

  const bare = replaceGapPattern(raw, BARE_GAP_RE, gapFillInputHtml);
  if (bare) return bare;

  const nums: number[] = [];
  const lead = raw.match(/^(\d{1,2})\s+(.+)$/);
  if (lead?.[1] && lead[2]) {
    const n = Number.parseInt(lead[1], 10);
    const body = lead[2];
    const blankRe = new RegExp(FILL_GAP_BLANK);
    const bm = blankRe.exec(body);
    if (bm && bm.index !== undefined && !Number.isNaN(n)) {
      nums.push(n);
      const before = escHtml(body.slice(0, bm.index));
      const after = escHtml(body.slice(bm.index + bm[0].length));
      return {
        html: `<span class="sentence-qnum">${n}</span>\u00a0\u00a0${before}${gapFillInputHtml(n)}${after}`,
        nums,
      };
    }
  }

  return { html: escHtml(raw), nums };
}

function gapPhraseDropHtml(n: number): string {
  return `<span class="fi-stack phrase-gap-stack"><span class="fi-num">(${n})</span><span class="phrase-drop" id="q${n}" data-qid="q${n}"></span></span>`;
}

function renderGapPhraseBank(raw: string, _options: McqOption[]): { html: string; nums: number[] } {
  const underscored = replaceGapPattern(raw, FILL_GAP_RE, gapPhraseDropHtml);
  if (underscored) return underscored;

  const bare = replaceGapPattern(raw, BARE_GAP_RE, gapPhraseDropHtml);
  if (bare) return bare;

  return { html: escHtml(raw), nums: [] };
}

function renderDragAnswerChip(letter: string, text: string, extraAttrs = ""): string {
  return `<div class="wbchip" draggable="false" data-letter="${escHtml(letter)}" data-phrase="${escHtml(text)}"${extraAttrs}><span class="wbchip-body"><span class="wbchip-letter">${escHtml(letter)}</span><span class="wbchip-text">${escHtml(text)}</span></span><span class="wbchip-drag-handle" draggable="true" role="button" aria-label="Kéo vào ô trả lời" title="Kéo vào ô trả lời"><span class="wbchip-grip" aria-hidden="true"></span></span></div>`;
}

function renderPhraseWordBank(options: McqOption[]): string {
  const sorted = [...options].sort((a, b) => a.letter.localeCompare(b.letter));
  const items = sorted.map((o) => renderDragAnswerChip(o.letter, o.text)).join("");
  return `<div class="wbank" data-phrase-bank="1"><div class="wbank-title">List of phrases</div><div class="wbank-grid" data-phrase-bank-grid="1">${items}</div></div>`;
}

function mcqOptionTags(options: McqOption[], includeLetterInValue = true): string {
  return options
    .map((o) => {
      const val = includeLetterInValue ? o.letter : o.letter;
      const label = `${o.letter}. ${o.text}`;
      return `<option value="${val}">${escHtml(label)}</option>`;
    })
    .join("");
}

function renderLetterSelectOptions(options: McqOption[], maxLetters = 6): string {
  if (options.length > 0) {
    return options
      .map(
        (o) =>
          `<option value="${escHtml(o.letter)}">${escHtml(o.letter)}${o.text ? ` — ${escHtml(o.text)}` : ""}</option>`,
      )
      .join("");
  }
  return Array.from({ length: maxLetters }, (_, i) => String.fromCharCode(65 + i))
    .map((l) => `<option value="${l}">${l}</option>`)
    .join("");
}

function renderParagraphMatch(section: ExamQuestionSection): { html: string; nums: number[] } {
  const letterOpts = renderLetterSelectOptions(section.options, 6);

  const blocks = section.statements
    .map((s) => {
      const qid = `q${s.num}`;
      return `<div class="mrow">
          <div class="mrow-top"><div class="mqnum">${s.num}</div><div class="mtext">${escHtml(s.text)}</div><select class="msel sel-compact" onchange="selMatch('${qid}',this)"><option value="">—</option>${letterOpts}</select></div>
        </div>`;
    })
    .join("");

  return {
    html: `${renderSectionHeader(section)}${blocks}`,
    nums: section.statements.map((s) => s.num),
  };
}

function renderPeopleMatch(section: ExamQuestionSection): { html: string; nums: number[] } {
  const letterOpts = renderLetterSelectOptions(section.options, 5);
  const listTitle = /list of experts/i.test(section.instructionLines.join(" "))
    ? "List of experts"
    : "List of people";
  const peopleBank =
    section.options.length > 0
      ? `<div class="people-bank"><div class="people-bank-title">${escHtml(listTitle)}</div><ul class="people-bank-list">${section.options
          .map(
            (o) =>
              `<li><span class="people-bank-letter">${escHtml(o.letter)}</span><span class="people-bank-name">${escHtml(o.text)}</span></li>`,
          )
          .join("")}</ul></div>`
      : "";

  const blocks = section.statements
    .map((s) => {
      const qid = `q${s.num}`;
      return `<div class="mrow">
          <div class="mrow-top"><div class="mqnum">${s.num}</div><div class="mtext">${escHtml(s.text)}</div><select class="msel sel-compact" id="sel-${qid}" onchange="selMatch('${qid}',this)"><option value="">—</option>${letterOpts}</select></div>
        </div>`;
    })
    .join("");

  return {
    html: `${renderSectionHeader(section)}${peopleBank}${blocks}`,
    nums: section.statements.map((s) => s.num),
  };
}

function renderTfng(section: ExamQuestionSection): { html: string; nums: number[] } {
  const tfngOpts =
    section.statements[0]?.kind === "yes-no-ng"
      ? `<option value="">—</option><option value="YES">Yes</option><option value="NO">No</option><option value="NOT GIVEN">Not Given</option>`
      : `<option value="">—</option><option value="TRUE">True</option><option value="FALSE">False</option><option value="NOT GIVEN">Not Given</option>`;

  const blocks = section.statements
    .map((s) => {
      const qid = `q${s.num}`;
      return `<div class="qb qb-tfng">
          <div class="qnum">Question ${s.num}</div>
          <div class="qtext">${escHtml(s.text)}</div>
          <div class="tfng">
            <select class="tfngsel" id="sel-${qid}" onchange="selTFNG('${qid}',this)">${tfngOpts}</select>
          </div>
        </div>`;
    })
    .join("");

  return {
    html: `${renderSectionHeader(section)}${blocks}`,
    nums: section.statements.map((s) => s.num),
  };
}

function renderSummaryFill(section: ExamQuestionSection): { html: string; nums: number[] } {
  const allNums: number[] = [];
  const lines = section.bodyLines;
  const titleLine =
    lines.find((l) => /\?$/.test(l) && !hasFillGap(l)) ??
    lines.find(
      (l) =>
        /^[A-Z]/.test(l) &&
        !hasFillGap(l) &&
        l.length < 72 &&
        !/^Complete the summary/i.test(l),
    );
  const bodyLines = lines.filter((l) => l !== titleLine);
  const usePhraseBank = section.options.length > 0;

  const chunks: string[] = [];
  for (const line of bodyLines) {
    const { html, nums } = usePhraseBank
      ? renderGapPhraseBank(line, section.options)
      : renderGapText(line);
    allNums.push(...nums);
    chunks.push(`${html} `);
  }

  const title = titleLine ? `<div class="sumtitle">${escHtml(titleLine)}</div>` : "";
  const bank = usePhraseBank ? renderPhraseWordBank(section.options) : "";
  return {
    html: `${renderSectionHeader(section)}${bank}<div class="sumbox">${title}<div class="sumtext">${chunks.join("")}</div></div>`,
    nums: allNums.length > 0 ? allNums : section.questionNums,
  };
}

function renderNoteFill(section: ExamQuestionSection): { html: string; nums: number[] } {
  const allNums: number[] = [];
  const instrOnly = section.instructionLines.filter((l) =>
    /^(Complete the notes|Choose\s|Write your|In boxes)/i.test(l),
  );
  const titleFromBody = section.bodyLines.find(
    (l) =>
      !/^[●○]/.test(l) &&
      !hasFillGap(l) &&
      l.length < 56 &&
      !/^Arrival of|^Protecting\b/i.test(l),
  );
  const notesTitle =
    section.instructionLines.find(
      (l) => !/^(Complete the notes|Choose\s|Write your|In boxes|NB\b)/i.test(l),
    ) ?? titleFromBody;

  const body = section.bodyLines
    .filter((line) => line !== notesTitle && line !== "•" && line !== "●")
    .map((line) => {
      const diagram = line.match(/^url\s*\|\s*(.+)$/i);
      if (diagram?.[1]) {
        const src = diagram[1].trim();
        return `<p class="diagram-img"><img src="${escHtml(src)}" alt="Diagram for questions" loading="lazy" /></p>`;
      }
      const raw = line.replace(/^[●○]\s*/, "");
      const { html, nums } = renderGapText(raw);
      allNums.push(...nums);
      const isSubheading =
        !/^●|^○/.test(line) &&
        !hasFillGap(line) &&
        nums.length === 0 &&
        /^[A-Z]/.test(line.trim()) &&
        line.trim().length < 72;
      if (isSubheading) {
        return `<p class="notes-subheading"><strong>${escHtml(line.trim())}</strong></p>`;
      }
      const prefix = /^[●○]/.test(line) ? "● " : "";
      return `<p>${prefix}${html}</p>`;
    })
    .join("");

  const titleBlock = notesTitle ? `<p class="notes-title">${escHtml(notesTitle)}</p>` : "";
  const headerSection: ExamQuestionSection = {
    ...section,
    instructionLines: instrOnly,
  };

  return {
    html: `${renderSectionHeader(headerSection)}<div class="notes-list">${titleBlock}${body}</div>`,
    nums: allNums.length > 0 ? allNums : section.questionNums,
  };
}

function renderChooseTwo(section: ExamQuestionSection): { html: string; nums: number[] } {
  const nums = section.questionNums;
  const optHtml = mcqOptionTags(section.options);
  const questionText = section.bodyLines.find((l) => /^Which TWO/i.test(l)) ?? section.bodyLines[0] ?? "";
  const bank =
    section.options.length > 0
      ? `<div class="choose-two-bank people-bank"><ul class="choose-two-options people-bank-list">${section.options
          .map(
            (o) =>
              `<li data-letter="${escHtml(o.letter)}"><span class="people-bank-letter">${escHtml(o.letter)}</span><span class="people-bank-name">${escHtml(o.text)}</span></li>`,
          )
          .join("")}</ul></div>`
      : "";

  const selects = nums
    .map(
      (n) =>
        `<div class="choose-two-pick"><span class="choose-two-label">${n}</span><select class="msel sel-compact choose-two-sel" id="sel-q${n}" onchange="selMatch('q${n}',this)"><option value="">—</option>${optHtml}</select></div>`,
    )
    .join("");

  return {
    html: `${renderSectionHeader(section)}<div class="choose-two-block">
      <p class="choose-two-qtext">${escHtml(questionText)}</p>
      ${bank}
      <div class="choose-two-picks">${selects}</div>
    </div>`,
    nums,
  };
}

function renderMcqSingle(section: ExamQuestionSection): { html: string; nums: number[] } {
  const questions =
    section.mcqQuestions.length > 0
      ? section.mcqQuestions
      : section.statements.map((s) => ({
          num: s.num,
          text: s.text,
          options: section.options,
        }));

  const blocks = questions
    .map((q) => {
      const qid = `q${q.num}`;
      const opts = q.options
        .map(
          (o) =>
            `<label class="opt"><input type="radio" name="${qid}" value="${escHtml(o.letter)}" onchange="selMCQ('${qid}',this)"><span class="opt-letter">${escHtml(o.letter)}</span><span class="opt-text">${escHtml(o.text)}</span></label>`,
        )
        .join("");
      return `<div class="qb qb-mcq">
          <div class="qnum">Question ${q.num}</div>
          <div class="qtext">${escHtml(q.text)}</div>
          <div class="opts" id="${qid}-opts">${opts}</div>
        </div>`;
    })
    .join("");

  return {
    html: `${renderSectionHeader(section)}<div class="mcq-block">${blocks}</div>`,
    nums: questions.map((q) => q.num),
  };
}

function renderQuestionSection(section: ExamQuestionSection): { html: string; nums: number[] } {
  switch (section.kind) {
    case "paragraph-match":
      return renderParagraphMatch(section);
    case "people-match":
      return renderPeopleMatch(section);
    case "tfng":
      return renderTfng(section);
    case "summary-fill":
      return renderSummaryFill(section);
    case "note-fill":
      return renderNoteFill(section);
    case "choose-two":
      return renderChooseTwo(section);
    case "mcq-single":
      return renderMcqSingle(section);
    default:
      return { html: "", nums: [] };
  }
}

export function buildReadingExamPayload(
  pilotId: string,
  passage: ReadingPassageBlock,
  pilotLabel: string,
): ReadingExamPayload | null {
  if (!passage.hasExamQuestions) return null;

  const sections = parsePassageExamSections(passage.questionsText);
  if (sections.length === 0) return null;

  const validationIssues = validatePassageExamSections(passage);
  if (validationIssues.length > 0 && process.env.NODE_ENV !== "production") {
    console.warn(`[reading-exam] ${passage.title} passage ${passage.passage}:`, validationIssues);
  }

  const allNums: number[] = [];
  const questionParts: string[] = [];

  for (const section of sections) {
    const rendered = renderQuestionSection(section);
    if (rendered.html) questionParts.push(rendered.html);
    allNums.push(...rendered.nums);
  }

  const sectionNums = sections.flatMap((section) => section.questionNums);
  const questionNums = [...new Set([...allNums, ...sectionNums])].sort((a, b) => a - b);
  const minQ = questionNums[0] ?? 1;
  const maxQ = questionNums[questionNums.length - 1] ?? minQ;

  const passageHtml = `<div class="passage-content active" id="p1-text">
    <div class="p-badge">Reading Passage ${passage.passage}</div>
    <div class="p-instr">You should spend about 20 minutes on Questions ${minQ}–${maxQ}, which are based on Reading Passage ${passage.passage} below.</div>
    <div class="p-title">${escHtml(passage.title)}</div>
    <div class="p-body">${formatPassageParagraphs(passage.body)}</div>
  </div>`;

  const answerKey: Record<string, string> = {};
  for (const n of questionNums) {
    const ans = passage.answerKey[n];
    if (ans != null && ans !== "") answerKey[`q${n}`] = ans;
  }
  const hasAnswerKey = questionNums.some((n) => passage.answerKey[n] != null && passage.answerKey[n] !== "");

  return {
    pilotId,
    passageNumber: passage.passage,
    title: passage.title,
    pilotLabel,
    passageHtml,
    questionsHtml: questionParts.join('<div class="sec-spacer"></div>'),
    questionNums,
    timeMinutes: 20,
    answerKey: hasAnswerKey ? answerKey : null,
    hasAnswerKey,
  };
}

function remapPassageHtmlForFullTest(passageHtml: string, passageNumber: number, active: boolean): string {
  const className = active ? "passage-content active" : "passage-content";
  return passageHtml
    .replace(/class="passage-content active"/, `class="${className}"`)
    .replace('id="p1-text"', `id="p${passageNumber}-text"`);
}

export function buildReadingFullTestExamPayload(
  pilotId: string,
  passages: ReadingPassageBlock[],
  pilotLabel: string,
): ReadingFullTestExamPayload | null {
  const examPassages = passages.filter((block) => block.hasExamQuestions).sort((a, b) => a.passage - b.passage);
  if (examPassages.length === 0) return null;

  const passageHtmlParts: string[] = [];
  const questionHtmlParts: string[] = [];
  const allNums: number[] = [];
  const answerKey: Record<string, string> = {};
  const passageQuestionRanges: ReadingPassageQuestionRange[] = [];

  for (const block of examPassages) {
    const single = buildReadingExamPayload(pilotId, block, pilotLabel);
    if (!single) continue;

    passageHtmlParts.push(remapPassageHtmlForFullTest(single.passageHtml, block.passage, block.passage === 1));
    questionHtmlParts.push(
      `<div class="qsection${block.passage === 1 ? " active" : ""}" id="q${block.passage}-section">${single.questionsHtml}</div>`,
    );
    allNums.push(...single.questionNums);
    if (single.answerKey) Object.assign(answerKey, single.answerKey);

    const minQ = single.questionNums[0] ?? 1;
    const maxQ = single.questionNums[single.questionNums.length - 1] ?? minQ;
    passageQuestionRanges.push({
      passage: block.passage,
      min: minQ,
      max: maxQ,
      title: block.title,
    });
  }

  if (passageHtmlParts.length === 0 || questionHtmlParts.length === 0) return null;

  const questionNums = [...new Set(allNums)].sort((a, b) => a - b);
  const hasAnswerKey = questionNums.some((n) => answerKey[`q${n}`] != null && answerKey[`q${n}`] !== "");

  return {
    pilotId,
    passageNumber: 0,
    title: pilotLabel,
    pilotLabel,
    passageHtml: passageHtmlParts.join("\n"),
    questionsHtml: questionHtmlParts.join("\n"),
    questionNums,
    timeMinutes: 60,
    answerKey: hasAnswerKey ? answerKey : null,
    hasAnswerKey,
    isFullTest: true,
    passageQuestionRanges,
  };
}
