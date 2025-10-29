import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export const TopHeader: React.FC = () => {
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = ["English", "Spanish", "French", "Japanese", "Hindi"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-black text-white h-12 flex items-center relative z-50 px-3 sm:px-4 md:px-8">
      <div className="w-full max-w-[1440px] flex items-center justify-between gap-4">
        <div className="flex-1 overflow-hidden text-center sm:text-left">
          <p className="animate-marquee text-[12px] sm:text-[13px] md:text-[14px] font-light whitespace-nowrap">
            Summer Sale For All Swim Suits And Free Express Delivery –{" "}
            <span className="font-semibold text-white">OFF 50%!</span>{" "}
            <span className="underline cursor-pointer font-medium">Shop Now</span>
          </p>
        </div>

        <div className="relative text-[12px] sm:text-[13px] md:text-[14px]" ref={dropdownRef}>
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer select-none"
          >
            <span>{language}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-[110px] sm:w-[120px] z-[9999]">
              {languages.map((lang) => (
                <div
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setOpen(false);
                  }}
                  className={`px-3 py-2 text-xs sm:text-sm cursor-pointer hover:bg-gray-100 ${
                    lang === language ? "font-semibold" : ""
                  }`}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
