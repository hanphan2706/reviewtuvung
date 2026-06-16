import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyCambridgeReviewPatch } from "./midterm-cambridge-review.mjs";
import { applyMidtermListeningReviewPatch } from "./midterm-listening-review-patch.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(root);

const SKIP_LOGIN_CSS = `
html.exam-skip-login #login-screen{display:none!important}
html.exam-skip-login #exam-screen{display:flex!important;flex-direction:column;height:100vh;overflow:hidden}
#student-badge{display:none!important}
`;

const THEME_CSS = `
:root{
  --exam-chrome-bg:#FAFAFA;
  --exam-chrome-surface:#f5f5f7;
  --exam-chrome-border:#E4E4E7;
  --exam-chrome-text:#000001;
  --exam-chrome-muted:#47464b;
  --exam-chrome-subtle:#71717A;
  --exam-header-bg:#000001;
  --exam-header-text:#f7faf8;
  --exam-header-muted:rgba(247,250,248,.78);
  --exam-header-border:rgba(250,250,250,.14);
  --exam-header-surface:rgba(250,250,250,.1);
  --exam-submit-bg:#000001;
  --exam-submit-text:#FAFAFA;
  --exam-submit-hover:#000001;
  --exam-passage-bg:#FAFAFA;
  --exam-questions-bg:#FAFAFA;
  --exam-content-text:#000001;
  --exam-question-ink:#000001;
  --exam-purple:#000001;
  --exam-purple-dark:#000001;
  --exam-purple-soft:#f5f5f7;
  --exam-purple-border:#E4E4E7;
  --exam-accent:#000001;
  --exam-accent-soft:#f5f5f7;
  --exam-accent-border:#E4E4E7;
}
`;

/** Chrome overrides aligned with public/*-part-exam.html (logic unchanged). */
const CAMBRIDGE_CHROME_CSS = `
#exam-screen{background:var(--exam-chrome-surface)}
#topbar{background:var(--exam-header-bg);color:var(--exam-header-text);padding:10px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px;border-bottom:1px solid var(--exam-header-border);box-shadow:0 1px 0 rgb(0 0 0 / 0.12)}
.tb-left{display:flex;align-items:center;gap:14px}
.tb-back{
  display:inline-flex;align-items:center;flex-shrink:0;
  font-size:13px;font-weight:600;line-height:1.25;color:var(--exam-header-text);
  text-decoration:none;white-space:nowrap;
  transition:opacity .15s,color .15s;
}
.tb-back:hover{opacity:1;color:var(--exam-header-muted)}
.tb-title{font-size:13px;color:var(--exam-header-muted);white-space:nowrap;min-width:0;overflow:hidden;text-overflow:ellipsis}
.tb-exam-meta{
  font-size:12px;font-weight:600;color:var(--exam-header-muted);
  text-align:center;line-height:1.35;
  max-width:min(300px,30vw);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
#student-badge{font-size:12px;text-align:right;line-height:1.5;color:var(--exam-header-muted)}
#timer-box{min-width:78px;min-height:34px;padding:7px 14px;font-size:15px;font-weight:500;letter-spacing:2.5px;border:1px solid var(--exam-header-border);border-radius:9px;font-variant-numeric:tabular-nums;color:var(--exam-header-text);background:var(--exam-header-surface);display:flex;align-items:center;justify-content:center;line-height:1;text-align:center}
#timer-box.warn{background:rgba(255,235,238,.95);border-color:#e57373;color:#b71c1c}
.zoom-ctl{display:flex;align-items:center;gap:5px;border:1px solid var(--exam-header-border);border-radius:9px;padding:4px 7px;background:var(--exam-header-surface);min-height:34px}
.zoom-btn{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:1px solid var(--exam-header-border);border-radius:7px;background:rgba(250,250,250,.06);color:var(--exam-header-text);font-size:14px;cursor:pointer;font-family:inherit}
.zoom-btn:hover{background:rgba(250,250,250,.14);border-color:rgba(250,250,250,.22)}
.zoom-pct{font-size:11px;min-width:37px;text-align:center;color:var(--exam-header-muted)}
#prog-bar{height:4px;background:var(--exam-header-bg)}
#passage-panel{border-right:1px solid var(--exam-chrome-border);background:var(--exam-passage-bg)}
#questions-panel{background:var(--exam-questions-bg);border-left:1px solid var(--exam-chrome-border)}
#bot-bar{background:var(--exam-chrome-bg);border-top:1px solid var(--exam-chrome-border);padding:10px 16px 12px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-between;gap:12px 16px;flex-shrink:0;box-shadow:0 -1px 0 rgb(0 0 0 / 0.04)}
#sub-btn{flex-shrink:0;align-self:flex-start;background:var(--exam-submit-bg);color:var(--exam-submit-text);border:none;border-radius:8px;padding:10px 22px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;transition:opacity .15s}
#sub-btn:hover{opacity:.92}
#success-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,1,.92);align-items:center;justify-content:center;z-index:100}
.sdetail{background:var(--exam-chrome-surface);border:1px solid var(--exam-chrome-border)}
.audio-done{color:var(--exam-chrome-muted);background:var(--exam-chrome-bg);border-bottom:1px solid var(--exam-chrome-border)}
.qt{border-color:var(--exam-chrome-border);background:var(--exam-chrome-bg);color:var(--exam-chrome-muted)}
.qt.qt-done{background:#ebe6f4;border-color:var(--exam-purple);color:var(--exam-purple)}
.sec-range{color:var(--exam-chrome-text)}
.p-badge{color:var(--exam-chrome-muted)}
.fi,.si,.wbsel{border-bottom-color:var(--exam-chrome-border);color:var(--exam-question-ink)}
.fi:focus,.si:focus,.wbsel:focus{border-bottom-color:var(--exam-chrome-text)}
.opt{border-color:var(--exam-chrome-border);background:var(--exam-chrome-bg)}
.opt:hover{border-color:var(--exam-chrome-text);background:var(--exam-chrome-surface)}
.opt.sel{border-color:var(--exam-chrome-text);background:var(--exam-chrome-surface);font-weight:500}
.ntable th,.ntable td:first-child{background:var(--exam-chrome-surface);color:var(--exam-chrome-text)}
`;

