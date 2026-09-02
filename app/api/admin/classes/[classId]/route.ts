import { NextResponse } from "next/server";
import {
  deleteClass,
  getClassById,
  listAssignments,
  listMembers,
  updateClass,
} from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ classId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const classroom = await getClassById(classId);
    if (!classroom) {
      return NextResponse.json({ error: "Không tìm thấy lớp." }, { status: 404 });
    }
    const [members, assignments] = await Promise.all([listMembers(classId), listAssignments(classId)]);
    return NextResponse.json({ classroom, members, assignments });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const body = (await request.json()) as { name?: string; description?: string };
    const classroom = await updateClass(classId, body);
    return NextResponse.json({ classroom });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    await deleteClass(classId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return classroomApiError(error);
  }
}
