"use client";

import Link from "next/link";
import { menuItems } from "@/lib/content";
import { useLocale } from "@/lib/locale";

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useLocale();

  if (!open) return null;

  return (
    <div className="menu-enter fixed inset-0 z-20 bg-paper pt-[112px]">
      <nav className="flex w-full flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group relative block border-b border-stroke font-display text-[36px] leading-12 tracking-[-0.01em] text-ink lg:text-[56px] lg:leading-[64px]"
          >
            <span className="mx-auto flex h-[88px] max-w-[1440px] items-center gap-16 px-8 lg:h-auto lg:gap-40 lg:px-20 lg:py-4">
              <span
                className="menu-item-in w-16 shrink-0 text-ink/25 transition-colors duration-300 ease-[cubic-bezier(0.74,0,0.27,0.99)] group-hover:text-ink group-focus-visible:text-ink"
                style={{ animationDelay: `${240 + index * 40}ms` }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="menu-item-in" style={{ animationDelay: `${80 + index * 40}ms` }}>
                {t[item.key]}
              </span>
            </span>
            {/* Starts at the page name: centring offset + horizontal padding + number column + gap. */}
            <span
              aria-hidden
              className="absolute right-0 -bottom-px left-40 h-px origin-right scale-x-0 bg-stroke-strong transition-[scale] duration-300 ease-[cubic-bezier(0.74,0,0.27,0.99)] group-hover:scale-x-100 group-focus-visible:scale-x-100 lg:left-[calc(max(0px,(100%_-_1440px)/2)_+_304px)]"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
