import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { AUTH_ENTRY_PATH } from "@/lib/auth/protected-routes";
import { isListeningRealExamSlug } from "@/lib/exam/real-exam-catalog";
import { loadMidtermListeningExamHtml } from "@/lib/exam/serve-midterm-exam-html";
import {
  isListeningIeltsTestId,
  LISTENING_IELTS_EXAM_HREF,
} from "@/lib/listening/ielts-test-catalog";
import { buildListeningFullTestExamHtml } from "@/lib/listening/serve-listening-exam-html";
import { getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ testId: string }> };

async function requireListeningExamUser(request: Request) {
  const user = await getCurrentUser();
  if (user) return user;

  const url = new URL(request.url);
  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname(url.hostname, hostHeader);
  if (isDevAuthBypassForHost(hostname)) return devAuthBypassUser();

  return null;
}

export async function GET(request: Request, context: RouteContext) {
  const { testId } = await context.params;

  if (isListeningRealExamSlug(testId)) {
    const user = await requireListeningExamUser(request);
    if (!user) {
      const url = new URL(request.url);
      const login = new URL(AUTH_ENTRY_PATH, url.origin);
      login.searchParams.set("next", `${url.pathname}${url.search}`);
      return NextResponse.redirect(login);
    }

    try {
      const html = loadMidtermListeningExamHtml();
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch {
      const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Không tải được đề</title></head><body style="font-family:system-ui,sans-serif;padding:32px;max-width:480px;margin:0 auto;color:#000001"><h1 style="font-size:1.25rem">Không tải được đề bài</h1><p style="color:#47464b;line-height:1.6">Thiếu file Mid-Term Listening trên máy chủ.</p><p><a href="${LISTENING_IELTS_EXAM_HREF}" style="color:#000001;font-weight:700">← Quay lại Luyện đề IELTS</a></p></body></html>`;
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
