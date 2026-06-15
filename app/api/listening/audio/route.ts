import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { mp3FileNextResponse, mp3NextResponse } from "@/lib/http/mp3-response";
import {
  LISTENING_AUDIO_BUCKET,
  listeningAudioObjectKey,
} from "@/lib/listening/listening-audio-storage";
import { resolveListeningAudioPath } from "@/lib/listening/listening-materials-fs";
import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

async function streamSupabaseMp3(objectKey: string, request: Request): Promise<NextResponse | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(LISTENING_AUDIO_BUCKET).download(objectKey);
  if (error || !data) return null;

  const bytes = Buffer.from(await data.arrayBuffer());
  return mp3NextResponse(bytes, request);
}

function streamLocalFile(filePath: string, request: Request): NextResponse {
  return mp3FileNextResponse(filePath, request);
}

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const file = new URL(request.url).searchParams.get("file");
  if (!file || !isAllowedListeningAudioFile(file)) {
    return NextResponse.json({ error: "invalid or disallowed file" }, { status: 400 });
  }

  const objectKey = listeningAudioObjectKey(file);
  const filePath = resolveListeningAudioPath(file);
  if (filePath) {
    return streamLocalFile(filePath, request);
  }

  if (objectKey) {
    const remote = await streamSupabaseMp3(objectKey, request);
    if (remote) return remote;
  }

  return NextResponse.json(
      {
        error: "audio file not found",
        missing: true,
        hint: "Admin: chạy SQL supabase/listening-audio-storage.sql rồi npm run listening:upload-audio.",
      },
      { status: 404 },
    );
}
