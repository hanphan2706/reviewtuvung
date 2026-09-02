import fs from "node:fs";
import path from "node:path";
import { getListeningPartBySlug, type ListeningPartMeta } from "@/lib/listening/content-manifest";
import {
  buildListeningExamPayload,
  buildListeningExamTrackHtml,
  buildListeningFullTestExamPayload,
  buildListeningFullTestTrackHtml,
  buildPinballEntryListeningExamPayload,
  buildRealExamListeningExamPayload,
  type ListeningExamPayload,
  type ListeningFullTestExamPayload,
  type ListeningPartQuestionRange,
  type PinballEntryListeningExamPayload,
} from "@/lib/listening/build-listening-exam-html";
import {
  getListeningIeltsTest,
  LISTENING_IELTS_EXAM_HREF,
  type ListeningIeltsTestId,
} from "@/lib/listening/ielts-test-catalog";
import { getListeningRealExam, isListeningRealExamSlug, type RealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadListeningQnaPart } from "@/lib/listening/generate-ielts-listening-flow-content";
import { getListeningPartQnaRef } from "@/lib/listening/listening-qna-catalog";
import { listeningLessonHrefBySlug } from "@/lib/listening/listening-hub-nav";
import { injectExamCopyFriction } from "@/lib/exam/inject-exam-copy-friction";
import { injectExamDictionaryPopover } from "@/lib/exam/inject-exam-dictionary-popover";

const PILOT_LABELS: Record<string, string> = {
  cam21: "Cambridge 21",
  cam20: "Cambridge 20",
  cam19: "Cambridge 19",
  cam18: "Cambridge 18",
  cam17: "Cambridge 17",
  cam16: "Cambridge 16",
  cam15: "Cambridge 15",
  cam14: "Cambridge 14",
  cam13: "Cambridge 13",
  cam12: "Cambridge 12",
};

function pilotLabelForMeta(meta: ListeningPartMeta): string {
  const base = PILOT_LABELS[meta.examSlug] ?? meta.metaPill;
  return `${base} · Test ${meta.test}`;
}

const MAIN_SCRIPT_MARKER = "<script>\n/* listening-part-exam boot */";

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

function buildPartTabsHtml(ranges: readonly ListeningPartQuestionRange[]): string {
  const tabs = ranges
    .map((range) => {
      const active = range.part === 1 ? " active" : "";
      return `<div class="ptab${active}" data-part="${range.part}" onclick="switchListeningPart(${range.part})">Part ${range.part} &nbsp;<small style="font-weight:400;opacity:.7">Q${range.min}–${range.max}</small></div>`;
    })
    .join("\n  ");
  return `<div class="ptab-bar" id="part-tabs">\n  ${tabs}\n</div>`;
}

function formatListeningExamMetaLabel(boot: {
  pilotLabel?: string;
  partNumber?: number;
  isFullTest?: boolean;
}): string {
  const parts: string[] = [];
  if (boot.pilotLabel) parts.push(boot.pilotLabel);
  if (!boot.isFullTest && boot.partNumber) parts.push(`Part ${boot.partNumber}`);
  return parts.join(" · ");
}

function injectListeningExamMeta(html: string, boot: Parameters<typeof formatListeningExamMetaLabel>[0]): string {
  const label = formatListeningExamMetaLabel(boot)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return html.replace(
    /<div id="tb-exam-meta" class="tb-exam-meta">[\s\S]*?<\/div>/,
    `<div id="tb-exam-meta" class="tb-exam-meta">${label}</div>`,
  );
}

