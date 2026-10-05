"use client";

import { useState, useId } from "react";
import { Building2, Shield, ArrowRight, CheckCircle2, Info, ArrowDownRight, Layers } from "lucide-react";
import { compareLoanTenures, calculatePPF, formatINR, formatINRCompact } from "@/lib/math";

export function CalculatorHub() {
  const [activeTab, setActiveTab] = useState<"loan" | "ppf">("loan");

  // Loan Optimizer State
  const [loanPrincipal, setLoanPrincipal] = useState(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureA, setTenureA] = useState(15); // 15 years
  const [tenureB, setTenureB] = useState(20); // 20 years

  // PPF Tool State
  const [ppfAnnualDeposit, setPpfAnnualDeposit] = useState(150000);
  const [ppfYears, setPpfYears] = useState(15);

  const loanPrincipalId = useId();
  const interestRateId = useId();
  const tenureAId = useId();
  const tenureBId = useId();
  const ppfDepositId = useId();

  // Calculations
  const loanComparison = compareLoanTenures(
    loanPrincipal,
    interestRate,
    tenureA,
    tenureB
  );

  const ppfResult = calculatePPF(ppfAnnualDeposit, 7.1, ppfYears);

  // Compare loan values
  const { optionA, optionB, interestDifference, emiDifference } = loanComparison;
  const isAShorter = tenureA < tenureB;
  const shorterOption = isAShorter ? optionA : optionB;
  const longerOption = isAShorter ? optionB : optionA;

  return (
    <section
      id="loan-optimizer"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-[#FAF9F5] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#0E2F22]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
              Interactive Decision Tools
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
            Test scenarios before you sign.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed">
            Borrowing decisions and tax-advantaged instruments span decades. Compare the true lifetime cost of tenure tradeoffs and compound growth without any sales bias.
          </p>

          {/* Tool Switcher Tabs */}
          <div className="flex items-center gap-2 mt-6 p-1 bg-[#F3EFE6] border border-[#E4E0D6] rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("loan")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "loan"
                  ? "bg-white text-[#0E2F22] shadow-sm"
                  : "text-[#4A5750] hover:text-[#111A15]"
              }`}
            >
              Home Loan Tenure Optimizer (15 vs 20 Yr)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ppf")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === "ppf"
                  ? "bg-white text-[#0E2F22] shadow-sm"
                  : "text-[#4A5750] hover:text-[#111A15]"
              }`}
            >
              PPF Tax-Free Wealth Builder
            </button>
          </div>
        </div>

        {/* Tab 1: Home Loan Tenure Comparison */}
        {activeTab === "loan" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E0D6]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0E2F22]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E2F22]">
                    Loan Parameters
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#4A5750]">
                  Reducing Balance Model
                </span>
              </div>

              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={loanPrincipalId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Home Loan Amount
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {formatINR(loanPrincipal)}
                  </span>
                </div>
                <input
                  id={loanPrincipalId}
                  type="range"
                  min={1000000}
                  max={25000000}
                  step={500000}
                  value={loanPrincipal}
                  onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                  aria-label="Home loan principal amount in INR"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>₹10 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2.5 Crores</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={interestRateId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Annual Interest Rate
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {interestRate}% p.a.
                  </span>
                </div>
                <input
                  id={interestRateId}
                  type="range"
                  min={7.0}
                  max={13.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                  aria-label="Annual interest rate percentage"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>7.0% (Prime Bank)</span>
                  <span>8.5% (Typical)</span>
                  <span>13.0% (NBFC)</span>
                </div>
              </div>

              {/* Tenure A vs Tenure B */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <label htmlFor={tenureAId} className="text-xs font-semibold text-[#4A5750]">
                      Tenure Option A
                    </label>
                  </div>
                  <select
                    id={tenureAId}
                    value={tenureA}
                    onChange={(e) => setTenureA(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E4E0D6] rounded-lg text-sm font-semibold text-[#111A15] focus:outline-none focus:ring-2 focus:ring-[#0E2F22]"
                  >
                    <option value={10}>10 Years</option>
                    <option value={12}>12 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={18}>18 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={25}>25 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <label htmlFor={tenureBId} className="text-xs font-semibold text-[#4A5750]">
                      Tenure Option B
                    </label>
                  </div>
                  <select
                    id={tenureBId}
                    value={tenureB}
                    onChange={(e) => setTenureB(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E4E0D6] rounded-lg text-sm font-semibold text-[#111A15] focus:outline-none focus:ring-2 focus:ring-[#0E2F22]"
                  >
                    <option value={10}>10 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={25}>25 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Comparison Visualizer & Key Insight Callout */}
            <div className="lg:col-span-7 space-y-6">
              {/* Highlight Savings Banner */}
              <div className="bg-[#0E2F22] text-[#FAF9F5] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#D3E7DE] text-xs font-semibold uppercase tracking-wider">
                  <ArrowDownRight className="w-4 h-4 text-[#D97706]" />
                  <span>The Tenure Tradeoff Insight</span>
                </div>

                <div className="my-2">
                  <span className="text-xs sm:text-sm text-[#FAF9F5]/80">
                    Choosing the {shorterOption.tenureYears}-year tenure over {longerOption.tenureYears} years saves:
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F5] mt-1 tabular-nums">
                    {formatINR(interestDifference)}
                  </div>
                  <span className="text-xs text-[#D3E7DE] mt-1 block">
                    Total interest savings across the loan lifecycle
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#FAF9F5]/90 mt-4 leading-relaxed border-t border-white/10 pt-4">
                  While the shorter {shorterOption.tenureYears}-year loan requires a higher monthly EMI of{" "}
                  <strong>{formatINR(shorterOption.monthlyEMI)}</strong> (+{formatINR(emiDifference)}/month), it cuts your total interest burden from {formatINR(longerOption.totalInterest)} down to {formatINR(shorterOption.totalInterest)}.
                </p>
              </div>

              {/* Side-by-Side Comparison Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option A Card */}
                <div className={`p-5 rounded-xl border transition-all ${
                  isAShorter
                    ? "bg-white border-[#15803D]/40 shadow-sm"
                    : "bg-white border-[#E4E0D6]"
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Option A ({tenureA} Years)
                    </span>
                    {isAShorter && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D3E7DE] text-[#0E2F22]">
                        Saves Interest
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-[11px] text-[#4A5750]">Monthly EMI</span>
                      <p className="text-xl font-bold text-[#111A15] tabular-nums font-sans">
                        {formatINR(optionA.monthlyEMI)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E4E0D6] flex justify-between text-xs">
                      <span className="text-[#4A5750]">Total Interest</span>
                      <span className="font-semibold text-[#B91C1C] tabular-nums font-sans">
                        {formatINR(optionA.totalInterest)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#4A5750]">Total Payment</span>
                      <span className="font-semibold text-[#111A15] tabular-nums font-sans">
                        {formatINR(optionA.totalPayment)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Option B Card */}
                <div className={`p-5 rounded-xl border transition-all ${
                  !isAShorter
                    ? "bg-white border-[#15803D]/40 shadow-sm"
                    : "bg-white border-[#E4E0D6]"
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4A5750]">
                      Option B ({tenureB} Years)
                    </span>
                    {!isAShorter && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D3E7DE] text-[#0E2F22]">
                        Saves Interest
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-[11px] text-[#4A5750]">Monthly EMI</span>
                      <p className="text-xl font-bold text-[#111A15] tabular-nums font-sans">
                        {formatINR(optionB.monthlyEMI)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#E4E0D6] flex justify-between text-xs">
                      <span className="text-[#4A5750]">Total Interest</span>
                      <span className="font-semibold text-[#B91C1C] tabular-nums font-sans">
                        {formatINR(optionB.totalInterest)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#4A5750]">Total Payment</span>
                      <span className="font-semibold text-[#111A15] tabular-nums font-sans">
                        {formatINR(optionB.totalPayment)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mandatory Disclaimer */}
              <div className="flex items-start gap-2 text-xs text-[#4A5750] bg-[#F3EFE6] p-3 rounded-lg border border-[#E4E0D6]">
                <Info className="w-4 h-4 text-[#8F4A00] shrink-0 mt-0.5" />
                <span>
                  <strong>Educational tool. Fermor is not a SEBI-registered adviser.</strong> Standard reducing balance formula used: EMI = [P × r × (1+r)^n] / [(1+r)^n − 1]. Processing fees, stamp duty, and future floating rate changes are not included.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: PPF Tax-Free Compounding */}
        {activeTab === "ppf" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E0D6]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#0E2F22]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E2F22]">
                    PPF Rules & Limits
                  </h3>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F3EFE6] text-[#4A5750]">
                  EEE Tax Status
                </span>
              </div>

              {/* Annual Deposit */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={ppfDepositId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Annual Deposit (₹500 to ₹1.5L)
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {formatINR(ppfAnnualDeposit)}/yr
                  </span>
                </div>
                <input
                  id={ppfDepositId}
                  type="range"
                  min={10000}
                  max={150000}
                  step={5000}
                  value={ppfAnnualDeposit}
                  onChange={(e) => setPpfAnnualDeposit(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>₹10,000</span>
                  <span>₹75,000</span>
                  <span>₹1.5 Lakhs (Cap)</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A5750] block mb-2">
                  PPF Block Period
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 20, 25].map((tenure) => (
                    <button
                      key={tenure}
                      type="button"
                      onClick={() => setPpfYears(tenure)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        ppfYears === tenure
                          ? "bg-[#0E2F22] text-white border-[#0E2F22]"
                          : "bg-[#FAF9F5] text-[#111A15] border-[#E4E0D6] hover:bg-[#F3EFE6]"
                      }`}
                    >
                      {tenure} Years {tenure === 15 ? "(Initial)" : "(Extended)"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#4A5750] pt-2 border-t border-[#E4E0D6]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>Exempt-Exempt-Exempt: zero tax on maturity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>Sovereign safety backed by Government of India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>Current notified interest rate: 7.1% per annum</span>
                </div>
              </div>
            </div>

            {/* PPF Results Output */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8F4A00]">
                  Tax-Free Maturity Corpus ({ppfYears} Years)
                </span>
                <div className="font-serif text-3xl sm:text-5xl font-bold text-[#0E2F22] tracking-tight mt-1 tabular-nums">
                  {formatINR(ppfResult.maturityAmount)}
                </div>
                <span className="text-xs text-[#4A5750] mt-1 block">
                  100% Tax-Exempt under Indian Income Tax Act
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAF9F5] border border-[#E4E0D6] rounded-xl text-center">
                <div>
                  <span className="text-xs text-[#4A5750] block mb-1">Total Deposited</span>
                  <span className="text-lg font-bold text-[#111A15] tabular-nums font-sans">
                    {formatINR(ppfResult.totalInvested)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#4A5750] block mb-1">Guaranteed Interest</span>
                  <span className="text-lg font-bold text-[#15803D] tabular-nums font-sans">
                    +{formatINR(ppfResult.totalInterest)}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#4A5750] bg-[#F3EFE6] p-3 rounded-lg border border-[#E4E0D6]">
                <Info className="w-4 h-4 text-[#8F4A00] shrink-0 mt-0.5" />
                <span>
                  <strong>Educational tool. Fermor is not a SEBI-registered adviser.</strong> PPF rates are subject to quarterly government review. Actual maturity value depends on continued prevailing rates.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
