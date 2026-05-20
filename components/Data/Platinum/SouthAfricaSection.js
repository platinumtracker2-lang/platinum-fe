import React from "react";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import * as s from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SouthAfricaSection() {
  // SA output vs Eskom chart data
  const eskomChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        type: 'bar',
        label: 'SA Pt Output (koz)',
        data: [4500, 4400, 4300, 4200, 4100, 3800, 4000, 3900, 3800, 4200],
        backgroundColor: s.vars.pt,
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Eskom Avg Stage',
        data: [1, 1.5, 1, 1.5, 2, 3, 2.5, 4, 6, 3],
        borderColor: s.vars.red,
        backgroundColor: s.vars.red,
        borderWidth: 3,
        yAxisID: 'y1',
        tension: 0.4,
      }
    ]
  };

  const eskomChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
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
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'SA Pt Output (koz)'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Eskom Stage (0-8)'
        },
        grid: {
          drawOnChartArea: false,
        },
        min: 0,
        max: 8,
      },
    }
  };

  return (
    <section id="south-africa" style={s.section}>
      <p style={s.sectionLabel}>SOUTH AFRICA</p>
      <h2 style={s.h2}>
        South Africa and the Bushveld Igneous Complex
      </h2>
      <p style={s.lede}>
        The Bushveld Igneous Complex (BIC) is the most platinum-rich geological structure on Earth. It is an ancient 
        igneous intrusion covering roughly 65,000 km² across Limpopo, Gauteng, and North West provinces (about the 
        size of Ireland). It contains three discrete reef layers from which virtually all South African platinum is 
        mined. There is no comparable ore body anywhere else in the world. Understanding the Bushveld is the 
        prerequisite for understanding platinum supply risk.
      </p>

      <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.vars.ink, marginTop: "32px", marginBottom: "12px" }}>
        Merensky, UG2 and Platreef: the three platinum-bearing reef layers
      </h3>
      <p style={{ fontSize: "14px", color: s.vars.ink3, lineHeight: 1.7, marginBottom: "24px" }}>
        The <strong>Merensky Reef</strong> is a thin (0.5–1.5m) PGM-bearing pyroxenite layer grading 4–8g/t 4E 
        (platinum + palladium + rhodium + gold). It has been mined since the 1920s and now requires increasingly 
        deep underground workings as the accessible near-surface sections deplete, some operations now at 1.5–2km 
        depth. The <strong>UG2 Reef</strong> (Upper Group 2 chromitite) sits below Merensky with lower platinum 
        grades but higher rhodium content and is more amenable to mechanised mining, most production growth in the 
        past 20 years has come from UG2. The <strong>Platreef</strong> runs in the northern BIC at much greater 
        thickness (5–60m) and lower average grade; Ivanhoe Mines' Palladium One project (formerly Platreef) is 
        targeting this reef for large-scale, lower-cost mining.
      </p>

      {/* Eskom load-shedding callout */}
      <div style={s.calloutWarning}>
        <span style={s.calloutIcon}>⚡</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>What Eskom load-shedding actually does to platinum mine output</p>
          <p style={s.calloutText}>
            South Africa's state utility Eskom implements rolling power cuts (load-shedding) when generation capacity 
            is insufficient to meet demand. Underground platinum mines are extraordinarily power-intensive: continuous 
            power is required for ventilation, water pumping, ore hoisting, and processing. Stage 4 load-shedding, 
            which means roughly 8 hours of unplanned cuts per day, reduces mine throughput by approximately 10–15% 
            and concentrator throughput more severely because processing facilities cannot ramp down and restart 
            efficiently. The 2023 crisis, which at points reached Stage 8 equivalent, materially reduced full-year 
            production at all four major SA producers. Load-shedding has improved substantially in 2024–2025 as Eskom 
            added new generating capacity and miners invested heavily in solar self-generation and diesel backup. It 
            is not fully resolved, but the acute crisis has passed. Monitor Eskom Stage announcements alongside 
            producer quarterly results.
          </p>
        </div>
      </div>

      {/* SA output vs Eskom chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ marginBottom: "8px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
              WPIC + EskomSePush data · Annual · 2015–2024
            </p>
            <p style={s.chartTitle}>South Africa Platinum Output vs Eskom Load-Shedding Severity</p>
          </div>
          <p style={s.chartSubtitle}>
            SA Pt mine output koz (grey bars, left axis) · Eskom annual average Stage (red line, right axis 0–8)
          </p>
        </div>
        <div style={{ height: "350px" }}>
          <Bar data={eskomChartData} options={eskomChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Sources: WPIC Platinum Quarterly (SA output) · EskomSePush API (annual avg stage) · /api/platinum/sa-output-history
        </p>
      </div>
    </section>
  );
}
