#!/usr/bin/env npx tsx
/**
 * Upload MP3 Luyện nghe lên Supabase Storage bucket private.
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Nguồn:
 * - listening materials/Audio cam 19/Test*.mp3
 * - listening materials/Audio tactics-basic/Unit*-Listening*.mp3 (không .full)
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import { LISTENING_AUDIO_BUCKET } from "../lib/listening/listening-audio-storage";
import { isAllowedListeningAudioFile } from "../lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";

loadEnvLocal();

const SOURCE_DIRS = [
  path.join(process.cwd(), "listening materials", "Audio cam 19"),
  path.join(process.cwd(), "listening materials", "Audio tactics-basic"),
];

async function main() {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const files = new Set<string>();
  for (const dir of SOURCE_DIRS) {
    let names: string[];
    try {
      names = readdirSync(dir);
    } catch {
      console.warn(`Bỏ qua thư mục không tồn tại: ${dir}`);
      continue;
    }
    for (const name of names) {
      if (isAllowedListeningAudioFile(name)) files.add(name);
    }
  }

  const sorted = [...files].sort();
  if (!sorted.length) {
    console.error("Không thấy MP3 hợp lệ trong listening materials/Audio cam 19 hoặc Audio tactics-basic");
    process.exit(1);
  }

  for (const name of sorted) {
    const localPath =
      SOURCE_DIRS.map((dir) => path.join(dir, name)).find((candidate) => {
        try {
          readFileSync(candidate);
          return true;
        } catch {
          return false;
        }
      }) ?? null;
    if (!localPath) {
      console.error(`FAIL ${name}: không tìm thấy file nguồn`);
      process.exit(1);
    }

    const bytes = readFileSync(localPath);
    const { error } = await supabase.storage.from(LISTENING_AUDIO_BUCKET).upload(name, bytes, {
      contentType: "audio/mpeg",
      upsert: true,
    });
    if (error) {
      console.error(`FAIL ${name}:`, error.message);
      process.exit(1);
    }
    console.log(`uploaded ${name} (${bytes.length} bytes)`);
  }

  console.log(`Done: ${sorted.length} file(s) → bucket "${LISTENING_AUDIO_BUCKET}".`);
}

void main();
