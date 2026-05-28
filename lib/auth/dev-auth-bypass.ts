/**
 * Bỏ qua đăng nhập khi dev trên localhost / LAN.
 * Chỉ chặn trên Vercel production (VERCEL_ENV=production).
 * Middleware Edge thường báo NODE_ENV=production trong lúc `next dev` — không dùng NODE_ENV.
 */

export function getHostnameFromHostHeader(hostHeader: string | null): string {
  if (!hostHeader) return "";
  return hostHeader.split(":")[0]?.trim().toLowerCase() ?? "";
}

function isPrivateLanIpv4(hostname: string): boolean {
  if (!hostname || hostname === "0.0.0.0") return false;
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  if (hostname.endsWith(".local")) return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
  return /^172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(hostname);
}

function isDevTunnelHost(hostname: string): boolean {
  return (
    hostname.endsWith(".ngrok-free.dev") ||
    hostname.endsWith(".ngrok-free.app") ||
    hostname.endsWith(".ngrok.io") ||
    hostname.endsWith(".ngrok.app")
  );
}

export function isLocalDevHost(hostname: string): boolean {
  return isPrivateLanIpv4(hostname) || isDevTunnelHost(hostname);
}

/** Chỉ deploy production Vercel — không bypass. */
export function isVercelProduction(): boolean {
  return process.env.VERCEL_ENV === "production";
}

/**
 * LAN / localhost / ngrok local: bypass.
 * anthichtuhoc.vercel.app và domain production không khớp → không bypass.
 */
export function isDevAuthBypassForHost(hostname: string): boolean {
  if (isVercelProduction()) return false;
  if (process.env.DISABLE_DEV_AUTH_BYPASS === "1") return false;
  return isLocalDevHost(hostname);
}

/** Host thật từ request (URL hoặc header Host). */
export function resolveRequestHostname(urlHostname: string, hostHeader: string | null): string {
  const fromHost = getHostnameFromHostHeader(hostHeader);
  const fromUrl = urlHostname.trim().toLowerCase();
  if (fromUrl && fromUrl !== "0.0.0.0") return fromUrl;
  return fromHost;
}
