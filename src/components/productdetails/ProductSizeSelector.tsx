import React, { useState } from "react";

export const ProductSizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4">
      {/* Label */}
      <span className="font-inter text-[18px] sm:text-[20px] text-[#000000] tracking-[0.03em]">
        Size:
      </span>

      {/* Size Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {sizes.map((size) => {
          const isActive = selectedSize === size;
          return (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-[38px] sm:w-[42px] h-[38px] sm:h-[42px] rounded-[4px] flex items-center justify-center 
                font-poppins font-medium text-[14px] leading-[21px] transition-all duration-200
                ${
                  isActive
                    ? "bg-[#DB4444] text-[#FAFAFA]"
                    : "border border-black/50 text-[#000000] hover:bg-gray-100"
                }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};
