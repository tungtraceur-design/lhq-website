"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { LogoMark, MenuToggleIcon } from "./icons";

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const { locale, setLocale } = useLocale();

  return (
    <header className="relative z-30 flex h-[88px] w-full items-center justify-between px-4 lg:px-12">
      <Link
        href="/"
        className={`text-ink transition-opacity duration-100 ease-in-out ${
          menuOpen ? "pointer-events-none opacity-0" : ""
        }`}
        aria-label="Lưu Hồng Quang — home"
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
      >
        <LogoMark />
      </Link>
      <div className="flex items-center gap-10">
        <div className="hidden items-center gap-6 lg:flex">
          <LanguageButton
            label="ENG"
            active={locale === "en"}
            onClick={() => setLocale("en")}
          />
          <LanguageButton
            label="VIE"
            active={locale === "vi"}
            onClick={() => setLocale("vi")}
          />
        </div>
        <button
          type="button"
          className="group flex size-14 items-center justify-center text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <MenuToggleIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}

function LanguageButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`type-label border-b pb-[7px] text-ink ${
        active ? "border-ink" : "border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
