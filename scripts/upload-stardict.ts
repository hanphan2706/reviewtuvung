#!/usr/bin/env npx tsx
/**
 * Upload en-vi-stardict.json lên Supabase Storage (bucket private).
 *
 * Cần: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Nguồn: data/dictionary/en-vi-stardict.json (npm run dictionary:import-stardict)
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvLocal } from "./load-env-local";
import {
  STARDICT_BUCKET,
  STARDICT_LOCAL_PATH,
  STARDICT_OBJECT_KEY,
} from "../lib/reading/stardict-storage";
import { createServiceRoleSupabaseClient } from "../lib/supabase/service-role";

loadEnvLocal();

async function main() {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) {
    console.error("Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env.local");
    process.exit(1);
  }

  const filePath = path.join(process.cwd(), STARDICT_LOCAL_PATH);
  let bytes: Buffer;
  try {
    bytes = readFileSync(filePath);
  } catch {
    console.error(`Không đọc được ${filePath} — chạy npm run dictionary:import-stardict trước.`);
    process.exit(1);
  }

  const { error: bucketError } = await supabase.storage.createBucket(STARDICT_BUCKET, {
    public: false,
  });
  if (bucketError && !/already exists/i.test(bucketError.message)) {
    console.error("createBucket:", bucketError.message);
    process.exit(1);
  }

  const { error } = await supabase.storage.from(STARDICT_BUCKET).upload(STARDICT_OBJECT_KEY, bytes, {
    contentType: "application/json",
    upsert: true,
  });
  if (error) {
    console.error("upload:", error.message);
    process.exit(1);
  }

  console.log(
    `Uploaded ${STARDICT_OBJECT_KEY} (${bytes.length.toLocaleString()} bytes) → bucket "${STARDICT_BUCKET}".`,
  );
}

void main();
