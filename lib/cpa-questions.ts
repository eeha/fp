export type Option = { id: "A" | "B" | "C" | "D"; text: string };

export type Question = {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  topic: string;
};

export type SectionData = {
  code: string;
  title: string;
  questions: Question[];
};

export const farQuestions: Question[] = [
  {
    id: 1,
    topic: "Revenue Recognition",
    text: "Under ASC 606, revenue is recognized when (or as) a company:",
    options: [
      { id: "A", text: "Receives cash from the customer" },
      { id: "B", text: "Satisfies a performance obligation" },
      { id: "C", text: "Signs a contract with the customer" },
      { id: "D", text: "Issues an invoice to the customer" },
    ],
    correctAnswer: "B",
    explanation:
      "ASC 606 requires revenue to be recognized when (or as) the entity satisfies a performance obligation by transferring a promised good or service to the customer. This is the fifth and final step of the five-step revenue recognition model.",
  },
  {
    id: 2,
    topic: "Inventarios",
    text: "During a period of rising prices, which inventory costing method results in the LOWEST ending inventory on the balance sheet?",
    options: [
      { id: "A", text: "FIFO (First-In, First-Out)" },
      { id: "B", text: "LIFO (Last-In, First-Out)" },
      { id: "C", text: "Weighted Average Cost" },
      { id: "D", text: "Specific Identification" },
    ],
    correctAnswer: "B",
    explanation:
      "Under LIFO during rising prices, the most recently purchased (higher-cost) items are expensed first as COGS, leaving the older (lower-cost) items in ending inventory. This results in the lowest ending inventory balance compared to FIFO or weighted average.",
  },
  {
    id: 3,
    topic: "Bonos",
    text: "A company issues a $500,000 bond at 96. What is the carrying value of the bond at issuance?",
    options: [
      { id: "A", text: "$480,000" },
      { id: "B", text: "$500,000" },
      { id: "C", text: "$520,000" },
      { id: "D", text: "$960,000" },
    ],
    correctAnswer: "A",
    explanation:
      "Issued at 96 means 96% of face value. $500,000 × 96% = $480,000. The $20,000 difference is recorded as a discount on bonds payable. The discount is amortized over the life of the bond using the effective interest method.",
  },
  {
    id: 4,
    topic: "Depreciación",
    text: "A machine costs $120,000, has a salvage value of $20,000, and a useful life of 5 years. Using straight-line depreciation, what is the annual depreciation expense?",
    options: [
      { id: "A", text: "$20,000" },
      { id: "B", text: "$24,000" },
      { id: "C", text: "$20,000" },
      { id: "D", text: "$22,000" },
    ],
    correctAnswer: "A",
    explanation:
      "Straight-line depreciation = (Cost − Salvage value) / Useful life = ($120,000 − $20,000) / 5 = $100,000 / 5 = $20,000 per year.",
  },
  {
    id: 5,
    topic: "Leases (ASC 842)",
    text: "Under ASC 842, a lessee with a 6-year operating lease (lease payments PV = $200,000) records at inception:",
    options: [
      { id: "A", text: "Rent expense of $200,000" },
      { id: "B", text: "Right-of-use asset and lease liability of $200,000" },
      { id: "C", text: "Prepaid rent of $200,000" },
      { id: "D", text: "No entry is required at inception" },
    ],
    correctAnswer: "B",
    explanation:
      "ASC 842 requires lessees to recognize a right-of-use (ROU) asset and a corresponding lease liability for virtually all leases (except short-term leases ≤ 12 months). Both are initially measured at the present value of future lease payments ($200,000).",
  },
  {
    id: 6,
    topic: "Estados de Flujo de Efectivo",
    text: "Which method of presenting operating cash flows starts with net income and adjusts for non-cash items?",
    options: [
      { id: "A", text: "Direct method" },
      { id: "B", text: "Indirect method" },
      { id: "C", text: "Modified direct method" },
      { id: "D", text: "T-account method" },
    ],
    correctAnswer: "B",
    explanation:
      "The indirect method begins with net income and reconciles it to net cash from operating activities by adjusting for non-cash items (e.g., depreciation, amortization) and changes in working capital. The direct method shows actual cash receipts and payments.",
  },
  {
    id: 7,
    topic: "Contabilidad Gubernamental",
    text: "Under the modified accrual basis used by governmental funds, revenues are recognized when they are:",
    options: [
      { id: "A", text: "Earned, regardless of when collected" },
      { id: "B", text: "Collected in cash" },
      { id: "C", text: "Measurable and available" },
      { id: "D", text: "Approved in the budget" },
    ],
    correctAnswer: "C",
    explanation:
      "'Available' means collected within the current period or soon enough thereafter (typically 60 days) to pay current-period liabilities. 'Measurable' means the amount can be reasonably estimated. This differs from full accrual where revenues are recognized when earned.",
  },
  {
    id: 8,
    topic: "Nonprofits",
    text: "A nonprofit receives a $50,000 cash donation restricted for scholarship purposes. It should be classified as:",
    options: [
      { id: "A", text: "Net assets without donor restrictions" },
      { id: "B", text: "Net assets with donor restrictions" },
      { id: "C", text: "Deferred revenue" },
      { id: "D", text: "Temporarily restricted liability" },
    ],
    correctAnswer: "B",
    explanation:
      "Under ASC 958, nonprofits classify net assets as either 'without donor restrictions' or 'with donor restrictions.' A restricted donation must be used for scholarships, so it is classified as net assets with donor restrictions until the restriction is met.",
  },
  {
    id: 9,
    topic: "Consolidaciones",
    text: "Under ASC 810, a parent company must consolidate a subsidiary when the parent:",
    options: [
      { id: "A", text: "Owns more than 20% of the subsidiary's stock" },
      { id: "B", text: "Has a controlling financial interest (typically >50% voting)" },
      { id: "C", text: "Provides financing to the subsidiary" },
      { id: "D", text: "Shares board members with the subsidiary" },
    ],
    correctAnswer: "B",
    explanation:
      "Consolidation is required when the parent has a controlling financial interest, which is generally presumed when it owns more than 50% of the voting stock. Owning 20-50% typically results in the equity method, not consolidation.",
  },
  {
    id: 10,
    topic: "Instrumentos Financieros",
    text: "An investment in equity securities (with no significant influence) is reported at:",
    options: [
      { id: "A", text: "Historical cost" },
      { id: "B", text: "Amortized cost" },
      { id: "C", text: "Fair value through net income" },
      { id: "D", text: "Fair value through other comprehensive income (mandatory)" },
    ],
    correctAnswer: "C",
    explanation:
      "Under ASC 321, equity investments (except those accounted for under the equity method or consolidated) are measured at fair value with changes recognized in net income. The OCI election only applies in limited circumstances for non-trading equity securities.",
  },
  {
    id: 11,
    topic: "Revenue Recognition",
    text: "A software company sells a license plus one year of technical support for $12,000. The standalone price of the license is $9,000 and support is $3,000. How much revenue is recognized at contract inception if the license is distinct?",
    options: [
      { id: "A", text: "$12,000" },
      { id: "B", text: "$9,000" },
      { id: "C", text: "$3,000" },
      { id: "D", text: "$0" },
    ],
    correctAnswer: "B",
    explanation:
      "Under ASC 606, the transaction price ($12,000) is allocated to each performance obligation based on relative standalone selling prices: License = $12,000 × ($9,000/$12,000) = $9,000. Since the license transfers at a point in time, $9,000 is recognized at inception. The $3,000 for support is recognized ratably over 12 months.",
  },
  {
    id: 12,
    topic: "Inventarios",
    text: "Which inventory method is prohibited under IFRS but allowed under US GAAP?",
    options: [
      { id: "A", text: "FIFO" },
      { id: "B", text: "LIFO" },
      { id: "C", text: "Weighted Average" },
      { id: "D", text: "Specific Identification" },
    ],
    correctAnswer: "B",
    explanation:
      "LIFO (Last-In, First-Out) is permitted under US GAAP but is prohibited under IFRS (IAS 2). Companies that report under IFRS must use either FIFO or weighted average cost.",
  },
  {
    id: 13,
    topic: "Depreciación",
    text: "The double-declining balance (DDB) method applies a depreciation rate of:",
    options: [
      { id: "A", text: "The same rate as straight-line" },
      { id: "B", text: "1.5 times the straight-line rate" },
      { id: "C", text: "2 times the straight-line rate" },
      { id: "D", text: "The rate determined by units of production" },
    ],
    correctAnswer: "C",
    explanation:
      "Double-declining balance uses 2 × (1 / useful life) applied to the book value at the beginning of each period. For a 5-year asset, the straight-line rate is 20%, so DDB uses 40%. Salvage value is not subtracted from cost initially, but the asset is not depreciated below salvage value.",
  },
  {
    id: 14,
    topic: "Contabilidad Gubernamental",
    text: "Which fund type is used to account for the general operations of a government (e.g., police, fire, administration)?",
    options: [
      { id: "A", text: "Special Revenue Fund" },
      { id: "B", text: "Capital Projects Fund" },
      { id: "C", text: "General Fund" },
      { id: "D", text: "Enterprise Fund" },
    ],
    correctAnswer: "C",
    explanation:
      "The General Fund accounts for most of the basic services of a governmental unit — those not required to be reported in another fund. It is the main operating fund of the government.",
  },
  {
    id: 15,
    topic: "Leases (ASC 842)",
    text: "Which of the following criteria would classify a lease as a FINANCE lease for the lessee?",
    options: [
      { id: "A", text: "The lease term is less than 12 months" },
      { id: "B", text: "The present value of lease payments is 85% of the asset's fair value" },
      { id: "C", text: "The lease contains a purchase option the lessee is reasonably certain to exercise" },
      { id: "D", text: "The asset is not specialized" },
    ],
    correctAnswer: "C",
    explanation:
      "Under ASC 842, a lease is a finance lease if any of five criteria are met, including: (1) ownership transfers, (2) purchase option reasonably certain to exercise, (3) lease term = major part of asset's economic life, (4) PV of payments = substantially all of fair value, or (5) specialized asset. A purchase option reasonably certain to be exercised qualifies.",
  },
];

export const sections: Record<string, SectionData> = {
  far: {
    code: "FAR",
    title: "Financial Accounting and Reporting",
    questions: farQuestions,
  },
};
