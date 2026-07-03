#!/usr/bin/env npx tsx
/**
 * Upload accent / intro MP3+WAV từ public/listening-assets lên Supabase bucket private.
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Nguồn: public/listening-assets/{accent-challenge,accent-discover,accents,cam19}/
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import { isAllowedMediaAudioKey, MEDIA_AUDIO_BUCKET } from "../lib/media/media-audio-storage";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";

loadEnvLocal();

const ROOT = path.join(process.cwd(), "public", "listening-assets");

function walk(dir: string, prefix = ""): string[] {
  const keys: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = prefix ? `${prefix}/${name}` : name;
    if (statSync(full).isDirectory()) {
      keys.push(...walk(full, rel));
      continue;
    }
    if (/\.(mp3|wav)$/i.test(name) && isAllowedMediaAudioKey(rel)) {
      keys.push(rel);
    }
  }
  return keys;
}

function contentType(key: string): string {
  return key.toLowerCase().endsWith(".wav") ? "audio/wav" : "audio/mpeg";
}

async function main() {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const keys = walk(ROOT).sort();
  if (!keys.length) {
    console.error("Không thấy MP3/WAV hợp lệ trong public/listening-assets/");
    process.exit(1);
  }

  for (const key of keys) {
    const localPath = path.join(ROOT, key);
    const bytes = readFileSync(localPath);
    const { error } = await supabase.storage.from(MEDIA_AUDIO_BUCKET).upload(key, bytes, {
      contentType: contentType(key),
      upsert: true,
    });
    if (error) {
      console.error(`FAIL ${key}:`, error.message);
      process.exit(1);
    }
    console.log(`uploaded ${key} (${bytes.length} bytes)`);
  }

  console.log(`Done — ${keys.length} file(s) → ${MEDIA_AUDIO_BUCKET}`);
}

void main();
