/**
 * Export EN paragraph slots for Cam 17 → `reading translations/_work/cam17-slots.json`
 *
 *   npx tsx scripts/export-cam17-translation-slots.ts
 */
import fs from "node:fs";
import path from "node:path";
import { prepareArticleBody } from "../lib/reading/article-body-structure";
import { CAM17_TEST1, CAM17_TEST2, CAM17_TEST3, CAM17_TEST4 } from "../lib/reading/cambridge-18-19-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";

const ARTICLES = [...CAM17_TEST4, ...CAM17_TEST3, ...CAM17_TEST2, ...CAM17_TEST1];
const OUT = path.join(process.cwd(), "reading translations", "_work", "cam17-slots.json");

type SlotExport = {
  id: string;
  title: string;
  deck?: string;
  paragraphs: string[];
};

const out: SlotExport[] = [];

for (const article of ARTICLES) {
  const raw = fs.readFileSync(path.join(process.cwd(), "reading raw", READING_RAW_FILES[article.pilotId]!), "utf8");
  const passage = splitReadingPassages(raw).find((p) => p.passage === article.passage);
  if (!passage) {
    console.error(`missing ${article.id}`);
    continue;
  }
  const prepared = prepareArticleBody(passage.body, undefined, passage.deckText);
  out.push({
    id: article.id,
    title: article.title,
    deck: prepared.deck || undefined,
    paragraphs: prepared.paragraphs,
  });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(`Wrote ${out.length} passages → ${OUT}`);
