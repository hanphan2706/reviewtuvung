/**
 * Kiểm tra file .vi.json: parse được và số đoạn khớp passage EN.
 *
 *   npx tsx scripts/validate-reading-translations.ts
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { prepareArticleBody } from "../lib/reading/article-body-structure";
import { READING_HUB_ARTICLES } from "../lib/reading/hub-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";
import {
  parseReadingPassageTranslation,
  translationMatchesPassage,
} from "../lib/reading/reading-translation";

const DIR = path.join(process.cwd(), "reading translations");

function main() {
  let ok = 0;
  let missing = 0;
  let bad = 0;

  for (const article of READING_HUB_ARTICLES) {
    const viPath = path.join(DIR, `${article.id}.vi.json`);
    const rawPath = path.join(process.cwd(), "reading raw", READING_RAW_FILES[article.pilotId]);
    const raw = readFileSync(rawPath, "utf8");
    const passage = splitReadingPassages(raw).find((p) => p.passage === article.passage);
    if (!passage) continue;

    const prepared = prepareArticleBody(passage.body, undefined, passage.deckText);
    const enSlots = (prepared.deck ? 1 : 0) + prepared.paragraphs.length;

    try {
      const parsed = parseReadingPassageTranslation(JSON.parse(readFileSync(viPath, "utf8")));
      if (!parsed) {
        console.log(`✗ ${article.id}: JSON không hợp lệ`);
        bad += 1;
        continue;
      }
      if (!translationMatchesPassage(passage.body, parsed, passage.deckText)) {
        console.log(`✗ ${article.id}: VI ${parsed.paragraphs.length} slot, EN ${enSlots} slot`);
        bad += 1;
        continue;
      }
      console.log(`✓ ${article.id}: ${enSlots} slot${prepared.deck ? " (có deck)" : ""}`);
      ok += 1;
    } catch {
      console.log(`○ ${article.id}: chưa có file .vi.json (${enSlots} slot EN)`);
      missing += 1;
    }
  }

  console.log(`\nOK ${ok} · thiếu ${missing} · lỗi ${bad}`);
  if (bad > 0) process.exit(1);
}

main();
