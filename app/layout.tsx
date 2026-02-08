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

        <div className="mx-auto max-w-6xl px-4 py-10 min-h-[calc(100vh-64px)]">
          {children}
        </div>

        <footer className="border-t border-zinc-900 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-zinc-100">Tattoo Shop</div>
                <p className="text-sm text-zinc-400">
                  Dark, minimal, custom work. Built for healed results.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-zinc-100">Quick Links</div>
                <div className="flex flex-col gap-2 text-sm text-zinc-400">
                  <a className="hover:text-white" href="/booking">Booking</a>
                  <a className="hover:text-white" href="/gallery">Gallery</a>
                  <a className="hover:text-white" href="/aftercare">Aftercare</a>
                  <a className="hover:text-white" href="/contact">Contact</a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-zinc-100">Social</div>
                <div className="flex flex-col gap-2 text-sm text-zinc-400">
                  <a className="hover:text-white" href="https://instagram.com/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="hover:text-white" href="https://tiktok.com/" target="_blank" rel="noreferrer">
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Tattoo Shop. All rights reserved.</div>
              <div>
                Built with Next.js • Dark minimal UI
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
