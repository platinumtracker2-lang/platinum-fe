import React, { useState } from "react";
import * as s from "./styles";

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      background: s.vars.white,
      border: `1px solid ${s.vars.bdr}`,
      borderRadius: s.vars.r,
      marginBottom: "12px",
      overflow: "hidden"
    }}>
      <button
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: 600,
          color: s.vars.ink,
          transition: "background 0.2s"
        }}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => e.currentTarget.style.background = s.vars.ptBg}
        onMouseLeave={(e) => e.currentTarget.style.background = "none"}
      >
        <span>{question}</span>
        <span
          style={{
            fontSize: "12px",
            color: s.vars.pt,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display: "inline-block"
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "0 20px 16px 20px",
            borderTop: `1px solid ${s.vars.bdr}`,
            fontSize: "14px",
            color: s.vars.ink3,
            lineHeight: 1.7
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section id="faq" style={s.section}>
      <p style={s.sectionLabel}>FAQ</p>
      <h2 style={s.h2}>Platinum Market FAQ</h2>
      <p style={s.lede}>
        Common questions about platinum pricing, supply, demand, and investment. 
        If you're new to the platinum market, start here.
      </p>

      <div style={{ marginTop: "24px" }}>
        <FAQItem question="What is the current platinum price and where is it set?">
          Platinum does not trade on a central exchange like stocks. The spot price is set by the{" "}
          <strong>London Platinum and Palladium Market (LPPM)</strong> via the twice-daily{" "}
          <strong>LBMA fix</strong> (10:00 and 14:00 London time). The current spot price is approximately{" "}
          <strong>$950/troy oz</strong> (May 2026). Platinum also trades on <strong>NYMEX</strong> (CME) 
          as futures contracts (50 oz per contract), which is the primary derivatives market for institutional 
          investors and speculators.
        </FAQItem>

        <FAQItem question="Why is platinum cheaper than gold right now?">
          Platinum traded at a premium to gold for most of the 20th century, but has traded at a discount 
          since 2015. The inversion was triggered by <strong>Dieselgate</strong> (2015), which collapsed 
          European diesel demand and removed a major source of autocatalyst platinum demand. Gold's role as 
          a monetary asset and central bank reserve has driven its price to all-time highs (~$2,300/oz), 
          while platinum's industrial demand profile has kept it range-bound. The current discount 
          (~$1,380/oz, or 59% below gold) is historically extreme and is a key part of the platinum bull thesis.
        </FAQItem>

        <FAQItem question="Why does South Africa control so much of the platinum market?">
          South Africa holds approximately <strong>95% of the world's known platinum reserves</strong>, 
          concentrated in the <strong>Bushveld Complex</strong> in Limpopo and North West provinces. 
          The Bushveld is a 2-billion-year-old layered igneous intrusion containing the{" "}
          <strong>Merensky Reef</strong>, <strong>UG2 Reef</strong>, and <strong>Platreef</strong>—the 
          three most economically significant platinum deposits on Earth. South Africa produces ~70% of 
          global mined platinum (~4,200 koz/yr out of ~6,000 koz total). No other country has comparable 
          reserves or production capacity.
        </FAQItem>

        <FAQItem question="What is PPLT and how does it affect the platinum price?">
          <strong>PPLT</strong> (abrdn Physical Platinum Shares ETF, NYSE Arca) is the largest platinum ETF, 
          holding ~$900M in physical platinum bars stored in London vaults. When PPLT sees inflows, it buys 
          physical platinum off the spot market, sequestering supply and supporting prices. When it sees 
          outflows, it sells platinum back into the market, adding supply and pressuring prices. PPLT AUM 
          peaked at ~$1.8B in 2021 and has since declined, reflecting weak investment demand. A return of 
          investment demand (PPLT inflows) is a key catalyst for the platinum bull thesis.
        </FAQItem>

        <FAQItem question="What is the WPIC and why does their balance matter?">
          The <strong>World Platinum Investment Council (WPIC)</strong> publishes the{" "}
          <strong>Platinum Quarterly</strong> every quarter (January, April, July, October), the most 
          detailed public supply-demand balance available for platinum. The balance figure (total supply 
          minus total demand) is what institutional investors watch first. WPIC has projected deficit 
          conditions since late 2023. A 900 koz deficit against total annual supply of ~7,600 koz is an 
          11.8% shortfall. The price has not yet reflected this deficit because above-ground inventories 
          (~3M oz) are absorbing the physical shortfall.
        </FAQItem>

        <FAQItem question="How do I invest in platinum as a US investor?">
          US investors have six primary options: <strong>PPLT</strong> (physical ETF, most liquid, subject 
          to 28% collectibles tax on long-term gains), <strong>SBSW</strong> (Sibanye-Stillwater, NYSE-listed 
          mining equity, most accessible), <strong>ANGPY</strong> (Anglo American Platinum OTC ADR, world's 
          largest producer, use limit orders), <strong>IMPUY</strong> (Impala Platinum OTC ADR, use limit 
          orders), <strong>NTHMY</strong> (Northam Platinum OTC ADR, use limit orders), and{" "}
          <strong>NYMEX PL futures</strong> (institutional, requires margin account). For taxable accounts, 
          mining equities avoid the 28% collectibles tax that applies to PPLT.
        </FAQItem>

        <FAQItem question="What is the difference between platinum and palladium?">
          Platinum and palladium are both platinum group metals (PGMs) and are often mined together. 
          Historically, <strong>platinum</strong> was used in diesel autocatalysts and{" "}
          <strong>palladium</strong> in gasoline autocatalysts. Palladium spiked to $3,000+/oz in 2021-2022 
          due to supply constraints and gasoline vehicle demand. Since then, automakers have been{" "}
          <strong>substituting platinum for palladium</strong> in gasoline catalysts to reduce costs. 
          Palladium is now ~$950/oz (May 2026), roughly equal to platinum. Platinum is also used in hydrogen 
          fuel cells (PEM electrolyzers), while palladium is not.
        </FAQItem>

        <FAQItem question="Will hydrogen demand save the platinum market?">
          Hydrogen fuel cells (specifically <strong>PEM electrolyzers</strong>) use platinum as a catalyst. 
          The IEA's Net Zero scenario projects 200 GW of electrolyzer capacity by 2030, which would require 
          ~1,000-1,500 koz/yr of platinum. However, as of 2025, global installed capacity is only ~10 GW, 
          and order pipelines have slowed due to high capital costs and slow policy implementation. Hydrogen 
          is a <strong>long-term structural driver</strong> (2030+), but it is not yet a near-term price 
          catalyst for 2025-2027. Watch IEA Hydrogen Reports and WPIC Platinum Quarterly for updates.
        </FAQItem>
      </div>
    </section>
  );
}
