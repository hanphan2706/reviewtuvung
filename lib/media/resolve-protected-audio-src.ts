/** API audio cần cookie auth; HTMLAudioElement không luôn theo redirect — resolve trước khi phát. */
export function isProtectedAudioApiSrc(src: string): boolean {
  return (
    src.includes("/api/reading/audio") ||
    src.includes("/api/listening/audio") ||
    src.includes("/api/media/audio") ||
    src.includes("/lam-bai/audio")
  );
}

export async function resolveProtectedAudioSrc(src: string): Promise<{ src: string; revoke?: () => void }> {
  if (!isProtectedAudioApiSrc(src)) {
    return { src };
  }

  const res = await fetch(src, { credentials: "include", redirect: "follow" });
  if (!res.ok) {
    throw new Error(`audio ${res.status}`);
  }

  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("audio/")) {
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    return { src: objectUrl, revoke: () => URL.revokeObjectURL(objectUrl) };
  }

  if (res.url && res.url !== src && !res.url.includes("/api/")) {
    return { src: res.url };
  }

  return { src };
}
