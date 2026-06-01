import React, { useState, useEffect } from "react";

const DirectPlatinumPrice = () => {
  const [platinumData, setPlatinumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatinumPrice = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/cme-platinum-spot");

        if (!response.ok) {
          console.warn(
            `Platinum price API returned ${response.status} — showing empty state`,
          );
          setPlatinumData(null);
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          setPlatinumData(null);
          setLoading(false);
          return;
        }

        const cmeData = data[0];

        setPlatinumData({
          price: parseFloat(cmeData.price),
          price_change: parseFloat(cmeData.day_change),
          price_change_percent: parseFloat(cmeData.percent_change),
          source: "CME Group",
          last_updated: cmeData.date,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching CME platinum spot price:", error);
        setError(error.message);
        setPlatinumData(null);
        setLoading(false);
      }
    };

    fetchPlatinumPrice();

    const interval = setInterval(fetchPlatinumPrice, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  //  Return null while loading
  if (loading) {
    return null;
  }

  // Return null if no data or error
  if (!platinumData || error) {
    return null;
  }

  const { price, price_change, price_change_percent, source } = platinumData;

  // Format large numbers (CNY) with commas
  const formattedPrice =
    price > 1000
      ? price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : price.toFixed(2);

  const changeValue = parseFloat(price_change || 0);
  const formattedChange =
    Math.abs(changeValue) > 1000
      ? Math.abs(changeValue).toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : Math.abs(changeValue).toFixed(2);

  const formattedPercent = parseFloat(price_change_percent || 0).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Platinum Price
      </h2>

      {/* Single row with all data */}
      <div className="bg-[#00AEEF]/30 p-4 md:p-3 lg:p-4 w-full border border-[#00AEEF]/30 rounded-md">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-24 md:w-28 lg:w-28 h-auto object-contain"
              src="/logo.webp"
              alt="Platinum Tracker Logo"
            />
          </div>

          {/* Price Data */}
          <div className="flex-1 grid grid-cols-3 gap-2 text-center">
            {/* Price */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                Price
              </p>
              <p className="text-sm md:text-xs lg:text-sm font-bold text-green">
                ${formattedPrice}
              </p>
            </div>

            {/* Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                Change
              </p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  changeValue >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {changeValue >= 0
                  ? `+${formattedChange}`
                  : `-${formattedChange}`}
              </p>
            </div>

            {/* % Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                % Change
              </p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  parseFloat(formattedPercent) >= 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {parseFloat(formattedPercent) >= 0
                  ? `+${formattedPercent}%`
                  : `${formattedPercent}%`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-start">
        <p className="text-xs text-gray-600">Source: {source}</p>
        <p className="font-medium text-date text-sm md:text-xs lg:text-sm">
          <a
            target="_blank"
            className="text-[#00AEEF] hover:text-[#00AEEF]/60 transition-all duration-200"
            href="https://tradingeconomics.com/commodity/platinum"
            rel="noopener noreferrer"
          >
            CME Group - Platinum Futures
          </a>
        </p>
      </div>
    </div>
  );
};

export default DirectPlatinumPrice;