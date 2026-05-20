import React from "react";
import { Bar } from 'react-chartjs-2';
import * as s from "./styles";

export default function AutocatalystSection() {
  const autocatChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Pt diesel (declining)',
        data: [2800, 2600, 2400, 2200, 2000, 1800, 1700, 1600, 1500, 1400],
        backgroundColor: s.vars.ptD,
      },
      {
        label: 'Pt gasoline + substitution (growing)',
        data: [200, 250, 300, 350, 400, 450, 550, 700, 850, 1000],
        backgroundColor: '#d1d5db',
      },
      {
        label: 'Pt hybrid (growing)',
        data: [100, 150, 200, 250, 300, 350, 400, 500, 600, 700],
        backgroundColor: s.vars.green,
      }
    ]
  };

  const autocatChartOptions = {
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
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'koz Pt'
        }
      }
    }
  };

  return (
    <section id="autocatalyst" style={s.section}>
      <p style={s.sectionLabel}>AUTOCATALYST DEMAND</p>
      <h2 style={s.h2}>
        Platinum in Catalytic Converters: Diesel Decline, Hybrid Growth and Substitution
      </h2>
      <p style={s.lede}>
        Autocatalysts account for roughly 40% of total platinum demand, making them the largest single use. Diesel 
        engines use platinum-dominant catalysts because platinum is more effective at the lower exhaust temperatures 
        typical of diesel combustion. The collapse of European diesel sales after Dieselgate (September 2015) removed 
        roughly 600–800 koz of projected annual platinum demand over the following five years. But two forces are 
        partially offsetting that headwind: hybrid vehicle growth and platinum-for-palladium substitution in gasoline 
        catalysts.
      </p>

      <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginTop: "32px", marginBottom: "12px" }}>
        The diesel collapse after Dieselgate
      </h3>
      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        European diesel's share of new car registrations fell from approximately 55% in 2015 to approximately 15% by 
        2024. This was not a gradual trend, it was a cliff. VW's defeat device admission on September 18, 2015 triggered 
        regulatory retaliation, consumer backlash, and city diesel bans across Europe simultaneously. The knock-on effect 
        for platinum was immediate and lasting: less diesel sold = less platinum per vehicle = fewer total ounces needed. 
        Platinum's inability to catch palladium on the way up (when palladium went from $500 to $3,440) traces directly 
        to this supply-demand deterioration on the platinum side.
      </p>

      <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginTop: "32px", marginBottom: "12px" }}>
        Why hybrid vehicles need more platinum, not less
      </h3>
      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        Battery electric vehicles (BEVs) use no PGMs in their drivetrain. But hybrids do, and they often use more 
        platinum per vehicle than a conventional ICE car. A hybrid's combustion engine runs intermittently and at 
        variable load, meaning the catalyst must handle cold-starts and low-temperature operating cycles that are 
        harder on catalyst efficiency. Higher platinum loading compensates. As BEV growth stalls in some markets and 
        hybrids take share, total PGM demand from the light vehicle fleet is holding up better than pessimistic 
        forecasts from 2021–2022 suggested.
      </p>

      {/* Pt-Pd substitution callout */}
      <div style={s.calloutSuccess}>
        <span style={s.calloutIcon}>🔄</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>Platinum-for-palladium substitution has added an estimated 200 to 400 koz of annual demand</p>
          <p style={s.calloutText}>
            When palladium was $2,500–$3,440/oz and platinum was $800–$1,100/oz, catalyst manufacturers had compelling 
            economics to reformulate gasoline three-way catalysts to use more platinum and less palladium. BASF, Umicore, 
            and Johnson Matthey all confirmed substitution programmes were underway. WPIC estimates 200–400 koz/year of 
            platinum demand has been added since 2022 through this mechanism. The economic incentive has reduced as the 
            Pt-Pd spread converged toward parity, but the reformulated catalyst designs persist in production lines and 
            represent a lasting addition to platinum demand that did not exist before 2020.
          </p>
        </div>
      </div>

      {/* Autocatalyst demand chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ marginBottom: "8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
              WPIC / Johnson Matthey · Annual koz · 2015–2024
            </p>
            <p style={s.chartTitle}>Platinum Autocatalyst Demand, Diesel Declining, Gasoline + Substitution Growing</p>
          </div>
          <p style={s.chartSubtitle}>
            Pt diesel (dark grey, declining) · Pt gasoline + substitution (light grey, growing) · Pt hybrid (green, growing)
          </p>
        </div>
        <div style={{ height: "350px" }}>
          <Bar data={autocatChartData} options={autocatChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Sources: WPIC Platinum Quarterly, Johnson Matthey PGM Market Report · /api/platinum/autocatalyst-history
        </p>
      </div>
    </section>
  );
}
