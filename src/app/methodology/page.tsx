import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import { ShieldCheck, CheckCircle2, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Sourcing Methodology & Legal Standards | Labour Switzerland",
  description:
    "How Labour Switzerland verifies Swiss residence permits, withholding tax rules, and wage benchmarks against SEM, SECO, and FSO primary statutes.",
  alternates: {
    canonical: "https://labourswitzerland.com/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
      <Breadcrumb items={[{ name: "Methodology & Verification", href: "/methodology" }]} />

      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
            Editorial Standards &amp; Research Integrity
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
          Sourcing &amp; Verification Methodology
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Swiss labor regulations and immigration rules require uncompromising precision. Our editorial framework cross-checks official gazettes and statistical surveys to ensure reliable, high-integrity information.
        </p>
      </div>

      <TrustCard
        authority="FEDLEX / SEM / FSO"
        authorityFull="Official Federal Compendium & Statistical Authority"
        legalBasis="SR 101 (Federal Constitution) / SR 142.20 (FNIA / AIG)"
        verificationPeriod="VERIFIED 2025"
        verificationDate="Reviewed Periodically"
        officialUrl="https://www.fedlex.admin.ch"
        sourceLabel="Federal Legislation Directory"
      />

      {/* 4 Pillars of Verification */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-base">
            <span className="font-mono text-secondary">01.</span>
            <span>Primary Federal Statutes (Fedlex)</span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Every legal assertion regarding B, L, G, or C permits references official publication codes in the Classified Compilation of Federal Legislation (<em>Systematische Rechtssammlung SR</em>), primarily the Foreign Nationals and Integration Act (SR 142.20 FNIA/AIG) and the Code of Obligations (SR 220 CO/OR).
          </p>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-base">
            <span className="font-mono text-secondary">02.</span>
            <span>Empirical Earnings Surveys (FSO / BFS)</span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Wage benchmarks on Labour Switzerland draw from the Swiss Federal Statistical Office (FSO) Structure of Earnings Survey (LSE / ESS), which surveys over 35,000 Swiss enterprises and 1.7 million employment records. We never scrape unverified self-reported survey websites.
          </p>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-base">
            <span className="font-mono text-secondary">03.</span>
            <span>Federal Tax Administration Circulars (ESTV)</span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Withholding tax rules, tariff classifications (Tarif A0, B1, etc.), and the CHF 120,000 retrospective assessment (NOV) framework are anchored to ESTV Circular No. 45 (<em>Kreisschreiben Nr. 45</em>) governing Quellensteuer under the Direct Federal Tax Act (DBG).
          </p>
        </div>

        <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-base">
            <span className="font-mono text-secondary">04.</span>
            <span>The Non-Negotiable Accuracy Rule</span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Where official data for an occupation or cantonal discretionary policy is unavailable or undergoing review, we explicitly display a &quot;Data Not Yet Verified&quot; state. We reject the practice of algorithmic guessing or generating fabricated placeholders to appear complete.
          </p>
        </div>
      </section>

      {/* Primary Authorities Cited */}
      <section className="bg-surface-container-low p-6 rounded border border-outline-variant/60 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-primary">Primary Swiss Federal Authorities Monitored</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-on-surface-variant">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>SEM — State Secretariat for Migration (Bern)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>SECO — State Secretariat for Economic Affairs (Bern)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>FSO / BFS — Federal Statistical Office (Neuchâtel)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>ESTV / AFC — Federal Tax Administration (Bern)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>BSV / OFAS — Federal Social Insurance Office (Bern)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Fedlex — Publication Platform for Federal Law</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
