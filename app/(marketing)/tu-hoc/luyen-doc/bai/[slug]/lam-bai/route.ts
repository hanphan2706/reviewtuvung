import { NextResponse } from "next/server";
import { requireStudyExamUser } from "@/lib/auth/study-exam-auth";
import { readingArticleHref, resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import { buildExamRunnerHtml } from "@/lib/reading/serve-exam-html";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(request: Request, context: RouteContext) {
  const auth = await requireStudyExamUser(request);
  if (auth.response) return auth.response;

  const { slug } = await context.params;
  const article = resolveReadingArticleRoute(slug);
  if (!article) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const html = await buildExamRunnerHtml(article);
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    const back = readingArticleHref(article);
    const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file trong <code>reading raw/</code> trên máy chủ (ví dụ <code>cam 20 test 2.txt</code>).</p><p><a href="${back}" style="color:#4b2876;font-weight:700">← Quay lại bài đọc</a></p></body></html>`;
    return new NextResponse(html, {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
