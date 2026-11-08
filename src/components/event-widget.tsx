"use client";

import Image from "next/image";
import { useState } from "react";
import { masterclasses } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { CalendarIcon, ChevronLeft, ChevronRight, MinusIcon } from "./icons";

const featured = masterclasses[1];

export function EventWidget() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  if (!featured) return null;

  return (
    <div className="relative">
      {open ? (
        <div className="absolute bottom-0 right-0 z-20 w-[min(468px,calc(100vw-32px))] border border-stroke bg-paper shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]">
          <div className="flex items-stretch">
            <div className="border-r border-stroke p-2">
              <div className="relative size-[114px] overflow-hidden bg-[#0b0f12]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="114px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative flex min-w-0 flex-1 flex-col justify-center gap-4 p-2 pr-8">
              <div className="flex min-w-0 flex-col gap-1">
                <p className="type-label truncate text-ink-muted">{t.upcomingEvent}</p>
                <p className="type-title truncate text-ink">{featured.title}</p>
              </div>
              <div className="flex justify-end gap-3">
                <span className="flex size-6 items-center justify-center bg-white">
                  <ChevronLeft className="size-3.5" />
                </span>
                <span className="flex size-6 items-center justify-center bg-white">
                  <ChevronRight className="size-3.5" />
                </span>
              </div>
              <button
                type="button"
                className="absolute top-2 right-2 size-5 text-ink"
                aria-label={t.closePlayer}
                onClick={() => setOpen(false)}
              >
                <MinusIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="flex size-[60px] items-center justify-center border border-stroke bg-paper text-dark shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)]"
          aria-label={t.upcomingEvent}
          onClick={() => setOpen(true)}
        >
          <CalendarIcon className="size-5" />
        </button>
      )}
    </div>
  );
}
