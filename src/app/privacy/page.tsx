import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Ethics | Labour Switzerland",
  description:
    "Labour Switzerland's privacy policy: strict adherence to the revised Swiss Data Protection Act (revDSG / FADP). Zero tracking cookies, privacy by design.",
  alternates: {
    canonical: "https://labourswitzerland.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
      <Breadcrumb items={[{ name: "Privacy & Data Ethics", href: "/privacy" }]} />

      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
            revDSG / FADP Compliance
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
          Privacy Policy &amp; Data Ethics
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Labour Switzerland operates under a strict principle of minimal data collection, fully aligned with the revised Swiss Federal Act on Data Protection (revDSG / FADP, SR 235.1).
        </p>
      </div>

      <div className="bg-surface-container-lowest p-8 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-primary">1. No Sensitive Salary or Identity Storage</h2>
          <p>
            When you use our Gross Pay Calculator, all mathematical computations are executed locally inside your web browser client-side. We do not store, transmit, or record the wage amounts, work hours, or permit types you model.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-primary">2. No Surveillance Tracking Cookies</h2>
          <p>
            We do not use invasive third-party behavioral profiling trackers. We do not sell user data to credit bureaus, advertisers, or recruitment agencies.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-primary">3. Server Access Logs</h2>
          <p>
            Standard technical server logs (such as IP address, browser user-agent, and requested file path) may be temporarily processed by our hosting infrastructure (Vercel) strictly for edge caching, performance monitoring, and defense against automated attacks. These logs are purged in accordance with standard infrastructure lifecycles.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-primary">4. Your Statutory Rights</h2>
          <p>
            Under Articles 25–29 of the Swiss FADP, you have the right to request information regarding any personal data processed about you, and to request its correction or deletion. For inquiries, contact our data protection desk via our contact portal.
          </p>
        </div>
      </div>
    </div>
  );
}
