import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AftercarePage() {
  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Aftercare
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          Proper aftercare protects your tattoo, reduces irritation, and helps it heal clean.
          If your artist gave specific instructions, follow those first.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="border-zinc-800 bg-black lg:col-span-2">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                First 24–48 hours
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Keep the bandage on for the time your artist recommends.</li>
                <li>• Wash hands before touching the tattoo.</li>
                <li>• Gently wash with mild, fragrance-free soap and lukewarm water.</li>
                <li>• Pat dry with a clean paper towel (don’t rub).</li>
                <li>• Apply a thin layer of recommended aftercare (do not over-moisturize).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                Days 3–14 (healing phase)
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Wash 1–2x/day and moisturize lightly.</li>
                <li>• Expect flaking/peeling — do not pick or scratch.</li>
                <li>• Avoid soaking (baths, pools, hot tubs, ocean).</li>
                <li>• Avoid direct sun exposure on the fresh tattoo.</li>
                <li>• Wear loose clothing to reduce friction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                What to avoid
              </h2>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                  <div className="font-semibold text-zinc-100">Don’t</div>
                  <ul className="mt-2 space-y-1 text-zinc-300">
                    <li>• Pick scabs or peel skin</li>
                    <li>• Over-apply ointment</li>
                    <li>• Use fragranced lotions</li>
                    <li>• Soak in water</li>
                    <li>• Use tanning beds</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300">
                  <div className="font-semibold text-zinc-100">Do</div>
                  <ul className="mt-2 space-y-1 text-zinc-300">
                    <li>• Keep it clean</li>
                    <li>• Moisturize lightly</li>
                    <li>• Wear clean clothes</li>
                    <li>• Sleep on clean sheets</li>
                    <li>• Ask us if unsure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/booking">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Request Booking
                </Button>
              </a>
              <a href="/contact">
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  Contact the Shop
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-black">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-zinc-100">FAQ</h2>

            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <div className="font-semibold text-zinc-100">Is redness normal?</div>
                <div className="mt-1 text-zinc-400">
                  Mild redness and warmth can be normal early on. If it worsens significantly,
                  becomes very painful, or you see unusual discharge, contact a medical professional.
                </div>
              </div>

              <div>
                <div className="font-semibold text-zinc-100">When can I work out?</div>
                <div className="mt-1 text-zinc-400">
                  Avoid heavy sweating and friction over the area during the first few days.
                  If you train, keep it clean and avoid direct contact on the tattoo.
                </div>
              </div>

              <div>
                <div className="font-semibold text-zinc-100">When can it see sun?</div>
                <div className="mt-1 text-zinc-400">
                  Avoid direct sun on fresh tattoos. After healed, use sunscreen to preserve contrast.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-300">
                Healing varies by skin, placement, and care. If anything feels “off,” message us.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
