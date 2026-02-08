export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <section style={{ padding: "48px 0" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 12 }}>
          Tattoo work that looks better every year.
        </h1>

        <p style={{ fontSize: 18, maxWidth: 700, marginBottom: 24, opacity: 0.9 }}>
          Clean lines, bold black & grey, and custom pieces designed for your body.
          View portfolios, learn aftercare, and request a booking — all in one place.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/booking"
            style={{
              padding: "12px 16px",
              border: "1px solid #222",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Request a Booking
          </a>

          <a
            href="/gallery"
            style={{
              padding: "12px 16px",
              border: "1px solid #222",
              borderRadius: 10,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Gallery
          </a>

          <a
            href="/aftercare"
            style={{
              padding: "12px 16px",
              border: "1px solid #222",
              borderRadius: 10,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Aftercare Guide
          </a>
        </div>
      </section>
    </main>
  );
}
