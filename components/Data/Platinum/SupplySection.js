import React from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import * as s from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SupplySection() {
  // Stacked bar chart data
  const supplyChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'South Africa',
        data: [4500, 4400, 4300, 4200, 4100, 3800, 4000, 3900, 3800, 4200],
        backgroundColor: s.vars.pt,
      },
      {
        label: 'Russia',
        data: [700, 680, 690, 670, 660, 640, 650, 650, 650, 650],
        backgroundColor: s.vars.red,
      },
      {
        label: 'Zimbabwe',
        data: [400, 420, 440, 460, 470, 450, 460, 470, 480, 480],
        backgroundColor: s.vars.blue,
      },
      {
        label: 'N.America',
        data: [250, 260, 270, 280, 280, 260, 270, 280, 285, 285],
        backgroundColor: s.vars.green,
      },
      {
        label: 'Other',
        data: [150, 160, 170, 180, 190, 170, 180, 185, 185, 185],
        backgroundColor: '#d1d5db',
      }
    ]
  };

  const supplyChartOptions = {
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
      tooltip: {
        mode: 'index',
        intersect: false,
      }
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
    <section id="supply" style={s.section}>
      <p style={s.sectionLabel}>GLOBAL MINE SUPPLY</p>
      <h2 style={s.h2}>
        Where Does Platinum Come From? Global Mine Supply by Country
      </h2>
      <p style={s.lede}>
        Global platinum mine supply is approximately 5,800 koz per year. South Africa produces 72% of that from 
        a single geological structure. Russia produces about 11% as a palladium-dominant by-product of nickel-copper 
        mining. Zimbabwe produces 8% from the Great Dyke. Canada, the USA, and Australia make up the remaining 9%. 
        No major new platinum mine has been built at scale anywhere in over a decade.
      </p>

      {/* Country supply table */}
      <div className="overflow-x-auto w-full">
        <table
    style={{
      ...s.table,
      minWidth: "900px",
    }}
  >
          <thead>
            <tr>
              <th style={s.th}>Country</th>
              <th style={s.th}>Platinum koz</th>
              <th style={s.th}>Pt share</th>
              <th style={s.th}>Key operators</th>
              <th style={s.th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>🇿🇦 South Africa</td>
              <td style={s.td}>~4,200</td>
              <td style={s.td}>~72%</td>
              <td style={s.td}>Amplats, Implats, Sibanye, Northam</td>
              <td style={s.td}>Bushveld Igneous Complex, Merensky Reef, UG2 Reef, Platreef. Deep underground and open-pit.</td>
            </tr>
            <tr>
              <td style={s.td}>🇷🇺 Russia</td>
              <td style={s.td}>~650</td>
              <td style={s.td}>~11%</td>
              <td style={s.td}>Nornickel (Norilsk)</td>
              <td style={s.td}>By-product of Ni/Cu sulphide mining. Also produces ~38% of global palladium.</td>
            </tr>
            <tr>
              <td style={s.td}>🇿🇼 Zimbabwe</td>
              <td style={s.td}>~480</td>
              <td style={s.td}>~8%</td>
              <td style={s.td}>Zimplats (Implats 87%), Unki (Anglo)</td>
              <td style={s.td}>Great Dyke geological structure. Output growing; politically stable recent years.</td>
            </tr>
            <tr>
              <td style={s.td}>🇨🇦 🇺🇸 Canada / USA</td>
              <td style={s.td}>~285</td>
              <td style={s.td}>~5%</td>
              <td style={s.td}>Sibanye Stillwater (Montana)</td>
              <td style={s.td}>Primarily palladium-dominant (Stillwater). Small Pt production as co-product.</td>
            </tr>
            <tr>
              <td style={s.td}>Others</td>
              <td style={s.td}>~185</td>
              <td style={s.td}>~3%</td>
              <td style={s.td}>Australia (Ni by-product), Finland</td>
              <td style={s.td}>Fragmented, small-scale operations with limited growth potential.</td>
            </tr>
            <tr style={{ borderTop: `2px solid ${s.vars.bdr}` }}>
              <td style={{ ...s.td, fontWeight: 700 }}>World total</td>
              <td style={{ ...s.td, fontWeight: 700 }}>~5,800 koz</td>
              <td style={{ ...s.td, fontWeight: 700 }}>100%</td>
              <td style={s.td} colSpan="2">
                <span style={{ fontSize: "11px", color: s.vars.muted }}>
                  Sources: WPIC Platinum Quarterly, USGS Mineral Commodity Summaries, Johnson Matthey PGM Market Report
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Supply stats */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "16px",
        marginBottom: "24px"
      }}>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>Mine supply 2024E</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.pt }}>~5,800 koz</p>
          <p style={s.sectionStatSub}>WPIC / USGS estimate</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>Pt recycling 2024E</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.pt }}>~1,750 koz</p>
          <p style={s.sectionStatSub}>~28% of total supply</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>South Africa share</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.green }}>~72%</p>
          <p style={s.sectionStatSub}>Bushveld Igneous Complex</p>
        </div>
        <div style={s.sectionStatCard}>
          <p style={s.sectionStatLabel}>Total supply 2024E</p>
          <p style={{ ...s.sectionStatValue, color: s.vars.pt }}>~7,600 koz</p>
          <p style={s.sectionStatSub}>Mine + recycling combined</p>
        </div>
      </div>

      {/* Supply chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ marginBottom: "8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
              WPIC Platinum Quarterly · USGS MCS · Annual koz Pt · 2015–2024
            </p>
            <p style={s.chartTitle}>Platinum Mine Supply by Country, Stacked Annual</p>
          </div>
          <p style={s.chartSubtitle}>
            South Africa (grey) · Russia (red) · Zimbabwe (blue) · N.America (green) · Other (light grey). 
            COVID 2020 dip and 2022–23 Eskom load-shedding impact visible.
          </p>
        </div>
        <div style={{ height: "350px" }}>
          <Bar data={supplyChartData} options={supplyChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Sources: WPIC Platinum Quarterly, USGS MCS · /api/platinum/mine-supply-history
        </p>
      </div>

      {/* Recycling callout */}
      <div style={s.calloutInfo}>
        <span style={s.calloutIcon}>♻️</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>Platinum recycling contributes about 28% of total annual supply</p>
          <p style={s.calloutText}>
            Autocatalyst recycling contributed approximately 1,750 koz of platinum to 2024 total supply, roughly 28% 
            of total. Recycling is somewhat counter-cyclical: when platinum prices rise, more end-of-life catalytic 
            converters get collected and processed. The 2–4 year lag from vehicle scrapping to recovered metal means 
            recycling responds to price signals with a delay, which can amplify short-term tightness when supply is 
            already constrained. At current depressed prices, recycling economics are thin, lower throughput keeps 
            the market tighter than it would otherwise be.
          </p>
        </div>
      </div>
    </section>
  );
}
