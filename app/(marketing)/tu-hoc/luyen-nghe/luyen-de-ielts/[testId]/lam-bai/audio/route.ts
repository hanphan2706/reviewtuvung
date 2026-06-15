import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { getListeningRealExam, isListeningRealExamSlug } from "@/lib/exam/real-exam-catalog";
import { mp3FileNextResponse, mp3NextResponse } from "@/lib/http/mp3-response";
import {
  LISTENING_AUDIO_BUCKET,
  listeningAudioObjectKey,
} from "@/lib/listening/listening-audio-storage";
import { resolveListeningAudioPath } from "@/lib/listening/listening-materials-fs";
import { realTestListeningAudioFileName } from "@/lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";
import { getCurrentUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ testId: string }> };

async function requireListeningExamUser(request: Request) {
  const user = await getCurrentUser();
  if (user) return user;

  const url = new URL(request.url);
  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname(url.hostname, hostHeader);
  if (isDevAuthBypassForHost(hostname)) return devAuthBypassUser();

  return null;
}

async function streamSupabaseMp3(objectKey: string, request: Request): Promise<NextResponse | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(LISTENING_AUDIO_BUCKET).download(objectKey);
  if (error || !data) return null;

  const bytes = Buffer.from(await data.arrayBuffer());
  return mp3NextResponse(bytes, request);
}

export async function GET(request: Request, context: RouteContext) {
  const { testId } = await context.params;

  if (!isListeningRealExamSlug(testId)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const user = await requireListeningExamUser(request);
  if (!user) {
    return NextResponse.json({ error: "Đăng nhập để tiếp tục." }, { status: 401 });
  }

  const exam = getListeningRealExam(testId);
  if (!exam) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const fileName = realTestListeningAudioFileName(exam.seriesNumber);
  const filePath = resolveListeningAudioPath(fileName);
  if (filePath) {
    return mp3FileNextResponse(filePath, request);
  }

  const objectKey = listeningAudioObjectKey(fileName);
  if (objectKey) {
    const remote = await streamSupabaseMp3(objectKey, request);
    if (remote) return remote;
  }

  return NextResponse.json(
    {
      error: "audio file not found",
      missing: true,
      hint: "Admin: npm run listening:prepare-audio-for-upload && npm run listening:upload-audio",
    },
    { status: 404 },
  );
}
