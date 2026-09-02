#!/usr/bin/env npx tsx
/**
 * Kiểm tra dung lượng Supabase Storage và (tuỳ chọn) xóa file audio không còn dùng trên site.
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY trong .env.local
 *
 *   npx tsx scripts/audit-supabase-storage.ts           # báo cáo
 *   npx tsx scripts/audit-supabase-storage.ts --delete  # xóa file thừa (listening-audio)
 */
import { loadEnvLocal } from "./load-env-local";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";
import { LISTENING_PARTS_PILOT } from "../lib/listening/content-manifest";
import { LISTENING_REAL_EXAMS } from "../lib/exam/real-exam-catalog";
import { realTestListeningAudioFileName } from "../lib/listening/listening-materials-urls";
import { LISTENING_AUDIO_BUCKET } from "../lib/listening/listening-audio-storage";
import { READING_AUDIO_BUCKET, readingAudioObjectKey } from "../lib/reading/reading-audio-storage";
import { MEDIA_AUDIO_BUCKET } from "../lib/media/media-audio-storage";
import { STARDICT_BUCKET, STARDICT_OBJECT_KEY } from "../lib/reading/stardict-storage";
import { READING_HUB_ARTICLES } from "../lib/reading/hub-articles";

loadEnvLocal();

const BUCKETS = [
  LISTENING_AUDIO_BUCKET,
  READING_AUDIO_BUCKET,
  MEDIA_AUDIO_BUCKET,
  STARDICT_BUCKET,
] as const;

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

function fileFromListeningApiPath(apiPath: string): string | null {
  const match = apiPath.match(/[?&]file=([^&]+)/);
  if (!match?.[1]) return null;
  return decodeURIComponent(match[1]);
}

function requiredListeningFiles(): Set<string> {
  const required = new Set<string>();
  for (const part of LISTENING_PARTS_PILOT) {
    const file = fileFromListeningApiPath(part.audioPublicPath);
    if (file) required.add(file);
  }
  for (const exam of LISTENING_REAL_EXAMS) {
    required.add(realTestListeningAudioFileName(exam.seriesNumber));
  }
  for (let part = 1; part <= 4; part += 1) {
    required.add(`pinball-entry-part${part}.mp3`);
  }
  return required;
}

function requiredReadingFiles(): Set<string> {
  const required = new Set<string>();
  for (const article of READING_HUB_ARTICLES) {
    const key = readingAudioObjectKey(article.id);
    if (key) required.add(key);
  }
  return required;
}

function requiredStardictFiles(): Set<string> {
  return new Set([STARDICT_OBJECT_KEY]);
}

function listeningSeriesKey(fileName: string): string {
  if (/^real test/i.test(fileName)) return "real test";
  if (/^cam12/i.test(fileName)) return "cam12";
  if (/^cam13/i.test(fileName)) return "cam13";
  if (/^cam14/i.test(fileName)) return "cam14";
  if (/^cam15/i.test(fileName)) return "cam15";
  if (/^cam16/i.test(fileName)) return "cam16";
  if (/^cam17/i.test(fileName)) return "cam17";
  if (/^Cam18|^cam18/i.test(fileName)) return "cam18";
  if (/^Test/i.test(fileName)) return "cam19";
  if (/^Cam20|^cam20/i.test(fileName)) return "cam20";
  if (/^cam21/i.test(fileName)) return "cam21";
  if (/^Unit/i.test(fileName)) return "tactics-basic";
  if (/^bil-/i.test(fileName)) return "basic-ielts";
  if (/^pinball/i.test(fileName)) return "pinball";
  return "other";
}

function printListeningBreakdown(objects: StoredObject[]): void {
  const groups = new Map<string, { bytes: number; count: number }>();
  for (const item of objects) {
    const key = listeningSeriesKey(item.name);
    const current = groups.get(key) ?? { bytes: 0, count: 0 };
    current.bytes += item.size;
    current.count += 1;
    groups.set(key, current);
  }
  console.log("\n--- listening-audio theo bộ đề ---");
  for (const [key, value] of [...groups.entries()].sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(`  ${formatBytes(value.bytes).padStart(8)}  ${String(value.count).padStart(3)} files  ${key}`);
  }
}

type StoredObject = { name: string; size: number };

async function listBucketObjects(
  supabase: NonNullable<ReturnType<typeof createServiceRoleSupabaseClient>>,
  bucket: string,
): Promise<StoredObject[]> {
  const objects: StoredObject[] = [];
  let offset = 0;
  const limit = 1000;

  while (true) {
    const { data, error } = await supabase.storage.from(bucket).list("", {
      limit,
      offset,
      sortBy: { column: "name", order: "asc" },
    });
    if (error) {
      if (/not found/i.test(error.message)) return [];
      throw new Error(`${bucket}: ${error.message}`);
    }
    if (!data?.length) break;

    for (const item of data) {
      if (!item.name || !item.metadata) continue;
      const size = Number(item.metadata.size ?? 0);
      objects.push({ name: item.name, size: Number.isFinite(size) ? size : 0 });
    }

    if (data.length < limit) break;
    offset += limit;
  }

  return objects;
}

