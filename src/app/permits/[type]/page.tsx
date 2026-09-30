import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PERMITS, PERMIT_COMPARISON_MATRIX } from "@/data/permits";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Download,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface Props {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(PERMITS).map((key) => ({
    type: key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const permit = PERMITS[params.type];

  if (!permit) {
    return {
      title: "Permit Category Under Review | Labour Switzerland",
      description:
        "Editorial verification in progress for this Swiss permit category. Cross-referenced with guidelines from the State Secretariat for Migration (SEM).",
    };
  }

  return {
    title: `${permit.title} Explained: Rules, Tax & Rights | Labour Switzerland`,
    description: `${permit.title} (${permit.officialNameDe}) explained in plain English. Validity, employer mobility, Quellensteuer withholding tax, and C permit path.`,
    alternates: {
      canonical: `https://labourswitzerland.com/permits/${permit.id}`,
    },
    openGraph: {
      title: `${permit.title} Explained | Labour Switzerland`,
      description: permit.shortSummary,
      url: `https://labourswitzerland.com/permits/${permit.id}`,
      type: "article",
    },
  };
}

export default function PermitDetailPage({ params }: Props) {
  const permit = PERMITS[params.type];

  // Section 7 Requirement: For gaps, show a well-designed "not yet verified" state with real surrounding value
  if (!permit) {
    return (
      <div className="w-full max-w-container mx-auto px-6 py-16 flex flex-col gap-8">
        <Breadcrumb
          items={[
            { name: "Permits", href: "/permits" },
            { name: "Under Verification" },
          ]}
        />

        <div className="p-8 bg-surface-container-low rounded border border-dashed border-outline-variant flex flex-col sm:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-on-surface-variant">
            <Clock className="w-6 h-6 text-outline" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-on-surface">
                Permit Data Not Yet Verified
              </h1>
              <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-mono text-xs rounded uppercase font-semibold">
                Pending Editorial Review
              </span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl">
              Our editorial desk only publishes permit guides that have been cross-referenced with primary Swiss federal immigration law (AIG/FNIA) and SEM directives. This specific permit category is currently undergoing editorial review.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
              <Link
                href="/permits"
                className="px-4 py-2 bg-primary text-white rounded font-semibold hover:bg-primary-container"
              >
                Browse Verified Permits (B, L, G, C) →
              </Link>
              <Link
                href="/methodology"
                className="px-4 py-2 bg-surface-container-lowest text-primary border border-outline-variant rounded font-semibold hover:bg-surface-container"
              >
                Read Sourcing Methodology
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FAQ Schema JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: permit.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Informational overview compiled from official sources. Not legal advice or affiliated with SEM.
            </span>
          </div>
          <Link href="/disclaimer" className="hidden sm:inline hover:text-primary underline shrink-0">
            Legal Disclaimer
          </Link>
        </div>
      </aside>

      {/* Top Banner / Hero Strip */}
      <div className="w-full bg-surface-container-low py-8 px-6 sm:px-8 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-6">
          <Breadcrumb
            items={[
              { name: "Permit Guides", href: "/permits" },
              { name: `${permit.code} Permit` },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-primary text-white font-mono text-xs rounded uppercase tracking-wider font-semibold">
                  Permit Class {permit.code}
                </span>
                <span className="font-mono text-xs text-on-surface-variant uppercase">
                  Ref: {permit.legalBasis}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                {permit.title}{" "}
                <span className="text-xl sm:text-2xl font-normal text-on-surface-variant block sm:inline">
                  ({permit.officialNameDe} / {permit.officialNameFr})
                </span>
              </h1>

              <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                {permit.fullDescription}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={permit.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white text-xs font-mono rounded shadow-sm hover:bg-primary-container transition-all flex items-center gap-2 font-semibold"
              >
                <span>SEM Migration Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Facts 4-box Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-surface-container-lowest p-4 rounded shadow-sm border border-outline-variant/60">
            <div className="flex flex-col gap-1 p-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted">
                Status Type
              </span>
              <span className="font-mono text-xs text-primary font-semibold">
                {permit.statusType}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Full municipal registration
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted">
                Validity Cycle
              </span>
              <span className="font-mono text-xs text-primary font-semibold">
                {permit.validityCycle.split("(")[0]}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Contingent on citizenship
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted">
                Annual Quotas
              </span>
              <span className="font-mono text-xs text-primary font-semibold">
                {permit.code === "C" ? "None" : permit.quotas.split("/")[0]}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Federal allocation
              </span>
            </div>

            <div className="flex flex-col gap-1 p-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted">
                Family Reunification
              </span>
              <span className="font-mono text-xs text-secondary font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {permit.familyReunification ? "Permitted" : "Restricted"}
              </span>
              <span className="text-[11px] text-on-surface-variant truncate">
                {permit.familyReunificationNotes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="max-w-container mx-auto px-6 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            {/* Section 01: Legal Foundation */}
            <section id="legal-scope" className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-secondary font-semibold">01</span>
                  <h2 className="text-xl font-semibold text-primary">What It Means</h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Legal Framework
                </span>
              </div>

              {/* Signature Trust Card */}
              <TrustCard
                authority={permit.sourceAuthority}
                authorityFull={permit.sourceAuthorityFull}
                legalBasis={permit.legalBasis}
                verificationPeriod={permit.verificationPeriod}
                verificationDate={permit.verificationDate}
                officialUrl={permit.officialSourceUrl}
              />

              <div className="flex flex-col gap-4 text-sm text-on-surface-variant leading-relaxed">
                <p>{permit.sections.legalScope}</p>
                <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                    §
                  </div>
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="font-semibold text-primary">
                      Third-Country Specifics (Non-EU/EFTA)
                    </span>
                    <span>{permit.sections.thirdCountryRules}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 02: Employment & Labor Implications */}
            <section id="employment-labor" className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-secondary font-semibold">02</span>
                  <h2 className="text-xl font-semibold text-primary">
                    Employment &amp; Labor Implications
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Work Rights &amp; CO Rules
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
                  <h3 className="font-semibold text-sm text-primary">Job Mobility &amp; Changing Roles</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {permit.sections.employmentMobility}
                  </p>
                </div>

                <div className="p-5 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
                  <h3 className="font-semibold text-sm text-primary">13th Month Salary &amp; Wage Parity</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {permit.sections.thirteenthMonth}
                  </p>
                  <div className="pt-2 border-t border-surface-container font-mono text-[11px] text-on-surface-muted">
                    Standard probation in Swiss practice: 1–3 months (Art. 335b CO)
                  </div>
                </div>
              </div>
            </section>

            {/* Section 03: Tax Implications (Quellensteuer) */}
            <section id="taxation" className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-secondary font-semibold">03</span>
                  <h2 className="text-xl font-semibold text-primary">
                    Tax Implications (Quellensteuer)
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Fiscal Framework
                </span>
              </div>

              <div className="flex flex-col gap-4 text-sm text-on-surface-variant leading-relaxed">
                <p>{permit.sections.taxQuellensteuer}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold text-primary">
                      Gross Earnings &lt; CHF 120,000 / year
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Tax at source serves as a definitive settlement. No standard personal tax return is mandatory unless individual owns worldwide assets exceeding cantonal thresholds.
                    </p>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col gap-2">
                    <span className="font-mono text-xs font-semibold text-primary">
                      Gross Earnings ≥ CHF 120,000 / year
                    </span>
                    <p className="text-xs text-on-surface-variant">
                      Mandatory entry into the Ordinary Tax Assessment (NOV). Deducted withholding tax is credited against the final tax calculation for municipal and cantonal rates.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60 text-xs">
                  <span className="font-semibold text-on-surface">Voluntary Election &amp; Forfeiture Deadline: </span>
                  <span>{permit.sections.novTaxFiling}</span>
                </div>
              </div>
            </section>

            {/* Section 04: How to Renew & What's Next */}
            <section id="renewal-pathways" className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-secondary font-semibold">04</span>
                  <h2 className="text-xl font-semibold text-primary">
                    How to Renew &amp; What&apos;s Next
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Lifecycle &amp; Transition
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60">
                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-primary">
                    Routine Renewal Protocol
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {permit.sections.renewalProtocol}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-primary">
                    Ascent to C Permit (Settlement)
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {permit.sections.cPermitPathway}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 05: Special Transitions (Demonstrating verified data discipline) */}
            <section id="unverified-state" className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-on-surface-muted font-semibold">05</span>
                  <h2 className="text-xl font-semibold text-on-surface-variant">
                    Special Transitions: Self-Employment
                  </h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Under Review
                </span>
              </div>

              <div className="p-6 bg-surface-container-low rounded border border-dashed border-outline-variant flex flex-col sm:flex-row items-start gap-4">
                <Clock className="w-8 h-8 text-outline shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-on-surface">
                      Data Not Yet Verified
                    </span>
                    <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-mono text-[10px] rounded uppercase font-semibold">
                      Pending Editorial Audit
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Our editorial research desk is currently reviewing cantonal discretionary practices with SEM guidelines regarding transitions from third-country dependent employment to self-employment (<em>Selbstständigerwerbende</em>). Sourced analysis will be published once verified. In the interim, consult your cantonal migration office.
                  </p>
                  <div className="font-mono text-xs text-on-surface-muted pt-1">
                    Reference: Art. 19–21 FNIA · <Link href="/methodology" className="underline hover:text-primary">Our Editorial Standard</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 06: FAQs */}
            <section id="faqs" className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 bg-surface-container-high/40 p-3 rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-secondary font-semibold">06</span>
                  <h2 className="text-xl font-semibold text-primary">Frequently Asked Questions</h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                  Common Inquiries
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {permit.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-2"
                  >
                    <h3 className="text-sm font-semibold text-primary flex items-start gap-2">
                      <span className="font-mono text-secondary text-xs">Q{idx + 1}:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed pl-5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Rail Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-5 rounded shadow-sm border border-outline-variant/60 sticky top-24 flex flex-col gap-6">
              <div className="flex flex-col gap-1 pb-3 bg-surface-container-low p-2.5 rounded">
                <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">
                  Page Contents
                </span>
                <span className="text-base font-semibold text-primary">
                  {permit.code} Permit Guide
                </span>
              </div>

              <nav className="flex flex-col gap-1 text-xs">
                <a
                  href="#legal-scope"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-primary font-medium"
                >
                  <span>01 Legal Foundation</span>
                  <span className="font-mono text-[11px] text-on-surface-muted">AIG 33</span>
                </a>
                <a
                  href="#employment-labor"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-on-surface-variant hover:text-on-surface"
                >
                  <span>02 Labor &amp; Mobility</span>
                  <span className="font-mono text-[11px] text-on-surface-muted">CO 319</span>
                </a>
                <a
                  href="#taxation"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-on-surface-variant hover:text-on-surface"
                >
                  <span>03 Quellensteuer Tax</span>
                  <span className="font-mono text-[11px] text-on-surface-muted">DBG 83</span>
                </a>
                <a
                  href="#renewal-pathways"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-on-surface-variant hover:text-on-surface"
                >
                  <span>04 Renewal &amp; C Transition</span>
                  <span className="font-mono text-[11px] text-on-surface-muted">AIG 34</span>
                </a>
                <a
                  href="#unverified-state"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-on-surface-variant hover:text-on-surface"
                >
                  <span>05 Self-Employment</span>
                  <span className="font-mono text-[10px] uppercase text-outline">Pending</span>
                </a>
                <a
                  href="#faqs"
                  className="py-2 px-3 rounded hover:bg-surface-container transition-colors flex items-center justify-between text-on-surface-variant hover:text-on-surface"
                >
                  <span>06 Sourced FAQs</span>
                  <span className="font-mono text-[11px] text-on-surface-muted">Q&amp;A</span>
                </a>
              </nav>

              {/* Cantonal Variations Info Box */}
              <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
                  Cantonal Variations
                </span>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Tax percentages, communal multipliers, and administrative processing fees vary across all 26 cantons.
                </p>
                <Link
                  href="/cantons"
                  className="text-xs text-primary font-mono font-semibold hover:underline flex items-center justify-between pt-1"
                >
                  <span>Explore all 26 cantons</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Calculator Callout Box */}
              <div className="p-4 bg-primary text-white rounded flex flex-col gap-2 shadow-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider opacity-80">
                  Gross Pay Converter
                </span>
                <h4 className="text-sm font-semibold">Convert your contract salary</h4>
                <p className="text-xs opacity-90">
                  Calculate hourly, monthly, and 12 vs 13 month distributions.
                </p>
                <Link
                  href="/calculator"
                  className="mt-2 py-2 px-3 bg-surface-container-lowest text-primary text-xs font-mono rounded font-semibold text-center hover:bg-surface-container-high transition-colors"
                >
                  Open Pay Calculator →
                </Link>
              </div>

              <div className="p-3 bg-surface-container rounded flex items-center gap-2 font-mono text-[11px] text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Independent Information Guide · Non-Governmental</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
