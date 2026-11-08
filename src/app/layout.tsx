import type { Metadata } from "next";
import localFont from "next/font/local";
import { LocaleProvider } from "@/lib/locale";
import "./globals.css";

// Displaay trial files: replace with licensed WOFF2s (same file names) before deploying.
const recklessS = localFont({
  src: [
    { path: "./fonts/reckless/reckless-s-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/reckless/reckless-s-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/reckless/reckless-s-medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/reckless/reckless-s-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-reckless-s",
  adjustFontFallback: "Times New Roman",
});

const recklessM = localFont({
  src: [
    { path: "./fonts/reckless/reckless-m-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/reckless/reckless-m-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-reckless-m",
  adjustFontFallback: "Times New Roman",
});

const recklessWide = localFont({
  src: "./fonts/reckless/reckless-wide-xl-bold.woff2",
  weight: "700",
  variable: "--font-reckless-wide",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  title: "Lưu Hồng Quang",
  description:
    "Official website of pianist Lưu Hồng Quang — works, events, biography, and news.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${recklessS.variable} ${recklessM.variable} ${recklessWide.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
