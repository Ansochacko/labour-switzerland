import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PERMITS, PERMIT_COMPARISON_MATRIX } from "@/data/permits";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Swiss Work Permits Explained (B, L, G, C) | Labour Switzerland",
  description:
    "Plain-English guide to Swiss residence and work permits. Understand B, L, G, and C permits, EU vs non-EU rules, quotas, and withholding tax at source.",
  alternates: {
    canonical: "https://labourswitzerland.com/permits",
  },
};

export default function PermitsHubPage() {
  const permitList = Object.values(PERMITS);

  return (
    <div className="w-full flex flex-col">
      {/* Header Strip */}
      <div className="w-full bg-surface-container-low py-8 px-6 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-4">
          <Breadcrumb items={[{ name: "Permits", href: "/permits" }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  Residency &amp; Labor Authorizations
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                Swiss Work Permit Classes (B, L, G, C)
              </h1>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Switzerland regulates foreign labor through distinct statutory categories under the Federal Act on Foreign Nationals and Integration (FNIA / AIG). Understanding your permit determines your job mobility, tax regime, and path to permanent residence.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-lowest px-3.5 py-2 rounded border border-outline-variant/60 shadow-sm shrink-0">
              <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
              <span className="font-mono text-xs text-on-surface">SEM Codification SR 142.20</span>
            </div>
          </div>
        </div>
      </div>

      {/* Permits Grid */}
      <div className="max-w-container mx-auto px-6 py-12 w-full flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {permitList.map((permit) => (
            <div
              key={permit.id}
              className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-mono text-lg font-bold">
                      {permit.code}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-primary">{permit.title}</h2>
                      <span className="font-mono text-xs text-on-surface-muted italic">
                        {permit.officialNameDe} / {permit.officialNameFr}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">
                    {permit.legalBasis.split("/")[0]}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                  {permit.shortSummary}
                </p>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-surface-container font-mono text-xs mb-6">
                  <div>
                    <span className="text-on-surface-muted block text-[10px] uppercase">
                      Validity Cycle
                    </span>
                    <span className="text-on-surface font-medium">{permit.validityCycle}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-muted block text-[10px] uppercase">
                      Quota Limit
                    </span>
                    <span className="text-on-surface font-medium">{permit.quotas}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-secondary font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Authority: {permit.sourceAuthority}</span>
                </div>
                <Link
                  href={`/permits/${permit.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-bold hover:underline"
                >
                  <span>Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Permit Matrix Section */}
        <section className="flex flex-col gap-6 pt-6">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Cross-Permit Comparison
            </span>
            <h2 className="text-2xl font-semibold text-primary">
              Statutory Rights &amp; Restrictions Matrix
            </h2>
            <p className="text-sm text-on-surface-variant">
              Direct comparison of key legal criteria governing foreign workers in Switzerland.
            </p>
          </div>

          <div className="overflow-x-auto bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low font-mono text-xs text-on-surface-variant uppercase tracking-wider border-b border-surface-container">
                  <th className="py-3.5 px-4 font-semibold">Feature / Statute</th>
                  <th className="py-3.5 px-4">L Permit (Short-term)</th>
                  <th className="py-3.5 px-4 bg-primary text-white font-semibold">B Permit (Residence)</th>
                  <th className="py-3.5 px-4">G Permit (Commuter)</th>
                  <th className="py-3.5 px-4">C Permit (Settlement)</th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono divide-y divide-surface-container">
                {PERMIT_COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-bright transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary font-sans text-xs">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">{row.l}</td>
                    <td className="py-3 px-4 bg-surface-container-low/50 font-semibold text-primary">
                      {row.b}
                    </td>
                    <td className="py-3 px-4 text-on-surface-variant">{row.g}</td>
                    <td className="py-3 px-4 text-on-surface">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
