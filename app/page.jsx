export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-32">
        <h1 className="text-6xl font-bold text-slate-900">
          Jon Wheeler
        </h1>

        <h2 className="mt-6 text-2xl text-slate-600">
          Automotive Market Insight | Residual Values |
          Vehicle Valuation & Consultancy
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-600">
          Automotive market analyst, residual value specialist,
          OEM consultant, Fleet World Awards Judge and industry
          commentator with extensive experience supporting
          manufacturers, leasing companies and automotive
          organisations across the UK.
        </p>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/jon-wheeler-9747a154/"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-slate-900 px-6 py-4 text-white"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
