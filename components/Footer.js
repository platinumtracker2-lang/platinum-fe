import React from "react";
import Footer2 from "./Footer2";

const TRACKERS = [
  { name: "Lithium Tracker",       url: "https://www.lithiumtracker.com/",        color: "#6EE7B7" },
  { name: "Copper Tracker",        url: "https://www.coppertracker.com/",          color: "#FCA5A5" },
  { name: "Nickel Metal Tracker",  url: "https://www.nickelmetaltracker.com/",     color: "#93C5FD" },
  { name: "Uranium Tracker",       url: "https://www.uraniumtracker.com/",         color: "#FDE68A" },
  { name: "PGM Tracker",           url: "https://www.pgmtracker.com/",             color: "#00AEEF" },
  { name: "Gold & Silver Tracker", url: "https://www.goldandsilvertracker.com/",   color: "#FCD34D" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Top hero section */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="w-full">
            <h1 className="text-[clamp(1.4rem,5vw,2.5rem)] font-semibold leading-snug mb-4 text-white frank">
              Everything You Need to Navigate the Platinum Market – All in One Place
            </h1>
            <p className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-white/70 leading-7 max-w-[600px]">
              With demand for clean energy on the rise, many investors are looking for the next big opportunity in Platinum. We're here to help.
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <img src="/mockup.png" alt="mockup" className="w-full h-auto block" />
          </div>
        </div>
      </div>

      {/* Commodities Tracker Network */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-10">
          {/* Section heading */}
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#00AEEF] font-semibold mb-2">
              Commodities Tracker Network
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Explore our suite of real-time commodity trackers
            </h2>
            <p className="text-white/50 text-sm">
              Built for investors who move fast.
            </p>
          </div>

          {/* Tracker cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRACKERS.map(({ name, url, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl p-4 transition-all duration-200"
              >
                {/* Color dot */}
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="text-[13px] font-semibold text-white/80 group-hover:text-white leading-snug transition-colors">
                  {name}
                </span>
                <span
                  className="text-[10px] font-medium mt-auto"
                  style={{ color }}
                >
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer2 />
    </footer>
  );
};

export default Footer;
