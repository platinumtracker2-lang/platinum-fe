"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MOST_FOLLOWED, PLATINUM_STOCK_DETAIL } from "@/src/api/platinumAPI";
import axios from "axios";
import Loader from "@/components/Loader";

// Renders a single TradingView single-quote widget for a given symbol
const TVSingleQuote = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous widget
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      width: "100%",
    });
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full overflow-hidden"
    />
  );
};

// Map ticker → TradingView exchange:symbol
const toTVSymbol = (ticker, exchange) => {
  if (!ticker) return null;
  const t = ticker.split(".")[0].toUpperCase();
  // Use exchange from DB if available, otherwise guess common ones
  if (exchange) {
    const ex = exchange.toUpperCase();
    if (ex === "TSX" || ex === "TSX-V" || ex === "TSXV") return `TSX:${t}`;
    if (ex === "NYSE") return `NYSE:${t}`;
    if (ex === "NASDAQ") return `NASDAQ:${t}`;
    if (ex === "OTC" || ex === "OTCMKTS") return `OTC:${t}`;
    if (ex === "ASX") return `ASX:${t}`;
    if (ex === "LSE") return `LSE:${t}`;
    return `${ex}:${t}`;
  }
  // Fallback heuristics
  if (t.endsWith("F") && t.length >= 5) return `OTC:${t}`;
  return `NYSE:${t}`;
};

const ISnapshot = ({ stockData = [] }) => {
  const [stocksData, setStocksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(MOST_FOLLOWED);
        const apiData = response.data;

        let allStocks = [];
        if (apiData.data) {
          allStocks = [
            ...(apiData.data.most_watched || []),
            ...(apiData.data.north_american_leaders || []),
            ...(apiData.data.global_market_leaders || []),
          ];
        } else if (Array.isArray(apiData)) {
          allStocks = apiData;
        }

        if (allStocks.length === 0 && stockData?.length > 0) {
          allStocks = stockData.slice(0, 12).map((s) => ({
            name: s.company_name,
            ticker: s.ticker,
            stock_exchange: s.stock_exchange,
            current_price: parseFloat(s.last_price?.replace(/[$,]/g, "") || 0),
            intraday_percentage: parseFloat(s.intraday_percentage?.replace("%", "") || 0),
          }));
        }

        setStocksData(allStocks.slice(0, 12));
      } catch (err) {
        console.error("Error fetching snapshot stocks:", err);
        setError("Failed to load snapshot data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStocks();
  }, [stockData]);

  const handleStockClick = async (ticker) => {
    const t = ticker?.split(".")[0];
    if (!t) return;
    try {
      const res = await axios.get(`${PLATINUM_STOCK_DETAIL}?stock_ticker=${t}`);
      if (res.data.exists ?? true) {
        router.push(`/stock-detail/${t}`);
      } else {
        setErrorMessage(`Details for ${t} are not available.`);
        setIsModalOpen(true);
      }
    } catch {
      router.push(`/stock-detail/${t}`);
    }
  };

  return (
    <div className="px-3 md:px-12 py-5">
      <h1 className="cambay text-[22px] sm:text-3xl font-semibold">Snapshot</h1>

      {/* Error modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-md w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Not Available</h2>
            <p className="text-sm mb-4">{errorMessage}</p>
            <button
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-3 md:mt-5">
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        ) : error ? (
          <p className="text-red-500 text-sm">{error}</p>
        ) : stocksData.length === 0 ? (
          <p className="text-gray-500 text-sm">No snapshot data available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {stocksData.map((stock, index) => {
              const tvSymbol = toTVSymbol(stock.ticker, stock.stock_exchange);
              if (!tvSymbol) return null;
              return (
                <div
                  key={index}
                  className="cursor-pointer rounded-md overflow-hidden border border-gray-200 hover:border-[#00AEEF]/50 hover:shadow-sm transition-all duration-150"
                  onClick={() => handleStockClick(stock.ticker)}
                >
                  <TVSingleQuote symbol={tvSymbol} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ISnapshot;
