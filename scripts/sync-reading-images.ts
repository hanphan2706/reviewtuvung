/**
 * Đồng bộ URL ảnh bài đọc từ production → local/LAN.
 *
 * 1. Sao chép `reading-image-sync.example.json` → `reading-image-sync.json`
 * 2. Điền slug (hoặc article id) + URL ảnh đầy đủ
 * 3. Chạy: `npm run reading:sync-images`
 */
import fs from "node:fs";
import path from "node:path";
import {
  resolveReadingArticleRoute,
  readingArticleSlugFor,
} from "../lib/reading/article-routes";
import { getReadingHubArticleById } from "../lib/reading/hub-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import type { ReadingPilotId } from "../lib/reading/hub-articles";

const ROOT = process.cwd();
const CONFIG = path.join(ROOT, "scripts", "reading-image-sync.json");
const PASSAGE_MEDIA = path.join(ROOT, "lib", "reading", "passage-media.ts");
const LOAD_RAW = path.join(ROOT, "lib", "reading", "load-reading-raw.ts");

type SyncEntry = Record<string, string>;

function loadConfig(): SyncEntry {
  if (!fs.existsSync(CONFIG)) {
    throw new Error(
      `Thiếu ${CONFIG}. Sao chép từ scripts/reading-image-sync.example.json và điền URL ảnh.`,
    );
  }
  const raw = JSON.parse(fs.readFileSync(CONFIG, "utf8")) as unknown;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("reading-image-sync.json phải là object { slug hoặc articleId: imageUrl }");
  }
  const out: SyncEntry = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value !== "string" || !value.trim()) continue;
    out[key.trim().toLowerCase()] = value.trim();
  }
  if (Object.keys(out).length === 0) {
    throw new Error("Không có entry hợp lệ trong reading-image-sync.json");
  }
  return out;
}

function resolveArticle(key: string) {
  const article =
    resolveReadingArticleRoute(key) ?? getReadingHubArticleById(key);
  if (!article) {
    throw new Error(`Không tìm thấy bài: "${key}" (slug hoặc article id)`);
  }
  return article;
}

function updatePassageMediaTs(content: string, articleId: string, imageUrl: string): string {
  const escapedId = articleId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `("${escapedId}":\\s*\\n\\s*")([^"]+)(")`,
    "m",
  );
  if (!re.test(content)) {
    throw new Error(`Không tìm thấy key "${articleId}" trong passage-media.ts`);
  }
  return content.replace(re, `$1${imageUrl}$3`);
}

function updateRawTxtPassage(content: string, passage: number, imageUrl: string): string {
  const re = new RegExp(
    `(READING PASSAGE ${passage}\\s+[\\s\\S]*?^IMAGE\\nurl \\| )[^\\n]+`,
    "m",
  );
  if (!re.test(content)) {
    throw new Error(`Không tìm thấy khối IMAGE cho passage ${passage} trong file .txt`);
  }
  return content.replace(re, `$1${imageUrl}`);
}

function bumpReadingCacheKey(content: string): string {
  return content.replace(
    /(\["reading-passages-v)(\d+)(",)/,
    (_m, prefix, num, suffix) => `${prefix}${Number(num) + 1}${suffix}`,
  );
}

function main(): void {
  const entries = loadConfig();
  let mediaTs = fs.readFileSync(PASSAGE_MEDIA, "utf8");
  let loadRawTs = fs.readFileSync(LOAD_RAW, "utf8");
  const rawByPilot = new Map<ReadingPilotId, { path: string; content: string }>();

  const applied: string[] = [];

  for (const [key, imageUrl] of Object.entries(entries)) {
    const article = resolveArticle(key);
    const slug = readingArticleSlugFor(article);
    mediaTs = updatePassageMediaTs(mediaTs, article.id, imageUrl);

    const fileName = READING_RAW_FILES[article.pilotId];
    if (!fileName) {
      console.warn(`Bỏ qua .txt — pilot "${article.pilotId}" không có raw file`);
    } else {
      const rawPath = path.join(ROOT, "reading raw", fileName);
      let slot = rawByPilot.get(article.pilotId);
      if (!slot) {
        if (!fs.existsSync(rawPath)) {
          throw new Error(`Thiếu file: ${rawPath}`);
        }
        slot = { path: rawPath, content: fs.readFileSync(rawPath, "utf8") };
        rawByPilot.set(article.pilotId, slot);
      }
      slot.content = updateRawTxtPassage(slot.content, article.passage, imageUrl);
    }

    applied.push(`${slug} → ${article.id}`);
  }

  fs.writeFileSync(PASSAGE_MEDIA, mediaTs, "utf8");
  loadRawTs = bumpReadingCacheKey(loadRawTs);
  fs.writeFileSync(LOAD_RAW, loadRawTs, "utf8");

  for (const { path: rawPath, content } of rawByPilot.values()) {
    fs.writeFileSync(rawPath, content, "utf8");
  }

  console.log("Đã đồng bộ ảnh cho:");
  for (const line of applied) console.log(`  • ${line}`);
  console.log("\nKhởi động lại dev server (hoặc hard refresh) để thấy ảnh mới trên LAN.");
}

main();
