import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Cố định root Turbopack — tránh Next chọn nhầm lockfile ở thư mục cha trên Vercel/local. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  /**
   * MP3/PDF/zip trong repo chỉ dùng local dev — production phát audio qua Supabase Storage.
   * Giữ QnA + transcript + sync JSON (text nhỏ) trong bundle để lam-bai / API transcript chạy trên Vercel.
   */
  outputFileTracingExcludes: {
    "/*": [
      "./listening materials/Audio cam 19/**",
      "./listening materials/Audio tactics-basic/**",
      "./listening materials/*.zip",
      "./listening materials/*.pdf",
      "./listening materials/sync/*.whisper-words.json",
      "./reading raw/**",
      "./public/reading-audio/**",
      "./public/listening-assets/cam19/**",
      "./dictionaries/**",
      "./materials/**",
      "./data/dictionary/**",
    ],
  },
  /**
   * QnA/transcript đọc qua fs + tên file động — Next không tự trace; bắt buộc include trên Vercel.
   */
  outputFileTracingIncludes: {
    "/*": [
      "./listening materials/cam 19 test * qna.txt",
      "./listening materials/transcript/cam19-test*.txt",
    ],
  },
  /**
   * Dev: Turbopack/HMR khi mở site qua IP LAN. Wildcard theo cùng quy tắc như docs Next (`*.example.com`);
   * `192.168.*.*` khớp mọi host `192.168.x.y` — không cần sửa khi DHCP đổi octet cuối.
   */
  allowedDevOrigins: ["192.168.*.*", "*.ngrok-free.dev"],
  async redirects() {
    return [
      {
        source: "/khoa-hoc/coaching-ielts",
        destination: "/di-hoc/coaching",
        permanent: false,
      },
      {
        source: "/khoa-hoc/coaching-general-english",
        destination: "/di-hoc/coaching",
        permanent: false,
      },
      {
        source: "/on-tap",
        destination: "/tu-hoc/tu-vung",
        permanent: true,
      },
      {
        source: "/on-tap/phuong-phap",
        destination: "/tu-hoc/tu-vung/phuong-phap",
        permanent: true,
      },
      {
        source: "/on-tap/tien-do",
        destination: "/tu-hoc/tu-vung/tien-do",
        permanent: true,
      },
      {
        source: "/khoa-hoc/:slug",
        destination: "/di-hoc/:slug",
        permanent: true,
      },
      {
        source: "/di-hoc/coaching-ielts",
        destination: "/di-hoc/coaching",
        permanent: false,
      },
      {
        source: "/di-hoc/coaching-general-english",
        destination: "/di-hoc/coaching",
        permanent: false,
      },
      {
        source: "/tu-hoc/luyen-noi-ai",
        destination: "/tu-hoc/luyen-doc",
        permanent: true,
      },
    ];
  },
  images: {
    /** Cho phép `quality` trên `next/image` cao hơn mặc định (75). */
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eu-assets.simpleview-europe.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prehistoric-britain.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn1.fahasa.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.natgeofe.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
