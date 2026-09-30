import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F2] border-t border-[#E5E5DF] mt-16">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#E5E5DF]">
          {/* Col 1: Identity & Legal Statement */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary text-base">Labour Switzerland</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Independent public information resource for international workers, cross-border commuters, and employers in the Swiss Confederation. Not affiliated with or operated by SEM, SECO, the Federal Statistical Office, or any canton.
            </p>
            <div className="font-mono text-xs text-on-surface-variant flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Verified Legal Framework 2025</span>
            </div>
          </div>

          {/* Col 2: Statutory Guides */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
              Statutory Guides
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <li className="flex items-center justify-between">
                <Link href="/permits/b-permit-switzerland" className="hover:text-primary transition-colors">
                  B Permit (Residency)
                </Link>
                <span className="font-mono text-[11px] text-on-surface-muted">Art. 33 AIG</span>
              </li>
              <li className="flex items-center justify-between">
                <Link href="/permits/l-permit-switzerland" className="hover:text-primary transition-colors">
                  L Permit (Short-term)
                </Link>
                <span className="font-mono text-[11px] text-on-surface-muted">Art. 32 AIG</span>
              </li>
              <li className="flex items-center justify-between">
                <Link href="/permits/g-permit-switzerland" className="hover:text-primary transition-colors">
                  G Permit (Cross-border)
                </Link>
                <span className="font-mono text-[11px] text-on-surface-muted">Art. 35 AIG</span>
              </li>
              <li className="flex items-center justify-between">
                <Link href="/permits/c-permit-switzerland" className="hover:text-primary transition-colors">
                  C Permit (Settlement)
                </Link>
                <span className="font-mono text-[11px] text-on-surface-muted">Art. 34 AIG</span>
              </li>
              <li>
                <Link href="/wages/minimum-wage-switzerland" className="hover:text-primary transition-colors">
                  Cantonal Minimum Wage Rules
                </Link>
              </li>
              <li>
                <Link href="/wages/13th-month-salary-switzerland" className="hover:text-primary transition-colors">
                  13th Month Salary Statutory Rule
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Federal Portals */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
              Official Federal Portals
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <li>
                <a
                  href="https://www.sem.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>SEM (State Secretariat for Migration)</span>
                  <span className="font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.seco.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>SECO (Economic Affairs)</span>
                  <span className="font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>FSO / BFS (Statistical Office)</span>
                  <span className="font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://swisstaxcalculator.estv.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>ESTV (Official Net Tax Calculator)</span>
                  <span className="font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.ch.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>ch.ch (Swiss Civic Gateway)</span>
                  <span className="font-mono">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Editorial */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
              Trust &amp; Legal
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <li>
                <Link href="/methodology" className="hover:text-primary transition-colors">
                  Sourcing Methodology
                </Link>
              </li>
              <li>
                <Link href="/cantons" className="hover:text-primary transition-colors">
                  26 Cantons Tax Directory
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Independence &amp; Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy &amp; Data Ethics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Legal Editorial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>© 2025 Labour Switzerland. Non-commercial civic information service. All official figures sourced from Swiss Federal Authorities.</p>
          <div className="font-mono text-xs flex items-center gap-4 text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              CH-FED-2025
            </span>
            <span className="text-outline-variant">|</span>
            <span>SR 142.20 OASA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
