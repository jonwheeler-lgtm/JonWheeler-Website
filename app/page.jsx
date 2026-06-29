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
      <section
  id="contributions"
  className="border-t border-slate-200 bg-slate-900 py-24 text-white"
>
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
        Industry Contributions
      </span>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Contributing to the wider automotive industry.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Beyond day-to-day valuation and consultancy work, I regularly
        contribute to industry discussion, vehicle assessment and
        market commentary through recognised automotive publications
        and industry initiatives.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-5xl">🏆</div>

        <h3 className="mt-6 text-2xl font-bold">
          Fleet World Awards Judge
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          Selected as a Fleet World Awards Judge, assessing vehicles
          across multiple categories using criteria including
          fleet suitability, whole-life costs, quality,
          desirability and residual value performance.
        </p>

        <ul className="mt-6 space-y-2 text-slate-200">
          <li>• Fleet suitability</li>
          <li>• Whole-life costs</li>
          <li>• Residual values</li>
          <li>• Product quality</li>
          <li>• Market competitiveness</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-5xl">📋</div>

        <h3 className="mt-6 text-2xl font-bold">
          Fleet World SWOT Contributor
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          Regular contributor to Fleet World SWOT analysis features,
          providing independent market commentary, residual value
          expertise and insight into manufacturer positioning within
          the UK automotive market.
        </p>

        <ul className="mt-6 space-y-2 text-slate-200">
          <li>• Manufacturer analysis</li>
          <li>• Market positioning</li>
          <li>• Residual values</li>
          <li>• Industry insight</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-5xl">📰</div>

        <h3 className="mt-6 text-2xl font-bold">
          Published Commentary
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          Contributor to automotive and fleet industry content,
          sharing commentary on residual values, used vehicle
          markets, remarketing and wider automotive trends.
        </p>

        <ul className="mt-6 space-y-2 text-slate-200">
          <li>• Business Car</li>
          <li>• FleetPoint</li>
          <li>• Automotive World</li>
          <li>• LinkedIn Articles</li>
        </ul>
      </div>

    </div>

    <div className="mt-16 rounded-3xl bg-white/5 p-10">
      <h3 className="text-2xl font-bold">
        Areas of Industry Involvement
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Fleet World Awards Judge",
          "Fleet World SWOT Contributor",
          "Residual Values",
          "OEM Consultancy",
          "Market Intelligence",
          "Automotive Commentary"
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
      <section
  id="research"
  className="border-t border-slate-200 bg-white py-24"
>
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
        Research & Market Intelligence
      </span>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Market insight driven by analysis, forecasting and industry experience.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Research forms a key part of how I evaluate vehicle values,
        market opportunity and future automotive trends. Combining
        valuation expertise with wider economic, regulatory and
        consumer data creates a more complete understanding of
        future market performance.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* Card 1 */}

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-5xl">⛽</span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium border border-slate-200">
            Market Intelligence
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Fuel Price Shocks & Used Vehicle Valuations
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Analysis examining how fuel price volatility,
          inflation, geopolitical disruption and consumer
          confidence influence used vehicle demand and
          residual values.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Fuel Costs",
            "Consumer Demand",
            "Residual Values",
            "Inflation",
            "Forecasting",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Card 2 */}

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-5xl">🛻</span>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium border border-slate-200">
            OEM Consultancy
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Toyota Hilux Market Assessment
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Assessment of UK pick-up market dynamics,
          competitor positioning, taxation changes,
          volume strategy and residual value implications
          for new vehicle programmes.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "OEM Strategy",
            "Market Positioning",
            "Pricing",
            "Residual Values",
            "Volume Planning",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom panel */}

    <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-white">
      <h3 className="text-2xl font-bold">
        Research Areas
      </h3>

      <p className="mt-4 max-w-4xl text-slate-300 leading-8">
        My research focuses on understanding the relationship
        between vehicle values, market demand, economic
        performance, taxation, supply constraints, product
        strategy and wider automotive market developments.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Residual Values",
          "Used Vehicle Markets",
          "Consumer Behaviour",
          "Automotive Forecasting",
          "Market Intelligence",
          "Inflation",
          "OEM Strategy",
          "Fleet Sector Trends",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
     <section
  id="articles"
  className="border-t border-slate-200 bg-slate-50 py-24"
