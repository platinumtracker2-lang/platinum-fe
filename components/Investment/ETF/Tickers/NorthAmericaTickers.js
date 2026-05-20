import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const NorthAmericaETFTickers = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "Sprott Platinum Miners ETF", proName: "AMEX:URNM" },
        { description: "Global X Platinum ETF", proName: "AMEX:URA" },
        { description: "Sprott Junior Platinum Miners ETF", proName: "NASDAQ:URNJ" },
        { description: "Horizons Global Platinum Index ETF", proName: "TSX:HURA" },
        { description: "VanEck Platinum+Nuclear Energy ETF", proName: "AMEX:NLR" },
        { description: "Defiance 2X Long URNM ETF", proName: "AMEX:NUKZ" },
      ],
      isTransparent: false,
      showSymbolLogo: true,
      colorTheme: "light",
      locale: "en",
    });

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
};

const DynamicNorthAmericaETFTickers = dynamic(
  () => Promise.resolve(NorthAmericaETFTickers),
  {
    ssr: false,
  }
);

export default NorthAmericaETFTickers;
