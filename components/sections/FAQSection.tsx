"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 border-b border-[#E4E0D6] bg-[#FAF9F5] scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] border border-[#E4E0D6] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0E2F22]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#111A15]">
              Common Questions
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2F22] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#4A5750]">
            Direct, plain-language answers about our math, privacy standards, and regulatory standing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E4E0D6] overflow-hidden transition-all shadow-[0_2px_8px_rgb(0,0,0,0.02)]"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-[#0E2F22] hover:text-[#164332] focus-visible:ring-2 focus-visible:ring-[#0E2F22] focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-[#F3EFE6] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#0E2F22] text-white" : "text-[#4A5750]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A5750] leading-relaxed border-t border-[#FAF9F5]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
