import { NextResponse } from "next/server";
import { getListeningPartById } from "@/lib/listening/content-manifest";
import { generateIeltsListeningFlowContent } from "@/lib/listening/generate-ielts-listening-flow-content";
import { getIeltsFlowLessonContent } from "@/lib/listening/ielts-flow-content-registry";
import { loadListeningTranscriptText } from "@/lib/listening/load-listening-transcript-text";
import { hasListeningPartExam } from "@/lib/listening/listening-qna-catalog";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const partId = searchParams.get("partId")?.trim();
  if (!partId) {
    return NextResponse.json({ error: "partId required" }, { status: 400 });
  }

  if (!hasListeningPartExam(partId)) {
    return NextResponse.json({ error: "no flow content for part" }, { status: 404 });
  }

  const curated = getIeltsFlowLessonContent(partId);
  if (curated) {
    return NextResponse.json({ content: curated });
  }

  const meta = getListeningPartById(partId);
  if (!meta) {
    return NextResponse.json({ error: "part not found" }, { status: 404 });
  }

  const transcript = loadListeningTranscriptText(meta);
  const content = generateIeltsListeningFlowContent(meta, transcript);
  if (!content) {
    return NextResponse.json({ error: "could not generate content" }, { status: 503 });
  }

  return NextResponse.json({ content });
}
