import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { listeningTranscriptAllowlist } from "@/lib/listening/content-manifest";
import { sanitizeListeningTranscript } from "@/lib/sanitize-listening-transcript";
import { splitTranscriptByPart } from "@/lib/listening/split-transcript-parts";

const ALLOWED_FILES = listeningTranscriptAllowlist();

export async function GET(request: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");
  const partRaw = searchParams.get("part");

  if (!file || !ALLOWED_FILES.has(file)) {
    return NextResponse.json({ error: "invalid or disallowed file" }, { status: 400 });
  }

  const transcriptPath = path.join(process.cwd(), "transcript", file);

  try {
    const raw = fs.readFileSync(transcriptPath, "utf8");
    const full = sanitizeListeningTranscript(raw);

    if (partRaw !== null && partRaw !== "") {
      const part = Number.parseInt(partRaw, 10);
      if (!Number.isFinite(part) || part < 1 || part > 4) {
        return NextResponse.json({ error: "part must be 1–4" }, { status: 400 });
      }
      const byPart = splitTranscriptByPart(full);
      const text = byPart[part] ?? "";
      return NextResponse.json({ text, part, missing: text.length === 0 });
    }

    return NextResponse.json({ text: full, missing: full.length === 0 });
  } catch {
    return NextResponse.json({ text: "", part: partRaw ? Number.parseInt(partRaw, 10) : null, missing: true });
  }
}
