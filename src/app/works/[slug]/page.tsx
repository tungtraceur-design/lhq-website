"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { MonoImage } from "@/components/media";
import { ChevronLeft, GridIcon, ListIcon } from "@/components/icons";
import { works } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLocale();
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();

  const tracks = work.tracks.length ? work.tracks : works[0].tracks;

  return (
    <SiteShell>
      <main className="pb-[120px]">
        <div className="relative flex items-start justify-between px-4 py-2 lg:px-12">
          <Link href="/works" className="flex items-center gap-2 py-3 text-base font-medium text-dark">
            <ChevronLeft />
            {t.backToWorks}
          </Link>
          <h1 className="hidden max-w-[740px] text-center font-display text-[40px] font-bold leading-[48px] lg:block">
            {work.title}
          </h1>
          <div className="flex">
            <span className="flex items-center border border-stroke-input bg-white px-[15px] py-2.5 text-dark">
              <GridIcon />
            </span>
            <span className="flex items-center bg-ink px-[15px] py-2.5 text-white">
              <ListIcon />
            </span>
          </div>
        </div>
        <h1 className="px-4 pt-2 text-center font-display text-[32px] font-bold leading-10 lg:hidden">
          {work.title}
        </h1>
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-16 px-4 py-10">
          <p className="text-center text-base leading-6">{work.summary}</p>
          {tracks.map((track) => (
            <article key={track.title} className="grid w-full items-center gap-8 lg:grid-cols-2">
              <MonoImage src={track.image} alt={track.title} className="aspect-[337/190] w-full" />
              <div>
                <h2 className="font-display text-2xl font-bold leading-[30px]">{track.title}</h2>
                <p className="mt-4 text-sm leading-[22px]">{track.description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
