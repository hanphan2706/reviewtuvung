import { NextResponse } from "next/server";
import type {
  ClassroomAssignmentKind,
  ClassroomAssignmentPayload,
  ClassroomAssignmentRow,
} from "@/lib/classroom/types";
import { createAssignment, listAssignments } from "@/lib/classroom/repository";
import { classroomApiError, requireApiAdmin } from "@/lib/classroom/api-auth";

type RouteContext = { params: Promise<{ classId: string }> };

const VALID_KINDS = new Set<ClassroomAssignmentKind>(["writing", "self_study", "external_link"]);

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const assignments = await listAssignments(classId);
    return NextResponse.json({ assignments });
  } catch (error) {
    return classroomApiError(error);
  }
}

export async function POST(request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  try {
    const { classId } = await context.params;
    const body = (await request.json()) as {
      title?: string;
      instructions?: string;
      kind?: ClassroomAssignmentKind;
      payload?: Record<string, unknown>;
      sortOrder?: number;
    };
    const title = body.title?.trim() ?? "";
    const kind = body.kind;
    if (!title) {
      return NextResponse.json({ error: "Tiêu đề bài tập không được để trống." }, { status: 400 });
    }
    if (!kind || !VALID_KINDS.has(kind)) {
      return NextResponse.json({ error: "Loại bài tập không hợp lệ." }, { status: 400 });
    }
    if (kind === "external_link") {
      const url = typeof body.payload?.url === "string" ? body.payload.url.trim() : "";
      if (!url) {
        return NextResponse.json({ error: "Link ngoài không được để trống." }, { status: 400 });
      }
    }
    if (kind === "self_study") {
      const href = typeof body.payload?.href === "string" ? body.payload.href.trim() : "";
      if (!href) {
        return NextResponse.json({ error: "Hãy chọn bài Tự học." }, { status: 400 });
      }
    }
    const assignment = await createAssignment({
      classId,
      title,
      instructions: body.instructions,
      kind,
      payload: (body.payload ?? {}) as ClassroomAssignmentPayload,
      sortOrder: body.sortOrder,
    });
    return NextResponse.json({ assignment }, { status: 201 });
  } catch (error) {
    return classroomApiError(error);
  }
}
