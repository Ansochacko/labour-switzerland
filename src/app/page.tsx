import Link from "next/link";
import { TrustCard } from "@/components/TrustCard";
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Info } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-surface py-12 md:py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 bg-surface-container-high rounded border border-outline-variant/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                  Independent Civic Portal · Switzerland
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight max-w-3xl leading-[1.15]">
                Understand your permit, pay, and rights in Switzerland.
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Clear, verified, and plain-language information for professionals and skilled workers relocating to the Swiss Confederation. Sourced directly from federal statutes and statistical authorities.
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
                  <span>Estimate your pay</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>Updated 2025 · Cross-referenced with SEM &amp; SECO legal bulletins.</span>
              </div>
            </div>

            {/* Right Col: Confederation Monitor (4 cols) */}
            <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
                    Confederation Monitor
                  </span>
                  <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-secondary-container text-secondary font-semibold">
                    Q1 2025 Live
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Non-EU/EFTA B Quota:</span>
                    <span className="font-mono font-semibold text-on-surface">4,500 total</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Non-EU/EFTA L Quota:</span>
                    <span className="font-mono font-semibold text-on-surface">4,000 total</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">Statutory Minimum Floor:</span>
                    <span className="font-mono font-semibold text-secondary">5 Cantons Enacted</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-on-surface-variant">National Median Wage:</span>
                    <span className="font-mono font-semibold text-primary">CHF 6,788 / mo</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-container flex items-center justify-between font-mono text-[11px] text-on-surface-muted">
                  <span>Federal Act on Foreign Nationals</span>
                  <span>SR 142.20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Types Grid Section */}
      <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/60">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Residency &amp; Employment Categories
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
                Primary Swiss Permit Classes
              </h2>
            </div>
            <Link
              href="/permits"
              className="inline-flex items-center gap-1 font-mono text-xs text-primary font-semibold hover:underline"
            >
              <span>View full statutory matrix (A to S permits)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* B Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-mono text-lg font-bold">
                    B
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    Art. 33 AIG
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Residence Permit</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For permanent employment contracts. Renewable, initial cantonal tie for non-EU nationals.
                </p>
                <div className="space-y-2 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium text-on-surface">5 yrs (EU) / 1 yr (Other)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quota:</span>
                    <span className="font-medium text-on-surface">EU exempt / Third-country quota</span>
                  </div>
                </div>
              </div>
              <Link
                href="/permits/b-permit-switzerland"
                className="pt-4 inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline border-t border-surface-container mt-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* L Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-lg font-bold">
                    L
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    Art. 32 AIG
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Short-Term Permit</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For fixed-term contracts up to 364 days. Strict quota restrictions for non-EU/EFTA.
                </p>
                <div className="space-y-2 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium text-on-surface">Contract length (&lt; 1 yr)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quota:</span>
                    <span className="font-medium text-on-surface">Federal quota cap applies</span>
                  </div>
                </div>
              </div>
              <Link
                href="/permits/l-permit-switzerland"
                className="pt-4 inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline border-t border-surface-container mt-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* G Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-lg font-bold">
                    G
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    Art. 35 AIG
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Cross-Border Commuter</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  For cross-border workers residing in neighboring EU/EFTA countries.
                </p>
                <div className="space-y-2 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Return rule:</span>
                    <span className="font-medium text-on-surface">Weekly return mandatory</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fiscal regime:</span>
                    <span className="font-medium text-on-surface">Withholding at source</span>
                  </div>
                </div>
              </div>
              <Link
                href="/permits/g-permit-switzerland"
                className="pt-4 inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline border-t border-surface-container mt-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* C Permit */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded bg-secondary-container text-secondary flex items-center justify-center font-mono text-lg font-bold">
                    C
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">
                    Art. 34 AIG
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Settlement Permit</h3>
                <p className="text-xs text-on-surface-variant mt-2 mb-4 leading-relaxed">
                  Permanent residence granting unrestricted labour access without quota constraints.
                </p>
                <div className="space-y-2 py-3 border-t border-surface-container font-mono text-[11px] text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Eligibility:</span>
                    <span className="font-medium text-on-surface">5 or 10 yrs residence</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Work rights:</span>
                    <span className="font-medium text-on-surface">Full employment freedom</span>
                  </div>
                </div>
              </div>
              <Link
                href="/permits/c-permit-switzerland"
                className="pt-4 inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline border-t border-surface-container mt-2"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
                Switzerland does not maintain a single federal minimum wage. Remuneration levels are established through Cantonal statutory minimums, Collective Bargaining Agreements (<span className="font-medium text-on-surface">GAV / CCT</span>), and standard cantonal employment contracts.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    CHF
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">CHF 6,788 / month</h4>
                    <p className="text-xs text-on-surface-variant">
                      Median Swiss gross salary across all economic sectors (FSO Swiss Earnings Structure Survey).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    13th
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">The 13th Month Salary Custom</h4>
                    <p className="text-xs text-on-surface-variant">
                      Standard in Swiss practice: Annual compensation divided across 13 monthly distributions, paid primarily in November or December.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">Cantonal Minimums &amp; Collective Accords</h4>
                    <p className="text-xs text-on-surface-variant">
                      Statutory floors in Geneva (~CHF 24.32/h), Basel-Stadt (CHF 21.70/h), Neuchâtel, Jura, and Ticino supersede private contractual minimums.
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

            {/* Right Column: Wage Benchmark & Trust Card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded p-6 shadow-sm border border-outline-variant/60">
                <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                  <div>
                    <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                      Reference Benchmark
                    </span>
                    <h3 className="text-lg font-semibold text-on-surface">Software Engineer</h3>
                    <p className="text-xs text-on-surface-variant">
                      Mid-Level · Canton Zurich (ZH) · Sector IT / FinTech
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

                {/* Signature Trust Card */}
                <TrustCard
                  authority="FSO / LSE"
                  authorityFull="Swiss Earnings Structure Survey"
                  legalBasis="NOGA Sector 62 / BFS-Stat-2024"
                  verificationPeriod="VERIFIED 2025"
                  verificationDate="15 January 2025 by Legal Editorial"
                  officialUrl="https://www.gate.bfs.admin.ch/salarium/public/index.html"
                  sourceLabel="Official Statistical Baseline (SECO/BFS)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Verify Section */}
      <section className="w-full bg-surface-container-low py-16 border-t border-outline-variant/60">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
              Civic Integrity &amp; Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
              How we verify our information
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              Federal labor regulations require rigorous precision. Our editorial framework cross-checks primary legal gazettes to prevent administrative misinformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">01</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Primary Federal Source</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Primary Federal Legislation (AIG/LEI), SEM guidelines, and Cantonal labor offices provide baseline legal codification.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">02</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Cycle Timestamping</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every statutory clause and wage tier is timestamped to the official enactment cycle to ensure ongoing legal relevance.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">03</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Empirical Baselines</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Raw medians and quartiles from the Swiss Federal Statistical Office (FSO); no algorithmic guessing or user hearsay.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col">
              <div className="font-mono text-xl font-bold text-secondary mb-3">04</div>
              <h3 className="text-sm font-semibold text-on-surface mb-2">Plain Translation</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Plain-language translation of complex bilateral accords and cantonal nuances into actionable, transparent guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Callout Banner */}
      <section className="w-full bg-surface py-12">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded border-l-4 border-l-outline border border-outline-variant/60 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-outline shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-on-surface mb-1">
                  Independent Civic Guide
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                  Labour Switzerland is an independent civic guide. We do not issue permits or represent immigration authorities. Official applications must be submitted directly via your cantonal migration office (<em>Migrationsamt / Office cantonal de la population</em>).
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
