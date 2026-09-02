import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { classroomApiError } from "@/lib/classroom/api-auth";
import { getAssignmentForStudent } from "@/lib/classroom/repository";
import { isGoogleDriveConfigured } from "@/lib/google/drive-docs";

type RouteContext = { params: Promise<{ assignmentId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;
  const email = auth.user.email;
  if (!email) {
    return NextResponse.json({ error: "Tài khoản thiếu email." }, { status: 400 });
  }
  try {
    const { assignmentId } = await context.params;
    const assignment = await getAssignmentForStudent(assignmentId, email, auth.user.id);
    return NextResponse.json({
      assignment,
      googleDriveConfigured: isGoogleDriveConfigured(),
    });
  } catch (error) {
    return classroomApiError(error);
  }
}
