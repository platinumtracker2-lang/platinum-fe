import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Data/Palladium/Breadcrumb";
import DataHero from "@/components/Data/Palladium/DataHero";
import SectionNav from "@/components/Data/Palladium/SectionNav";
import PriceSection from "@/components/Data/Palladium/PriceSection";
import SupplySection from "@/components/Data/Palladium/SupplySection";
import DemandSection from "@/components/Data/Palladium/DemandSection";
import AutocatalystSection from "@/components/Data/Palladium/AutocatalystSection";
import SubstitutionSection from "@/components/Data/Palladium/SubstitutionSection";
import BullMarketSection from "@/components/Data/Palladium/BullMarketSection";
import FloorSection from "@/components/Data/Palladium/FloorSection";
import ForecastSection from "@/components/Data/Palladium/ForecastSection";
import HistorySection from "@/components/Data/Palladium/HistorySection";
import DriversSection from "@/components/Data/Palladium/DriversSection";
import ETFsSection from "@/components/Data/Palladium/ETFsSection";
import FAQSection from "@/components/Data/Palladium/FAQSection";
import EditorialNote from "@/components/Data/Palladium/EditorialNote";

const Palladium = () => {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 768px) {
          .snav-container {
            padding: 0 16px;
          }
        }
        
        /* Ensure responsive tables */
        @media (max-width: 1024px) {
          .responsive-table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <SEO
          title="Palladium Market Data - Live Prices, Supply & Demand Intelligence"
          description="Access comprehensive palladium market data including live LBMA PM fix prices, mine supply analytics, autocatalyst demand trends, BEV impact analysis, and exclusive market insights used by industry professionals."
          keywords="palladium prices today, live palladium market data, LBMA PM fix, palladium supply chain analytics, autocatalyst demand, BEV impact on palladium, platinum substitution, palladium investment intelligence, Nornickel supply, Stillwater mine"
          canonicalUrl="https://pgmtracker.com/palladium"
        />
        
        <nav id="navigation" role="navigation" aria-label="Main navigation">
          <Navbar />
        </nav>
        
        <Breadcrumb />
        <DataHero />
        <SectionNav />
        <PriceSection />
        <SupplySection />
        <DemandSection />
        <AutocatalystSection />
        <SubstitutionSection />
        <BullMarketSection />
        <FloorSection />
        <ForecastSection />
        <HistorySection />
        <DriversSection />
        <ETFsSection />
        <FAQSection />
        <EditorialNote />

        <footer role="contentinfo" aria-label="Site footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Palladium;
