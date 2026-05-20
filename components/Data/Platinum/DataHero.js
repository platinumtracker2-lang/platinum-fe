import * as s from "./styles";

export default function DataHero() {
  return (
    <>
      {/* Scrolling ticker */}
      <div style={s.ticker}>
        <div style={s.tickerInner}>
          <span>Platinum <strong style={{ color: s.vars.green }}>$950/oz▲</strong></span>
          <span>|</span>
          <span>Pt per gram <strong>$30.54/g</strong></span>
          <span>|</span>
          <span>Pt vs Gold <strong style={{ color: s.vars.red }}>−$1,380</strong></span>
          <span>|</span>
          <span>WPIC Balance <strong style={{ color: s.vars.red }}>−900 koz deficit</strong></span>
          <span>|</span>
          <span>S. Africa supply share <strong>~72%</strong></span>
          <span>|</span>
          <span>Bushveld reserves <strong>87% of world total</strong></span>
          <span>|</span>
          <span>Pt ATH <strong>$2,290 (Mar 2008)</strong></span>
          <span>|</span>
          <span>Pt 2016 trough <strong>$776/oz</strong></span>
          <span>|</span>
          <span>H2 electrolyzer loading <strong>0.3–0.5g Pt / kW</strong></span>
          <span>|</span>
          <span>Palladium <strong style={{ color: s.vars.red }}>$900/oz▼</strong></span>
        </div>
      </div>

      {/* Hero section */}
      <div style={s.hero}>
        <div style={s.heroInner}>
          <p style={s.heroEyebrow}>
            Platinum market data · Updated: April 15, 2026 · LBMA PM Fix
          </p>

          <h1 style={s.h1}>
            Platinum Price Today
          </h1>

          <p style={s.heroLede}>
            Platinum is trading at $950/oz, still below gold and 59% below its March 2008 peak of $2,290. 
            South Africa produces 72% of world supply from the Bushveld Igneous Complex, which holds about 
            87% of known platinum reserves. WPIC projects a supply deficit of roughly 900 thousand ounces 
            in 2024, with further shortfalls expected into 2026. Hydrogen electrolyzers need platinum as 
            their primary catalyst. Live LBMA PM fix, WPIC balance data, mine supply, and producer stats, 
            updated daily.
          </p>

          <div className="grid xl:grid-cols-5 grid-cols-2 gap-3 rounded-lg ">
            <div style={s.statCard}>
              <p style={s.statLabel}>Platinum / oz</p>
              <p style={{ ...s.statValue, color: s.vars.pt }}>$950 /oz</p>
              <p style={s.statSub}>LBMA PM fix · USD per troy oz</p>
            </div>

            <div style={s.statCard}>
              <p style={s.statLabel}>Platinum / gram</p>
              <p style={{ ...s.statValue, color: s.vars.pt }}>$30.54 /g</p>
              <p style={s.statSub}>LBMA PM fix ÷ 31.1035</p>
            </div>

            <div style={s.statCard}>
              <p style={s.statLabel}>Vs Gold today</p>
              <p style={{ ...s.statValue, color: s.vars.red }}>−$1,380</p>
              <p style={s.statSub}>Below gold since 2015 · Historically Pt at premium</p>
            </div>

            <div style={s.statCard}>
              <p style={s.statLabel}>From ATH ($2,290)</p>
              <p style={{ ...s.statValue, color: s.vars.red }}>−59%</p>
              <p style={s.statSub}>March 2008 all-time high · Eskom crisis</p>
            </div>

            <div style={s.statCard}>
              <p style={s.statLabel}>WPIC balance</p>
              <p style={{ ...s.statValue, color: s.vars.red }}>−900 koz</p>
              <p style={s.statSub}>2024E deficit · WPIC Platinum Quarterly</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