function applyGrayTheme(html) {
  let out = html;
  out = out.replace(/<style>/, `<style>${THEME_CSS}${SKIP_LOGIN_CSS}`);

  const colorMap = [
    ["#4b2876", "var(--exam-chrome-text)"],
    ["#3a1f5c", "var(--exam-chrome-text)"],
    ["#3d2660", "var(--exam-chrome-text)"],
    ["#1a1a2e", "var(--exam-chrome-text)"],
    ["#f4f2f8", "var(--exam-chrome-surface)"],
    ["#f0ecf8", "var(--exam-chrome-surface)"],
    ["#e4dcf2", "var(--exam-chrome-border)"],
    ["#f8f6fc", "var(--exam-chrome-bg)"],
    ["#d4c8e4", "var(--exam-chrome-border)"],
    ["#ebe6f4", "var(--exam-chrome-surface)"],
    ["#e2daf0", "var(--exam-chrome-surface)"],
    ["#ede8f4", "var(--exam-chrome-surface)"],
    ["#e9e4f0", "var(--exam-chrome-surface)"],
    ["#a896c4", "var(--exam-chrome-border)"],
    ["#6b4d8f", "var(--exam-chrome-text)"],
    ["#6d6280", "var(--exam-chrome-muted)"],
    ["#c4b8d4", "var(--exam-chrome-border)"],
    ["#5a4a6e", "var(--exam-chrome-muted)"],
    ["#666", "var(--exam-chrome-muted)"],
    ["#777", "var(--exam-chrome-muted)"],
    ["#555", "var(--exam-chrome-muted)"],
    ["#999", "var(--exam-chrome-subtle)"],
    ["rgba(75,40,118,0.14)", "rgba(28,27,28,.08)"],
    ["rgba(75,40,118,.18)", "rgba(28,27,28,.12)"],
    ["rgba(75,40,118,.88)", "rgba(0,0,1,.92)"],
    ["rgba(75,40,118,.04)", "rgba(0,0,1,.04)"],
    ["rgba(75,40,118,.06)", "rgba(0,0,1,.06)"],
    ["rgba(160,140,200,.45)", "rgba(228,228,231,.9)"],
  ];

  for (const [from, to] of colorMap) {
    out = out.split(from).join(to);
  }

  out = out.replace(
    /background:linear-gradient\(150deg,var\(--exam-chrome-surface\) 0%,var\(--exam-chrome-border\) 100%\)/g,
    "background:var(--exam-chrome-surface)",
  );

  out = out.replace(/body\{font-family:[^}]+\}/, "body{font-family:'Segoe UI',Arial,sans-serif;background:var(--exam-chrome-surface);color:var(--exam-chrome-text);font-size:14px}");

  const styleEnd = out.indexOf("</style>");
  if (styleEnd !== -1) {
    out = out.slice(0, styleEnd) + `\n/* Cambridge shell overrides */\n${CAMBRIDGE_CHROME_CSS}\n` + out.slice(styleEnd);
  }

  return out;
}

function patchExamMetaLabel(html, label = "Đề thi thật 1") {
  return html.replace(
    /<div id="student-badge"><\/div>/,
    `<div id="tb-exam-meta" class="tb-exam-meta">${label}</div>\n      <div id="student-badge"></div>`,
  );
}

function patchExamHeader(html, { backHref, backLabel }) {
  return html.replace(
    /<div class="tb-left">[\s\S]*?<\/div>\s*\n\s*<div class="tb-right">/,
    `<div class="tb-left">
      <a id="tb-back-link" class="tb-back" href="${backHref}">${backLabel}</a>
      <div class="tb-title" id="tb-passage-title"></div>
    </div>
    <div class="tb-right">`,
  );
}

