# Labour Switzerland (LabourSwitzerland.com)

A high-performance, permit-first public information portal for foreign professionals, cross-border commuters (*frontaliers*), and employers navigating Swiss residence authorizations, withholding tax (*Quellensteuer*), and wage standards.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, styled in accordance with the **Alpine Civic Rationalism** design system pulled from Stitch.

---

## Strategic Architecture

- **Permit-First Framing:** Unlike traditional calculators that treat Swiss residency permits as an afterthought, Labour Switzerland organizes salary, withholding tax, and employment rights directly around the worker's permit class (B, L, G, C).
- **Zero Fabricated Data (Critical Rule):** All wage medians, social contributions (AHV, ALV, BVG), and permit quotas stem from primary Swiss federal authorities:
  - **SEM (State Secretariat for Migration):** AIG/FNIA SR 142.20 permit classifications & quotas.
  - **FSO / BFS (Federal Statistical Office):** Swiss Structure of Earnings Survey (LSE).
  - **ESTV / AFC (Federal Tax Administration):** Quellensteuer Circular No. 45 & StHG/DBG statutes.
  - **SECO & Collective Bargaining Accords (GAV/CCT):** Sectoral minimum standards.
  - **Cantonal Labor Legislation:** 5 cantons with statutory minimum wages (Geneva, Basel-Stadt, Neuchâtel, Jura, Ticino).
- **Honest Calculator Scope:** Models gross contractual pay across hourly/monthly/annual cycles and 12 vs 13 month distributions. Explicitly links out to the official ESTV Net Tax Calculator and SECO Salarium rather than providing inaccurate estimates.

---

## Getting Started

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

---

## How to Add or Update Verified Records

### 1. Adding a New Permit Dossier
1. Open `src/data/permits.ts`.
2. Add a new key to the `PERMITS` dictionary complying with the `Permit` type definition:
   ```typescript
   "ci-permit-switzerland": {
     id: "ci-permit-switzerland",
     code: "Ci",
     title: "Ci Permit (Spousal Residence with Gainful Employment)",
     // ...
   }
   ```
3. Ensure all figures include `legalBasis` (e.g. `Art. 35a AIG / SR 142.20`), `verificationPeriod`, and direct `.admin.ch` source URLs.
4. The page will be automatically statically generated at `/permits/[type]` and indexed in `/sitemap.xml`.

### 2. Adding a Wage Benchmark
1. Open `src/data/wages.ts`.
2. Add an entry to the `WAGE_BENCHMARKS` array:
   ```typescript
   {
     slug: "data-scientist-salary-switzerland",
     title: "Data Scientist / Machine Learning Engineer",
     sector: "tech",
     nogaCode: "NOGA 6202",
     medianAnnualChf: 128000,
     monthlyBaseChf: 10667,
     p25AnnualChf: 112000,
     p75AnnualChf: 152000,
     standardHours: 41.5,
     monthsCount: 12,
     regionFocus: "Zurich / Geneva / Vaud Metros",
     sourceAuthority: "FSO / BFS",
     sourceSurvey: "Swiss Earnings Structure Survey (LSE)",
     legalBasis: "BFS-Stat-2024",
     referencePeriod: "2024–2026",
     verificationDate: "March 2025",
     summary: "...",
   }
   ```
3. The benchmark will automatically appear on `/wages`, generate a dedicated page at `/wages/[slug]`, and be added to the dynamic sitemap.

---

## Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Click **Deploy**.
5. In **Project Settings** → **Domains**, add `labourswitzerland.com` and `www.labourswitzerland.com`.
6. Configure your DNS provider with the CNAME or A records provided by Vercel.

---

## BEFORE PUBLIC LAUNCH Checklist

- [ ] **Domain Verification:** Verify the `labourswitzerland.com` Domain property in [Google Search Console](https://search.google.com/search-console).
- [ ] **Sitemap Submission:** Submit `https://labourswitzerland.com/sitemap.xml` in Search Console.
- [ ] **Inspection & Indexing:** Request manual indexing for primary landing pages (`/`, `/permits`, `/calculator`, `/cantons`, `/wages`).
- [ ] **Owner / Publisher Info:** Update the contact email in `src/app/contact/page.tsx` (`editorial@labourswitzerland.com`) to your active monitored mailbox.
- [ ] **Privacy & Legal Check:** Verify that any future third-party cookies or scripts (e.g. AdSense, Cloudflare Web Analytics) are disclosed in `src/app/privacy/page.tsx`.
- [ ] **Independence Header:** Verify that all pages maintain the sitewide independence notice: *"Labour Switzerland is an independent civic guide and is not affiliated with SEM, SECO, or any cantonal authority."*
