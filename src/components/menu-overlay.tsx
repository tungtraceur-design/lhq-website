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
    <div className="fixed inset-0 z-20 bg-paper pt-[112px]">
      <nav className="mx-auto flex w-full max-w-[1440px] flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group flex items-center gap-16 border-b border-stroke px-8 py-4 font-display text-[32px] font-semibold leading-12 text-ink lg:gap-40 lg:px-20 lg:text-[48px] lg:leading-[48px]"
          >
            <span className="w-16 text-ink/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="transition-colors group-hover:text-ink-soft">
              {t[item.key]}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
