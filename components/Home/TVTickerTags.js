import { useEffect } from "react";
import Link from "next/link";

// 8 tickers — displayed 2 per row = 4 rows
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
  useEffect(() => {
    const scriptId = "tv-ticker-tag-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://widgets.tradingview-widget.com/w/en/tv-ticker-tag.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
        <h2 className="text-[17px] md:text-[19px] font-bold cambay">PGM Tickers</h2>
        <Link href="/investments" className="text-[#00AEEF] hover:text-[#00AEEF]/70 text-xs font-bold">
          view all &gt;
        </Link>
      </div>

      {/* 2-per-row grid, 4 rows */}
      <div className="grid grid-cols-2 gap-1.5">
        {PLATINUM_TICKERS.map(({ symbol, label }) => (
          <div
            key={symbol}
            className="flex flex-col gap-0.5 p-1.5 rounded-md border border-gray-100 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5 transition-all duration-150 min-w-0 overflow-hidden"
          >
            <span className="text-[9px] text-gray-400 font-medium truncate leading-tight">
              {label}
            </span>
            <div className="overflow-hidden">
              <tv-ticker-tag symbol={symbol} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3 pt-2 border-t border-gray-100">
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
