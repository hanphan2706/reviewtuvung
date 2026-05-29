/**
 * Import từ điển StarDict (tudien en-vi) → data/dictionary/en-vi-stardict.json
 *
 * Chạy: npm run dictionary:import-stardict
 * Tuỳ chọn: --dir dictionaries  --limit 5000  --include-phrases
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  extractViGlossesFromStardictHtml,
  isImportableHeadword,
} from "../lib/reading/stardict-gloss-extract";
import {
  ensureStardictDictDecompressed,
  findStardictPrefix,
  iterateStardictIdx,
  parseStardictIfo,
  readStardictDictBuffer,
  readStardictHtml,
  resolveStardictPaths,
} from "../lib/reading/stardict-reader";
import type { EnViWiktionaryIndex, WiktionaryViByPos } from "../lib/reading/wiktionary-vi-types";

const OUT_PATH = join(process.cwd(), "data/dictionary/en-vi-stardict.json");

function parseArgs(argv: string[]) {
  let dictDir = join(process.cwd(), "dictionaries");
  let limit = 0;
  let includePhrases = false;
  let prefix: string | null = null;

  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--dir" && argv[i + 1]) dictDir = join(process.cwd(), argv[++i]!);
    else if (argv[i] === "--limit" && argv[i + 1]) limit = Number(argv[++i]) || 0;
    else if (argv[i] === "--include-phrases") includePhrases = true;
    else if (argv[i] === "--prefix" && argv[i + 1]) prefix = argv[++i]!;
  }

  return { dictDir, limit, includePhrases, prefix };
}

function mergeEntry(index: EnViWiktionaryIndex, headword: string, byPos: WiktionaryViByPos): boolean {
  const key = headword.toLowerCase();
  const hasGloss = Object.values(byPos).some((arr) => arr?.length);
  if (!hasGloss) return false;

  const prev = index[key] ?? {};
  for (const [pos, list] of Object.entries(byPos) as [keyof WiktionaryViByPos, string[] | undefined][]) {
    if (!list?.length) continue;
    const merged = [...new Set([...(prev[pos] ?? []), ...list])].slice(0, 8);
    prev[pos] = merged;
  }
  index[key] = prev;
  return true;
}

async function main() {
  const { dictDir, limit, includePhrases, prefix: prefixArg } = parseArgs(process.argv);
  const prefix = prefixArg ?? findStardictPrefix(dictDir);
  if (!prefix) {
    throw new Error(`Không tìm thấy file .ifo trong ${dictDir}`);
  }

  const paths = resolveStardictPaths(dictDir, prefix);
  const ifo = parseStardictIfo(readFileSync(paths.ifoPath, "utf8"));

  console.log(`StarDict: ${ifo.bookname}`);
  console.log(`Từ trong idx: ~${ifo.wordcount.toLocaleString()}`);

  await ensureStardictDictDecompressed(paths.dictPath, paths.dictDzPath);
  const dictBuf = readStardictDictBuffer(paths.dictPath);

  const index: EnViWiktionaryIndex = {};
  let scanned = 0;
  let imported = 0;
  let skipped = 0;

  for (const entry of iterateStardictIdx(paths.idxPath, ifo.idxfilesize)) {
    scanned++;
    if (limit > 0 && imported >= limit) break;

    if (!isImportableHeadword(entry.word, includePhrases)) {
      skipped++;
      continue;
    }

    const html = readStardictHtml(dictBuf, entry);
    const byPos = extractViGlossesFromStardictHtml(html);
    if (mergeEntry(index, entry.word, byPos)) {
      imported++;
    } else {
      skipped++;
    }

    if (scanned % 25000 === 0) {
      console.log(`… đã quét ${scanned.toLocaleString()}, import ${imported.toLocaleString()}`);
    }
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, `${JSON.stringify(index)}\n`, "utf8");

  const mb = (Buffer.byteLength(JSON.stringify(index)) / 1024 / 1024).toFixed(1);
  console.log(`\nXong → ${OUT_PATH}`);
  console.log(`Quét: ${scanned.toLocaleString()}, import: ${imported.toLocaleString()}, bỏ qua: ${skipped.toLocaleString()}`);
  console.log(`Headword trong file: ${Object.keys(index).length.toLocaleString()} (~${mb} MB JSON)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
