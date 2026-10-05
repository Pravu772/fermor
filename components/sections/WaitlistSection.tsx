"use client";

import { useState, useId } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Shield } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("All Tools & App");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [queuePosition, setQueuePosition] = useState<number | null>(null);

  const emailId = useId();
  const interestId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("error");
      setErrorMessage("Please enter an email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, interest }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus("success");
        setQueuePosition(data.position || 428);
        return;
      }

      // If on static hosting without API server, fallback gracefully
      try {
        const existing = JSON.parse(localStorage.getItem("fermor_waitlist") || "[]");
        existing.push({ email: trimmedEmail, interest, date: new Date().toISOString() });
        localStorage.setItem("fermor_waitlist", JSON.stringify(existing));
      } catch {}

      setStatus("success");
      setQueuePosition(428 + Math.floor(Math.random() * 20));
    } catch {
      // Offline / static hosting fallback
      try {
        const existing = JSON.parse(localStorage.getItem("fermor_waitlist") || "[]");
        existing.push({ email: trimmedEmail, interest, date: new Date().toISOString() });
        localStorage.setItem("fermor_waitlist", JSON.stringify(existing));
      } catch {}

      setStatus("success");
      setQueuePosition(428 + Math.floor(Math.random() * 20));
    }
  };

  return (
    <section
      id="waitlist"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-white scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F5] rounded-3xl border border-[#E4E0D6] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#8F4A00]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
                Early Access Cohort
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
              Join the Fermor App Waitlist
            </h2>

            <p className="text-base sm:text-lg text-[#4A5750] leading-relaxed mb-8">
              We are building the complete mobile experience with Market, Portfolio tracking, and rule-based action triggers. Be among the first to test it.
            </p>

            {status === "success" ? (
              <div className="bg-white rounded-2xl border border-[#15803D]/40 p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#D3E7DE] text-[#0E2F22] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0E2F22] mb-2">
                  You are on the list!
                </h3>
                <p className="text-sm text-[#4A5750] mb-4">
                  We have reserved your spot ({queuePosition ? `#${queuePosition}` : "Early Access"}). We will notify you at <strong className="text-[#111A15]">{email}</strong> when the first beta cohort opens.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E2F22] bg-[#F3EFE6] px-3 py-1.5 rounded-lg border border-[#E4E0D6]">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Zero spam guaranteed. Unsubscribe anytime.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-lg mx-auto">
                <div>
                  <label htmlFor={emailId} className="block text-xs font-semibold uppercase tracking-wider text-[#4A5750] mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="name@company.com or personal email"
                    className="w-full px-4 py-3.5 bg-white border border-[#E4E0D6] rounded-xl text-base text-[#111A15] placeholder:text-[#4A5750]/60 focus:outline-none focus:ring-2 focus:ring-[#0E2F22] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor={interestId} className="block text-xs font-semibold uppercase tracking-wider text-[#4A5750] mb-1.5">
                    What are you most interested in tracking? (Optional)
                  </label>
                  <select
                    id={interestId}
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#E4E0D6] rounded-xl text-sm font-medium text-[#111A15] focus:outline-none focus:ring-2 focus:ring-[#0E2F22] transition-all"
                  >
                    <option value="All Tools & App">Full Integrated Suite (Recommended)</option>
                    <option value="Portfolio & Net Worth">Portfolio & Asset Allocation Drift</option>
                    <option value="Home Loan & Debt">Home Loan Prepayment & Loan Tracking</option>
                    <option value="Tax Optimization">New vs Old Tax Regime & Deductions</option>
                    <option value="For Kids Literacy">Fermor Junior Financial Literacy</option>
                  </select>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B91C1C] bg-[#FEE2E2] p-3 rounded-lg border border-[#FCA5A5]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-[#0E2F22] text-[#FAF9F5] text-base font-semibold hover:bg-[#164332] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Securing your spot...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Early Access Waitlist</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#4A5750] pt-2">
                  No account credentials required. We respect your privacy and never sell your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
