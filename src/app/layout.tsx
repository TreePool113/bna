import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { Links } from "@/components/navlinks";
import Script from "next/script";
import Footer from "@/components/footer";
import SessionProviderWrapper from "@/components/sessionProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Học viện Phát triển & Đào tạo Bóng rổ Bennu - BNU",
  description: "BNU - Học viện Phát triển & Đào tạo Bóng rổ Bennu",
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
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          strategy="afterInteractive"
        ></Script>
      </body>
    </html>
  );
}
