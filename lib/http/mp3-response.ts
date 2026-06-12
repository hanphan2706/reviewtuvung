import { NextResponse } from "next/server";

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

/** MP3 bytes → NextResponse (Uint8Array body — tránh lỗi TS Buffer vs BodyInit trên Vercel). */
export function mp3NextResponse(bytes: Buffer, request?: Request): NextResponse {
  const body = new Uint8Array(bytes);
  const size = body.byteLength;
  const range = parseByteRange(request?.headers.get("range") ?? null, size);

  if (range) {
    const { start, end } = range;
    const chunk = body.subarray(start, end + 1);
    return new NextResponse(chunk, {
      status: 206,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(chunk.byteLength),
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, no-store",
      },
    });
  }

  return new NextResponse(body, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
    },
  });
}
