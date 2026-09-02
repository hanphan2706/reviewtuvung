import { NextResponse } from "next/server";
import { isValidMemberEmail, normalizeMemberEmail } from "@/lib/classroom/normalize-email";
import { addMember, listMembers } from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ classId: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const members = await listMembers(classId);
    return NextResponse.json({ members });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function POST(request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const body = (await request.json()) as { email?: string };
    const email = normalizeMemberEmail(body.email ?? "");
    if (!isValidMemberEmail(email)) {
      return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
    }
    const member = await addMember(classId, email);
    return NextResponse.json({ member }, { status: 201 });
  } catch (error) {
    return classroomApiError(error);
  }
}
