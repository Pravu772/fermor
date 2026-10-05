/**
 * Precise, browser-side financial math utilities tailored for Indian personal finance.
 * All calculations run client-side with zero remote dependencies.
 */

/**
 * Calculates Future Value of a Systematic Investment Plan (SIP).
 * Formula: FV = P * [((1 + i)^n - 1) / i] * (1 + i)
 * where:
 *   P = Monthly investment amount
 *   i = Monthly interest rate (annualRate / 12 / 100)
 *   n = Total number of monthly installments (years * 12)
 */
export function calculateSIP(monthlyAmount: number, annualRatePercent: number, years: number) {
  const p = Math.max(0, monthlyAmount);
  const r = annualRatePercent / 100;
  const n = Math.max(1, Math.round(years * 12));
  const i = r / 12;

  if (i === 0) {
    const totalInvested = p * n;
    return {
      futureValue: totalInvested,
      totalInvested,
      estimatedReturns: 0,
      monthlyBreakdown: [] as { year: number; invested: number; value: number }[],
    };
  }

  // Exact formula: FV = P * [((1 + i)^n - 1) / i] * (1 + i)
  const futureValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const totalInvested = p * n;
  const estimatedReturns = Math.max(0, futureValue - totalInvested);

  // Generate yearly trajectory points for SVG chart
  const yearlyBreakdown: { year: number; invested: number; value: number }[] = [];
  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const investedSoFar = p * months;
    const valueSoFar = p * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    yearlyBreakdown.push({
      year: y,
      invested: Math.round(investedSoFar),
      value: Math.round(valueSoFar),
    });
  }

  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    yearlyBreakdown,
  };
}

/**
 * Standard Home Loan EMI & Total Interest Calculator.
 * Formula: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
 * where:
 *   P = Loan Principal
 *   r = Monthly interest rate (annualRate / 12 / 100)
 *   n = Total months (tenureYears * 12)
 */
export function calculateLoanEMI(principal: number, annualRatePercent: number, tenureYears: number) {
  const p = Math.max(0, principal);
  const r = annualRatePercent / 100 / 12;
  const n = Math.max(1, Math.round(tenureYears * 12));

  if (p === 0 || r === 0) {
    return {
      monthlyEMI: Math.round(p / n),
      totalPayment: Math.round(p),
      totalInterest: 0,
      principal: p,
      tenureYears,
    };
  }

  const factor = Math.pow(1 + r, n);
  const emi = (p * r * factor) / (factor - 1);
  const totalPayment = emi * n;
  const totalInterest = Math.max(0, totalPayment - p);

  return {
    monthlyEMI: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    principal: p,
    tenureYears,
  };
}

/**
 * Compares two loan tenures (e.g. 15 years vs 20 years) to show interest savings.
 */
export function compareLoanTenures(
  principal: number,
  annualRatePercent: number,
  tenureYearsA: number,
  tenureYearsB: number
) {
  const optionA = calculateLoanEMI(principal, annualRatePercent, tenureYearsA);
  const optionB = calculateLoanEMI(principal, annualRatePercent, tenureYearsB);

  // Difference in interest: positive means Option A saves interest compared to Option B
  const interestDifference = Math.abs(optionB.totalInterest - optionA.totalInterest);
  const emiDifference = Math.abs(optionA.monthlyEMI - optionB.monthlyEMI);

  return {
    optionA,
    optionB,
    interestDifference: Math.round(interestDifference),
    emiDifference: Math.round(emiDifference),
    shorterTenureSaves: optionA.tenureYears < optionB.tenureYears ? optionA.tenureYears : optionB.tenureYears,
  };
}

/**
 * Public Provident Fund (PPF) calculation.
 * Compounded annually at current government rate (default 7.1%). Max annual deposit ₹1.5 Lakh.
 */
export function calculatePPF(yearlyDeposit: number, annualRatePercent: number = 7.1, years: number = 15) {
  const p = Math.min(150000, Math.max(500, yearlyDeposit));
  const r = annualRatePercent / 100;
  let balance = 0;
  let totalInvested = 0;

  for (let y = 1; y <= years; y++) {
    totalInvested += p;
    balance = (balance + p) * (1 + r);
  }

  return {
    totalInvested: Math.round(totalInvested),
    maturityAmount: Math.round(balance),
    totalInterest: Math.round(balance - totalInvested),
  };
}

/**
 * Formats a number to Indian Rupee currency standard: e.g. ₹53,00,000
 */
export function formatINR(amount: number): string {
  if (isNaN(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Compact Indian formatting for cards & charts: ₹50 K, ₹15 L, ₹1.25 Cr
 */
export function formatINRCompact(amount: number): string {
  if (isNaN(amount)) return "₹0";
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";

  if (abs >= 10000000) {
    const cr = (abs / 10000000).toFixed(2).replace(/\.00$/, "");
    return `${sign}₹${cr} Cr`;
  }
  if (abs >= 100000) {
    const lakh = (abs / 100000).toFixed(2).replace(/\.00$/, "");
    return `${sign}₹${lakh} L`;
  }
  if (abs >= 1000) {
    const k = (abs / 1000).toFixed(1).replace(/\.0$/, "");
    return `${sign}₹${k} K`;
  }
  return `${sign}₹${abs}`;
}
