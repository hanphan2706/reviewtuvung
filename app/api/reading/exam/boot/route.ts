import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { isPublicCambridgeReadingPilot } from "@/lib/auth/protected-routes";
import { resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import { buildExamBootPayload } from "@/lib/reading/serve-exam-html";

/** JSON đề cho lam-bai — Cambridge demo public; Compass cần session. */
export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "missing slug" }, { status: 400 });
  }

  const article = resolveReadingArticleRoute(slug);
  if (!article) {
    return NextResponse.json({ error: "article not found" }, { status: 404 });
  }

  if (!isPublicCambridgeReadingPilot(article.pilotId)) {
    const auth = await requireApiUser();
    if (auth.response) return auth.response;
  }

  try {
    const boot = await buildExamBootPayload(article);
    return NextResponse.json(boot);
  } catch {
    return NextResponse.json({ error: "file missing", missing: true }, { status: 404 });
  }
}
