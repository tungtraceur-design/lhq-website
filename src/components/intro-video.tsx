"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale";
import { ChevronRight } from "./icons";

export function IntroVideo({ poster, onSkip }: { poster: string; onSkip: () => void }) {
  const { t } = useLocale();
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const skipTimer = window.setTimeout(() => setShowSkip(true), 900);
    const endTimer = window.setTimeout(onSkip, 6000);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onSkip();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(endTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [onSkip]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="intro-grow absolute inset-0">
        <Image src={poster} alt="" fill priority className="object-cover" sizes="100vw" />
      </div>
      {showSkip ? (
        <div className="absolute inset-x-0 top-0 flex h-[72px] items-center justify-end bg-gradient-to-b from-[rgba(8,9,13,0.9)] to-transparent px-10">
          <button
            type="button"
            className="type-label flex items-center gap-2 p-6 text-white"
            onClick={onSkip}
          >
            {t.skipVideo}
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
