import "server-only";

import { GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";
import { createR2Client } from "@/lib/r2/client";
import { getR2Config } from "@/lib/r2/config";

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

function audioHeaders(
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

/** Stream private object from R2 — supports Range requests for large MP3. */
export async function streamR2ObjectResponse(
  objectKey: string,
  contentType: "audio/mpeg" | "audio/wav",
  request?: Request,
): Promise<NextResponse | null> {
  const config = getR2Config();
  const client = createR2Client();
  if (!config || !client) return null;

  try {
    const head = await client.send(
      new HeadObjectCommand({
        Bucket: config.bucketName,
        Key: objectKey,
      }),
    );
    const size = Number(head.ContentLength ?? 0);
    if (!Number.isFinite(size) || size <= 0) return null;

    const range = parseByteRange(request?.headers.get("range") ?? null, size);
    const rangeHeader = range ? `bytes=${range.start}-${range.end}` : undefined;

    const object = await client.send(
      new GetObjectCommand({
        Bucket: config.bucketName,
        Key: objectKey,
        Range: rangeHeader,
      }),
    );

    if (!object.Body) return null;

    const nodeStream = object.Body as Readable;
    const webStream = Readable.toWeb(nodeStream) as ReadableStream;

    if (range) {
      const chunkSize = range.end - range.start + 1;
      return new NextResponse(webStream, {
        status: 206,
        headers: audioHeaders(contentType, size, chunkSize, range),
      });
    }

    return new NextResponse(webStream, {
      headers: audioHeaders(contentType, size),
    });
  } catch {
    return null;
  }
}
