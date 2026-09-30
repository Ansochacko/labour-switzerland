import { WageBenchmark } from "@/types";

export const WAGE_BENCHMARKS: WageBenchmark[] = [
  {
    slug: "software-engineer-salary-switzerland",
    title: "Software Engineer / Tech Lead",
    sector: "tech",
    nogaCode: "NOGA 6201",
    iscoCode: "ISCO-08 2512",
    medianAnnualChf: 122500,
    monthlyBaseChf: 10208,
    p25AnnualChf: 105000,
    p75AnnualChf: 148000,
    standardHours: 41.5,
    monthsCount: 12,
    regionFocus: "Zurich / Basel / Geneva Tech Corridors",
    sourceAuthority: "FSO / BFS",
    sourceSurvey: "Swiss Earnings Structure Survey (LSE / ESS)",
    legalBasis: "NOGA Sector 62 / BFS-Stat-2024",
    referencePeriod: "2024–2026",
    verificationDate: "15 January 2025",
    summary:
      "Mid to Senior Software Engineers in major Swiss technology hubs earn a median base compensation of CHF 122,500/year. 13th-month salary structures are customary in Swiss firms, while multinational tech enterprises often provide 12 equal monthly installments with performance equity.",
    detailsHtml:
      "Salaries in Swiss tech vary significantly based on company profile: International tech giants with Zurich R&D hubs offer higher base figures and RSUs, whereas domestic Swiss enterprises and cantonal administration adhere closer to GAV or cantonal wage bands.",
  },
  {
    slug: "mechanical-engineer-salary-switzerland",
    title: "Senior Precision & Mechanical Engineer",
    sector: "engineering",
    nogaCode: "GAV MEM",
    iscoCode: "ISCO-08 2144",
    medianAnnualChf: 108000,
    monthlyBaseChf: 8307,
    p25AnnualChf: 92000,
    p75AnnualChf: 126000,
    standardHours: 40.0,
    monthsCount: 13,
    regionFocus: "Aargau / Solothurn / St. Gallen MEM Clusters",
    sourceAuthority: "SWISSMEM",
    sourceSurvey: "Industry Agreement & FSO Enterprise Register",
    legalBasis: "CLA Swiss MEM 2023–2028 / SR 220",
    referencePeriod: "2023–2028",
    verificationDate: "10 February 2025",
    summary:
      "Governed by the Swissmem Collective Bargaining Agreement (GAV MEM), senior precision engineers earn a median annual package of CHF 108,000, standardly divided over 13 monthly distributions.",
    detailsHtml:
      "The GAV MEM sets binding minimum wage classes for entry-level technicians and experienced engineers, guaranteeing a pro-rata 13th month and defined overtime remuneration mechanisms under ArG Art. 12.",
  },
  {
    slug: "financial-analyst-salary-switzerland",
    title: "Financial Analyst & Risk Controller",
    sector: "finance",
    nogaCode: "SBA TARIFF",
    iscoCode: "ISCO-08 2412",
    medianAnnualChf: 130000,
    monthlyBaseChf: 10833,
    p25AnnualChf: 110000,
    p75AnnualChf: 165000,
    standardHours: 42.0,
    monthsCount: 12,
    regionFocus: "Zurich / Geneva Banking & Wealth Hubs",
    sourceAuthority: "SBA / ASB",
    sourceSurvey: "Swiss Bankers Association Employment Standards & FSO",
    legalBasis: "Banking Labor Framework SBA / CO Art. 322",
    referencePeriod: "2024–2025",
    verificationDate: "15 January 2025",
    summary:
      "Median fixed base compensation for financial analysts and risk controllers stands at CHF 130,000/year, complemented by discretionary variable components ranging between 8% and 22% of base pay.",
    detailsHtml:
      "Swiss Federal Supreme Court rulings distinguish between contractual 13th month salary and genuine discretionary bonuses. In banking, variable bonuses are evaluated strictly under BGer proportionality precedents.",
  },
  {
    slug: "registered-nurse-salary-switzerland",
    title: "Registered Healthcare Professional / Nurse",
    sector: "health",
    nogaCode: "CANTONAL CCT",
    iscoCode: "ISCO-08 2221",
    medianAnnualChf: 84000,
    monthlyBaseChf: 6461,
    p25AnnualChf: 74000,
    p75AnnualChf: 96500,
    standardHours: 42.0,
    monthsCount: 13,
    regionFocus: "Vaud / Bern / Zurich Hospital Networks",
    sourceAuthority: "SBK / ASI",
    sourceSurvey: "Swiss Association of Nurses & H+ Hospital Tariff Registry",
    legalBasis: "CCT Santé 21 Vaud / Cantonal Civil Servant Scales",
    referencePeriod: "2024–2025",
    verificationDate: "20 January 2025",
    summary:
      "Public hospital nurses in Switzerland earn a median base compensation of CHF 84,000/year (13-month distribution), supplemented by mandatory statutory allowances for night shifts and on-call service (+CHF 6–9/h).",
    detailsHtml:
      "Healthcare compensation is heavily regulated by cantonal collective agreements (such as CCT Santé 21 in Vaud or Cantonal salary classes in Zurich/Bern). Years of experience directly advance civil service wage grade rankings.",
  },
];

