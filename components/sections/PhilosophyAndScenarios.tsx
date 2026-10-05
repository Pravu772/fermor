import { CheckCircle2, Compass, Cpu, Target, ArrowRight, UserCheck, Briefcase, Home, TrendingUp } from "lucide-react";

export function PhilosophyAndScenarios() {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#0E2F22]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
              The Fermor Framework
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
            How we approach personal finance in India.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed">
            Most financial apps exist to sell you credit lines, push high-commission mutual funds, or trade volatile stocks. Fermor is built as an unbiased clarity engine—grounded in three steady disciplines.
          </p>
        </div>

        {/* The 3 Core Pillars (Understand, Plan, Act) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Understand */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0E2F22] text-[#FAF9F5] flex items-center justify-center font-serif text-lg font-bold mb-5">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0E2F22] mb-3">
                Understand
              </h3>
              <p className="text-sm text-[#4A5750] leading-relaxed mb-6">
                Strip away financial jargon. Know the exact math behind loan amortization schedules, compounding runways, and regulatory tax changes before signing any agreement.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E4E0D6] text-xs font-semibold text-[#0E2F22]">
              ✓ Pure mathematical models • Zero sales bias
            </div>
          </div>

          {/* Pillar 2: Plan */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0E2F22] text-[#FAF9F5] flex items-center justify-center font-serif text-lg font-bold mb-5">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0E2F22] mb-3">
                Plan
              </h3>
              <p className="text-sm text-[#4A5750] leading-relaxed mb-6">
                Structure realistic Indian household cashflows. Allocate purposefully across mandatory living needs, discretionary goals, emergency buffers, and long-term equity compounding.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E4E0D6] text-xs font-semibold text-[#0E2F22]">
              ✓ Realistic 50/30/20 guidelines • Goal horizon mapping
            </div>
          </div>

          {/* Pillar 3: Act */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0E2F22] text-[#FAF9F5] flex items-center justify-center font-serif text-lg font-bold mb-5">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0E2F22] mb-3">
                Act
              </h3>
              <p className="text-sm text-[#4A5750] leading-relaxed mb-6">
                Execute with confidence on your chosen platforms (Zerodha, Groww, bank netbanking, or direct AMC portals) without unwanted sales calls or spam.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E4E0D6] text-xs font-semibold text-[#0E2F22]">
              ✓ Unbiased decision data • Complete platform independence
            </div>
          </div>
        </div>

        {/* Real Indian Persona Scenarios */}
        <div className="pt-12 border-t border-[#E4E0D6]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8F4A00] block mb-2">
                Designed For Real Indian Situations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E2F22]">
                Who relies on Fermor daily?
              </h3>
            </div>
            <p className="text-sm text-[#4A5750] max-w-md mt-2 md:mt-0">
              Clear mathematical answers for salaried professionals, homeowners, and deliberate long-term investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scenario 1 */}
            <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E4E0D6] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#F3EFE6] text-[#0E2F22] flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A15]">
                      Salaried Professionals
                    </h4>
                    <span className="text-xs text-[#4A5750]">Income Tax & Salary Optimization</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5750] leading-relaxed mb-4">
                  Deciding whether to opt for the New Tax Regime or retain Old Regime deductions (80C, HRA, 80D), and structuring EPF/PPF allocations.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#0E2F22] flex items-center gap-1">
                <span>Key tool: Tax & PPF Calculator</span>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E4E0D6] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#F3EFE6] text-[#0E2F22] flex items-center justify-center">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A15]">
                      Homebuyers & Borrowers
                    </h4>
                    <span className="text-xs text-[#4A5750]">Tenure & Prepayment Strategy</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5750] leading-relaxed mb-4">
                  Evaluating 15 vs 20-year loan tenures to save ₹15–₹40 Lakhs in interest, or planning annual lump-sum prepayments to eliminate debt years early.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#0E2F22] flex items-center gap-1">
                <span>Key tool: Loan Tenure Optimizer</span>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E4E0D6] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#F3EFE6] text-[#0E2F22] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111A15]">
                      Disciplined SIP Investors
                    </h4>
                    <span className="text-xs text-[#4A5750]">Compounding & Wealth Horizon</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5750] leading-relaxed mb-4">
                  Setting realistic 10-to-25 year wealth targets with step-up SIPs, testing CAGR assumptions from 6% to 15%, without short-term market anxiety.
                </p>
              </div>
              <div className="text-xs font-semibold text-[#0E2F22] flex items-center gap-1">
                <span>Key tool: SIP Compounding Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
