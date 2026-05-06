import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { LandingSectionLink } from "@/components/landing-section-link";
import { getCoursePageBodyHtml, isValidCourseNotionSlug } from "@/lib/course-notion-document";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: string }[] {
  return LANDING.courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = LANDING.courses.find((x) => x.slug === slug);
  if (!c) {
    return { title: "Khoá học" };
  }
  return {
    title: `${c.title} | ${LANDING.brand}`,
    description: c.summary,
  };
}

export default async function KhoaHocNotionPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isValidCourseNotionSlug(slug)) {
    notFound();
  }
  const c = LANDING.courses.find((x) => x.slug === slug);
  if (!c) {
    notFound();
  }
  const bodyHtml = getCoursePageBodyHtml(slug);

  return (
    <div className="min-h-dvh text-ink">
      <div className="mx-auto w-full max-w-3xl px-5 py-5 sm:px-7 sm:py-6 md:px-10 md:py-8">
        <nav className="mb-6" aria-label="Breadcrumb">
          <LandingSectionLink
            sectionId="khoa-hoc"
            className="text-sm font-medium text-[#4b2876] underline decoration-[#4b2876]/30 underline-offset-2 transition hover:decoration-[#4b2876]/60"
          >
            ← Các khoá học nổi bật
          </LandingSectionLink>
        </nav>
        <article
          className="rounded-lg border border-zinc-200/90 bg-white p-4 shadow-sm ring-1 ring-zinc-950/5 sm:p-6 md:p-8"
        >
          <h1 className="mb-6 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-3xl">
            {c.title}
          </h1>
          <div
            className="course-page"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </article>
      </div>
    </div>
  );
}