async function listMediaObjectsRecursive(
  supabase: NonNullable<ReturnType<typeof createServiceRoleSupabaseClient>>,
  prefix = "",
): Promise<StoredObject[]> {
  const objects: StoredObject[] = [];
  const { data, error } = await supabase.storage.from(MEDIA_AUDIO_BUCKET).list(prefix, {
    limit: 1000,
    sortBy: { column: "name", order: "asc" },
  });
  if (error) {
    if (/not found/i.test(error.message)) return [];
    throw new Error(`${MEDIA_AUDIO_BUCKET}/${prefix}: ${error.message}`);
  }

  for (const item of data ?? []) {
    const path = prefix ? `${prefix}/${item.name}` : item.name;
    if (!item.name) continue;
    if (item.id === null && item.metadata == null) {
      const nested = await listMediaObjectsRecursive(supabase, path);
      objects.push(...nested);
      continue;
    }
    const size = Number(item.metadata?.size ?? 0);
    objects.push({ name: path, size: Number.isFinite(size) ? size : 0 });
  }
  return objects;
}

async function main() {
  const shouldDelete = process.argv.includes("--delete");
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const requiredListening = requiredListeningFiles();
  const requiredReading = requiredReadingFiles();

  console.log("=== Supabase Storage audit ===\n");
  console.log(`Site cần ${requiredListening.size} file listening-audio`);
  console.log(`Site cần ${requiredReading.size} file reading-audio\n`);

  let grandTotal = 0;
  const orphans: Array<{ bucket: string; name: string; size: number }> = [];

  for (const bucket of BUCKETS) {
    const objects =
      bucket === MEDIA_AUDIO_BUCKET
        ? await listMediaObjectsRecursive(supabase)
        : await listBucketObjects(supabase, bucket);

    const bucketTotal = objects.reduce((sum, item) => sum + item.size, 0);
    grandTotal += bucketTotal;

    console.log(`--- ${bucket} (${objects.length} objects, ${formatBytes(bucketTotal)}) ---`);
    if (!objects.length) {
      console.log("(trống hoặc bucket chưa tạo)\n");
      continue;
    }

    const sorted = [...objects].sort((a, b) => b.size - a.size);
    for (const item of sorted.slice(0, 15)) {
      console.log(`  ${formatBytes(item.size).padStart(8)}  ${item.name}`);
    }
    if (sorted.length > 15) {
      console.log(`  ... và ${sorted.length - 15} file khác`);
    }

    if (bucket === LISTENING_AUDIO_BUCKET) {
      for (const item of objects) {
        if (!requiredListening.has(item.name)) {
          orphans.push({ bucket, name: item.name, size: item.size });
        }
      }
    }

    if (bucket === READING_AUDIO_BUCKET) {
      for (const item of objects) {
        if (!requiredReading.has(item.name)) {
          orphans.push({ bucket, name: item.name, size: item.size });
        }
      }
    }

    console.log("");
  }

  console.log(`TỔNG: ${formatBytes(grandTotal)}`);
  const orphanTotal = orphans.reduce((sum, item) => sum + item.size, 0);
  console.log(`\nFile THỪA (không có trong catalog site hiện tại): ${orphans.length} (${formatBytes(orphanTotal)})`);

  if (process.argv.includes("--breakdown")) {
    printListeningBreakdown(await listBucketObjects(supabase, LISTENING_AUDIO_BUCKET));
  }

  if (!orphans.length) {
    console.log("Không có file thừa rõ ràng trong listening/reading buckets.");
    if (!shouldDelete) {
      console.log("\nGợi ý: dùng --breakdown để xem dung lượng theo bộ đề.");
    }
    return;
  }

  const byBucket = new Map<string, typeof orphans>();
  for (const item of orphans) {
    const list = byBucket.get(item.bucket) ?? [];
    list.push(item);
    byBucket.set(item.bucket, list);
  }

  for (const [bucket, items] of byBucket) {
    const total = items.reduce((sum, item) => sum + item.size, 0);
    console.log(`\n${bucket}: ${items.length} file thừa (${formatBytes(total)})`);
    for (const item of items.sort((a, b) => b.size - a.size).slice(0, 20)) {
      console.log(`  - ${item.name} (${formatBytes(item.size)})`);
    }
    if (items.length > 20) console.log(`  ... +${items.length - 20} file`);
  }

  if (!shouldDelete) {
    console.log("\nChạy với --delete để xóa file thừa ở listening-audio và reading-audio.");
    return;
  }

  const toDelete = orphans.filter((item) => item.bucket !== MEDIA_AUDIO_BUCKET && item.bucket !== STARDICT_BUCKET);
  if (!toDelete.length) return;

  console.log(`\nĐang xóa ${toDelete.length} file...`);
  for (const [bucket, items] of byBucket) {
    if (bucket === MEDIA_AUDIO_BUCKET || bucket === STARDICT_BUCKET) continue;
    const names = items.map((item) => item.name);
    for (let i = 0; i < names.length; i += 100) {
      const chunk = names.slice(i, i + 100);
      const { error } = await supabase.storage.from(bucket).remove(chunk);
      if (error) {
        console.error(`Lỗi xóa ${bucket}:`, error.message);
        process.exit(1);
      }
      console.log(`Đã xóa ${chunk.length} file từ ${bucket}`);
    }
  }

  console.log("\nXong. Refresh Supabase Dashboard → Storage để xem dung lượng mới.");
}

void main();
