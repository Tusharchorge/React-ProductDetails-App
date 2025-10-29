import React, { useState } from "react";
import { Heart } from "lucide-react";

export const AddToCartSection: React.FC = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="
        flex flex-col sm:flex-row items-stretch sm:items-center
        gap-3 sm:gap-4 my-4 sm:my-6 w-full
      "
    >
      {/* Buy Now Button */}
      <button
        className="
          flex justify-center items-center
          w-full sm:w-[165px] h-[44px] sm:h-[48px]
          bg-[#DB4444] text-[#FAFAFA]
          font-poppins font-medium text-[15px] sm:text-[16px] leading-[24px]
          rounded-md
          hover:bg-[#c23c3c] transition
        "
      >
        Buy Now
      </button>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className={`
          w-[44px] h-[44px] sm:w-[48px] sm:h-[48px]
          border border-black/50 rounded-md
          flex items-center justify-center
          transition-all duration-200
          ${
            isWishlisted
              ? "bg-[#DB4444]"
              : "bg-transparent hover:bg-gray-100"
          }
        `}
      >
        <Heart
          className="w-[20px] h-[20px]"
          strokeWidth={1.5}
          color={isWishlisted ? "#FAFAFA" : "#000000"}
          fill={isWishlisted ? "#FAFAFA" : "none"}
        />
      </button>
    </div>
  );
};
