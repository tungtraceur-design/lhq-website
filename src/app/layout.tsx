import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lưu Hồng Quang",
  description:
    "Official website of pianist Lưu Hồng Quang — works, events, biography, and news.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-paper font-body text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
