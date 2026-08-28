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

const ANSWER_KEY_PATHS: Partial<Record<RealExamSlug, RealExamAnswerKeyPaths>> = {
  "de-thi-that-1": {
    /** Answer-only backup cho midterm listening shell / transcript prep. */
    reading: path.join(process.cwd(), "reading raw/real test 1.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 1 answers.txt"),
  },
  "de-thi-that-2": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-2.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 2 answers.txt"),
  },
  "de-thi-that-3": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-3.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 3 answers.txt"),
  },
  "de-thi-that-4": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-4.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 4 answers.txt"),
  },
  "de-thi-that-5": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-5.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 5 answers.txt"),
  },
  "de-thi-that-6": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-6.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 6 answers.txt"),
  },
  "de-thi-that-7": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-7.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 7 answers.txt"),
  },
  "de-thi-that-8": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-8.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 8 answers.txt"),
  },
  "de-thi-that-9": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-9.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 9 answers.txt"),
  },
  "de-thi-that-10": {
    reading: path.join(process.cwd(), "reading raw/de-thi-that-10.txt"),
    listening: path.join(process.cwd(), "listening materials/real test 10 answers.txt"),
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
