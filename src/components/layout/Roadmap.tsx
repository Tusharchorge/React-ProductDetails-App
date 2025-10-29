import React from "react";

export const Roadmap: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-[12px] w-full max-w-[90%] sm:max-w-[400px] md:max-w-[353px] mx-auto md:ml-[176px] mt-4 sm:mt-6 md:mt-[40px] px-4 md:px-0">
      <span className="font-poppins text-[12px] sm:text-[13px] md:text-[14px] text-black opacity-50 whitespace-nowrap">
        Account
      </span>

      <div className="w-[10px] sm:w-[11px] md:w-[13.19px] border border-black opacity-50 rotate-[117.05deg]" />

      <span className="font-poppins text-[12px] sm:text-[13px] md:text-[14px] text-black opacity-50 whitespace-nowrap">
        Gaming
      </span>

      <div className="w-[10px] sm:w-[11px] md:w-[13.19px] border border-black opacity-50 rotate-[117.05deg]" />

      <span className="font-poppins text-[12px] sm:text-[13px] md:text-[14px] text-black whitespace-nowrap">
        Gamepad
      </span>
    </div>
  );
};
