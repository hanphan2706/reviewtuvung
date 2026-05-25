import { readFileSync, writeFileSync } from "node:fs";
import { sanitizeListeningTranscript } from "../lib/sanitize-listening-transcript";

const args = process.argv.slice(2);
const writeInPlace = args.includes("--write");
const positional = args.filter((a) => a !== "--write");
const inputPath = positional[0];
const outputPath = positional[1];

if (!inputPath) {
  console.error("Usage: npx tsx scripts/clean-listening-transcript.ts <input.txt> [--write] [output.txt]");
  console.error("  default: writes <input>.cleaned.txt next to input");
  console.error("  --write: overwrite input file");
  process.exit(1);
}

const raw = readFileSync(inputPath, "utf8");
const cleaned = sanitizeListeningTranscript(raw);
const dest = writeInPlace ? inputPath : outputPath ?? inputPath.replace(/\.txt$/i, ".cleaned.txt");

writeFileSync(dest, cleaned, "utf8");
console.log(`Wrote ${dest} (${cleaned.length} chars)`);
