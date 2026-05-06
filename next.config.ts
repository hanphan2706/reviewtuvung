import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/khoa-hoc/coaching-ielts",
        destination: "/khoa-hoc/coaching",
        permanent: false,
      },
      {
        source: "/khoa-hoc/coaching-general-english",
        destination: "/khoa-hoc/coaching",
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
