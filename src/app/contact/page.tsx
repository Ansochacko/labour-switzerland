import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Mail, AlertCircle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Editorial Desk | Labour Switzerland",
  description:
    "Contact the editorial research desk at Labour Switzerland for data corrections, methodology questions, or general inquiries.",
  alternates: {
    canonical: "https://labourswitzerland.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-container mx-auto px-6 py-12 flex flex-col gap-10">
      <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />

      <div className="flex flex-col gap-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
            Editorial Team
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
          Contact &amp; Corrections Desk
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Have an inquiry regarding our sourcing, or wish to flag a newly updated cantonal ordinance or collective labor agreement? We welcome constructive feedback from researchers, legal practitioners, and workers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact info card */}
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-primary">Editorial Communication</h2>
              <span className="font-mono text-xs text-on-surface-variant">General &amp; Editorial Inquiries</span>
            </div>
          </div>

          <p className="text-xs text-on-surface-variant leading-relaxed">
            For editorial feedback, data corrections, or technical inquiries regarding the portal, please direct inquiries to:
          </p>

          <div className="p-3 bg-surface-container-low rounded border border-outline-variant/60 font-mono text-xs text-primary font-semibold">
            editorial@labourswitzerland.com
          </div>

          <div className="pt-2 text-xs text-on-surface-muted leading-relaxed">
            We aim to review and verify all correction submissions against official Fedlex and SEM publications within 2 business days.
          </div>
        </div>

        {/* Important notice on individual advice */}
        <div className="bg-surface-container-low p-6 rounded border border-outline-variant/60 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <AlertCircle className="w-4 h-4 text-outline" />
            <span>Scope of Inquiries</span>
          </div>

          <div className="space-y-3 text-xs text-on-surface-variant leading-relaxed">
            <p>
              <strong>What we can assist with:</strong> Questions about our methodology, reporting potential discrepancies in cantonal tax links, or proposing newly ratified collective labor agreements for inclusion.
            </p>
            <p>
              <strong>What we cannot provide:</strong> Individual legal representation, personalized tax filing assistance, or intervention in ongoing permit applications before cantonal migration offices. For case-specific legal matters, please consult a licensed Swiss attorney or your cantonal migration authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
