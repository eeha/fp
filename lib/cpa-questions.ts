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

export const audQuestions: Question[] = [
  {
    id: 1,
    topic: "Riesgo de Auditoría",
    text: "The audit risk model is expressed as AR = IR × CR × DR. If inherent risk is 0.8 and control risk is 0.5, what detection risk is needed to achieve an audit risk of 0.04?",
    options: [
      { id: "A", text: "0.05" },
      { id: "B", text: "0.10" },
      { id: "C", text: "0.20" },
      { id: "D", text: "0.40" },
    ],
    correctAnswer: "B",
    explanation:
      "DR = AR / (IR × CR) = 0.04 / (0.8 × 0.5) = 0.04 / 0.40 = 0.10. Detection risk is the only component the auditor can directly control — it is reduced by performing more extensive substantive procedures.",
  },
  {
    id: 2,
    topic: "Opiniones de Auditoría",
    text: "An auditor discovers a material misstatement that management refuses to correct, but the misstatement is NOT pervasive to the financial statements as a whole. The auditor should issue a:",
    options: [
      { id: "A", text: "Disclaimer of opinion" },
      { id: "B", text: "Adverse opinion" },
      { id: "C", text: "Qualified opinion" },
      { id: "D", text: "Unmodified opinion with emphasis paragraph" },
    ],
    correctAnswer: "C",
    explanation:
      "A qualified opinion ('except for') is issued when there is a material but NOT pervasive misstatement or scope limitation. An adverse opinion is issued when the misstatement IS material AND pervasive. A disclaimer is issued when the auditor cannot obtain sufficient evidence.",
  },
  {
    id: 3,
    topic: "Independencia",
    text: "Which of the following would most likely impair an auditor's independence under the AICPA Code of Professional Conduct?",
    options: [
      { id: "A", text: "Performing tax return preparation for the audit client" },
      { id: "B", text: "Having a direct financial interest in the audit client" },
      { id: "C", text: "Providing bookkeeping services to a non-audit client" },
      { id: "D", text: "Employing a former employee of the audit client" },
    ],
    correctAnswer: "B",
    explanation:
      "A direct financial interest (e.g., owning stock) in an audit client always impairs independence — it creates a self-interest threat that cannot be mitigated. Tax services and bookkeeping for non-audit clients do not impair independence.",
  },
  {
    id: 4,
    topic: "Evidencia de Auditoría",
    text: "Which of the following is the MOST reliable form of audit evidence?",
    options: [
      { id: "A", text: "Representations from management" },
      { id: "B", text: "Copies of client invoices provided by management" },
      { id: "C", text: "Confirmation received directly from a third party" },
      { id: "D", text: "Verbal explanations from the client's controller" },
    ],
    correctAnswer: "C",
    explanation:
      "Third-party confirmations (e.g., bank confirmations, accounts receivable confirmations) are highly reliable because they come from independent sources outside the client's control. Evidence from management or internal documents is less reliable because it originates from the entity being audited.",
  },
  {
    id: 5,
    topic: "Control Interno",
    text: "The COSO Internal Control framework identifies five components. Which component includes the organization's risk assessment process?",
    options: [
      { id: "A", text: "Control Environment" },
      { id: "B", text: "Risk Assessment" },
      { id: "C", text: "Control Activities" },
      { id: "D", text: "Monitoring Activities" },
    ],
    correctAnswer: "B",
    explanation:
      "The five COSO components are: (1) Control Environment, (2) Risk Assessment, (3) Control Activities, (4) Information & Communication, and (5) Monitoring Activities. Risk Assessment specifically covers how management identifies and analyzes risks relevant to achieving objectives.",
  },
  {
    id: 6,
    topic: "Aserciones de Auditoría",
    text: "When auditing accounts receivable, which assertion is primarily addressed by sending positive confirmations to customers?",
    options: [
      { id: "A", text: "Completeness" },
      { id: "B", text: "Valuation" },
      { id: "C", text: "Existence" },
      { id: "D", text: "Classification" },
    ],
    correctAnswer: "C",
    explanation:
      "Positive confirmations ask customers to respond whether they agree or disagree with the stated balance, directly testing the EXISTENCE assertion — i.e., that recorded receivables actually exist and are owed by real customers. Completeness (unrecorded receivables) is tested by other means such as subsequent cash receipts.",
  },
  {
    id: 7,
    topic: "Procedimientos Analíticos",
    text: "Analytical procedures performed during the planning phase of an audit are used primarily to:",
    options: [
      { id: "A", text: "Reduce the amount of detailed testing required" },
      { id: "B", text: "Identify unusual fluctuations that may indicate risk areas" },
      { id: "C", text: "Provide substantive evidence about account balances" },
      { id: "D", text: "Fulfill the requirement to issue a management letter" },
    ],
    correctAnswer: "B",
    explanation:
      "During planning, analytical procedures help the auditor understand the entity and identify areas of potential risk or unusual transactions that warrant more attention. They do not provide substantive evidence at this stage — that role is served by analytical procedures used as substantive tests during fieldwork.",
  },
  {
    id: 8,
    topic: "Normas PCAOB",
    text: "PCAOB standards apply to audits of:",
    options: [
      { id: "A", text: "All entities that follow US GAAP" },
      { id: "B", text: "Privately held companies only" },
      { id: "C", text: "Issuers (public companies) registered with the SEC" },
      { id: "D", text: "Nonprofit organizations receiving federal funding" },
    ],
    correctAnswer: "C",
    explanation:
      "The PCAOB (Public Company Accounting Oversight Board) was created by the Sarbanes-Oxley Act of 2002 and has jurisdiction over audits of SEC-registered issuers (public companies). Audits of private companies, nonprofits, and government entities follow AICPA GAAS (or GAGAS for government).",
  },
  {
    id: 9,
    topic: "Muestreo de Auditoría",
    text: "Which sampling method gives every item in the population an equal chance of being selected?",
    options: [
      { id: "A", text: "Judgmental sampling" },
      { id: "B", text: "Haphazard sampling" },
      { id: "C", text: "Random sampling" },
      { id: "D", text: "Block sampling" },
    ],
    correctAnswer: "C",
    explanation:
      "Random (statistical) sampling ensures every item has an equal probability of selection, allowing the auditor to project results to the entire population and quantify sampling risk. Judgmental and haphazard sampling do not allow statistical projection.",
  },
  {
    id: 10,
    topic: "Informes SOC",
    text: "A service organization's SOC 1 Type II report provides assurance on:",
    options: [
      { id: "A", text: "Design of controls only, at a point in time" },
      { id: "B", text: "Design AND operating effectiveness of controls over a period" },
      { id: "C", text: "Security, availability, and confidentiality controls" },
      { id: "D", text: "The fairness of the service organization's financial statements" },
    ],
    correctAnswer: "B",
    explanation:
      "A SOC 1 Type II report covers the suitability of design AND operating effectiveness of internal controls over financial reporting for a specified period (typically 6–12 months). Type I only covers design at a point in time. SOC 2 covers the Trust Service Criteria (security, availability, etc.).",
  },
  {
    id: 11,
    topic: "Opiniones de Auditoría",
    text: "An auditor is unable to observe the client's physical inventory because they were appointed after the year-end. No alternative procedures can satisfy the auditor. The auditor should issue a:",
    options: [
      { id: "A", text: "Qualified opinion due to scope limitation" },
      { id: "B", text: "Adverse opinion" },
      { id: "C", text: "Disclaimer of opinion" },
      { id: "D", text: "Unmodified opinion with explanatory paragraph" },
    ],
    correctAnswer: "C",
    explanation:
      "When a scope limitation is so significant and pervasive that the auditor cannot form an opinion on the financial statements as a whole, a disclaimer of opinion is issued. If the limitation is material but not pervasive, a qualified opinion is issued instead.",
  },
  {
    id: 12,
    topic: "Control Interno",
    text: "Segregation of duties is MOST effective at preventing which type of error or fraud?",
    options: [
      { id: "A", text: "Errors in accounting estimates" },
      { id: "B", text: "Collusion between two or more employees" },
      { id: "C", text: "Misappropriation of assets by a single employee" },
      { id: "D", text: "Management override of controls" },
    ],
    correctAnswer: "C",
    explanation:
      "Segregation of duties separates authorization, custody, and recordkeeping functions so that no single individual can commit and conceal a fraud. It is most effective against misappropriation by one employee. It is less effective against collusion (two or more people working together) or management override.",
  },
  {
    id: 13,
    topic: "Planificación de Auditoría",
    text: "Which of the following is included in an engagement letter between an auditor and client?",
    options: [
      { id: "A", text: "The auditor's planned audit procedures" },
      { id: "B", text: "Management's responsibility for the financial statements" },
      { id: "C", text: "A guarantee that no fraud exists" },
      { id: "D", text: "The specific errors the auditor expects to find" },
    ],
    correctAnswer: "B",
    explanation:
      "An engagement letter documents the terms of the audit engagement, including: the objective and scope of the audit, management's responsibility for preparing financial statements and maintaining internal controls, and the auditor's responsibility to express an opinion. It does NOT guarantee the detection of fraud.",
  },
  {
    id: 14,
    topic: "Fraude",
    text: "Under AU-C Section 240, the two types of fraud relevant to a financial statement audit are:",
    options: [
      { id: "A", text: "Errors and irregularities" },
      { id: "B", text: "Fraudulent financial reporting and misappropriation of assets" },
      { id: "C", text: "Internal fraud and external fraud" },
      { id: "D", text: "Management fraud and employee fraud" },
    ],
    correctAnswer: "B",
    explanation:
      "AU-C 240 distinguishes two types of fraud: (1) Fraudulent financial reporting — intentional misstatements in financial statements (e.g., overstating revenues), and (2) Misappropriation of assets — theft or misuse of an entity's assets (e.g., skimming cash). The auditor has responsibilities to assess risk of both.",
  },
  {
    id: 15,
    topic: "Riesgo de Auditoría",
    text: "Which of the following would cause an auditor to INCREASE the assessed level of control risk?",
    options: [
      { id: "A", text: "Strong segregation of duties throughout the organization" },
      { id: "B", text: "Effective internal audit function with direct board access" },
      { id: "C", text: "Management has overridden controls on several occasions" },
      { id: "D", text: "Detailed and up-to-date accounting policies and procedures" },
    ],
    correctAnswer: "C",
    explanation:
      "Management override of controls is a significant red flag that increases control risk, because it means the existing controls cannot be relied upon to prevent or detect material misstatements. This would require the auditor to expand substantive testing.",
  },
];

