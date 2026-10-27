"use client";

import { useState } from "react";
import { Header } from "./header";
import { MenuOverlay } from "./menu-overlay";

export function SiteShell({
  children,
  lockHeight = false,
}: {
  children: React.ReactNode;
  lockHeight?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`site-columns relative min-h-dvh bg-paper text-ink ${
        lockHeight ? "h-dvh overflow-hidden" : ""
      }`}
    >
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={menuOpen ? "invisible" : ""}>{children}</div>
    </div>
  );
}
