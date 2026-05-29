import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { lookupReadingTerm } from "@/lib/reading/lookup-service";
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
  if (!parsed) {
    return NextResponse.json({
      query: raw.slice(0, 80),
      kind: "phrase",
      error: "Chọn 1–4 từ để tra từ điển, hoặc tối đa 24 từ để dịch.",
      senses: [],
      paraphrases: [],
      source: "",
    });
  }

  try {
    const result = await lookupReadingTerm(parsed.query);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      {
        query: parsed.query,
        kind: parsed.mode === "word" ? "word" : "phrase",
        error: "Máy chủ tra từ tạm thời bận. Thử chọn lại cụm hoặc bấm tra lần nữa.",
        senses: [],
        paraphrases: [],
        source: "",
      },
      { status: 200 },
    );
  }
}
