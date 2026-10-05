# Fermor — Smart Financial Decisions for India

A production-grade Next.js homepage for **Fermor** (`fermor.in`), designed with an opinionated architectural editorial aesthetic, 100% accurate client-side Indian financial math, and honest product positioning.

Built as a submission for the Frontend Developer hiring assignment.

---

## 1. What I Built & Why

When exploring the live `fermor.in` website, I saw two disconnected layers:
1. **The Real Value Today**: Excellent, high-utility Indian financial calculators (SIP, Loan EMI, PPF, Tax) and regulatory explainers.
2. **The Confused Positioning**: A hero section promoting an active trading/investment platform with dead `#` links and "Invest Now" buttons—directly contradicting the footer's disclosure that Fermor is an educational modeling platform and not a SEBI-registered adviser.

### My Approach: Financial Clarity Before Commitment
I redesigned the homepage to tell a single, honest, coherent story:
- **Lead with real utility**: The interactive **SIP Compounding Engine** sits directly in the hero, giving visitors immediate value in under 5 seconds without sign-up friction.
- **Decision tools over sales pitches**: The **Loan Tenure Optimizer** allows borrowers to test 15 vs. 20-year EMI tenures to see lifetime interest savings in ₹ Lakhs.
- **Honest app roadmap**: The upcoming mobile product suite (*Market, Portfolio, ACT, Ask, For Kids*) is explicitly presented as *"Coming soon"* with an early beta waitlist, eliminating compliance ambiguity.
- **Strict client-side privacy**: Calculations run 100% in the visitor's browser. Inputs stay on the user's device.

---

## 2. Key Product & Design Decisions

### A. Visual Direction: "Architectural Editorial"
To avoid looking AI-generated (no purple gradients, no glowing neon orbs, no generic card grids, no glassmorphism blur), the visual system draws inspiration from bespoke financial journals:
- **Palette**: Solid Warm Ecru canvas (`#FAF9F5`), 1px architectural borders (`#E4E0D6`), Deep Forest Emerald (`#0E2F22`), and accessible Saffron/Amber (`#8F4A00` for small text, `#D97706` for fills) verified for WCAG AA contrast.
- **Typography**: `Newsreader` serif for editorial poise paired with `Plus Jakarta Sans` for clean UI clarity.
- **Precision Numerals**: `font-variant-numeric: tabular-nums` formatted strictly to Indian financial notation (₹ Lakh / ₹ Crore with `en-IN` locale).
- **Solid Surfaces**: A solid canvas navigation bar with a 1px border—no backdrop blur or gimmicks.

### B. Mathematical Accuracy & Transparency
All financial calculations in `lib/math.ts` use exact mathematical equations:
- **SIP Future Value**: $FV = P \times \left[\frac{(1+i)^n - 1}{i}\right] \times (1+i)$ (where $i = \frac{r}{12}$, $n = \text{months}$).
- **Home Loan EMI**: $EMI = \frac{P \times r \times (1+r)^n}{(1+r)^n - 1}$ (reducing balance formula).
- **PPF**: Compounded annually at the current notified 7.1% p.a. sovereign rate with the ₹1.5L annual statutory ceiling.
- **Clear Disclaimers**: *"Educational tool. Fermor is not a SEBI-registered adviser."* displayed visibly alongside every calculation.

### C. Information Architecture & Page Narrative
1. **Solid Navbar**: Brand wordmark, smooth anchor links, accessible mobile drawer with focus management.
2. **Hero + Embedded SIP Engine**: Editorial value proposition + live interactive compounding curve.
3. **Decision Hub**: Loan Tenure Optimizer (15 vs. 20 Yr comparison) & PPF Wealth Builder.
4. **The Fermor Framework & Scenarios**: Merged Understand · Plan · Act pillars grounded in real Indian persona situations.
5. **50/30/20 Cashflow Blueprint**: Interactive monthly household budget allocator labelled *"50/30/20 is a rule of thumb, not advice"*.
6. **Upcoming App Suite**: Clear modules (*Market, Portfolio, ACT, Ask, For Kids*) marked *Coming soon*.
7. **Editorial Insights**: High-density scannable cards linking directly to real `fermor.in` explainers with original summaries.
8. **Trust & Compliance**: Explicit privacy assurance and regulatory status transparency.
9. **FAQ Accordion**: Accessible accordion with full ARIA attributes.
10. **Early Access Waitlist**: Working form with client validation and `/api/waitlist` route handler stub.
11. **Footer**: Company registration line (*"Fermor Technologies Pvt. Ltd., registered in India"*), sitemap, and regulatory disclaimer.

---

## 3. Project Structure

```
├── app/
│   ├── api/waitlist/route.ts   # Type-safe waitlist endpoint with in-memory stub
│   ├── globals.css             # Tailwind v4 theme tokens, custom range styling, focus rings
│   ├── layout.tsx              # SEO metadata, OpenGraph tags, JSON-LD schema
│   ├── not-found.tsx           # Bespoke 404 page adhering to brand aesthetic
│   └── page.tsx                # Server component orchestrating the homepage
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx          # Solid canvas header + mobile navigation drawer
│   │   ├── Hero.tsx            # Editorial hero with embedded live SIP calculator
│   │   ├── CalculatorHub.tsx   # Loan Tenure Optimizer & PPF calculator
│   │   ├── PhilosophyAndScenarios.tsx # 3-pillar framework + Indian persona scenarios
│   │   ├── CashflowBlueprint.tsx      # Interactive 50/30/20 monthly budgeter
│   │   ├── ProductRoadmap.tsx  # Upcoming app modules (Market, Portfolio, ACT, Ask, Kids)
│   │   ├── EditorialInsights.tsx # Real fermor.in articles with custom summaries
│   │   ├── TrustAndCompliance.tsx # Browser-side privacy & SEBI transparency
│   │   ├── FAQSection.tsx      # Accessible FAQ accordion
│   │   ├── WaitlistSection.tsx # Validated waitlist form with loading/success states
│   │   └── Footer.tsx          # Corporate details, sitemap, regulatory disclaimers
│   └── ui/
│       └── LogoWordmark.tsx    # Modular brand logo component for SVG swapping
├── data/
│   └── content.ts              # Structured blog posts, app modules, and FAQ items
├── docs/
│   ├── product-brief.md        # Product brief & strategic positioning rationale
│   └── design-notes.md         # Visual tokens, typography rules, contrast ratios
└── lib/
    └── math.ts                 # Pure financial math utilities and Indian currency formatters
```

---

## 4. Setup & Local Development

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm 9+

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/Pravu772/fermor.git
cd fermor

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

### Production Build
```bash
# Run type checking and production build
npm run build

# Start production server
npm run start
```

---

## 5. What I Would Do Next With More Time

1. **Step-Up SIP Modeler**: Allow users to toggle an annual 5% or 10% step-up contribution to model salary increments over 20 years.
2. **Prepayment Impact Simulator**: A dedicated slider showing how paying 1 extra EMI per year reduces home loan tenure by 4–6 years.
3. **Downloadable PDF Summary**: Client-side PDF export of custom calculation summaries and cashflow blueprints for personal record-keeping.
4. **Interactive Tax Regime Comparator**: Side-by-side New vs. Old Tax Regime calculator with standard deductions, 80C, 80D, and HRA inputs.
