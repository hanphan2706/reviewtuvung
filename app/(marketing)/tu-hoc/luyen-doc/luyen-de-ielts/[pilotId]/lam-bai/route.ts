import { NextResponse } from "next/server";
import { requireStudyExamUser } from "@/lib/auth/study-exam-auth";
import { isReadingRealExamSlug } from "@/lib/exam/real-exam-catalog";
import { isReadingIeltsTestPilotId, READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import {
  buildFullTestExamRunnerHtml,
  buildPinballEntryReadingExamRunnerHtml,
  PINBALL_ENTRY_READING_PILOT_ID,
} from "@/lib/reading/serve-exam-html";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ pilotId: string }> };

function isCamStyleReadingPilot(pilotId: string): pilotId is ReadingPilotId {
  return isReadingRealExamSlug(pilotId) || isReadingIeltsTestPilotId(pilotId);
}

export async function GET(_request: Request, context: RouteContext) {
  const { pilotId } = await context.params;

  /** Public entrance test for Pinball IELTS — no login required. */
  if (pilotId === PINBALL_ENTRY_READING_PILOT_ID) {
    try {
      const html = await buildPinballEntryReadingExamRunnerHtml();
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file trong <code>reading raw/</code> trên máy chủ.</p></body></html>`;
      return new NextResponse(html, {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  }

  const auth = await requireStudyExamUser(_request);
  if (auth.response) return auth.response;

  if (!isCamStyleReadingPilot(pilotId)) {
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
