import React from "react";
import { Bar } from 'react-chartjs-2';
import * as s from "./styles";

export default function BalanceSection() {
  const balanceChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025E', '2026E'],
    datasets: [
      {
        label: 'Balance (koz)',
        data: [200, 150, 100, 50, -100, -200, 100, -300, -700, -900, -800, -750],
        backgroundColor: function(context) {
          const value = context.parsed.y;
          return value >= 0 ? s.vars.green : s.vars.red;
        },
      }
    ]
  };

  const balanceChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'koz (surplus +, deficit −)'
        }
      }
    }
  };

  return (
    <section id="balance" style={s.section}>
      <p style={s.sectionLabel}>WPIC BALANCE</p>
      <h2 style={s.h2}>
        WPIC Platinum Supply-Demand Balance: Quarterly Deficit Data
      </h2>
      <p style={s.lede}>
        The World Platinum Investment Council publishes a Platinum Quarterly every quarter (January, April, July, October), 
        the most detailed public supply-demand balance available for platinum anywhere. The balance figure (total supply 
        minus total demand) is what institutional investors watch first. WPIC has projected deficit conditions since late 
        2023. A 900 koz deficit against total annual supply of roughly 7,600 koz is an 11.8% shortfall. That is meaningful, 
        and the price has not yet reflected it.
      </p>

      {/* Balance stats */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "16px",
        marginBottom: "24px"
      }}>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>WPIC 2024E balance</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.red }}>−900 koz</p>
          <p style={s.sectionStatSub}>Supply-demand deficit</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>Total supply 2024E</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.pt }}>~7,600 koz</p>
          <p style={s.sectionStatSub}>Mine + recycling</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>Total demand 2024E</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.pt }}>~8,500 koz</p>
          <p style={s.sectionStatSub}>All sectors</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>WPIC 2025E forecast</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.red }}>−800 koz E</p>
          <p style={s.sectionStatSub}>Continued deficit</p>
        </div>
      </div>

      {/* Balance chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ marginBottom: "8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
              WPIC Platinum Quarterly · Annual koz · 2015–2026E
            </p>
            <p style={s.chartTitle}>Platinum Supply-Demand Balance, Annual Surplus vs Deficit</p>
          </div>
          <p style={s.chartSubtitle}>
            Grey bars above zero = surplus · Green bars below zero = deficit · Dashed outline = WPIC forecast
          </p>
        </div>
        <div style={{ height: "350px" }}>
          <Bar data={balanceChartData} options={balanceChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Source: WPIC Platinum Quarterly · /api/platinum/pt-balance-history · Updated quarterly
        </p>
      </div>

      {/* Deficit explanation callout */}
      <div style={s.calloutInfo}>
        <span style={s.calloutIcon}>📋</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>A documented deficit and a flat price: what is happening</p>
          <p style={s.calloutText}>
            WPIC has projected consecutive deficits since 2023 and prices have not followed. There are two reasons. First, 
            above-ground platinum stocks held by producers, refiners, and financial institutions are large enough to absorb 
            a physical shortfall without creating immediate market tightness. WPIC estimates above-ground stocks at 
            approximately 3 million oz; at the current deficit pace, that runway is measured in years, not months. Second, 
            platinum investment demand (ETF and bar) has been tepid: without institutional platinum buying to complement the 
            supply deficit, price discovery has been slow. The bull thesis requires the deficit to tighten physical supply 
            visibly enough to attract investment demand back into the market.
          </p>
        </div>
      </div>
    </section>
  );
}
