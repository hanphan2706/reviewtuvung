import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  STARDICT_BUCKET,
  STARDICT_LOCAL_PATH,
  STARDICT_OBJECT_KEY,
} from "@/lib/reading/stardict-storage";
import type { EnViWiktionaryIndex } from "@/lib/reading/wiktionary-vi-types";
import { getStardictIndexCache, setStardictIndexCache } from "@/lib/reading/wiktionary-vi-store";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

let loadPromise: Promise<EnViWiktionaryIndex> | null = null;
let loadLogged = false;

function logLoaded(count: number, source: "local" | "supabase") {
  if (loadLogged || process.env.NODE_ENV === "production") return;
  loadLogged = true;
  console.info(`[dictionary] StarDict ${source}: ${count.toLocaleString()} headwords`);
}

function logMissing(detail?: string) {
  if (loadLogged || process.env.NODE_ENV === "production") return;
  loadLogged = true;
  const hint = detail ? ` (${detail})` : "";
  console.info(
    `[dictionary] StarDict chưa có${hint} — local: npm run dictionary:import-stardict; prod: npm run dictionary:upload-stardict`,
  );
}

function readLocalStardictIndex(): EnViWiktionaryIndex | null {
  try {
    const raw = readFileSync(join(process.cwd(), STARDICT_LOCAL_PATH), "utf8");
    const parsed = JSON.parse(raw) as EnViWiktionaryIndex;
    return Object.keys(parsed).length ? parsed : null;
  } catch {
    return null;
  }
}

async function downloadStardictFromSupabase(): Promise<EnViWiktionaryIndex | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(STARDICT_BUCKET).download(STARDICT_OBJECT_KEY);
  if (error || !data) return null;

  const parsed = JSON.parse(await data.text()) as EnViWiktionaryIndex;
  return Object.keys(parsed).length ? parsed : null;
}

async function loadStardictIndexInternal(): Promise<EnViWiktionaryIndex> {
  const cached = getStardictIndexCache();
  if (cached && Object.keys(cached).length) return cached;

  const local = readLocalStardictIndex();
  if (local) {
    setStardictIndexCache(local);
    logLoaded(Object.keys(local).length, "local");
    return local;
  }

  const remote = await downloadStardictFromSupabase();
  if (remote) {
    setStardictIndexCache(remote);
    logLoaded(Object.keys(remote).length, "supabase");
    return remote;
  }

  logMissing();
  setStardictIndexCache({});
  return {};
}

/** Nạp StarDict một lần / process — local file hoặc Supabase Storage. */
export async function ensureStardictIndexLoaded(): Promise<EnViWiktionaryIndex> {
  const cached = getStardictIndexCache();
  if (cached && Object.keys(cached).length) return cached;

  if (!loadPromise) {
    loadPromise = loadStardictIndexInternal().finally(() => {
      loadPromise = null;
    });
  }
  return loadPromise;
}
