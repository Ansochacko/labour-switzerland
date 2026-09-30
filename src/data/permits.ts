import { Permit } from "@/types";

export const PERMITS: Record<string, Permit> = {
  "b-permit-switzerland": {
    id: "b-permit-switzerland",
    code: "B",
    title: "B Permit (Residence Permit)",
    officialNameDe: "Aufenthaltsbewilligung",
    officialNameFr: "Autorisation de séjour",
    officialNameIt: "Permesso di dimora",
    legalBasis: "SR 142.20 · Art. 33 AIG / OASA Art. 19-24",
    statusType: "Long-Term Residence",
    validityCycle: "5 Years (EU/EFTA) / 1 Year Renewable (Non-EU)",
    quotas: "EU Exempt / 4,500 Federal Non-EU Quota Cap (2025)",
    familyReunification: true,
    familyReunificationNotes: "Stipulated under Art. 42-44 AIG (spouse and children under 18)",
    shortSummary:
      "The primary long-term residence authorization granted to foreign nationals taking up employment in Switzerland. Valid 5 years for EU/EFTA citizens and 1 year (renewable) for third-country nationals.",
    fullDescription:
      "The Swiss Residence Permit (Class B) constitutes the primary legal authorization for individuals residing continuously within the Confederation while maintaining their primary fiscal and municipal residence inside a Swiss commune. It grants holder status under the Federal Act on Foreign Nationals and Integration (FNIA / AIG).",
    sourceAuthority: "SEM",
    sourceAuthorityFull: "State Secretariat for Migration (Staatssekretariat für Migration)",
    verificationDate: "18 January 2025",
    verificationPeriod: "2025/Q1",
    officialSourceUrl: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html",
    sections: {
      legalScope:
        "The B permit constitutes an individual residence authorization based on Art. 33 AIG. For citizens belonging to EU/EFTA member states holding an employment contract of at least one calendar year (or indefinite duration), issuance is governed by reciprocal treaty rights under the Agreement on the Free Movement of Persons (AFMP), conferring a five-year grant period.",
      thirdCountryRules:
        "Third-country applicants (non-EU/EFTA) are treated under strict sovereign admissions criteria under Art. 20–23 AIG. Initial grants are capped by federal annual quotas (4,500 B permits nationwide in 2025), allocated by canton, issued on a renewable 12-month cadence, and require proof that no equivalent domestic or EU/EFTA resident applicant was available in the Swiss workforce (Inländervorrang).",
      employmentMobility:
        "EU/EFTA citizens possess unconditional occupational and geographic mobility across all 26 cantons under the AFMP. Changing employers or cantons requires solely administrative notification to the local residents registry (Einwohnerkontrolle / Contrôle des habitants) within 14 calendar days. Third-country nationals, however, often face permit ties to their initial sponsoring employer during their first 24 to 36 months; changing jobs requires cantonal labor office approval (e.g. AWA) to confirm continued salary compliance.",
      thirteenthMonth:
        "Swiss federal code (CO Art. 322d) does not mandate a 13th-month salary automatically, yet over 80% of Swiss collective bargaining agreements (GAV/CCT) mandate it. For B permit holders, cantonal authorities evaluate the full annualized guaranteed compensation to assess wage anti-dumping conformity.",
      taxQuellensteuer:
        "All foreign employees holding a B permit who do not possess a Swiss spouse or registered partnership are subject by default to Quellensteuer (Withholding Tax at Source). The tax is deducted directly by the employer from each monthly pay slip, covering direct federal, cantonal, and communal taxes based on cantonal tariff tables.",
      novTaxFiling:
        "If gross annual income exceeds CHF 120,000, entry into the Ordinary Retroactive Tax Assessment (NOV - Nachträgliche ordentliche Veranlagung) is mandatory under Federal Tax Law (DBG Art. 83-101 / StHG Art. 32-38). If earning under CHF 120,000, workers may voluntarily apply for NOV before the strict March 31 forfeiture deadline to claim deductions such as Pillar 3a contributions, childcare expenses, and pension buy-ins.",
      renewalProtocol:
        "Approximately 8 to 12 weeks before current permit card expiration, the local municipal authority transmits an official Renewal Application Form (Verfallsanzeige / Formular 2x). Renewal requires an employer confirmation of active employment and a clean debt enforcement register extract (Betreibungsauszug). Processing typically takes 3 to 6 weeks.",
      cPermitPathway:
        "The permanent milestone is the C Permit (Niederlassungsbewilligung). EU-15 and EFTA citizens are eligible after 5 continuous years of residence. Non-EU citizens are eligible after 10 years of continuous residence, or after 5 years via the fast-track VINTA integration pathway (requiring certified B1 spoken / A2 written national language proficiency and civic integration).",
    },
    faqs: [
      {
        question: "Can I change employers on a Swiss B permit?",
        answer:
          "If you are an EU/EFTA citizen, yes—you have full occupational and geographical mobility across Switzerland under the AFMP. You must notify the communal population office within 14 days of changing jobs or addresses. If you are a non-EU/EFTA citizen, your initial B permit is often tied to your sponsoring employer and canton; changing roles requires formal pre-approval from the cantonal labor office (e.g. AWA in Zurich or OCPM in Geneva).",
      },
      {
        question: "Do B permit holders pay withholding tax (Quellensteuer)?",
        answer:
          "Yes. All foreign employees residing in Switzerland on a B permit who are not married to a Swiss citizen or C permit holder are taxed at source (Quellensteuer). Your employer automatically deducts the tax from your monthly gross salary according to your cantonal tariff code (e.g., A0 for single, B1 for married single-earner with one child).",
      },
      {
        question: "What is the CHF 120,000 threshold for B permit tax returns?",
        answer:
          "Under Swiss federal tax harmonisation law (DBG / StHG), if your gross annual salary exceeds CHF 120,000 in any tax year, you are legally required to file a retroactive ordinary tax declaration (NOV - Nachträgliche ordentliche Veranlagung). If earning under CHF 120,000, you may choose to submit a voluntary NOV before March 31 to claim extra deductions, but this choice is irrevocable.",
      },
      {
        question: "How long does a B permit last?",
        answer:
          "For EU/EFTA citizens with an employment contract of one year or more (or indefinite), a B permit is valid for 5 years. For third-country (non-EU/EFTA) citizens, the initial B permit is typically issued for 1 year and must be renewed annually with proof of continued employment.",
      },
      {
        question: "Can my family join me in Switzerland on a B permit?",
        answer:
          "Yes. Under Art. 42-44 AIG, your spouse and children under 18 may join you via family reunification (Familiennachzug), provided you have adequate housing and sufficient financial resources without drawing social assistance.",
      },
    ],
  },

  "l-permit-switzerland": {
    id: "l-permit-switzerland",
    code: "L",
    title: "L Permit (Short-Term Residence Permit)",
    officialNameDe: "Kurzaufenthaltsbewilligung",
    officialNameFr: "Autorisation de séjour de courte durée",
    officialNameIt: "Permesso di dimora temporanea",
    legalBasis: "SR 142.20 · Art. 32 AIG",
    statusType: "Short-Term Residence",
    validityCycle: "Up to 364 Days (Equal to Contract Length)",
    quotas: "Federal Quota Cap (4,000 Non-EU limit in 2025)",
    familyReunification: true,
    familyReunificationNotes: "Possible under strict cantonal review if contract duration exceeds 6 months",
    shortSummary:
      "A short-term residence permit designed for fixed-term employment contracts of up to 364 days. Subject to strict federal quotas for non-EU/EFTA nationals.",
    fullDescription:
      "The Short-Term Residence Permit (Class L) is intended for foreign nationals residing temporarily in Switzerland for a specific purpose—typically fixed-term employment, project secondments, or postgraduate internships lasting up to one year.",
    sourceAuthority: "SEM",
    sourceAuthorityFull: "State Secretariat for Migration",
    verificationDate: "18 January 2025",
    verificationPeriod: "2025/Q1",
    officialSourceUrl: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html",
    sections: {
      legalScope:
        "Art. 32 AIG governs the L permit. For EU/EFTA nationals with an employment contract between 3 and 12 months, the permit is granted automatically for the contract term. For assignments under 90 days per calendar year, EU citizens can use the online notification procedure (Meldeverfahren) instead of an L permit.",
      thirdCountryRules:
        "For third-country nationals, L permits are strictly quota-controlled (4,000 permits allocated nationally for 2025). The employer must demonstrate that no domestic or EU/EFTA worker could fill the role, and salary must meet prevailing cantonal wage standards.",
      employmentMobility:
        "The L permit is strictly tied to the designated employer and employment contract. Switching employers usually requires departing Switzerland and having a new employer file a fresh application, subject to cantonal approval and quota availability.",
      thirteenthMonth:
        "If the contract specifies a pro-rata 13th-month salary, it is paid in accordance with the contract terms. Overtime and unworked holiday hours must be paid out at departure.",
      taxQuellensteuer:
        "Withholding tax (Quellensteuer) applies from day one. Employers deduct cantonal, communal, and federal taxes at source. Because the stay is short-term, filing for an ordinary assessment (NOV) is rarely permitted unless specific cantonal residency criteria are met.",
      novTaxFiling:
        "NOV filing is generally restricted for L permit holders, as tax at source serves as a definitive settlement. Specific deductions may only be claimed if worldwide income conditions or cross-border rules apply.",
      renewalProtocol:
        "An L permit may be renewed up to a maximum cumulative duration of 24 months if the employer can prove an ongoing business necessity. However, conversion to a B permit requires a new application under separate legal quotas for non-EU nationals.",
      cPermitPathway:
        "Time spent on an L permit generally does NOT count toward the 5- or 10-year residency requirement for a C permit, unless followed immediately by a continuous B permit that is officially credited by the cantonal migration office.",
    },
    faqs: [
      {
        question: "Can an L permit be extended beyond 12 months?",
        answer:
          "Yes, an L permit can be extended up to an aggregate maximum of 24 months if you remain with the same employer on an ongoing project. However, extending beyond 24 months is exceptionally rare and usually requires transitioning to a B permit.",
      },
      {
        question: "Does time on an L permit count towards a C permit?",
        answer:
          "Under standard practice, years spent on an L permit are not credited toward the continuous residence requirement for a C permanent settlement permit, unless you subsequently transition to a B permit and the cantonal migration office grants discretionary retrospective credit.",
      },
      {
        question: "Do L permit holders pay Swiss taxes?",
        answer:
          "Yes. Like B permit holders, L permit holders are taxed at source (Quellensteuer) directly through payroll deductions.",
      },
    ],
  },

  "g-permit-switzerland": {
    id: "g-permit-switzerland",
    code: "G",
    title: "G Permit (Cross-Border Commuter Permit)",
    officialNameDe: "Grenzgängerbewilligung",
    officialNameFr: "Autorisation frontalière",
    officialNameIt: "Permesso per frontalieri",
    legalBasis: "SR 142.20 · Art. 35 AIG / AFMP Annex I Art. 13",
    statusType: "Cross-Border Commuter",
    validityCycle: "5 Years (Renewable)",
    quotas: "No Quota for EU/EFTA Citizens",
    familyReunification: false,
    familyReunificationNotes: "Not applicable; family resides in worker's home country outside Switzerland",
    shortSummary:
      "For cross-border workers (frontaliers / Grenzgänger) who reside in neighboring EU/EFTA countries and commute to work in Switzerland. Weekly return to foreign residence is mandatory.",
    fullDescription:
      "The Cross-Border Commuter Permit (Class G) authorizes citizens of EU/EFTA member states to take up employment in Switzerland while maintaining their primary fiscal and personal domicile in a neighbouring European country (France, Germany, Italy, Austria, or Liechtenstein).",
    sourceAuthority: "SEM",
    sourceAuthorityFull: "State Secretariat for Migration",
    verificationDate: "18 January 2025",
    verificationPeriod: "2025/Q1",
    officialSourceUrl: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html",
    sections: {
      legalScope:
        "Art. 35 AIG and AFMP Annex I Art. 13 regulate cross-border commuters. Under the AFMP, border zone geographic restrictions were abolished for EU/EFTA nationals—workers can commute from anywhere in the EU/EFTA to work anywhere in Switzerland, provided they return to their foreign residence at least once a week.",
      thirdCountryRules:
        "Third-country nationals may only obtain a G permit if they have held a permanent residence right in a neighbouring border country for at least six months and work in an adjacent Swiss border zone.",
      employmentMobility:
        "EU/EFTA G permit holders enjoy full labor mobility. They may change employers or work across cantons, with administrative notification required to the cantonal labor office.",
      thirteenthMonth:
        "Subject to Swiss employment contracts and applicable collective agreements (GAV/CCT). The 13th-month salary is standard across Swiss employers regardless of commuter status.",
      taxQuellensteuer:
        "Taxation is governed by bilateral double-taxation treaties (DTA) between Switzerland and the residence country. For example: France has an 8-canton agreement where tax is paid in France (except Geneva, where tax is deducted at source in Switzerland). With Germany, tax is deducted at a 4.5% withholding rate in Switzerland with primary taxation in Germany. With Italy, a new bilateral agreement enacted in 2024 applies specific source-withholding sharing rules.",
      novTaxFiling:
        "G permit holders generally cannot file a standard NOV tax return in Switzerland, unless they qualify under the 'quasi-resident' status (where at least 90% of worldwide household income is earned in Switzerland) and elect Swiss ordinary taxation.",
      renewalProtocol:
        "Valid for 5 years if the employment contract is of indefinite duration or exceeds one year. Renewal requires employer confirmation of ongoing contract.",
      cPermitPathway:
        "A G permit never leads to a C permit, because Swiss permanent residence requires uninterrupted physical and legal residence inside Switzerland.",
    },
    faqs: [
      {
        question: "Can I live in Switzerland on a G permit?",
        answer:
          "No. A G permit explicitly requires that your primary residence remain outside Switzerland in an EU/EFTA country. You must return to your domicile abroad at least once a week. If you relocate your primary residence into Switzerland, you must convert your G permit to a B permit.",
      },
      {
        question: "Where do G permit holders pay income tax?",
        answer:
          "It depends strictly on which canton you work in and which country you reside in. For example: In Canton Geneva, French frontaliers pay withholding tax directly in Switzerland. In Vaud, Basel, and Zurich, French cross-border workers generally pay income tax to France, with Switzerland receiving a cantonal financial compensation. For commuters residing in Germany, Switzerland withholds 4.5% at source, and Germany taxes the rest.",
      },
      {
        question: "Does a G permit lead to Swiss permanent residence (C permit)?",
        answer:
          "No. The G permit is strictly a commuter work permit. Because you do not reside within Switzerland, time spent working under a G permit does not accumulate toward Swiss permanent residence (C permit) or Swiss citizenship.",
      },
    ],
  },

  "c-permit-switzerland": {
    id: "c-permit-switzerland",
    code: "C",
    title: "C Permit (Settlement Permit)",
    officialNameDe: "Niederlassungsbewilligung",
    officialNameFr: "Autorisation d'établissement",
    officialNameIt: "Permesso di domicilio",
    legalBasis: "SR 142.20 · Art. 34 AIG",
    statusType: "Permanent Settlement",
    validityCycle: "Indefinite Duration (Card renewed every 5 yrs)",
    quotas: "No Quotas Apply",
    familyReunification: true,
    familyReunificationNotes: "Full statutory family reunification rights under Art. 42 AIG",
    shortSummary:
      "Permanent residence status conferring unrestricted access to the Swiss labour market without employer ties or quota caps. Eligible after 5 or 10 continuous years in Switzerland.",
    fullDescription:
      "The Settlement Permit (Class C) grants permanent residency in the Swiss Confederation. It is issued for an indefinite duration, freeing the holder from employment restrictions, quotas, and automatic withholding tax at source.",
    sourceAuthority: "SEM",
    sourceAuthorityFull: "State Secretariat for Migration",
    verificationDate: "18 January 2025",
    verificationPeriod: "2025/Q1",
    officialSourceUrl: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html",
    sections: {
      legalScope:
        "Art. 34 AIG establishes the Settlement Permit. Once granted, your right to stay in Switzerland is permanent and unconditional. It cannot be revoked simply due to job loss or economic downturn, provided no serious criminal offenses or long-term welfare dependency occur.",
      thirdCountryRules:
        "Non-EU/EFTA nationals can qualify for a C permit after 10 continuous years of residence with a B permit, or after 5 years through the VINTA fast-track integration pathway (showing successful integration, clean debt register, and language proficiency of at least A2 written / B1 spoken in the local national language).",
      employmentMobility:
        "Complete freedom of employment: C permit holders can work for any employer, change sectors, start a business (GmbH / AG), or engage in independent freelancing without needing administrative labor market authorization.",
      thirteenthMonth:
        "Standard statutory and collective accord principles apply as with Swiss citizens.",
      taxQuellensteuer:
        "C permit holders do NOT pay withholding tax at source (Quellensteuer). Instead, they are placed in the Ordinary Tax Assessment system (ordentliche Steuerveranlagung), receiving annual tax declaration forms from their cantonal and municipal tax administration, exactly like Swiss citizens.",
      novTaxFiling:
        "Not applicable. You already file the standard annual tax declaration and pay provisional quarterly or annual installments directly to the cantonal tax office.",
      renewalProtocol:
        "The residence status itself is permanent. The physical biometric identity card must be refreshed every 5 years at the local migration office (a formality confirming continuing domicile in the canton).",
      cPermitPathway:
        "Holder of a C permit may apply for Swiss citizenship (Ordentliche Einbürgerung) after meeting the federal 10-year residency requirement (with years between ages 8 and 18 counting double) and cantonal/communal stay requirements (typically 2 to 5 years in the same municipality).",
    },
    faqs: [
      {
        question: "When am I eligible for a C permit?",
        answer:
          "Citizens of EU-15 and EFTA countries (and certain bilateral treaty partners like the USA and Canada) are typically eligible after 5 continuous years of legal residence on a B permit. Citizens of other countries are eligible after 10 continuous years, or after 5 continuous years if they demonstrate advanced integration under Art. 34 para. 4 AIG (VINTA fast track: B1 spoken / A2 written in the official language of the canton, clean criminal and debt enforcement record, and economic self-sufficiency).",
      },
      {
        question: "Do C permit holders pay Quellensteuer?",
        answer:
          "No. Transitioning to a C permit removes you from withholding tax at source. You are transitioned into ordinary tax assessment, filing an annual tax return and paying cantonal, communal, and direct federal taxes directly to your canton.",
      },
      {
        question: "Can a C permit expire if I leave Switzerland?",
        answer:
          "If you leave Switzerland without deregistering, your C permit expires automatically after 6 months abroad. However, under Art. 61 AIG, you may apply to your cantonal migration office for a permit freeze (Aufrechterhaltung) for up to 4 years to complete military service, studies, or a temporary assignment abroad.",
      },
    ],
  },
};

export const PERMIT_COMPARISON_MATRIX = [
  {
    feature: "Legal Nature",
    l: "Short-Term Stay",
    b: "Residence Authorization",
    g: "Cross-Border Commuter",
    c: "Permanent Settlement",
  },
  {
    feature: "Standard Duration",
    l: "Max 364 days",
    b: "1 to 5 years",
    g: "5 years (renewable)",
    c: "Indefinite",
  },
  {
    feature: "Swiss Residence",
    l: "Mandatory",
    b: "Mandatory",
    g: "Forbidden (Daily/weekly return)",
    c: "Mandatory",
  },
  {
    feature: "Employer Tied",
    l: "Strictly tied",
    b: "Non-EU initially; EU free",
    g: "Free inside boundary",
    c: "Unrestricted",
  },
  {
    feature: "Tax at Source (Quellensteuer)",
    l: "Yes (Automatic)",
    b: "Yes (unless spouse is CH/C)",
    g: "Varies by bilateral treaty",
    c: "No (Ordinary Assessment)",
  },
  {
    feature: "Path to C Settlement",
    l: "Generally not credited",
    b: "Direct (5–10 years)",
    g: "No direct path",
    c: "Already achieved",
  },
];
