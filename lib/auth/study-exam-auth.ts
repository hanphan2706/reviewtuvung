import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { getCurrentUser } from "@/lib/supabase/server";

export const STUDY_EXAM_LOGIN_TITLE = "Đăng nhập để làm bài";

export const STUDY_EXAM_LOGIN_DESCRIPTION_LISTENING =
  "Bạn có thể khám phá Luyện nghe khi chưa đăng nhập. Đăng nhập để mở đề IELTS và nghe audio bài thi.";

export const STUDY_EXAM_LOGIN_DESCRIPTION_READING =
  "Bạn có thể khám phá Luyện đọc khi chưa đăng nhập. Đăng nhập để mở đề IELTS đọc hiểu.";

export function isStudyExamPath(pathname: string): boolean {
  return pathname.endsWith("/lam-bai");
}

/** Trang hub hiển thị popup đăng nhập — không redirect sang Từ vựng. */
export function studyExamAuthGatePath(returnPath: string): string {
  const path = returnPath.split("?")[0] ?? returnPath;

  if (path.startsWith("/tu-hoc/luyen-nghe/luyen-de-ielts/")) {
    return "/tu-hoc/luyen-nghe/luyen-de-ielts";
  }

  const listeningPart = path.match(/^\/tu-hoc\/luyen-nghe\/([^/]+)\/lam-bai$/);
  if (listeningPart?.[1]) {
    return `/tu-hoc/luyen-nghe/${listeningPart[1]}`;
  }

  if (path.startsWith("/tu-hoc/luyen-doc/luyen-de-ielts/")) {
    return "/tu-hoc/luyen-doc/luyen-de-ielts";
  }

  const readingArticle = path.match(/^\/tu-hoc\/luyen-doc\/bai\/([^/]+)\/lam-bai$/);
  if (readingArticle?.[1]) {
    return "/tu-hoc/luyen-doc/luyen-de-ielts";
  }

  return "/tu-hoc/luyen-nghe";
}

export function buildStudyExamAuthRedirect(request: Request, returnPath: string): NextResponse {
  const url = new URL(request.url);
  const gate = studyExamAuthGatePath(returnPath);
  const login = new URL(gate, url.origin);
  login.searchParams.set("next", returnPath);
  return NextResponse.redirect(login);
}

type RequireStudyExamUserResult =
  | { user: User; response: null }
  | { user: null; response: NextResponse };

/** Route lam-bai HTML — cần session; guest redirect về hub tương ứng + ?next=. */
export async function requireStudyExamUser(request: Request): Promise<RequireStudyExamUserResult> {
  const user = await getCurrentUser();
  if (user) {
    return { user, response: null };
  }

  const url = new URL(request.url);
  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname(url.hostname, hostHeader);
  if (isDevAuthBypassForHost(hostname)) {
    return { user: devAuthBypassUser(), response: null };
  }

  const returnPath = `${url.pathname}${url.search}`;
  return { user: null, response: buildStudyExamAuthRedirect(request, returnPath) };
}

export function studyExamLoginCopy(href: string): { title: string; description: string } {
  if (href.startsWith("/tu-hoc/luyen-doc")) {
    return {
      title: STUDY_EXAM_LOGIN_TITLE,
      description: STUDY_EXAM_LOGIN_DESCRIPTION_READING,
    };
  }
  return {
    title: STUDY_EXAM_LOGIN_TITLE,
    description: STUDY_EXAM_LOGIN_DESCRIPTION_LISTENING,
  };
}
