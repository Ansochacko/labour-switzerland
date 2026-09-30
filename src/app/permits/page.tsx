import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PERMITS, PERMIT_COMPARISON_MATRIX } from "@/data/permits";
import { ArrowRight, Info } from "lucide-react";

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
      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Guide:</strong> Information is compiled for general reference and is not affiliated with the State Secretariat for Migration (SEM).
            </span>
          </div>
          <Link href="/about" className="hidden sm:inline hover:text-primary underline shrink-0">
            About Our Project
          </Link>
        </div>
      </aside>

      {/* Header Strip */}
      <div className="w-full bg-surface-container-low py-8 px-6 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-4">
          <Breadcrumb items={[{ name: "Permit Guides", href: "/permits" }]} />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  Work &amp; Residence Category Guides
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                Swiss Work Permit Classes (B, L, G, C)
              </h1>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Switzerland regulates foreign employment through distinct categories under the Federal Act on Foreign Nationals and Integration (FNIA / AIG). Understanding your permit determines your career mobility, tax obligations, and eventual path to permanent settlement.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-surface-container-lowest px-3.5 py-2 rounded border border-outline-variant/60 shadow-sm shrink-0">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span className="font-mono text-xs text-on-surface">Informational Reference Guide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Permits Grid - Demoted legal articles to subtle secondary note */}
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
                  <span className="text-xs font-mono text-on-surface-muted bg-surface-container-high px-2 py-0.5 rounded">
                    {permit.statusType}
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
                      Annual Quotas
                    </span>
                    <span className="text-on-surface font-medium">{permit.quotas}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[11px] text-on-surface-muted">
                  Reference: {permit.legalBasis.split("/")[0]}
                </span>
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
              Permit Comparison
            </span>
            <h2 className="text-2xl font-semibold text-primary">
              Key Rights &amp; Restrictions Comparison
            </h2>
            <p className="text-sm text-on-surface-variant">
              Quick side-by-side reference comparing duration, mobility, and tax treatment across the main permit types.
            </p>
          </div>

          <div className="overflow-x-auto bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low font-mono text-xs text-on-surface-variant uppercase tracking-wider border-b border-surface-container">
                  <th className="py-3.5 px-4 font-semibold">Key Parameter</th>
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
