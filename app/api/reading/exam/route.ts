import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { buildReadingExamPayload } from "@/lib/reading/build-exam-html";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import {
  loadReadingExamExplanations,
  slimReadingExplanationsForBoot,
} from "@/lib/reading/load-reading-explanations";
import { loadReadingPassage } from "@/lib/reading/load-reading-raw";
import { READING_RAW_FILES } from "@/lib/reading/raw-manifest";

const PILOT_LABELS: Record<ReadingPilotId, string> = {
  "cam17-test4": "Cambridge 17 · Test 4",
  "cam17-test3": "Cambridge 17 · Test 3",
  "cam17-test2": "Cambridge 17 · Test 2",
  "cam17-test1": "Cambridge 17 · Test 1",
  "cam19-test4": "Cambridge 19 · Test 4",
  "cam19-test3": "Cambridge 19 · Test 3",
  "cam19-test2": "Cambridge 19 · Test 2",
  "cam19-test1": "Cambridge 19 · Test 1",
  "cam18-test4": "Cambridge 18 · Test 4",
  "cam18-test3": "Cambridge 18 · Test 3",
  "cam18-test2": "Cambridge 18 · Test 2",
  "cam18-test1": "Cambridge 18 · Test 1",
  "cam20-test1": "Cambridge 20 · Test 1",
  "cam20-test2": "Cambridge 20 · Test 2",
  "cam20-test3": "Cambridge 20 · Test 3",
  "cam20-test4": "Cambridge 20 · Test 4",
  "cam16-test1": "Cambridge 16 · Test 1",
  "cam16-test2": "Cambridge 16 · Test 2",
  "cam16-test3": "Cambridge 16 · Test 3",
  "cam16-test4": "Cambridge 16 · Test 4",
  "cam15-test1": "Cambridge 15 · Test 1",
  "cam15-test2": "Cambridge 15 · Test 2",
  "cam15-test3": "Cambridge 15 · Test 3",
  "cam15-test4": "Cambridge 15 · Test 4",
  "cam12-test1": "Cambridge 12 · Test 1",
  "cam12-test2": "Cambridge 12 · Test 2",
  "cam12-test3": "Cambridge 12 · Test 3",
  "cam12-test4": "Cambridge 12 · Test 4",
  "cam13-test1": "Cambridge 13 · Test 1",
  "cam13-test2": "Cambridge 13 · Test 2",
  "cam13-test3": "Cambridge 13 · Test 3",
  "cam13-test4": "Cambridge 13 · Test 4",
  "cam14-test1": "Cambridge 14 · Test 1",
  "cam14-test2": "Cambridge 14 · Test 2",
  "cam14-test3": "Cambridge 14 · Test 3",
  "cam14-test4": "Cambridge 14 · Test 4",
  "cam21-test1": "Cambridge 21 · Test 1",
  "cam21-test2": "Cambridge 21 · Test 2",
  "cam21-test3": "Cambridge 21 · Test 3",
  "cam21-test4": "Cambridge 21 · Test 4",
  "reading-challenge-1": "Compass Publishing",
  "reading-challenge-2": "Compass Publishing",
  "reading-challenge-3": "Compass Publishing",
  "de-thi-that-1": "Đề thi thật IELTS 1",
  "de-thi-that-2": "Đề thi thật IELTS 2",
  "de-thi-that-3": "Đề thi thật IELTS 3",
  "de-thi-that-4": "Đề thi thật IELTS 4",
  "de-thi-that-5": "Đề thi thật IELTS 5",
  "de-thi-that-6": "Đề thi thật IELTS 6",
  "de-thi-that-7": "Đề thi thật IELTS 7",
  "de-thi-that-8": "Đề thi thật IELTS 8",
  "de-thi-that-9": "Đề thi thật IELTS 9",
  "de-thi-that-10": "Đề thi thật IELTS 10",
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  /** Luyện đọc (skipLogin): đề Cambridge allowlist — không cần session (HTML tĩnh hay mất cookie). */
  const isPublicPractice = url.searchParams.get("public") === "1";

  if (!isPublicPractice) {
    const auth = await requireApiUser();
    if (auth.response) return auth.response;
  }

  const pilotId = url.searchParams.get("pilot") as ReadingPilotId | null;
  const passageNum = Number.parseInt(url.searchParams.get("passage") ?? "1", 10);

  if (!pilotId || !READING_RAW_FILES[pilotId] || Number.isNaN(passageNum)) {
    return NextResponse.json({ error: "invalid params" }, { status: 400 });
  }

  try {
    const block = await loadReadingPassage(pilotId, passageNum);
    if (!block) {
      return NextResponse.json({ error: "passage not found" }, { status: 404 });
    }

    const payload = buildReadingExamPayload(pilotId, block, PILOT_LABELS[pilotId] ?? pilotId);
    if (!payload) {
      return NextResponse.json({ error: "no exam questions" }, { status: 404 });
    }

    const explanations = slimReadingExplanationsForBoot(loadReadingExamExplanations(pilotId));

    return NextResponse.json({ ...payload, explanations });
  } catch {
    return NextResponse.json({ error: "file missing", missing: true }, { status: 404 });
  }
}
