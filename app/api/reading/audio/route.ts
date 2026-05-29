import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  READING_AUDIO_BUCKET,
  readingAudioObjectKey,
} from "@/lib/reading/reading-audio-storage";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const SIGNED_URL_TTL_SEC = 60 * 60;

async function streamLocalDevMp3(objectKey: string): Promise<NextResponse | null> {
  if (process.env.NODE_ENV === "production") return null;
  const localPath = path.join(process.cwd(), "public", "reading-audio", objectKey);
  try {
    const bytes = await readFile(localPath);
    return new NextResponse(bytes, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const articleId = new URL(request.url).searchParams.get("articleId")?.trim() ?? "";
  const objectKey = readingAudioObjectKey(articleId);
  if (!objectKey) {
    return NextResponse.json({ error: "unknown article" }, { status: 400 });
  }

  const supabase = await createServerSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase.storage
      .from(READING_AUDIO_BUCKET)
      .createSignedUrl(objectKey, SIGNED_URL_TTL_SEC);

    if (!error && data?.signedUrl) {
      return NextResponse.redirect(data.signedUrl);
    }
  }

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
