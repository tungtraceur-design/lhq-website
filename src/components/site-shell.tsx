"use client";

import { useState } from "react";
import { Header } from "./header";
import { MenuOverlay } from "./menu-overlay";

export function SiteShell({
  children,
  lockHeight = false,
  chromeState = "visible",
  assemble = false,
}: {
  children: React.ReactNode;
  lockHeight?: boolean;
  chromeState?: "hidden" | "visible";
  assemble?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`site-columns relative min-h-dvh bg-paper text-ink ${
        lockHeight ? "flex h-dvh flex-col overflow-hidden" : ""
      } ${assemble ? "home-enter" : ""}`}
    >
      <div
        className={
          chromeState === "hidden"
            ? "home-chrome-hidden"
            : assemble
              ? "home-fade"
              : ""
        }
        style={assemble ? { animationDelay: "80ms" } : undefined}
      >
        <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
      </div>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={`${menuOpen ? "invisible" : ""} ${lockHeight ? "flex min-h-0 flex-1 flex-col" : ""}`}>
        {children}
      </div>
    </div>
  );
}
