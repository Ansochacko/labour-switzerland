import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer & Independence | Labour Switzerland",
  description:
    "Official disclaimer regarding independence, informational scope, and non-affiliation with the Swiss Federal Government, SEM, SECO, or cantonal authorities.",
  alternates: {
    canonical: "https://labourswitzerland.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
      <Breadcrumb items={[{ name: "Disclaimer & Independence", href: "/disclaimer" }]} />

      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
            Editorial Scope
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
          Disclaimer &amp; Independence Statement
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Please review the following disclosures regarding the scope, limitations, and editorial independence of Labour Switzerland.
        </p>
      </div>

      <div className="bg-surface-container-lowest p-8 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        {/* Core user requirement paragraph */}
        <div className="p-4 bg-surface-container-low rounded border-l-4 border-l-primary flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-primary">
            Advisory Notice
          </span>
          <p className="text-on-surface font-medium leading-relaxed">
            &ldquo;Labour Switzerland provides general informational content about work permits, wages, and working life in Switzerland. We aim to keep information accurate and up to date, but regulations, tax rules, and wage levels can change and vary by canton. Information on this website should not be considered individualized legal, tax, or immigration advice. Always verify important information with the State Secretariat for Migration (SEM), your canton&apos;s tax authority, or a qualified advisor.&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-primary">1. Independence and Non-Affiliation</h2>
          <p>
            Labour Switzerland is an independent information service. <strong>Labour Switzerland is not affiliated with, endorsed by, or operated by the Swiss Federal Government, the State Secretariat for Migration (SEM), the State Secretariat for Economic Affairs (SECO), the Federal Statistical Office (FSO / BFS), the Federal Tax Administration (ESTV), or any of the 26 cantonal administrations.</strong>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-primary">2. No Immigration or Legal Representation</h2>
          <p>
            We do not issue work permits, process visa applications, represent foreign nationals before Swiss authorities, or submit applications to cantonal migration offices (<em>Migrationsamt / Office de la population</em>). All official immigration requests must be lodged directly with the competent cantonal authority.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-primary">3. Scope of Calculators &amp; Estimators</h2>
          <p>
            The salary conversion and tax estimators provided on this website are for illustrative and orientation purposes only. They model gross contractual conversions and standard deduction bands. They do not constitute an official tax assessment or guarantee of take-home earnings. For individualized tax filings, refer to the Federal Tax Administration&apos;s ESTV calculator or your canton&apos;s tax administration.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-primary">4. Accuracy and Updates</h2>
          <p>
            While we continually audit our content against federal gazettes (Fedlex) and official statistical surveys, federal and cantonal statutes are subject to legislative revision. Users should verify statutory article citations directly with official gazettes at <a href="https://www.fedlex.admin.ch" target="_blank" rel="noopener noreferrer" className="text-primary underline">fedlex.admin.ch</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
