import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { audioBytesNextResponse, audioFileNextResponse } from "@/lib/http/mp3-response";
import { resolveMediaAudioFilePath } from "@/lib/media/media-audio-local";
import {
  MEDIA_AUDIO_BUCKET,
  isAllowedMediaAudioKey,
  mediaAudioContentType,
} from "@/lib/media/media-audio-storage";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

async function streamSupabaseAudio(
  objectKey: string,
  request: Request,
): Promise<NextResponse | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(MEDIA_AUDIO_BUCKET).download(objectKey);
  if (error || !data) return null;

  const bytes = Buffer.from(await data.arrayBuffer());
  return audioBytesNextResponse(bytes, mediaAudioContentType(objectKey), request);
}

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const key = new URL(request.url).searchParams.get("key")?.trim() ?? "";
  if (!isAllowedMediaAudioKey(key)) {
    return NextResponse.json({ error: "invalid or disallowed key" }, { status: 400 });
  }

  const localPath = resolveMediaAudioFilePath(key);
  if (localPath) {
    return audioFileNextResponse(localPath, mediaAudioContentType(key), request);
  }

  const remote = await streamSupabaseAudio(key, request);
  if (remote) return remote;

  return NextResponse.json(
    {
      error: "audio file not found",
      missing: true,
      hint: "Admin: chạy SQL supabase/media-audio-storage.sql rồi npm run media:upload-audio.",
    },
    { status: 404 },
  );
}