function injectServerRenderedExam(template: string, boot: ListeningExamPayload): string {
  let html = template.replace('<html lang="en">', '<html lang="en" class="exam-skip-login">');

  html = html.replace(
    /<div id="questions-panel">[\s\S]*?<\/div><!-- \/questions-panel -->/,
    `<div id="questions-panel">${boot.questionsHtml}</div><!-- /questions-panel -->`,
  );

  html = html.replace(
    /<div class="track-groups">[\s\S]*?<\/div><!-- \/track-groups -->/,
    `<div class="track-groups">${buildListeningExamTrackHtml(boot.questionNums)}</div><!-- /track-groups -->`,
  );

  html = html.replace(
    /<audio id="exam-audio"[^>]*>/,
    `<audio id="exam-audio" preload="auto" playsinline src="${boot.audioUrl.replace(/"/g, "&quot;")}">`,
  );

  html = html.replace(
    /<div class="transcript-body" id="transcript-body">[\s\S]*?<\/div><!-- \/transcript-body -->/,
    `<div class="transcript-body" id="transcript-body">${boot.transcriptHtml || '<p class="transcript-empty">Không có transcript cho Part này.</p>'}</div><!-- /transcript-body -->`,
  );

  html = html.replace(
    /<audio id="review-audio"[^>]*>/,
    `<audio id="review-audio" preload="metadata" playsinline src="${boot.audioUrl.replace(/"/g, "&quot;")}">`,
  );

  html = html.replace(
    /<div class="tb-title" id="tb-passage-title">[\s\S]*?<\/div>/,
    `<div class="tb-title" id="tb-passage-title">${boot.title}</div>`,
  );

  html = injectListeningExamMeta(html, boot);

  return html;
}

function injectFullTestServerRenderedExam(
  template: string,
  boot: ListeningFullTestExamPayload | PinballEntryListeningExamPayload,
): string {
  const minQ = boot.questionNums[0] ?? 1;
  const maxQ = boot.questionNums[boot.questionNums.length - 1] ?? minQ;

  let html = template.replace('<html lang="en">', '<html lang="en" class="exam-skip-login">');

  html = html.replace(
    /<div id="prog-wrap"><div id="prog-bar"><\/div><\/div>/,
    `${buildPartTabsHtml(boot.partQuestionRanges)}\n  <div id="prog-wrap"><div id="prog-bar"></div></div>`,
  );

  html = html.replace(
    /<div id="questions-panel">[\s\S]*?<\/div><!-- \/questions-panel -->/,
    `<div id="questions-panel">${boot.questionsHtml}</div><!-- /questions-panel -->`,
  );

  html = html.replace(
    /<div class="track-groups">[\s\S]*?<\/div><!-- \/track-groups -->/,
    `<div class="track-groups">${buildListeningFullTestTrackHtml(boot.partQuestionRanges)}</div><!-- /track-groups -->`,
  );

  html = html.replace(
    /<audio id="exam-audio"[^>]*>/,
    `<audio id="exam-audio" preload="auto" playsinline src="">`,
  );

  html = html.replace(
    /<div class="transcript-body" id="transcript-body">[\s\S]*?<\/div><!-- \/transcript-body -->/,
    `<div class="transcript-body transcript-by-part" id="transcript-body">${boot.transcriptHtml || '<p class="transcript-empty">Không có transcript cho bài thi này.</p>'}</div><!-- /transcript-body -->`,
  );

  html = html.replace(
    /<audio id="review-audio"[^>]*>/,
    `<audio id="review-audio" preload="metadata" playsinline src="">`,
  );

  html = html.replace(
    /<div class="tb-title" id="tb-passage-title">[\s\S]*?<\/div>/,
    `<div class="tb-title" id="tb-passage-title"></div>`,
  );

  html = injectListeningExamMeta(html, { ...boot, isFullTest: true });

  return html;
}

export async function buildListeningPartExamHtml(slug: string): Promise<string> {
  const meta = getListeningPartBySlug(slug);
  if (!meta) {
    throw new Error("lesson not found");
  }

  const ref = getListeningPartQnaRef(meta.id);
  if (!ref) {
    throw new Error("no qna for part");
  }

  const qnaPart = loadListeningQnaPart(ref);
  if (!qnaPart) {
    throw new Error("qna file missing");
  }

  const payload = buildListeningExamPayload(meta, qnaPart, {
    back: listeningLessonHrefBySlug(meta.slug),
    pilotLabel: pilotLabelForMeta(meta),
  });
  if (!payload) {
    throw new Error("no exam questions");
  }

  const templatePath = path.join(process.cwd(), "public/listening-part-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectServerRenderedExam(template, payload);

  const slimBoot = {
    questionNums: payload.questionNums,
    timeMinutes: payload.timeMinutes,
    back: payload.back,
    title: payload.title,
    pilotLabel: payload.pilotLabel,
    partNumber: payload.partNumber,
    audioUrl: payload.audioUrl,
    hasTranscript: payload.hasTranscript,
    skipLogin: true,
    ssr: true,
    answerKey: payload.answerKey,
    hasAnswerKey: payload.hasAnswerKey,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "listening"),
    "listening",
  );
}

