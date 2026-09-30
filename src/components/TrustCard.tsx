import React from "react";

interface TrustCardProps {
  authority: string; // e.g. 'SEM', 'SECO', 'FSO / BFS', 'ESTV / AFC'
  authorityFull?: string;
  legalBasis: string; // e.g. 'Art. 33 AIG (SR 142.20) / OASA Art. 19-24'
  verificationPeriod?: string; // e.g. 'VERIFIED FOR 2025/Q1'
  verificationDate?: string; // e.g. '18 Jan 2025 by Legal Bureau'
  officialUrl?: string;
  sourceLabel?: string;
}

export function TrustCard({
  authority,
  authorityFull,
  legalBasis,
  verificationPeriod = "VERIFIED FOR 2025",
  verificationDate = "Verified Jan 2025 · Legal Editorial",
  officialUrl = "https://www.fedlex.admin.ch",
  sourceLabel = "Official Federal Source",
}: TrustCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded border border-outline-variant/60 border-t-[3px] border-t-secondary p-4 shadow-sm relative">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary bg-surface-container-low px-2 py-0.5 rounded">
            {authority}
          </span>
          {authorityFull && (
            <span className="text-xs text-on-surface-variant font-mono">
              {authorityFull}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary-container text-secondary font-mono text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          <span>{verificationPeriod}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2.5 text-xs font-mono border-y border-surface-container">
        <div>
          <span className="text-on-surface-muted block text-[10px] uppercase">
            Legal &amp; Survey Basis
          </span>
          <span className="text-on-surface font-medium block truncate">
            {legalBasis}
          </span>
        </div>
        <div>
          <span className="text-on-surface-muted block text-[10px] uppercase">
            Verification Protocol
          </span>
          <span className="text-on-surface font-medium block truncate">
            {verificationDate}
          </span>
        </div>
      </div>

      <div className="pt-2.5 flex items-center justify-between text-xs font-mono text-on-surface-variant">
        <span>{sourceLabel}</span>
        {officialUrl && (
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Fedlex Gazette / Registry</span>
            <span className="text-[11px]">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
