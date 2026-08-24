import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingSample } from "@/lib/ielts-samples/writing-sample-registry";
import {
  isWritingSampleLibraryUnlockedForRequest,
  WRITING_STUDENT_ONLY_DESCRIPTION,
  WRITING_STUDENT_ONLY_TITLE,
} from "@/lib/writing/writing-sample-access";

type RouteContext = {
  params: Promise<{ sampleId: string }>;
};

export async function GET(req: Request, context: RouteContext) {
  if (!isWritingSampleLibraryUnlockedForRequest(req)) {
    return NextResponse.json(
      { error: WRITING_STUDENT_ONLY_TITLE, message: WRITING_STUDENT_ONLY_DESCRIPTION },
      { status: 403 },
    );
  }

  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { sampleId } = await context.params;
  const sample = getWritingSample(sampleId);
  if (!sample) {
    return NextResponse.json({ error: "Không tìm thấy bài mẫu." }, { status: 404 });
  }

  return NextResponse.json({ sample });
}
