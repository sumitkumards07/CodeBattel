import type { Metadata } from "next";
import { Inter, Silkscreen, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-terminal",
  weight: "400",
  subsets: ["latin"],
});

import { VT323, Press_Start_2P } from "next/font/google";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeBattle: Strategic Code Warfare",
  description: "Master the craft of code through tactical challenges.",
};

import Navigation from "@/components/landing/Navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${silkscreen.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} ${vt323.variable} ${pressStart2P.variable} antialiased bg-background-dark text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
