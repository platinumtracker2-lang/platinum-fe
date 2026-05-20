import React from "react";
import * as s from "./styles";

export default function HistorySection() {
  const historyPeriods = [
    {
      icon: "📈",
      period: "2000 – 2008",
      title: "The Long Bull Run, Diesel Demand + Scarcity = $2,290 ATH",
      description: "European diesel vehicle adoption grew steadily through the early 2000s, driven by superior fuel economy and lower CO₂ emissions per kilometre, both incentivised by EU tax policy. Diesel required platinum-heavy catalysts. Simultaneously, platinum was undeniably rare. The combination drove platinum from approximately $400/oz in 2000 to $2,290/oz in March 2008, an all-time high. The trigger for the 2008 peak was Eskom: a sudden January 2008 power crisis shut South African mines without warning, removing hundreds of thousands of ounces from annual supply projections overnight. Rhodium hit $10,100/oz simultaneously. The Global Financial Crisis ended the rally within months; platinum fell to $774/oz by November 2008."
    },
    {
      icon: "⚖️",
      period: "2008 – 2014",
      title: "Recovery, Marikana, and the Labour Crisis",
      description: "Platinum recovered to approximately $1,800/oz by 2011, then spent three years in a choppy $1,300–$1,700 range. The Marikana massacre on August 16, 2012, 34 striking Lonmin rock drill operators shot by South African police, transformed SA mining labour relations permanently. AMCU's subsequent organising campaign led to the longest platinum strike in history: five months in 2014, removing approximately 1.3 million ounces from annual supply. Despite the disruption, platinum prices barely moved. Demand was also weak; the post-GFC surplus absorbed the output loss. That episode is a reminder that supply disruptions do not always move prices when demand is simultaneously weak."
    },
    {
      icon: "📉",
      period: "2015 – 2019",
      title: "Dieselgate and the Historic Inversion Below Gold",
      description: "VW's September 18, 2015 admission of defeat device fraud was the turning point. European diesel car sales collapsed from ~55% of new registrations to below 20% within four years. Platinum autocatalyst demand fell with it, roughly 600–800 koz below projected trajectory. Simultaneously, tightening emission standards were boosting palladium demand from gasoline catalysts, and gold was rising on safe-haven buying as real interest rates fell. In 2015, platinum crossed below gold for the first time in the modern era. By 2016, platinum had fallen to $776/oz, its lowest in over a decade, while palladium crossed above it in 2017 and kept climbing."
    },
    {
      icon: "🚀",
      period: "2019 – 2021",
      title: "The 2021 Everything Rally, Platinum Reaches $1,298",
      description: "COVID-19 mine closures in South Africa in Q2 2020 cut PGM output across all six metals simultaneously. Tighter emission standards (China 6, Euro 6d) pushed PGM loadings higher just as supply was disrupted. Investor enthusiasm for critical minerals and green hydrogen added to the rally. Platinum reached $1,298/oz in February 2021, its highest since the 2015 Dieselgate collapse, before correcting as South African production recovered and the hydrogen thesis proved slower to materialise than 2020–2021 market narratives implied."
    },
    {
      icon: "⚡",
      period: "2021 – 2024",
      title: "Eskom Load-Shedding, WPIC Deficit, and the Supply-Demand Disconnect",
      description: "South Africa's Eskom power crisis intensified from 2022 onward, materially reducing platinum mine output. WPIC began reporting consecutive annual supply deficits from 2023. Yet platinum prices did not respond significantly, declining from the 2021 peak of $1,298 back toward $900–$1,000/oz as above-ground stocks absorbed physical shortfalls and investment demand failed to return. The palladium bust (palladium fell 74% from its $3,440 peak) created a general PGM sector sentiment overhang. Platinum traded below gold by $1,200–$1,500 for most of the period, a historically anomalous discount that the WPIC deficit thesis has not yet resolved."
    },
    {
      icon: "🔮",
      period: "2025 – present",
      title: "Stabilisation, Watching for the Deficit to Pull Prices Higher",
      description: "Platinum has settled near $900–$1,100/oz. Eskom load-shedding has improved substantially in 2024–2025 but is not resolved. WPIC projects continued deficit. The next material catalyst is either: (a) hydrogen electrolyzer deployment accelerating faster than consensus; (b) BEV adoption in Europe or China disappointing, extending ICE autocatalyst demand life; or (c) a resumption of severe South African power or labour disruption. Without one of those catalysts, the deficit thesis is more likely to be a slow grind than a sharp re-rating."
    }
  ];

  return (
    <section id="history" style={s.section}>
      <p style={s.sectionLabel}>PRICE HISTORY</p>
      <h2 style={s.h2}>
        Platinum Price History: From the 2008 Peak to Today
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "24px" }}>
        {historyPeriods.map((period, index) => (
          <div key={index} style={{ 
            background: s.vars.white, 
            border: `1px solid ${s.vars.bdr}`, 
            borderRadius: s.vars.r,
            padding: "24px",
            borderLeft: `4px solid ${s.vars.pt}`
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <span style={{ fontSize: "32px", flexShrink: 0 }}>{period.icon}</span>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: s.vars.pt, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {period.period}
                </p>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginBottom: "12px" }}>
                  {period.title}
                </h3>
                <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7 }}>
                  {period.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
