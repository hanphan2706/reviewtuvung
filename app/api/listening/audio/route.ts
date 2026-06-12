import fs from "node:fs";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  LISTENING_AUDIO_BUCKET,
  listeningAudioObjectKey,
} from "@/lib/listening/listening-audio-storage";
import { resolveListeningAudioPath } from "@/lib/listening/listening-materials-fs";
import { isAllowedListeningAudioFile } from "@/lib/listening/listening-materials-urls";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

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

function audioResponse(bytes: Buffer, request: Request): NextResponse {
  const size = bytes.length;
  const range = parseByteRange(request.headers.get("range"), size);

  if (range) {
    const { start, end } = range;
    const chunk = bytes.subarray(start, end + 1);
    return new NextResponse(chunk, {
      status: 206,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(chunk.length),
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, no-store",
      },
    });
  }

  return new NextResponse(bytes, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
    },
  });
}

async function streamSupabaseMp3(objectKey: string, request: Request): Promise<NextResponse | null> {
  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase.storage.from(LISTENING_AUDIO_BUCKET).download(objectKey);
  if (error || !data) return null;

  const bytes = Buffer.from(await data.arrayBuffer());
  return audioResponse(bytes, request);
}

function streamLocalFile(filePath: string, request: Request): NextResponse {
  const bytes = fs.readFileSync(filePath);
  return audioResponse(bytes, request);
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
    const remote = await streamSupabaseMp3(objectKey, request);
    if (remote) return remote;
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
