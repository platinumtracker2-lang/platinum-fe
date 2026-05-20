import React from "react";
import * as s from "./styles";

export default function ForecastSection() {
  return (
    <section id="forecast" style={s.section}>
      <p style={s.sectionLabel}>PRICE FORECAST</p>
      <h2 style={s.h2}>
        Platinum Price Forecast 2026 to 2028: Three Scenarios
      </h2>
      <p style={s.lede}>
        Platinum price forecasts here are an editorial synthesis of WPIC quarterly data, Johnson Matthey's annual PGM 
        Market Report, Metals Focus analysis, and our own market monitoring. We publish scenarios with the conditions 
        each requires, not point forecasts. A number without context is less useful than knowing what has to be true 
        for that number to come right.
      </p>

      {/* Scenario cards */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "16px",
        marginBottom: "24px"
      }}>
        {/* Bull scenario */}
        <div style={{ 
          ...s.statCard, 
          borderTop: `4px solid ${s.vars.green}`,
          padding: "20px"
        }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: s.vars.green, marginBottom: "8px" }}>
            🟢 Bull, $1,400–$1,800/oz by 2027
          </p>
          <p style={{ 
            fontSize: "28px", 
            fontWeight: 700, 
            color: s.vars.ink, 
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px"
          }}>
            $1,400–$1,800
          </p>
          <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.6, marginBottom: "12px" }}>
            WPIC deficit confirmed through 2026. Hydrogen electrolyzer deployment accelerates beyond base case. South 
            African mine output reduced further by Eskom disruption or labour action. Investment demand returns as 
            platinum recovers toward gold parity. PPLT ETF sees sustained inflows.
          </p>
          <p style={{ fontSize: "11px", color: s.vars.muted, fontStyle: "italic" }}>
            Requires H2 policy delivery + SA supply constraint + investment demand re-engagement
          </p>
        </div>

        {/* Base scenario */}
        <div style={{ 
          ...s.statCard, 
          borderTop: `4px solid ${s.vars.pt}`,
          padding: "20px"
        }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: s.vars.pt, marginBottom: "8px" }}>
            🔵 Base, $1,000–$1,300/oz by 2027
          </p>
          <p style={{ 
            fontSize: "28px", 
            fontWeight: 700, 
            color: s.vars.ink, 
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px"
          }}>
            $1,000–$1,300
          </p>
          <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.6, marginBottom: "12px" }}>
            Gradual deficit tightening acknowledged by market. Hydrogen demand grows from low base. Autocatalyst demand 
            holds via hybrid growth and Pt-for-Pd substitution. SA supply broadly stable. Modest recovery over 18–24 
            months as deficit builds institutional platinum positioning.
          </p>
          <p style={{ fontSize: "11px", color: s.vars.muted, fontStyle: "italic" }}>
            Consensus of WPIC, Johnson Matthey, Metals Focus, as of April 2026
          </p>
        </div>

        {/* Bear scenario */}
        <div style={{ 
          ...s.statCard, 
          borderTop: `4px solid ${s.vars.red}`,
          padding: "20px"
        }}>
          <p style={{ fontSize: "12px", fontWeight: 700, color: s.vars.red, marginBottom: "8px" }}>
            🔴 Bear, Range-bound $700–$1,000/oz
          </p>
          <p style={{ 
            fontSize: "28px", 
            fontWeight: 700, 
            color: s.vars.ink, 
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px"
          }}>
            $700–$1,000
          </p>
          <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.6, marginBottom: "12px" }}>
            BEV adoption accelerates faster than forecast, cutting total autocatalyst demand sharply. Hydrogen policy 
            delays and electrolyzer order cancellations. South African load-shedding resolves fully, supply recovers. 
            WPIC balance returns to surplus.
          </p>
          <p style={{ fontSize: "11px", color: s.vars.muted, fontStyle: "italic" }}>
            Requires faster BEV acceleration + SA supply recovery + H2 policy failure
          </p>
        </div>
      </div>
    </section>
  );
}