/** Reading full test: toolbar title follows active passage .p-title (Cambridge shell). */
function injectReadingPassageTitleSync(html) {
  const script = `<script>
(function(){
  function syncPassageTitle(){
    var active=document.querySelector('#passage-panel .passage-content.active .p-title');
    var tb=document.getElementById('tb-passage-title');
    if(tb)tb.textContent=active?active.textContent.trim():'';
  }
  if(typeof switchPassage==='function'&&!window.__midtermPassageTitlePatched){
    window.__midtermPassageTitlePatched=true;
    var _orig=switchPassage;
    switchPassage=function(n){_orig(n);syncPassageTitle();};
  }
  function boot(){syncPassageTitle();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
</script>`;
  const idx = html.lastIndexOf("</body>");
  if (idx === -1) return html + script;
  return html.slice(0, idx) + script + html.slice(idx);
}

function patchLoginCopy(html) {
  return html
    .replace(/Mid-Term Reading Test/g, "Đề thi thật 1")
    .replace(/Mid-Term Listening Test/g, "Đề thi thật 1")
    .replace(
      /IELTS Reading &mdash; Mid-Term Test/g,
      "IELTS Reading &mdash; Đề thi thật 1 &middot; Questions 1&ndash;40",
    )
    .replace(
      /IELTS Listening &mdash; Mid-Term Test/g,
      "IELTS Listening &mdash; Đề thi thật 1 &middot; Questions 1&ndash;40",
    );
}

function patchStartExam(html) {
  return html.replace(
    /document\.getElementById\('student-badge'\)\.innerHTML=sName\+'<br>'\+sCourse;/g,
    "/* student badge hidden in integrated shell */",
  );
}

function injectSkipLoginBoot(html) {
  const boot = `
<script>
(function(){
  document.documentElement.classList.add('exam-skip-login');
  function bootExam(){
    var nameEl=document.getElementById('inp-name');
    var courseEl=document.getElementById('inp-course');
    if(nameEl&&!nameEl.value)nameEl.value='Học viên';
    if(courseEl&&!courseEl.value)courseEl.value='Đề thi thật 1';
    if(window.__EXAM_BOOT__&&typeof applyExamPayload==='function')applyExamPayload(window.__EXAM_BOOT__);
    if(typeof startExam==='function')startExam();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootExam);
  else bootExam();
})();
</script>`;
  const idx = html.lastIndexOf("</body>");
  if (idx === -1) return html;
  return html.slice(0, idx) + boot + html.slice(idx);
}

function patchMidtermTabBarIds(html, kind) {
  const id = kind === "listening" ? "part-tabs" : "passage-tabs";
  if (html.includes(`id="${id}"`)) return html;
  return html.replace(/<div class="ptab-bar">/, `<div class="ptab-bar" id="${id}">`);
}

function buildReading() {
  const src = path.join(repoRoot, "index.html");
  let html = fs.readFileSync(src, "utf8");
  html = html.replace(
    /<title>.*?<\/title>/,
    "<title>ANTHICHTUHOC | Đề thi thật 1 · Luyện đọc</title>",
  );
  html = applyGrayTheme(html);
  html = patchExamHeader(html, {
    backHref: "/tu-hoc/luyen-doc/luyen-de-ielts",
    backLabel: "← Quay lại bài đọc",
  });
  html = patchExamMetaLabel(html);
  html = patchLoginCopy(html);
  html = patchStartExam(html);
  html = applyCambridgeReviewPatch(html, "reading");
  html = patchMidtermTabBarIds(html, "reading");
  html = injectReadingPassageTitleSync(html);
  html = injectSkipLoginBoot(html);
  const out = path.join(root, "public/midterm-reading-exam.html");
  fs.writeFileSync(out, html, "utf8");
  console.log("wrote", out);
}

function buildListening() {
  const src = path.join(repoRoot, "listening/index.html");
  let html = fs.readFileSync(src, "utf8");
  html = html.replace(
    /<title>.*?<\/title>/,
    "<title>ANTHICHTUHOC | Đề thi thật 1 · Luyện nghe</title>",
  );
  html = html.replace(
    'src="assets/midterm-listening-full.mp3"',
    'src="/midterm-assets/midterm-listening-full.mp3"',
  );
  html = applyGrayTheme(html);
  html = patchExamHeader(html, {
    backHref: "/tu-hoc/luyen-nghe/luyen-de-ielts",
    backLabel: "← Quay lại bài nghe",
  });
  html = patchExamMetaLabel(html);
  html = patchLoginCopy(html);
  html = patchStartExam(html);
  html = applyMidtermListeningReviewPatch(html);
  html = patchMidtermTabBarIds(html, "listening");
  html = injectSkipLoginBoot(html);
  const out = path.join(root, "public/midterm-listening-exam.html");
  fs.writeFileSync(out, html, "utf8");
  console.log("wrote", out);
}

buildReading();
buildListening();
