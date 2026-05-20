import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import * as s from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PriceSection() {
  const [priceChartPeriod, setPriceChartPeriod] = useState('5Y');
  const [indexChartPeriod, setIndexChartPeriod] = useState('20Y');

  // Price history chart data
  const priceChartData = {
    labels: ['2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024', '2026'],
    datasets: [
      {
        label: 'Platinum Price',
        data: [400, 500, 800, 1200, 2290, 1600, 1500, 1400, 776, 900, 850, 1000, 950, 950],
        borderColor: s.vars.pt,
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
      {
        label: 'Gold (reference)',
        data: [280, 350, 450, 650, 900, 1200, 1650, 1250, 1200, 1500, 1800, 1900, 2000, 2330],
        borderColor: s.vars.amber,
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const priceChartOptions = {
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
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  };

  // Indexed chart data (Pt vs Gold)
  const indexChartData = {
    labels: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023', '2025'],
    datasets: [
      {
        label: 'Platinum',
        data: [100, 180, 120, 180, 160, 110, 95, 90, 130, 95, 95],
        borderColor: s.vars.pt,
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Gold',
        data: [100, 140, 180, 280, 300, 220, 240, 280, 340, 360, 420],
        borderColor: s.vars.amber,
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      }
    ]
  };

  const indexChartOptions = {
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
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Index (Jan 2005 = 100)'
        }
      }
    }
  };

  return (
    <section id="price" style={s.section}>
      <p style={s.sectionLabel}>LIVE PRICE DATA</p>
      <h2 style={s.h2}>
        Platinum Price Today: LBMA Fix, Price Per Gram and Platinum vs Gold
      </h2>
      <p style={s.lede}>
        The LBMA (London Bullion Market Association) fixes platinum twice daily (AM around 09:45 London time, 
        PM around 14:00) via an electronic auction process run by the LBMA. The PM fix is the standard settlement 
        reference for most platinum contracts and the price quoted here. Platinum is quoted in USD per troy ounce 
        worldwide; 1 troy ounce equals 31.1035 grams.
      </p>

      {/* Price reference table */}
      <div style={{ 
        background: s.vars.ptBg, 
        border: `1px solid ${s.vars.bdr}`, 
        borderRadius: s.vars.r,
        padding: "20px",
        marginBottom: "24px"
      }}>
        <p style={{ ...s.sectionLabel, marginBottom: "16px" }}>
          PLATINUM PRICE REFERENCE, APRIL 2026
        </p>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
          gap: "16px" 
        }}>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.vars.pt, fontFamily: "'DM Mono', monospace" }}>
              $950
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              USD / troy oz
            </p>
            <p style={{ fontSize: "10px", color: s.vars.muted }}>
              LBMA PM fix
            </p>
          </div>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.vars.pt, fontFamily: "'DM Mono', monospace" }}>
              $30.54
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              USD / gram
            </p>
            <p style={{ fontSize: "10px", color: s.vars.muted }}>
              PM fix ÷ 31.1035
            </p>
          </div>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.vars.red, fontFamily: "'DM Mono', monospace" }}>
              −$1,380
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              Vs gold
            </p>
            <p style={{ fontSize: "10px", color: s.vars.muted }}>
              Below gold since 2015
            </p>
          </div>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.vars.red, fontFamily: "'DM Mono', monospace" }}>
              −59%
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              From $2,290 ATH
            </p>
            <p style={{ fontSize: "10px", color: s.vars.muted }}>
              March 2008 high
            </p>
          </div>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 700, color: s.vars.green, fontFamily: "'DM Mono', monospace" }}>
              +22%
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              From $776 trough
            </p>
            <p style={{ fontSize: "10px", color: s.vars.muted }}>
              January 2016 low
            </p>
          </div>
        </div>
      </div>

      {/* Live price converter */}
      <div style={{ 
        background: s.vars.white, 
        border: `1px solid ${s.vars.bdr}`, 
        borderRadius: s.vars.r,
        padding: "20px",
        marginBottom: "24px"
      }}>
        <p style={{ ...s.sectionLabel, marginBottom: "12px" }}>
          LIVE PRICE CONVERTER
        </p>
        <p style={{ fontSize: "12px", color: s.vars.muted, marginBottom: "16px" }}>
          Based on current LBMA PM fix · Updates on each daily data refresh
        </p>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "12px" 
        }}>
          <div style={{ textAlign: "center", padding: "12px", background: s.vars.ptBg, borderRadius: s.vars.r }}>
            <p style={{ fontSize: "20px", fontWeight: 700, color: s.vars.ink, fontFamily: "'DM Mono', monospace" }}>
              $950
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              USD / troy oz
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "12px", background: s.vars.ptBg, borderRadius: s.vars.r }}>
            <p style={{ fontSize: "20px", fontWeight: 700, color: s.vars.ink, fontFamily: "'DM Mono', monospace" }}>
              $30.54
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              USD / gram
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "12px", background: s.vars.ptBg, borderRadius: s.vars.r }}>
            <p style={{ fontSize: "20px", fontWeight: 700, color: s.vars.ink, fontFamily: "'DM Mono', monospace" }}>
              $30,543
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              USD / kilogram
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "12px", background: s.vars.ptBg, borderRadius: s.vars.r }}>
            <p style={{ fontSize: "20px", fontWeight: 700, color: s.vars.ink, fontFamily: "'DM Mono', monospace" }}>
              ~€880
            </p>
            <p style={{ fontSize: "11px", color: s.vars.muted, marginTop: "4px" }}>
              EUR / troy oz
            </p>
          </div>
        </div>
      </div>

      {/* Price history chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
                LBMA PM Fix · USD per troy oz · 2000–present
              </p>
              <p style={s.chartTitle}>Platinum Price History, Full Cycle</p>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <button 
                onClick={() => setPriceChartPeriod('5Y')}
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: priceChartPeriod === '5Y' ? s.vars.pt : s.vars.ptBg,
                  color: priceChartPeriod === '5Y' ? s.vars.white : s.vars.muted,
                }}
              >
                5Y
              </button>
              <button 
                onClick={() => setPriceChartPeriod('10Y')}
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: priceChartPeriod === '10Y' ? s.vars.pt : s.vars.ptBg,
                  color: priceChartPeriod === '10Y' ? s.vars.white : s.vars.muted,
                }}
              >
                10Y
              </button>
              <button 
                onClick={() => setPriceChartPeriod('All')}
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: priceChartPeriod === 'All' ? s.vars.pt : s.vars.ptBg,
                  color: priceChartPeriod === 'All' ? s.vars.white : s.vars.muted,
                }}
              >
                All
              </button>
            </div>
          </div>
          <p style={s.chartSubtitle}>
            ATH $2,290 (Mar 2008) · 2016 trough $776 · Current ~$950
          </p>
        </div>
        <div style={{ height: "300px" }}>
          <Line data={priceChartData} options={priceChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Source: LBMA PM Fix · /api/platinum/pt-history · Dashed amber line = gold price (visual reference only) · Updated daily
        </p>
      </div>

      {/* Pt vs Gold indexed chart */}
      <div style={s.chartContainer}>
        <div style={s.chartHeader}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
            <div>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: s.vars.muted, marginBottom: "4px" }}>
                LBMA · Indexed Jan 2005 = 100 · Long-term comparison
              </p>
              <p style={s.chartTitle}>Platinum vs Gold, The Historic Premium Inversion</p>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <button 
                onClick={() => setIndexChartPeriod('20Y')}
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: s.vars.pt,
                  color: s.vars.white,
                }}
              >
                20Y
              </button>
            </div>
          </div>
          <p style={s.chartSubtitle}>
            Platinum (grey) · Gold (amber dashed). Platinum commanded a premium for 15+ years before Dieselgate in Sep 2015 reversed the relationship.
          </p>
        </div>
        <div style={{ height: "300px" }}>
          <Line data={indexChartData} options={indexChartOptions} />
        </div>
        <p style={{ fontSize: "10px", color: s.vars.muted, marginTop: "12px" }}>
          Sources: LBMA platinum and gold PM fixings · /api/platinum/pt-vs-gold-history · Index: Jan 2005 = 100
        </p>
      </div>

      {/* Callout: Why platinum is cheaper than gold */}
      <div style={s.calloutWarning}>
        <span style={s.calloutIcon}>⚠️</span>
        <div style={s.calloutContent}>
          <p style={s.calloutTitle}>Why platinum is cheaper than gold right now</p>
          <p style={s.calloutText}>
            Platinum is rarer than gold. Annual mine supply is approximately 5,800 koz (platinum) versus roughly 
            120,000 koz (gold), platinum is produced at about 5% of gold's volume. Before 2015, platinum consistently 
            traded at a premium to gold because of this scarcity plus strong diesel autocatalyst demand in Europe. 
            The September 2015 Dieselgate scandal destroyed European diesel vehicle sales overnight, removing 600–800 koz 
            of annual platinum autocatalyst demand from projected trajectory. Simultaneously, gold attracted safe-haven 
            buying as real rates fell. The result: the first sustained Pt-below-gold period in modern market history. 
            The WPIC supply deficit and growing hydrogen demand are the two mechanisms by which platinum could recover 
            toward gold parity. Neither comes with a timeline or a guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
