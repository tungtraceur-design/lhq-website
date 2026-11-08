"use client";

import { useLocale } from "@/lib/locale";

export const ARTIST_POSTER = "/images/artist-home.png";

export function MeetArtist({
  delayMs,
  playing,
  onPlay,
}: {
  delayMs: number;
  playing?: boolean;
  onPlay: () => void;
}) {
  const { t } = useLocale();

  return (
    <button
      type="button"
      data-playing={playing ? "true" : undefined}
      className="home-fade-track group flex w-full flex-col items-start gap-1.5 overflow-visible pb-12 text-left lg:mt-[276px] lg:ml-10 lg:w-max lg:self-start lg:pb-0"
      style={{ animationDelay: `${delayMs}ms` }}
      aria-label={`${t.meet} Lưu Hồng Quang`}
      onClick={onPlay}
    >
      <span className="m-0 font-title text-[22px] italic leading-[1.25] text-ink-muted lg:text-[28px] lg:leading-[35px]">
        {t.meet}
      </span>
      <span className="relative block w-max overflow-visible pb-[0.2em] font-name text-[56px] font-bold leading-[1.05] tracking-[1px] text-ink lg:text-[88px]">
        <span className="block whitespace-nowrap">Lưu Hồng</span>
        <span className="block whitespace-nowrap">Quang</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 text-ink-muted [clip-path:inset(0_0_0_0)] transition-[clip-path] duration-1000 ease-out group-hover:[clip-path:inset(0_0_0_calc(100%-11px))] group-focus-visible:[clip-path:inset(0_0_0_calc(100%-11px))] group-data-[playing=true]:[clip-path:inset(0_0_0_calc(100%-11px))]"
        >
          <span className="block whitespace-nowrap">Lưu Hồng</span>
          <span className="block whitespace-nowrap">Quang</span>
        </span>
      </span>
    </button>
  );
}
