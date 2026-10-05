import Link from "next/link";
import { LogoWordmark } from "@/components/ui/LogoWordmark";
import { ArrowUp, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E4E0D6] pt-16 pb-12 text-[#4A5750]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E4E0D6]">
          {/* Brand & Mission Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="group inline-block">
              <LogoWordmark showBadge={true} />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Clarity for every financial decision. Free calculators, insights and tools that help you understand, plan and grow your money, built for India.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#0E2F22]">
              Fermor Technologies Pvt. Ltd., registered in India
            </div>
          </div>

          {/* Nav Column 1: Calculators */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E2F22]">
              Interactive Calculators
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sip-calculator" className="hover:text-[#0E2F22] transition-colors">
                  SIP Compounding Engine
                </a>
              </li>
              <li>
                <a href="#loan-optimizer" className="hover:text-[#0E2F22] transition-colors">
                  Home Loan Tenure Optimizer (15 vs 20 Yr)
                </a>
              </li>
              <li>
                <a href="#loan-optimizer" className="hover:text-[#0E2F22] transition-colors">
                  PPF Tax-Free Wealth Builder
                </a>
              </li>
              <li>
                <a href="#cashflow-tool" className="hover:text-[#0E2F22] transition-colors">
                  50/30/20 Monthly Cashflow Blueprint
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Upcoming App Suite */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E2F22]">
              Upcoming App Suite
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-1.5">
                <span className="text-[#111A15]">Market</span>
                <span className="text-[10px] text-[#8F4A00] font-semibold">(Soon)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#111A15]">Portfolio</span>
                <span className="text-[10px] text-[#8F4A00] font-semibold">(Soon)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#111A15]">ACT</span>
                <span className="text-[10px] text-[#8F4A00] font-semibold">(Soon)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#111A15]">Ask</span>
                <span className="text-[10px] text-[#8F4A00] font-semibold">(Soon)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#111A15]">For Kids</span>
                <span className="text-[10px] text-[#8F4A00] font-semibold">(Soon)</span>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Insights & Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E2F22]">
              Insights & Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#insights" className="hover:text-[#0E2F22] transition-colors">
                  Indian Tax & Regulatory Explainers
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#0E2F22] transition-colors">
                  The Fermor Framework (Understand, Plan, Act)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0E2F22] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-[#0E2F22] transition-colors">
                  Join Beta Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="pt-8 pb-8 border-b border-[#E4E0D6]">
          <div className="bg-white rounded-2xl border border-[#E4E0D6] p-5 sm:p-6 text-xs leading-relaxed text-[#4A5750] flex flex-col sm:flex-row items-start gap-3">
            <Shield className="w-5 h-5 text-[#8F4A00] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#111A15] block mb-1">
                Regulatory & Educational Disclaimer
              </strong>
              Fermor is an educational financial modeling platform operated by Fermor Technologies Pvt. Ltd. Fermor is not a SEBI-registered investment adviser, stockbroker, portfolio manager, or research analyst. All calculations, projections, and simulations are mathematical models provided solely for general educational purposes. No content on this platform should be construed as financial, tax, or investment advice. Always consult a qualified SEBI-registered professional before making financial commitments. Calculations run in your browser. Your inputs stay on your device unless you choose to save a result.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} Fermor Technologies Pvt. Ltd., registered in India. All rights reserved.</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2F22] hover:underline"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
