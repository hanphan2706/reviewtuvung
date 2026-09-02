import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { classroomApiError } from "@/lib/classroom/api-auth";
import {
  attachGoogleDocToSubmission,
  getAssignmentForStudent,
  getOrCreateSubmission,
} from "@/lib/classroom/repository";
import { createStudentWritingDoc, isGoogleDriveConfigured } from "@/lib/google/drive-docs";
import { studyHubUserProfileFromAuthUser } from "@/lib/auth/user-profile";

type RouteContext = { params: Promise<{ assignmentId: string }> };

export async function POST(_request: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;
  const email = auth.user.email;
  if (!email) {
    return NextResponse.json({ error: "Tài khoản thiếu email." }, { status: 400 });
  }
  if (!isGoogleDriveConfigured()) {
    return NextResponse.json(
      { error: "Google Drive chưa được cấu hình. Liên hệ giáo viên." },
      { status: 503 },
    );
  }
  try {
    const { assignmentId } = await context.params;
    const assignment = await getAssignmentForStudent(assignmentId, email, auth.user.id);
    if (assignment.kind !== "writing") {
      return NextResponse.json({ error: "Bài tập này không dùng Google Docs." }, { status: 400 });
    }

    let submission = assignment.submission ?? (await getOrCreateSubmission(assignmentId, auth.user.id));
    if (submission.google_doc_id && submission.google_doc_url) {
      const docId = submission.google_doc_id;
      return NextResponse.json({
        submission,
        doc: {
          id: docId,
          url: submission.google_doc_url,
          embedUrl: `https://docs.google.com/document/d/${docId}/edit?embedded=true`,
        },
      });
    }

    const profile = studyHubUserProfileFromAuthUser(auth.user);
    const doc = await createStudentWritingDoc({
      title: assignment.title,
      studentEmail: email,
      studentName: profile?.displayName,
    });
    submission = await attachGoogleDocToSubmission(submission.id, { id: doc.id, url: doc.url });
    return NextResponse.json({ submission, doc });
  } catch (error) {
    return classroomApiError(error);
  }
}
