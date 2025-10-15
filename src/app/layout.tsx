import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAPPINGSTONE",
  description: "Made by sol>",
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
      <div>
        <Link href={"/"}> Home </Link> 
        <Link href={"/about"}> About </Link> 
        <Link href={"/contact"}> Contact </Link> 
        <Link href={"/users"}> User </Link> 
      </div>
        {children}

      
      </body>
    </html>
  );
}