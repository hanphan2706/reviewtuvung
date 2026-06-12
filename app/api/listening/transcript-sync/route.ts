import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import {
  isAllowedListeningSyncPartId,
  readListeningSyncFile,
} from "@/lib/listening/listening-sync-fs";

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const partId = new URL(request.url).searchParams.get("partId")?.trim() ?? "";
  if (!isAllowedListeningSyncPartId(partId)) {
    return NextResponse.json({ error: "invalid partId" }, { status: 400 });
  }

  const sync = readListeningSyncFile(partId);
  if (!sync) {
    return NextResponse.json({ missing: true, partId });
  }

  return NextResponse.json(sync);
}
