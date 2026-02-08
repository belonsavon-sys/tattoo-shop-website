import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Contact
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          Questions, walk-in availability, or booking help — reach out and we’ll respond as soon as possible.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="border-zinc-800 bg-black lg:col-span-2">
          <CardContent className="p-6 space-y-4">
            <div className="aspect-[16/9] w-full rounded-2xl border border-zinc-800 bg-zinc-950" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="text-sm font-semibold text-zinc-100">Address</div>
                <div className="mt-2 text-sm text-zinc-300">
                  123 Main St
                  <br />
                  Your City, ST 00000
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="text-sm font-semibold text-zinc-100">Hours</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Mon–Fri: 12pm–7pm
                  <br />
                  Sat: 12pm–6pm
                  <br />
                  Sun: Closed
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="text-sm font-semibold text-zinc-100">Phone</div>
                <div className="mt-2 text-sm text-zinc-300">(555) 555-5555</div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="text-sm font-semibold text-zinc-100">Email</div>
                <div className="mt-2 text-sm text-zinc-300">shop@email.com</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/booking">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Request Booking
                </Button>
              </a>

              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  Instagram
                </Button>
              </a>

              <a href="https://tiktok.com/" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  TikTok
                </Button>
              </a>
            </div>

            <p className="text-xs text-zinc-500">
              Next step: embed Google Maps + add clickable phone/email links.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-black">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-zinc-100">Quick notes</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Walk-ins are limited and depend on availability.</li>
              <li>• For custom pieces, bring 2–3 references if possible.</li>
              <li>• Deposits are required to confirm appointments.</li>
              <li>• Please arrive on time.</li>
            </ul>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-300">
                If you’re unsure about size or placement, submit a booking request and we’ll guide you.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
