import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { studyExamAuthGatePath } from "@/lib/auth/study-exam-auth-shared";
import { getCurrentUser } from "@/lib/supabase/server";

export {
  STUDY_EXAM_LOGIN_DESCRIPTION_LISTENING,
  STUDY_EXAM_LOGIN_DESCRIPTION_READING,
  STUDY_EXAM_LOGIN_TITLE,
  isStudyExamPath,
  studyExamAuthGatePath,
  studyExamLoginCopy,
} from "@/lib/auth/study-exam-auth-shared";

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
