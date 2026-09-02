import { NextResponse } from "next/server";
import { listSubmissionsForAssignment } from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ assignmentId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { assignmentId } = await context.params;
    const submissions = await listSubmissionsForAssignment(assignmentId);
    return NextResponse.json({ submissions });
  } catch (error) {
    return classroomApiError(error);
  }
}
