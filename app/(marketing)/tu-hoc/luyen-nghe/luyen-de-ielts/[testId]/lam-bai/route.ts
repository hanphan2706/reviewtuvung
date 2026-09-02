import { NextResponse } from "next/server";
import { requireStudyExamUser } from "@/lib/auth/study-exam-auth";
import { isListeningRealExamSlug, type RealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadMidtermListeningExamHtml } from "@/lib/exam/serve-midterm-exam-html";
import {
  isListeningIeltsTestId,
  LISTENING_IELTS_EXAM_HREF,
} from "@/lib/listening/ielts-test-catalog";
import { PINBALL_ENTRY_TEST_ID } from "@/lib/listening/pinball-entry-listening";
import {
  buildListeningFullTestExamHtml,
  buildPinballEntryListeningExamHtml,
  buildRealExamListeningExamHtml,
} from "@/lib/listening/serve-listening-exam-html";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ testId: string }> };

export async function GET(request: Request, context: RouteContext) {
  const { testId } = await context.params;

  /** Public entrance test for Pinball IELTS — no login required. */
  if (testId === PINBALL_ENTRY_TEST_ID) {
    try {
      const html = await buildPinballEntryListeningExamHtml();
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file QnA hoặc audio trên máy chủ.</p></body></html>`;
      return new NextResponse(html, {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  }

  const auth = await requireStudyExamUser(request);
  if (auth.response) return auth.response;

  if (isListeningRealExamSlug(testId)) {
    try {
      /** Test 1 vẫn dùng midterm HTML cứng; từ test 2+ generate từ QnA. */
      const html =
        testId === "de-thi-that-1"
          ? loadMidtermListeningExamHtml(testId)
          : await buildRealExamListeningExamHtml(testId as RealExamSlug);
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file QnA, audio hoặc transcript cho đề thi thật trên máy chủ.</p><p><a href="${LISTENING_IELTS_EXAM_HREF}" style="color:#000001;font-weight:700">← Quay lại Luyện đề IELTS</a></p></body></html>`;
      return new NextResponse(html, {
        status: 503,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  }

  if (!isListeningIeltsTestId(testId)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const html = await buildListeningFullTestExamHtml(testId);
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file QnA hoặc audio trong <code>listening materials/</code> trên máy chủ.</p><p><a href="${LISTENING_IELTS_EXAM_HREF}" style="color:#4b2876;font-weight:700">← Quay lại Luyện đề IELTS</a></p></body></html>`;
    return new NextResponse(html, {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
