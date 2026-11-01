import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cyrillic-capable fallbacks: Geist/Source Serif 4 render Latin glyphs,
// Cyrillic glyphs flow to Inter / PT Serif automatically per-glyph.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Fascia Atlas — Trigger Points & the Anatomy Trains",
  description:
    "Interactive guide to 110 pressure points — 67 myofascial trigger points on the 12 Anatomy Trains meridians plus 43 classical Chinese acupoints: schematic locations, referred-pain maps, and 90-second self-release & activation protocols. Доступен на русском языке.",
  keywords: [
    "trigger points",
    "fascia",
    "Anatomy Trains",
    "myofascial release",
    "referred pain",
    "self-massage",
    "Travell and Simons",
    "триггерные точки",
    "миофасциальный релиз",
    "Анатомические поезда",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${ptSerif.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
