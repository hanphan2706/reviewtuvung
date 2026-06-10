/**
 * Embed `reading raw/*.txt` vào `data/reading-raw/passages.json` (deploy không cần thư mục local).
 *
 *   npx tsx scripts/embed-reading-passages.ts
 */
import fs from "node:fs";
import path from "node:path";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";

const OUT = path.join(process.cwd(), "data", "reading-raw", "passages.json");

function main() {
  const existing: Record<string, string> = fs.existsSync(OUT)
    ? (JSON.parse(fs.readFileSync(OUT, "utf8")) as Record<string, string>)
    : {};

  for (const [pilotId, fileName] of Object.entries(READING_RAW_FILES)) {
    const filePath = path.join(process.cwd(), "reading raw", fileName);
    if (!fs.existsSync(filePath)) {
      console.warn(`SKIP ${pilotId}: missing ${fileName}`);
      continue;
    }
    existing[pilotId] = fs.readFileSync(filePath, "utf8");
    console.log(`embedded ${pilotId} (${fileName})`);
  }

  fs.writeFileSync(OUT, JSON.stringify(existing), "utf8");
  console.log(`Wrote ${OUT} (${Object.keys(existing).length} pilots)`);
}

main();
