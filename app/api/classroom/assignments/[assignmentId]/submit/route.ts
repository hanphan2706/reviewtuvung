import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { classroomApiError } from "@/lib/classroom/api-auth";
import {
  getAssignmentForStudent,
  getOrCreateSubmission,
  submitAssignment,
} from "@/lib/classroom/repository";

type RouteContext = { params: Promise<{ assignmentId: string }> };

export async function POST(_request: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;
  const email = auth.user.email;
  if (!email) {
    return NextResponse.json({ error: "Tài khoản thiếu email." }, { status: 400 });
  }
  try {
    const { assignmentId } = await context.params;
    const assignment = await getAssignmentForStudent(assignmentId, email, auth.user.id);
    if (assignment.kind === "writing") {
      const existing = assignment.submission ?? (await getOrCreateSubmission(assignmentId, auth.user.id));
      if (!existing.google_doc_id) {
        return NextResponse.json({ error: "Hãy mở bài viết trước khi nộp." }, { status: 400 });
      }
    }
    const submission = await submitAssignment(assignmentId, auth.user.id);
    return NextResponse.json({ submission });
  } catch (error) {
    return classroomApiError(error);
  }
}
