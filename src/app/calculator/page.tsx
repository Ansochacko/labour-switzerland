import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CalculatorWidget } from "@/components/CalculatorWidget";
import { ExternalLink, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Gross Pay Calculator Switzerland (Hourly, Monthly, 13th) | Labour Switzerland",
  description:
    "Free gross pay and hourly wage converter for Swiss employment contracts. Calculate 12 vs 13 month distributions, vacation pay allowance, and review standard payroll deductions.",
  alternates: {
    canonical: "https://labourswitzerland.com/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Top Independence Notice Banner */}
      <aside aria-label="Independence disclosure" className="w-full bg-surface-container-low border-b border-outline-variant/60 py-2.5 px-6">
        <div className="max-w-container mx-auto flex items-center justify-between gap-4 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
            <span>
              <strong>Independent Tool:</strong> Estimates gross contractual conversions only. Not an official tax calculator or government portal.
            </span>
          </div>
          <Link href="/about" className="hidden sm:inline hover:text-primary underline shrink-0">
            About Our Project
          </Link>
        </div>
      </aside>

      {/* Top Hero Strip */}
      <div className="w-full bg-surface-container-low py-8 px-6 border-b border-outline-variant/60">
        <div className="max-w-container mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb items={[{ name: "Gross Pay Calculator", href: "/calculator" }]} />
            <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-on-surface-variant font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Swiss Labor Law Baseline (40–42.5 hrs/wk)</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
              Gross Pay &amp; Hourly Converter
            </h1>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Convert hourly, monthly, or annualized gross wages according to Swiss standard working hours (40 to 42.5 hrs/week) and 12 vs 13 month contract structures.
            </p>
          </div>

          {/* Honest Scope Callout */}
          <div className="w-full bg-surface-container-lowest p-6 rounded shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden border border-outline-variant/60">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
            <div className="flex flex-col gap-2 pl-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-secondary-container text-secondary font-semibold rounded">
                  ESTIMATE ONLY · GROSS SALARY
                </span>
                <span className="font-mono text-[11px] text-on-surface-muted flex items-center gap-1">
                  Independent educational tool
                </span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                This tool calculates <strong className="text-on-surface font-semibold">gross contractual figures only</strong>. It intentionally DOES NOT calculate net pay or individual income tax. Swiss net take-home depends heavily on your canton, municipality (<em>Gemeinde</em>), age-bracket pension deductions (BVG / 2nd Pillar), accident insurance (NBU), and marital status.
              </p>
            </div>

            {/* Official ESTV Calculator link-out */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 bg-surface-container-low p-4 rounded border border-outline-variant/60">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-primary">Need exact net take-home?</span>
                <span className="font-mono text-[10px] text-on-surface-variant">
                  Federal Tax Admin (ESTV) Calculator
                </span>
              </div>
              <a
                href="https://swisstaxcalculator.estv.admin.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-mono rounded hover:bg-primary-container transition-all font-semibold"
              >
                <span>Visit Official ESTV Tool</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Engine */}
      <div className="max-w-container mx-auto px-6 py-12 w-full">
        <CalculatorWidget />
      </div>
    </div>
  );
}
