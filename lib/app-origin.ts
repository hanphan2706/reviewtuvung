/**
 * Chuẩn hóa origin cho redirect trình duyệt / OAuth.
 * `0.0.0.0` chỉ là địa chỉ bind (`next dev -H 0.0.0.0`), không mở được trong Chrome.
 */
export function normalizeAppOrigin(input: string): string {
  try {
    const url = new URL(input);
    let { protocol, hostname, port } = url;

    if (hostname === "0.0.0.0") {
      hostname = "localhost";
      if (protocol === "https:") {
        protocol = "http:";
      }
    }

    const host = port ? `${hostname}:${port}` : hostname;
    return `${protocol}//${host}`;
  } catch {
    return input;
  }
}

function isLocalDevHost(hostname: string): boolean {
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  return /^172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(hostname);
}

/**
 * Origin cho OAuth redirect.
 * - Mở app bằng LAN (`192.168.x.x`) hoặc localhost → luôn dùng origin trình duyệt (không ép ngrok từ env).
 * - Production / tunnel: có thể đặt `NEXT_PUBLIC_SITE_URL` trong `.env.local`.
 */
export function resolveOAuthOrigin(browserOrigin: string): string {
  const normalized = normalizeAppOrigin(browserOrigin);
  try {
    const { hostname } = new URL(normalized);
    if (isLocalDevHost(hostname)) return normalized;
  } catch {
    /* fall through */
  }

  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return normalizeAppOrigin(fromEnv);
  return normalized;
}
