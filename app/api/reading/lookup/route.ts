import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { lookupReadingTerm } from "@/lib/reading/lookup-service";
import { singleWordOrPhrase } from "@/lib/reading/fetch-dictionary";

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
  const query = singleWordOrPhrase(raw);
  if (!query) {
    return NextResponse.json(
      { text: "Chọn một từ hoặc cụm tối đa 4 từ.", source: "" },
      { status: 200 },
    );
  }

  const result = await lookupReadingTerm(query);
  return NextResponse.json(result);
}
