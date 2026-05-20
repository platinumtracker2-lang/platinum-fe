import * as s from "./styles";

export default function KeyTakeaways() {
  return (
    <div style={{ background: s.vars.ptBg, borderBottom: `1px solid ${s.vars.bdr}`, padding: "32px 24px" }}>
      <div style={{ maxWidth: s.vars.max, margin: "0 auto" }}>
        <h2 style={{ ...s.h2, marginBottom: "20px" }}>
          Key Takeaways, Platinum April 2026
        </h2>

        <ul style={{ 
          listStyle: "none", 
          padding: 0, 
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            Platinum is $950/oz (LBMA PM fix), approximately 59% below its March 2008 all-time high of $2,290, 
            and below gold on a sustained basis for the first time in history. The Pt-to-gold discount stands 
            at roughly $1,380 today.
          </li>

          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            South Africa produces about 72% of the world's platinum, almost entirely from the Bushveld Igneous 
            Complex in Limpopo, Gauteng, and North West provinces. The Bushveld holds roughly 87% of known global 
            platinum reserves. No comparable deposit exists anywhere else.
          </li>

          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            WPIC projects a platinum supply deficit of ~900 koz in 2024 and continued deficit through 2025–2026 
            as South African mine output remains constrained by Eskom power issues and global hydrogen demand 
            builds from a low base. A supply deficit does not automatically translate to higher prices, but it 
            is the core bull case.
          </li>

          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            Platinum's demand base is diversifying. Autocatalysts (diesel + hybrid) account for ~40% of demand, 
            jewellery ~22%, industrial ~18%, investment ~8%, and hydrogen ~5%, a mix that is less exposed to any 
            single driver than it was a decade ago. Hybrid vehicle growth is actually supportive: hybrids need 
            more platinum per vehicle than pure ICE, not less, because the catalyst must work efficiently at 
            lower operating temperatures.
          </li>

          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            Hydrogen electrolyzers are the longer-range growth story. Proton exchange membrane (PEM) electrolyzers 
            use ~0.3–0.5g of platinum per kilowatt of capacity. The IEA estimates 200 GW of electrolyzer capacity 
            is needed by 2030 under Net Zero scenarios, implying 1.9–3.2 million troy ounces of platinum demand 
            over that buildout period, against annual mine supply of ~5,800 koz.
          </li>

          <li style={{ 
            fontSize: "14px", 
            color: s.vars.ink3, 
            lineHeight: 1.7,
            paddingLeft: "24px",
            position: "relative",
          }}>
            <span style={{ 
              position: "absolute", 
              left: 0, 
              color: s.vars.pt,
              fontWeight: 700,
            }}>•</span>
            The US tax treatment of PPLT (the main platinum ETF) is 28% collectibles rate, not the standard 
            15–20% long-term capital gains rate. At the 20% LTCG bracket, that is 8 percentage points of 
            difference per dollar of gain. Mining equities (SBSW, ANGPY, IMPUY) are taxed at standard LTCG 
            rates and may be more tax-efficient for US investors in taxable accounts.
          </li>
        </ul>
      </div>
    </div>
  );
}
