import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import DataHero from "@/components/Data/Platinum/DataHero";
import Breadcrumb from "@/components/Data/Platinum/Breadcrumb";
import KeyTakeaways from "@/components/Data/Platinum/KeyTakeaways";
import SectionNav from "@/components/Data/Platinum/SectionNav";
import PriceSection from "@/components/Data/Platinum/PriceSection";
import SupplySection from "@/components/Data/Platinum/SupplySection";
import SouthAfricaSection from "@/components/Data/Platinum/SouthAfricaSection";
import DemandSection from "@/components/Data/Platinum/DemandSection";
import AutocatalystSection from "@/components/Data/Platinum/AutocatalystSection";
import HydrogenSection from "@/components/Data/Platinum/HydrogenSection";
import BalanceSection from "@/components/Data/Platinum/BalanceSection";
import ForecastSection from "@/components/Data/Platinum/ForecastSection";
import ProducersSection from "@/components/Data/Platinum/ProducersSection";
import HistorySection from "@/components/Data/Platinum/HistorySection";
import DriversSection from "@/components/Data/Platinum/DriversSection";
import ETFsSection from "@/components/Data/Platinum/ETFsSection";
import FAQSection from "@/components/Data/Platinum/FAQSection";
import EditorialNote from "@/components/Data/Platinum/EditorialNote";

const Platinum = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <SEO
        title="Platinum Market Data - Live Prices, Supply & Demand Intelligence"
        description="Access comprehensive platinum market data including live spot prices, supply-demand analytics, South African production intelligence, hydrogen fuel cell demand, and exclusive market insights used by industry professionals."
        keywords="platinum prices today, live platinum market data, South Africa platinum production, hydrogen fuel cells, platinum supply chain analytics, platinum demand forecasting, PGM market opportunities, platinum investment intelligence"
        canonicalUrl="https://platinum-frontend-opal.vercel.app/platinum"
      />
      
      <nav id="navigation" role="navigation" aria-label="Main navigation">
        <Navbar />
      </nav>
      
      <Breadcrumb />
      <DataHero />
      <KeyTakeaways />
      <SectionNav />
      <PriceSection />
      <SupplySection />
      <SouthAfricaSection />
      <DemandSection />
      <AutocatalystSection />
      <HydrogenSection />
      <BalanceSection />
      <ForecastSection />
      <ProducersSection />
      <HistorySection />
      <DriversSection />
      <ETFsSection />
      <FAQSection />
      <EditorialNote />

      <footer role="contentinfo" aria-label="Site footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Platinum;
