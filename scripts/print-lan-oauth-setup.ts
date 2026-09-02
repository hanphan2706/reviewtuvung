/**
 * In URL OAuth cần thêm trên Supabase để đăng nhập qua LAN (iPad / điện thoại cùng Wi‑Fi).
 * Chạy: npm run lan:oauth-setup
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const PORT = Number(process.env.PORT ?? 3000) || 3000;

function readSiteUrlFromEnvLocal(): string | undefined {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return undefined;
  const text = fs.readFileSync(envPath, "utf8");
  const match = text.match(/^\s*NEXT_PUBLIC_SITE_URL\s*=\s*(.+)\s*$/m);
  if (!match) return undefined;
  return match[1]?.trim().replace(/^["']|["']$/g, "");
}

function lanIpv4Addresses(): string[] {
  const nets = os.networkInterfaces();
  const ips = new Set<string>();
  for (const entries of Object.values(nets)) {
    if (!entries) continue;
    for (const net of entries) {
      if (net.family !== "IPv4" || net.internal) continue;
      const addr = net.address;
      if (
        addr.startsWith("192.168.") ||
        addr.startsWith("10.") ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(addr)
      ) {
        ips.add(addr);
      }
    }
  }
  return [...ips].sort();
}

function callbackUrl(host: string): string {
  return `http://${host}:${PORT}/auth/callback`;
}

const siteUrlEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim() || readSiteUrlFromEnvLocal();
const ips = lanIpv4Addresses();

console.log("\n=== Đăng nhập OAuth trên LAN (Supabase) ===\n");

if (siteUrlEnv) {
  console.log(
    `NEXT_PUBLIC_SITE_URL hiện tại: ${siteUrlEnv}`,
  );
  console.log(
    "→ Khi mở app bằng IP LAN (192.168.x.x), app vẫn gửi redirect về IP đó (không dùng ngrok).",
  );
  console.log(
    "→ Nếu vẫn bị về production: thiếu Redirect URL LAN trên Supabase (bước dưới).\n",
  );
} else {
  console.log("NEXT_PUBLIC_SITE_URL: (chưa đặt) — ổn cho LAN thuần.\n");
}

console.log("Bạn cần tự thêm URL trên Supabase (mình không truy cập được dashboard):\n");
console.log("  Supabase → Project → Authentication → URL Configuration → Redirect URLs\n");
console.log("  Thêm từng dòng (Copy & paste):\n");

const urls = new Set<string>([
  callbackUrl("localhost"),
  callbackUrl("127.0.0.1"),
  ...ips.map((ip) => callbackUrl(ip)),
]);

for (const url of urls) {
  console.log(`    ${url}`);
}

if (ips.length === 0) {
  console.log("\n  ⚠ Không thấy IP LAN — đang dùng Wi‑Fi? Chạy lại sau khi kết nối mạng.");
} else {
  console.log("\n  Trên iPad / điện thoại, mở (cùng Wi‑Fi với máy dev):");
  for (const ip of ips) {
    console.log(`    http://${ip}:${PORT}/tu-hoc/luyen-doc`);
  }
}

console.log("\n  Tuỳ chọn — wildcard (đỡ đổi IP mỗi lần), nếu Supabase chấp nhận:");
console.log(`    http://192.168.*.*:${PORT}/auth/callback`);
console.log(`    http://10.*.*.*:${PORT}/auth/callback`);

console.log("\n  Site URL trên Supabase: giữ production (https://…vercel.app).");
console.log("  Đừng đổi Site URL sang IP LAN — chỉ thêm Redirect URLs ở trên.\n");

console.log("Đăng nhập trên LAN (không cần Supabase OAuth):");
console.log("  Khi chạy `npm run dev` / `npm run dev:lan` (NODE_ENV=development) và mở bằng");
console.log("  localhost hoặc IP 192.168.x.x, app tự coi như đã đăng nhập (deck/từ lưu local).");
console.log("  Production trên Vercel vẫn bắt buộc đăng nhập — không bị ghi đè khi push.\n");

console.log("Nếu vẫn muốn OAuth thật trên LAN:");
console.log(`  1. npm run dev:lan`);
console.log(`  2. Mở http://<IP>:${PORT} trên thiết bị test`);
console.log("  3. Thêm Redirect URLs ở trên rồi đăng nhập Google.\n");
