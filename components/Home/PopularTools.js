import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const PopularTools = () => {
  return (
    <div>
      {/* heading  */}
      <div className="flex justify-between border-b border-black1/20 pb-2 mb-4">
        <h2 className="flex items-center text-[21px] font-bold cambay capitalize ">
          Popular Tools
        </h2>

        <a
          href="/investments"
          className="text-[#00AEEF] hover:text-[#00AEEF]/70 text-sm font-bold  "
        >
          view all&nbsp;&gt;
        </a>
      </div>

      <div className="flex flex-col gap-y-2">
        <a href="/investments?tab=stock-screener">
          <div className="w-full bg-gray-100 p-3 py-5 border border-gray-300 rounded-sm relative group hover:bg-[#00AEEF]/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.05rem] font-medium text-black/80 mb-1 group-hover:text-[#00AEEF]">
              Platinum Stock Screener
            </h1>
            <p className="text-[13px] group-hover:text-black/70">
              Filter platinum-focused companies by financials and market performance.
            </p>
            <span className="absolute top-3 right-3 text-gray-400/80 font-extrabold text-[1.4rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>

        <a href="/investments?tab=insider-transactions">
          <div className="w-full bg-gray-100 p-3 py-5 border border-gray-300 rounded-sm relative group hover:bg-[#00AEEF]/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.05rem] font-medium mb-1 text-black/80 group-hover:text-[#00AEEF]">
              Platinum Insider Trading
            </h1>
            <p className="text-[13px] group-hover:text-black/70">
              Track insider transactions in the platinum space.
            </p>
            <span className="absolute top-3 right-3 text-gray-400/80 font-extrabold text-[1.4rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>

        <a href="/investments?tab=etf-trust-holdings">
          <div className="w-full bg-gray-100 p-3 py-5 border border-gray-300 rounded-sm relative group hover:bg-[#00AEEF]/15 hover:scale-[1.02] transition-all duration-200">
            <h1 className="text-[1.05rem] font-medium text-black/80 mb-1 group-hover:text-[#00AEEF]">
              ETF/Trust Holdings
            </h1>
            <p className="text-[13px] group-hover:text-black/70">
              View holdings and returns for platinum ETFs and trusts.
            </p>
            <span className="absolute top-3 right-3 text-gray-400/80 font-extrabold text-[1.4rem] group-hover:text-green/60">
              <BsArrowUpRight />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PopularTools;
