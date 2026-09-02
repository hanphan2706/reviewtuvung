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
import { r2ListeningKey } from "@/lib/r2/config";
import { streamR2ObjectResponse } from "@/lib/r2/stream-object";

/** Public entrance test — audio must be reachable without login (matches `pinball-entry-part{1-4}.mp3`). */
const PUBLIC_PINBALL_ENTRY_AUDIO_FILE = /^pinball-entry-part[1-4]\.mp3$/i;

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
  const file = new URL(request.url).searchParams.get("file");
  if (!file || !isAllowedListeningAudioFile(file)) {
    return NextResponse.json({ error: "invalid or disallowed file" }, { status: 400 });
  }

  if (!PUBLIC_PINBALL_ENTRY_AUDIO_FILE.test(file)) {
    const auth = await requireApiUser();
    if (auth.response) return auth.response;
  }

  const objectKey = listeningAudioObjectKey(file);
  const filePath = resolveListeningAudioPath(file);
  if (filePath) {
    return streamLocalFile(filePath, request);
  }

  if (objectKey) {
    const r2 = await streamR2ObjectResponse(r2ListeningKey(objectKey), "audio/mpeg", request);
    if (r2) return r2;

    const remote = await streamSupabaseMp3(objectKey, request);
    if (remote) return remote;
  }

  return NextResponse.json(
      {
        error: "audio file not found",
        missing: true,
        hint: "Admin: upload audio lên R2 (npm run audio:upload-r2) hoặc Supabase (npm run listening:upload-audio).",
      },
      { status: 404 },
    );
}
