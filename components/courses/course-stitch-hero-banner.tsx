import Image from "next/image";

type CourseStitchHeroBannerProps = {
  bannerImage: string;
  bannerObjectPosition?: string;
  title: string;
  subtitle: string;
};

export function CourseStitchHeroBanner({
  bannerImage,
  bannerObjectPosition,
  title,
  subtitle,
}: CourseStitchHeroBannerProps) {
  return (
    <header className="pinball-stitch-hero">
      <div className="pinball-stitch-hero-banner">
        <Image
          className="pinball-stitch-hero-banner__img"
          src={bannerImage}
          alt=""
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 1000px"
          style={bannerObjectPosition ? { objectPosition: bannerObjectPosition } : undefined}
        />
        <div className="pinball-stitch-hero-banner__scrim" aria-hidden />
        <div className="pinball-stitch-hero-banner__content">
          <h1 className="pinball-stitch-hero__title">{title}</h1>
          <p className="pinball-stitch-hero__subtitle">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
