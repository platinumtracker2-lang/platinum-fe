import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Breadcrumb from "@/components/C101/C101Breadcrumb";
import GlossaryAccordion from "@/components/C101/GlossaryAccordion";
import SEO from "@/components/SEO";

const Glossary = () => {
  return (
    <div>
      <SEO
        title="Platinum Glossary - Platinum Industry Terms & Definitions"
        description="Comprehensive glossary of platinum industry terms, definitions, and technical vocabulary. Learn about platinum mining, processing, alloys, and market terminology."
        keywords="platinum glossary, platinum terms, platinum definitions, platinum industry vocabulary, metal terminology, platinum alloys, mining terms"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/platinum101/glossary"
      />
      <Navbar />
      <C101Breadcrumb link="/platinum101/glossary" title="Platinum Glossary" />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Platinum Industry Glossary</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Comprehensive definitions and explanations of key terms in the platinum industry
          </p>
          <GlossaryAccordion />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Glossary;
