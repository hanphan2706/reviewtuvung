import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { READING_RAW_FILES } from "@/lib/reading/raw-manifest";
import { splitReadingPassages } from "@/lib/reading/split-passages";

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const id = new URL(request.url).searchParams.get("id");
  if (!id || !READING_RAW_FILES[id]) {
    return NextResponse.json({ error: "unknown id" }, { status: 400 });
  }

  const fileName = READING_RAW_FILES[id];
  const filePath = path.join(process.cwd(), "reading raw", fileName);

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const passages = splitReadingPassages(raw);
    return NextResponse.json({ id, raw, passages });
  } catch {
    return NextResponse.json({ id, raw: "", passages: [], missing: true });
  }
}
