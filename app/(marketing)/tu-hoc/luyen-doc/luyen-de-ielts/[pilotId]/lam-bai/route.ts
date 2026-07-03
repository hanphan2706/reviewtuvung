import { NextResponse } from "next/server";
import { requireStudyExamUser } from "@/lib/auth/study-exam-auth";
import { isReadingRealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadMidtermReadingExamHtml } from "@/lib/exam/serve-midterm-exam-html";
import { isReadingIeltsTestPilotId, READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";
import { buildFullTestExamRunnerHtml } from "@/lib/reading/serve-exam-html";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ pilotId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireStudyExamUser(_request);
  if (auth.response) return auth.response;

  const { pilotId } = await context.params;

  if (isReadingRealExamSlug(pilotId)) {
    try {
      const html = loadMidtermReadingExamHtml();
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file Mid-Term Reading trên máy chủ.</p><p><a href="${READING_IELTS_EXAM_HREF}" style="color:#000001;font-weight:700">← Quay lại Luyện đề IELTS</a></p></body></html>`;
      return new NextResponse(html, {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  }

  if (!isReadingIeltsTestPilotId(pilotId)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const html = await buildFullTestExamRunnerHtml(pilotId);
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file trong <code>reading raw/</code> trên máy chủ.</p><p><a href="${READING_IELTS_EXAM_HREF}" style="color:#4b2876;font-weight:700">← Quay lại Luyện đề IELTS</a></p></body></html>`;
    return new NextResponse(html, {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
