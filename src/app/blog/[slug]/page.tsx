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
            className="type-label absolute left-4 top-2 flex items-center gap-2 py-3 text-ink lg:left-12"
          >
            <ChevronLeft />
            {t.backToNews}
          </Link>
          <h1 className="max-w-[740px] px-16 text-center font-display text-[36px] leading-[1.1] tracking-[-0.01em] lg:text-[50px]">
            {article.title}
          </h1>
        </div>
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-8 px-4 py-10">
          <p className="type-label text-ink-muted">{article.date}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.image} alt="" className="aspect-[740/416] w-full object-cover" />
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="w-full text-[17px] leading-[1.65]">
              {paragraph}
            </p>
          ))}
          {article.bodyImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={article.bodyImage} alt="" className="aspect-[740/406] w-full object-cover" />
          ) : null}
          {article.more.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="w-full text-[17px] leading-[1.65]">
              {paragraph}
            </p>
          ))}
        </div>
        <section className="px-4 py-6">
          <h2 className="type-heading mb-10 text-center">
            {t.recommended}
          </h2>
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-3">
            {articles.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="flex flex-col gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumb} alt="" className="aspect-[337/225] w-full object-cover" />
                <p className="type-title">{item.title}</p>
                <p className="type-label text-ink-muted">{item.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
