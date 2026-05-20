import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const Footer2 = () => {
  return (
    <div className="bg-[#00AEEF] text-white w-full py-8 pb-10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
        <div className="relative w-[140px] h-[45px]">
          <Image
            src="/logo.jpg"
            alt="Platinum Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center gap-2 text-sm md:text-base">
          <MdEmail className="text-lg md:text-xl flex-shrink-0" />
          <span>info@platinumtracker.com</span>
        </div>

        <div className="w-full max-w-md border-t border-white/40 my-1" />

        <div className="text-xs md:text-sm flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <span>© 2026 Platinum Tracker</span>
          <span className="hidden sm:inline">|</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="hidden sm:inline">|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
