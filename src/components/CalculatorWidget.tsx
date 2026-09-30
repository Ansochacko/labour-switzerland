"use client";

import { useState, useId } from "react";
import { TrustCard } from "./TrustCard";

export function CalculatorWidget() {
  const [mode, setMode] = useState<"hourly" | "monthly" | "annual">("hourly");
  const [baseAmount, setBaseAmount] = useState<number>(45.0);
  const [weeklyHours, setWeeklyHours] = useState<number>(42.0);
  const [numPayments, setNumPayments] = useState<12 | 13>(13);
  const [includeVacation, setIncludeVacation] = useState<boolean>(true);
  const [vacationRate, setVacationRate] = useState<number>(8.33); // 8.33% (4 weeks) or 10.64% (5 weeks)

  const hoursInputId = useId();

  // Reset to Swiss median baseline
  const handleReset = () => {
    setMode("hourly");
    setBaseAmount(45.0);
    setWeeklyHours(42.0);
    setNumPayments(13);
    setIncludeVacation(true);
    setVacationRate(8.33);
  };

  // Calculations
  const weeksPerYear = 52;
  const annualHours = weeklyHours * weeksPerYear;

  let calculatedAnnual = 0;
  let calculatedHourly = 0;

  if (mode === "hourly") {
    // If vacation pay indemnity is included in hourly rate:
    // Base wage + vacation indemnity factor
    const effectiveHourly = includeVacation
      ? baseAmount * (1 + vacationRate / 100)
      : baseAmount;
    calculatedAnnual = effectiveHourly * annualHours;
    calculatedHourly = effectiveHourly;
  } else if (mode === "monthly") {
    calculatedAnnual = baseAmount * numPayments;
    calculatedHourly = annualHours > 0 ? calculatedAnnual / annualHours : 0;
  } else {
    // annual
    calculatedAnnual = baseAmount;
    calculatedHourly = annualHours > 0 ? calculatedAnnual / annualHours : 0;
  }

  const calculatedMonthly =
    numPayments === 13 ? calculatedAnnual / 13 : calculatedAnnual / 12;
  const calculatedWeekly = calculatedAnnual / weeksPerYear;

  const formatChf = (val: number) => {
    return val.toLocaleString("de-CH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: Inputs (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-surface-container">
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">
                Contractual Baseline
              </span>
              <h2 className="text-xl font-semibold text-primary">
                Remuneration Parameters
              </h2>
            </div>
            <button
              onClick={handleReset}
              className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>↺ Reset Defaults</span>
            </button>
          </div>

          {/* Pay Structure Tabs */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface">
              Input Pay Structure
            </label>
            <div className="grid grid-cols-3 bg-surface-container-low p-1 rounded">
              <button
                type="button"
                onClick={() => {
                  setMode("hourly");
                  if (baseAmount > 1000) setBaseAmount(45.0);
                }}
                className={`py-2 text-xs font-medium rounded transition-all ${
                  mode === "hourly"
                    ? "bg-surface-container-lowest text-primary shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Hourly Wage
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("monthly");
                  if (baseAmount < 100 || baseAmount > 30000) setBaseAmount(6800);
                }}
                className={`py-2 text-xs font-medium rounded transition-all ${
                  mode === "monthly"
                    ? "bg-surface-container-lowest text-primary shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Monthly Salary
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("annual");
                  if (baseAmount < 1000) setBaseAmount(88400);
                }}
                className={`py-2 text-xs font-medium rounded transition-all ${
                  mode === "annual"
                    ? "bg-surface-container-lowest text-primary shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Annual Package
              </button>
            </div>
          </div>

          {/* Dynamic Base Wage Input */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="base-amount-input" className="text-xs font-semibold text-on-surface">
                {mode === "hourly"
                  ? "Contracted Hourly Rate (CHF)"
                  : mode === "monthly"
                  ? "Contracted Monthly Base (CHF)"
                  : "Contracted Annual Gross Package (CHF)"}
              </label>
              <span className="font-mono text-xs text-on-surface-variant">
                CHF Currency Base
              </span>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 font-mono text-sm text-on-surface-variant font-semibold">
                CHF
              </span>
              <input
                id="base-amount-input"
                type="number"
                min="0"
                step={mode === "hourly" ? "0.50" : "100"}
                value={baseAmount}
                onChange={(e) => setBaseAmount(parseFloat(e.target.value) || 0)}
                className="w-full bg-surface-container-low rounded pl-14 pr-4 py-3 font-mono text-xl font-semibold text-primary focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/60 focus:border-primary transition-all"
              />
            </div>
            <p className="font-mono text-[11px] text-on-surface-variant">
              {mode === "hourly"
                ? "Typical Swiss median hourly wage spans CHF 38.00 – CHF 65.00 depending on industry."
                : mode === "monthly"
                ? "Swiss median national monthly gross is CHF 6,788 (FSO Earnings Structure Survey)."
                : "Standard annual gross packages in Switzerland commonly range between CHF 75,000 and CHF 160,000."}
            </p>
          </div>

          {/* Working Hours Selector & Slider */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label htmlFor={hoursInputId} className="text-xs font-semibold text-on-surface">
                  Contracted Hours per Week
                </label>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  Swiss Statutory Max: 45h (Office/Industry) or 50h (Trades)
                </span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded">
                <span className="font-mono text-xs font-semibold text-primary">
                  {weeklyHours.toFixed(1)}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  hrs/wk
                </span>
              </div>
            </div>
            <input
              id={hoursInputId}
              type="range"
              min="20"
              max="50"
              step="0.5"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(parseFloat(e.target.value))}
              className="w-full accent-primary h-2 bg-surface-container rounded cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[11px] text-on-surface-muted">
              <span>20.0h (Part-time)</span>
              <span className="font-semibold text-on-surface">40.0h</span>
              <span className="font-semibold text-secondary">42.0h (CH Standard)</span>
              <span>45.0h (Statutory Limit)</span>
            </div>
          </div>

          {/* 12 vs 13 Month Structure Toggle */}
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-on-surface">
                Annual Distribution Structure
              </label>
              <span className="font-mono text-xs text-secondary font-semibold">
                13th Month Typical in CH
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setNumPayments(12)}
                className={`p-3 rounded text-left transition-all border ${
                  numPayments === 12
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant/60"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">12 Payments</span>
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      numPayments === 12 ? "bg-white border-white" : "border-outline"
                    }`}
                  ></span>
                </div>
                <p className="font-mono text-[11px] opacity-80">
                  Straight annual division over 12 calendar cycles.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setNumPayments(13)}
                className={`p-3 rounded text-left transition-all border ${
                  numPayments === 13
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-low text-on-surface-variant border-outline-variant/60"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">13 Payments</span>
                  <span
                    className={`w-3 h-3 rounded-full border ${
                      numPayments === 13 ? "bg-white border-white" : "border-outline"
                    }`}
                  ></span>
                </div>
                <p className="font-mono text-[11px] opacity-80">
                  Standard Swiss custom: December dual payout.
                </p>
              </button>
            </div>
          </div>

          {/* Hourly Vacation Indemnity toggle */}
          {mode === "hourly" && (
            <div className="p-4 bg-surface-container-low rounded border border-outline-variant/60 flex items-start gap-4">
              <div className="pt-0.5">
                <input
                  id="vacation-toggle"
                  type="checkbox"
                  checked={includeVacation}
                  onChange={(e) => setIncludeVacation(e.target.checked)}
                  className="w-4 h-4 accent-primary rounded cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="vacation-toggle"
                    className="text-xs font-semibold text-on-surface cursor-pointer"
                  >
                    Statutory Vacation Indemnity (Ferienentschädigung)
                  </label>
                  <span className="font-mono text-[10px] bg-surface-container-high px-1.5 py-0.5 rounded text-on-surface-variant">
                    Art. 329a CO
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  For hourly employees, vacation must be financially accrued or paid out:{" "}
                  <strong className="text-on-surface font-medium">8.33%</strong> for 4 weeks (standard adult) or{" "}
                  <strong className="text-on-surface font-medium">10.64%</strong> for 5 weeks.
                </p>
                {includeVacation && (
                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-1.5 font-mono text-xs text-on-surface cursor-pointer">
                      <input
                        type="radio"
                        name="vacation-rate"
                        checked={vacationRate === 8.33}
                        onChange={() => setVacationRate(8.33)}
                        className="accent-primary"
                      />
                      4 Weeks (8.33%)
                    </label>
                    <label className="flex items-center gap-1.5 font-mono text-xs text-on-surface cursor-pointer">
                      <input
                        type="radio"
                        name="vacation-rate"
                        checked={vacationRate === 10.64}
                        onChange={() => setVacationRate(10.64)}
                        className="accent-primary"
                      />
                      5 Weeks (10.64%)
                    </label>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Legal accordion note */}
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <span>⚖ Legal Foundation: The 13th Month Salary Custom</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Under the Swiss Code of Obligations (CO Art. 322d), a 13th month salary is{" "}
            <em>not automatically guaranteed by federal statute</em> unless explicitly mandated in an individual employment contract, a Cantonal Standard Employment Contract (NAV), or a Collective Employment Agreement (GAV). When agreed upon, it constitutes firm salary rather than an arbitrary employer bonus.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Output & Deductions (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Primary Result Display Card */}
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
              Contractual Conversion
            </span>
            <span className="font-mono text-[11px] px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">
              Q1 2025 Standard
            </span>
          </div>

          {/* Metric 1: Monthly Gross */}
          <div className="flex flex-col p-4 bg-surface-container-low rounded">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="text-xs font-medium">Estimated Gross Monthly</span>
              <span className="font-mono text-[10px] uppercase font-semibold text-secondary">
                GROSS ESTIMATE
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-xs text-on-surface-variant">CHF</span>
              <span className="font-mono text-3xl font-bold text-primary tracking-tight">
                {formatChf(calculatedMonthly)}
              </span>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant mt-1">
              Based on {numPayments} annual payments ({numPayments === 13 ? "13th month standard" : "12 equal payments"})
            </span>
          </div>

          {/* Metric 2: Annual Gross */}
          <div className="flex flex-col p-4 bg-surface-container-low rounded">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="text-xs font-medium">Estimated Gross Annual</span>
              <span className="font-mono text-[10px] uppercase font-semibold text-secondary">
                GROSS ESTIMATE
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-xs text-on-surface-variant">CHF</span>
              <span className="font-mono text-3xl font-bold text-primary tracking-tight">
                {formatChf(calculatedAnnual)}
              </span>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant mt-1">
              52 weeks annualized base ({Math.round(annualHours).toLocaleString("de-CH")} hrs/yr)
            </span>
          </div>

          {/* Metric 3 & 4 Grid: Hourly & Weekly Equivalents */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-surface-container-low rounded">
              <span className="font-mono text-[11px] text-on-surface-variant block">
                Weekly Gross
              </span>
              <span className="font-mono text-sm font-semibold text-primary block mt-0.5">
                CHF {formatChf(calculatedWeekly)}
              </span>
            </div>
            <div className="p-3 bg-surface-container-low rounded">
              <span className="font-mono text-[11px] text-on-surface-variant block">
                Base Hourly Rate
              </span>
              <span className="font-mono text-sm font-semibold text-primary block mt-0.5">
                CHF {formatChf(calculatedHourly)}
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Statutory Deductions Expectation Panel */}
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-primary font-semibold">
                Mandatory Statutory Deductions
              </h3>
              <span className="font-mono text-xs text-secondary font-semibold">
                OFAS/BSV Rates
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Standard deductions subtracted from gross salary before net disbursement in Switzerland:
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs">
            {/* AHV/IV/EO */}
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">AHV / IV / EO</span>
                <span className="text-[10px] text-on-surface-variant">
                  Old Age, Disability &amp; Loss of Earnings
                </span>
              </div>
              <span className="font-semibold text-primary">5.30%</span>
            </div>

            {/* ALV */}
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">ALV (Unemployment)</span>
                <span className="text-[10px] text-on-surface-variant">
                  Up to CHF 148,200 annual cap
                </span>
              </div>
              <span className="font-semibold text-primary">1.10%</span>
            </div>

            {/* NBU */}
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">NBU (Accident)</span>
                <span className="text-[10px] text-on-surface-variant">
                  Mandatory if working &gt; 8 hrs/wk
                </span>
              </div>
              <span className="font-semibold text-primary">~1.0% – 2.0%</span>
            </div>

            {/* BVG */}
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">BVG / LPP (Pension)</span>
                <span className="text-[10px] text-on-surface-variant">
                  Age-scaled 7%–18% (employee pays 50%)
                </span>
              </div>
              <span className="font-semibold text-primary">3.5% – 9.0%</span>
            </div>

            {/* Quellensteuer */}
            <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">Quellensteuer</span>
                <span className="text-[10px] text-on-surface-variant">
                  Applies to B, L, G permit holders
                </span>
              </div>
              <span className="font-semibold text-primary">5% – 25%*</span>
            </div>
          </div>

          <div className="p-3 bg-surface-container-high rounded text-on-surface-variant font-mono text-[11px] leading-relaxed">
            *Quellensteuer varies dramatically by Canton and municipality (e.g. Zug ~7% vs. Geneva ~19% at identical gross thresholds).
          </div>
        </div>

        {/* Link Out to Official Calculators */}
        <div className="bg-surface-container-lowest p-6 rounded shadow-sm border border-outline-variant/60 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
              Official Net Tax Portals
            </span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            To calculate your exact personal net take-home salary after cantonal and communal taxes, use the official federal tools provided by the Swiss authorities:
          </p>
          <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
            <a
              href="https://swisstaxcalculator.estv.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-primary text-white hover:bg-primary-container transition-colors flex items-center justify-between font-semibold"
            >
              <span>ESTV Official Net Tax Calculator</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.gate.bfs.admin.ch/salarium/public/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-surface-container-low text-primary border border-outline-variant/60 hover:bg-surface-container transition-colors flex items-center justify-between font-semibold"
            >
              <span>SECO Salarium Statistical Calculator</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Trust Card */}
        <TrustCard
          authority="SECO / BFS"
          authorityFull="Labor Standards & Wage Statistics"
          legalBasis="SR 822.11 / CO Art. 322"
          verificationPeriod="VERIFIED FOR 2025"
          verificationDate="Audited Jan 2025 · Legal Editorial"
          officialUrl="https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/en"
          sourceLabel="Federal Labor Standards Framework"
        />
      </div>
    </div>
  );
}
