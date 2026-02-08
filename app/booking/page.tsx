export default function BookingPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Booking Request</h1>
      <p style={{ maxWidth: 760, opacity: 0.9, marginTop: 0 }}>
        Fill this out with as much detail as possible. We’ll review and reply with next steps,
        availability, and deposit info.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
          marginTop: 24,
          alignItems: "start",
        }}
      >
        {/* FORM */}
        <section style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginTop: 0 }}>Request Form</h2>

          <form style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span>Full name *</span>
              <input
                name="name"
                placeholder="Jane Doe"
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Email *</span>
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Phone *</span>
              <input
                name="phone"
                placeholder="(555) 555-5555"
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Placement *</span>
              <input
                name="placement"
                placeholder="Forearm, upper arm, ribs, etc."
                required
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <label style={{ display: "grid", gap: 6 }}>
                <span>Approx size *</span>
                <input
                  name="size"
                  placeholder='e.g., "4x6 inches"'
                  required
                  style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
                />
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span>Style *</span>
                <select
                  name="style"
                  required
                  defaultValue=""
                  style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="black-grey">Black & Grey</option>
                  <option value="fine-line">Fine Line</option>
                  <option value="traditional">Traditional</option>
                  <option value="neo-traditional">Neo-Traditional</option>
                  <option value="realism">Realism</option>
                  <option value="lettering">Lettering</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Budget range *</span>
              <select
                name="budget"
                required
                defaultValue=""
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              >
                <option value="" disabled>
                  Select…
                </option>
                <option value="under-200">Under $200</option>
                <option value="200-400">$200–$400</option>
                <option value="400-800">$400–$800</option>
                <option value="800-plus">$800+</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Description *</span>
              <textarea
                name="description"
                placeholder="Describe the idea, subject matter, references, placement notes, and anything you want the artist to know."
                required
                rows={6}
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span>Ideal timeframe</span>
              <input
                name="timeframe"
                placeholder="e.g., next month / flexible / specific dates"
                style={{ padding: 10, borderRadius: 10, border: "1px solid #333" }}
              />
            </label>

            <button
              type="submit"
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid #222",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Submit Request
            </button>

            <p style={{ margin: 0, fontSize: 12, opacity: 0.75 }}>
              (Next step: we’ll connect this form to email + Airtable so submissions are actually sent.)
            </p>
          </form>
        </section>

        {/* POLICIES */}
        <aside style={{ border: "1px solid #222", borderRadius: 12, padding: 16 }}>
          <h2 style={{ fontSize: 18, marginTop: 0 }}>Deposits & Policies</h2>

          <ul style={{ lineHeight: 1.7, paddingLeft: 18, marginTop: 8 }}>
            <li><strong>Deposit required</strong> to confirm appointments.</li>
            <li>Deposits go toward the final price and cover design time.</li>
            <li>Reschedules require notice (policy details can go here).</li>
            <li>Arrive on time. Late arrivals may reduce session time.</li>
            <li>Bring ID if required by local rules.</li>
          </ul>

          <div style={{ marginTop: 12, borderTop: "1px solid #222", paddingTop: 12 }}>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Prefer to talk first? Visit the <a href="/contact">contact page</a>.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
