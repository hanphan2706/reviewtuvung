import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { buildReadingExamPayload } from "@/lib/reading/build-exam-html";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
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
  "reading-challenge-1": "Compass Publishing",
  "reading-challenge-2": "Compass Publishing",
  "reading-challenge-3": "Compass Publishing",
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

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json({ error: "file missing", missing: true }, { status: 404 });
  }
}
