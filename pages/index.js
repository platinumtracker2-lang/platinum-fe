import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
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

const home = () => {
  return (
    <div>
      <SEO
        title="Platinum Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Platinum market news, price updates, and in-depth analysis. Get accurate insights into the platinum market trends."
        keywords="Platinum prices, Platinum news, Platinum market analysis, Industrial metals, Platinum trading, Platinum updates, Platinum investment, Real-time Platinum updates,investment"
        canonicalUrl="https://www.pgmtracker.com/"
      />

      <Navbar />
      <div className="mt-[60px] md:mt-[80px]">
        <StocksMarquee />
      </div>

      <Hero />

      {/* Price widgets row */}
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

      {/* Insider Transactions + Substacks/CTA */}
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

      {/* Latest News + PGM Tickers */}
      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7 border rounded-md px-3 py-3">
          <LatestNews />
        </div>
        <div className="col-span-1 md:col-span-2 border rounded-md px-3 py-3">
          <TVTickerTags />
        </div>
      </div>

      {/* Press Release + Most Followed */}
      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7 border rounded-md px-3 py-3">
          <PressReleaseNews />
        </div>
        <div className="col-span-1 md:col-span-2 border rounded-md px-3 py-3">
          <PopularIntradayReturn />
        </div>
      </div>

      {/* Stock News + Popular Tools */}
      <div className="grid grid-cols-1 md:grid-cols-9 px-3 md:px-4 gap-3 md:gap-6 mt-3 md:mt-6">
        <div className="col-span-1 md:col-span-7 border rounded-md px-3 py-3">
          <StockNews />
        </div>
        <div className="col-span-1 md:col-span-2 border rounded-md px-3 py-3">
          <PopularTools />
        </div>
      </div>

      {/* Most Popular */}
      <div className="px-3 md:px-4 mt-3 md:mt-6">
        <div className="border rounded-md py-3 px-3">
          <MostPopularNews />
        </div>
      </div>

      {/* Most Followed Stocks Table */}
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
