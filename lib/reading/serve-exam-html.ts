import fs from "node:fs";
import path from "node:path";
import { buildReadingExamPayload } from "@/lib/reading/build-exam-html";
import { readingArticleHref } from "@/lib/reading/article-routes";
import type { ReadingHubArticle, ReadingPilotId } from "@/lib/reading/hub-articles";
import { loadReadingPassage } from "@/lib/reading/load-reading-raw";

const PILOT_LABELS: Record<ReadingPilotId, string> = {
  "cam20-test1": "Cambridge 20 · Test 1",
  "cam20-test2": "Cambridge 20 · Test 2",
  "cam20-test3": "Cambridge 20 · Test 3",
  "cam20-test4": "Cambridge 20 · Test 4",
  "reading-challenge-1": "Compass Publishing",
  "reading-challenge-2": "Compass Publishing",
};

export type ExamBootPayload = Awaited<ReturnType<typeof buildExamBootPayload>>;

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

  return {
    ...payload,
    back: readingArticleHref(article),
    skipLogin: true as const,
  };
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
    `<div id="questions-panel" data-exam-ssr="1"><div class="qsection active" id="q1-section">${boot.questionsHtml}</div></div><!-- /questions-panel -->`,
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
  };

  return injectExamBootScript(withContent, slimBoot);
}
