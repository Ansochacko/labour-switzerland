"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/permits", label: "Permits" },
    { href: "/wages", label: "Wages & Benchmarks" },
    { href: "/calculator", label: "Gross Pay Calculator" },
    { href: "/cantons", label: "Cantons & Tax" },
    { href: "/methodology", label: "Methodology" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FBFBF9] border-b border-[#E5E5DF]">
      <div className="h-16 max-w-container mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 280 48"
              fill="none"
              className="h-8 w-auto shrink-0"
              aria-label="Labour Switzerland Logo"
            >
              <rect x="0" y="8" width="32" height="32" rx="4" fill="#1C1E21" />
              <rect x="13.5" y="15" width="5" height="18" rx="0.5" fill="#FBFBF9" />
              <rect x="7" y="21.5" width="18" height="5" rx="0.5" fill="#FBFBF9" />
              <text
                x="44"
                y="26"
                fill="#1C1E21"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="14"
                fontWeight="700"
                letterSpacing="0.08em"
              >
                LABOUR SWITZERLAND
              </text>
              <text
                x="44"
                y="37"
                fill="#757E88"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="9"
                fontWeight="500"
                letterSpacing="0.04em"
              >
                INDEPENDENT CIVIC GUIDE · CH
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 ml-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-5 text-sm transition-colors ${
                    active
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Meta & Language Indicator */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 bg-surface-container-high rounded border border-outline-variant/60">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
              Independent Guide · Updated 2025
            </span>
          </div>

          <div className="flex items-center font-mono text-xs text-on-surface-variant border border-outline-variant/60 rounded px-1.5 py-0.5 bg-surface-container-lowest">
            <span className="text-primary font-semibold px-1">EN</span>
            <span className="text-outline-variant">|</span>
            <span className="px-1 text-on-surface-muted" title="Federal DE statutory references in dossiers">DE</span>
            <span className="text-outline-variant">|</span>
            <span className="px-1 text-on-surface-muted" title="Federal FR statutory references in dossiers">FR</span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FBFBF9] border-b border-[#E5E5DF] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-sm ${
                isActive(link.href)
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-outline-variant flex items-center justify-between text-xs font-mono text-on-surface-variant">
            <span>SR 142.20 OASA Compliant</span>
            <span className="text-secondary font-semibold">Live Q1 2025</span>
          </div>
        </div>
      )}
    </header>
  );
}
