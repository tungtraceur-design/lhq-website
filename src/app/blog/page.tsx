"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageTitle } from "@/components/media";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import { articles } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function BlogPage() {
  const { t } = useLocale();
  const hero = articles[0];

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-[52px] px-4 pb-[120px] pt-10 lg:px-0">
        <PageTitle>{t.news}</PageTitle>
        <Link href={`/blog/${hero.slug}`} className="relative flex h-[416px] w-full items-end p-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#323232]" />
          <div className="relative z-10 flex w-full items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-[36px] leading-[1.15] tracking-[-0.01em] text-white">{hero.title}</h2>
              <p className="type-label mt-3 text-[#d1d5db]">{hero.date}</p>
            </div>
            <div className="flex gap-2">
              <span className="flex size-10 items-center justify-center bg-white text-ink">
                <ChevronLeft />
              </span>
              <span className="flex size-10 items-center justify-center bg-white text-ink">
                <ChevronRight />
              </span>
            </div>
          </div>
        </Link>
        <div className="grid w-full grid-cols-1 gap-x-[66px] gap-y-10 sm:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.thumb} alt="" className="aspect-[337/225] w-full object-cover" />
              <p className="type-title">{article.title}</p>
              <p className="type-label text-ink-muted">{article.date}</p>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
