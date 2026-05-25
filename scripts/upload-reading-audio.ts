#!/usr/bin/env npx tsx
/**
 * Upload MP3 Luyện đọc (Compass) lên Supabase Storage bucket private.
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * File nguồn: public/reading-audio/reading-challenge-1-p*.mp3
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import { READING_AUDIO_BUCKET } from "../lib/reading/reading-audio-storage";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";

loadEnvLocal();

const AUDIO_DIR = path.join(process.cwd(), "public", "reading-audio");
const PATTERN = /^reading-challenge-1-p\d+\.mp3$/i;

async function main() {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const files = readdirSync(AUDIO_DIR).filter((name) => PATTERN.test(name));
  if (!files.length) {
    console.error(`Không thấy MP3 trong ${AUDIO_DIR}`);
    process.exit(1);
  }

  for (const name of files.sort()) {
    const bytes = readFileSync(path.join(AUDIO_DIR, name));
    const { error } = await supabase.storage.from(READING_AUDIO_BUCKET).upload(name, bytes, {
      contentType: "audio/mpeg",
      upsert: true,
    });
    if (error) {
      console.error(`FAIL ${name}:`, error.message);
      process.exit(1);
    }
    console.log(`uploaded ${name} (${bytes.length} bytes)`);
  }

  console.log(`Done: ${files.length} file(s) → bucket "${READING_AUDIO_BUCKET}".`);
}

void main();
