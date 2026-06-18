import { createReadStream, statSync } from "node:fs";
import { extname } from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

const MIME_BY_EXT: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export function imageContentTypeForPath(filePath: string): string {
  return MIME_BY_EXT[extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

/** Stream image from disk with private cache (exam assets — login-gated API). */
export function imageFileNextResponse(filePath: string): NextResponse {
  const size = statSync(filePath).size;
  const stream = createReadStream(filePath);
  return new NextResponse(Readable.toWeb(stream) as ReadableStream, {
    headers: {
      "Content-Type": imageContentTypeForPath(filePath),
      "Content-Length": String(size),
      "Cache-Control": "private, max-age=3600",
    },
  });
}
