export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold">JonWheeler.UK</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Automotive Market Insight
            </p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#about" className="text-slate-600 hover:text-slate-900">
              About
            </a>
            <a href="#career" className="text-slate-600 hover:text-slate-900">
              Career
            </a>
            <a
              href="#expertise"
              className="text-slate-600 hover:text-slate-900"
            >
              Expertise
            </a>
          </nav>

          <a
            href="https://www.linkedin.com/in/jon-wheeler-9747a154/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Automotive Industry Professional
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-7xl">
              Jon Wheeler
            </h1>

            <h2 className="mt-6 text-2xl text-slate-600 lg:text-3xl">
              Automotive Market Insight | Residual Values | Vehicle Valuation &
              Consultancy
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Automotive market analyst, residual value specialist, OEM
              consultant, Fleet World Awards Judge and industry commentator with
              extensive experience supporting manufacturers, leasing companies
              and automotive organisations across the UK.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/jon-wheeler-9747a154/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-6 py-4 font-medium text-white"
              >
                Connect on LinkedIn
              </a>

              <a
                href="#about"
                className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                src="/images/jon-wheeler.jpg"
                alt="Jon Wheeler"
                className="h-[500px] w-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}

      <section
        id="about"
        className="border-t border-slate-200 bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
                About
              </span>

              <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                From Automotive Enthusiast to Industry Specialist
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A career built from genuine enthusiasm for vehicles,
                progressing through commercial leadership, automotive trade
                experience and into vehicle valuation, residual value
                forecasting and consultancy.
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                My passion for vehicles began long before my professional
                career. From an early age I developed a strong interest in
                cars, motorcycles and automotive engineering.
              </p>

              <p>
                Over the years I have owned a wide range of vehicles alongside a
                Kawasaki ZX6 road bike and a Honda Fireblade track bike. That
                enthusiasm for the automotive industry ultimately became a
                profession.
              </p>

              <p>
                I started working at the age of sixteen while studying at
                college and spent the following twelve years developing
                customer-facing, commercial and leadership experience within the
                retail sector.
              </p>

              <p>
                Following a move into a specialist automotive trade role, I
                joined CDL Vehicle Information Services in 2016 as a Vehicle
                Valuation Manager, working directly with vehicle values, market
                movements and residual value performance.
              </p>

              <p>
                Today I lead Vehicle Valuation Services, combining automotive
                market intelligence, residual value forecasting, OEM
                consultancy, vehicle data management and people leadership.
              </p>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Areas of Focus
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Residual Values",
                    "Vehicle Valuation",
                    "Market Intelligence",
                    "OEM Consultancy",
                    "Automotive Data",
                    "Forecasting",
                    "Used Car Markets",
                    "Fleet Sector Insight",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
  id="career"
  className="border-t border-slate-200 bg-slate-50 py-24"
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="max-w-3xl">
      <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
        Career Journey
      </span>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Building a career through passion, leadership and market expertise.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        A professional journey spanning retail leadership,
        automotive trade experience and vehicle valuation.
      </p>
    </div>

    <div className="mt-16 space-y-8">

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Age 16
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Retail Industry
        </h3>
        <p className="mt-4 text-slate-600">
          Started working while studying at college,
          developing customer service and commercial skills.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          12 Years
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Retail Leadership
        </h3>
        <p className="mt-4 text-slate-600">
          Progressed through increasingly responsible
          customer-facing and management roles.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Automotive Trade
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Trade Specialist
        </h3>
        <p className="mt-4 text-slate-600">
          Developed industry expertise and a deeper
          understanding of vehicle markets.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          2016
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Vehicle Valuation Manager
        </h3>
        <p className="mt-4 text-slate-600">
          Joined CDL Vehicle Information Services,
          working directly with vehicle values,
          residual values and used market dynamics.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
          2017 - Present
        </p>
        <h3 className="mt-2 text-2xl font-bold">
          Head of Vehicle Valuation Services
        </h3>
        <p className="mt-4 text-slate-300">
          Leading valuation operations, residual value
          forecasting, OEM consultancy, market analysis
          and vehicle data management.
        </p>
      </div>

    </div>
  </div>
</section>
      <section
  id="expertise"
  className="border-t border-slate-200 bg-white py-24"
>
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
        Core Expertise
      </span>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Supporting the automotive industry through data,
        insight and market expertise.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Combining vehicle valuation, residual value
        forecasting, automotive market intelligence and
        consultancy to help organisations make better
        decisions.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          📈 Residual Value Forecasting
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Supporting manufacturers, leasing companies
          and automotive stakeholders with future value
          forecasting and strategic advice.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          🚗 Automotive Market Intelligence
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Analysis of supply, demand, economic conditions
          and consumer behaviour affecting vehicle values.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          🤝 OEM Consultancy
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Supporting vehicle manufacturers with product
          positioning, pricing strategy and residual value
          optimisation.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold">
          📊 Research & Analytics
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          Developing forecasting models, market analysis
          and strategic insight around future automotive
          market developments.
        </p>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
