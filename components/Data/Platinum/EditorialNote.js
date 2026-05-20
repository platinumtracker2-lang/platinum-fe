import React from "react";
import * as s from "./styles";

export default function EditorialNote() {
  return (
    <div style={{
      maxWidth: s.vars.max,
      margin: "48px auto",
      padding: "0 24px"
    }}>
      <div style={{
        background: s.vars.ptBg,
        border: `1px solid ${s.vars.bdr}`,
        borderRadius: s.vars.r,
        padding: "24px",
        display: "flex",
        gap: "16px",
        alignItems: "flex-start"
      }}>
        <div style={{
          fontSize: "24px",
          flexShrink: 0
        }}>
          📝
        </div>
        <div>
          <p style={{
            fontSize: "13px",
            fontWeight: 700,
            color: s.vars.ink,
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            Editorial Note
          </p>
          <p style={{
            fontSize: "14px",
            color: s.vars.ink3,
            lineHeight: 1.7,
            margin: 0
          }}>
            This page tracks platinum market data including live spot prices, supply-demand analytics, 
            South African production intelligence, hydrogen fuel cell demand forecasts, and investment 
            vehicles. Data is updated regularly with information from the{" "}
            <strong>World Platinum Investment Council (WPIC)</strong>,{" "}
            <strong>London Bullion Market Association (LBMA)</strong>,{" "}
            <strong>Johnson Matthey PGM Market Reports</strong>,{" "}
            <strong>Anglo American Platinum</strong>,{" "}
            <strong>Impala Platinum</strong>,{" "}
            <strong>Sibanye-Stillwater</strong>,{" "}
            <strong>Northam Platinum</strong>,{" "}
            <strong>International Energy Agency (IEA)</strong>,{" "}
            <strong>USGS Mineral Commodity Summaries</strong>, and{" "}
            <strong>Eskom load-shedding schedules</strong>. Price data is sourced from LBMA fixes 
            and NYMEX platinum futures. Supply-demand balance data is sourced from WPIC Platinum Quarterly 
            reports (published January, April, July, October). This is information for educational and 
            research purposes, not financial advice. Consult a qualified financial advisor before making 
            investment decisions. Last reviewed:{" "}
            <span style={{ 
              fontWeight: 700, 
              color: s.vars.pt,
              fontFamily: "'DM Mono', monospace"
            }}>
              May 2026
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
}
