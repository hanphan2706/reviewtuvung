import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";

/** GET: client biết có thể dùng Whisper hay chỉ nhận giọng trình duyệt. */
export async function GET() {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  return NextResponse.json({
    configured: Boolean(process.env.OPENAI_API_KEY?.trim()),
  });
}

/** POST multipart `file`: gửi OpenAI Whisper (tiếng Anh active learning). */
export async function POST(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) {
    return NextResponse.json({ error: "Transcription chưa cấu hình." }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const upstream = new FormData();
  upstream.append("file", file, "audio.webm");
  upstream.append("model", "whisper-1");
  upstream.append("language", "en");

  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: upstream,
  });

  if (!res.ok) {
    const err = await res.text();
    console.warn("[transcribe]", res.status, err.slice(0, 200));
    return NextResponse.json({ error: "Không chuyển được giọng nói." }, { status: 502 });
  }

  const data = (await res.json()) as { text?: string };
  const text = typeof data.text === "string" ? data.text.trim() : "";
  return NextResponse.json({ text });
}
