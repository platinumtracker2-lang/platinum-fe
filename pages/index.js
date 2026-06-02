import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import Footer from "@/components/Footer";
import TVPlatinumCFD from "@/components/Home/TVPlatinumCFD";
import TVPlatinum from "@/components/Home/TVPlatinum";
import DirectHomePlatinumPrice from "@/components/Home/DirectHomePlatinumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";
import TVTickerTags from "@/components/Home/TVTickerTags";
import Head from "next/head";

// Build the full JSON-LD graph with live price data
function buildJsonLd(platinumSpot, dateModified) {
  const siteUrl = "https://www.pgmtracker.com";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Platinum Tracker",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 200,
          height: 60,
        },
        sameAs: [
          "https://www.uraniumtracker.com/",
          "https://www.lithiumtracker.com/",
          "https://www.coppertracker.com/",
          "https://www.nickelmetaltracker.com/",
          "https://www.goldandsilvertracker.com/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Platinum Tracker",
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/news?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Platinum Tracker - Real-time News, Prices & Analysis",
        description: "Stay ahead with real-time Platinum market news, price updates, and in-depth analysis. Get accurate insights into the platinum market trends.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#org` },
        datePublished: "2023-01-01",
        dateModified,
      },
      {
        "@type": "Dataset",
        "@id": `${siteUrl}/#dataset-platinum-price`,
        name: "Platinum Spot Price",
        description: "Live platinum spot price in USD per ounce, updated daily.",
        license: `${siteUrl}/disclaimer`,
        creator: { "@id": `${siteUrl}/#org` },
        dateModified,
        keywords: ["platinum price", "spot price", "platinum", "precious metals", "PGM"],
        variableMeasured: [
          {
            "@type": "PropertyValue",
            name: "Platinum Spot Price",
            unitCode: "USD/oz",
            value: platinumSpot?.price ?? "N/A",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change",
            unitCode: "USD/oz",
            value: platinumSpot?.price_change ?? "0",
          },
          {
            "@type": "PropertyValue",
            name: "Daily Change Percent",
            unitCode: "%",
            value: platinumSpot?.price_change_percent ?? "0%",
          },
        ],
      },
    ],
  };
}

const home = ({ platinumSpot, jsonLd }) => {
  return (
    <div>
      <SEO
        title="Platinum Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Platinum market news, price updates, and in-depth analysis. Get accurate insights into the platinum market trends."
        keywords="Platinum prices, Platinum news, Platinum market analysis, Industrial metals, Platinum trading, Platinum updates, Platinum investment, Real-time Platinum updates,investment"
        canonicalUrl="https://www.pgmtracker.com/"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {platinumSpot && (
        <div className="sr-only" aria-label="Live platinum spot price data">
          <p>
            Platinum Spot Price: ${platinumSpot.price} per ounce.
            Daily change: ${platinumSpot.price_change} ({platinumSpot.price_change_percent}).
            Data as of {platinumSpot.date}.
          </p>
        </div>
      )}

      <Navbar />
      <div className="mt-[112px] md:mt-[120px]">
        <StocksMarquee />
      </div>

      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 px-3 md:px-4 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-3">
          <div className="border rounded-md px-3 py-3">
            <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-2 border-b border-black/10 pb-1">
              Platinum Price Chart
            </h1>
            <TVPlatinumCFD />
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className="border rounded-md px-3 py-3">
            <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-2 border-b border-black/10 pb-1">
              Prices
            </h1>
            <div className="border rounded-md my-1">
              <DirectHomePlatinumPrice />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="border rounded-md px-3 py-3">
            <h1 className="text-[17px] md:text-[19px] cambay font-bold mb-2 border-b border-black/10 pb-1">
              Platinum Futures
            </h1>
            <TVPlatinum />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7">
          <div className="border rounded-md px-3 py-3">
            <div className="flex justify-between items-center mb-2 border-b border-black/10 pb-1">
              <h1 className="text-[15px] md:text-[19px] cambay font-bold leading-tight">
                Recent Canadian Company Insider Transactions
              </h1>
              <a
                href="/investments"
                className="text-xs md:text-sm text-[#00AEEF] hover:text-[#00AEEF]/80 transition-colors whitespace-nowrap ml-2"
              >
                view all
              </a>
            </div>
            <HomeInsiderTransactions />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="border rounded-md px-3 py-3">
            <Substacks />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7 border rounded-md px-3 py-3">
          <LatestNews />
        </div>
        <div className="col-span-1 md:col-span-2 border rounded-md px-3 py-3">
          <TVTickerTags />
        </div>
      </div>

      <div className="px-3 md:px-4 mt-3 md:mt-6">
        <div className="border rounded-md px-3 py-3">
          <PressReleaseNews />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7 border rounded-md px-3 py-3">
          <StockNews />
        </div>
        <div className="col-span-1 md:col-span-2 border rounded-md px-3 py-3">
          <PopularTools />
        </div>
      </div>

      <div className="px-3 md:px-4 mt-3 md:mt-6">
        <div className="border rounded-md py-3 px-3">
          <MostPopularNews />
        </div>
      </div>

      <div className="mt-3 md:mt-6">
        <MostFollowedStocksTable />
      </div>

      <div className="mb-4 md:mb-8">
        <StayAhead />
      </div>

      <Footer />
    </div>
  );
};

export default home;

export async function getServerSideProps() {
  const dateModified = new Date().toISOString();
  let platinumSpot = null;

  try {
    const res = await fetch("https://metal-scrapper.onrender.com/commodities", {
      headers: { "Accept": "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (res.ok) {
      const data = await res.json();
      const platinum = Array.isArray(data)
        ? data.find((i) => i.name === "Platinum" || i.name === "platinum")
        : null;

      if (platinum) {
        platinumSpot = {
          price: parseFloat(platinum.price || 0).toFixed(4),
          price_change: parseFloat(platinum.day_change || 0).toFixed(4),
          price_change_percent: platinum.percent_change
            ? `${parseFloat(platinum.percent_change).toFixed(2)}%`
            : "0.00%",
          date: dateModified,
        };
      }
    }
  } catch (err) {
    console.warn("SSR platinum price fetch failed:", err.message);
  }

  const jsonLd = buildJsonLd(
    platinumSpot?.price ?? "N/A",
    platinumSpot?.price_change ?? "0",
    platinumSpot?.price_change_percent ?? "0%",
    dateModified
  );

  return {
    props: {
      platinumSpot,
      jsonLd,
    },
  };
}