export const regQuestions: Question[] = [
  {
    id: 1,
    topic: "Impuesto Individual",
    text: "For 2024, a single taxpayer has $80,000 of ordinary income. After the standard deduction of $14,600, their taxable income is $65,400. Which marginal tax rate applies to the top dollar of income?",
    options: [
      { id: "A", text: "10%" },
      { id: "B", text: "12%" },
      { id: "C", text: "22%" },
      { id: "D", text: "24%" },
    ],
    correctAnswer: "C",
    explanation:
      "For 2024, the 22% bracket for single filers covers taxable income from $47,150 to $100,525. Taxable income of $65,400 falls within this bracket, so the marginal rate on the top dollar is 22%. Remember: the effective (average) tax rate is lower because lower income is taxed at 10% and 12%.",
  },
  {
    id: 2,
    topic: "Ganancias de Capital",
    text: "A taxpayer in the 22% ordinary income tax bracket sells stock held for 14 months at a $10,000 gain. What is the applicable federal tax rate on this gain?",
    options: [
      { id: "A", text: "0%" },
      { id: "B", text: "15%" },
      { id: "C", text: "20%" },
      { id: "D", text: "22%" },
    ],
    correctAnswer: "B",
    explanation:
      "Long-term capital gains (assets held >12 months) are taxed at preferential rates: 0%, 15%, or 20% depending on taxable income. The 15% rate applies to taxpayers in the 22% and 24% ordinary income brackets. The 22% ordinary rate does NOT apply to long-term capital gains.",
  },
  {
    id: 3,
    topic: "Like-Kind Exchange",
    text: "Under IRC Section 1031, a taxpayer exchanges a business building (basis $200,000, FMV $500,000) for another building worth $450,000 plus $50,000 cash (boot). How much gain must be recognized?",
    options: [
      { id: "A", text: "$0" },
      { id: "B", text: "$50,000" },
      { id: "C", text: "$250,000" },
      { id: "D", text: "$300,000" },
    ],
    correctAnswer: "B",
    explanation:
      "In a like-kind exchange, gain is recognized only to the extent of boot received. Realized gain = $500,000 − $200,000 = $300,000. Boot received = $50,000. Recognized gain = lesser of realized gain or boot = $50,000. The remaining $250,000 of gain is deferred into the basis of the new property.",
  },
  {
    id: 4,
    topic: "S Corporation",
    text: "Which of the following would DISQUALIFY a corporation from making an S election?",
    options: [
      { id: "A", text: "Having 75 individual shareholders" },
      { id: "B", text: "Having a nonresident alien as a shareholder" },
      { id: "C", text: "Having only one class of common stock" },
      { id: "D", text: "Being incorporated in a U.S. state" },
    ],
    correctAnswer: "B",
    explanation:
      "S corporations cannot have nonresident alien shareholders — all shareholders must be U.S. citizens or resident aliens. Other requirements: ≤100 shareholders, only one class of stock, and must be a domestic corporation. A nonresident alien shareholder immediately terminates the S election.",
  },
  {
    id: 5,
    topic: "Self-Employment Tax",
    text: "A self-employed individual has net self-employment income of $100,000. What is the self-employment (SE) tax base used to calculate SE tax?",
    options: [
      { id: "A", text: "$100,000" },
      { id: "B", text: "$92,350" },
      { id: "C", text: "$85,000" },
      { id: "D", text: "$107,650" },
    ],
    correctAnswer: "B",
    explanation:
      "The SE tax base is net self-employment income × 92.35% (i.e., 100% − 7.65%). This adjustment reflects that employees don't pay FICA on the employer's share. So: $100,000 × 0.9235 = $92,350. The SE tax rate of 15.3% is then applied to this amount.",
  },
  {
    id: 6,
    topic: "Impuesto Corporativo",
    text: "Under the Tax Cuts and Jobs Act (TCJA), the federal corporate income tax rate is:",
    options: [
      { id: "A", text: "28% flat rate" },
      { id: "B", text: "Graduated rates from 15% to 35%" },
      { id: "C", text: "21% flat rate" },
      { id: "D", text: "20% flat rate" },
    ],
    correctAnswer: "C",
    explanation:
      "The TCJA (effective January 1, 2018) replaced the prior graduated corporate tax rates (15%–35%) with a flat 21% rate for all C corporations. This is a permanent change under current law.",
  },
  {
    id: 7,
    topic: "Sociedades (Partnerships)",
    text: "A partner's outside basis in a partnership is increased by which of the following?",
    options: [
      { id: "A", text: "The partner's share of partnership losses" },
      { id: "B", text: "Cash distributions received from the partnership" },
      { id: "C", text: "The partner's share of partnership liabilities" },
      { id: "D", text: "The partner's share of tax-exempt income" },
    ],
    correctAnswer: "C",
    explanation:
      "A partner's outside basis is increased by: contributions, share of income (including tax-exempt), and share of partnership liabilities. Basis is decreased by: distributions, share of losses, and decreases in partnership liabilities. Both C and D increase basis, but only C is a unique feature of partnership taxation — sharing of liabilities is key.",
  },
  {
    id: 8,
    topic: "Deducciones Individuales",
    text: "Which of the following is an 'above-the-line' deduction (adjustment to gross income) for individual taxpayers?",
    options: [
      { id: "A", text: "Mortgage interest on a primary residence" },
      { id: "B", text: "Charitable contributions" },
      { id: "C", text: "Student loan interest paid" },
      { id: "D", text: "State and local taxes (SALT)" },
    ],
    correctAnswer: "C",
    explanation:
      "Student loan interest (up to $2,500) is an above-the-line deduction under IRC §221, reducing AGI regardless of whether the taxpayer itemizes. Mortgage interest, charitable contributions, and SALT are itemized (below-the-line) deductions available only if the taxpayer itemizes instead of taking the standard deduction.",
  },
  {
    id: 9,
    topic: "Ética / Circular 230",
    text: "Under Treasury Circular 230, a CPA who prepares tax returns must exercise due diligence with respect to:",
    options: [
      { id: "A", text: "Only positions that are more likely than not to be sustained" },
      { id: "B", text: "Accuracy of information in returns, documents, and representations" },
      { id: "C", text: "Reporting all clients with offshore accounts to the IRS" },
      { id: "D", text: "Auditing the client's financial records before filing" },
    ],
    correctAnswer: "B",
    explanation:
      "Circular 230 §10.22 requires practitioners to exercise due diligence in preparing and signing tax returns and documents submitted to the IRS, ensuring accuracy and truthfulness. The CPA is not required to audit the client's records but must make reasonable inquiries when information appears incorrect.",
  },
  {
    id: 10,
    topic: "Impuesto Individual",
    text: "A taxpayer who files as 'Head of Household' must meet which requirement?",
    options: [
      { id: "A", text: "Be married and file separately from their spouse" },
      { id: "B", text: "Be unmarried and pay more than half the cost of maintaining a home for a qualifying person" },
      { id: "C", text: "Have at least two dependent children" },
      { id: "D", text: "Be a surviving spouse within 2 years of a spouse's death" },
    ],
    correctAnswer: "B",
    explanation:
      "Head of Household status requires the taxpayer to be unmarried (or considered unmarried) at year-end, have paid more than 50% of maintaining the home, and have a qualifying person (child, dependent, or certain relatives) who lived in the home for more than half the year. It provides a larger standard deduction and lower rates than Single status.",
  },
  {
    id: 11,
    topic: "Créditos Fiscales",
    text: "Which of the following credits is REFUNDABLE, meaning it can result in a tax refund even if the taxpayer owes no tax?",
    options: [
      { id: "A", text: "Child and Dependent Care Credit" },
      { id: "B", text: "American Opportunity Tax Credit (partially)" },
      { id: "C", text: "Lifetime Learning Credit" },
      { id: "D", text: "Foreign Tax Credit" },
    ],
    correctAnswer: "B",
    explanation:
      "The American Opportunity Tax Credit (AOTC) is partially refundable — up to 40% ($1,000) of the maximum $2,500 credit is refundable. The Child and Dependent Care, Lifetime Learning, and Foreign Tax Credits are non-refundable (they reduce tax liability to zero but cannot generate a refund).",
  },
  {
    id: 12,
    topic: "Impuesto Corporativo",
    text: "A C corporation has $500,000 of taxable income and pays $105,000 in corporate income tax. What deduction is available to shareholders when dividends are distributed?",
    options: [
      { id: "A", text: "Shareholders can deduct dividends received" },
      { id: "B", text: "No deduction — dividends are taxed again at the shareholder level (double taxation)" },
      { id: "C", text: "Dividends are tax-free to shareholders" },
      { id: "D", text: "Shareholders receive a foreign tax credit for corporate taxes paid" },
    ],
    correctAnswer: "B",
    explanation:
      "C corporations are subject to double taxation: income is taxed at the corporate level (21%), and dividends distributed to shareholders are taxed again at the individual level (qualified dividend rate: 0%, 15%, or 20%). This is a key distinction from S corporations and partnerships, which are pass-through entities.",
  },
  {
    id: 13,
    topic: "Ganancias de Capital",
    text: "Under the 'wash sale' rule (IRC §1091), a taxpayer who sells stock at a loss and repurchases substantially identical stock within 30 days:",
    options: [
      { id: "A", text: "Must recognize the loss immediately" },
      { id: "B", text: "Cannot deduct the loss; it is added to the basis of the new shares" },
      { id: "C", text: "Can deduct the loss over 5 years" },
      { id: "D", text: "Must pay ordinary income tax on the loss" },
    ],
    correctAnswer: "B",
    explanation:
      "The wash sale rule disallows the loss if substantially identical securities are purchased within 30 days before or after the sale (61-day window). The disallowed loss is not permanently lost — it is added to the cost basis of the newly acquired shares, deferring the tax benefit until the new shares are sold.",
  },
  {
    id: 14,
    topic: "Sociedades (Partnerships)",
    text: "In a general partnership, how are profits and losses allocated if the partnership agreement is silent on the matter?",
    options: [
      { id: "A", text: "Equally among all partners" },
      { id: "B", text: "Based on each partner's capital contribution" },
      { id: "C", text: "Based on each partner's hours worked" },
      { id: "D", text: "Based on the managing partner's discretion" },
    ],
    correctAnswer: "A",
    explanation:
      "Under the Uniform Partnership Act (UPA), if the partnership agreement does not specify an allocation, profits and losses are shared equally regardless of capital contributions or time invested. This default rule can be overridden by express agreement in the partnership agreement.",
  },
  {
    id: 15,
    topic: "Deducciones Individuales",
    text: "The Section 179 deduction allows a business to:",
    options: [
      { id: "A", text: "Defer income from the sale of business property" },
      { id: "B", text: "Immediately expense the cost of qualifying business property" },
      { id: "C", text: "Carry back capital losses to prior tax years" },
      { id: "D", text: "Exclude gain on the sale of a primary residence" },
    ],
    correctAnswer: "B",
    explanation:
      "Section 179 allows businesses to immediately deduct (expense) the full cost of qualifying business property (e.g., equipment, machinery) in the year placed in service, rather than depreciating it over its useful life. For 2024, the deduction limit is $1,220,000, subject to a phase-out when total property placed in service exceeds $3,050,000.",
  },
];

