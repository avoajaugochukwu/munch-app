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
  title: "Munch - Food in Perspective, Fitness in Balance",
  description: "Revolutionary calorie-to-exercise converter app. Instantly translate food photos into relatable exercise durations. See your food in minutes, not numbers.",
  keywords: "calorie counter, exercise converter, food tracking, fitness app, health app, calorie to exercise, food photo analysis",
  openGraph: {
    title: "Munch - Food in Perspective, Fitness in Balance",
    description: "See your food in minutes, not numbers. Instantly convert any meal to walking, running, cycling, or 30+ activities.",
    type: "website",
  },
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
