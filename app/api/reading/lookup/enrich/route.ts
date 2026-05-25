import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { enrichWordLookup } from "@/lib/reading/lookup-service";
import { parseReadingSelection } from "@/lib/reading/parse-selection";

export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  let body: { q?: string };
  try {
    body = (await req.json()) as { q?: string };
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const raw = typeof body.q === "string" ? body.q : "";
  const parsed = parseReadingSelection(raw);
  if (!parsed || parsed.mode !== "word") {
    return NextResponse.json({ paraphrases: [] });
  }

  const paraphrases = await enrichWordLookup(parsed.query);
  return NextResponse.json({ paraphrases });
}
