  export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      {/* HERO */}
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

      {/* QUICK INFO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        <div style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Walk-ins</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Limited walk-ins based on artist availability.
          </p>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Custom Work</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Bring your idea — we’ll refine and design it for placement.
          </p>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Clean & Safe</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Strict sanitation standards and single-use supplies.
          </p>
        </div>

        <div style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Deposits</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Deposits secure your appointment and cover design time.
          </p>
        </div>
      </section>
    </main>
  );
}
