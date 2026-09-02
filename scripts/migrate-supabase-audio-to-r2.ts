#!/usr/bin/env npx tsx
/**
 * Copy toàn bộ audio từ Supabase Storage sang Cloudflare R2 (giữ nguyên tên file).
 *
 * Cần: SUPABASE_SERVICE_ROLE_KEY + R2_* trong .env.local
 *
 *   npx tsx scripts/migrate-supabase-audio-to-r2.ts
 *   npx tsx scripts/migrate-supabase-audio-to-r2.ts --listening-only
 */
import { loadEnvLocal } from "./load-env-local";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";
import { LISTENING_AUDIO_BUCKET } from "../lib/listening/listening-audio-storage";
import { READING_AUDIO_BUCKET } from "../lib/reading/reading-audio-storage";
import { MEDIA_AUDIO_BUCKET } from "../lib/media/media-audio-storage";
import {
  R2_LISTENING_PREFIX,
  R2_MEDIA_PREFIX,
  R2_READING_PREFIX,
} from "../lib/r2/config";
import { HeadObjectCommand } from "@aws-sdk/client-s3";
import { uploadR2Object, requireR2Client } from "../lib/r2/upload-object";

loadEnvLocal();

const MAX_RETRIES = 4;

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetries<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        const waitMs = attempt * 2000;
        console.warn(`${label} — lỗi, thử lại ${attempt}/${MAX_RETRIES} sau ${waitMs / 1000}s...`);
        await sleep(waitMs);
      }
    }
  }
  throw lastError;
}

async function r2ObjectExists(r2Key: string): Promise<boolean> {
  const { client, bucketName } = requireR2Client();
  try {
    await client.send(new HeadObjectCommand({ Bucket: bucketName, Key: r2Key }));
    return true;
  } catch {
    return false;
  }
}

type BucketJob = {
  supabaseBucket: string;
  r2Prefix: string;
  recursive: boolean;
};

const JOBS: BucketJob[] = [
  { supabaseBucket: LISTENING_AUDIO_BUCKET, r2Prefix: R2_LISTENING_PREFIX, recursive: false },
  { supabaseBucket: READING_AUDIO_BUCKET, r2Prefix: R2_READING_PREFIX, recursive: false },
  { supabaseBucket: MEDIA_AUDIO_BUCKET, r2Prefix: R2_MEDIA_PREFIX, recursive: true },
];

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function contentTypeForKey(key: string): string {
  return key.toLowerCase().endsWith(".wav") ? "audio/wav" : "audio/mpeg";
}

async function listFlat(
  supabase: NonNullable<ReturnType<typeof createServiceRoleSupabaseClient>>,
  bucket: string,
): Promise<Array<{ name: string; size: number }>> {
  const objects: Array<{ name: string; size: number }> = [];
  let offset = 0;
  while (true) {
    const { data, error } = await supabase.storage.from(bucket).list("", {
      limit: 1000,
      offset,
      sortBy: { column: "name", order: "asc" },
    });
    if (error) throw new Error(`${bucket}: ${error.message}`);
    if (!data?.length) break;
    for (const item of data) {
      if (!item.name || !item.metadata) continue;
      objects.push({
        name: item.name,
        size: Number(item.metadata.size ?? 0),
      });
    }
    if (data.length < 1000) break;
    offset += 1000;
  }
  return objects;
}

async function listRecursive(
  supabase: NonNullable<ReturnType<typeof createServiceRoleSupabaseClient>>,
  bucket: string,
  prefix = "",
): Promise<Array<{ name: string; size: number }>> {
  const objects: Array<{ name: string; size: number }> = [];
  const { data, error } = await supabase.storage.from(bucket).list(prefix, {
    limit: 1000,
    sortBy: { column: "name", order: "asc" },
  });
  if (error) throw new Error(`${bucket}/${prefix}: ${error.message}`);

  for (const item of data ?? []) {
    if (!item.name) continue;
    const path = prefix ? `${prefix}/${item.name}` : item.name;
    if (item.id === null && item.metadata == null) {
      objects.push(...(await listRecursive(supabase, bucket, path)));
      continue;
    }
    objects.push({
      name: path,
      size: Number(item.metadata?.size ?? 0),
    });
  }
  return objects;
}

async function migrateBucket(
  supabase: NonNullable<ReturnType<typeof createServiceRoleSupabaseClient>>,
  job: BucketJob,
): Promise<{ count: number; bytes: number }> {
  console.log(`\n=== ${job.supabaseBucket} → R2 ${job.r2Prefix} ===`);
  const objects = job.recursive
    ? await listRecursive(supabase, job.supabaseBucket)
    : await listFlat(supabase, job.supabaseBucket);

  if (!objects.length) {
    console.log("(trống — bỏ qua)");
    return { count: 0, bytes: 0 };
  }

  let bytes = 0;
  let migrated = 0;
  let skipped = 0;
  for (const [index, object] of objects.entries()) {
    const r2Key = `${job.r2Prefix}${object.name}`;
    if (await r2ObjectExists(r2Key)) {
      skipped += 1;
      if ((index + 1) % 100 === 0 || index === objects.length - 1) {
        console.log(`[${index + 1}/${objects.length}] skip (đã có trên R2) — ${skipped} skipped`);
      }
      continue;
    }

    const buffer = await withRetries(`Download ${object.name}`, async () => {
      const { data, error } = await supabase.storage.from(job.supabaseBucket).download(object.name);
      if (error || !data) {
        throw new Error(error?.message ?? "no data");
      }
      return Buffer.from(await data.arrayBuffer());
    });

    await withRetries(`Upload ${r2Key}`, async () => {
      await uploadR2Object(r2Key, buffer, contentTypeForKey(object.name));
    });

    bytes += buffer.length;
    migrated += 1;
    console.log(
      `[${index + 1}/${objects.length}] ${object.name} (${formatBytes(buffer.length)}) → ${r2Key}`,
    );
  }
  if (skipped) console.log(`Đã bỏ qua ${skipped} file có sẵn trên R2.`);
  return { count: migrated, bytes };
}

async function main() {
  const listeningOnly = process.argv.includes("--listening-only");
  const mediaOnly = process.argv.includes("--media-only");
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const jobs = listeningOnly ? JOBS.slice(0, 1) : mediaOnly ? JOBS.slice(2) : JOBS;
  let totalCount = 0;
  let totalBytes = 0;

  for (const job of jobs) {
    const result = await migrateBucket(supabase, job);
    totalCount += result.count;
    totalBytes += result.bytes;
  }

  console.log(`\nXong: ${totalCount} file, ${formatBytes(totalBytes)} trên R2.`);
  console.log("Bước tiếp: thêm R2_* lên Vercel → redeploy → test nghe bài → xóa audio trên Supabase Storage.");
}

void main();
