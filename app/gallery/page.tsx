"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FILTERS = ["All", "Black & Grey", "Fine Line", "Traditional", "Lettering"] as const;

type Filter = (typeof FILTERS)[number];

type TattooItem = {
  id: string;
  title: string;
  style: Exclude<Filter, "All">;
  artist: string;
};

const ITEMS: TattooItem[] = [
  { id: "1", title: "Blackwork Rose", style: "Black & Grey", artist: "Artist A" },
  { id: "2", title: "Fine Line Butterfly", style: "Fine Line", artist: "Artist B" },
  { id: "3", title: "Traditional Dagger", style: "Traditional", artist: "Artist A" },
  { id: "4", title: "Script Lettering", style: "Lettering", artist: "Artist C" },
  { id: "5", title: "Portrait Study", style: "Black & Grey", artist: "Artist B" },
  { id: "6", title: "Minimal Flower", style: "Fine Line", artist: "Artist A" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(() => {
    return active === "All" ? ITEMS : ITEMS.filter((x) => x.style === active);
  }, [active]);

  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Gallery
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          A selection of fresh work. Next: real images, artist pages, and healed vs fresh filters.
        </p>
      </section>

      <section className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <Button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              variant={isActive ? "default" : "outline"}
              className={
                isActive
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border-zinc-800 text-zinc-200 hover:bg-zinc-950"
              }
            >
              {f}
            </Button>
          );
        })}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <Card key={item.id} className="border-zinc-800 bg-black">
            <CardContent className="p-5">
              <div className="aspect-[4/3] w-full rounded-xl border border-zinc-800 bg-zinc-950" />
              <div className="mt-4">
                <div className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {item.style} • {item.artist}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="text-sm text-zinc-300">
          Want something similar?{" "}
          <a className="underline hover:text-white" href="/booking">
            Request a booking
          </a>{" "}
          and include references.
        </div>
      </section>
    </main>
  );
}
