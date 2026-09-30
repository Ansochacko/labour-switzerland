import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Labour Switzerland | Independent Information Guide",
  description:
    "Learn about Labour Switzerland's mission: delivering plain-English, permit-first guidance on residence permits, tax at source, and wage baselines in Switzerland.",
  alternates: {
    canonical: "https://labourswitzerland.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Informational overview compiled for general educational reference. Non-governmental.
            </span>
          </div>
          <Link href="/disclaimer" className="hidden sm:inline hover:text-primary underline shrink-0">
            Legal Disclaimer
          </Link>
        </div>
      </aside>

      <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
        <Breadcrumb items={[{ name: "About", href: "/about" }]} />

        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Our Mission &amp; Purpose
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            About Labour Switzerland
          </h1>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Labour Switzerland was established to solve a critical information deficit: While official Swiss portals provide comprehensive legal ordinances, foreign professionals and cross-border workers moving to the Confederation often struggle to understand how their permit classification directly dictates their net take-home pay, tax liability, and career mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
            <h2 className="text-base font-semibold text-primary">The Permit-First Philosophy</h2>
            <p>
              Switzerland already possesses world-class official wage calculation tools—most notably SECO&apos;s Salarium. However, almost all existing salary calculators treat residence permits as a minor checkbox rather than the foundational legal reality.
            </p>
            <p>
              A software engineer on a B permit earning CHF 110,000 in Zurich has a vastly different tax and mobility experience than the same engineer on a G permit commuting from Saint-Louis or an L permit on a 10-month contract. We place your permit at the center of the equation.
            </p>
          </div>

          <div className="p-6 bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
            <h2 className="text-base font-semibold text-primary">Independence &amp; Non-Affiliation</h2>
            <p>
              Labour Switzerland is an independent information service. We are not a government agency, we do not issue residence authorizations, and we are not affiliated with or operated by the State Secretariat for Migration (SEM), the State Secretariat for Economic Affairs (SECO), or any cantonal migration/tax office.
            </p>
          <p>
            Our work is entirely funded through transparent educational operations without commercial sponsorship compromise.
          </p>
        </div>
      </div>

      {/* Editorial Principles */}
      <section className="bg-surface-container-low p-6 rounded border border-outline-variant/60 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-primary">Our Core Editorial Commitments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60">
            <span className="font-mono text-secondary font-bold block mb-1">01. No Fabricated Data</span>
            <p className="text-on-surface-variant">
              Every wage quartile, tax threshold, and social contribution rate is traced directly to official FSO or federal decrees.
            </p>
          </div>
          <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60">
            <span className="font-mono text-secondary font-bold block mb-1">02. Plain English Clarity</span>
            <p className="text-on-surface-variant">
              Translating complex statutory terms (<em>Quellensteuer</em>, <em>Verfallsanzeige</em>, <em>Inländervorrang</em>) into practical, actionable English.
            </p>
          </div>
          <div className="p-4 bg-surface-container-lowest rounded border border-outline-variant/60">
            <span className="font-mono text-secondary font-bold block mb-1">03. Respect for Federalism</span>
            <p className="text-on-surface-variant">
              We never present one canton&apos;s tax rate or minimum wage as universal across Switzerland.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-2 flex flex-wrap gap-4">
        <Link
          href="/methodology"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-mono text-xs uppercase tracking-wider rounded font-semibold hover:bg-primary-container"
        >
          <span>Read Verification Methodology</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/disclaimer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest text-primary border border-outline-variant rounded font-mono text-xs uppercase tracking-wider font-semibold hover:bg-surface-container"
        >
          <span>Legal Disclaimer</span>
        </Link>
      </div>
    </div>
    </div>
  );
}