export const CANTONAL_MINIMUM_WAGES = [
  {
    cantonCode: "GE",
    cantonName: "Genève (Geneva)",
    hourlyChf: "CHF 24.32 / hour",
    monthlyEstimate: "~CHF 4,426 / month (at 42 hrs/wk)",
    legalBasis: "Loi sur l'inspection et les relations du travail (LIRT)",
    updated: "January 2025 indexation",
    notes:
      "Highest statutory minimum wage in Switzerland, adjusted annually to the cantonal consumer price index (CPI). Applies across all private economic sectors with narrow agricultural exceptions.",
  },
  {
    cantonCode: "BS",
    cantonName: "Basel-Stadt",
    hourlyChf: "CHF 21.70 / hour",
    monthlyEstimate: "~CHF 3,950 / month",
    legalBasis: "Gesetz über den kantonalen Mindestlohn (BSG 812.100)",
    updated: "January 2025 indexation",
    notes:
      "Approved by popular referendum. Applies to all workers performing customary duties within the territory of Basel-Stadt, overriding conflicting lower collective agreements unless declared generally binding by the Federal Council.",
  },
  {
    cantonCode: "NE",
    cantonName: "Neuchâtel",
    hourlyChf: "CHF 21.09 / hour",
    monthlyEstimate: "~CHF 3,838 / month",
    legalBasis: "Loi sur l'emploi et l'assurance-chômage (LEAC)",
    updated: "2024 / 2025 cycle",
    notes:
      "First canton in Switzerland to implement a statutory minimum wage after Federal Supreme Court validation. Indexed annually to cantonal inflation.",
  },
  {
    cantonCode: "JU",
    cantonName: "Jura",
    hourlyChf: "CHF 20.60 / hour",
    monthlyEstimate: "~CHF 3,749 / month",
    legalBasis: "Loi cantonale sur le salaire minimum",
    updated: "2024 / 2025 cycle",
    notes:
      "Enacted to combat cross-border wage dumping from neighboring French regions, guaranteeing a minimum floor for both resident and frontalier workers.",
  },
  {
    cantonCode: "TI",
    cantonName: "Ticino",
    hourlyChf: "CHF 19.75 – 20.25 / hour",
    monthlyEstimate: "~CHF 3,600 / month",
    legalBasis: "Legge sul salario minimo cantonale (LSM)",
    updated: "2024 / 2025 cycle",
    notes:
      "Sectorally differentiated minimum wage bands applied based on economic branch, enacted specifically to prevent downward pressure in border zones adjacent to Lombardy.",
  },
];
