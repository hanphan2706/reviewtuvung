/**
 * Sync IELTS Writing + Speaking sample libraries (static HTML on Vercel or local folder)
 * into typed generated modules + Task 1 chart assets.
 *
 * Usage:
 *   npx tsx scripts/sync-ielts-sample-libraries.mts
 *   npx tsx scripts/sync-ielts-sample-libraries.mts --writing-only
 *   npx tsx scripts/sync-ielts-sample-libraries.mts --speaking-only
 *   npx tsx scripts/sync-ielts-sample-libraries.mts --dry-run
 *   npx tsx scripts/sync-ielts-sample-libraries.mts --writing-source=https://… --speaking-source=/path/to/folder
 *
 * Diff: so sánh theo `id` (tên file HTML). Bài mới → thêm; bài đã có → cập nhật nội dung;
 * bài biến mất trên nguồn → giữ lại local (không xoá) và cảnh báo.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { WritingSample } from "../lib/ielts-samples/writing-sample-types";
import { formatWritingSampleTitle } from "../lib/ielts-samples/writing-sample-taxonomy";
import type { SpeakingSample, SpeakingQaPair, SpeakingVocabItem } from "../lib/ielts-samples/speaking-sample-types";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WRITING_OUT = join(ROOT, "lib/ielts-samples/writing-samples.generated.ts");
const SPEAKING_OUT = join(ROOT, "lib/ielts-samples/speaking-samples.generated.ts");
const WRITING_ASSETS_DIR = join(ROOT, "public/writing-sample-assets");

const DEFAULT_WRITING_SOURCE = "https://ielts-writing-library.vercel.app";
const DEFAULT_SPEAKING_SOURCE = "https://ielts-speaking-library.vercel.app";

type Args = {
  writingOnly: boolean;
  speakingOnly: boolean;
  dryRun: boolean;
  writingSource: string;
  speakingSource: string;
};

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  return {
    writingOnly: argv.includes("--writing-only"),
    speakingOnly: argv.includes("--speaking-only"),
    dryRun: argv.includes("--dry-run"),
    writingSource:
      argv.find((a) => a.startsWith("--writing-source="))?.slice("--writing-source=".length) ??
      DEFAULT_WRITING_SOURCE,
    speakingSource:
      argv.find((a) => a.startsWith("--speaking-source="))?.slice("--speaking-source=".length) ??
      DEFAULT_SPEAKING_SOURCE,
  };
}

function decodeHtml(text: string): string {
  return text
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html: string): string {
  return decodeHtml(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function sectionAfterLabel(html: string, label: string): string {
  const re = new RegExp(
    `<div class="section-label">\\s*${label}\\s*<\\/div>\\s*<section class="card">([\\s\\S]*?)<\\/section>`,
    "i",
  );
  const m = html.match(re);
  return m?.[1] ?? "";
}

function extractPills(html: string): string[] {
  return [...html.matchAll(/<span class="pill[^"]*">([^<]+)<\/span>/gi)].map((m) =>
    decodeHtml(m[1]!.trim()),
  );
}

function idFromHref(href: string): string {
  const base = href.split("/").pop() ?? href;
  return base.replace(/\.html$/i, "");
}

function isHttpSource(source: string): boolean {
  return /^https?:\/\//i.test(source);
}

function sourceIndexUrl(source: string): string {
  if (isHttpSource(source)) {
    return source.replace(/\/?$/, "/") + "index.html";
  }
  return join(source, "index.html");
}

function sourcePageUrl(source: string, fileName: string): string {
  if (isHttpSource(source)) {
    return source.replace(/\/?$/, "/") + fileName;
  }
  return join(source, fileName);
}

async function readText(source: string, fileNameOrAbsolute: string): Promise<string> {
  if (isHttpSource(source)) {
    const url = fileNameOrAbsolute.startsWith("http")
      ? fileNameOrAbsolute
      : sourcePageUrl(source, fileNameOrAbsolute);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  }
  const path = fileNameOrAbsolute.startsWith("/")
    ? fileNameOrAbsolute
    : join(source, fileNameOrAbsolute);
  return readFileSync(path, "utf8");
}

async function readBytes(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return new Uint8Array(await res.arrayBuffer());
}

type IndexRow = {
  id: string;
  href: string;
  title: string;
  colA: string;
  colB: string;
  band: string;
  dataSearch: string;
};

function extractWritingTopic(dataSearch: string): string {
  const tokens = dataSearch.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const taskIdx = tokens.findIndex((t) => t === "task1" || t === "task2");
  if (taskIdx >= 0) {
    // Pattern: … task1|task2 <type> <topic…> <band>
    const afterType = tokens.slice(taskIdx + 2);
    if (afterType.length > 0 && /^\d+(\.\d+)?$/.test(afterType[afterType.length - 1]!)) {
      afterType.pop();
    }
    const topic = afterType.join(" ").trim();
    if (topic) return topic;
  }

  if (tokens.length >= 2 && /^\d+(\.\d+)?$/.test(tokens[tokens.length - 1]!)) {
    const fallback = tokens[tokens.length - 2]!;
    if (fallback && fallback !== "task1" && fallback !== "task2") return fallback;
  }
  return "general";
}

function parseIndexRows(indexHtml: string): IndexRow[] {
  const rows: IndexRow[] = [];
  const trRe = /<tr([^>]*)>([\s\S]*?)<\/tr>/gi;
  for (const tr of indexHtml.matchAll(trRe)) {
    const attrs = tr[1] ?? "";
    const inner = tr[2]!;
    const dataSearch = attrs.match(/data-search=(["'])([^"']*)\1/i)?.[2]?.trim() ?? "";
    const cells = [...inner.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => m[1]!);
    if (cells.length < 3) continue;
    const link = cells[0]!.match(/<a[^>]+href=(["'])([^"']+)\1[^>]*>([\s\S]*?)<\/a>/i);
    if (!link) continue;
    const href = link[2]!.trim();
    if (!href.endsWith(".html")) continue;
    rows.push({
      id: idFromHref(href),
      href,
      title: stripTags(link[3]!),
      colA: stripTags(cells[1]!),
      colB: stripTags(cells[2]!),
      band: stripTags(cells[3] ?? cells[2]!),
      dataSearch,
    });
  }
  return rows;
}

function parseUsefulLanguage(sectionHtml: string): WritingSample["usefulLanguage"] {
  const items: { phrase: string; glossVi: string }[] = [];
  for (const m of sectionHtml.matchAll(/<li>([\s\S]*?)<\/li>/gi)) {
    const li = m[1]!;
    const phrase = stripTags(li.match(/<strong>([\s\S]*?)<\/strong>/i)?.[1] ?? "");
    const gloss = stripTags(li.match(/<span class='muted'>([\s\S]*?)<\/span>/i)?.[1] ?? "").replace(
      /^—\s*/,
      "",
    );
    if (phrase) items.push({ phrase, glossVi: gloss });
  }
  return items;
}

