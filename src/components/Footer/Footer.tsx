import React from "react";
import {
  Mail,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import downloadAppImg from "../../assets/Frame 721.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-6 mt-10">
      {/* Main Footer Grid */}
      <div
        className="
          max-w-[1170px] mx-auto
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
          gap-10 lg:gap-8
          px-4 sm:px-6
          text-center sm:text-left
        "
      >
        {/* Subscribe Section */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h2 className="text-2xl font-bold tracking-[0.03em] font-inter text-[#FAFAFA]">
            Exclusive
          </h2>
          <p className="text-[18px] sm:text-[20px] font-medium font-poppins">
            Subscribe
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#FAFAFA]/80 font-poppins max-w-[220px]">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-[#FAFAFA]/60 rounded-md px-3 py-2 sm:py-3 gap-3 w-full max-w-[260px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-[#FAFAFA]/70 text-sm placeholder-[#FAFAFA]/40 flex-1 font-poppins"
            />
            <Send size={20} className="text-white cursor-pointer hover:text-[#DB4444]" />
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h3 className="text-[18px] sm:text-[20px] font-medium font-poppins">
            Support
          </h3>
          <p className="text-[15px] sm:text-[16px] text-[#FAFAFA]/80 font-poppins">
            Pimpri Chinchwad, Pune-411044
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#FAFAFA]/80 font-poppins">
            tushar@gmail.com
          </p>
          <p className="text-[15px] sm:text-[16px] text-[#FAFAFA]/80 font-poppins">
            +91-8379803341
          </p>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h3 className="text-[18px] sm:text-[20px] font-medium font-poppins">
            Account
          </h3>
          <ul className="flex flex-col gap-2 text-[#FAFAFA]/80 font-poppins text-[15px] sm:text-[16px]">
            <li className="hover:text-[#DB4444] cursor-pointer">My Account</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Login / Register</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Cart</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Wishlist</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h3 className="text-[18px] sm:text-[20px] font-medium font-poppins">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-2 text-[#FAFAFA]/80 font-poppins text-[15px] sm:text-[16px]">
            <li className="hover:text-[#DB4444] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Terms Of Use</li>
            <li className="hover:text-[#DB4444] cursor-pointer">FAQ</li>
            <li className="hover:text-[#DB4444] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App + Socials */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <img
            src={downloadAppImg}
            alt="Download App"
            className="w-[160px] sm:w-[180px] object-contain"
          />
          <div className="flex gap-5 pt-2">
            <Facebook size={22} className="cursor-pointer hover:text-[#DB4444]" />
            <Twitter size={22} className="cursor-pointer hover:text-[#DB4444]" />
            <Instagram size={22} className="cursor-pointer hover:text-[#DB4444]" />
            <Linkedin size={22} className="cursor-pointer hover:text-[#DB4444]" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/30 my-10"></div>

      {/* Bottom Copyright */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center opacity-70 font-poppins px-4">
        <Mail size={18} />
        <p className="text-[14px] sm:text-[16px] text-[#FAFAFA]">
          Copyright productDetails 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
