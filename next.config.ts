import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
  turbopack: {
    root: process.cwd(),
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
    ],
  },
};

export default nextConfig;