>
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <span className="rounded-full bg-white px-4 py-2 text-sm font-medium border border-slate-200">
        Commentary & Articles
      </span>

      <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
        Published insight, commentary and market analysis.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        A collection of published articles, research papers and
        market commentary covering vehicle valuation, residual
        values, used vehicle markets and wider automotive trends.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          Remarketing
        </span>
        
<h3 className="mt-6 text-2xl font-bold">
  Remarketing: Every Which Way
</h3>

<p className="mt-2 text-sm text-slate-500">
  Business Car
</p>

<p className="mt-4 leading-7 text-slate-600">
  Analysis exploring used vehicle supply, fleet demand
  and the competing pressures affecting remarketing
  activity and residual values.
</p>

<a
  href="https://www.businesscar.co.uk/analysis/remarketing-every-which-way/"
  target="_blank"
  rel="noreferrer"
  className="mt-6 inline-block font-semibold text-slate-900 hover:underline"
>
  Read Article →
</a>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          Remarketing
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Remarketing: Twin Peaks
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Business Car
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Commentary examining vehicle value performance,
          market conditions and developing used vehicle trends.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          Market Overview
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          UK Car Market Overview
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          LinkedIn Commentary Series
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Regular analysis of vehicle valuation trends,
          consumer demand, supply levels and automotive
          market performance.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          Industry Commentary
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          CDL Valuation Market Commentary
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          FleetPoint & Automotive Industry Publications
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          Commentary and analysis focused on residual values,
          used vehicle transactions and wider market developments.
        </p>
      </div>

    </div>

    <div className="mt-16 rounded-3xl bg-white border border-slate-200 p-10">

      <h3 className="text-2xl font-bold">
        Publications & Contributions
      </h3>

      <p className="mt-4 max-w-4xl leading-8 text-slate-600">
        Contributions and commentary featured through a range of
        automotive and fleet publications, covering residual values,
        vehicle valuation, remarketing and automotive market trends.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
  {[
    "Business Car",
    "FleetPoint",
    "Automotive World",
    "Fleet World",
    "LinkedIn",
    "Residual Values",
    "Remarketing",
    "Market Analysis"
  ].map((item) => (
    <span
      key={item}
      className="rounded-full bg-slate-100 px-4 py-2 text-sm"
    >
      {item}
    </span>
  ))}
</div>
    
</section>
 <section
  id="connect"
  className="bg-slate-950 py-24 text-white"
>
  <div className="mx-auto max-w-5xl px-6 text-center">

    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
      Connect
    </span>

    <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
      Let's continue the conversation.
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
      For professional discussions relating to vehicle valuation,
      residual values, automotive market intelligence, used vehicle
      markets and consultancy, connect with me on LinkedIn.
    </p>

    <div className="mt-12">
      <a
        href="https://www.linkedin.com/in/jon-wheeler-9747a154/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-2xl bg-white px-8 py-5 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Connect on LinkedIn
      </a>
    </div>

    {/* Footer */}

    <div className="mt-20 border-t border-white/10 pt-10">

      <h3 className="text-2xl font-bold">
        JonWheeler.UK
      </h3>

      <p className="mt-4 text-slate-400">
        Automotive Market Insight • Residual Values •
        Vehicle Valuation • Consultancy
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">

        {[
          "Residual Values",
          "Market Intelligence",
          "OEM Consultancy",
          "Fleet World Awards",
          "Research",
          "Industry Commentary",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}

      </div>

      <p className="mt-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Jon Wheeler. All rights reserved.
      </p>

    </div>

  </div>
</section>
    </main>
  );
}
