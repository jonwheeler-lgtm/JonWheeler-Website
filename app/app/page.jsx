export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Jon Wheeler
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#475569",
            marginBottom: "40px",
          }}
        >
          Automotive Market Insight | Residual Values | Vehicle Valuation &
          Consultancy
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            lineHeight: 1.8,
            color: "#475569",
          }}
        >
          Automotive market analyst, residual value specialist, OEM
          consultant, Fleet World Awards Judge and industry commentator with
          extensive experience supporting manufacturers, leasing companies and
          automotive organisations across the UK.
        </p>
      </section>
    </main>
  );
}
