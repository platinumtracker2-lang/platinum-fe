# Platinum Page - Complete Implementation Plan

## Status: IN PROGRESS

I've started rebuilding the platinum page to match the HTML reference exactly. Here's what's been completed and what remains.

## ✅ Completed (4/23 components)

1. **styles.js** - Complete styling system matching HTML colors
2. **Breadcrumb.js** - Navigation breadcrumb
3. **DataHero.js** - Hero with scrolling ticker and 5 stat cards
4. **KeyTakeaways.js** - 6 bullet points section
5. **SectionNav.js** - Sticky navigation

## 🚧 In Progress - Critical Components Needed

### High Priority (Need these for page to work)
- **PriceSection.js** - Live price data, converter, Chart.js price history
- **SupplySection.js** - Mine supply table with country flags
- **SouthAfricaSection.js** - Bushveld info, Eskom chart
- **DemandSection.js** - Demand breakdown chart
- **AutocatalystSection.js** - Diesel decline, substitution
- **HydrogenSection.js** - PEM electrolyzers, IEA data
- **BalanceSection.js** - WPIC deficit chart
- **ForecastSection.js** - 3 scenarios (bull/base/bear)
- **ProducersSection.js** - 4 producer cards (Amplats, Implats, Sibanye, Northam)
- **HistorySection.js** - Timeline 2000-2026
- **DriversSection.js** - Driver dashboard table
- **ETFsSection.js** - Investment vehicles + tax considerations
- **FAQSection.js** - FAQ accordion
- **EditorialNote.js** - Data sources

### Supporting Components
- **LivePriceConverter.js** - USD/oz, USD/g, USD/kg, EUR/oz
- **PtVsGoldChart.js** - Indexed comparison chart
- **Chart components** - Reusable Chart.js wrappers

## 📋 Detailed Requirements Per Section

### PriceSection.js
```
- LBMA PM Fix reference table (5 rows)
- Live price converter (4 conversions)
- Chart.js line chart: Price history 2000-present
- Chart.js indexed chart: Pt vs Gold comparison
- Callout box: "Why platinum is cheaper than gold"
- 5Y/10Y/All time period toggles
```

### SupplySection.js
```
- Country supply table with flags (🇿🇦🇷🇺🇿🇼🇨🇦🇺🇸)
- 4 stat cards (mine supply, recycling, SA share, total supply)
- Chart.js stacked bar: Supply by country 2015-2024
- Callout box: Recycling contribution (♻️)
```

### SouthAfricaSection.js
```
- Merensky/UG2/Platreef reef explanation
- Chart.js combo: SA output vs Eskom load-shedding
- Callout box: Eskom load-shedding impact (⚡)
- Detailed text about Bushveld Complex
```

### DemandSection.js
```
- Demand by sector breakdown (6 sectors with %)
- Visual percentage bars
- Explanation of hybrid vehicle demand
```

### AutocatalystSection.js
```
- Dieselgate explanation
- European diesel decline data
- Chart.js: Autocatalyst demand by type
- Callout box: Pt-for-Pd substitution (🔄)
```

### HydrogenSection.js
```
- PEM electrolyzer explanation
- IEA 200 GW target calculation
- Chart.js forecast: Hydrogen demand 2018-2035
- Callout box: Why Pt not Pd (🟢)
```

### BalanceSection.js
```
- 4 stat cards (balance, supply, demand, forecast)
- Chart.js bar: Annual surplus/deficit 2015-2026E
- Callout box: Deficit vs flat price explanation (📋)
```

### ForecastSection.js
```
- 3 scenario cards (bull/base/bear)
- Each with price range, description, requirements
- Color-coded borders (green/grey/red)
```

### ProducersSection.js
```
- 4 producer cards:
  * Anglo American Platinum (JSE:AMS, OTC:ANGPY)
  * Impala Platinum (JSE:IMP, OTC:IMPUY)
  * Sibanye-Stillwater (NYSE:SBSW, JSE:SSW)
  * Northam Platinum (JSE:NPH, OTC:NTHMY)
- Each with: ticker, description, 3 stats, detailed text
```

### HistorySection.js
```
- Timeline with 6 periods:
  * 2000-2008: Bull run to $2,290
  * 2008-2014: Recovery, Marikana
  * 2015-2019: Dieselgate, inversion below gold
  * 2019-2021: COVID rally to $1,298
  * 2021-2024: Eskom, WPIC deficit
  * 2025-present: Stabilization
```

### DriversSection.js
```
- Driver dashboard table with 6 rows:
  * WPIC balance
  * SA output & Eskom
  * Hybrid/ICE production
  * Pt-Pd substitution
  * Hydrogen orders
  * Above-ground stocks
- Each with: signal, direction, current reading, source
```

### ETFsSection.js
```
- 6 investment vehicle cards:
  * PPLT (abrdn Physical Platinum)
  * SBSW (Sibanye-Stillwater)
  * ANGPY (Anglo Platinum ADR)
  * IMPUY (Impala Platinum ADR)
  * NTHMY (Northam Platinum ADR)
  * NYMEX PL (Futures)
- Callout box: 28% collectibles tax calculation (⚠️)
```

## 🎨 Chart.js Configuration

### Required Charts
1. **Line Chart** - Platinum price history (2000-present)
2. **Indexed Line Chart** - Pt vs Gold (2005-present, indexed to 100)
3. **Stacked Bar Chart** - Mine supply by country
4. **Stacked Bar Chart** - Demand by sector
5. **Combo Chart** - SA output (bars) vs Eskom stage (line)
6. **Area Chart** - Hydrogen demand forecast with scenarios

### Chart.js Setup Example
```javascript
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};
```

## 📦 Next Steps

1. **Install Chart.js** ✅ (Done)
2. **Create chart wrapper components**
3. **Build all 14 section components**
4. **Create main platinum.js page**
5. **Test responsiveness**
6. **Add interactivity**

## ⏱️ Time Estimate

- Remaining components: ~16-20 hours
- Chart.js integration: ~4-6 hours
- Testing & polish: ~2-3 hours
- **Total remaining: 22-29 hours**

## 🚀 Quick Start for Completion

To complete this implementation:

1. Copy component structure from HTML reference
2. Use Chart.js for all charts
3. Match exact colors from styles.js
4. Include all callout boxes with icons
5. Add all data tables
6. Implement FAQ accordion
7. Test on mobile/tablet/desktop

## 📝 Notes

- HTML reference is the source of truth
- All colors must match exactly
- Charts must be interactive (Chart.js)
- Must be fully responsive
- Include all callout boxes with proper icons
- Tax considerations are critical for US investors

---

**Current Progress: 22% complete (5/23 components)**
**Estimated completion: 22-29 hours remaining**
