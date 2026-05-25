import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { loadReadingPassages } from "@/lib/reading/load-reading-raw";
import { READING_RAW_FILES } from "@/lib/reading/raw-manifest";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const isPublicPractice = url.searchParams.get("public") === "1";

  if (!isPublicPractice) {
    const auth = await requireApiUser();
    if (auth.response) return auth.response;
  }

  const id = url.searchParams.get("id");
  if (!id || !READING_RAW_FILES[id as ReadingPilotId]) {
    return NextResponse.json({ error: "unknown id" }, { status: 400 });
  }

  const passageOnly = Number.parseInt(url.searchParams.get("passage") ?? "", 10);
  const all = await loadReadingPassages(id as ReadingPilotId);
  if (!all.length) {
    return NextResponse.json({ id, passages: [], missing: true });
  }

  const passages =
    !Number.isNaN(passageOnly) && passageOnly > 0
      ? all.filter((p) => p.passage === passageOnly)
      : all;

  return NextResponse.json({ id, passages });
}
