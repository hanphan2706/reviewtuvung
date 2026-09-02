/**
 * Xuất slot EN (deck + đoạn) cho cam18/cam19 — dùng khi so khớp bản dịch.
 *
 *   npx tsx scripts/export-cam18-19-translation-slots.ts
 */
import fs from "node:fs";
import path from "node:path";
import { prepareArticleBody } from "../lib/reading/article-body-structure";
import { CAM18_TEST1, CAM19_TEST1, CAM19_TEST2, CAM19_TEST3, CAM19_TEST4 } from "../lib/reading/cambridge-18-19-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";

const ARTICLES = [...CAM19_TEST4, ...CAM19_TEST3, ...CAM19_TEST2, ...CAM19_TEST1, ...CAM18_TEST1];
const OUT = path.join(process.cwd(), "reading translations", "_work", "cam18-19-slots.json");

function main() {
  const out: Record<string, { slots: string[]; deck: boolean }> = {};

  for (const article of ARTICLES) {
    const raw = fs.readFileSync(path.join(process.cwd(), "reading raw", READING_RAW_FILES[article.pilotId]!), "utf8");
    const passage = splitReadingPassages(raw).find((p) => p.passage === article.passage);
    if (!passage) continue;
    const prepared = prepareArticleBody(passage.body, undefined, passage.deckText);
    const slots: string[] = [];
    if (prepared.deck) slots.push(prepared.deck);
    slots.push(...prepared.paragraphs);
    out[article.id] = { slots, deck: Boolean(prepared.deck) };
    console.log(`${article.id}: ${slots.length} slots${prepared.deck ? " (deck)" : ""}`);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2), "utf8");
  console.log(`Wrote ${OUT}`);
}

main();
