import { createReadStream, createWriteStream, existsSync, readdirSync, readFileSync } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { join } from "node:path";

export type StardictInfo = {
  wordcount: number;
  idxfilesize: number;
  sametypesequence: string;
  bookname: string;
};

export type StardictEntry = {
  word: string;
  offset: number;
  size: number;
};

const IFO_RE = /^(\w+)=(.*)$/;

export function parseStardictIfo(content: string): StardictInfo {
  const map = new Map<string, string>();
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(IFO_RE);
    if (m) map.set(m[1]!.toLowerCase(), m[2]!.trim());
  }
  return {
    wordcount: Number(map.get("wordcount") ?? 0),
    idxfilesize: Number(map.get("idxfilesize") ?? 0),
    sametypesequence: map.get("sametypesequence") ?? "",
    bookname: map.get("bookname") ?? "",
  };
}

export function resolveStardictPaths(dictDir: string, namePrefix: string) {
  const base = join(dictDir, namePrefix);
  return {
    ifoPath: `${base}.ifo`,
    idxPath: `${base}.idx`,
    dictPath: `${base}.dict`,
    dictDzPath: `${base}.dict.dz`,
  };
}

/** Tìm prefix *.ifo trong thư mục (vd. tudien-stardict-en-vi-20260411). */
export function findStardictPrefix(dictDir: string): string | null {
  const ifo = readdirSync(dictDir).find((f) => f.endsWith(".ifo"));
  if (!ifo) return null;
  return ifo.replace(/\.ifo$/i, "");
}

/** Giải nén .dict.dz (gzip) → .dict nếu chưa có. */
export async function ensureStardictDictDecompressed(dictPath: string, dictDzPath: string): Promise<void> {
  if (existsSync(dictPath)) return;
  if (!existsSync(dictDzPath)) {
    throw new Error(`Không tìm thấy ${dictDzPath} — giải nén zip StarDict trước.`);
  }

  await pipeline(createReadStream(dictDzPath), createGunzip(), createWriteStream(dictPath));
}

export function readStardictDictBuffer(dictPath: string): Buffer {
  return readFileSync(dictPath);
}

/** Đọc toàn bộ chỉ mục .idx (word\\0 + offset BE u32 + size BE u32). */
export function* iterateStardictIdx(idxPath: string, expectedSize?: number): Generator<StardictEntry> {
  const buf = readFileSync(idxPath);
  if (expectedSize && buf.length !== expectedSize) {
    console.warn(`idx size ${buf.length} ≠ ifo idxfilesize ${expectedSize}`);
  }

  let i = 0;
  while (i < buf.length) {
    const start = i;
    while (i < buf.length && buf[i] !== 0) i++;
    if (i >= buf.length) break;
    const word = buf.subarray(start, i).toString("utf8");
    i += 1;
    if (i + 8 > buf.length) break;
    const offset = buf.readUInt32BE(i);
    const size = buf.readUInt32BE(i + 4);
    i += 8;
    if (!word) continue;
    yield { word, offset, size };
  }
}

export function readStardictHtml(dictBuf: Buffer, entry: StardictEntry): string {
  return dictBuf.subarray(entry.offset, entry.offset + entry.size).toString("utf8");
}
