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
  title: "Tattoo Shop Website",
  description: "Tattoo shop website with artists, gallery, booking, and aftercare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ padding: 16, borderBottom: "1px solid #222" }}>
          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="/" style={{ fontWeight: 700 }}>Tattoo Shop</a>
            <a href="/artists">Artists</a>
            <a href="/gallery">Gallery</a>
            <a href="/booking">Booking</a>
            <a href="/aftercare">Aftercare</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
