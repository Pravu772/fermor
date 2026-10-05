"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { LogoWordmark } from "@/components/ui/LogoWordmark";

const NAV_LINKS = [
  { href: "#sip-calculator", label: "SIP Growth" },
  { href: "#loan-optimizer", label: "Loan Comparison" },
  { href: "#cashflow-tool", label: "Cashflow Tool" },
  { href: "#philosophy", label: "How It Works" },
  { href: "#app-suite", label: "App Suite" },
  { href: "#insights", label: "Insights" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F5] border-b border-[#E4E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0E2F22] rounded-md"
          aria-label="Fermor Homepage"
        >
          <LogoWordmark showBadge={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-[#4A5750] hover:text-[#0E2F22] hover:bg-[#F3EFE6] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#sip-calculator"
            className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0E2F22] hover:bg-[#F3EFE6] rounded-md transition-colors"
          >
            Calculators
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#FAF9F5] bg-[#0E2F22] hover:bg-[#164332] active:scale-[0.98] rounded-md transition-all shadow-sm"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-md text-[#111A15] hover:bg-[#F3EFE6] focus-visible:ring-2 focus-visible:ring-[#0E2F22]"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Accessible Mobile Drawer (Solid Background, No Blur) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-18 bottom-0 bg-[#FAF9F5] border-t border-[#E4E0D6] z-50 p-6 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            <div className="pb-3 mb-2 border-b border-[#E4E0D6] flex items-center gap-2 text-xs font-semibold text-[#8F4A00]">
              <ShieldCheck className="w-4 h-4 text-[#8F4A00]" />
              <span>100% Client-Side Calculations • No Login Required</span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-[#111A15] hover:bg-[#F3EFE6] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#4A5750]" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E4E0D6] flex flex-col gap-3">
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-lg bg-[#0E2F22] text-[#FAF9F5] text-center text-sm font-semibold hover:bg-[#164332] shadow-sm flex items-center justify-center gap-2"
            >
              <span>Join Early App Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-[#4A5750]">
              Educational tool. Fermor is not a SEBI-registered adviser.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
