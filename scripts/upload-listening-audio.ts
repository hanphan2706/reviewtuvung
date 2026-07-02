#!/usr/bin/env npx tsx
/**
 * Upload MP3 Luyện nghe lên Supabase Storage bucket private.
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Nguồn: xem `listeningAudioUploadSourceDirs()` — Audio cam 18/20, Cam 19, real test, tactics-basic.
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import { LISTENING_AUDIO_BUCKET } from "../lib/listening/listening-audio-storage";
import { listeningAudioUploadSourceDirs } from "../lib/listening/listening-materials-paths";
import { isAllowedListeningAudioFile } from "../lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";
import { SUPABASE_FREE_MAX_BYTES } from "./prepare-listening-audio-for-upload";

loadEnvLocal();

const SOURCE_DIRS = listeningAudioUploadSourceDirs();

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
    console.error("Không thấy MP3 hợp lệ trong các thư mục listening materials/Audio cam* hoặc Audio real test / tactics-basic");
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
    if (bytes.length > SUPABASE_FREE_MAX_BYTES) {
      console.error(
        `FAIL ${name}: ${(bytes.length / 1024 / 1024).toFixed(1)} MB > 50 MB (Supabase Free). Chạy: npm run listening:prepare-audio-for-upload`,
      );
      process.exit(1);
    }
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
