import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Artist = {
  slug: string;
  name: string;
  specialties: string[];
  bio: string;
  bookingNotes: string[];
};

const ARTISTS: Artist[] = [
  {
    slug: "artist-a",
    name: "Artist A",
    specialties: ["Black & Grey", "Realism", "Blackwork"],
    bio: "Bold contrast, clean healed results, and designs that fit the body. Collaborative custom work with strong composition.",
    bookingNotes: [
      "Prefers high-contrast black & grey references",
      "Ideal for forearm/upper arm/back placements",
      "Deposits required to confirm",
    ],
  },
  {
    slug: "artist-b",
    name: "Artist B",
    specialties: ["Fine Line", "Minimal", "Floral"],
    bio: "Delicate linework and subtle shading. Best for minimal designs, florals, and detailed small-to-medium pieces.",
    bookingNotes: [
      "Bring 2–3 reference images for line style",
      "Be clear about size (in inches) and placement",
      "Avoid over-detailing for tiny placements",
    ],
  },
  {
    slug: "artist-c",
    name: "Artist C",
    specialties: ["Lettering", "Script", "Ornamental"],
    bio: "Readable lettering with strong flow and spacing. Helps refine phrase choices for longevity and clarity.",
    bookingNotes: [
      "Provide the exact text and preferred font vibe",
      "Placement photos help scale and alignment",
      "Legibility first — especially for small sizes",
    ],
  },
];

export default async function ArtistProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = ARTISTS.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <main className="space-y-6">
        <h1 className="text-2xl font-semibold text-zinc-100">Artist not found</h1>
        <p className="text-sm text-zinc-400">
          The artist profile you’re looking for doesn’t exist.
        </p>
        <a href="/artists">
          <Button className="bg-white text-black hover:bg-zinc-200">Back to Artists</Button>
        </a>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-400">
          Artist Profile
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
          {artist.name}
        </h1>
        <p className="text-sm text-zinc-400">{artist.specialties.join(" • ")}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="border-zinc-800 bg-black lg:col-span-2">
          <CardContent className="p-6">
            <div className="aspect-[16/9] w-full rounded-2xl border border-zinc-800 bg-zinc-950" />
            <h2 className="mt-6 text-lg font-semibold text-zinc-100">About</h2>
            <p className="mt-2 text-sm text-zinc-300">{artist.bio}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/booking">
                <Button className="bg-white text-black hover:bg-zinc-200">
                  Request Booking
                </Button>
              </a>
              <a href="/gallery">
                <Button
                  variant="outline"
                  className="border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  View Gallery
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-black">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-zinc-100">Booking Notes</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {artist.bookingNotes.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-300">
                Ready to book? Submit the form and mention{" "}
                <span className="font-semibold text-zinc-100">{artist.name}</span>.
              </p>
            </div>

            <div className="mt-4">
              <a href="/artists">
                <Button
                  variant="outline"
                  className="w-full border-zinc-800 text-zinc-200 hover:bg-zinc-950"
                >
                  Back to Artists
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
