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
  title: "Tattoo Shop",
  description: "Dark minimal tattoo shop website with artists, gallery, booking, and aftercare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}>
        <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/60 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <a href="/" className="font-semibold tracking-tight text-zinc-100">
              Tattoo Shop
            </a>

            <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
              <a className="hover:text-white" href="/artists">
                Artists
              </a>
              <a className="hover:text-white" href="/gallery">
                Gallery
              </a>
              <a className="hover:text-white" href="/booking">
                Booking
              </a>
              <a className="hover:text-white" href="/aftercare">
                Aftercare
              </a>
              <a className="hover:text-white" href="/contact">
                Contact
              </a>
            </nav>

            <a
              href="/booking"
              className="rounded-md border border-zinc-700 bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Book
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </body>
    </html>
  );
}
