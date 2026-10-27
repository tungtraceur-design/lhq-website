"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { MonoImage } from "@/components/media";
import { songs } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export default function HomePage() {
  const { t } = useLocale();
  const [activeSong, setActiveSong] = useState<(typeof songs)[number] | null>(null);

  return (
    <SiteShell lockHeight>
      <div className="flex h-[calc(100dvh-88px)] flex-col lg:overflow-hidden">
        <div className="px-4 pt-2 lg:hidden">
          <h1 className="font-display text-[40px] font-bold leading-12 text-ink">
            {t.homeTitle}
            <br />
            {t.homeTitle2}
          </h1>
        </div>

        <div className="hide-scrollbar min-h-0 flex-1 overflow-y-auto lg:overflow-x-auto lg:overflow-y-hidden">
          <div className="flex flex-col gap-6 p-4 pb-24 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-0">
            {songs.map((song, index) => (
              <button
                key={song.id}
                type="button"
                onClick={() => setActiveSong(song)}
                className={`flex w-full flex-col items-start gap-2 text-left lg:w-[337px] ${
                  index % 2 === 1 ? "lg:mt-40" : "lg:mb-40"
                }`}
              >
                <p className="text-base leading-6">{song.title}</p>
                <MonoImage
                  src={song.image}
                  alt={song.title}
                  className="aspect-[337/190] w-full lg:h-[190px] lg:aspect-auto"
                  play
                />
              </button>
            ))}

            <Link
              href="/about"
              className="flex w-full flex-col items-start gap-1 pb-12 lg:w-[448px] lg:self-end lg:pb-24"
            >
              <p className="text-[24px] leading-[1.5] text-ink-soft lg:text-[32px]">{t.meet}</p>
              <p className="font-display text-[76px] font-bold leading-none text-ink lg:text-[100px]">
                Luu Hong
                <br />
                Quang
              </p>
            </Link>
          </div>
        </div>

        <div className="hidden px-12 pb-8 pt-2 lg:block">
          <h1 className="font-display text-[60px] font-bold leading-[72px] text-ink">
            {t.homeTitle}
            <br />
            {t.homeTitle2}
          </h1>
        </div>
      </div>

      {activeSong ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-black text-white">
          <div className="flex items-center justify-between px-6 py-5">
            <p className="font-display text-[28px] font-bold leading-9">{activeSong.title}</p>
            <button type="button" className="text-sm uppercase" onClick={() => setActiveSong(null)}>
              Close
            </button>
          </div>
          <div className="relative flex-1">
            <MonoImage src={activeSong.image} alt={activeSong.title} className="h-full w-full" sizes="100vw" play />
          </div>
          <div className="px-10 py-8">
            <div className="h-0.5 w-full bg-white/30">
              <div className="h-full w-2/5 bg-white" />
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-[22px] text-white/80">{activeSong.description}</p>
          </div>
        </div>
      ) : null}
    </SiteShell>
  );
}
