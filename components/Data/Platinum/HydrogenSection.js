import React from "react";
import { Line } from 'react-chartjs-2';
import * as s from "./styles";

export default function HydrogenSection() {
  const hydrogenChartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2026E', '2028E', '2030E', '2035E'],
    datasets: [
      {
        label: 'Actual',
        data: [100, 150, 200, 250, 300, 350, 450, null, null, null, null],
        borderColor: s.vars.green,
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Bull Scenario',
        data: [null, null, null, null, null, null, 450, 700, 1200, 1800, 2500],
        borderColor: s.vars.green,
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: '+1',
        tension: 0.4,
      },
      {
        label: 'Base Scenario',
        data: [null, null, null, null, null, null, 450, 600, 900, 1300, 1800],
        borderColor: s.vars.pt,
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: '+1',
        tension: 0.4,
      },
      {
        label: 'Bear Scenario',
        data: [null, null, null, null, null, null, 450, 500, 600, 800, 1000],
        borderColor: s.vars.red,
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      }
    ]
  };

  const hydrogenChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 11 }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'koz Pt'
        }
      }
    }
  };

  return (
    <section id="hydrogen" style={s.section}>
      <p style={s.sectionLabel}>HYDROGEN DEMAND</p>
      <h2 style={s.h2}>
        Platinum in Hydrogen: PEM Electrolyzers and Fuel Cells
      </h2>
      <p style={s.lede}>
        Platinum is the primary catalyst in proton exchange membrane (PEM) technology, used in both PEM electrolyzers 
        (green hydrogen production via electrolysis) and PEM fuel cells (hydrogen-to-electricity in vehicles and 
        stationary power). Current platinum demand from hydrogen applications is roughly 400 to 500 koz per year, 
        about 5 to 6% of total, and growing. WPIC's base case projects hydrogen demand reaching 1.5–2.0 million 
        ounces per year by 2035, potentially 15–25% of total platinum demand.
      </p>

      <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginTop: "32px", marginBottom: "12px" }}>
        How PEM electrolysis works and why platinum is hard to replace
      </h3>
      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        A PEM electrolyzer uses electricity to split water (H₂O) into hydrogen and oxygen. At the heart of the device 
        is a platinum-coated membrane: platinum catalyses the hydrogen evolution reaction (HER) at the cathode. Iridium 
        catalyses the oxygen evolution reaction (OER) at the anode. Current commercial PEM electrolyzers use approximately 
        0.3–0.5 grams of platinum per kilowatt of electrolyzer capacity, with R&D programs targeting 50–80% loading 
        reductions. Even at the reduced loading target, the scale of deployment implied by IEA Net Zero scenarios 
        represents multiple years of annual platinum mine supply.
      </p>

      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        The IEA estimates approximately 200 GW of electrolyzer capacity is needed by 2030 under Net Zero scenarios. 
        At 0.3–0.5g/kW, that implies 60–100 million grams of platinum demand over the buildout period, or 1.9 to 3.2 
        million troy ounces. Annual platinum mine supply is approximately 5,800 koz. If the IEA 2030 target is met with 
        current-generation PEM technology, electrolyzers alone would consume the equivalent of roughly 4–6 months of 
        global annual platinum mine supply over five years. That is not marginal demand growth.
      </p>

      {/* Hydrogen-specific callout */}
      <div style={s.calloutSuccess}>
        <span style={s.calloutIcon}>🟢</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>Why hydrogen demand is platinum-specific and not palladium</p>
          <p style={s.calloutText}>
            PEM electrolysis and PEM fuel cells use platinum and iridium as catalysts. They use no palladium. This is 
            not a temporary specification, it is determined by the electrochemistry: platinum is uniquely effective as 
            the HER catalyst in acidic PEM environments, and no commercially viable substitute exists at scale. Palladium's 
            only real demand growth story is ICE vehicles, which are declining. Platinum has ICE autocatalysts (floor) 
            plus industrial demand (stable) plus hydrogen (growth). The divergence between these two demand profiles is 
            the central reason the platinum-palladium spread thesis exists.
          </p>
        </div>
      </div>

      {/* Hydrogen forecast chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ marginBottom: "8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
              WPIC / IEA / Industry · Annual koz · 2018–2035
            </p>
            <p style={s.chartTitle}>Platinum Demand from Hydrogen, Actual + Three-Scenario Forecast to 2035</p>
          </div>
          <p style={s.chartSubtitle}>
            Actual (solid green) · Bear/base/bull scenario band (shaded) · IEA NZE capacity targets drive bull scenario
          </p>
        </div>
        <div style={{ height: "350px" }}>
          <Line data={hydrogenChartData} options={hydrogenChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Sources: WPIC hydrogen demand data, IEA Hydrogen Tracker · /api/platinum/hydrogen-forecast · Scenarios: editorial estimate updated annually
        </p>
      </div>
    </section>
  );
}
