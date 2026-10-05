# Fermor — Product Brief & Strategic Direction

## 1. Executive Summary
**Fermor** (`fermor.in`) is an Indian financial clarity platform. This homepage reimagines Fermor as an authoritative, beautifully engineered financial decision engine for India—grounded in honest positioning, client-side privacy, and rigorous financial math.

---

## 2. Target Audience & Scenarios
* **Salaried Indian Professionals**: Navigating Old vs. New Tax Regimes, managing EPF/PPF allocations, and planning long-term SIP wealth accumulation.
* **Homebuyers & Borrowers**: Evaluating 15-year vs. 20-year EMI tenures, prepayments, and interest cost optimization.
* **Disciplined First-Time Investors**: Seeking honest, unbiased compounding projections without aggressive brokerage sales pitches or intrusive push notifications.

---

## 3. The Single Core Promise
> **"Financial clarity before financial commitment."**
> Accurate, private, browser-based calculators and editorial insights built specifically for India—clear math, zero sales pressure, and honest guidance.

---

## 4. The 3 Things a Visitor Must Understand in 10 Seconds
1. **What Fermor is**: A dedicated Indian financial calculation and intelligence platform that turns complex money math (SIPs, EMIs, PPF, taxes) into instant, actionable clarity.
2. **What is live today**: 100% free, private calculators running directly in your browser. No sign-up required. Calculations run in your browser and inputs stay on your device.
3. **What is coming next**: An upcoming unified wealth-tracking app (Market, Portfolio, ACT, Ask, For Kids) currently in development, open for early waitlist access.

---

## 5. Primary vs. Secondary CTA Strategy
* **Primary CTA**: `"Try the calculators"` (Scrolls to interactive calculators / engages directly with live tools).
* **Secondary CTA**: `"Join the waitlist"` (Directs to the waitlist form for the upcoming app suite).

---

## 6. Strategic Positioning & Compliance Fixes
| Problem on Legacy Site | Strategic Fix for Submission |
| :--- | :--- |
| **Confused Hero / Broken Nav**: Sells an investing app with dead `#` links while the footer says it's only educational. | **Honest Dual-Layer Narrative**: Leads with the live, high-utility calculator tools; frames the app suite (*Market, Portfolio, ACT, Ask, For Kids*) as *"Coming soon"*. |
| **Compliance Risk**: "Invest Now" buttons & stock tickers imply live brokerage/SEBI advisory. | **Compliant Clarity**: Clear, quiet disclaimers throughout. Labelled sample data. Visible notice next to every projection: *"Educational tool. Fermor is not a SEBI-registered adviser."* |
| **Generic Visuals**: Blue blobs, phone video mockups, AI-cliché gradients, glassmorphism. | **Solid Architectural Editorial Aesthetic**: Deep forest green (`#0D281E`), warm solid canvas (`#FAF9F5`), 1px borders (`#E4E0D6`), Newsreader serif headlines, clean sans with `tabular-nums`. No blur/glassmorphism. |
| **Static Wall of Text**: Blog cards with dense paragraphs. | **High-Density Scannable Cards**: Clean tags, reading times, publication dates, real links to fermor.in articles, and one-sentence key takeaways. |

---

## 7. Homepage Section Structure
1. **Header & Navigation**: Solid canvas background with a 1px bottom border (no glassmorphism/blur), modular Fermor wordmark, clear anchor links, accessible mobile drawer with focus trap, "Join waitlist" button.
2. **Hero Section (with Embedded SIP Calculator)**: Editorial headline, Indian context pill, primary/secondary CTAs, and a live, fully functional SIP wealth growth calculator (monthly investment ₹1,000–₹2,50,000, 6%–15% return with 12% default, 1–30 yrs) with SVG compounding curve and regulatory disclaimer.
3. **Interactive Calculator Hub (Loan Optimizer & Compare)**:
   - **Loan Tenure Optimizer**: Loan amount, interest rate, tenure A (e.g. 15 yrs) vs tenure B (e.g. 20 yrs) showing monthly EMI difference and total interest savings in ₹ Lakhs.
   - **Fixed Deposit / PPF Comparison**: Clear tax-adjusted return logic and tenure comparison.
4. **The Fermor Philosophy & Who It Is For**: Merged architectural section showing the 3 pillars (Understand, Plan, Act) grounded in real Indian financial situations (Salaried tax optimizer, Homebuyer EMI sanity check, First-time compounding builder).
5. **Interactive Cashflow Blueprint**:
   - Realistic Indian monthly cashflow allocator with category toggles, labelled *"50/30/20 is a rule of thumb, not advice"*.
6. **Product Suite Preview (App Roadmap)**:
   - Modules: *Market, Portfolio, ACT, Ask, For Kids*.
   - Explicitly tagged as *"Coming soon"*.
7. **Editorial & Tax Insights**:
   - Real articles linking to `fermor.in`: UPI charges above Rs 2,000, Section 87A rebate, Section 194I TDS on rent, and PAN card update with original one-line summaries.
8. **Trust, Privacy & Regulatory Compliance**:
   - Exact privacy standard: *"Calculations run in your browser. Your inputs stay on your device unless you choose to save a result."*
   - Prominent disclaimer: *"Educational tool. Fermor is not a SEBI-registered adviser."*
9. **Interactive FAQ Accordion**:
   - Accessible accordion answering data privacy, calculations, future app roadmap, and regulatory status.
10. **Waitlist & Final Conversion**:
    - Interactive form (Email, optional tracking interests) submitting to `/api/waitlist` route handler with client-side validation, loading, error, and success states.
11. **Footer**:
    - Company line: *"Fermor Technologies Pvt. Ltd., registered in India"*. Full sitemap, legal disclaimer, and no dead links.
