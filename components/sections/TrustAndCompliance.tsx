import { ShieldCheck, Lock, FileCode, CheckCircle } from "lucide-react";

export function TrustAndCompliance() {
  return (
    <section className="py-16 md:py-24 border-b border-[#E4E0D6] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E2F22] text-[#FAF9F5] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#D3E7DE] text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-[#D97706]" />
              <span>Architectural Privacy & Regulatory Transparency</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF9F5] leading-tight mb-6">
              Calculations run in your browser. <br />
              <span className="text-[#D3E7DE] font-normal italic">
                Your numbers never leave your device.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed mb-10">
              Calculations run in your browser. Your inputs stay on your device unless you choose to save a result. We don’t ask for phone numbers, we don’t sell leads to loan agents, and we don’t provide investment advisory.
            </p>

            {/* Feature Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <FileCode className="w-4 h-4 text-[#D97706]" />
                  <span>Client-Side JS Engine</span>
                </div>
                <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                  All math formulas execute entirely on your device’s JavaScript engine without API callbacks.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <Lock className="w-4 h-4 text-[#D97706]" />
                  <span>No Mandatory Account</span>
                </div>
                <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                  Use every single calculator and scenario comparison completely anonymously.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <CheckCircle className="w-4 h-4 text-[#D97706]" />
                  <span>Non-Advisory Independence</span>
                </div>
                <p className="text-xs text-[#FAF9F5]/75 leading-relaxed">
                  Educational tool. Fermor is not a SEBI-registered adviser. We earn zero commissions from fund houses or banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
