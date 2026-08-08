/**
 * Upload only Cam 13 listening MP3s to Supabase Storage.
 *
 *   npx tsx scripts/upload-cam13-listening-audio.ts
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import { LISTENING_AUDIO_BUCKET } from "../lib/listening/listening-audio-storage";
import { LISTENING_AUDIO_CAM13_SUBDIR } from "../lib/listening/listening-materials-paths";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";
import { SUPABASE_FREE_MAX_BYTES } from "./prepare-listening-audio-for-upload";

loadEnvLocal();

async function main(): Promise<void> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const dir = path.join(process.cwd(), LISTENING_AUDIO_CAM13_SUBDIR);
  const names = readdirSync(dir)
    .filter((name) => /^cam13-test[1-4]-part[1-4]\.mp3$/i.test(name))
    .sort();

  if (names.length !== 16) {
    console.error(`Expected 16 Cam 13 mp3 files, found ${names.length} in ${dir}`);
    process.exit(1);
  }

  for (const name of names) {
    const bytes = readFileSync(path.join(dir, name));
    if (bytes.length > SUPABASE_FREE_MAX_BYTES) {
      console.error(`FAIL ${name}: too large for Supabase Free`);
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
  console.log(`Done — ${names.length} files`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
