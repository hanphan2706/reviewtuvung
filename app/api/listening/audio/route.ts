import fs from "node:fs";
import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  LISTENING_AUDIO_BUCKET,
  listeningAudioObjectKey,
} from "@/lib/listening/listening-audio-storage";
import { resolveListeningAudioPath } from "@/lib/listening/listening-materials-fs";
import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

const SIGNED_URL_TTL_SEC = 60 * 60;

function parseByteRange(
  rangeHeader: string | null,
  size: number,
): { start: number; end: number } | null {
  if (!rangeHeader?.startsWith("bytes=")) return null;
  const [startStr, endStr] = rangeHeader.replace(/^bytes=/, "").split("-");
  const start = startStr ? Number.parseInt(startStr, 10) : 0;
  const end = endStr ? Number.parseInt(endStr, 10) : size - 1;
  if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end >= size || start > end) {
    return null;
  }
  return { start, end };
}

async function signedSupabaseUrl(objectKey: string): Promise<string | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage
    .from(LISTENING_AUDIO_BUCKET)
    .createSignedUrl(objectKey, SIGNED_URL_TTL_SEC);

  if (error || !data?.signedUrl) return null;
  return data.signedUrl;
}

function streamLocalFile(filePath: string, request: Request): NextResponse {
  const stat = fs.statSync(filePath);
  const range = parseByteRange(request.headers.get("range"), stat.size);

  if (range) {
    const { start, end } = range;
    const stream = createReadStream(filePath, { start, end });
    const webStream = Readable.toWeb(stream) as ReadableStream<Uint8Array>;
    return new NextResponse(webStream, {
      status: 206,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(end - start + 1),
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, max-age=3600",
      },
    });
  }

  const webStream = Readable.toWeb(createReadStream(filePath)) as ReadableStream<Uint8Array>;
  return new NextResponse(webStream, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(stat.size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, max-age=3600",
    },
  });
}

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const file = new URL(request.url).searchParams.get("file");
  if (!file || !isAllowedListeningAudioFile(file)) {
    return NextResponse.json({ error: "invalid or disallowed file" }, { status: 400 });
  }

  const objectKey = listeningAudioObjectKey(file);
  if (objectKey) {
    const signedUrl = await signedSupabaseUrl(objectKey);
    if (signedUrl) {
      return NextResponse.redirect(signedUrl);
    }
  }

  const filePath = resolveListeningAudioPath(file);
  if (!filePath) {
    return NextResponse.json(
      {
        error: "audio file not found",
        missing: true,
        hint: "Admin: chạy SQL supabase/listening-audio-storage.sql rồi npm run listening:upload-audio.",
      },
      { status: 404 },
    );
  }

  return streamLocalFile(filePath, request);
}
