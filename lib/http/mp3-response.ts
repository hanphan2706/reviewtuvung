import { createReadStream, statSync } from "node:fs";
import { Readable } from "node:stream";
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

function audioResponseHeaders(
  contentType: string,
  size: number,
  chunkSize?: number,
  range?: { start: number; end: number },
): Record<string, string> {
  if (range && chunkSize !== undefined) {
    return {
      "Content-Type": contentType,
      "Content-Length": String(chunkSize),
      "Content-Range": `bytes ${range.start}-${range.end}/${size}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
    };
  }
  return {
    "Content-Type": contentType,
    "Content-Length": String(size),
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, no-store",
  };
}

/** Audio bytes (MP3/WAV) → NextResponse with private cache. */
export function audioBytesNextResponse(
  bytes: Buffer,
  contentType: "audio/mpeg" | "audio/wav",
  request?: Request,
): NextResponse {
  const body = new Uint8Array(bytes);
  const size = body.byteLength;
  const range = parseByteRange(request?.headers.get("range") ?? null, size);

  if (range) {
    const { start, end } = range;
    const chunk = body.subarray(start, end + 1);
    return new NextResponse(chunk, {
      status: 206,
      headers: audioResponseHeaders(contentType, size, chunk.byteLength, range),
    });
  }

  return new NextResponse(body, {
    headers: audioResponseHeaders(contentType, size),
  });
}

/** Stream audio file from disk. */
export function audioFileNextResponse(
  filePath: string,
  contentType: "audio/mpeg" | "audio/wav",
  request?: Request,
): NextResponse {
  const size = statSync(filePath).size;
  const range = parseByteRange(request?.headers.get("range") ?? null, size);

  if (range) {
    const { start, end } = range;
    const stream = createReadStream(filePath, { start, end });
    return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
      status: 206,
      headers: audioResponseHeaders(contentType, size, end - start + 1, range),
    });
  }

  const stream = createReadStream(filePath);
  return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
    headers: audioResponseHeaders(contentType, size),
  });
}

/** MP3 bytes → NextResponse (Uint8Array body — tránh lỗi TS Buffer vs BodyInit trên Vercel). */
export function mp3NextResponse(bytes: Buffer, request?: Request): NextResponse {
  return audioBytesNextResponse(bytes, "audio/mpeg", request);
}

/** Stream MP3 from disk — avoids loading large files entirely into memory. */
export function mp3FileNextResponse(filePath: string, request?: Request): NextResponse {
  return audioFileNextResponse(filePath, "audio/mpeg", request);
}
