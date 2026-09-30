import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import { WAGE_BENCHMARKS, CANTONAL_MINIMUM_WAGES } from "@/data/wages";
import { ArrowRight, ExternalLink, ShieldCheck, Scale, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "Swiss Wages & Salary Benchmarks by Industry | Labour Switzerland",
  description:
    "Swiss salary benchmarks based on FSO Earnings Structure Survey and Collective Labor Agreements (GAV/CCT). Tech, MEM engineering, finance, healthcare, and cantonal minimum wages.",
  alternates: {
    canonical: "https://labourswitzerland.com/wages",
  },
};

export default function WagesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Sourced benchmarks compiled from FSO/BFS statistics and collective agreements. Not an official tariff schedule.
            </span>
          </div>
          <Link href="/about" className="hidden sm:inline hover:text-primary underline shrink-0">
            About Our Project
          </Link>
        </div>
      </aside>

      {/* Top Breadcrumb & Administrative Context Strip */}
      <section className="w-full bg-surface-container-low px-6 py-8 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-4">
          <Breadcrumb items={[{ name: "Wages & Benchmarks", href: "/wages" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  Published Salary Benchmarks &amp; Guidelines
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                Swiss Wage Benchmarks &amp; Sector Guidelines
              </h1>
              <p className="text-base text-on-surface-variant max-w-3xl leading-relaxed">
                Switzerland has no nationwide minimum wage, except in five cantons (Geneva, Neuchâtel, Jura, Ticino, Basel-Stadt). Compensation is determined by market benchmarks, Collective Employment Agreements (GAV/CCT), and standard cantonal salary thresholds.
              </p>
            </div>

            {/* Right Statutory Regulation Box */}
            <div className="lg:col-span-4 flex flex-col gap-2 bg-surface-container-lowest p-4 rounded shadow-sm border border-outline-variant/60">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                <span className="font-mono text-[11px] text-on-surface-variant font-semibold">
                  CANTONAL MINIMUM WAGES
                </span>
                <span className="font-mono text-[11px] text-secondary font-semibold">
                  5 OF 26 CANTONS
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant pt-1">
                <span>Geneva (GE): CHF 24.32/h</span>
                <span className="font-mono text-primary font-semibold">~CHF 4,426/m</span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Basel-Stadt (BS): CHF 21.70/h</span>
                <span className="font-mono text-primary font-semibold">~CHF 3,950/m</span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Neuchâtel / Jura / Ticino</span>
                <span className="font-mono text-secondary font-semibold">Cantonal Floors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Official Positioning Notice (SECO Salarium) */}
      <section className="w-full px-6 py-6 bg-surface">
        <div className="max-w-container mx-auto">
          <div className="bg-primary text-white rounded p-6 shadow-sm border border-primary relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-3xl">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Scale className="w-5 h-5 text-secondary-container" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-secondary-container font-semibold">
                      Official Tool Guidance
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="font-mono text-xs text-white/80">SECO Direction du travail</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    <strong className="text-white">Note on official tools:</strong> For an individual, legally recognized median benchmark based on your specific age, education level, and firm size, always consult SECO&apos;s official Salarium tool. Labour Switzerland provides curated sectoral baselines to help you recognize fair offers.
                  </p>
                </div>
              </div>
              <a
                href="https://www.gate.bfs.admin.ch/salarium/public/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-primary text-xs font-mono font-semibold hover:bg-surface-container-high transition-all shadow-sm"
              >
                <span>Open SECO Salarium Tool</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wage Benchmark Cards Grid */}
      <section className="w-full px-6 py-8 bg-surface">
        <div className="max-w-container mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                Sourced Profiles
              </span>
              <h2 className="text-2xl font-semibold text-primary mt-1">
                Sectoral Wage Benchmarks
              </h2>
            </div>
            <Link
              href="/calculator"
              className="font-mono text-xs text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <span>Convert your wage in the calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WAGE_BENCHMARKS.map((item) => (
              <article
                key={item.slug}
                className="bg-surface-container-lowest rounded p-6 shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                <div className="flex flex-col gap-6">
                  {/* Card Header & Geo-tags */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-on-surface-variant font-medium">
                          {item.nogaCode}
                        </span>
                        <span className="text-outline-variant">·</span>
                        <span className="font-mono text-xs text-on-surface-variant">
                          {item.regionFocus}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mt-1">
                        <Link href={`/wages/${item.slug}`} className="hover:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-on-surface-variant">{item.summary}</p>
                    </div>
                  </div>

                  {/* Main Metric Block */}
                  <div className="bg-surface-container-low p-4 rounded flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-on-surface-muted uppercase tracking-wider block">
                          Median Annual Gross Base
                        </span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="font-mono text-2xl font-bold text-primary">
                            CHF {item.medianAnnualChf.toLocaleString("de-CH")}
                          </span>
                          <span className="font-mono text-xs text-on-surface-variant">/ yr</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[10px] text-on-surface-muted uppercase tracking-wider block">
                          Monthly ({item.monthsCount}-Month Base)
                        </span>
                        <span className="font-mono text-sm font-semibold text-secondary">
                          CHF {item.monthlyBaseChf.toLocaleString("de-CH")} / mo
                        </span>
                      </div>
                    </div>

                    {/* Interquartile Band */}
                    <div className="flex flex-col gap-1.5 pt-2 border-t border-surface-container font-mono text-[11px]">
                      <div className="flex justify-between text-on-surface-variant">
                        <span>P25: CHF {item.p25AnnualChf.toLocaleString("de-CH")}</span>
                        <span className="font-semibold text-on-surface">50% Range Band</span>
                        <span>P75: CHF {item.p75AnnualChf.toLocaleString("de-CH")}</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container-high rounded overflow-hidden relative">
                        <div className="absolute left-[25%] right-[25%] h-full bg-secondary rounded"></div>
                        <div className="absolute left-[50%] w-1.5 h-full bg-primary" title="Median"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Signature Trust Card */}
                <div className="mt-6 pt-4 border-t border-surface-container">
                  <TrustCard
                    authority={item.sourceAuthority}
                    authorityFull={item.sourceSurvey}
                    legalBasis={item.legalBasis}
                    verificationPeriod={item.referencePeriod}
                    verificationDate={item.verificationDate}
                    officialUrl="https://www.gate.bfs.admin.ch/salarium/public/index.html"
                    sourceLabel="Survey Benchmark Anchor"
                  />
                  <div className="pt-3 flex justify-end">
                    <Link
                      href={`/wages/${item.slug}`}
                      className="text-xs font-mono text-primary font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Read detailed occupation breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Cantonal Minimum Wages Overview Section */}
          <div className="mt-8 bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  Cantonal Minimum Floors
                </span>
                <h3 className="text-xl font-semibold text-primary mt-1">
                  Cantonal Minimum Wage Legislation (5 Cantons)
                </h3>
              </div>
              <Link
                href="/wages/minimum-wage-switzerland"
                className="font-mono text-xs text-primary font-semibold hover:underline flex items-center gap-1"
              >
                <span>Read Full Minimum Wage Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CANTONAL_MINIMUM_WAGES.map((c) => (
                <div
                  key={c.cantonCode}
                  className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col justify-between gap-2"
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-primary">
                      {c.cantonCode} · {c.cantonName}
                    </span>
                    <span className="font-mono text-sm font-semibold text-secondary mt-1">
                      {c.hourlyChf}
                    </span>
                    <span className="text-[11px] text-on-surface-variant mt-0.5">
                      {c.monthlyEstimate}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-muted pt-2 border-t border-surface-container truncate">
                    {c.legalBasis}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
