"use client";

import Image from "next/image";
import { PlayIcon, TitlePlayIcon } from "./icons";

export function TrackCard({
  title,
  number,
  name,
  image,
  index,
  delayMs,
  reserved,
  onPlay,
}: {
  title: string;
  number: number;
  name: string;
  image: string;
  index: number;
  delayMs: number;
  reserved?: boolean;
  onPlay: (origin: DOMRect) => void;
}) {
  return (
    <button
      type="button"
      aria-label={title}
      className={`home-fade-track group flex w-full flex-col items-start gap-2.5 text-left lg:w-[337px] ${
        index % 2 === 1 ? "lg:pt-[293px]" : "lg:pb-[293px]"
      }`}
      style={{ animationDelay: `${delayMs}ms` }}
      onClick={(event) => {
        const thumb = event.currentTarget.querySelector("[data-thumb]");
        onPlay((thumb ?? event.currentTarget).getBoundingClientRect());
      }}
    >
      <span className="flex w-full items-baseline gap-2 pr-1 text-ink">
        <span className="type-label shrink-0 text-ink-muted">No. {number}</span>
        <span className="type-title min-w-0 flex-1">{name}</span>
        <TitlePlayIcon className="hidden size-4 shrink-0 self-center lg:block lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100" />
      </span>
      <span
        data-thumb
        className="relative aspect-[337/225] w-full overflow-hidden bg-thumb lg:aspect-auto lg:h-[190px]"
      >
        {reserved ? (
          <span className="block size-full bg-thumb" />
        ) : (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 337px, 100vw"
              className="warm-mono object-cover transition-[filter] duration-300 lg:group-hover:[filter:grayscale(0)_sepia(0)] lg:group-focus-visible:[filter:grayscale(0)_sepia(0)]"
            />
            <span className="absolute inset-0 flex items-center justify-center lg:hidden">
              <PlayIcon />
            </span>
          </>
        )}
      </span>
    </button>
  );
}
