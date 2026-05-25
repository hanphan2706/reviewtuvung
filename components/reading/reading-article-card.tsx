"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  readingArticleDifficultyLabel,
  readingArticleSourceTopicLabel,
  type ReadingHubArticle,
} from "@/lib/reading/hub-articles";

function LabelCaps({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-white/75" : "text-[#47464b]"
      }`}
    >
      {children}
    </span>
  );
}

function measureTitleLines(el: HTMLElement): number {
  const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 28;
  return Math.min(3, Math.max(1, Math.round(el.scrollHeight / lineHeight)));
}

export function ReadingArticleCard({
  article,
  dark = false,
  wide = false,
  textOnly = false,
  className: classNameProp = "",
  onClick,
  disabled,
}: {
  article: ReadingHubArticle;
  dark?: boolean;
  wide?: boolean;
  /** Hub stitch: ô trên không ảnh — chỉ metadata, tiêu đề, mô tả. */
  textOnly?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const sourceTopic = readingArticleSourceTopicLabel(article);
  const level = readingArticleDifficultyLabel(article);
  const compactGrid = !wide && !dark && !textOnly;
  const adaptiveBodyClamp = compactGrid || dark;

  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleLineCount, setTitleLineCount] = useState(1);

  useLayoutEffect(() => {
    if (!adaptiveBodyClamp || !titleRef.current) return;
    const el = titleRef.current;
    const measure = () => setTitleLineCount(measureTitleLines(el));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [adaptiveBodyClamp, article.title]);

  const subheadlineClamp = textOnly
    ? "line-clamp-3"
    : wide
      ? "line-clamp-2"
      : titleLineCount >= 2
        ? "line-clamp-2"
        : "line-clamp-3";

  const inner = (
    <>
      {dark ? (
        <>
          <Image
            src={article.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" aria-hidden />
        </>
      ) : textOnly ? null : (
        <div
          className={`relative w-full shrink-0 overflow-hidden ${
            wide ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[260px] sm:w-48 md:min-h-[300px] md:w-56" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={article.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes={wide ? "224px" : "(max-width:768px) 100vw, 33vw"}
          />
        </div>
      )}
      <div
        className={`flex min-h-0 flex-col ${
          textOnly ? "h-full min-h-[300px] flex-1 p-6 md:min-h-0 md:p-8" : "p-6 md:p-8"
        } ${dark ? "relative z-10 mt-auto w-full flex-1 justify-end" : "flex-1"} ${
          wide ? "min-w-0 flex-1" : ""
        }`}
      >
        <LabelCaps light={dark}>{sourceTopic}</LabelCaps>
        <h3
          ref={titleRef}
          className={`mt-3 font-serif text-xl font-semibold leading-snug md:text-[22px] ${
            dark ? "text-white" : "text-[#1c1b1c]"
          } ${textOnly || compactGrid || dark ? "line-clamp-3" : ""}`}
        >
          {article.title}
        </h3>
        {article.subheadline ? (
          <p
            className={`mt-3 text-sm leading-relaxed ${
              dark ? `text-white/80 ${subheadlineClamp}` : `text-[#47464b] ${subheadlineClamp}`
            } ${dark || textOnly ? "mb-2" : ""}`}
          >
            {article.subheadline}
          </p>
        ) : textOnly ? (
          <div className="min-h-10 flex-1" aria-hidden />
        ) : null}
        {wide ? <div className="min-h-8 flex-1" aria-hidden /> : null}
        <div
          className={`mt-auto flex shrink-0 items-center justify-between border-t ${
            textOnly || dark || wide ? "pt-6" : compactGrid ? "pt-5" : "pt-4"
          } ${dark ? "border-white/20 text-white/70" : "border-[#f1eded] text-[#47464b]"}`}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider">{level}</span>
          <ArrowRight className={`h-4 w-4 ${dark ? "text-white" : "text-[#1c1b1c]"}`} aria-hidden />
        </div>
      </div>
    </>
  );

  const className = [
    "group relative flex h-full min-h-0 overflow-hidden rounded-lg border text-left transition",
    textOnly ? "min-h-[300px] md:min-h-0" : "",
    wide ? "min-h-[260px] flex-col sm:min-h-[280px] sm:flex-row md:min-h-[300px]" : "flex-col",
    dark ? "border-[#1c1b1c] bg-[#1c1b1c]" : "border-[#E4E4E7] bg-white hover:shadow-md",
    disabled ? "cursor-default opacity-60" : "cursor-pointer",
    classNameProp,
  ]
    .filter(Boolean)
    .join(" ");

  if (onClick && !disabled) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {inner}
      </button>
    );
  }

  return <article className={className}>{inner}</article>;
}
