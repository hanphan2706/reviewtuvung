/**
 * Validate reading explanation evidence against the passage.
 *
 * Goals: quote exists in passage, paragraphLetter matches quote location,
 * sequential blocks do not map evidence backwards (possible wrong paragraph).
 *
 * Skips order for matching headings/info/people and choose-two/three.
 *
 * Run: npx tsx scripts/validate-reading-explanations.ts
 *      npx tsx scripts/validate-reading-explanations.ts cam19-test1
 */
import fs from "node:fs";
import path from "node:path";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { loadReadingExamExplanations } from "../lib/reading/load-reading-explanations";
import { parsePassageExamSections } from "../lib/reading/parse-passage-questions";
import { splitReadingPassages } from "../lib/reading/split-passages";
import { validateExplanationPassageOrder } from "../lib/reading/validate-reading-explanation-order";

const args = process.argv.slice(2).filter((a) => a !== "--cam");
const filterPilot = args[0]?.trim();
const camOnly = process.argv.includes("--cam");

const explanationDir = path.join(process.cwd(), "reading explanations");
const files = fs
  .readdirSync(explanationDir)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .sort();

let totalErrors = 0;
let totalWarnings = 0;

for (const file of files) {
  const pilotId = file.replace(/\.json$/, "");
  if (filterPilot && pilotId !== filterPilot) continue;
  if (camOnly && !pilotId.startsWith("cam")) continue;

  const rawFile = READING_RAW_FILES[pilotId];
  if (!rawFile) {
    console.warn(`SKIP ${pilotId}: no raw file in manifest`);
    continue;
  }

  const rawPath = path.join(process.cwd(), "reading raw", rawFile);
  if (!fs.existsSync(rawPath)) {
    console.warn(`SKIP ${pilotId}: missing ${rawFile}`);
    continue;
  }

  const explanations = loadReadingExamExplanations(pilotId);
  if (!explanations?.questions) {
    console.warn(`SKIP ${pilotId}: no questions`);
    continue;
  }

  const passages = splitReadingPassages(fs.readFileSync(rawPath, "utf8"));
  const passageIssues: string[] = [];

  for (const passage of passages) {
    if (!passage.hasExamQuestions) continue;
    const sections = parsePassageExamSections(passage.questionsText);
    const passageQuestions = Object.fromEntries(
      Object.entries(explanations.questions).filter(([, q]) => q.passage === passage.passage),
    );

    const issues = validateExplanationPassageOrder(passage, sections, passageQuestions);
    for (const issue of issues) {
      const line = `  P${issue.passage} Q${issue.question} [${issue.kind}] ${issue.message}`;
      if (issue.severity === "error") {
        totalErrors++;
        passageIssues.push(`ERROR ${line}`);
      } else {
        totalWarnings++;
        passageIssues.push(`WARN ${line}`);
      }
    }

  }

  if (passageIssues.length) {
    console.log(`\n${pilotId}:`);
    for (const line of passageIssues) console.log(line);
  } else {
    console.log(`OK ${pilotId}`);
  }
}

console.log("\n---");
console.log(`Errors: ${totalErrors}, Warnings: ${totalWarnings}`);

if (totalErrors > 0) process.exit(1);
