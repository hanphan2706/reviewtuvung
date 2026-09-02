import { NextResponse } from "next/server";
import { removeMember } from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ classId: string; memberId: string }> };

export async function DELETE(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId, memberId } = await context.params;
    await removeMember(classId, memberId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return classroomApiError(error);
  }
}
