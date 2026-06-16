import fs from "node:fs";
import path from "node:path";
import { getListeningRealExam, listeningRealExamHref, type RealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadRealExamAnswerKey } from "@/lib/exam/real-exam-answer-key-files";
import { loadRealExamTranscriptSync } from "@/lib/exam/real-exam-sync-files";
import { loadRealExamTranscriptHtml } from "@/lib/exam/real-exam-transcript-files";
import { listeningAudioApiPath } from "@/lib/listening/listening-audio-storage";
import { listeningSyncCuesToExamHtml } from "@/lib/listening/listening-sync-cues-to-exam-html";
import { realTestListeningAudioFileName } from "@/lib/listening/listening-materials-urls";
import { injectExamCopyFriction } from "@/lib/exam/inject-exam-copy-friction";

const MAIN_SCRIPT_MARKER = "<script>\n/* Correct answers";

function loadMidtermTemplate(kind: "reading" | "listening"): string {
  const fileName = kind === "reading" ? "midterm-reading-exam.html" : "midterm-listening-exam.html";
  const filePath = path.join(process.cwd(), "public", fileName);
  return fs.readFileSync(filePath, "utf8");
}

function injectMidtermExamBoot(html: string, boot: Record<string, unknown>): string {
  const json = JSON.stringify(boot).replace(/</g, "\\u003c");
  const loader = `<script id="exam-boot-loader">
try{window.__EXAM_BOOT__=${json};}catch(e){window.__EXAM_BOOT_ERROR__=String(e&&e.message||e);console.error('[exam-boot]',e);}
</script>
`;

  if (html.includes(MAIN_SCRIPT_MARKER)) {
    return html.replace(MAIN_SCRIPT_MARKER, `${loader}${MAIN_SCRIPT_MARKER}`);
  }

  const bodyIdx = html.lastIndexOf("</body>");
  if (bodyIdx === -1) return loader + html;
  return html.slice(0, bodyIdx) + loader + html.slice(bodyIdx);
}

function realTestListeningAudioPagePath(slug: RealExamSlug): string {
  return `${listeningRealExamHref(slug)}/audio`;
}

function injectListeningAudio(html: string, _slug: RealExamSlug, audioUrl: string): string {
  const safeSrc = audioUrl.replace(/"/g, "&quot;");

  return html
    .replace(/src="\/midterm-assets\/midterm-listening-full\.mp3"/g, `src="${safeSrc}"`)
    .replace(/src="assets\/midterm-listening-full\.mp3"/g, `src="${safeSrc}"`)
    .replace(
      /<audio id="review-audio"[^>]*>/,
      `<audio id="review-audio" preload="metadata" playsinline src="${safeSrc}">`,
    )
    .replace(
      /<audio id="exam-audio"[^>]*>/,
      `<audio id="exam-audio" preload="auto" playsinline src="${safeSrc}">`,
    );
}

function injectListeningTranscript(html: string, transcriptHtml: string | null): string {
  const inner = transcriptHtml?.trim()
    ? transcriptHtml
    : '<p class="transcript-empty">Không có transcript cho bài thi này.</p>';

  return html.replace(
    /<div class="transcript-body" id="transcript-body">[\s\S]*?<\/div>/,
    `<div class="transcript-body" id="transcript-body">${inner}</div>`,
  );
}

/** applyExamPayload is defined in the main exam script — run after DOM + functions exist. */
function injectMidtermBootInit(html: string): string {
  const init = `<script>
(function(){
  function initExamBoot(){
    if(window.__EXAM_BOOT__&&typeof applyExamPayload==='function')applyExamPayload(window.__EXAM_BOOT__);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initExamBoot);
  else initExamBoot();
})();
</script>`;
  const bodyIdx = html.lastIndexOf("</body>");
  if (bodyIdx === -1) return html + init;
  return html.slice(0, bodyIdx) + init + html.slice(bodyIdx);
}

function buildMidtermExamHtml(slug: RealExamSlug, kind: "reading" | "listening"): string {
  let template = loadMidtermTemplate(kind);
  const answerKey = loadRealExamAnswerKey(slug, kind);

  const boot: Record<string, unknown> = {
    skipLogin: true,
    answerKey,
    hasAnswerKey: answerKey != null,
  };

  if (kind === "listening") {
    const exam = getListeningRealExam(slug);
    const audioUrl = exam
      ? listeningAudioApiPath(realTestListeningAudioFileName(exam.seriesNumber))
      : realTestListeningAudioPagePath(slug);
    const audioFallbackUrl = exam ? realTestListeningAudioPagePath(slug) : undefined;
    template = injectListeningAudio(template, slug, audioUrl);

    const sync = loadRealExamTranscriptSync(slug);
    const transcriptHtml = sync
      ? listeningSyncCuesToExamHtml(sync)
      : loadRealExamTranscriptHtml(slug);
    boot.audioUrl = audioUrl;
    if (audioFallbackUrl) boot.audioFallbackUrl = audioFallbackUrl;
    boot.transcriptHtml = transcriptHtml;
    boot.hasTranscript = transcriptHtml != null;
    if (sync) boot.transcriptSync = sync;
    template = injectListeningTranscript(template, transcriptHtml);
  }

  return injectExamCopyFriction(
    injectMidtermBootInit(injectMidtermExamBoot(template, boot)),
    kind,
  );
}

export function loadMidtermReadingExamHtml(slug: RealExamSlug = "de-thi-that-1"): string {
  return buildMidtermExamHtml(slug, "reading");
}

export function loadMidtermListeningExamHtml(slug: RealExamSlug = "de-thi-that-1"): string {
  return buildMidtermExamHtml(slug, "listening");
}
