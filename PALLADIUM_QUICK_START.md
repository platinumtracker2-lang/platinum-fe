# Palladium Page - Quick Start Guide

## 🚀 What Was Created

A complete palladium market data page with **17 files**:
- 1 main page (`palladium.js`)
- 1 styles file (`styles.js`)
- 15 component files

## 📁 File Locations

```
platinum_frontend/
├── pages/palladium.js                        ← Main page (start here)
└── components/Data/Palladium/
    ├── styles.js                             ← Design system
    ├── Breadcrumb.js
    ├── DataHero.js
    ├── SectionNav.js
    ├── PriceSection.js
    ├── SupplySection.js
    ├── DemandSection.js
    ├── AutocatalystSection.js
    ├── SubstitutionSection.js
    ├── BullMarketSection.js
    ├── FloorSection.js
    ├── ForecastSection.js
    ├── HistorySection.js
    ├── DriversSection.js
    ├── ETFsSection.js
    ├── FAQSection.js
    └── EditorialNote.js
```

## 🎨 Color Palette

Based on the reference site (https://platinum-frontend-opal.vercel.app/data/?tab=overview):

```javascript
// Primary Palladium Colors
pd: "#9ca3af"        // Grey (main)
pdL: "#d1d5db"       // Light grey
pdD: "#6b7280"       // Dark grey
pdBg: "#f9fafb"      // Background
page: "#ffffff"      // White background

// Accent Colors
russia: "#ef4444"    // Red (Russia supply)
sa: "#10b981"        // Green (South Africa)
usa: "#3b82f6"       // Blue (USA)
auto: "#f59e0b"      // Amber (Autocatalyst)
bev: "#8b5cf6"       // Purple (BEV)
```

## 🏃 Run the Page

```bash
cd /home/titan/platinum_frontend
npm run dev
# or
bun dev

# Then visit:
# http://localhost:3000/palladium
```

## 📊 Page Structure

```
┌─────────────────────────────────────┐
│ Navbar (existing component)         │
├─────────────────────────────────────┤
│ Breadcrumb                          │
├─────────────────────────────────────┤
│ DataHero (dark gradient)            │
│ • $900/oz                           │
│ • 5 stat cards                      │
├─────────────────────────────────────┤
│ SectionNav (sticky)                 │
│ [Price][Supply][Demand]...          │
├─────────────────────────────────────┤
│ PriceSection                        │
│ • Live price converter              │
│ • Price history chart               │
│ • Pd vs Pt chart                    │
├─────────────────────────────────────┤
│ SupplySection                       │
│ • Supply table by country           │
│ • Russia Nornickel callout          │
├─────────────────────────────────────┤
│ DemandSection                       │
│ • 85% autocatalyst bar chart        │
├─────────────────────────────────────┤
│ AutocatalystSection                 │
│ • BEV impact analysis               │
├─────────────────────────────────────┤
│ SubstitutionSection                 │
│ • Pt-for-Pd substitution            │
├─────────────────────────────────────┤
│ BullMarketSection                   │
│ • $452 to $3,440 story              │
├─────────────────────────────────────┤
│ FloorSection                        │
│ • Cost of production                │
├─────────────────────────────────────┤
│ ForecastSection                     │
│ • 3 scenarios (bull/base/bear)      │
├─────────────────────────────────────┤
│ HistorySection                      │
│ • Timeline of key events            │
├─────────────────────────────────────┤
│ DriversSection                      │
│ • 5 key signals table               │
├─────────────────────────────────────┤
│ ETFsSection                         │
│ • PALL, SBSW, NYMEX PA, etc.        │
├─────────────────────────────────────┤
│ FAQSection                          │
│ • Collapsible Q&A                   │
├─────────────────────────────────────┤
│ EditorialNote                       │
│ • Data sources                      │
├─────────────────────────────────────┤
│ Footer (existing component)         │
└─────────────────────────────────────┘
```

## 🔧 Quick Customizations

### Change Primary Color
```javascript
// In styles.js
export const vars = {
  pd: "#YOUR_COLOR",  // Change this
  // ...
};
```

### Add a New Section
```javascript
// 1. Create component
// components/Data/Palladium/MySection.js
import * as s from "./styles";

export default function MySection() {
  return (
    <section id="my-section" className={s.section}>
      <p style={s.secLabel}>My Label</p>
      <h2 style={s.h2}>My Title</h2>
      <p style={s.lede}>My content...</p>
    </section>
  );
}

// 2. Add to SectionNav.js
const NAV_ITEMS = [
  // ... existing items
  { label: "My Section", id: "my-section" },
];

// 3. Import and add to palladium.js
import MySection from "@/components/Data/Palladium/MySection";
// ...
<MySection />
```

### Update Live Prices
```javascript
// In DataHero.js or PriceSection.js
useEffect(() => {
  // Fetch from your API
  fetch('/api/palladium/live-price')
    .then(res => res.json())
    .then(data => {
      document.getElementById('h-pd').textContent = `$${data.price}`;
    });
}, []);
```

## 📱 Responsive Breakpoints

```javascript
// Tailwind classes used:
grid-cols-1           // Mobile (default)
lg:grid-cols-3        // Desktop (1024px+)
lg:grid-cols-4        // Desktop (1024px+)
lg:grid-cols-5        // Desktop (1024px+)
```

## 🎯 Key Components Explained

### 1. **styles.js**
- Centralized design system
- All colors, spacing, typography
- Reusable style objects

### 2. **SectionNav.js**
- Sticky navigation
- Auto-highlights active section
- Uses IntersectionObserver

### 3. **DataHero.js**
- Dark gradient background
- 5 stat cards
- Hero content

### 4. **PriceSection.js**
- Live price data
- Price converter
- Charts (SVG placeholders)

### 5. **FAQSection.js**
- Collapsible accordion
- Smooth animations
- Stateful component

## 🔍 Finding Things

### Need to change a color?
→ `components/Data/Palladium/styles.js`

### Need to add a section?
→ Create in `components/Data/Palladium/`
→ Import in `pages/palladium.js`

### Need to update navigation?
→ `components/Data/Palladium/SectionNav.js`

### Need to change hero stats?
→ `components/Data/Palladium/DataHero.js`

## ⚡ Performance Tips

1. **Lazy load sections**: Use `next/dynamic`
2. **Optimize images**: Use `next/image`
3. **Reduce bundle size**: Import only what you need
4. **Cache API calls**: Use SWR or React Query

## 🐛 Common Issues

### Styles not working?
✅ Check import: `import * as s from "./styles"`

### Section not in nav?
✅ Add to NAV_ITEMS in SectionNav.js

### Charts not showing?
✅ Check SVG viewBox and container width

### Colors look wrong?
✅ Verify vars in styles.js match your design

## 📚 Architecture

Same as uranium page:
- ✅ Component-based
- ✅ Centralized styles
- ✅ Inline style objects
- ✅ Hybrid with Tailwind
- ✅ Accessible markup
- ✅ Responsive design

## 🎓 Learn More

- See `PALLADIUM_PAGE_README.md` for detailed docs
- Compare with `/home/titan/ur/pages/data.js` (uranium)
- Check `styles.js` for all available styles

## ✅ Checklist

- [x] Create all 17 files
- [x] Set up color scheme (grey/silver)
- [x] Implement 11 sections
- [x] Add sticky navigation
- [x] Add FAQ accordion
- [x] Add responsive design
- [ ] Connect to live API
- [ ] Replace chart placeholders
- [ ] Add loading states
- [ ] Optimize performance

## 🚢 Ready to Deploy

```bash
# Build for production
npm run build

# Test production build
npm start

# Deploy to Vercel
vercel --prod
```

---

**Created**: Based on palladium-data-page.html
**Architecture**: Same as uranium data page
**Color Scheme**: Grey/silver (palladium-themed)
**Status**: ✅ Ready for development
