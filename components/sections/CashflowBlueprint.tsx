"use client";

import { useState, useId } from "react";
import { PieChart, Sliders, Info, ShieldCheck, ArrowRight } from "lucide-react";
import { formatINR } from "@/lib/math";

export function CashflowBlueprint() {
  const [monthlyIncome, setMonthlyIncome] = useState(120000); // 1.2 Lakhs take home
  const [activeCategory, setActiveCategory] = useState<"needs" | "wants" | "investments">("needs");

  const incomeSliderId = useId();

  // 50/30/20 standard benchmark splits
  const needsBudget = Math.round(monthlyIncome * 0.5);
  const wantsBudget = Math.round(monthlyIncome * 0.3);
  const investmentsBudget = Math.round(monthlyIncome * 0.2);

  // Category breakdown line items with realistic Indian proportions
  const categoryBreakdown = {
    needs: [
      { name: "Rent / Home Loan EMI", percent: 50, amount: Math.round(needsBudget * 0.5), note: "Recommended <30% of total take-home" },
      { name: "Groceries & Daily Essentials", percent: 25, amount: Math.round(needsBudget * 0.25), note: "Supermarket, local markets, milk" },
      { name: "Utilities, Bills & Internet", percent: 15, amount: Math.round(needsBudget * 0.15), note: "Electricity, broadband, mobile, gas" },
      { name: "Commute & Transportation", percent: 10, amount: Math.round(needsBudget * 0.1), note: "Fuel, metro pass, cab rides" },
    ],
    wants: [
      { name: "Dining Out & Food Delivery", percent: 40, amount: Math.round(wantsBudget * 0.4), note: "Swiggy, Zomato, weekend dining" },
      { name: "Travel, Weekend Trips & Stays", percent: 30, amount: Math.round(wantsBudget * 0.3), note: "Quarterly travel buffer" },
      { name: "Entertainment & Subscriptions", percent: 15, amount: Math.round(wantsBudget * 0.15), note: "OTT apps, cinema, gaming" },
      { name: "Personal Shopping & Gadgets", percent: 15, amount: Math.round(wantsBudget * 0.15), note: "Apparel, tech upgrades, gifts" },
    ],
    investments: [
      { name: "Equity Index & Mutual Fund SIPs", percent: 60, amount: Math.round(investmentsBudget * 0.6), note: "Long-term compounding wealth" },
      { name: "Emergency Liquid Fund", percent: 20, amount: Math.round(investmentsBudget * 0.2), note: "Maintaining 6 months of expenses" },
      { name: "Guaranteed Debt (PPF / NPS / EPF)", percent: 20, amount: Math.round(investmentsBudget * 0.2), note: "Tax-efficient baseline compounding" },
    ],
  };

  return (
    <section
      id="cashflow-tool"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-[#FAF9F5] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
            <PieChart className="w-3.5 h-3.5 text-[#0E2F22]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
              Monthly Cashflow Blueprint
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
            Understand where your money goes.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed">
            Structure your net monthly income into a balanced, workable allocation. Set your take-home pay and explore sample line items for Indian households.
          </p>
        </div>

        {/* Interactive Tool Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Monthly Income Controller & Split Overview */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E0D6]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#0E2F22]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E2F22]">
                  Take-Home Salary
                </h3>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F3EFE6] text-[#8F4A00] border border-[#E4E0D6]">
                Sample data
              </span>
            </div>

            {/* Income Range Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={incomeSliderId} className="text-xs font-semibold uppercase tracking-wider text-[#4A5750]">
                  Monthly Net Take-Home
                </label>
                <span className="text-xl font-bold text-[#0E2F22] tabular-nums font-sans">
                  {formatINR(monthlyIncome)}
                </span>
              </div>
              <input
                id={incomeSliderId}
                type="range"
                min={30000}
                max={500000}
                step={5000}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#0E2F22]"
                aria-label="Monthly net income in INR"
              />
              <div className="flex justify-between text-[11px] text-[#4A5750] mt-1">
                <span>₹30,000</span>
                <span>₹2.5 Lakhs</span>
                <span>₹5 Lakhs</span>
              </div>
            </div>

            {/* Visual Allocation Proportion Bar */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#4A5750] mb-2">
                <span>Allocation Visualizer</span>
                <span>100% of Net Income</span>
              </div>
              <div className="h-4 w-full rounded-full overflow-hidden flex bg-[#E4E0D6] p-0.5 gap-0.5">
                <div
                  style={{ width: "50%" }}
                  className="bg-[#0E2F22] h-full rounded-l-full"
                  title="50% Needs"
                />
                <div
                  style={{ width: "30%" }}
                  className="bg-[#D97706] h-full"
                  title="30% Wants"
                />
                <div
                  style={{ width: "20%" }}
                  className="bg-[#15803D] h-full rounded-r-full"
                  title="20% Investments"
                />
              </div>
              <div className="flex justify-between text-[11px] text-[#4A5750] mt-1.5 font-medium">
                <span className="text-[#0E2F22] font-semibold">● 50% Needs</span>
                <span className="text-[#8F4A00] font-semibold">● 30% Wants</span>
                <span className="text-[#15803D] font-semibold">● 20% Invest</span>
              </div>
            </div>

            {/* Split Breakdown Cards */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveCategory("needs")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeCategory === "needs"
                    ? "bg-[#FAF9F5] border-[#0E2F22] ring-1 ring-[#0E2F22]"
                    : "bg-white border-[#E4E0D6] hover:bg-[#FAF9F5]"
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0E2F22]">
                    50% Needs & Essentials
                  </span>
                  <p className="text-xs text-[#4A5750]">Rent, EMI, groceries, bills</p>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-[#111A15] tabular-nums font-sans">
                    {formatINR(needsBudget)}
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("wants")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeCategory === "wants"
                    ? "bg-[#FAF9F5] border-[#D97706] ring-1 ring-[#D97706]"
                    : "bg-white border-[#E4E0D6] hover:bg-[#FAF9F5]"
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8F4A00]">
                    30% Discretionary Wants
                  </span>
                  <p className="text-xs text-[#4A5750]">Dining, weekend trips, shopping</p>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-[#111A15] tabular-nums font-sans">
                    {formatINR(wantsBudget)}
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveCategory("investments")}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeCategory === "investments"
                    ? "bg-[#FAF9F5] border-[#15803D] ring-1 ring-[#15803D]"
                    : "bg-white border-[#E4E0D6] hover:bg-[#FAF9F5]"
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                    20% Investments & Growth
                  </span>
                  <p className="text-xs text-[#4A5750]">SIPs, emergency fund, PPF</p>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-[#15803D] tabular-nums font-sans">
                    {formatINR(investmentsBudget)}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Category Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E0D6]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0E2F22]">
                  {activeCategory === "needs" && "Needs & Mandatory Outflows (50%)"}
                  {activeCategory === "wants" && "Discretionary Lifestyle Budget (30%)"}
                  {activeCategory === "investments" && "Wealth Compounding & Safety (20%)"}
                </h3>
                <p className="text-xs text-[#4A5750]">
                  Target allocation:{" "}
                  <strong>
                    {formatINR(
                      activeCategory === "needs"
                        ? needsBudget
                        : activeCategory === "wants"
                        ? wantsBudget
                        : investmentsBudget
                    )}
                  </strong>{" "}
                  per month
                </p>
              </div>

              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F3EFE6] text-[#4A5750]">
                Interactive Item List
              </span>
            </div>

            {/* Line items list */}
            <div className="space-y-4">
              {categoryBreakdown[activeCategory].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E4E0D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#111A15]">
                        {item.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-white border border-[#E4E0D6] text-[#4A5750] font-semibold">
                        {item.percent}% of group
                      </span>
                    </div>
                    <p className="text-xs text-[#4A5750] mt-0.5">{item.note}</p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-sm sm:text-base font-bold text-[#0E2F22] tabular-nums font-sans">
                      {formatINR(item.amount)}
                    </span>
                    <span className="text-[11px] text-[#4A5750] block">/ month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Rule-of-Thumb Callout & Disclaimer */}
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E4E0D6] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#8F4A00] shrink-0 mt-0.5" />
              <div className="text-xs text-[#4A5750] leading-relaxed">
                <strong className="text-[#111A15] block">
                  50/30/20 is a rule of thumb, not advice.
                </strong>
                Every Indian household has unique circumstances (metro rents, supporting parents, medical needs, or seasonal expenses). Adjust these proportions according to your real goals and debt obligations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
