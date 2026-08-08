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
      "./listening materials/Audio cam/**",
      "./listening materials/Audio cam 13/**",
      "./listening materials/Audio cam 14/**",
      "./listening materials/Audio cam 15/**",
      "./listening materials/Audio cam 16/**",
      "./listening materials/Audio cam 18/**",
      "./listening materials/Audio cam 20/**",
      "./listening materials/Audio real test/**",
      "./listening materials/Audio tactics-basic/**",
      "./listening materials/Audio basic-ielts-listening/**",
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
      "./listening materials/cam 18 test * qna.txt",
      "./listening materials/cam 20 test * qna.txt",
      "./listening materials/cam 21 test * qna.txt",
      "./listening materials/cam 17 test * qna.txt",
      "./listening materials/cam 16 test * qna.txt",
      "./listening materials/cam 15 test * qna.txt",
      "./listening materials/cam 14 test * qna.txt",
      "./listening materials/cam 13 test * qna.txt",
      "./listening materials/cam * test * part * map.jpg",
      "./listening materials/cam * test * part * map.jpeg",
      "./listening materials/cam * test * part * map.png",
      "./listening materials/cam * test * part * map.webp",
      "./listening materials/transcript/cam21-test*.txt",
      "./listening materials/transcript/cam20-test*.txt",
      "./listening materials/transcript/cam19-test*.txt",
      "./listening materials/transcript/cam18-test*.txt",
      "./listening materials/transcript/cam17-test*.txt",
      "./listening materials/transcript/cam16-test*.txt",
      "./listening materials/transcript/cam15-test*.txt",
      "./listening materials/transcript/cam14-test*.txt",
      "./listening materials/transcript/cam13-test*.txt",
      "./listening materials/transcript/tactics-basic-*.txt",
      "./listening materials/transcript/basic-ielts-*.txt",
      "./listening materials/sync/cam21-*.sync.json",
      "./listening materials/sync/cam20-*.sync.json",
      "./listening materials/sync/cam18-*.sync.json",
      "./listening materials/sync/cam19-*.sync.json",
      "./listening materials/sync/cam17-*.sync.json",
      "./listening materials/sync/cam16-*.sync.json",
      "./listening materials/sync/cam15-*.sync.json",
      "./listening materials/sync/cam14-*.sync.json",
      "./listening materials/sync/cam13-*.sync.json",
      "./listening materials/sync/tactics-basic-*.sync.json",
      "./listening materials/sync/basic-ielts-*.sync.json",
      "./public/midterm-reading-exam.html",
      "./public/midterm-listening-exam.html",
      "./reading raw/real test 1.txt",
      "./reading raw/de-thi-that-1.txt",
      "./listening materials/real test 1 qna.txt",
      "./listening materials/real test 1 answers.txt",
      "./listening materials/transcript/real-test-1.txt",
      "./listening materials/transcript/real-test-1.cleaned.txt",
      "./listening materials/sync/real-test-1.sync.json",
      "./reading explanations/de-thi-that-1.json",
      "./reading translations/de-thi-that-1-p1.vi.json",
      "./reading translations/de-thi-that-1-p2.vi.json",
      "./reading translations/de-thi-that-1-p3.vi.json",
      "./listening materials/pinball entry test qna.txt",
      "./listening materials/transcript/pinball-entry-part*.txt",
      "./listening materials/sync/pinball-entry-p*.sync.json",
      "./reading raw/pinball-entry.txt",
    ],
  },
  /**
   * Dev: Turbopack/HMR khi mở site qua IP LAN. Wildcard theo cùng quy tắc như docs Next (`*.example.com`);
   * `192.168.*.*` khớp mọi host `192.168.x.y` — không cần sửa khi DHCP đổi octet cuối.
   */
  allowedDevOrigins: ["192.168.*.*", "*.ngrok-free.dev"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/listening-assets/:path*.mp3",
          destination: "/api/media/blocked",
        },
        {
          source: "/listening-assets/:path*.wav",
          destination: "/api/media/blocked",
        },
      ],
    };
  },
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
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
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
        hostname: "encrypted-tbn1.gstatic.com",
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
