/**
 * Map Stitch course UI (course info.zip) → Notion-format page-body for pinball-ielts.
 * Preserves full copy + links from lib/course-notion-html/pinball-ielts.html.
 *
 * Run from repo root: node scripts/compose-pinball-course-html.mjs
 * Requires the classic Notion-export pinball-ielts.html as input (restore via git if needed).
 */
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourcePath = join(root, "lib", "course-notion-html", "pinball-ielts.html");
const backupPath = join(root, "lib", "course-notion-html", "pinball-ielts.notion-export.html");

const SECTION_IDS = {
  overview: "25cf8af0-6218-8012-b91a-dd9325576d3d",
  curriculum: "25cf8af0-6218-807f-950b-f3cb46e92c35",
  entrance: "25cf8af0-6218-80f6-9600-ce4ebce211bd",
  tuition: "25cf8af0-6218-8093-ba9f-db8f3ad0921a",
  notes: "25cf8af0-6218-80ad-84ce-d97e424eee11",
  teacher: "25cf8af0-6218-80b2-9bd2-c25528213e56",
};

const html = readFileSync(sourcePath, "utf8");
if (!html.includes('id="25cf8af0-6218-8012-b91a-dd9325576d3d"')) {
  console.error(
    "Source does not look like Notion export. Restore backup:\n",
    `  cp ${backupPath} ${sourcePath}`,
  );
  process.exit(1);
}

// Keep a backup of the canonical export (once).
try {
  readFileSync(backupPath);
} catch {
  copyFileSync(sourcePath, backupPath);
  console.log("Saved backup:", backupPath);
}

const body = html.replace(/^<div class="page-body">/, "").replace(/<\/div>\s*$/, "");

function h3Index(id) {
  const re = new RegExp(`<h3[^>]*id="${id}"[^>]*>`);
  const m = body.match(re);
  if (!m) throw new Error(`h3 id not found: ${id}`);
  return m.index;
}

function extractBetweenIds(startId, endId) {
  const start = h3Index(startId);
  const contentStart = body.indexOf("</h3>", start) + 5;
  const end = endId ? h3Index(endId) : body.length;
  return normalizeChunk(body.slice(contentStart, end));
}

/** Notion export often starts a section with stray closing wrappers. */
function normalizeChunk(chunk) {
  return chunk
    .replace(/^(?:\s*<\/div>\s*)+/, "")
    .replace(/(?:\s*<\/div>\s*)+$/, "")
    .replace(/(?:\s*<div dir="auto" style="display:contents">\s*)+$/i, "")
    .trim();
}

const curriculumRaw = extractBetweenIds(SECTION_IDS.curriculum, SECTION_IDS.entrance);
let entranceRaw = extractBetweenIds(SECTION_IDS.entrance, SECTION_IDS.tuition);
let tuitionRaw = extractBetweenIds(SECTION_IDS.tuition, SECTION_IDS.notes);
const notesRaw = extractBetweenIds(SECTION_IDS.notes, SECTION_IDS.teacher);
let teacherRaw = extractBetweenIds(SECTION_IDS.teacher, null);

tuitionRaw = tuitionRaw.replace(
  /<div dir="auto" style="display:contents"><ul class="bulleted-list" id="25cf8af0-6218-8056-bad0-cb824a2e5b58">[\s\S]*?<\/ul><\/div>/,
  "",
);

/** @type {{ title: string; bullets: string[] }[]} */
const curriculum = [];
for (const row of curriculumRaw.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
  const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]);
  if (cells.length < 2) continue;
  const title = cells[0].replace(/<[^>]+>/g, "").trim();
  const bullets = cells[1]
    .split(/<br\s*\/?>/i)
    .map((part) => part.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  curriculum.push({ title, bullets });
}

function curriculumAccordion() {
  return curriculum
    .map(({ title, bullets }, i) => {
      const items = bullets.map((b) => `<li>${b}</li>`).join("\n");
      const open = i === 0 ? " open" : "";
      return `<details class="course-curriculum-item"${open}>
<summary><strong>${title}</strong></summary>
<ul class="bulleted-list">
${items}
</ul>
</details>`;
    })
    .join("\n");
}

const teacherMatch = teacherRaw.match(
  /<figure[^>]*course-teacher-profile[^>]*>([\s\S]*)<\/figure>/,
);
const teacherBio = teacherMatch
  ? teacherMatch[1].replace(/<div style="font-size:1\.5em">[\s\S]*?<\/div>/, "").trim()
  : teacherRaw;

