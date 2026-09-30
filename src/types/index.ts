export interface Permit {
  id: string; // e.g., 'b-permit-switzerland'
  code: string; // 'B'
  title: string;
  officialNameDe: string;
  officialNameFr: string;
  officialNameIt: string;
  legalBasis: string; // 'Art. 33 AIG (SR 142.20)'
  statusType: string; // 'Long-Term Residence'
  validityCycle: string; // '5 yrs (EU/EFTA) / 1 yr renewable (Non-EU)'
  quotas: string; // 'EU exempt / 4,500 Federal Non-EU limit (2025)'
  familyReunification: boolean;
  familyReunificationNotes: string;
  shortSummary: string;
  fullDescription: string;
  sourceAuthority: string; // 'SEM'
  sourceAuthorityFull: string; // 'State Secretariat for Migration'
  verificationDate: string; // '18 January 2025'
  verificationPeriod: string; // '2025/Q1'
  officialSourceUrl: string;
  sections: {
    legalScope: string;
    thirdCountryRules: string;
    employmentMobility: string;
    thirteenthMonth: string;
    taxQuellensteuer: string;
    novTaxFiling: string;
    renewalProtocol: string;
    cPermitPathway: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface WageBenchmark {
  slug: string;
  title: string;
  sector: string; // 'tech' | 'engineering' | 'finance' | 'health' | 'standard'
  nogaCode?: string;
  iscoCode?: string;
  medianAnnualChf: number;
  monthlyBaseChf: number;
  p25AnnualChf: number;
  p75AnnualChf: number;
  standardHours: number;
  monthsCount: 12 | 13;
  regionFocus: string;
  sourceAuthority: string;
  sourceSurvey: string;
  legalBasis: string;
  referencePeriod: string;
  verificationDate: string;
  summary: string;
  detailsHtml?: string;
}

export interface Canton {
  code: string; // 'ZH'
  name: string; // 'Zürich'
  nameEn: string; // 'Zurich'
  nameFr?: string;
  nameIt?: string;
  taxUrl: string;
  taxAuthority: string;
  migrationUrl: string;
  migrationAuthority: string;
  profileCategory: 'central' | 'urban' | 'romandie' | 'other';
  hasCantonalMinWage: boolean;
  minWageNote?: string;
  withholdingTaxNote: string;
}
