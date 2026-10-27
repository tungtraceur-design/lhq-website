import type { Metadata } from "next";
import { Fraunces, Open_Sans } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-open-sans",
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
      className={`${fraunces.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sansita+One&display=swap"
        />
      </head>
      <body className="min-h-full bg-paper font-body text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
