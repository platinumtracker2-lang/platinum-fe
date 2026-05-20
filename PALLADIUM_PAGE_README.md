# Palladium Data Page - Implementation Guide

## Overview

A comprehensive palladium market data page has been created following the same architecture as the uranium data page, adapted for palladium with appropriate styling and color scheme.

## File Structure

```
/home/titan/platinum_frontend/
├── pages/
│   └── palladium.js                          # Main page
└── components/Data/Palladium/
    ├── styles.js                             # Centralized design system
    ├── Breadcrumb.js                         # Navigation breadcrumb
    ├── DataHero.js                           # Hero section with live prices
    ├── SectionNav.js                         # Sticky scroll-spy navigation
    ├── PriceSection.js                       # Live price data & charts
    ├── SupplySection.js                      # Global mine supply
    ├── DemandSection.js                      # Demand by sector
    ├── AutocatalystSection.js                # Autocatalyst & BEV analysis
    ├── SubstitutionSection.js                # Pt-for-Pd substitution
    ├── BullMarketSection.js                  # Historical bull market
    ├── FloorSection.js                       # Price floor analysis
    ├── ForecastSection.js                    # Price forecast scenarios
    ├── HistorySection.js                     # Price history timeline
    ├── DriversSection.js                     # Market drivers dashboard
    ├── ETFsSection.js                        # Investment vehicles
    ├── FAQSection.js                         # FAQ accordion
    └── EditorialNote.js                      # Data sources note
```

## Color Scheme

The palladium page uses a **grey/silver color palette** to match the metal's appearance:

### Primary Colors
- **Palladium Grey**: `#9ca3af` - Primary color for palladium data
- **Light Grey**: `#d1d5db` - Highlights and accents
- **Dark Grey**: `#6b7280` - Text and borders
- **Background**: `#ffffff` - Clean white background

### Accent Colors
- **Russia (Red)**: `#ef4444` - Russia supply data
- **South Africa (Green)**: `#10b981` - SA supply data
- **USA (Blue)**: `#3b82f6` - US supply data
- **Autocatalyst (Amber)**: `#f59e0b` - Demand data
- **BEV (Purple)**: `#8b5cf6` - BEV impact data

## Key Features

### 1. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Horizontal scrolling for tables and navigation on mobile
- Fluid typography using CSS clamp()

### 2. **Interactive Components**
- **SectionNav**: Scroll-spy navigation with IntersectionObserver
- **FAQSection**: Collapsible accordion with smooth transitions
- **Charts**: SVG-based charts (placeholder data, ready for real data integration)

### 3. **Accessibility**
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support

### 4. **Styling Architecture**
- Centralized design system in `styles.js`
- Object-based inline styles
- Hybrid approach with Tailwind utilities
- Consistent component patterns

## Usage

### Access the Page

```
http://localhost:3000/palladium
```

### Customize Colors

Edit `/components/Data/Palladium/styles.js`:

```javascript
export const vars = {
  pd: "#9ca3af",        // Change primary palladium color
  pdL: "#d1d5db",       // Change light variant
  pdD: "#6b7280",       // Change dark variant
  // ... more colors
};
```

### Add Real Data

Replace placeholder data in components:

1. **PriceSection.js**: Update price values and chart data
2. **SupplySection.js**: Update supply table with real data
3. **DemandSection.js**: Update demand percentages
4. **Charts**: Replace SVG placeholder data with Chart.js or similar

### Integrate with API

Example for live price updates:

```javascript
// In DataHero.js or PriceSection.js
useEffect(() => {
  fetch('/api/palladium/price')
    .then(res => res.json())
    .then(data => {
      document.getElementById('h-pd').textContent = `$${data.price}`;
      document.getElementById('h-pd-gram').textContent = `$${data.pricePerGram}`;
    });
}, []);
```

## Component Patterns

