import React from "react";
import * as s from "./styles";

export default function DriversSection() {
  const drivers = [
    {
      driver: "WPIC balance",
      reading: "−900 koz deficit (2024E)",
      direction: "Bullish",
      color: s.vars.green,
      explanation: "Persistent deficit tightens physical market"
    },
    {
      driver: "South Africa output",
      reading: "~4,200 koz/yr (declining)",
      direction: "Bullish",
      color: s.vars.green,
      explanation: "Load-shedding + aging shafts = structural supply risk"
    },
    {
      driver: "Hybrid/ICE mix",
      reading: "Hybrid share rising",
      direction: "Bullish",
      color: s.vars.green,
      explanation: "Hybrids use more Pt per vehicle than BEVs"
    },
    {
      driver: "Pt-Pd substitution",
      reading: "Active in gasoline cats",
      direction: "Bullish",
      color: s.vars.green,
      explanation: "Automakers replacing Pd with Pt in gasoline autocatalysts"
    },
    {
      driver: "Hydrogen electrolyzer orders",
      reading: "Slow (IEA 200 GW by 2030 unlikely)",
      direction: "Neutral",
      color: s.vars.muted,
      explanation: "Long-term bullish, but 2025-2027 demand muted"
    },
    {
      driver: "Above-ground stocks",
      reading: "~3M oz (WPIC est.)",
      direction: "Bearish",
      color: s.vars.red,
      explanation: "Large inventories dampen immediate price response to deficit"
    }
  ];

  return (
    <section id="drivers" style={s.section}>
      <p style={s.sectionLabel}>MARKET DRIVERS</p>
      <h2 style={s.h2}>
        Platinum Market Drivers Dashboard: Live Readings and Direction
      </h2>
      <p style={s.lede}>
        This dashboard tracks the six most important drivers of platinum price direction in 2025-2026. 
        The WPIC balance, South African output, and Pt-Pd substitution are the three most actionable 
        bullish catalysts. Above-ground stocks are the primary headwind. Hydrogen demand is a long-term 
        structural driver but not yet a near-term price catalyst.
      </p>

      {/* Drivers table */}
      <div style={{ overflowX: "auto", marginTop: "24px" }}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={{ ...s.th, width: "25%" }}>Driver</th>
              <th style={{ ...s.th, width: "25%" }}>Live Reading</th>
              <th style={{ ...s.th, width: "15%", textAlign: "center" }}>Direction</th>
              <th style={{ ...s.th, width: "35%" }}>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((item, index) => (
              <tr key={index}>
                <td style={{ ...s.td, fontWeight: 600, color: s.vars.ink }}>
                  {item.driver}
                </td>
                <td style={{ ...s.td, fontFamily: "'DM Mono', monospace", fontSize: "13px" }}>
                  {item.reading}
                </td>
                <td style={{ 
                  ...s.td, 
                  textAlign: "center",
                  fontWeight: 700,
                  color: item.color
                }}>
                  {item.direction}
                </td>
                <td style={{ ...s.td, fontSize: "13px" }}>
                  {item.explanation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Callout about driver interpretation */}
      <div style={s.calloutInfo}>
        <span style={s.calloutIcon}>📊</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>How to read this dashboard</p>
          <p style={s.calloutText}>
            This is not a "score" system. A single bearish driver (above-ground stocks) can outweigh multiple 
            bullish drivers if it is large enough. The platinum market in 2024-2025 is a case study: WPIC has 
            documented a 900 koz deficit, South African output is declining, and Pt-Pd substitution is accelerating, 
            yet the price has remained flat because above-ground inventories are absorbing the physical shortfall. 
            The bull thesis requires either (1) the deficit to persist long enough to draw down inventories visibly, 
            or (2) investment demand (ETF inflows, speculative positioning) to return and front-run the physical 
            tightness. Watch WPIC Platinum Quarterly updates and PPLT AUM for early signals.
          </p>
        </div>
      </div>
    </section>
  );
}
