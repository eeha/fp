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
};