const TEACHER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDV4ammZUfuPRdsbrTj-5neG-ab-zdKZBfwIxcoosCHKEAL_8_9wDcnwYpPNRWJU-cZV5VuJSwSXMrdWfP6fwRJlrTe60VwN0TOJtfgGvzdSFFwYkcWpT7ESV2ETLm9zLPteVl4ynAALdLjIh22WUd15BIpik-9d2Q9uKAcDfSwTxiM0Pm7ftQr1LxldcpBk6V7SDTeZNVmNSbz-Lp_tA7CGMvNBmBqyUGltBJJYXH6OK8C7xvYU8ZmQYwXEWouvnVCiQgTiM-SR";

const out = `<div class="page-body">
<h3 class="block-color-yellow_background" id="${SECTION_IDS.overview}">Tổng quan khoá học</h3>
<div class="course-overview-grid" role="list">
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🍠</span>
    <p class="course-overview-label">Đầu vào &amp; đầu ra</p>
    <p class="course-overview-value"><strong>4.5+</strong> → <strong>6.0+</strong></p>
  </div>
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🥕</span>
    <p class="course-overview-label">Hình thức</p>
    <p class="course-overview-value">Online qua <strong>Google Meet</strong></p>
  </div>
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🫚</span>
    <p class="course-overview-label">Sĩ số</p>
    <p class="course-overview-value"><strong>4–6</strong> học viên</p>
  </div>
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🥪</span>
    <p class="course-overview-label">Thời lượng</p>
    <p class="course-overview-value"><strong>32 buổi</strong> (~64 giờ)</p>
  </div>
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🥞</span>
    <p class="course-overview-label">Đánh giá</p>
    <p class="course-overview-value"><strong>Mid-term</strong> &amp; <strong>Final test</strong> (trên lớp)</p>
  </div>
  <div class="course-overview-card" role="listitem">
    <span class="course-overview-emoji" aria-hidden="true">🫛</span>
    <p class="course-overview-label">Nộp bài</p>
    <p class="course-overview-value"><strong>Google Classroom</strong> &amp; Drive</p>
  </div>
</div>
<p class="course-schedule-banner">
  <mark class="highlight-red_background"><strong>Ngày và giờ học dự kiến:</strong></mark>
  <mark class="highlight-red_background">Lớp tháng 4/2026 đã khai giảng</mark>
</p>

<h3 class="block-color-teal_background" id="${SECTION_IDS.curriculum}">Nội dung khoá học</h3>
<div class="course-curriculum-accordion">
${curriculumAccordion()}
</div>

<h3 class="block-color-blue_background" id="${SECTION_IDS.entrance}">Kiểm tra đầu vào</h3>
<div class="course-panel course-panel--entrance">
${entranceRaw}
</div>

<h3 class="block-color-pink_background" id="${SECTION_IDS.tuition}">Quyền lợi và học phí</h3>
<div class="course-tuition-layout">
  <div class="course-tuition-benefits">
${tuitionRaw}
  </div>
  <aside class="course-pricing-card" aria-label="Học phí">
    <p class="course-pricing-label">Học phí</p>
    <p class="course-pricing-main">2.100.000 <span>/ tháng</span></p>
    <p class="course-pricing-sub">~ 8.400.000 / khoá</p>
    <p class="course-pricing-note">Thanh toán linh hoạt: từng tháng (trước ngày 10) hoặc từng khoá</p>
  </aside>
</div>

<h3 class="block-color-red_background" id="${SECTION_IDS.notes}">Lưu ý</h3>
<div class="course-panel course-panel--notes">
${notesRaw}
</div>

<h3 class="block-color-brown_background" id="${SECTION_IDS.teacher}">Profile giáo viên</h3>
<div class="course-teacher-layout">
  <figure class="course-teacher-photo">
    <img src="${TEACHER_IMG}" alt="Ảnh giáo viên Ân" width="320" height="320" loading="lazy" decoding="async" />
  </figure>
  <div class="course-teacher-bio">
    <figure class="callout course-teacher-profile">
      <div style="width:100%">
${teacherBio}
      </div>
    </figure>
  </div>
</div>
</div>
`;

writeFileSync(sourcePath, out, "utf8");

const linkCount = new Set([...out.matchAll(/href="([^"]+)"/g)].map((m) => m[1])).size;
console.log("Wrote", sourcePath);
console.log(`  ${out.length} chars, ${curriculum.length} curriculum sections, ${linkCount} unique links`);