### Pattern 1: Simple Section
```javascript
import * as s from "./styles";

export default function MySection() {
  return (
    <section id="my-section" className={s.section}>
      <p style={s.secLabel}>Section Label</p>
      <h2 style={s.h2}>Section Title</h2>
      <p style={s.lede}>Section description...</p>
    </section>
  );
}
```

### Pattern 2: Chart Block
```javascript
<div style={s.cb}>
  <div style={s.cbHdr}>
    <div style={s.cbLabels}>
      <p style={s.cl}>Chart Label</p>
      <p style={s.ct}>Chart Title</p>
      <p style={s.cm}>Chart Meta</p>
    </div>
    <div style={s.cbTabs}>
      <button style={s.tabOn}>5Y</button>
      <button style={s.tab}>10Y</button>
    </div>
  </div>
  <div style={s.chartSvgWrap}>
    <svg>...</svg>
  </div>
</div>
```

### Pattern 3: Stat Grid
```javascript
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
  <div style={s.stat}>
    <p style={{ ...s.statVal, ...s.pdC }}>$900</p>
    <p style={s.statLbl}>Label</p>
    <p style={s.statSub}>Sublabel</p>
  </div>
</div>
```

## Sections Overview

| Section | ID | Purpose |
|---------|-----|---------|
| Price | `price` | Live LBMA PM fix, price converter, charts |
| Supply | `supply` | Global mine supply by country, Russia analysis |
| Demand | `demand` | Demand breakdown by sector (85% autocatalyst) |
| Autocatalyst | `autocatalyst` | Gasoline TWC usage, BEV impact |
| Substitution | `substitution` | Pt-for-Pd substitution analysis |
| Bull Market | `bull-market` | Historical $452 to $3,440 rally |
| Floor | `floor` | Cost of production analysis |
| Forecast | `forecast` | 3 price scenarios (bull/base/bear) |
| History | `history` | Timeline of key events |
| Drivers | `drivers` | 5 key market signals |
| ETFs | `etfs` | Investment vehicles (PALL, SBSW, etc.) |
| FAQ | `faq` | Common questions |

## Next Steps

### 1. **Add Real Data**
- Connect to LBMA API for live prices
- Integrate USGS/Johnson Matthey data for supply/demand
- Add IEA EV data for BEV penetration

### 2. **Enhance Charts**
- Replace SVG placeholders with Chart.js
- Add interactive tooltips
- Implement time range selectors

### 3. **Add More Sections** (Optional)
- Producer profiles (Nornickel, Amplats, Sibanye)
- Recycling section
- Regional demand breakdown
- Technical analysis

### 4. **Performance Optimization**
- Lazy load sections below the fold
- Optimize SVG charts
- Add loading skeletons

### 5. **SEO Enhancement**
- Add structured data (JSON-LD)
- Optimize meta descriptions
- Add Open Graph tags

## Comparison with Uranium Page

| Feature | Uranium | Palladium |
|---------|---------|-----------|
| **Color Scheme** | Amber/Orange | Grey/Silver |
| **Primary Focus** | Nuclear reactors | Autocatalyst/BEV |
| **Key Risk** | Kazakhstan supply | Russia supply + BEV |
| **Sections** | 15 sections | 11 sections |
| **Architecture** | ✅ Same | ✅ Same |
| **Styling** | Inline + Tailwind | Inline + Tailwind |

## Troubleshooting

### Issue: Styles not applying
**Solution**: Ensure `styles.js` is imported correctly:
```javascript
import * as s from "./styles";
```

### Issue: Navigation not working
**Solution**: Check that section IDs match NAV_ITEMS in SectionNav.js

### Issue: Charts not displaying
**Solution**: Verify SVG viewBox and parent container dimensions

## Support

For questions or issues:
1. Check the uranium data page implementation for reference
2. Review the styles.js file for available style objects
3. Ensure all imports are correct

## License

© 2026 PGM Tracker. All rights reserved.
