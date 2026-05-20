# Platinum Page - Quick Start Guide

## 🚀 Getting Started

### 1. View the Page
Navigate to: `http://localhost:3000/platinum` (development) or `https://platinum-frontend-opal.vercel.app/platinum` (production)

### 2. File Structure
```
platinum_frontend/
├── pages/
│   └── platinum.js                    # Main page
└── components/
    └── Data/
        └── Platinum/
            ├── styles.js              # Styling system
            ├── Breadcrumb.js          # Navigation breadcrumb
            ├── DataHero.js            # Hero section
            ├── SectionNav.js          # Sticky navigation
            ├── PriceSection.js        # Price data
            ├── SupplySection.js       # Supply data
            ├── SouthAfricaSection.js  # SA producers
            ├── DemandSection.js       # Demand breakdown
            ├── AutocatalystSection.js # Diesel demand
            ├── HydrogenSection.js     # Fuel cells
            ├── BalanceSection.js      # Supply-demand
            ├── ForecastSection.js     # Price forecasts
            ├── ProducersSection.js    # Major producers
            ├── HistorySection.js      # Price history
            ├── DriversSection.js      # Price drivers
            ├── ETFsSection.js         # Investment vehicles
            ├── FAQSection.js          # FAQ accordion
            └── EditorialNote.js       # Disclaimer
```

## 🎨 Styling

### Color Variables (styles.js)
```javascript
pt: "#e5e7eb"        // Primary platinum grey
ptL: "#f3f4f6"       // Light grey
ptD: "#9ca3af"       // Dark grey
ptBg: "#ffffff"      // White background
```

### Key Style Objects
- `hero` - Hero section with gradient
- `snav` - Sticky section navigation
- `section` - Main section container
- `cb` - Chart block
- `stat` - Stat card
- `callout` - Callout box
- `timeline` - Timeline component
- `faqWrap` - FAQ accordion

## 📊 Sections Overview

### 1. Price Section
- Current spot price (~$950/oz)
- Historical chart (2000-present)
- Key reference prices
- 4 stat cards

### 2. Supply Section
- Global production by country
- South Africa 70%, Russia 12%, Zimbabwe 8%
- Production trends chart
- Supply table

### 3. South Africa Section
- Bushveld Complex dominance
- 3 major producers: Anglo, Impala, Sibanye
- Load shedding impact
- Producer cards with stats

### 4. Demand Section
- Sector breakdown chart
- Autocatalyst 40%, Jewelry 30%, Industrial 25%, Investment 6%
- Demand table
- 4 stat cards

### 5. Autocatalyst Section
- Diesel vehicle demand
- European diesel decline chart
- Pt-Pd substitution dynamics
- Demand outlook table

### 6. Hydrogen Section
- Fuel cell demand (30-60g Pt per vehicle)
- Green hydrogen production
- 3 scenario cards (bull/base/bear)
- Key initiatives table

### 7. Balance Section
- Supply vs demand chart
- Structural deficit analysis
- 4 stat cards

### 8. Forecast Section
- 2026-2030 price scenarios
- Bull: $1,400-1,800/oz
- Base: $1,000-1,200/oz
- Bear: $700-900/oz
- Institutional forecasts table

### 9. Producers Section
- 4 producer cards: Anglo, Impala, Sibanye, Norilsk
- Production stats
- Company details

### 10. History Section
- Timeline from 2008 to present
- Key events: 2008 peak, Dieselgate, COVID crash
- 8 timeline items

### 11. Drivers Section
- Price drivers table
- Bullish vs bearish signals
- Pt-Pd dynamics callout

### 12. ETFs Section
- 6 investment vehicles
- PPLT, PLTM, PHPT, SBSW, ANGPY, IMPUY
- Investment considerations table

### 13. FAQ Section
- 10 comprehensive questions
- Accordion functionality
- Topics: price, investment, hydrogen, South Africa

### 14. Editorial Note
- Data sources
- Disclaimer
- Contact info

## 🔧 Customization

### Change Colors
Edit `components/Data/Platinum/styles.js`:
```javascript
export const vars = {
  pt: "#your-color",     // Primary color
  ptL: "#your-color",    // Light variant
  ptD: "#your-color",    // Dark variant
  // ... other colors
};
```

### Add New Section
1. Create component: `components/Data/Platinum/NewSection.js`
2. Import in `pages/platinum.js`
3. Add to navigation in `SectionNav.js`
4. Add section with id: `<section id="new-section">`

### Modify Content
Each section component is self-contained. Edit the component file directly to change:
- Text content
- Data values
- Charts
- Tables

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Wide: > 1536px (2xl)

### Grid Layouts
```javascript
// 2 columns on desktop, 1 on mobile
className="grid grid-cols-1 lg:grid-cols-2 gap-4"

// 3 columns on desktop, 1 on mobile
className="grid grid-cols-1 lg:grid-cols-3 gap-4"

// 4 columns on desktop, 2 on mobile
className="grid grid-cols-2 lg:grid-cols-4 gap-4"
```

## 🎯 Key Features

### Sticky Navigation
- Sticks at `top: 70px` (below main navbar)
- Auto-highlights active section
- Smooth scroll on click
- Hidden scrollbar

### Scroll Tracking
Uses Intersection Observer API:
```javascript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) setActiveId(id);
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);
```

### FAQ Accordion
- Click to expand/collapse
- Only one open at a time
- Smooth transitions
- Accessible (aria-expanded)

## 🔗 Integration

### Add to Navigation
In your main navbar component:
```javascript
<Link href="/platinum">Platinum</Link>
```

### Link from Data Page
Update `/pages/data.js` to include platinum tab or link.

## 📈 Data Updates

### Price Data
Update in `DataHero.js` and `PriceSection.js`:
```javascript
<p style={{ ...style.hsV, ...style.ptC }} id="h-spot">
  $950/oz  // Update this value
</p>
```

### Production Data
Update in `SupplySection.js` and `ProducersSection.js`.

### Forecasts
Update in `ForecastSection.js` quarterly.

## 🐛 Troubleshooting

### Navigation Not Highlighting
- Check section IDs match navigation items
- Verify Intersection Observer is working
- Check scroll position thresholds

### Styles Not Applying
- Ensure styles.js is imported correctly
- Check for CSS conflicts
- Verify Tailwind classes are valid

### Components Not Rendering
- Check import paths
- Verify component exports
- Check for JavaScript errors in console

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hooks](https://react.dev/reference/react)

### Market Data Sources
- [WPIC](https://www.platinuminvestment.com/)
- [LBMA](https://www.lbma.org.uk/)
- [Anglo Platinum](https://www.angloamericanplatinum.com/)

## ✅ Checklist

- [x] All 18 components created
- [x] Main page assembled
- [x] Styling system complete
- [x] Navigation working
- [x] Responsive design
- [x] FAQ accordion functional
- [x] Documentation complete

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

### Build Locally
```bash
npm run build
npm start
```

---

**Ready to use!** 🎉

For questions or issues, refer to `PLATINUM_PAGE_COMPLETE.md` for detailed documentation.
