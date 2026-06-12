import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { mp3NextResponse } from "@/lib/http/mp3-response";
import {
  READING_AUDIO_BUCKET,
  readingAudioObjectKey,
} from "@/lib/reading/reading-audio-storage";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

async function streamLocalDevMp3(objectKey: string): Promise<NextResponse | null> {
  if (process.env.NODE_ENV === "production") return null;
  const localPath = path.join(process.cwd(), "public", "reading-audio", objectKey);
  try {
    const bytes = await readFile(localPath);
    return mp3NextResponse(bytes);
  } catch {
    return null;
  }
}

async function streamSupabaseMp3(objectKey: string): Promise<NextResponse | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(READING_AUDIO_BUCKET).download(objectKey);
  if (error || !data) return null;

  const bytes = Buffer.from(await data.arrayBuffer());
  return mp3NextResponse(bytes);
}

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const articleId = new URL(request.url).searchParams.get("articleId")?.trim() ?? "";
  const objectKey = readingAudioObjectKey(articleId);
  if (!objectKey) {
    return NextResponse.json({ error: "unknown article" }, { status: 400 });
  }

  const remote = await streamSupabaseMp3(objectKey);
  if (remote) return remote;

  const local = await streamLocalDevMp3(objectKey);
  if (local) return local;

  return NextResponse.json(
    {
      error:
        "Chưa có audio trên máy chủ. Admin: chạy SQL supabase/reading-audio-storage.sql rồi npm run reading:upload-audio.",
    },
    { status: 503 },
  );
}
