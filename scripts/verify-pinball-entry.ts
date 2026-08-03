/**
 * Smoke-check Pinball entry Listening + Reading materials.
 *
 *   npx tsx --conditions=react-server scripts/verify-pinball-entry.ts
 */
import fs from "node:fs";
import path from "node:path";
import { parseListeningQnaText } from "@/lib/listening/parse-listening-qna";
import { inferNoteBodyLayout } from "@/lib/listening/listening-note-layout";
import { buildPinballEntryListeningExamHtml } from "@/lib/listening/serve-listening-exam-html";
import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";
import {
  LISTENING_SYNC_SUBDIR,
  listeningAudioCandidates,
} from "@/lib/listening/listening-materials-paths";
import { splitReadingPassages } from "@/lib/reading/split-passages";
import { buildReadingFullTestExamPayload } from "@/lib/reading/build-exam-html";

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`OK: ${message}`);
}

async function main(): Promise<void> {
  const qnaPath = path.join(process.cwd(), "listening materials", "pinball entry test qna.txt");
  const raw = fs.readFileSync(qnaPath, "utf8");
  const parsed = parseListeningQnaText(raw);
  assert(parsed.parts.size === 4, `listening QnA has 4 parts (got ${parsed.parts.size})`);

  const part1 = parsed.parts.get(1);
  const tableSection = part1?.sections.find((s) => s.kind === "note-completion");
  assert(!!tableSection && tableSection.kind === "note-completion", "part 1 starts with note-completion (table)");
  if (tableSection && tableSection.kind === "note-completion") {
    const layout = inferNoteBodyLayout(tableSection.instructionLines, tableSection.bodyLines);
    assert(layout.kind === "grid-table", `part 1 table infers grid-table (got ${layout.kind})`);
    if (layout.kind === "grid-table") {
      assert(layout.headers.length === 4, `table has 4 headers (got ${layout.headers.length})`);
      assert(layout.rows.length === 3, `table has 3 data rows (got ${layout.rows.length})`);
      assert(/1\s*\.{3,}/.test(layout.headers[1] ?? ""), "Q1 blank sits in journey-time header");
    }
  }

  const part2 = parsed.parts.get(2);
  const mapSection = part2?.sections.find((s) => s.kind === "map");
  assert(!!mapSection, "part 2 has a map section");
  if (mapSection && mapSection.kind === "map") {
    assert(mapSection.imageUrl === "/pinball-entry/apartment-plan.png", `map imageUrl resolved (${mapSection.imageUrl})`);
    assert((mapSection.options?.length ?? 0) === 9, `map section has 9 options (got ${mapSection.options?.length})`);
    assert(mapSection.items.length === 6, `map section has 6 items (got ${mapSection.items.length})`);
  }

  for (const part of [1, 2, 3, 4]) {
    const syncPath = path.join(process.cwd(), LISTENING_SYNC_SUBDIR, `pinball-entry-p${part}.sync.json`);
    assert(fs.existsSync(syncPath), `sync file exists for pinball-entry-p${part}`);
    const sync = JSON.parse(fs.readFileSync(syncPath, "utf8")) as { partId?: string; cues?: unknown[] };
    assert(sync.partId === `pinball-entry-p${part}`, `sync partId is pinball-entry-p${part}`);
    assert((sync.cues?.length ?? 0) > 0, `sync cues present for pinball-entry-p${part}`);
  }

  const allAnswers: Record<string, string> = {};
  for (const part of parsed.parts.values()) Object.assign(allAnswers, part.answers);
  const allAnswerNums = Object.keys(allAnswers).map(Number).sort((a, b) => a - b);
  assert(allAnswerNums.length === 40, `answer key has 40 entries (got ${allAnswerNums.length})`);

  for (const part of [1, 2, 3, 4]) {
    const file = `pinball-entry-part${part}.mp3`;
    assert(isAllowedListeningAudioFile(file), `${file} is allowlisted`);
    const resolved = listeningAudioCandidates(file).find((candidate) => fs.existsSync(candidate));
    assert(!!resolved, `${file} resolves to an existing local file (${resolved})`);
  }

  const listeningHtml = await buildPinballEntryListeningExamHtml();
  assert(listeningHtml.length > 1000, `listening exam HTML built (length ${listeningHtml.length})`);
  assert(!/cengage|geonat|GeoNat|NGL Learning|\bNational Geographic\b/i.test(listeningHtml), "listening HTML has no branding leftovers");
  assert(listeningHtml.includes("disableDeck"), "listening HTML disables add-to-deck");
  assert(listeningHtml.includes("note-grid-table"), "listening HTML renders Q1–5 as grid table");
  assert(listeningHtml.includes("flow-chart"), "listening HTML renders Q26–30 as flowchart");
  assert(listeningHtml.includes("data-cue-id"), "listening HTML embeds synced transcript cues");

  const readingRawPath = path.join(process.cwd(), "reading raw", "pinball-entry.txt");
  const readingRaw = fs.readFileSync(readingRawPath, "utf8");
  const passages = splitReadingPassages(readingRaw);
  assert(passages.length === 3, `reading raw splits into 3 passages (got ${passages.length})`);
  for (const p of passages) {
    assert(p.hasExamQuestions, `passage ${p.passage} has exam questions`);
    assert(Object.keys(p.answerKey).length > 0, `passage ${p.passage} has answer key entries (${Object.keys(p.answerKey).length})`);
  }
  const totalReadingAnswers = passages.reduce((sum, p) => sum + Object.keys(p.answerKey).length, 0);
  assert(totalReadingAnswers === 40, `reading answer key totals 40 (got ${totalReadingAnswers})`);
  assert(!/cengage|geonat|GeoNat|NGL Learning|\bNational Geographic\b/i.test(readingRaw), "reading raw has no branding leftovers");

  const readingPayload = buildReadingFullTestExamPayload(
    "pinball-entry",
    passages,
    "Pinball IELTS — Bài kiểm tra đầu vào",
  );
  assert(!!readingPayload, "buildReadingFullTestExamPayload returns a payload for pinball-entry");
  assert((readingPayload?.questionsHtml.length ?? 0) > 1000, `reading questionsHtml built (length ${readingPayload?.questionsHtml.length})`);
  assert(readingPayload?.hasAnswerKey === true, "reading payload has an answer key");
  assert(readingPayload?.questionNums.length === 40, `reading payload has 40 question nums (got ${readingPayload?.questionNums.length})`);

  console.log("\nAll pinball-entry checks passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
