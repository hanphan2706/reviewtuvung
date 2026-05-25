import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";

async function main() {
  const dataPath = path.join(process.cwd(), "data", "reading-raw", "passages.json");
  const deployableSource = JSON.parse(fs.readFileSync(dataPath, "utf8")) as Record<string, string>;

  for (const [pilotId, fileName] of Object.entries(READING_RAW_FILES)) {
    const raw = deployableSource[pilotId];
    assert.equal(typeof raw, "string", `Expected embedded reading data for ${pilotId} (${fileName})`);
    assert.match(raw, /READING PASSAGE \d+/i, `Expected passage markers for ${pilotId}`);
  }

  const landingPath = path.join(process.cwd(), "components", "landing-page.tsx");
  const landingSource = fs.readFileSync(landingPath, "utf8");
  assert.match(
    landingSource,
    /Đọc sâu và chủ động hơn/,
    "Expected landing page reading card to use the updated copy",
  );
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
