import "server-only";

import fs from "node:fs";
import path from "node:path";
import { unstable_cache } from "next/cache";
import {
  parseReadingPassageTranslation,
  type ReadingPassageTranslation,
} from "@/lib/reading/reading-translation";

const TRANSLATIONS_DIR = "reading translations";

function readTranslationFile(articleId: string): ReadingPassageTranslation | null {
  const filePath = path.join(process.cwd(), TRANSLATIONS_DIR, `${articleId}.vi.json`);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return parseReadingPassageTranslation(JSON.parse(raw));
  } catch {
    return null;
  }
}

export async function loadReadingPassageTranslation(
  articleId: string,
): Promise<ReadingPassageTranslation | null> {
  return unstable_cache(
    async () => readTranslationFile(articleId),
    ["reading-translation-v4", articleId],
    { revalidate: 300 },
  )();
}
