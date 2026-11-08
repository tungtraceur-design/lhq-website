"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { MonoImage, PageTitle } from "@/components/media";
import { works } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function WorksPage() {
  const { t } = useLocale();
  const left = works.filter((_, index) => index % 2 === 0);
  const right = works.filter((_, index) => index % 2 === 1);

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-[52px] px-4 pb-[120px] pt-10 lg:px-0">
        <PageTitle>{t.works}</PageTitle>
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-[66px]">
          <div className="flex flex-col gap-10">
            {left.map((work) => (
              <AlbumCard key={work.slug} {...work} />
            ))}
          </div>
          <div className="flex flex-col gap-10 lg:pt-20">
            {right.map((work) => (
              <AlbumCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

function AlbumCard({
  slug,
  title,
  image,
}: {
  slug: string;
  title: string;
  image: string;
}) {
  return (
    <Link href={`/works/${slug}`} className="flex w-full flex-col gap-2">
      <MonoImage src={image} alt={title} className="aspect-[337/225] w-full" />
      <p className="type-title whitespace-pre-wrap">{title}</p>
    </Link>
  );
}
