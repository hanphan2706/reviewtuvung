import { NextResponse } from "next/server";
import { requireStudyExamUser } from "@/lib/auth/study-exam-auth";
import { listeningLessonHrefBySlug } from "@/lib/listening/listening-hub-nav";
import { buildListeningPartExamHtml } from "@/lib/listening/serve-listening-exam-html";
import { getListeningPartBySlug } from "@/lib/listening/content-manifest";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ lessonSlug: string }> };

export async function GET(request: Request, context: RouteContext) {
  const auth = await requireStudyExamUser(request);
  if (auth.response) return auth.response;

  const { lessonSlug } = await context.params;
  const meta = getListeningPartBySlug(lessonSlug);
  if (!meta) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const html = await buildListeningPartExamHtml(lessonSlug);
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    const back = listeningLessonHrefBySlug(lessonSlug);
    const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề nghe</h1><p style="color:#47464b;line-height:1.6">Thiếu file QnA trong <code>listening materials/</code> hoặc Part chưa được map.</p><p><a href="${back}" style="color:#4b2876;font-weight:700">← Quay lại bài nghe</a></p></body></html>`;
    return new NextResponse(html, {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
