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
  title: {
    default: "SkillSwap",
    template: "%s | SkillSwap",
  },

  description:
    "SkillSwap is a peer-to-peer live learning marketplace where teachers host interactive sessions and students book, learn, and grow together.",

  keywords: [
    "SkillSwap",
    "Learning",
    "Marketplace",
    "Next.js",
    "Video Sessions",
    "Education",
    "Peer Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
