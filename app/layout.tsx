import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans, Noto_Serif } from "next/font/google";
import { ExternalLinkNewTab } from "@/components/external-link-new-tab";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";
import "./(marketing)/di-hoc/course-content.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "variable",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/** Noto Sans covers IPA glyphs consistently (Geist Mono falls back unevenly). */
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ân thích tự học | Tiếng Anh & IELTS",
  description:
    "Khoá học tiếng Anh tổng quát, Pinball IELTS và coaching — học online; ôn từ vựng SRS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistMono.variable} ${notoSerif.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-[#f5f5f7] font-sans">
        {children}
        <ExternalLinkNewTab />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
