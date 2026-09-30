import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import { CantonDirectory } from "@/components/CantonDirectory";
import { Layers, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Swiss Cantons & Tax Overview: Quellensteuer & NOV | Labour Switzerland",
  description:
    "Plain-English overview of Swiss cantonal tax sovereignty. Understand the 3-tier tax system (Bund, Kanton, Gemeinde), Quellensteuer withholding, and all 26 cantonal offices.",
  alternates: {
    canonical: "https://labourswitzerland.com/cantons",
  },
};

export default function CantonsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Explanatory overview of cantonal taxation. Not tax advice or an official cantonal tax service.
            </span>
          </div>
          <Link href="/about" className="hidden sm:inline hover:text-primary underline shrink-0">
            About Our Project
          </Link>
        </div>
      </aside>

      {/* Top Meta & Title Bar */}
      <div className="w-full bg-surface-container-low py-8 px-6 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-6">
          <Breadcrumb
            items={[
              { name: "Cantons", href: "/cantons" },
              { name: "Tax Sovereignty & Residency" },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div className="flex flex-col gap-2 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                Cantons &amp; Tax Overview
              </h1>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Understanding federalism: How cantonal sovereignty shapes withholding tax (<em>Quellensteuer</em>), municipal tax multipliers (<em>Steuerfuss</em>), and residency procedures across all 26 cantons.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 bg-surface-container-lowest px-3 py-2 rounded border border-outline-variant/60 shadow-sm font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-on-surface-variant uppercase">Withholding Tax Framework · 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 py-12 flex flex-col gap-12 w-full">
        {/* Trust Card: ESTV Official Verification */}
        <TrustCard
          authority="ESTV / AFC"
          authorityFull="Federal Tax Administration (Eidgenössische Steuerverwaltung)"
          legalBasis="Federal Law on Direct Tax Harmonisation (StHG SR 642.14 / DBG SR 642.11)"
          verificationPeriod="VERIFIED 2025"
          verificationDate="Audited Jan 2025"
          officialUrl="https://www.estv.admin.ch"
          sourceLabel="Federal Tax Administration Gazette"
        />

        {/* Educational Framing: 3-Tier Layering System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs text-secondary font-semibold uppercase tracking-wider">
              Federal Principles
            </span>
            <h2 className="text-2xl font-semibold text-primary tracking-tight">
              Why Swiss tax cannot be summarized in a single rate
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Switzerland is composed of 26 sovereign cantons and over 2,130 municipalities. If you hold a B or L permit earning under CHF 120,000/year, your employer automatically deducts <strong className="text-on-surface">Quellensteuer</strong> (tax at source).
            </p>
            <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted font-semibold">
                Important Note
              </span>
              <p className="text-xs text-on-surface-variant">
                Because rates vary down to the communal postal code, published &quot;average Swiss tax rates&quot; are mathematical abstractions that do not reflect actual pay slip deductions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Layer 1 */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-xs text-on-surface-muted">
                  <span>LAYER 01</span>
                  <span>Bund</span>
                </div>
                <h3 className="text-base font-semibold text-primary">Direct Federal Tax</h3>
                <span className="font-mono text-xs text-secondary font-medium">Bundessteuer</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Federal tax component identical across all 26 cantons. Set by the Federal Assembly, progression curves apply uniformly.
                </p>
              </div>
              <div className="pt-3 border-t border-surface-container font-mono text-[11px] text-on-surface font-semibold">
                Uniform nationally
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-xs text-on-surface-muted">
                  <span>LAYER 02</span>
                  <span>Kanton</span>
                </div>
                <h3 className="text-base font-semibold text-primary">Cantonal Tax</h3>
                <span className="font-mono text-xs text-secondary font-medium">Kantonssteuer</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Set sovereignly by each cantonal parliament. Base tax rates (<em>Einfache Staatssteuer</em>) differ radically from Zurich to Geneva or Zug.
                </p>
              </div>
              <div className="pt-3 border-t border-surface-container font-mono text-[11px] text-on-surface font-semibold">
                26 Sovereign Codes
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-xs text-on-surface-muted">
                  <span>LAYER 03</span>
                  <span>Gemeinde</span>
                </div>
                <h3 className="text-base font-semibold text-primary">Municipal Tax</h3>
                <span className="font-mono text-xs text-secondary font-medium">Gemeindesteuer</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Determined by your specific commune of residence via a local tax multiplier (<em>Steuerfuss</em>). Moving one train stop across a communal border alters monthly deductions.
                </p>
              </div>
              <div className="pt-3 border-t border-surface-container font-mono text-[11px] text-on-surface font-semibold">
                2,130+ Communal Multipliers
              </div>
            </div>
          </div>
        </div>

        {/* Visual Stack Flow Strip */}
        <div className="bg-surface-container p-6 rounded flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/60">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary">
                Total Effective Withholding Deduction (Quellensteuer)
              </span>
              <span className="text-xs text-on-surface-variant">
                Monthly pay slips aggregate all three components into a single tariff line (e.g. Tarif A0, B1).
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs bg-surface-container-lowest px-4 py-2 rounded shadow-sm border border-outline-variant/60">
            <span className="text-primary font-bold">Bund</span>
            <span className="text-outline">+</span>
            <span className="text-primary font-bold">Kanton</span>
            <span className="text-outline">+</span>
            <span className="text-primary font-bold">Gemeinde</span>
            <span className="text-outline">=</span>
            <span className="text-secondary font-bold">Tarif Source Rate</span>
          </div>
        </div>

        {/* Cantonal Archetypes: 3 Regional Profiles */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-secondary uppercase tracking-wider font-semibold">
              Cantonal Archetypes
            </span>
            <h2 className="text-2xl font-semibold text-primary tracking-tight">
              Structured Regional Profiles
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-3xl">
              Without speculating on personalized numerical rates, cantonal frameworks follow distinct fiscal models balanced against housing scarcity and social protections.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile 1: Central Switzerland */}
            <div className="bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    PROFILE 01
                  </span>
                  <span className="font-mono text-xs text-secondary font-semibold">ZG · SZ · NW</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Central Switzerland</h3>
                  <span className="text-xs text-on-surface-variant">Zug, Schwyz, Nidwalden</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Low cantonal and communal multipliers resulting in lower withholding tax deductions, balanced against highly competitive residential real estate markets.
                </p>
                <div className="flex flex-col gap-1.5 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Low cantonal &amp; communal multipliers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Streamlined e-Government tax administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Constrained private housing inventory</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 flex items-center justify-between border-t border-surface-container">
                <span className="font-mono text-[10px] uppercase text-on-surface-muted">Official Portal</span>
                <a
                  href="https://zg.ch/de/steuern-finanzen/steuern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Steuerverwaltung Zug</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Profile 2: Urban Economic Hubs */}
            <div className="bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    PROFILE 02
                  </span>
                  <span className="font-mono text-xs text-secondary font-semibold">ZH · BS · BE</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Urban Economic Hubs</h3>
                  <span className="text-xs text-on-surface-variant">Zurich, Basel-Stadt, Bern</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Moderate progressive tax schedules paired with dense public infrastructure, extensive metropolitan transit systems, and high NOV conversion rates.
                </p>
                <div className="flex flex-col gap-1.5 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Standard NOV retroactive filing thresholds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>High municipal schooling &amp; childcare network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Broadest corporate &amp; research labor markets</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 flex items-center justify-between border-t border-surface-container">
                <span className="font-mono text-[10px] uppercase text-on-surface-muted">Official Portal</span>
                <a
                  href="https://www.zh.ch/de/steuern-finanzen/steuern.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Steueramt Zürich</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Profile 3: Romandie / West */}
            <div className="bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between overflow-hidden">
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    PROFILE 03
                  </span>
                  <span className="font-mono text-xs text-secondary font-semibold">GE · VD · NE</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Romandie / Western Hubs</h3>
                  <span className="text-xs text-on-surface-variant">Geneva, Vaud, Neuchâtel</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Progressive income taxation balanced through family quotient systems (<em>quotient familial</em>), comprehensive public health subsidies, and cantonal minimum wage legislation.
                </p>
                <div className="flex flex-col gap-1.5 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Cantonal minimum wages (GE CHF 24.32/h)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Family quotient mitigating multi-earner tax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Active cross-border (G permit) commuter treaties</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 flex items-center justify-between border-t border-surface-container">
                <span className="font-mono text-[10px] uppercase text-on-surface-muted">Official Portal</span>
                <a
                  href="https://www.ge.ch/consulter-declarer-impots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Fiscale Genève</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Rights: NOV Retrospective Assessment */}
        <div className="bg-surface-container-lowest p-8 rounded shadow-sm border border-outline-variant/60 flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-3 lg:max-w-md shrink-0">
            <span className="font-mono text-xs text-secondary font-semibold uppercase tracking-wider">
              Tax Rights &amp; Procedures
            </span>
            <h3 className="text-2xl font-semibold text-primary tracking-tight">
              The Right to Retrospective Assessment (NOV)
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Under revised Federal Law (DBG / StHG), foreign workers taxed at source can petition to replace the generic tariff with an ordinary tax return (<em>Nachträgliche ordentliche Veranlagung</em>) to claim individual deductions.
            </p>
            <div className="bg-error-container p-3 rounded flex items-center gap-2.5 mt-2 text-error font-mono text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Strict Forfeiture Deadline: March 31</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/60 flex flex-col gap-1.5">
              <span className="font-mono font-semibold text-primary">01 · Voluntary Filing</span>
              <p className="text-on-surface-variant">
                B and L permit holders earning under CHF 120,000 may file an NOV request by March 31 of the year following the tax year.
              </p>
            </div>
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/60 flex flex-col gap-1.5">
              <span className="font-mono font-semibold text-primary">02 · Deductible Allowances</span>
              <p className="text-on-surface-variant">
                Unlocks deductions: Pillar 3a pension contributions, 2nd pillar pension buy-ins, actual documented childcare costs, and training expenses.
              </p>
            </div>
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/60 flex flex-col gap-1.5">
              <span className="font-mono font-semibold text-primary">03 · Mandatory Threshold</span>
              <p className="text-on-surface-variant">
                If gross annual earnings exceed CHF 120,000, NOV filing is legally mandatory across all 26 cantons.
              </p>
            </div>
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/60 flex flex-col gap-1.5">
              <span className="font-mono font-semibold text-primary">04 · Irrevocable Status</span>
              <p className="text-on-surface-variant">
                Once granted, the taxpayer remains in the ordinary assessment framework for all subsequent tax years.
              </p>
            </div>
          </div>
        </div>

        {/* Directory of All 26 Cantonal Migration & Tax Offices */}
        <section className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Authorities Directory
            </span>
            <h2 className="text-2xl font-semibold text-primary tracking-tight">
              Cantonal Authorities Directory (All 26 Cantons)
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Direct official portals for cantonal tax administrations and migration offices across the Swiss Confederation.
            </p>
          </div>

          <CantonDirectory />
        </section>
      </div>
    </div>
  );
}
