import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Artist = {
  slug: string;
  name: string;
  specialties: string[];
  bio: string;
  instagram?: string;
};

const ARTISTS: Artist[] = [
  {
    slug: "artist-a",
    name: "Artist A",
    specialties: ["Black & Grey", "Realism", "Blackwork"],
    bio: "Focuses on bold contrast and clean healed results. Custom designs built around placement and flow.",
    instagram: "https://instagram.com/",
  },
  {
    slug: "artist-b",
    name: "Artist B",
    specialties: ["Fine Line", "Minimal", "Floral"],
    bio: "Known for delicate linework and subtle shading. Great for minimal designs and detailed micro pieces.",
    instagram: "https://instagram.com/",
  },
  {
    slug: "artist-c",
    name: "Artist C",
    specialties: ["Lettering", "Script", "Ornamental"],
    bio: "Specializes in readable, balanced lettering and layout. Helps refine phrases for longevity and clarity.",
    instagram: "https://instagram.com/",
  },
];

export default function ArtistsPage() {
  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          Artists
        </h1>
        <p className="max-w-2xl text-sm text-zinc-400">
          Browse each artist’s portfolio, specialties, and booking preferences.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ARTISTS.map((a) => (
          <Card key={a.slug} className="border-zinc-800 bg-black">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold text-zinc-100">
                    {a.name}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {a.specialties.join(" • ")}
                  </div>
                </div>

                <a href={`/artists/${a.slug}`}>
                  <Button
                    variant="outline"
                    className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                  >
                    View
                  </Button>
                </a>
              </div>

              <div className="mt-4">
                <div className="aspect-[4/3] w-full rounded-xl border border-zinc-800 bg-zinc-950" />
                <p className="mt-4 text-sm text-zinc-300">{a.bio}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/booking">
                  <Button className="bg-white text-black hover:bg-zinc-200">
                    Request Booking
                  </Button>
                </a>

                {a.instagram ? (
                  <a
                    href={a.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-400 underline hover:text-white"
                  >
                    Instagram
                  </a>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-sm text-zinc-300">
          Not sure who to choose? Submit a{" "}
          <a className="underline hover:text-white" href="/booking">
            booking request
          </a>{" "}
          and we’ll match you with the right artist for your style.
        </p>
      </section>
    </main>
  );
}
