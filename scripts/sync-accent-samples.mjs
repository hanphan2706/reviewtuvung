#!/usr/bin/env node
/**
 * Mirror GMU Speech Accent Archive samples used in chat-giong comparison sets.
 * Source: changelinglab/speechaccentarchive-pr (Hugging Face, CC BY-NC-SA 2.0).
 *
 * Usage: node scripts/sync-accent-samples.mjs
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "listening-assets", "accents");

const SAMPLE_IDS = [
  "english1",
  "english2",
  "english3",
  "english8",
  "english12",
  "english13",
  "english21",
  "english24",
  "english25",
  "english33",
  "english77",
  "english84",
];

const py = `import os
from pathlib import Path
from huggingface_hub import hf_hub_download, list_repo_files
import pyarrow.parquet as pq

needed = set(${JSON.stringify(SAMPLE_IDS)})
out_dir = Path(${JSON.stringify(outDir)})
out_dir.mkdir(parents=True, exist_ok=True)
files = [f for f in list_repo_files("changelinglab/speechaccentarchive-pr", repo_type="dataset") if f.endswith(".parquet")]
found = {}
for f in files:
    path = hf_hub_download(repo_id="changelinglab/speechaccentarchive-pr", filename=f, repo_type="dataset")
    table = pq.read_table(path, columns=["id", "audio"])
    for sid, audio in zip(table["id"].to_pylist(), table["audio"].to_pylist()):
        if sid in needed and sid not in found:
            found[sid] = audio["bytes"]
    if len(found) == len(needed):
        break
missing = needed - found.keys()
if missing:
    raise SystemExit(f"Missing samples: {sorted(missing)}")
for sid, data in sorted(found.items()):
    out = out_dir / f"{sid}.wav"
    out.write_bytes(data)
    print(f"wrote {out.name} ({len(data)} bytes)")
print(f"done {len(found)} files")
`;

fs.mkdirSync(outDir, { recursive: true });

const check = spawnSync("python3", ["-c", "import pyarrow, huggingface_hub"], { encoding: "utf8" });
if (check.status !== 0) {
  console.error("Install deps: pip3 install pyarrow huggingface_hub");
  process.exit(1);
}

const run = spawnSync("python3", ["-c", py], { stdio: "inherit", encoding: "utf8" });
process.exit(run.status ?? 1);
