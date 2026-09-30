import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import { WAGE_BENCHMARKS, CANTONAL_MINIMUM_WAGES } from "@/data/wages";
import { ArrowRight, Clock, Scale, CheckCircle2 } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const benchmarkSlugs = WAGE_BENCHMARKS.map((b) => ({ slug: b.slug }));
  return [
    ...benchmarkSlugs,
    { slug: "minimum-wage-switzerland" },
    { slug: "13th-month-salary-switzerland" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (params.slug === "minimum-wage-switzerland") {
    return {
      title: "Minimum Wage in Switzerland (2025 by Canton) | Labour Switzerland",
      description:
        "Is there a minimum wage in Switzerland? There is no federal minimum wage. Discover the 5 cantons with cantonal minimum wages: Geneva, Basel-Stadt, Neuchâtel, Jura, and Ticino.",
      alternates: {
        canonical: "https://labourswitzerland.com/wages/minimum-wage-switzerland",
      },
    };
  }

  if (params.slug === "13th-month-salary-switzerland") {
    return {
      title: "13th Month Salary in Switzerland Explained | Labour Switzerland",
      description:
        "Understand how the 13th month salary (13. Monatslohn / 13e salaire) works under Swiss employment law (CO Art. 322d). Pro-rata rules, tax at source, and contract customs.",
      alternates: {
        canonical: "https://labourswitzerland.com/wages/13th-month-salary-switzerland",
      },
    };
  }

  const benchmark = WAGE_BENCHMARKS.find((b) => b.slug === params.slug);
  if (!benchmark) {
    return {
      title: "Wage Data Under Review | Labour Switzerland",
      description: "Sourced statistical wage survey pending editorial verification.",
    };
  }

  return {
    title: `${benchmark.title} Salary in Switzerland (2025) | Labour Switzerland`,
    description: `Published median salary benchmark for ${benchmark.title} in Switzerland: CHF ${benchmark.medianAnnualChf.toLocaleString("de-CH")}/yr. Sourced from FSO and collective agreements.`,
    alternates: {
      canonical: `https://labourswitzerland.com/wages/${benchmark.slug}`,
    },
  };
}

export default function WageDetailPage({ params }: Props) {
  // SPECIAL PAGE 1: Minimum Wage in Switzerland
  if (params.slug === "minimum-wage-switzerland") {
    return (
      <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
        <Breadcrumb
          items={[
            { name: "Wages & Benchmarks", href: "/wages" },
            { name: "Minimum Wage Switzerland" },
          ]}
        />

        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Federal Law &amp; Cantonal Regulations
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            Minimum Wage in Switzerland: The Federal Reality
          </h1>
          <p className="text-base text-on-surface-variant leading-relaxed">
            There is <strong className="text-on-surface">no nationwide federal minimum wage in Switzerland</strong>. In a 2014 national referendum, Swiss voters rejected a proposed federal minimum of CHF 22/hour. Instead, minimum wage protections are enacted sovereignly by individual cantons or through Collective Employment Agreements (GAV/CCT).
          </p>
        </div>

        {/* Trust Card */}
        <TrustCard
          authority="FSO / SECO"
          authorityFull="State Secretariat for Economic Affairs"
          legalBasis="Federal Constitution Art. 110 / Cantonal Labor Legislation"
          verificationPeriod="VERIFIED 2025"
          verificationDate="Audited January 2025"
          officialUrl="https://www.seco.admin.ch"
          sourceLabel="Federal & Cantonal Labor Inspection"
        />

        {/* 5 Cantons with Minimum Wage */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-primary">
            The 5 Cantons with Cantonal Minimum Wages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CANTONAL_MINIMUM_WAGES.map((c) => (
              <div
                key={c.cantonCode}
                className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <span className="font-mono text-base font-bold text-primary">
                      {c.cantonName} ({c.cantonCode})
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-secondary-container text-secondary font-semibold">
                      {c.updated}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="font-mono text-2xl font-bold text-primary">
                      {c.hourlyChf}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-on-surface-variant block mt-1">
                    {c.monthlyEstimate}
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-3">
                    {c.notes}
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container font-mono text-[11px] text-on-surface-muted">
                  Legal Basis: {c.legalBasis}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collective Bargaining Accords (GAV / CCT) */}
        <section className="bg-surface-container-low p-6 rounded border border-outline-variant/60 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-primary">
            What Protects Workers in the Other 21 Cantons?
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            In cantons without a statutory minimum wage (such as Zurich, Bern, Zug, or Vaud), remuneration is regulated by <strong className="text-on-surface">Collective Bargaining Agreements (GAV / CCT)</strong> agreed between trade unions (e.g. Unia, Syna) and employer associations, or Cantonal Standard Employment Contracts (NAV / CTT) for vulnerable industries like domestic work and retail.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/calculator"
              className="px-5 py-2.5 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded font-semibold hover:bg-primary-container"
            >
              Open Gross Pay Calculator →
            </Link>
            <Link
              href="/cantons"
              className="px-5 py-2.5 bg-surface-container-lowest text-primary border border-outline-variant rounded font-mono text-xs uppercase tracking-wider font-semibold hover:bg-surface-container"
            >
              Explore 26 Cantons Directory →
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // SPECIAL PAGE 2: 13th Month Salary Custom & Legal Rule
  if (params.slug === "13th-month-salary-switzerland") {
    return (
      <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
        <Breadcrumb
          items={[
            { name: "Wages & Benchmarks", href: "/wages" },
            { name: "13th Month Salary Switzerland" },
          ]}
        />

        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Swiss Labor Code &amp; Practices
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            The 13th Month Salary in Switzerland Explained
          </h1>
          <p className="text-base text-on-surface-variant leading-relaxed">
            In Switzerland, annual compensation is traditionally disbursed across 13 monthly payments rather than 12. Understanding whether your offer includes a 13th month is vital for evaluating real monthly take-home pay and tax at source.
          </p>
        </div>

        {/* Trust Card */}
        <TrustCard
          authority="SECO / CO"
          authorityFull="Swiss Code of Obligations (Obligationenrecht)"
          legalBasis="Art. 322d CO (SR 220)"
          verificationPeriod="VERIFIED 2025"
          verificationDate="Reviewed Jan 2025 · Editorial Team"
          officialUrl="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en"
          sourceLabel="Federal Gazette SR 220"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
            <h2 className="text-base font-semibold text-primary">Is It Mandatory by Law?</h2>
            <p>
              Under Swiss law (CO Art. 322d), a 13th-month salary is <strong className="text-on-surface">not automatically mandatory</strong> unless explicitly stipulated in your individual employment contract, a Cantonal Standard Contract (NAV), or an applicable Collective Bargaining Agreement (GAV).
            </p>
            <p>
              However, it is customary across more than 80% of Swiss companies, with the extra payment traditionally disbursed in November or December.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
            <h2 className="text-base font-semibold text-primary">13th Month vs. Bonus (Gratifikation)</h2>
            <p>
              A 13th month salary is <strong className="text-on-surface">firm compensation</strong>. If you leave the company partway through the year, it must be paid out on a strict pro-rata temporis basis.
            </p>
            <p>
              By contrast, a bonus (<em>Gratifikation</em> under Art. 322d CO) is discretionary and dependent on company performance and employer discretion, unless specified otherwise by binding written clauses.
            </p>
          </div>
        </div>

        <div className="p-6 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col gap-3">
          <h3 className="text-base font-semibold text-primary">How Withholding Tax (Quellensteuer) Affects the 13th Month</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            For foreign workers holding B, L, or G permits, December is often a surprise: Because withholding tax tariffs are calculated on monthly earnings, a double salary in December (regular month + 13th month) pushes your gross earnings into a higher monthly tax progression bracket for that specific payroll cycle. Cantons adjust this during annual reconciliation.
          </p>
          <div className="pt-2">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded font-semibold hover:bg-primary-container"
            >
              <span>Model 12 vs 13 payments in calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // OCCUPATION BENCHMARK
  const benchmark = WAGE_BENCHMARKS.find((b) => b.slug === params.slug);

  if (!benchmark) {
    return (
      <div className="w-full max-w-container mx-auto px-6 py-16 flex flex-col gap-8">
        <Breadcrumb
          items={[
            { name: "Wages & Benchmarks", href: "/wages" },
            { name: "Under Review" },
          ]}
        />
        <div className="p-8 bg-surface-container-low rounded border border-dashed border-outline-variant flex flex-col sm:flex-row items-start gap-6">
          <Clock className="w-8 h-8 text-outline shrink-0 mt-1" />
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold text-on-surface">
              Wage Benchmark Under Review
            </h1>
            <p className="text-xs text-on-surface-variant max-w-2xl leading-relaxed">
              In accordance with our strict data accuracy rules, we never invent salary figures or pull unsubstantiated self-reported survey data. Official FSO / BFS Earnings Survey data for this role is pending validation.
            </p>
            <div className="pt-2 flex gap-4 font-mono text-xs">
              <Link
                href="/wages"
                className="px-4 py-2 bg-primary text-white rounded font-semibold hover:bg-primary-container"
              >
                View Verified Benchmarks →
              </Link>
              <Link
                href="/methodology"
                className="px-4 py-2 bg-surface-container-lowest text-primary border border-outline-variant rounded font-semibold"
              >
                Verification Methodology
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
      <Breadcrumb
        items={[
          { name: "Wages & Benchmarks", href: "/wages" },
          { name: benchmark.title },
        ]}
      />

      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-surface-container-high rounded font-mono text-xs text-on-surface-variant font-semibold">
            {benchmark.nogaCode}
          </span>
          <span className="font-mono text-xs text-on-surface-variant">
            {benchmark.regionFocus}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
          {benchmark.title} Salary in Switzerland
        </h1>

        <p className="text-base text-on-surface-variant leading-relaxed">
          {benchmark.summary}
        </p>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between">
          <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
            Median Annual Base
          </span>
          <div className="my-2">
            <span className="font-mono text-3xl font-bold text-primary">
              CHF {benchmark.medianAnnualChf.toLocaleString("de-CH")}
            </span>
            <span className="font-mono text-xs text-on-surface-variant block mt-0.5">
              per calendar year
            </span>
          </div>
          <span className="text-[11px] text-on-surface-variant font-mono">
            Standard: {benchmark.standardHours} hrs/wk
          </span>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between">
          <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
            Monthly Equivalent
          </span>
          <div className="my-2">
            <span className="font-mono text-3xl font-bold text-secondary">
              CHF {benchmark.monthlyBaseChf.toLocaleString("de-CH")}
            </span>
            <span className="font-mono text-xs text-on-surface-variant block mt-0.5">
              {benchmark.monthsCount}-month distribution
            </span>
          </div>
          <span className="text-[11px] text-on-surface-variant font-mono">
            {benchmark.monthsCount === 13 ? "13th month custom standard" : "12 equal installments"}
          </span>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between">
          <span className="font-mono text-xs text-on-surface-muted uppercase tracking-wider">
            Interquartile Spread (P25 - P75)
          </span>
          <div className="my-2">
            <span className="font-mono text-xl font-bold text-on-surface">
              CHF {benchmark.p25AnnualChf.toLocaleString("de-CH")} – {benchmark.p75AnnualChf.toLocaleString("de-CH")}
            </span>
            <span className="font-mono text-xs text-on-surface-variant block mt-0.5">
              50% core market band
            </span>
          </div>
          <span className="text-[11px] text-on-surface-variant font-mono">
            Excludes executive profit-shares
          </span>
        </div>
      </div>

      {/* Signature Trust Card */}
      <TrustCard
        authority={benchmark.sourceAuthority}
        authorityFull={benchmark.sourceSurvey}
        legalBasis={benchmark.legalBasis}
        verificationPeriod={benchmark.referencePeriod}
        verificationDate={benchmark.verificationDate}
        officialUrl="https://www.gate.bfs.admin.ch/salarium/public/index.html"
        sourceLabel="Published Survey Data"
      />

      {/* Details & Calculator Callout */}
      <div className="p-6 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-base font-semibold text-primary">
            Convert this wage to hourly and monthly net estimates
          </h2>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Use our Gross Pay Calculator to convert this benchmark against different weekly hours (40 to 42.5 hrs/week) and review expected standard deductions (AHV, ALV, BVG, and Quellensteuer).
          </p>
        </div>
        <Link
          href="/calculator"
          className="shrink-0 px-5 py-3 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded font-semibold hover:bg-primary-container shadow-sm"
        >
          Open Gross Calculator →
        </Link>
      </div>
    </div>
  );
}
