import fs from "node:fs";
import path from "node:path";
import {
  parseRealTestAnswerKeyFile,
  realTestAnswerKeyForBoot,
  type RealTestAnswerKey,
} from "@/lib/exam/parse-real-test-answer-key";
import type { RealExamSlug } from "@/lib/exam/real-exam-catalog";

type RealExamAnswerKeyPaths = {
  reading: string;
  listening: string;
};

const ANSWER_KEY_PATHS: Record<RealExamSlug, RealExamAnswerKeyPaths> = {
  "de-thi-that-1": {
    reading: path.join(process.cwd(), "reading raw/real test 1.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 1 qna.txt"),
  },
};

function readAnswerKeyFile(filePath: string): RealTestAnswerKey | null {
  if (!fs.existsSync(filePath)) return null;
  const text = fs.readFileSync(filePath, "utf8");
  return parseRealTestAnswerKeyFile(text);
}

export function loadRealExamAnswerKey(
  slug: RealExamSlug,
  kind: "reading" | "listening",
): RealTestAnswerKey | null {
  const paths = ANSWER_KEY_PATHS[slug];
  if (!paths) return null;
  try {
    return realTestAnswerKeyForBoot(readAnswerKeyFile(paths[kind]));
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[real-exam] answer key ${slug}/${kind}:`, err);
    }
    return null;
  }
}
