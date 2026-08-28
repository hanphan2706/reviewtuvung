import fs from "node:fs";
import path from "node:path";
import { unstable_cache } from "next/cache";
import embeddedReadingRaw from "@/data/reading-raw/passages.json";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { READING_RAW_FILES } from "@/lib/reading/raw-manifest";
import { splitReadingPassages, type ReadingPassageBlock } from "@/lib/reading/split-passages";

const DEPLOYABLE_READING_RAW = embeddedReadingRaw as Partial<Record<ReadingPilotId, string>>;

function readAndSplitPassages(pilotId: string): ReadingPassageBlock[] {
  const embedded = DEPLOYABLE_READING_RAW[pilotId as ReadingPilotId];
  if (typeof embedded === "string" && embedded.trim()) {
    return splitReadingPassages(embedded);
  }

  const fileName = READING_RAW_FILES[pilotId as ReadingPilotId];
  if (!fileName) return [];

  const filePath = path.join(process.cwd(), "reading raw", fileName);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return splitReadingPassages(raw);
  } catch {
    return [];
  }
}

export async function loadReadingPassages(pilotId: ReadingPilotId): Promise<ReadingPassageBlock[]> {
  return unstable_cache(
    async () => readAndSplitPassages(pilotId),
    ["reading-passages-v47", pilotId],
    { revalidate: 300 },
  )();
}

export async function loadReadingPassage(
  pilotId: ReadingPilotId,
  passageNumber: number,
): Promise<ReadingPassageBlock | null> {
  const passages = await loadReadingPassages(pilotId);
  return passages.find((p) => p.passage === passageNumber) ?? null;
}