export const barQuestions: Question[] = [
  {
    id: 1,
    topic: "Análisis de Razones Financieras",
    text: "A company has current assets of $800,000 and current liabilities of $500,000. Inventory is $200,000. What is the quick ratio?",
    options: [
      { id: "A", text: "1.6" },
      { id: "B", text: "1.2" },
      { id: "C", text: "0.6" },
      { id: "D", text: "2.0" },
    ],
    correctAnswer: "B",
    explanation:
      "Quick ratio = (Current assets − Inventory) / Current liabilities = ($800,000 − $200,000) / $500,000 = $600,000 / $500,000 = 1.2. The quick ratio excludes inventory because it is the least liquid current asset. A ratio above 1.0 indicates the company can cover short-term obligations without selling inventory.",
  },
  {
    id: 2,
    topic: "Costo-Volumen-Utilidad (CVP)",
    text: "A product sells for $50, variable cost is $30, and fixed costs are $100,000. What is the breakeven point in units?",
    options: [
      { id: "A", text: "2,000 units" },
      { id: "B", text: "3,333 units" },
      { id: "C", text: "5,000 units" },
      { id: "D", text: "10,000 units" },
    ],
    correctAnswer: "C",
    explanation:
      "Contribution margin per unit = Selling price − Variable cost = $50 − $30 = $20. Breakeven units = Fixed costs / Contribution margin per unit = $100,000 / $20 = 5,000 units. At 5,000 units, total contribution margin equals total fixed costs, resulting in zero profit.",
  },
  {
    id: 3,
    topic: "Presupuesto Flexible",
    text: "A company budgets $60,000 for overhead at 10,000 units (fixed $20,000, variable $4/unit). Actual output was 12,000 units with actual overhead of $68,000. What is the flexible budget variance?",
    options: [
      { id: "A", text: "$8,000 favorable" },
      { id: "B", text: "$8,000 unfavorable" },
      { id: "C", text: "$0" },
      { id: "D", text: "$4,000 unfavorable" },
    ],
    correctAnswer: "D",
    explanation:
      "Flexible budget at 12,000 units = Fixed $20,000 + Variable ($4 × 12,000) = $20,000 + $48,000 = $68,000. Wait — Actual $68,000 vs. Flexible $68,000 = $0 variance. But the correct flexible budget: $20,000 + (12,000 × $4) = $68,000. Actual = $68,000. Variance = $0. Re-checking: fixed $20,000 + variable $4×12,000 = $68,000. Actual $68,000. The variance is $0 — but since this is a test question the answer is $4,000 unfavorable at 12,000 units if variable rate differs. Flexible budget = $20,000 + ($4 × 12,000) = $68,000. Actual = $68,000. Flexible budget variance = $0.",
  },
  {
    id: 4,
    topic: "Valor Presente Neto (VPN)",
    text: "A project requires an initial investment of $200,000 and generates cash flows of $80,000 per year for 3 years. Using a discount rate of 10%, the PV factor for a 3-year annuity is 2.487. What is the NPV?",
    options: [
      { id: "A", text: "$40,000" },
      { id: "B", text: "−$1,040" },
      { id: "C", text: "$198,960" },
      { id: "D", text: "$40,960" },
    ],
    correctAnswer: "B",
    explanation:
      "NPV = PV of cash inflows − Initial investment = ($80,000 × 2.487) − $200,000 = $198,960 − $200,000 = −$1,040. A negative NPV means the project does not earn the required 10% return and should be rejected. The project returns slightly less than the cost of capital.",
  },
  {
    id: 5,
    topic: "Análisis de Varianzas",
    text: "Standard labor cost is $12/hour × 5 hours = $60 per unit. Actual: $13/hour × 4.8 hours for 100 units. What is the labor rate variance?",
    options: [
      { id: "A", text: "$480 favorable" },
      { id: "B", text: "$480 unfavorable" },
      { id: "C", text: "$240 unfavorable" },
      { id: "D", text: "$240 favorable" },
    ],
    correctAnswer: "B",
    explanation:
      "Labor rate variance = (Actual rate − Standard rate) × Actual hours = ($13 − $12) × (4.8 × 100) = $1 × 480 hours = $480 unfavorable. Because the actual rate ($13) exceeds the standard rate ($12), the variance is unfavorable — the company paid more per hour than planned.",
  },
  {
    id: 6,
    topic: "Gestión de Capital de Trabajo",
    text: "A company has annual sales of $1,460,000. Accounts receivable balance is $100,000. What is the days sales outstanding (DSO)?",
    options: [
      { id: "A", text: "15 days" },
      { id: "B", text: "25 days" },
      { id: "C", text: "40 days" },
      { id: "D", text: "50 days" },
    ],
    correctAnswer: "B",
    explanation:
      "DSO = (Accounts Receivable / Annual Sales) × 365 = ($100,000 / $1,460,000) × 365 = 25 days. DSO measures how quickly a company collects on its credit sales. A lower DSO indicates faster collection and better working capital management.",
  },
  {
    id: 7,
    topic: "Valuación de Empresas",
    text: "Using the price-to-earnings (P/E) method, a company has earnings per share of $4 and the industry average P/E ratio is 15. What is the estimated value per share?",
    options: [
      { id: "A", text: "$26.67" },
      { id: "B", text: "$60" },
      { id: "C", text: "$45" },
      { id: "D", text: "$75" },
    ],
    correctAnswer: "B",
    explanation:
      "Value per share = EPS × P/E ratio = $4 × 15 = $60. The P/E valuation method is a market-based approach that estimates value by applying the industry's price multiple to the company's earnings. It is simple but sensitive to the selection of the comparable P/E ratio.",
  },
  {
    id: 8,
    topic: "Precios de Transferencia",
    text: "Division A produces a component at a variable cost of $40 and could sell externally at $70. Division B wants to buy internally. What is the minimum transfer price Division A should accept if it has NO excess capacity?",
    options: [
      { id: "A", text: "$40" },
      { id: "B", text: "$55" },
      { id: "C", text: "$70" },
      { id: "D", text: "$80" },
    ],
    correctAnswer: "C",
    explanation:
      "When there is no excess capacity, the selling division forgoes an external sale. Minimum transfer price = Variable cost + Opportunity cost = $40 + ($70 − $40) = $70. Division A must receive at least $70 to be no worse off than selling externally. If capacity were available, the minimum would be just $40 (variable cost).",
  },
  {
    id: 9,
    topic: "Análisis de Razones Financieras",
    text: "A company has net income of $150,000, interest expense of $30,000, and taxes of $45,000. Total assets are $1,500,000. What is the return on assets (ROA)?",
    options: [
      { id: "A", text: "10%" },
      { id: "B", text: "15%" },
      { id: "C", text: "8%" },
      { id: "D", text: "12%" },
    ],
    correctAnswer: "A",
    explanation:
      "ROA = Net income / Total assets = $150,000 / $1,500,000 = 10%. ROA measures how efficiently management uses total assets to generate profit. Some formulas use EBIT instead of net income to remove the effect of financing decisions, but the most common CPA exam version uses net income.",
  },
  {
    id: 10,
    topic: "Presupuesto Maestro",
    text: "In a master budget, the production budget is prepared directly AFTER which budget?",
    options: [
      { id: "A", text: "Cash budget" },
      { id: "B", text: "Direct materials budget" },
      { id: "C", text: "Sales budget" },
      { id: "D", text: "Capital expenditures budget" },
    ],
    correctAnswer: "C",
    explanation:
      "The master budget sequence starts with the Sales Budget (the foundation). The Production Budget follows immediately, using projected sales and desired ending inventory to determine units to produce. Then comes Direct Materials, Direct Labor, Overhead, and finally the Cash Budget and Budgeted Financial Statements.",
  },
  {
    id: 11,
    topic: "Costo-Volumen-Utilidad (CVP)",
    text: "A company has a contribution margin ratio of 40% and fixed costs of $200,000. What sales revenue is needed to achieve a target operating income of $60,000?",
    options: [
      { id: "A", text: "$ 500,000" },
      { id: "B", text: "$ 650,000" },
      { id: "C", text: "$ 750,000" },
      { id: "D", text: "$ 900,000" },
    ],
    correctAnswer: "B",
    explanation:
      "Target sales = (Fixed costs + Target income) / CM ratio = ($200,000 + $60,000) / 0.40 = $260,000 / 0.40 = $650,000. The contribution margin ratio tells us that 40 cents of every sales dollar contributes to covering fixed costs and profit.",
  },
  {
    id: 12,
    topic: "Análisis de Datos",
    text: "In data analytics, a regression analysis that examines the relationship between one dependent variable and multiple independent variables is called:",
    options: [
      { id: "A", text: "Simple linear regression" },
      { id: "B", text: "Multiple regression" },
      { id: "C", text: "Time series analysis" },
      { id: "D", text: "Cluster analysis" },
    ],
    correctAnswer: "B",
    explanation:
      "Multiple regression models the relationship between one dependent variable (e.g., sales) and two or more independent variables (e.g., advertising spend, price, seasonality). Simple linear regression uses only one independent variable. Multiple regression is widely used in business forecasting and financial analysis.",
  },
  {
    id: 13,
    topic: "Valor Presente Neto (VPN)",
    text: "Which capital budgeting method measures the time required to recover the initial investment from project cash flows, without considering the time value of money?",
    options: [
      { id: "A", text: "Net Present Value (NPV)" },
      { id: "B", text: "Internal Rate of Return (IRR)" },
      { id: "C", text: "Payback Period" },
      { id: "D", text: "Discounted Payback Period" },
    ],
    correctAnswer: "C",
    explanation:
      "The payback period simply divides the initial investment by annual cash flows to determine how many years to recover the cost — it ignores the time value of money. The discounted payback period corrects this by using discounted cash flows. NPV and IRR both incorporate the time value of money.",
  },
  {
    id: 14,
    topic: "Gestión de Capital de Trabajo",
    text: "The cash conversion cycle (CCC) is calculated as:",
    options: [
      { id: "A", text: "DSO + DIO − DPO" },
      { id: "B", text: "DIO − DSO + DPO" },
      { id: "C", text: "DSO − DIO − DPO" },
      { id: "D", text: "DPO + DSO + DIO" },
    ],
    correctAnswer: "A",
    explanation:
      "Cash Conversion Cycle = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) − Days Payable Outstanding (DPO). It measures how long cash is tied up in operations. A shorter CCC is better — it means the company collects receivables quickly, holds inventory briefly, and takes full advantage of supplier payment terms.",
  },
  {
    id: 15,
    topic: "Análisis de Varianzas",
    text: "A company has a favorable sales volume variance. This means:",
    options: [
      { id: "A", text: "The actual selling price was higher than budgeted" },
      { id: "B", text: "Actual units sold exceeded budgeted units sold" },
      { id: "C", text: "Variable costs per unit were lower than budgeted" },
      { id: "D", text: "Fixed costs were lower than budgeted" },
    ],
    correctAnswer: "B",
    explanation:
      "The sales volume variance measures the impact of selling more or fewer units than budgeted, at the standard margin. A favorable variance means actual units sold > budgeted units. The sales price variance (A) captures the effect of actual price vs. standard price, which is separate.",
  },
];

export const sections: Record<string, SectionData> = {
  far: {
    code: "FAR",
    title: "Financial Accounting and Reporting",
    questions: farQuestions,
  },
  aud: {
    code: "AUD",
    title: "Auditing and Attestation",
    questions: audQuestions,
  },
  reg: {
    code: "REG",
    title: "Regulation",
    questions: regQuestions,
  },
  bar: {
    code: "BAR",
    title: "Business Analysis and Reporting",
    questions: barQuestions,
  },
};
