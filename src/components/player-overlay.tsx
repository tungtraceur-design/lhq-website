"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/lib/locale";
import { ChevronRight } from "./icons";

export type PlayerOrigin = { top: number; left: number; width: number; height: number };
export type PlayerGrow = "origin" | "center";

export function PlayerOverlay({
  title,
  image,
  origin,
  growFrom = "origin",
  onClose,
}: {
  title: string;
  image: string;
  origin?: PlayerOrigin;
  growFrom?: PlayerGrow;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const fromCenter = growFrom === "center";
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fromCenter) {
      const hold = window.setTimeout(
        () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setExpanded(true));
          });
        },
        reduce ? 0 : 1000,
      );
      return () => window.clearTimeout(hold);
    }
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [fromCenter]);

  const shrink = useCallback(() => {
    setExpanded(false);
    window.setTimeout(onClose, fromCenter ? 100 : 480);
  }, [fromCenter, onClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") shrink();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shrink]);

  const box = fromCenter
    ? undefined
    : expanded
      ? { top: 0, left: 0, width: "100vw", height: "100dvh" }
      : origin
        ? {
            top: origin.top,
            left: origin.left,
            width: origin.width,
            height: origin.height,
          }
        : { top: 0, left: 0, width: "100vw", height: "100dvh" };

  return (
    <div className={fromCenter && !expanded ? "pointer-events-none fixed inset-0 z-50" : "fixed inset-0 z-50"}>
      {fromCenter && !expanded ? null : (
        <button
          type="button"
          className="absolute inset-0 cursor-default"
          aria-label={fromCenter ? undefined : t.closePlayer}
          aria-hidden={fromCenter ? true : undefined}
          tabIndex={fromCenter ? -1 : undefined}
          onClick={shrink}
        />
      )}
      <div
        className={
          fromCenter
            ? `pointer-events-none fixed overflow-hidden bg-black transition-[top,left,width,height,transform] duration-100 ease-in-out ${
                expanded
                  ? "top-0 left-0 h-dvh w-screen [transform:none]"
                  : "top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2"
              }`
            : "player-morph pointer-events-none fixed overflow-hidden bg-black"
        }
        data-player={fromCenter ? "center" : "flip"}
        style={box}
      >
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
      </div>
      {fromCenter && expanded ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[72px] items-center justify-end bg-gradient-to-b from-[rgba(8,9,13,0.9)] to-transparent px-10">
          <button
            type="button"
            className="type-label pointer-events-auto flex items-center gap-2 p-6 text-white"
            onClick={shrink}
          >
            {t.skipVideo}
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
