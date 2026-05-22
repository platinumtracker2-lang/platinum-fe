import React from "react";
import Link from "next/link";
import { TrendingUp, BarChart2, Database, ArrowRight } from "lucide-react";

const DailyNewsletterAd = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0d1f2d] to-[#001a2e] rounded-xl p-6 h-full flex flex-col justify-between min-h-[220px]">
      {/* Background glow orbs */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#00AEEF]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Icon row */}
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-[#00AEEF]/15 border border-[#00AEEF]/30 rounded-lg p-1.5">
          <BarChart2 size={16} className="text-[#00AEEF]" />
        </div>
        <div className="bg-[#00AEEF]/15 border border-[#00AEEF]/30 rounded-lg p-1.5">
          <TrendingUp size={16} className="text-[#00AEEF]" />
        </div>
        <div className="bg-[#00AEEF]/15 border border-[#00AEEF]/30 rounded-lg p-1.5">
          <Database size={16} className="text-[#00AEEF]" />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-[#00AEEF] text-xs font-semibold uppercase tracking-widest mb-1">
          Deep Dive
        </p>
        <h2 className="text-white text-xl font-bold cambay leading-snug">
          Platinum Market
          <br />
          <span className="text-[#00AEEF]">Data & Analytics</span>
        </h2>
        <p className="text-white/50 text-xs mt-2 leading-relaxed">
          Supply, demand, forecasts, ETFs & more — all in one place.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        href="/data"
        className="mt-4 flex items-center justify-center gap-2 w-full bg-[#00AEEF] hover:bg-[#00AEEF]/85 text-white text-sm font-bold py-2.5 rounded-lg transition-all duration-200 group"
      >
        Explore Data
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default DailyNewsletterAd;
