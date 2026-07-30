import fs from "node:fs";
import path from "node:path";
import {
  buildReadingExamPayload,
  buildReadingFullTestExamPayload,
  type ReadingPassageQuestionRange,
} from "@/lib/reading/build-exam-html";
import { readingArticleHref } from "@/lib/reading/article-routes";
import type { ReadingHubArticle, ReadingPilotId } from "@/lib/reading/hub-articles";
import { READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";
import { loadReadingPassage, loadReadingPassages } from "@/lib/reading/load-reading-raw";
import {
  loadReadingExamExplanations,
  slimReadingExplanationsForBoot,
} from "@/lib/reading/load-reading-explanations";
import { injectExamCopyFriction } from "@/lib/exam/inject-exam-copy-friction";
import { injectExamDictionaryPopover } from "@/lib/exam/inject-exam-dictionary-popover";

const PILOT_LABELS: Record<ReadingPilotId, string> = {
  "cam17-test4": "Cambridge 17 · Test 4",
  "cam17-test3": "Cambridge 17 · Test 3",
  "cam17-test2": "Cambridge 17 · Test 2",
  "cam17-test1": "Cambridge 17 · Test 1",
  "cam19-test4": "Cambridge 19 · Test 4",
  "cam19-test3": "Cambridge 19 · Test 3",
  "cam19-test2": "Cambridge 19 · Test 2",
  "cam19-test1": "Cambridge 19 · Test 1",
  "cam18-test4": "Cambridge 18 · Test 4",
  "cam18-test3": "Cambridge 18 · Test 3",
  "cam18-test2": "Cambridge 18 · Test 2",
  "cam18-test1": "Cambridge 18 · Test 1",
  "cam20-test1": "Cambridge 20 · Test 1",
  "cam20-test2": "Cambridge 20 · Test 2",
  "cam20-test3": "Cambridge 20 · Test 3",
  "cam20-test4": "Cambridge 20 · Test 4",
  "cam16-test1": "Cambridge 16 · Test 1",
  "cam16-test2": "Cambridge 16 · Test 2",
  "cam16-test3": "Cambridge 16 · Test 3",
  "cam16-test4": "Cambridge 16 · Test 4",
  "cam15-test1": "Cambridge 15 · Test 1",
  "cam15-test2": "Cambridge 15 · Test 2",
  "cam15-test3": "Cambridge 15 · Test 3",
  "cam15-test4": "Cambridge 15 · Test 4",
  "cam12-test1": "Cambridge 12 · Test 1",
  "cam12-test2": "Cambridge 12 · Test 2",
  "cam12-test3": "Cambridge 12 · Test 3",
  "cam12-test4": "Cambridge 12 · Test 4",
  "cam13-test1": "Cambridge 13 · Test 1",
  "cam13-test2": "Cambridge 13 · Test 2",
  "cam13-test3": "Cambridge 13 · Test 3",
  "cam13-test4": "Cambridge 13 · Test 4",
  "cam14-test1": "Cambridge 14 · Test 1",
  "cam14-test2": "Cambridge 14 · Test 2",
  "cam14-test3": "Cambridge 14 · Test 3",
  "cam14-test4": "Cambridge 14 · Test 4",
  "cam21-test1": "Cambridge 21 · Test 1",
  "cam21-test2": "Cambridge 21 · Test 2",
  "cam21-test3": "Cambridge 21 · Test 3",
  "cam21-test4": "Cambridge 21 · Test 4",
  "reading-challenge-1": "Compass Publishing",
  "reading-challenge-2": "Compass Publishing",
  "reading-challenge-3": "Compass Publishing",
  "de-thi-that-1": "Đề thi thật 1",
};

export type ExamBootPayload = Awaited<ReturnType<typeof buildExamBootPayload>>;
export type FullTestExamBootPayload = Awaited<ReturnType<typeof buildFullTestExamBootPayload>>;

function buildPassageTabsHtml(ranges: ReadingPassageQuestionRange[]): string {
  const tabs = ranges
    .map((range) => {
      const active = range.passage === 1 ? " active" : "";
      return `<div class="ptab${active}" data-passage="${range.passage}" onclick="switchPassage(${range.passage})">Passage ${range.passage} &nbsp;<small style="font-weight:400;opacity:.7">Q${range.min}–${range.max}</small></div>`;
    })
    .join("\n  ");
  return `<div class="ptab-bar" id="passage-tabs">\n  ${tabs}\n</div>`;
}

function buildTrackGroupsHtml(ranges: ReadingPassageQuestionRange[]): string {
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

export async function buildExamBootPayload(article: ReadingHubArticle) {
  const block = await loadReadingPassage(article.pilotId, article.passage);
  if (!block) {
    throw new Error("passage not found");
  }

  const payload = buildReadingExamPayload(
    article.pilotId,
    block,
    PILOT_LABELS[article.pilotId] ?? article.pilotId,
  );
  if (!payload) {
    throw new Error("no exam questions");
  }

  const explanations = slimReadingExplanationsForBoot(
    loadReadingExamExplanations(article.pilotId),
  );

  return {
    ...payload,
    back: readingArticleHref(article),
    skipLogin: true as const,
    explanations,
  };
}

export async function buildFullTestExamBootPayload(pilotId: ReadingPilotId) {
  const passages = await loadReadingPassages(pilotId);
  const payload = buildReadingFullTestExamPayload(
    pilotId,
    passages,
    PILOT_LABELS[pilotId] ?? pilotId,
  );
  if (!payload) {
    throw new Error("no exam questions");
  }

  const explanations = slimReadingExplanationsForBoot(loadReadingExamExplanations(pilotId));

  return {
    ...payload,
    back: READING_IELTS_EXAM_HREF,
    skipLogin: true as const,
    explanations,
  };
}

function questionsPanelInnerHtml(questionsHtml: string): string {
  return `<div id="questions-scroll">${questionsHtml}</div>
<aside id="explanation-panel" class="explanation-panel" hidden aria-live="polite">
  <div class="explanation-panel-head">
    <div class="explanation-panel-title" id="explanation-panel-title">Gợi ý</div>
    <button type="button" class="explanation-panel-close" id="explanation-panel-close" aria-label="Đóng giải thích">×</button>
  </div>
  <div class="explanation-panel-body" id="explanation-panel-body"></div>
</aside>`;
}

const MAIN_SCRIPT_MARKER = "<script>\n/* Correct answers";

function injectExamBootScript(template: string, boot: Record<string, unknown>): string {
  const json = JSON.stringify(boot).replace(/</g, "\\u003c");
  const loader = `<script id="exam-boot-loader">
document.documentElement.classList.add('exam-skip-login');
try{window.__EXAM_BOOT__=${json};}catch(e){window.__EXAM_BOOT_ERROR__=String(e&&e.message||e);console.error('[exam-boot]',e);}
</script>`;

  if (template.includes(MAIN_SCRIPT_MARKER)) {
    return template.replace(MAIN_SCRIPT_MARKER, `${loader}\n${MAIN_SCRIPT_MARKER}`);
  }
  return loader + template;
}

function injectServerRenderedExam(template: string, boot: ExamBootPayload): string {
  const minQ = boot.questionNums[0] ?? 1;
  const maxQ = boot.questionNums[boot.questionNums.length - 1] ?? minQ;
  const trackLabel = `Q${minQ}–${maxQ}`;

  let html = template.replace("<html lang=\"en\">", '<html lang="en" class="exam-skip-login">');

  html = html.replace(
    /<div id="passage-panel">[\s\S]*?<\/div><!-- \/passage-panel -->/,
    `<div id="passage-panel" data-exam-ssr="1">${boot.passageHtml}</div><!-- /passage-panel -->`,
  );

  html = html.replace(
    /<div id="questions-panel">[\s\S]*?<\/div><!-- \/questions-panel -->/,
    `<div id="questions-panel" data-exam-ssr="1">${questionsPanelInnerHtml(`<div class="qsection active" id="q1-section">${boot.questionsHtml}</div>`)}</div><!-- /questions-panel -->`,
  );

  html = html
    .replace(/<h1 id="login-exam-title">[^<]*<\/h1>/, `<h1 id="login-exam-title">${boot.title}</h1>`)
    .replace(
      /<p id="login-exam-meta">[^<]*<\/p>/,
      `<p id="login-exam-meta">${boot.pilotLabel} · Questions ${minQ}–${maxQ}</p>`,
    )
    .replace(/<div class="tb-title" id="tb-passage-title">[^<]*<\/div>/, `<div class="tb-title" id="tb-passage-title">${boot.title}</div>`)
    .replace(/<div id="timer-box">60:00<\/div>/, `<div id="timer-box">20:00</div>`)
    .replace(/<span class="track-label" id="track-range-label">Questions<\/span>/, `<span class="track-label" id="track-range-label">${trackLabel}</span>`)
    .replace(/<title>[^<]*<\/title>/, `<title>ANTHICHTUHOC | ${boot.title}</title>`);

  return html;
}

function injectFullTestServerRenderedExam(template: string, boot: FullTestExamBootPayload): string {
  const minQ = boot.questionNums[0] ?? 1;
  const maxQ = boot.questionNums[boot.questionNums.length - 1] ?? minQ;

  let html = template.replace("<html lang=\"en\">", '<html lang="en" class="exam-skip-login">');

  html = html.replace(
    /<div id="prog-wrap"><div id="prog-bar"><\/div><\/div>/,
    `${buildPassageTabsHtml(boot.passageQuestionRanges)}\n  <div id="prog-wrap"><div id="prog-bar"></div></div>`,
  );

  html = html.replace(
    /<div id="passage-panel">[\s\S]*?<\/div><!-- \/passage-panel -->/,
    `<div id="passage-panel" data-exam-ssr="1">${boot.passageHtml}</div><!-- /passage-panel -->`,
  );

  html = html.replace(
    /<div id="questions-panel">[\s\S]*?<\/div><!-- \/questions-panel -->/,
    `<div id="questions-panel" data-exam-ssr="1">${questionsPanelInnerHtml(boot.questionsHtml)}</div><!-- /questions-panel -->`,
  );

  html = html.replace(
    /<div class="track-groups">[\s\S]*?<\/div>\s*<p class="track-hint">/,
    `<div class="track-groups">${buildTrackGroupsHtml(boot.passageQuestionRanges)}</div>\n      <p class="track-hint">`,
  );

  html = html
    .replace(/<h1 id="login-exam-title">[^<]*<\/h1>/, `<h1 id="login-exam-title">${boot.title}</h1>`)
    .replace(
      /<p id="login-exam-meta">[^<]*<\/p>/,
      `<p id="login-exam-meta">${boot.pilotLabel} · Questions ${minQ}–${maxQ}</p>`,
    )
    .replace(/<div class="tb-title" id="tb-passage-title">[^<]*<\/div>/, `<div class="tb-title" id="tb-passage-title">${boot.title}</div>`)
    .replace(/<div id="timer-box">60:00<\/div>/, `<div id="timer-box">60:00</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>ANTHICHTUHOC | ${boot.title}</title>`);

  return html;
}

/** HTML làm bài — đề render sẵn trên server (ổn định qua ngrok, không cần fetch API). */
export async function buildExamRunnerHtml(article: ReadingHubArticle): Promise<string> {
  const boot = await buildExamBootPayload(article);
  const templatePath = path.join(process.cwd(), "public/reading-passage-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectServerRenderedExam(template, boot);

  const slimBoot = {
    questionNums: boot.questionNums,
    timeMinutes: boot.timeMinutes,
    back: boot.back,
    title: boot.title,
    pilotLabel: boot.pilotLabel,
    skipLogin: true,
    ssr: true,
    answerKey: boot.answerKey,
    hasAnswerKey: boot.hasAnswerKey,
    explanations: boot.explanations,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "reading"),
  );
}

/** HTML làm bài full test (3 passage) — render sẵn trên server. */
export async function buildFullTestExamRunnerHtml(pilotId: ReadingPilotId): Promise<string> {
  const boot = await buildFullTestExamBootPayload(pilotId);
  const templatePath = path.join(process.cwd(), "public/reading-passage-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectFullTestServerRenderedExam(template, boot);

  const slimBoot = {
    questionNums: boot.questionNums,
    timeMinutes: boot.timeMinutes,
    back: boot.back,
    title: boot.title,
    pilotLabel: boot.pilotLabel,
    skipLogin: true,
    ssr: true,
    isFullTest: true,
    passageQuestionRanges: boot.passageQuestionRanges,
    answerKey: boot.answerKey,
    hasAnswerKey: boot.hasAnswerKey,
    explanations: boot.explanations,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "reading"),
  );
}
