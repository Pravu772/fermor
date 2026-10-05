import { APP_MODULES } from "@/data/content";
import { Sparkles, ArrowRight, Layers, Smartphone } from "lucide-react";

export function ProductRoadmap() {
  return (
    <section
      id="app-suite"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
              <Smartphone className="w-3.5 h-3.5 text-[#0E2F22]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
                Upcoming App Suite
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
              Building the unified wealth app.
            </h2>
            <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed">
              We are expanding beyond browser calculators into an integrated mobile suite. Here is what is in active development for the Fermor platform.
            </p>
          </div>

          <a
            href="#waitlist"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E2F22] text-[#FAF9F5] text-sm font-semibold hover:bg-[#164332] transition-colors w-fit shadow-sm"
          >
            <span>Request Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Real App Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_MODULES.map((module, idx) => (
            <div
              key={module.id}
              className="bg-[#FAF9F5] rounded-2xl border border-[#E4E0D6] p-6 sm:p-8 flex flex-col justify-between hover:border-[#0E2F22]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xl font-bold text-[#0E2F22]">
                    {module.name}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[#8F4A00] border border-[#E4E0D6]">
                    {module.status}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#0E2F22] mb-3">
                  {module.tagline}
                </p>

                <p className="text-sm text-[#4A5750] leading-relaxed mb-6">
                  {module.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E0D6] flex items-center justify-between text-xs">
                <span className="text-[#4A5750]">Core capability</span>
                <span className="font-semibold text-[#111A15]">{module.highlight}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Philosophy Card */}
          <div className="bg-[#0E2F22] text-[#FAF9F5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#D3E7DE] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Our Product Promise</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#FAF9F5] mb-3">
                No ads. No spam. No hidden brokerage kickbacks.
              </h3>

              <p className="text-sm text-[#FAF9F5]/80 leading-relaxed">
                When the app launches, our business model will be transparent subscription software—never selling your financial data to third-party lenders or insurance agents.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6">
              <a
                href="#waitlist"
                className="text-xs font-semibold text-[#D3E7DE] hover:text-white flex items-center gap-1.5"
              >
                <span>Join waitlist for early cohort invitation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
