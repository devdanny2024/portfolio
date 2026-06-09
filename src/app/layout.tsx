import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olukayode Soliu — Full Stack Engineer",
  description:
    "DevDanny · Full Stack Engineer specializing in AI, fintech, streaming platforms, and scalable web architecture. Based in Nigeria.",
  keywords: [
    "Full Stack Engineer",
    "DevDanny",
    "Olukayode Soliu",
    "React",
    "Next.js",
    "AI",
    "Flutter",
    "TypeScript",
    "Nigeria",
  ],
  authors: [{ name: "Olukayode Soliu", url: "https://github.com/devdanny2024" }],
  openGraph: {
    title: "Olukayode Soliu — Full Stack Engineer",
    description:
      "DevDanny · Full Stack Engineer — Wanzami, Ally AI, CreditPath, UK2ME and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olukayode Soliu — Full Stack Engineer",
    description: "DevDanny · Full Stack Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
