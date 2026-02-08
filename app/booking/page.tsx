"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = {
  name: string;
  email: string;
  phone: string;
  placement: string;
  size: string;
  style: string;
  budget: string;
  description: string;
  timeframe: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  placement: "",
  size: "",
  style: "",
  budget: "",
  description: "",
  timeframe: "",
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function BookingPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!isValidEmail(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Phone is required.";
    if (!form.placement.trim()) return "Placement is required.";
    if (!form.size.trim()) return "Size is required.";
    if (!form.style.trim()) return "Style is required.";
    if (!form.budget.trim()) return "Budget is required.";
    if (!form.description.trim() || form.description.trim().length < 20)
      return "Description is required (at least 20 characters).";
    return "";
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    // No backend yet — this is the “polished UI” version.
    // Next step: POST to /api/booking and save to Airtable + email.
    setSubmitted(true);
  }

  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Booking Request
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          Tell us what you want, where you want it, and the approximate size. The more detail you give,
          the faster we can quote and schedule.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="border-zinc-800 bg-black lg:col-span-2">
          <CardContent className="p-6">
            {submitted ? (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-zinc-100">
                  Request received ✅
                </h2>
                <p className="text-sm text-zinc-300">
                  This is currently a demo submission (no backend yet). Next step we’ll connect this
                  to Airtable + email so requests actually deliver.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    className="bg-white text-black hover:bg-zinc-200"
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL);
                      setError("");
                    }}
                  >
                    Submit another request
                  </Button>
                  <a href="/artists">
                    <Button
                      variant="outline"
                      className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                    >
                      Browse Artists
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Jane Doe"
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@email.com"
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(555) 555-5555"
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Ideal timeframe</Label>
                    <Input
                      id="timeframe"
                      value={form.timeframe}
                      onChange={(e) => update("timeframe", e.target.value)}
                      placeholder="Flexible / next month / specific dates"
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="placement">Placement *</Label>
                    <Input
                      id="placement"
                      value={form.placement}
                      onChange={(e) => update("placement", e.target.value)}
                      placeholder="Forearm, upper arm, ribs, etc."
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size">Approx size *</Label>
                    <Input
                      id="size"
                      value={form.size}
                      onChange={(e) => update("size", e.target.value)}
                      placeholder='e.g., "4x6 inches"'
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="style">Style *</Label>
                    <Input
                      id="style"
                      value={form.style}
                      onChange={(e) => update("style", e.target.value)}
                      placeholder="Black & Grey / Fine Line / Traditional..."
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget range *</Label>
                    <Input
                      id="budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      placeholder="$200–$400 / $400–$800 / $800+"
                      className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder="Describe the idea, subject matter, references, placement notes, and anything you want the artist to know."
                    rows={7}
                    className="border-zinc-800 bg-zinc-950 text-zinc-100 placeholder:text-zinc-500"
                  />
                  <p className="text-xs text-zinc-500">
                    Tip: Include reference links, style notes, and whether you want black & grey or color.
                  </p>
                </div>

                {error ? (
                  <div className="rounded-xl border border-red-900/60 bg-red-950/40 p-3 text-sm text-red-200">
                    {error}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-zinc-200"
                  >
                    Submit Request
                  </Button>

                  <a href="/aftercare">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                    >
                      Read Aftercare
                    </Button>
                  </a>
                </div>

                <p className="text-xs text-zinc-500">
                  Next step: we’ll connect this to email + Airtable so submissions are delivered.
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-black">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-zinc-100">
              Deposits & Policies
            </h2>

            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Deposit required to confirm appointments.</li>
              <li>• Deposits go toward final price and cover design time.</li>
              <li>• Reschedules require notice (policy details go here).</li>
              <li>• Late arrivals may reduce session time.</li>
              <li>• Bring valid ID if required.</li>
            </ul>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-300">
                Want to talk first? Visit{" "}
                <a className="underline hover:text-white" href="/contact">
                  contact
                </a>{" "}
                or DM us on social.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
