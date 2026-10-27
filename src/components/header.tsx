"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { CloseIcon, MenuIcon } from "./icons";

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
        className="font-logo text-[40px] leading-[56px] text-ink"
        onClick={() => menuOpen && onToggleMenu()}
      >
        LHQ
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
          className="flex size-14 items-center justify-center text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
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
      className="flex flex-col items-center gap-2 font-display text-2xl font-semibold leading-[30px] text-ink"
    >
      {label}
      <span className={`h-px w-full ${active ? "bg-ink" : "bg-transparent"}`} />
    </button>
  );
}
