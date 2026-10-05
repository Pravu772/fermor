export interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  url: string;
}

export interface AppModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlight: string;
  status: "Coming soon";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "upi-charges",
    category: "Payments & Banking",
    title: "Understanding UPI Interchange Charges on Transactions Above ₹2,000",
    date: "Sep 2024",
    readTime: "4 min read",
    summary:
      "A straightforward breakdown of when interchange fees apply to PPI wallets and why peer-to-peer bank UPI remains completely free.",
    url: "https://fermor.in/blogs/upi-charges-above-2000",
  },
  {
    id: "sec-87a-rebate",
    category: "Income Tax",
    title: "Section 87A Rebate: Maximizing Zero-Tax Thresholds Under the New Regime",
    date: "Aug 2024",
    readTime: "6 min read",
    summary:
      "How the ₹25,000 tax rebate works across income slabs up to ₹7 Lakhs, and the specific nuances when dealing with capital gains.",
    url: "https://fermor.in/blogs/section-87a-rebate",
  },
  {
    id: "sec-194i-tds",
    category: "Real Estate & Tax",
    title: "Section 194I & 194IB: TDS Rules for High-Rent Tenancies in India",
    date: "Jul 2024",
    readTime: "5 min read",
    summary:
      "When individual tenants paying over ₹50,000 monthly must deduct 5% TDS, step-by-step Form 26QC filing, and penalty avoidance.",
    url: "https://fermor.in/blogs/section-194i-tds-on-rent",
  },
  {
    id: "pan-update",
    category: "Regulatory & Compliance",
    title: "How to Correct Name and Date of Birth on Your PAN Card Online",
    date: "Jun 2024",
    readTime: "3 min read",
    summary:
      "An orderly guide to updating NSDL/UTIITSL records, Aadhaar demographic linking, and verifying active status on the e-filing portal.",
    url: "https://fermor.in/blogs/pan-card-update-correction",
  },
];

export const APP_MODULES: AppModule[] = [
  {
    id: "market",
    name: "Market",
    tagline: "Context over market noise",
    description:
      "Macro trends, sector valuations, and interest rate movements distilled into plain English for long-term allocators.",
    highlight: "Sector PE vs 10-Yr Median",
    status: "Coming soon",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "Total net worth synchronization",
    description:
      "A consolidated view across mutual funds, EPF, PPF, direct equities, NPS, and real estate with automated rebalancing prompts.",
    highlight: "Asset Class Allocation Drift",
    status: "Coming soon",
  },
  {
    id: "act",
    name: "ACT",
    tagline: "Rule-based financial discipline",
    description:
      "Automate rebalancing thresholds, annual SIP step-up triggers, and emergency fund re-fill alerts without emotional bias.",
    highlight: "Conditional Step-Up Triggers",
    status: "Coming soon",
  },
  {
    id: "ask",
    name: "Ask",
    tagline: "Direct financial arithmetic queries",
    description:
      "Ask specific questions like 'How much extra should I prepay to close my home loan 4 years early?' and receive instant math.",
    highlight: "Instant Scenario Modelling",
    status: "Coming soon",
  },
  {
    id: "for-kids",
    name: "For Kids",
    tagline: "Generational financial literacy",
    description:
      "Interactive compounding stories, pocket money ledgers, and goal jars designed to teach kids the real value of patient money.",
    highlight: "Visual Compounding Stories",
    status: "Coming soon",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-privacy",
    question: "Do you store or track my financial numbers on your servers?",
    answer:
      "No. Calculations run in your browser. Your inputs stay on your device unless you explicitly choose to save a result. We do not require an account to use any of our calculators, and we never sell user data.",
  },
  {
    id: "faq-sebi",
    question: "Is Fermor a SEBI-registered investment advisor or stockbroker?",
    answer:
      "No. Fermor is an educational financial tool platform operated by Fermor Technologies Pvt. Ltd. We provide objective mathematical models and explainers to help you understand personal finance concepts. We do not execute trades, manage funds, or provide personalized financial recommendations.",
  },
  {
    id: "faq-formulas",
    question: "How accurate are the calculator formulas and interest assumptions?",
    answer:
      "Our tools implement standard financial mathematics: SIP calculations use precise monthly compound interest compounding equations; loan comparisons use the standard reducing balance EMI formula; PPF reflects official government gazette rates. Projections are illustrative models, not guarantees of market returns.",
  },
  {
    id: "faq-cost",
    question: "Are these tools completely free to use?",
    answer:
      "Yes, 100% free. All calculators and educational guides on Fermor are open to everyone without paywalls, subscriptions, or credit card requirements.",
  },
  {
    id: "faq-app-launch",
    question: "When will the integrated Fermor App suite be available?",
    answer:
      "The app suite (Market, Portfolio, ACT, Ask, For Kids) is currently under active development. Joining our waitlist reserves early access and invites you to our closed testing cohorts.",
  },
];
