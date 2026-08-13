import { NextResponse } from "next/server";
import { isPublicCambridgeReadingPilot } from "@/lib/auth/protected-routes";
import { requireApiUser } from "@/lib/auth/require-api-user";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { loadReadingPassages } from "@/lib/reading/load-reading-raw";
import { READING_RAW_FILES } from "@/lib/reading/raw-manifest";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const passageRaw = url.searchParams.get("passage");
  const passageOnly = Number.parseInt(passageRaw ?? "", 10);
  const wantsPublic = url.searchParams.get("public") === "1";

  if (!id || !READING_RAW_FILES[id as ReadingPilotId]) {
    return NextResponse.json({ error: "unknown id" }, { status: 400 });
  }
  if (!passageRaw || Number.isNaN(passageOnly) || passageOnly < 1) {
    return NextResponse.json({ error: "passage required" }, { status: 400 });
  }

  const publicAllowed = wantsPublic && isPublicCambridgeReadingPilot(id);
  if (!publicAllowed) {
    const auth = await requireApiUser();
    if (auth.response) return auth.response;
  }

  const all = await loadReadingPassages(id as ReadingPilotId);
  if (!all.length) {
    return NextResponse.json({ id, passages: [], missing: true });
  }

  const passage = all.find((block) => block.passage === passageOnly);
  if (!passage) {
    return NextResponse.json({ error: "passage not found" }, { status: 404 });
  }

  return NextResponse.json({ id, passages: [passage] });
}
