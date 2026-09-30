"use client";

import { useState } from "react";
import { CANTONS } from "@/data/cantons";
import { Search } from "lucide-react";

export function CantonDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMinWage, setFilterMinWage] = useState(false);

  const filteredCantons = CANTONS.filter((canton) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      canton.code.toLowerCase().includes(term) ||
      canton.name.toLowerCase().includes(term) ||
      canton.nameEn.toLowerCase().includes(term) ||
      canton.taxAuthority.toLowerCase().includes(term) ||
      canton.migrationAuthority.toLowerCase().includes(term);

    const matchesMinWage = filterMinWage ? canton.hasCantonalMinWage : true;
    return matchesSearch && matchesMinWage;
  });

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-outline absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Filter canton or code (e.g. ZH, Geneva, BS)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 pl-9 pr-3 rounded bg-surface-container-lowest font-mono text-xs text-on-surface placeholder:text-outline border border-outline-variant/60 focus:outline-none focus:border-primary shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilterMinWage(!filterMinWage)}
            className={`px-3 py-2 rounded text-xs font-mono transition-all border ${
              filterMinWage
                ? "bg-secondary text-white border-secondary font-semibold"
                : "bg-surface-container-lowest text-on-surface-variant border-outline-variant/60 hover:bg-surface-container-low"
            }`}
          >
            {filterMinWage ? "✓ Showing 5 Min Wage Cantons" : "Filter: Cantons with Min Wage (5)"}
          </button>
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-surface-container-lowest rounded shadow-sm border border-outline-variant/60 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 bg-surface-container-low px-6 py-3 font-mono text-[11px] text-on-surface-variant uppercase tracking-wider border-b border-surface-container">
          <div className="col-span-1">Code</div>
          <div className="col-span-3">Canton / Republic</div>
          <div className="col-span-4">Official Tax Administration</div>
          <div className="col-span-4">Migration &amp; Population Office</div>
        </div>

        <div className="flex flex-col divide-y divide-surface-container">
          {filteredCantons.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-on-surface-variant">
              No cantons matched your search criteria.
            </div>
          ) : (
            filteredCantons.map((canton) => (
              <div
                key={canton.code}
                className="grid grid-cols-1 md:grid-cols-12 px-6 py-3.5 hover:bg-surface-bright transition-colors items-center gap-2 md:gap-0"
              >
                <div className="col-span-1 font-mono text-xs text-primary font-bold">
                  {canton.code}
                </div>
                <div className="col-span-3 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-on-surface">
                      {canton.name}
                    </span>
                    {canton.hasCantonalMinWage && (
                      <span className="font-mono text-[10px] px-1.5 py-0.2 bg-secondary-container text-secondary font-semibold rounded">
                        MIN WAGE
                      </span>
                    )}
                  </div>
                  {canton.minWageNote && (
                    <span className="font-mono text-[10px] text-secondary font-medium">
                      {canton.minWageNote}
                    </span>
                  )}
                </div>

                <div className="col-span-4 text-xs font-mono">
                  <a
                    href={canton.taxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 font-medium truncate max-w-full"
                  >
                    <span className="truncate">{canton.taxAuthority}</span>
                    <span className="shrink-0 text-[11px]">↗</span>
                  </a>
                </div>

                <div className="col-span-4 text-xs font-mono">
                  <a
                    href={canton.migrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary hover:underline inline-flex items-center gap-1 truncate max-w-full"
                  >
                    <span className="truncate">{canton.migrationAuthority}</span>
                    <span className="shrink-0 text-[11px]">↗</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
