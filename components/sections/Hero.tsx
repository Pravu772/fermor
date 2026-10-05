"use client";

import { useState, useId } from "react";
import { ArrowRight, Sparkles, Shield, TrendingUp, Info } from "lucide-react";
import { calculateSIP, formatINR, formatINRCompact } from "@/lib/math";

export function Hero() {
  const [monthlyAmount, setMonthlyAmount] = useState(15000);
  const [annualRate, setAnnualRate] = useState(12);
  const [years, setYears] = useState(15);

  const amountInputId = useId();
  const rateInputId = useId();
  const yearsInputId = useId();

  const { futureValue, totalInvested, estimatedReturns, yearlyBreakdown } =
    calculateSIP(monthlyAmount, annualRate, years);

  // SVG Chart Dimensions & Calculations
  const chartWidth = 500;
  const chartHeight = 180;
  const padding = 20;

  const breakdown = yearlyBreakdown ?? [];
  const maxValue = futureValue > 0 ? futureValue : 1;
  const points = breakdown.map((point, index) => {
    const x = padding + (index / (breakdown.length - 1 || 1)) * (chartWidth - padding * 2);
    const yValue = chartHeight - padding - (point.value / maxValue) * (chartHeight - padding * 2);
    const yInvested = chartHeight - padding - (point.invested / maxValue) * (chartHeight - padding * 2);
    return { x, yValue, yInvested, ...point };
  });

  const valuePath = points.length > 0
    ? `M ${points[0].x} ${points[0].yValue} ` + points.slice(1).map((p) => `L ${p.x} ${p.yValue}`).join(" ")
    : "";

  const investedPath = points.length > 0
    ? `M ${points[0].x} ${points[0].yInvested} ` + points.slice(1).map((p) => `L ${p.x} ${p.yInvested}`).join(" ")
    : "";

  const areaPath = points.length > 0
    ? `${valuePath} L ${points[points.length - 1].x} ${chartHeight - padding} L ${points[0].x} ${chartHeight - padding} Z`
    : "";

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#E4E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Positioning & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#15803D]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
                Smart Financial Decisions for India
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E2F22] leading-[1.08] mb-6">
              Clarity before <br />
              <span className="italic font-normal">commitment.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A5750] leading-relaxed mb-8 max-w-xl">
              Free tools, transparent insights, and private calculators to help you understand, plan, and grow your money—tailored specifically for India’s tax and investment reality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#sip-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0E2F22] text-[#FAF9F5] text-base font-semibold hover:bg-[#164332] active:scale-[0.99] transition-all shadow-sm group"
              >
                <span>Try the calculators</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-[#E4E0D6] text-[#111A15] text-base font-semibold hover:bg-[#F3EFE6] active:scale-[0.99] transition-all"
              >
                Join the waitlist
              </a>
            </div>

            {/* Trust & Privacy Badges */}
            <div className="pt-6 border-t border-[#E4E0D6] grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#0E2F22] mt-0.5 shrink-0" />
                <p className="text-xs text-[#4A5750] leading-snug">
                  <strong className="text-[#111A15] font-semibold block">Browser-Side Math</strong>
                  Inputs stay on your device
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#8F4A00] mt-0.5 shrink-0" />
                <p className="text-xs text-[#4A5750] leading-snug">
                  <strong className="text-[#111A15] font-semibold block">100% Free Forever</strong>
                  No sign-up or credit card
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive SIP Growth Calculator */}
          <div
            id="sip-calculator"
            className="lg:col-span-6 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scroll-mt-24"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4E0D6]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F3EFE6] text-[#0E2F22] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#0E2F22]">
                    SIP Compounding Engine
                  </h2>
                  <p className="text-xs text-[#4A5750]">
                    Monthly investment growth simulation
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F3EFE6] text-[#4A5750] border border-[#E4E0D6]">
                Interactive
              </span>
            </div>

            {/* Range Controls */}
            <div className="space-y-5 mb-6">
              {/* Monthly Amount */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={amountInputId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Monthly Investment
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {formatINR(monthlyAmount)}
                  </span>
                </div>
                <input
                  id={amountInputId}
                  type="range"
                  min={1000}
                  max={200000}
                  step={1000}
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                  aria-label="Monthly investment amount in INR"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>₹1,000</span>
                  <span>₹1 Lakh</span>
                  <span>₹2 Lakh</span>
                </div>
              </div>

              {/* Expected CAGR */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={rateInputId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Expected Annual Return (CAGR)
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {annualRate}% p.a.
                  </span>
                </div>
                <input
                  id={rateInputId}
                  type="range"
                  min={6}
                  max={15}
                  step={0.5}
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                  aria-label="Expected annual return percentage"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>6% (Conservative)</span>
                  <span>12% (Equity default)</span>
                  <span>15% (Aggressive)</span>
                </div>
              </div>

              {/* Time Horizon */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={yearsInputId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                    Investment Horizon
                  </label>
                  <span className="text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                    {years} {years === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <input
                  id={yearsInputId}
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[#0E2F22]"
                  aria-label="Investment duration in years"
                />
                <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Dynamic SVG Compounding Curve */}
            <div className="bg-[#FAF9F5] border border-[#E4E0D6] rounded-xl p-3 mb-6">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#4A5750] px-1 mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-[#15803D]" /> Projected Wealth
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-[#4A5750]" /> Invested Principal
                </span>
              </div>

              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-28 overflow-visible"
                aria-label="SIP growth projection chart over time"
                role="img"
              >
                {/* Background Grid Lines */}
                <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#E4E0D6" strokeWidth="1" />
                <line x1={padding} y1={(chartHeight - padding) / 2} x2={chartWidth - padding} y2={(chartHeight - padding) / 2} stroke="#E4E0D6" strokeDasharray="3 3" strokeWidth="1" />

                {/* Shaded Area */}
                <path d={areaPath} fill="#15803D" fillOpacity="0.08" />

                {/* Principal Line */}
                <path d={investedPath} fill="none" stroke="#4A5750" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Growth Curve */}
                <path d={valuePath} fill="none" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />

                {/* Final End Dot */}
                {points.length > 0 && (
                  <circle
                    cx={points[points.length - 1].x}
                    cy={points[points.length - 1].yValue}
                    r="4"
                    fill="#15803D"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </div>

            {/* Output Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#FAF9F5] border border-[#E4E0D6] rounded-xl mb-4 text-center">
              <div>
                <p className="text-[11px] uppercase font-semibold text-[#4A5750] tracking-wider mb-1">
                  Invested
                </p>
                <p className="text-sm sm:text-base font-bold text-[#111A15] tabular-nums font-sans">
                  {formatINRCompact(totalInvested)}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase font-semibold text-[#4A5750] tracking-wider mb-1">
                  Est. Growth
                </p>
                <p className="text-sm sm:text-base font-bold text-[#15803D] tabular-nums font-sans">
                  +{formatINRCompact(estimatedReturns)}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase font-semibold text-[#0E2F22] tracking-wider mb-1">
                  Total Value
                </p>
                <p className="text-sm sm:text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                  {formatINRCompact(futureValue)}
                </p>
              </div>
            </div>

            {/* Mandatory Compliance Disclaimer */}
            <div className="flex items-start gap-1.5 text-[11px] text-[#4A5750] leading-tight">
              <Info className="w-3.5 h-3.5 text-[#8F4A00] shrink-0 mt-0.5" />
              <span>
                <strong>Educational tool. Fermor is not a SEBI-registered adviser.</strong> Projections are illustrative models based on fixed compounding (FV = P × [((1+i)^n − 1) / i] × (1+i)) and not guaranteed returns.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
