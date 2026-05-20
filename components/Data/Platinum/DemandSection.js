import React from "react";
import * as s from "./styles";

export default function DemandSection() {
  const demandData = [
    { sector: "Autocatalyst (diesel + hybrid + gasoline substitution)", percentage: 40, color: s.vars.amber },
    { sector: "Jewellery (China, Japan, India, primarily white gold substitute)", percentage: 22, color: s.vars.pt },
    { sector: "Industrial (chemical production, petroleum refining, glass)", percentage: 18, color: s.vars.blue },
    { sector: "Investment (ETFs, bars, coins, PPLT primary vehicle)", percentage: 8, color: s.vars.green },
    { sector: "Hydrogen & fuel cells (PEM electrolyzers + fuel cell vehicles)", percentage: 5, color: '#06b6d4' },
    { sector: "Medical & other (dental, pacemakers, cancer treatment)", percentage: 7, color: '#d1d5db' },
  ];

  return (
    <section id="demand" style={s.section}>
      <p style={s.sectionLabel}>DEMAND BY SECTOR</p>
      <h2 style={s.h2}>
        Platinum Demand by Sector: Autocatalyst, Hydrogen, Jewellery and Industrial
      </h2>
      <p style={s.lede}>
        Platinum's demand base is more diversified than palladium's, and that matters when thinking about risk 
        concentration. Total platinum demand is approximately 8,500 koz per year as of 2024 estimates, spread 
        across autocatalyst, jewellery, industrial, investment, hydrogen, and medical applications. No single 
        sector dominates entirely, and the emerging hydrogen sector is growing from a small but meaningful base.
      </p>

      {/* Demand breakdown */}
      <div style={{ 
        background: s.vars.ptBg, 
        border: `1px solid ${s.vars.bdr}`, 
        borderRadius: s.vars.r,
        padding: "24px",
        marginBottom: "24px"
      }}>
        <p style={{ ...s.sectionLabel, marginBottom: "16px" }}>
          PLATINUM DEMAND BY SECTOR, 2024 (~8,500 koz total demand)
        </p>
        <p style={{ fontSize: "11px", color: s.vars.muted, marginBottom: "20px" }}>
          Annual data from Johnson Matthey PGM Market Report (published May each year) · Updated annually
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {demandData.map((item, index) => (
            <div key={index}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                marginBottom: "8px"
              }}>
                <p style={{ fontSize: "13px", color: s.vars.ink, fontWeight: 600 }}>
                  {item.sector}
                </p>
                <p style={{ 
                  fontSize: "16px", 
                  fontWeight: 700, 
                  color: item.color,
                  fontFamily: "'DM Mono', monospace"
                }}>
                  ~{item.percentage}%
                </p>
              </div>
              <div style={{ 
                width: "100%", 
                height: "8px", 
                background: s.vars.white,
                borderRadius: "4px",
                overflow: "hidden"
              }}>
                <div style={{ 
                  width: `${item.percentage}%`, 
                  height: "100%", 
                  background: item.color,
                  transition: "width 0.3s ease"
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        Two demand trends are working in platinum's favour simultaneously. Hybrid electric vehicles, which still 
        have internal combustion engines and therefore require catalytic converters, are growing rapidly and use 
        more platinum per vehicle than pure ICE cars. A hybrid catalyst must work efficiently at lower operating 
        temperatures when the electric motor carries the load, which requires higher platinum loading. As BEV 
        adoption grows in parallel, hybrids are capturing a larger slice of the remaining ICE market, and that 
        slice is supportive for platinum demand.
      </p>
    </section>
  );
}
