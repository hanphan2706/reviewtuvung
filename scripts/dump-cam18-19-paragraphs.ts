/**
 * Dump đoạn EN cho cam18/cam19 → dùng khi so khớp bản dịch .vi.json
 *
 *   npx tsx scripts/dump-cam18-19-paragraphs.ts
 */
import fs from "node:fs";
import path from "node:path";
import { splitBodyParagraphs } from "../lib/reading/format-paragraphs";
import { CAM18_TEST1, CAM18_TEST2, CAM18_TEST3, CAM18_TEST4, CAM19_TEST1, CAM19_TEST2, CAM19_TEST3, CAM19_TEST4 } from "../lib/reading/cambridge-18-19-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";

const ARTICLES = [
  ...CAM19_TEST4,
  ...CAM19_TEST3,
  ...CAM19_TEST2,
  ...CAM19_TEST1,
  ...CAM18_TEST4,
  ...CAM18_TEST3,
  ...CAM18_TEST2,
  ...CAM18_TEST1,
];

for (const article of ARTICLES) {
  const raw = fs.readFileSync(path.join(process.cwd(), "reading raw", READING_RAW_FILES[article.pilotId]!), "utf8");
  const passage = splitReadingPassages(raw).find((p) => p.passage === article.passage);
  if (!passage) {
    console.error(`missing ${article.id}`);
    continue;
  }
  const paragraphs = splitBodyParagraphs(passage.body);
  console.log(`\n# ${article.id} (${paragraphs.length} paragraphs)`);
  paragraphs.forEach((p, i) => console.log(`[${i + 1}] ${p.slice(0, 120)}${p.length > 120 ? "…" : ""}`));
}
