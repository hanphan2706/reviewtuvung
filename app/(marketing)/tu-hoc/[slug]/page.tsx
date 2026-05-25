import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { LandingSectionLink } from "@/components/landing-section-link";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

type PlaceholderEntry = {
  title: string;
  description: string;
  shellTitle?: string;
};

const PLACEHOLDER_SLUGS: Record<string, PlaceholderEntry> = {
  "luyen-doc": {
    title: "Luyện đọc",
    shellTitle: "Đang cập nhật",
    description: "Luyện đọc — đang được cập nhật trên anthichtuhoc.",
  },
  "luyen-nghe": {
    title: "Luyện nghe",
    description: "Luyện nghe IELTS và nội dung theo chủ đề — đang được cập nhật.",
  },
  "luyen-noi-ai": {
    title: "Luyện nói cùng AI",
    description: "Luyện nói với AI — đang được cập nhật.",
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PLACEHOLDER_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = PLACEHOLDER_SLUGS[slug];
  if (!entry) {
    return { title: `Tự học | ${LANDING.brand}` };
  }
  return {
    title: `${entry.title} | ${LANDING.brand}`,
    description: entry.description,
  };
}

export default async function TuHocPlaceholderPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = PLACEHOLDER_SLUGS[slug];
  if (!entry) {
    notFound();
  }

  const shellTitle = entry.shellTitle ?? entry.title;

  return (
    <MarketingSubpageShell title={shellTitle}>
      {entry.shellTitle ? (
        <p className="text-sm font-semibold text-[#4b2876]">{entry.title}</p>
      ) : null}
      <p className={`text-[15px] leading-relaxed text-ink-muted ${entry.shellTitle ? "mt-3" : ""}`}>
        Tính năng này đang được cập nhật. Bạn quay lại sau nha — mình sẽ thông báo trên trang chủ khi đã sẵn sàng.
      </p>
      <p className="mt-6">
        <LandingSectionLink
          sectionId="tu-hoc"
          className="text-sm font-semibold text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/70"
        >
          ← Về mục Tự học
        </LandingSectionLink>
      </p>
    </MarketingSubpageShell>
  );
}
