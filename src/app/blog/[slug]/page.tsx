"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { ChevronLeft } from "@/components/icons";
import { articles } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLocale();
  const article = articles.find((item) => item.slug === slug) ?? articles[0];
  if (!article) notFound();

  return (
    <SiteShell>
      <main className="pb-20">
        <div className="relative flex items-start justify-center px-4 py-2 lg:px-12">
          <Link
            href="/blog"
            className="absolute left-4 top-2 flex items-center gap-2 py-3 text-base font-medium text-dark lg:left-12"
          >
            <ChevronLeft />
            {t.backToNews}
          </Link>
          <h1 className="max-w-[740px] px-16 text-center font-display text-[32px] font-bold leading-10 lg:text-[40px] lg:leading-[48px]">
            {article.title}
          </h1>
        </div>
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-8 px-4 py-10">
          <p className="text-sm leading-[22px] text-ink/75">{article.date}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.image} alt="" className="aspect-[740/416] w-full object-cover" />
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="w-full text-base leading-6">
              {paragraph}
            </p>
          ))}
          {article.bodyImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={article.bodyImage} alt="" className="aspect-[740/406] w-full object-cover" />
          ) : null}
          {article.more.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="w-full text-base leading-6">
              {paragraph}
            </p>
          ))}
        </div>
        <section className="px-4 py-6">
          <h2 className="mb-10 text-center font-display text-[30px] font-bold leading-[38px]">
            {t.recommended}
          </h2>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-3">
            {articles.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="flex flex-col gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumb} alt="" className="aspect-[337/225] w-full object-cover" />
                <p className="text-base font-medium leading-6">{item.title}</p>
                <p className="text-base leading-6 text-ink-soft">{item.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
