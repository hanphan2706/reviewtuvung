import { NextResponse } from "next/server";
import { deleteAssignment, updateAssignment } from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ assignmentId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { assignmentId } = await context.params;
    const body = (await request.json()) as {
      title?: string;
      instructions?: string;
      sort_order?: number;
    };
    const assignment = await updateAssignment(assignmentId, body);
    return NextResponse.json({ assignment });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { assignmentId } = await context.params;
    await deleteAssignment(assignmentId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return classroomApiError(error);
  }
}
