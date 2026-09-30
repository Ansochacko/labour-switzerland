import Link from "next/link";
import { TrustCard } from "@/components/TrustCard";
import { ArrowRight, Calculator, ShieldCheck, Info } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Independence Notice Banner (Prominent Sitewide Independence Framing) */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Labour Switzerland is a private informational resource. We are not a government agency and have no affiliation with SEM, SECO, or any Swiss canton.
            </span>
          </div>
          <Link href="/about" className="hidden sm:inline hover:text-primary underline shrink-0">
            About Our Project
          </Link>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="w-full bg-surface py-12 md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 bg-surface-container-high rounded border border-outline-variant/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Independent Information Guide · Switzerland
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight max-w-3xl leading-[1.15]">
                Understand your permit, pay, and rights in Switzerland.
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Clear, plain-English guidance for international professionals and skilled workers relocating to Switzerland. Learn what your residence permit means for your pay slip, withholding tax (<em>Quellensteuer</em>), and job mobility.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/permits"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-primary-container transition-all shadow-sm font-semibold"
                >
                  <span>Explore permit types</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-lowest text-on-surface font-mono text-xs uppercase tracking-wider rounded border border-outline-variant hover:bg-surface-container-high transition-all shadow-sm font-semibold"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Estimate your gross pay</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>Reference information cross-checked against published SEM &amp; SECO documentation.</span>
              </div>
            </div>

            {/* Right Col: Swiss Work & Quotas Overview (4 cols - renamed from Confederation Monitor) */}
            <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
                    Published Swiss Benchmarks (2025)
                  </span>
                  <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">
                    Overview
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Non-EU/EFTA B Quota:</span>
                    <span className="font-mono font-semibold text-on-surface">4,500 total (annual cap)</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Non-EU/EFTA L Quota:</span>
                    <span className="font-mono font-semibold text-on-surface">4,000 total (annual cap)</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Cantonal Minimum Wages:</span>
                    <span className="font-mono font-semibold text-secondary">5 Cantons Enacted</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">National Median Wage:</span>
                    <span className="font-mono font-semibold text-primary">CHF 6,788 / mo</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-container flex items-center justify-between font-mono text-[11px] text-on-surface-muted">
                  <span>Source: SEM Quota Bulletins &amp; FSO Surveys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Types Grid Section - Demoted article citations to secondary detail */}
      <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/60">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Work &amp; Residence Categories
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
                Main Swiss Permit Types Explained
              </h2>
            </div>
            <Link
              href="/permits"
              className="inline-flex items-center gap-1 font-mono text-xs text-primary font-semibold hover:underline"
            >
              <span>Compare all permit types</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* B Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-mono text-lg font-bold">
                    B
                  </span>
                  <span className="text-xs font-mono text-on-surface-muted">
                    Long-Term
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Residence Permit (B)</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For ongoing employment contracts. Issued for 5 years for EU/EFTA citizens and renewed annually for non-EU nationals.
                </p>
                <div className="space-y-1.5 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium text-on-surface">5 yrs (EU) / 1 yr (Other)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Withholding Tax:</span>
                    <span className="font-medium text-on-surface">Quellensteuer applies</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-surface-container mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-on-surface-muted">Ref: Art. 33 FNIA</span>
                <Link
                  href="/permits/b-permit-switzerland"
                  className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* L Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-lg font-bold">
                    L
                  </span>
                  <span className="text-xs font-mono text-on-surface-muted">
                    Short-Term
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Short-Term Permit (L)</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For fixed-term contracts under 364 days. Tied to the specific employer, with quota caps for non-EU applicants.
                </p>
                <div className="space-y-1.5 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium text-on-surface">Contract length (&lt; 1 yr)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C Permit Credit:</span>
                    <span className="font-medium text-on-surface">Generally does not count</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-surface-container mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-on-surface-muted">Ref: Art. 32 FNIA</span>
                <Link
                  href="/permits/l-permit-switzerland"
                  className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* G Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-lg font-bold">
                    G
                  </span>
                  <span className="text-xs font-mono text-on-surface-muted">
                    Cross-Border
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Commuter Permit (G)</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For cross-border workers (frontaliers) living in neighbouring EU countries (France, Germany, Italy) who commute to Switzerland.
                </p>
                <div className="space-y-1.5 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Return rule:</span>
                    <span className="font-medium text-on-surface">Weekly return mandatory</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax regime:</span>
                    <span className="font-medium text-on-surface">Bilateral tax treaties</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-surface-container mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-on-surface-muted">Ref: Art. 35 FNIA</span>
                <Link
                  href="/permits/g-permit-switzerland"
                  className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* C Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded bg-secondary-container text-secondary flex items-center justify-center font-mono text-lg font-bold">
                    C
                  </span>
                  <span className="text-xs font-mono text-on-surface-muted">
                    Permanent
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Settlement Permit (C)</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  Permanent settlement after 5 or 10 years of residency. Full freedom of employment and exemption from tax at source.
                </p>
                <div className="space-y-1.5 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Eligibility:</span>
                    <span className="font-medium text-on-surface">5 or 10 yrs residence</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax regime:</span>
                    <span className="font-medium text-on-surface">Ordinary tax return</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-surface-container mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-on-surface-muted">Ref: Art. 34 FNIA</span>
                <Link
                  href="/permits/c-permit-switzerland"
                  className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wages & Standards Section */}
      <section className="w-full bg-surface py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Wage Structure Explanation */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                  Compensation Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
                  Understand your pay &amp; wage standards
                </h2>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Switzerland does not maintain a single federal minimum wage. Remuneration levels are established through cantonal minimum wage laws, Collective Bargaining Agreements (<span className="font-medium text-on-surface">GAV / CCT</span>), and standard cantonal employment contracts.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0 font-mono text-xs font-bold">
                    CHF
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">CHF 6,788 / month</h4>
                    <p className="text-xs text-on-surface-variant">
                      National median Swiss gross salary across all economic sectors (FSO Swiss Earnings Structure Survey).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0 font-mono text-xs font-bold">
                    13th
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">The 13th Month Salary Custom</h4>
                    <p className="text-xs text-on-surface-variant">
                      Common Swiss employment practice: Annual compensation divided across 13 monthly distributions, paid primarily in November or December.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0 font-mono text-xs font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Cantonal Minimum Wages</h4>
                    <p className="text-xs text-on-surface-variant">
                      Statutory minimum floors enacted in 5 cantons: Geneva (~CHF 24.32/h), Basel-Stadt (CHF 21.70/h), Neuchâtel, Jura, and Ticino.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-primary-container transition-all shadow-sm font-semibold"
                >
                  <span>Open Wage Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/wages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest text-primary font-mono text-xs uppercase tracking-wider rounded border border-outline-variant hover:bg-surface-container-high transition-all shadow-sm font-semibold"
                >
                  <span>Explore Benchmarks</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Wage Benchmark & Source Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded p-6 shadow-sm border border-outline-variant/60">
                <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                  <div>
                    <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                      Reference Benchmark
                    </span>
                    <h3 className="text-lg font-semibold text-on-surface">Software Engineer</h3>
                    <p className="text-xs text-on-surface-variant">
                      Mid-Level · Zurich &amp; Basel Metro Areas · Sector IT
                    </p>
                  </div>
                  <span className="font-mono text-xs bg-surface-container-high px-2 py-1 rounded text-on-surface font-semibold">
                    ISCO-08 2512
                  </span>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-on-surface-variant">Standard Base Median:</span>
                    <span className="font-mono text-2xl font-bold text-on-surface">
                      CHF 122,500 <span className="text-xs font-normal text-on-surface-variant">/ yr</span>
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between text-on-surface-variant font-mono text-xs">
                    <span>Monthly equiv. (13-month base):</span>
                    <span>CHF 9,423 / mo</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded mt-2 overflow-hidden">
                    <div className="bg-primary h-full rounded" style={{ width: "68%" }}></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-on-surface-muted pt-1">
                    <span>P25: CHF 105,000</span>
                    <span>P50 (Median)</span>
                    <span>P75: CHF 148,000</span>
                  </div>
                </div>

                {/* Sourcing reference card */}
                <TrustCard
                  authority="FSO / LSE Survey"
                  authorityFull="Swiss Earnings Structure Survey"
                  legalBasis="NOGA Sector 62 / BFS Report"
                  verificationPeriod="SOURCED REFERENCE"
                  verificationDate="Reviewed Jan 2025 · Editorial Team"
                  officialUrl="https://www.gate.bfs.admin.ch/salarium/public/index.html"
                  sourceLabel="SECO/BFS Salarium Official Tool"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Sourced Our Information Section */}
      <section className="w-full bg-surface-container-low py-16 border-t border-outline-variant/60">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
              Our Research Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
              How we source and research our information
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              We believe accurate information is critical for anyone planning a career move to Switzerland. Our editorial desk references primary legal compendiums and official statistical surveys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">01</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Primary Swiss Law</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Articles from the Swiss Federal Act on Foreign Nationals (FNIA / AIG) and the Swiss Code of Obligations (CO) provide our baseline citations.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">02</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Dated Survey Cycles</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every wage tier and quota figure references a specific survey cycle or government gazette release date.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">03</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Empirical Statistics</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Medians and quartiles are sourced from the Swiss Federal Statistical Office (FSO / BFS); we avoid unverified self-reported survey websites.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">04</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Plain English</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                We translate complex Swiss administrative jargon into practical, actionable English for workers and employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Independence Callout Banner */}
      <section className="w-full bg-surface py-12">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded border-l-4 border-l-primary border border-outline-variant/60 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-on-surface mb-1">
                  Important Notice: Independent Information Guide
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                  Labour Switzerland is an independent private educational website. We do not issue work permits, process applications, or represent Swiss immigration authorities. Official permit applications must be lodged directly with your cantonal migration office (<em>Migrationsamt / Office cantonal de la population</em>).
                </p>
              </div>
            </div>
            <Link
              href="/cantons"
              className="shrink-0 px-4 py-2 rounded bg-surface-container-high border border-outline-variant text-on-surface font-mono text-xs hover:bg-surface-container-highest transition-colors font-semibold"
            >
              Directory of Cantonal Offices →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
