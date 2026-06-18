import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { imageFileNextResponse } from "@/lib/http/image-response";
import { isAllowedListeningMapImageFile } from "@/lib/listening/listening-map-image";
import { resolveListeningMapImagePath } from "@/lib/listening/listening-materials-fs";

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const file = new URL(request.url).searchParams.get("file");
  if (!file || !isAllowedListeningMapImageFile(file)) {
    return NextResponse.json({ error: "invalid or disallowed file" }, { status: 400 });
  }

  const filePath = resolveListeningMapImagePath(file);
  if (!filePath) {
    return NextResponse.json({ error: "image file not found", missing: true }, { status: 404 });
  }

  return imageFileNextResponse(filePath);
}
