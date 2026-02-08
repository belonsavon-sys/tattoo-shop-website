import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="space-y-10">
      {/* HERO */}
      <section className="pt-6">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-8 md:p-12">
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Dark • Minimal • Custom
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
            Tattoos designed to fit your body — and age well.
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-300">
            Clean linework, bold black & grey, and custom pieces built around placement.
            Browse portfolios, learn aftercare, and request a booking in minutes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/booking">
              <Button className="bg-white text-black hover:bg-zinc-200">
                Request Booking
              </Button>
            </a>

            <a href="/gallery">
              <Button variant="outline" className="border-zinc-700 text-zinc-100">
                View Gallery
              </Button>
            </a>

            <a href="/aftercare">
              <Button variant="ghost" className="text-zinc-300 hover:text-white">
                Aftercare
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="grid gap-4 md:grid-cols-4">
        {[
          { title: "Walk-ins", desc: "Limited based on artist availability." },
          { title: "Custom Work", desc: "We refine your idea for placement and flow." },
          { title: "Clean & Safe", desc: "Strict sanitation and single-use supplies." },
          { title: "Deposits", desc: "Secure your appointment and design time." },
        ].map((x) => (
          <Card key={x.title} className="border-zinc-800 bg-black">
            <CardContent className="p-5">
              <div className="text-sm font-semibold text-zinc-100">{x.title}</div>
              <div className="mt-2 text-sm text-zinc-400">{x.desc}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* START HERE */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <h2 className="text-lg font-semibold text-zinc-100">Start here</h2>

        <ol className="mt-3 space-y-2 text-sm text-zinc-300">
          <li>
            1) Browse the{" "}
            <a className="underline hover:text-white" href="/gallery">
              gallery
            </a>{" "}
            and pick a style.
          </li>

          <li>
            2) Choose an artist on the{" "}
            <a className="underline hover:text-white" href="/artists">
              artists
            </a>{" "}
            page.
          </li>

          <li>
            3) Submit a request on the{" "}
            <a className="underline hover:text-white" href="/booking">
              booking
            </a>{" "}
            page.
          </li>
        </ol>
      </section>
    </main>
  );
}
