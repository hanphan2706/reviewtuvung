import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getWritingPracticePrompt } from "@/lib/ielts-samples/writing-sample-registry";
import type { WritingTaskKind } from "@/lib/ielts-samples/writing-sample-types";

type RouteContext = {
  params: Promise<{ promptId: string }>;
};

export async function GET(req: Request, context: RouteContext) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { promptId } = await context.params;
  const taskParam = new URL(req.url).searchParams.get("task");
  const task =
    taskParam === "task1" || taskParam === "task2" ? (taskParam as WritingTaskKind) : undefined;

  const prompt = getWritingPracticePrompt(promptId, task);
  if (!prompt) {
    return NextResponse.json({ error: "Không tìm thấy đề bài." }, { status: 404 });
  }

  return NextResponse.json({ prompt });
}
