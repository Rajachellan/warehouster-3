import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,98,201,0.25),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                For Landowners
              </span>
              <h1 className="mt-6 text-4xl font-serif font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your industrial land is worth{" "}
                <em className="font-serif italic text-blue-300">more</em> than
                the local broker told you.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Warehouster is the only platform in South India that packages
                landowner-held industrial parcels to institutional standards
                — and connects them directly to PE funds, REITs, and family
                offices actively deploying capital into the region.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  Evaluate My Land Confidentially
                  <span aria-hidden>↗</span>
                </a>
                <p className="text-sm text-slate-400">
                  Founder-led. No public listings. No broker auctions.
                </p>
              </div>
            </div>
 
            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
                {[
                  ["30–60%", "value lost selling early to local developers"],
                  ["3", "monetization paths: Sale, JV, BTS"],
                  ["5", "industrial corridors covered"],
                  ["1:1", "founder-led, confidential process"],
                ].map(([stat, label]) => (
                  <div key={label} className="bg-slate-950/40 p-6">
                    <dt className="font-serif text-3xl text-white">{stat}</dt>
                    <dd className="mt-2 text-xs leading-relaxed text-slate-400">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
 
        {/* hero image */}
        <div className="relative mx-6 mb-0 overflow-hidden rounded-t-2xl border-t border-white/10 lg:mx-12">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop"
            alt="Industrial land parcel at dusk with a steel structure under development"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/30" />
        </div>
      </section>
      
      {/* FOUR TRUTHS */}
      <section className="bg-slate-950 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Four Uncomfortable Truths
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl font-serif font-medium leading-tight text-white sm:text-4xl">
            Why most landowners{" "}
            <em className="italic text-blue-300">leave money on the table.</em>
          </h2>
 
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2">
            {[
              [
                "01",
                "Local brokers shop your land to the same buyers everyone else uses.",
              ],
              [
                "02",
                "Big 4 advisories will not engage on a single landowner mandate.",
              ],
              [
                "03",
                "Selling early to a local developer often costs 30–60% of fair institutional value.",
              ],
              [
                "04",
                "Most landowners have never been packaged to institutional standards.",
              ],
            ].map(([num, text]) => (
              <div
                key={num}
                className="group bg-slate-900/60 p-8 transition hover:bg-slate-900"
              >
                <span className="font-serif text-sm text-blue-400">{num}</span>
                <p className="mt-4 text-lg leading-relaxed text-slate-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* THREE EXITS */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Three Monetization Paths
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-serif font-medium leading-tight text-slate-900 sm:text-4xl">
            One platform.{" "}
            <em className="italic text-blue-700">Three exits.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
            Warehouster designs the right structure for your land — based on
            size, corridor, holding timeline, and capital appetite.
          </p>
 
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              [
                "Sale",
                "Outright monetization to institutional capital with structured price discovery.",
              ],
              [
                "JV",
                "Land contribution into a joint venture with institutional capital — retain upside, share risk.",
              ],
              [
                "BTS",
                "Build-to-suit a tenanted asset on your land for institutional acquisition.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 p-8 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
              >
                <h3 className="font-serif text-2xl text-blue-700">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* PROCESS */}
      <section className="bg-slate-50 px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              The Process
            </span>
            <h2 className="mt-5 text-3xl font-serif font-medium leading-tight text-slate-900 sm:text-4xl">
              Confidential.
              <br />
              <em className="italic text-blue-700">Founder-led.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
              No public listings. No broker auctions. Every conversation is
              handled directly by Sandeep until you decide to proceed.
            </p>
            <a
              href="#"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Confidential Land Assessment
              <span aria-hidden>↗</span>
            </a>
          </div>
 
          <div className="lg:col-span-7">
            <ol className="divide-y divide-slate-200 border-t border-slate-200">
              {[
                [
                  "01",
                  "Initial confidential call",
                  "Land details, holding structure, expectations.",
                ],
                [
                  "02",
                  "Land assessment + valuation range",
                  "Corridor-comparable pricing, zoning, encumbrance review.",
                ],
                [
                  "03",
                  "Structuring recommendation",
                  "Sale, JV, or BTS — with institutional buyer fit identified.",
                ],
                [
                  "04",
                  "Institutional introduction + closure",
                  "We package, present, negotiate, and close.",
                ],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex gap-6 py-7">
                  <span className="shrink-0 font-serif text-sm text-blue-500">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}