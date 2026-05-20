import React from "react";
import * as s from "./styles";

export default function ETFsSection() {
  const investments = [
    {
      ticker: "PPLT",
      name: "abrdn Physical Platinum Shares ETF",
      type: "Physical-backed ETF",
      exchange: "NYSE Arca",
      aum: "~$900M",
      expense: "0.60%",
      description: "The largest and most liquid platinum ETF. Holds physical platinum bars in London vaults. Each share represents a fractional interest in the trust's platinum holdings.",
      liquidity: "High",
      note: "Subject to 28% collectibles tax on long-term gains"
    },
    {
      ticker: "SBSW",
      name: "Sibanye-Stillwater",
      type: "Mining equity",
      exchange: "NYSE",
      aum: "~$3.5B",
      expense: "N/A",
      description: "NYSE-listed South African PGM producer. Most liquid US equity exposure to platinum mining. Produces ~2.2M 4E oz/yr from SA operations + ~400 koz Pd/Pt from Montana.",
      liquidity: "High",
      note: "Dividends subject to 20% SA withholding tax (creditable)"
    },
    {
      ticker: "ANGPY",
      name: "Anglo American Platinum ADR",
      type: "Mining equity (OTC ADR)",
      exchange: "OTC",
      aum: "~$15B",
      expense: "N/A",
      description: "World's largest platinum producer (~3.8M 4E oz/yr). US access via OTC ADR. Primary listing JSE: AMS.",
      liquidity: "Medium",
      note: "Use limit orders; OTC spreads can reach 1.5-2%"
    },
    {
      ticker: "IMPUY",
      name: "Impala Platinum ADR",
      type: "Mining equity (OTC ADR)",
      exchange: "OTC",
      aum: "~$4B",
      expense: "N/A",
      description: "Second-largest platinum producer (~3.0M 6E oz/yr). SA + Zimbabwe + Canada operations. Primary listing JSE: IMP.",
      liquidity: "Medium",
      note: "Use limit orders; OTC ADR"
    },
    {
      ticker: "NTHMY",
      name: "Northam Platinum ADR",
      type: "Mining equity (OTC ADR)",
      exchange: "OTC",
      aum: "~$2B",
      expense: "N/A",
      description: "Fourth-largest SA platinum producer (~620 koz 4E oz/yr). Growth-focused via Booysendal expansion. Primary listing JSE: NPH.",
      liquidity: "Low",
      note: "Use limit orders; OTC ADR"
    },
    {
      ticker: "PL (NYMEX)",
      name: "Platinum Futures",
      type: "Futures contract",
      exchange: "NYMEX (CME)",
      aum: "N/A",
      expense: "Margin + roll",
      description: "NYMEX platinum futures (contract size: 50 troy oz). Used by institutional investors and speculators. Requires margin account.",
      liquidity: "High",
      note: "Taxed as 60/40 (60% long-term, 40% short-term) under Section 1256"
    }
  ];

  return (
    <section id="etfs" style={s.section}>
      <p style={s.sectionLabel}>INVESTMENT VEHICLES</p>
      <h2 style={s.h2}>
        How to Invest in Platinum: ETFs, Mining Stocks, and Futures
      </h2>
      <p style={s.lede}>
        US investors have six primary ways to gain platinum exposure: the PPLT physical ETF (most liquid), 
        Sibanye-Stillwater equity (NYSE: SBSW, most accessible), OTC ADRs for Amplats/Implats/Northam 
        (use limit orders), and NYMEX platinum futures (institutional). Note the 28% collectibles tax on PPLT 
        long-term gains—this is a critical consideration for taxable accounts.
      </p>

      {/* Investment vehicles table */}
      <div style={{ overflowX: "auto", marginTop: "24px" }}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={{ ...s.th, width: "12%" }}>Ticker</th>
              <th style={{ ...s.th, width: "20%" }}>Name</th>
              <th style={{ ...s.th, width: "12%" }}>Type</th>
              <th style={{ ...s.th, width: "10%" }}>Exchange</th>
              <th style={{ ...s.th, width: "10%" }}>AUM/Cap</th>
              <th style={{ ...s.th, width: "8%" }}>Expense</th>
              <th style={{ ...s.th, width: "8%", textAlign: "center" }}>Liquidity</th>
              <th style={{ ...s.th, width: "20%" }}>Key Details</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv, index) => (
              <tr key={index}>
                <td style={{ 
                  ...s.td, 
                  fontWeight: 700, 
                  color: s.vars.pt,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "13px"
                }}>
                  {inv.ticker}
                </td>
                <td style={{ ...s.td, fontWeight: 600, color: s.vars.ink }}>
                  {inv.name}
                </td>
                <td style={{ ...s.td, fontSize: "12px" }}>
                  {inv.type}
                </td>
                <td style={{ ...s.td, fontSize: "12px" }}>
                  {inv.exchange}
                </td>
                <td style={{ 
                  ...s.td, 
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px"
                }}>
                  {inv.aum}
                </td>
                <td style={{ 
                  ...s.td, 
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px"
                }}>
                  {inv.expense}
                </td>
                <td style={{ 
                  ...s.td, 
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "12px",
                  color: inv.liquidity === "High" ? s.vars.green : 
                         inv.liquidity === "Medium" ? s.vars.amber : s.vars.muted
                }}>
                  {inv.liquidity}
                </td>
                <td style={{ ...s.td, fontSize: "12px", lineHeight: 1.5 }}>
                  <div style={{ marginBottom: "6px" }}>{inv.description}</div>
                  <div style={{ 
                    fontSize: "11px", 
                    color: s.vars.muted,
                    fontStyle: "italic"
                  }}>
                    {inv.note}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tax warning callout */}
      <div style={s.calloutWarning}>
        <span style={s.calloutIcon}>⚠️</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>US tax treatment: 28% collectibles tax on physical platinum ETFs</p>
          <p style={s.calloutText}>
            PPLT and other physical platinum ETFs are classified as "collectibles" under IRC Section 408(m). 
            Long-term capital gains (held &gt;1 year) are taxed at a maximum rate of 28%, not the standard 
            15% or 20% long-term capital gains rate. This is the same treatment as physical gold and silver ETFs 
            (GLD, SLV). Short-term gains (&lt;1 year) are taxed as ordinary income regardless. Mining equities 
            (SBSW, ANGPY, IMPUY, NTHMY) are taxed as standard equities (15%/20% long-term gains). NYMEX platinum 
            futures are taxed under Section 1256 (60% long-term / 40% short-term, regardless of holding period). 
            For tax-advantaged accounts (IRA, 401k), the collectibles tax does not apply. Consult a tax professional 
            for your specific situation.
          </p>
        </div>
      </div>
    </section>
  );
}