function parseWritingPage(
  id: string,
  html: string,
  sourceUrl: string,
  syncedAt: string,
  topic: string,
): WritingSample {
  const title = formatWritingSampleTitle(
    stripTags(html.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1] ?? id),
    id,
  );
  const pills = extractPills(html);
  const taskRaw = pills.find((p) => p === "task1" || p === "task2") ?? "task2";
  const task = taskRaw === "task1" ? "task1" : "task2";
  const type = pills.find((p) => p !== task && !/^band\b/i.test(p)) ?? "";
  const band = pills.find((p) => /^band\b/i.test(p))?.replace(/^band\s*/i, "").trim() ?? "";

  const promptSection = sectionAfterLabel(html, "Prompt");
  const visualMatch = promptSection.match(/<img[^>]+src="([^"]+)"/i);
  const promptHtml = promptSection
    .replace(/<img[\s\S]*?>/gi, "")
    .trim();

  const answerSection = sectionAfterLabel(html, "Model answer");
  const modelAnswer = decodeHtml(
    (answerSection.match(/<div class="answer">([\s\S]*?)<\/div>/i)?.[1] ?? "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>\s*<p>/gi, "\n\n")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const wordCountRaw = answerSection.match(/(\d+)\s*words/i)?.[1];
  const wordCount = wordCountRaw ? Number(wordCountRaw) : undefined;

  const usefulLanguage = parseUsefulLanguage(sectionAfterLabel(html, "Useful language"));

  return {
    id,
    title,
    task,
    type,
    topic,
    band,
    promptHtml,
    ...(visualMatch ? { visualSrc: visualMatch[1]! } : {}),
    modelAnswer,
    ...(wordCount ? { wordCount } : {}),
    usefulLanguage,
    sourceUrl,
    syncedAt,
  };
}

function parseSpeakingVocab(sectionHtml: string): SpeakingVocabItem[] {
  const items: SpeakingVocabItem[] = [];
  for (const m of sectionHtml.matchAll(/<li>([\s\S]*?)<\/li>/gi)) {
    const li = m[1]!;
    const term = stripTags(li.match(/<strong>([\s\S]*?)<\/strong>/i)?.[1] ?? "");
    const meta = stripTags(li.match(/<span class='muted'>([\s\S]*?)<\/span>/i)?.[1] ?? "").replace(
      /^\(|\)$/g,
      "",
    );
    const example = stripTags(li.match(/<em>\(([\s\S]*?)\)<\/em>/i)?.[1] ?? "");
    let glossVi = decodeHtml(li);
    glossVi = glossVi
      .replace(term, "")
      .replace(meta ? `(${meta})` : "", "")
      .replace(example ? `(${example})` : "", "")
      .replace(/^[:\s]+/, "")
      .trim();
    // Prefer text after `):` pattern from "term (meta): gloss (example)"
    const afterMeta = li.split("</span>")[1] ?? li;
    const glossFromHtml = stripTags(afterMeta.replace(/<em>[\s\S]*?<\/em>/gi, "")).replace(/^[:\s]+/, "");
    if (term) {
      items.push({
        term,
        ...(meta ? { meta } : {}),
        glossVi: glossFromHtml || glossVi,
        ...(example ? { example } : {}),
      });
    }
  }
  return items;
}

function parseSpeakingPage(id: string, html: string, sourceUrl: string, syncedAt: string): SpeakingSample {
  const title = stripTags(html.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1] ?? id);
  const pills = extractPills(html);
  const partRaw = pills.find((p) => /^part[123]$/i.test(p))?.toLowerCase() ?? "part1";
  const part = partRaw === "part2" ? "part2" : partRaw === "part3" ? "part3" : "part1";
  const band = pills.find((p) => /^band\b/i.test(p))?.replace(/^band\s*/i, "").trim() ?? "";

  const relatedPart3Href = html.match(/Part 3:\s*<a[^>]+href=(["'])([^"']+)\1/i)?.[2];
  const relatedPart2Href = html.match(/Part 2:\s*<a[^>]+href=(["'])([^"']+)\1/i)?.[2];

  const qSection = sectionAfterLabel(html, "Questions / cue");
  const questionsFromLi = [...qSection.matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((m) => stripTags(m[1]!));
  const questionsFromP = [...qSection.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => stripTags(m[1]!));
  const questions = (questionsFromLi.length > 0 ? questionsFromLi : questionsFromP).filter(Boolean);

  const aSection = sectionAfterLabel(html, "Model answers");
  const qaPairs: SpeakingQaPair[] = [...aSection.matchAll(/<div class=['"]qa['"]>([\s\S]*?)<\/div>/gi)].map(
    (m) => {
      const block = m[1]!;
      return {
        question: stripTags(block.match(/<div class=['"]q['"]>([\s\S]*?)<\/div>/i)?.[1] ?? ""),
        answer: decodeHtml(
          (block.match(/<div class=['"]a['"]>([\s\S]*?)<\/div>/i)?.[1] ?? "").replace(/<[^>]+>/g, ""),
        ).trim(),
      };
    },
  );

  let modelMonologue: string | undefined;
  if (qaPairs.length === 0) {
    const answerDiv = aSection.match(/<div class=['"]answer['"]>([\s\S]*?)<\/div>/i)?.[1];
    if (answerDiv) {
      modelMonologue = decodeHtml(answerDiv.replace(/<[^>]+>/g, "")).trim();
    } else {
      const cleaned = stripTags(aSection);
      if (cleaned) modelMonologue = cleaned;
    }
  }

  const vocabulary = parseSpeakingVocab(sectionAfterLabel(html, "Vocabulary"));

  return {
    id,
    title,
    part,
    band,
    questions,
    answers: qaPairs,
    ...(modelMonologue ? { modelMonologue } : {}),
    vocabulary,
    ...(relatedPart3Href ? { relatedPart3Id: idFromHref(relatedPart3Href) } : {}),
    ...(relatedPart2Href ? { relatedPart2Id: idFromHref(relatedPart2Href) } : {}),
    sourceUrl,
    syncedAt,
  };
}

function loadExistingWriting(): WritingSample[] {
  if (!existsSync(WRITING_OUT)) return [];
  try {
    const text = readFileSync(WRITING_OUT, "utf8");
    const match = text.match(/export const WRITING_SAMPLES[^=]*=\s*(\[[\s\S]*\])\s+as const/);
    if (!match) return [];
    return Function(`"use strict"; return (${match[1]})`)() as WritingSample[];
  } catch {
    return [];
  }
}

function loadExistingSpeaking(): SpeakingSample[] {
  if (!existsSync(SPEAKING_OUT)) return [];
  try {
    const text = readFileSync(SPEAKING_OUT, "utf8");
    const match = text.match(/export const SPEAKING_SAMPLES[^=]*=\s*(\[[\s\S]*\])\s+as const/);
    if (!match) return [];
    return Function(`"use strict"; return (${match[1]})`)() as SpeakingSample[];
  } catch {
    return [];
  }
}

function serializeTs(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (value === null || value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const lines = value.map((item) => `${pad}  ${serializeTs(item, indent + 1)},`);
    return `[\n${lines.join("\n")}\n${pad}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([, v]) => v !== undefined,
    );
    if (entries.length === 0) return "{}";
    const lines = entries.map(
      ([k, v]) => `${pad}  ${/^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : JSON.stringify(k)}: ${serializeTs(v, indent + 1)},`,
    );
    return `{\n${lines.join("\n")}\n${pad}}`;
  }
  return "undefined";
}

function writeWritingFile(samples: WritingSample[]) {
  const body = `/**
 * AUTO-GENERATED by scripts/sync-ielts-sample-libraries.mts — do not edit by hand.
 * Source: IELTS Writing sample library HTML.
 * Generated: ${new Date().toISOString()}
 */
import "server-only";
import type { WritingSample } from "@/lib/ielts-samples/writing-sample-types";

export const WRITING_SAMPLES: readonly WritingSample[] = ${serializeTs(samples)} as const;
`;
  writeFileSync(WRITING_OUT, body, "utf8");
}

function writeSpeakingFile(samples: SpeakingSample[]) {
  const body = `/**
 * AUTO-GENERATED by scripts/sync-ielts-sample-libraries.mts — do not edit by hand.
 * Source: IELTS Speaking sample library HTML.
 * Generated: ${new Date().toISOString()}
 */
import type { SpeakingSample } from "@/lib/ielts-samples/speaking-sample-types";

export const SPEAKING_SAMPLES: readonly SpeakingSample[] = ${serializeTs(samples)} as const;
`;
  writeFileSync(SPEAKING_OUT, body, "utf8");
}

async function downloadWritingVisual(
  source: string,
  sample: WritingSample,
  dryRun: boolean,
): Promise<WritingSample> {
  if (!sample.visualSrc) return sample;
  const fileName = sample.visualSrc.split("/").pop() ?? `${sample.id}.png`;
  const destRel = `/writing-sample-assets/${fileName}`;
  const destAbs = join(WRITING_ASSETS_DIR, fileName);

  if (dryRun) {
    return { ...sample, visualSrc: destRel };
  }

  mkdirSync(WRITING_ASSETS_DIR, { recursive: true });
  if (existsSync(destAbs)) {
    console.log(`  asset ${fileName} (keep local)`);
    return { ...sample, visualSrc: destRel };
  }
  if (isHttpSource(source)) {
    const url = sample.visualSrc.startsWith("http")
      ? sample.visualSrc
      : source.replace(/\/?$/, "/") + sample.visualSrc.replace(/^\.\//, "");
    const bytes = await readBytes(url);
    writeFileSync(destAbs, bytes);
    console.log(`  asset ${fileName} (${bytes.byteLength} bytes)`);
  } else {
    const srcPath = join(source, sample.visualSrc);
    if (!existsSync(srcPath)) {
      console.warn(`  missing asset ${srcPath}`);
      return sample;
    }
    writeFileSync(destAbs, readFileSync(srcPath));
    console.log(`  asset ${fileName} (copied)`);
  }
  return { ...sample, visualSrc: destRel };
}

function diffReport(label: string, beforeIds: Set<string>, afterIds: Set<string>) {
  const added = [...afterIds].filter((id) => !beforeIds.has(id)).sort();
  const removed = [...beforeIds].filter((id) => !afterIds.has(id)).sort();
  const kept = [...afterIds].filter((id) => beforeIds.has(id)).length;
  console.log(
    `${label}: total=${afterIds.size} kept/updated=${kept} added=${added.length} missing-on-source=${removed.length}`,
  );
  if (added.length) console.log(`  + ${added.join(", ")}`);
  if (removed.length) {
    console.log(`  ! still on app, not on source: ${removed.join(", ")}`);
  }
}

async function syncWriting(source: string, dryRun: boolean) {
  console.log(`\n[writing] source=${source}`);
  const existing = loadExistingWriting();
  const beforeIds = new Set(existing.map((s) => s.id));
  const byId = new Map(existing.map((s) => [s.id, s]));

  const indexHtml = await readText(source, "index.html");
  console.log(`  index bytes=${indexHtml.length}`);
  const rows = parseIndexRows(indexHtml);
  console.log(`  index rows=${rows.length}`);
  const syncedAt = new Date().toISOString();
  const next: WritingSample[] = [];

  for (const row of rows) {
    const fileName = row.href.includes("/") ? row.href.split("/").pop()! : row.href;
    const pageUrl = isHttpSource(source) ? sourcePageUrl(source, fileName) : sourcePageUrl(source, fileName);
    const html = await readText(source, fileName);
    const topic = extractWritingTopic(row.dataSearch || `${row.id} ${row.colB}`);
    let sample = parseWritingPage(row.id, html, pageUrl, syncedAt, topic);
    // Prefer index metadata when pills incomplete
    if (!sample.task && (row.colA === "task1" || row.colA === "task2")) {
      sample = { ...sample, task: row.colA };
    }
    if (!sample.type && row.colB) sample = { ...sample, type: row.colB };
    if (!sample.band && row.band) sample = { ...sample, band: row.band.replace(/^band\s*/i, "") };
    if (!sample.topic) sample = { ...sample, topic };
    sample = await downloadWritingVisual(source, sample, dryRun);
    next.push(sample);
    const isNew = !beforeIds.has(sample.id);
    console.log(`  ${isNew ? "ADD" : "UPD"} ${sample.id} (${sample.task}/${sample.type})`);
  }

  // Keep local-only samples
  for (const old of existing) {
    if (!next.some((s) => s.id === old.id)) {
      next.push({ ...old, topic: old.topic?.trim() || "general" });
    }
  }
  next.sort((a, b) => a.id.localeCompare(b.id));

  diffReport(
    "[writing]",
    beforeIds,
    new Set(next.map((s) => s.id)),
  );

  if (!dryRun) {
    writeWritingFile(next);
    console.log(`  wrote ${WRITING_OUT}`);
  } else {
    console.log("  dry-run: skip write");
  }

  void byId;
}

async function syncSpeaking(source: string, dryRun: boolean) {
  console.log(`\n[speaking] source=${source}`);
  const existing = loadExistingSpeaking();
  const beforeIds = new Set(existing.map((s) => s.id));

  const indexHtml = await readText(source, "index.html");
  console.log(`  index bytes=${indexHtml.length}`);
  const rows = parseIndexRows(indexHtml);
  console.log(`  index rows=${rows.length}`);
  const syncedAt = new Date().toISOString();
  const next: SpeakingSample[] = [];

  for (const row of rows) {
    const fileName = row.href.includes("/") ? row.href.split("/").pop()! : row.href;
    const pageUrl = sourcePageUrl(source, fileName);
    const html = await readText(source, fileName);
    let sample = parseSpeakingPage(row.id, html, pageUrl, syncedAt);
    if (!sample.part && /^part[123]$/i.test(row.colA)) {
      sample = {
        ...sample,
        part: row.colA.toLowerCase() as SpeakingSample["part"],
      };
    }
    if (!sample.band && row.band) sample = { ...sample, band: row.band.replace(/^band\s*/i, "") };
    next.push(sample);
    const isNew = !beforeIds.has(sample.id);
    if (isNew || next.length <= 5 || next.length % 40 === 0) {
      console.log(`  ${isNew ? "ADD" : "UPD"} ${sample.id} (${sample.part})`);
    }
  }

  for (const old of existing) {
    if (!next.some((s) => s.id === old.id)) next.push(old);
  }
  next.sort((a, b) => a.id.localeCompare(b.id));

  diffReport("[speaking]", beforeIds, new Set(next.map((s) => s.id)));

  if (!dryRun) {
    writeSpeakingFile(next);
    console.log(`  wrote ${SPEAKING_OUT}`);
  } else {
    console.log("  dry-run: skip write");
  }
}

async function main() {
  const args = parseArgs();
  const doWriting = !args.speakingOnly;
  const doSpeaking = !args.writingOnly;

  if (doWriting) await syncWriting(args.writingSource, args.dryRun);
  if (doSpeaking) await syncSpeaking(args.speakingSource, args.dryRun);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
