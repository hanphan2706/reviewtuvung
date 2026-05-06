import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { MarketingSubpageShell } from "@/components/marketing-subpage-shell";

const PLACEHOLDER_SLUGS = {
  "luyen-nghe": {
    title: "Luyện nghe",
    description: "Luyện nghe IELTS và nội dung theo chủ đề — đang được cập nhật.",
  },
  "luyen-noi-ai": {
    title: "Luyện nói cùng AI",
    description: "Luyện nói với AI — đang được cập nhật.",
  },
} as const;

type SlugKey = keyof typeof PLACEHOLDER_SLUGS;

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: SlugKey }[] {
  return Object.keys(PLACEHOLDER_SLUGS).map((slug) => ({ slug: slug as SlugKey }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = PLACEHOLDER_SLUGS[slug as SlugKey];
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
  const entry = PLACEHOLDER_SLUGS[slug as SlugKey];
  if (!entry) {
    notFound();
  }

  return (
    <MarketingSubpageShell title={entry.title}>
      <p className="text-[15px] leading-relaxed text-ink-muted">
        Tính năng này đang được cập nhật. Bạn quay lại sau nha — mình sẽ thông báo trên trang chủ khi đã sẵn sàng.
      </p>
      <p className="mt-6">
        <Link
          href="/#tu-hoc"
          className="text-sm font-semibold text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/70"
        >
          ← Về mục Tự học
        </Link>
      </p>
    </MarketingSubpageShell>
  );
}
