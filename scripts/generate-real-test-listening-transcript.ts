import fs from "node:fs";
import path from "node:path";
import { whisperSegmentsToPlainTranscript } from "@/lib/listening/build-transcript-sync";
import { whisperLocalTranscribe } from "@/lib/listening/whisper-transcribe-local";

const audioPath = path.join(process.cwd(), "listening materials/Audio real test/real test 1.mp3");
const outPath = path.join(process.cwd(), "listening materials/transcript/real-test-1.txt");
const cachePath = path.join(process.cwd(), "listening materials/sync/real-test-1.whisper-words.json");

async function main(): Promise<void> {
  if (!fs.existsSync(audioPath)) {
    console.error("Missing audio:", audioPath);
    process.exit(1);
  }

  console.log("Transcribing", audioPath, "…");
  const payload = await whisperLocalTranscribe(audioPath, {
    wordsCachePath: cachePath,
    model: "base",
  });

  const plain = whisperSegmentsToPlainTranscript(payload.segments);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${plain.trim()}\n`, "utf8");
  console.log("Wrote", outPath, `(${plain.split(/\r?\n/).length} lines)`);
}

void main().catch((err) => {
  console.error(err);
  process.exit(1);
});