/** Public, no-login entrance test — 4 parts, no Cambridge catalog lookup, no "add to deck". */
export async function buildPinballEntryListeningExamHtml(): Promise<string> {
  const payload = buildPinballEntryListeningExamPayload({
    back: "/di-hoc/pinball-ielts",
    pilotLabel: "Pinball IELTS — Bài kiểm tra đầu vào",
  });
  if (!payload) {
    throw new Error("no exam questions");
  }

  const templatePath = path.join(process.cwd(), "public/listening-part-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectFullTestServerRenderedExam(template, payload);

  const slimBoot = {
    questionNums: payload.questionNums,
    back: payload.back,
    title: payload.title,
    pilotLabel: payload.pilotLabel,
    audioUrls: payload.audioUrls,
    hasTranscript: payload.hasTranscript,
    skipLogin: true,
    ssr: true,
    isFullTest: true,
    partQuestionRanges: payload.partQuestionRanges,
    answerKey: payload.answerKey,
    hasAnswerKey: payload.hasAnswerKey,
    disableDeck: true,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "listening"),
    "listening",
  );
}

/** Đề thi thật IELTS 2+ — generate từ QnA + 1 file audio full test. */
export async function buildRealExamListeningExamHtml(slug: RealExamSlug): Promise<string> {
  if (!isListeningRealExamSlug(slug)) {
    throw new Error("not a listening real exam");
  }
  const exam = getListeningRealExam(slug);
  if (!exam) throw new Error("exam not found");

  const payload = buildRealExamListeningExamPayload(slug, {
    back: LISTENING_IELTS_EXAM_HREF,
    pilotLabel: exam.title,
  });
  if (!payload) {
    throw new Error("no exam questions");
  }

  const templatePath = path.join(process.cwd(), "public/listening-part-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectFullTestServerRenderedExam(template, payload);

  const slimBoot = {
    questionNums: payload.questionNums,
    back: payload.back,
    title: payload.title,
    pilotLabel: payload.pilotLabel,
    audioUrls: payload.audioUrls,
    hasTranscript: payload.hasTranscript,
    skipLogin: true,
    ssr: true,
    isFullTest: true,
    partQuestionRanges: payload.partQuestionRanges,
    answerKey: payload.answerKey,
    hasAnswerKey: payload.hasAnswerKey,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "listening"),
    "listening",
  );
}

export async function buildListeningFullTestExamHtml(testId: ListeningIeltsTestId): Promise<string> {
  const test = getListeningIeltsTest(testId);
  if (!test) {
    throw new Error("test not found");
  }

  const payload = buildListeningFullTestExamPayload(testId, {
    back: LISTENING_IELTS_EXAM_HREF,
    pilotLabel: test.label,
  });
  if (!payload) {
    throw new Error("no exam questions");
  }

  const templatePath = path.join(process.cwd(), "public/listening-part-exam.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const withContent = injectFullTestServerRenderedExam(template, payload);

  const slimBoot = {
    questionNums: payload.questionNums,
    back: payload.back,
    title: payload.title,
    pilotLabel: payload.pilotLabel,
    audioUrls: payload.audioUrls,
    hasTranscript: payload.hasTranscript,
    skipLogin: true,
    ssr: true,
    isFullTest: true,
    partQuestionRanges: payload.partQuestionRanges,
    answerKey: payload.answerKey,
    hasAnswerKey: payload.hasAnswerKey,
  };

  return injectExamDictionaryPopover(
    injectExamCopyFriction(injectExamBootScript(withContent, slimBoot), "listening"),
    "listening",
  );
}
