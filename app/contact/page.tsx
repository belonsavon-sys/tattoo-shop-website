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
          Walk-in availability and booking questions — reach out or submit a booking request.
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
                  307 W Main St
                  <br />
                  Elma, WA
                </div>
                <div className="mt-3">
                  <a
                    className="text-sm underline text-zinc-400 hover:text-white"
                    href="https://www.google.com/maps/search/?api=1&query=307%20W%20Main%20St%2C%20Elma%2C%20WA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="text-sm font-semibold text-zinc-100">Hours</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Open daily: 12pm–7pm
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 md:col-span-2">
                <div className="text-sm font-semibold text-zinc-100">Phone</div>
                <div className="mt-2 text-sm text-zinc-300">
                  <a className="underline hover:text-white" href="tel:3606602460">
                    (360) 660-2460
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/booking">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Request Booking
                </Button>
              </a>

              <a
                href="https://www.instagram.com/ghosttowntattooelma/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  Instagram
                </Button>
              </a>

              <a
                href="https://www.facebook.com/Ghosttowntattooelma/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  Facebook
                </Button>
              </a>
            </div>

            <p className="text-xs text-zinc-500">
              Email: N/A • For appointments, please use the booking request form.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-black">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-zinc-100">Quick notes</h2>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Walk-ins depend on availability.</li>
              <li>• For customs, bring 2–3 references if possible.</li>
              <li>• Deposits are required to confirm appointments.</li>
              <li>• Please arrive on time.</li>
            </ul>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-300">
                Not sure about size or placement? Submit a booking request and we’ll guide you.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
