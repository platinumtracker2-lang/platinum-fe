import { useEffect, useRef } from "react";
import Link from "next/link";

// Key platinum & PGM-related tickers
const PLATINUM_TICKERS = [
  { symbol: "NYSE:SBSW",   label: "Sibanye-Stillwater" },
  { symbol: "OTC:ANGPY",   label: "Anglo American Platinum" },
  { symbol: "OTC:IMPUY",   label: "Impala Platinum" },
  { symbol: "OTC:NMPNF",   label: "Northam Platinum" },
  { symbol: "TSX:PTM",     label: "Platinum Group Metals" },
  { symbol: "OTC:PLZLF",   label: "Palladium One Mining" },
  { symbol: "NYSE:PAL",    label: "Platinum Group Metals" },
  { symbol: "OTC:GMTNF",   label: "Generation Mining" },
];

const TVTickerTags = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the TradingView ticker-tag web component script once
    const scriptId = "tv-ticker-tag-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src =
        "https://widgets.tradingview-widget.com/w/en/tv-ticker-tag.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-[19px] md:text-[21px] font-bold cambay">
          PGM Tickers
        </h2>
        <Link
          href="/investments"
          className="text-[#00AEEF] hover:text-[#00AEEF]/70 text-sm font-bold"
        >
          view all &gt;
        </Link>
      </div>

      {/* Ticker tags grid */}
      <div
        ref={containerRef}
        className="flex flex-col gap-2"
      >
        {PLATINUM_TICKERS.map(({ symbol, label }) => (
          <div
            key={symbol}
            className="flex flex-col gap-1 p-2 rounded-lg border border-gray-100 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5 transition-all duration-150"
          >
            <span className="text-[10px] text-gray-400 font-medium truncate">
              {label}
            </span>
            {/* TradingView web component — renders inline price tag */}
            <tv-ticker-tag symbol={symbol} />
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <Link
          href="/investments"
          className="flex items-center justify-center gap-1 text-xs font-semibold text-[#00AEEF] hover:text-[#00AEEF]/80 transition-colors"
        >
          Full Stock Screener →
        </Link>
      </div>
    </div>
  );
};

export default TVTickerTags;
