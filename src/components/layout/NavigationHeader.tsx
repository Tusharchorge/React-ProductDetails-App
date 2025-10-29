import React, { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export const NavigationHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-[1170px] mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        <div className="text-xl sm:text-2xl font-bold tracking-wide text-black">
          Exclusive
        </div>

        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute md:static top-14 left-0 w-full md:w-auto flex-col md:flex-row bg-white md:bg-transparent border-t md:border-none z-50 md:flex items-center gap-6 md:gap-12 text-black text-base font-normal p-4 md:p-0`}
        >
          <a
            href="#"
            className="hover:text-gray-600 transition-colors w-full md:w-auto text-center"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition-colors w-full md:w-auto text-center"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition-colors w-full md:w-auto text-center"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition-colors w-full md:w-auto text-center"
          >
            Sign Up
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
          <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 w-[150px] sm:w-[200px] md:w-[243px] h-[34px] md:h-[38px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent flex-1 text-[12px] sm:text-[13px] md:text-[12px] text-black opacity-70 outline-none placeholder-black placeholder-opacity-50"
            />
            <Search size={16} className="text-black opacity-70" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
              <Heart size={20} strokeWidth={1.5} className="text-black" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
              <ShoppingCart size={20} strokeWidth={1.5} className="text-black" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full">
              <User size={20} strokeWidth={1.5} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
