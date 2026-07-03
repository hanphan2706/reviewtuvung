import { existsSync } from "node:fs";
import path from "node:path";
import { mediaAudioLocalPath } from "@/lib/media/media-audio-storage";

export function resolveMediaAudioFilePath(key: string): string | null {
  const relative = mediaAudioLocalPath(key);
  if (!relative) return null;
  const filePath = path.join(process.cwd(), "public", "listening-assets", relative);
  return existsSync(filePath) ? filePath : null;
}
