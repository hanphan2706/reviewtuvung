import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { classroomApiError } from "@/lib/classroom/api-auth";
import { listAssignmentsForStudent } from "@/lib/classroom/repository";

export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;
  const email = auth.user.email;
  if (!email) {
    return NextResponse.json({ assignments: [] });
  }
  try {
    const assignments = await listAssignmentsForStudent(email, auth.user.id);
    return NextResponse.json({ assignments });
  } catch (error) {
    return classroomApiError(error);
  }
}
