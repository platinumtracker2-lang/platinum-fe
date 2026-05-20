import React from "react";
import * as s from "./styles";

export default function ProducersSection() {
  const producers = [
    {
      ticker: "JSE: AMS · OTC: ANGPY",
      name: "Anglo American Platinum (Amplats)",
      subtitle: "World's largest platinum producer · South Africa + Zimbabwe",
      stats: [
        { value: "~3.8M", label: "4E oz/yr" },
        { value: "~65%", label: "SA Pt share" },
        { value: "OTC: ANGPY", label: "US access" }
      ],
      description: "The single most important company in global platinum supply. Key operations: Mogalakwena (open-pit Platreef in Limpopo, the world's most productive platinum mine by output), Amandelbult Complex (Merensky + UG2, underground, Limpopo), Mototolo-Der Brochen JV (Limpopo). Processes through the world's largest platinum smelter at Waterval, Rustenburg. Underwent major restructuring 2020–2024 including Section 189 retrenchments in response to low PGM basket prices. Also operates Unki mine in Zimbabwe (100% Anglo Platinum, Great Dyke UG2). US investors access via ANGPY OTC ADR. Use limit orders, the spread can reach 1.5–2% at off-peak hours."
    },
    {
      ticker: "JSE: IMP · OTC: IMPUY",
      name: "Impala Platinum (Implats)",
      subtitle: "Second-largest producer · SA, Zimbabwe, Canada",
      stats: [
        { value: "~3.0M", label: "6E oz/yr" },
        { value: "87%", label: "Zimplats stake" },
        { value: "OTC: IMPUY", label: "US access" }
      ],
      description: "Implats produces across three geographies. South Africa: Rustenburg operations (aging Boschkopje shaft complex, high unit costs) and Marula mine (Limpopo, UG2, lower cost). Zimbabwe: Zimplats (87% stake, Great Dyke UG2, Zimbabwe's largest PGM producer, growing). Canada: Royal Bafokeng Platinum (acquired 2022, Merensky). Waterberg JV in Limpopo is a longer-term palladium-rich Platreef development option. Rustenburg's aging shaft infrastructure creates unit cost pressure that has been a drag on margins at low PGM basket prices. US access via IMPUY OTC ADR."
    },
    {
      ticker: "NYSE: SBSW · JSE: SSW",
      name: "Sibanye-Stillwater",
      subtitle: "PGM + Gold + Lithium · NYSE-listed · US Pd/Pt operations",
      stats: [
        { value: "~2.2M", label: "4E oz/yr SA" },
        { value: "~400 koz", label: "US Pd/Pt" },
        { value: "NYSE: SBSW", label: "Most liquid US" }
      ],
      description: "The most accessible PGM producer for US investors via the NYSE primary listing. South Africa: Kroondal, Rustenburg (ex-Anglo), Marikana (ex-Lonmin), Plats 4, all Merensky + UG2. USA: Stillwater and East Boulder palladium mines in Montana, the only significant primary US palladium mines (acquired 2017 for $2.2B, with subsequent impairments). Also holds Keliber lithium project in Finland. SBSW's combination of SA PGM, US PGM, gold, and lithium makes it uniquely diversified among the platinum sector, but also complex to model as a pure platinum play. Dividends subject to 20% South African withholding tax (creditable via Form 1116 in taxable accounts)."
    },
    {
      ticker: "JSE: NPH · OTC: NTHMY",
      name: "Northam Platinum",
      subtitle: "Growth-focused · Booysendal & Zondereinde",
      stats: [
        { value: "~620 koz", label: "4E oz/yr" },
        { value: "Booysendal", label: "Growth asset" },
        { value: "OTC: NTHMY", label: "US access" }
      ],
      description: "Northam is South Africa's fourth-largest platinum producer. Zondereinde: Merensky + UG2, approaching 2km depth, one of SA's deepest mechanised mines, high grade, high cost. Booysendal: UG2, Mpumalanga, fully mechanised, commissioned in phases from 2012, the primary growth driver, lower cost per ounce than Zondereinde. Northam maintained production discipline through the low-price cycle better than most peers, avoiding the deep retrenchments that hit Amplats and Sibanye. US access via NTHMY OTC ADR."
    }
  ];

  return (
    <section id="producers" style={s.section}>
      <p style={s.sectionLabel}>MINING STOCKS</p>
      <h2 style={s.h2}>
        Platinum Mining Stocks: Amplats, Implats, Sibanye-Stillwater and Northam
      </h2>
      <p style={s.lede}>
        Four South African companies produce the overwhelming majority of the world's platinum: Anglo American Platinum, 
        Impala Platinum, Sibanye-Stillwater, and Northam. For US equity investors seeking platinum equity exposure, 
        Sibanye-Stillwater (NYSE: SBSW) is the most liquid access point. Amplats (OTC: ANGPY) and Implats (OTC: IMPUY) 
        are available via OTC ADRs, use limit orders, OTC spreads can be wide.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {producers.map((producer, index) => (
          <div key={index} style={{ 
            background: s.vars.white, 
            border: `1px solid ${s.vars.bdr}`, 
            borderRadius: s.vars.r,
            padding: "20px"
          }}>
            <p style={{ 
              fontSize: "11px", 
              fontWeight: 700, 
              color: s.vars.pt, 
              fontFamily: "'DM Mono', monospace",
              marginBottom: "8px"
            }}>
              {producer.ticker}
            </p>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginBottom: "6px" }}>
              {producer.name}
            </h3>
            <p style={{ fontSize: "12px", color: s.vars.muted, marginBottom: "16px" }}>
              {producer.subtitle}
            </p>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: "8px",
              marginBottom: "16px"
            }}>
              {producer.stats.map((stat, i) => (
                <div key={i} style={{ 
                  background: s.vars.ptBg, 
                  borderRadius: "6px", 
                  padding: "10px 8px",
                  textAlign: "center"
                }}>
                  <p style={{ 
                    fontSize: "14px", 
                    fontWeight: 700, 
                    color: s.vars.pt,
                    fontFamily: "'DM Mono', monospace",
                    marginBottom: "4px"
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "9px", color: s.vars.muted, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "13px", color: s.vars.ink3, lineHeight: 1.6 }}>
              {producer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
