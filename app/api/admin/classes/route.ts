import { NextResponse } from "next/server";
import {
  createClass,
  listClassesForAdmin,
} from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

export async function GET() {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const classes = await listClassesForAdmin();
    return NextResponse.json({ classes });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function POST(request: Request) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const body = (await request.json()) as { name?: string; description?: string };
    const name = body.name?.trim() ?? "";
    if (!name) {
      return NextResponse.json({ error: "Tên lớp không được để trống." }, { status: 400 });
    }
    const classroom = await createClass({
      name,
      description: body.description ?? "",
      createdBy: auth.user.id,
    });
    return NextResponse.json({ classroom }, { status: 201 });
  } catch (error) {
    return classroomApiError(error);
  }
}
