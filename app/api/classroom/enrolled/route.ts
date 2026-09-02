import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { classroomApiError } from "@/lib/classroom/api-auth";
import { isClassroomMember } from "@/lib/classroom/repository";

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;
  const email = auth.user.email;
  if (!email) {
    return NextResponse.json({ enrolled: false });
  }
  try {
    const enrolled = await isClassroomMember(email, auth.user.id);
    return NextResponse.json({ enrolled });
  } catch (error) {
    return classroomApiError(error);
  }
}
