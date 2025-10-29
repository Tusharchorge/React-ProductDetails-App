import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const ProductQuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-center sm:justify-start">
      <button
        onClick={handleDecrease}
        className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] border border-black/50 rounded-l-md flex items-center justify-center hover:bg-gray-100 transition active:scale-95"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4 text-black" strokeWidth={1.5} />
      </button>

      <div className="w-[50px] sm:w-[56px] h-[40px] sm:h-[44px] border-y border-black/50 flex items-center justify-center">
        <span className="font-poppins font-medium text-[16px] sm:text-[18px] select-none">
          {quantity}
        </span>
      </div>

      <button
        onClick={handleIncrease}
        className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] bg-[#DB4444] rounded-r-md flex items-center justify-center hover:bg-[#c23c3c] transition active:scale-95"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4 text-white" strokeWidth={1.5} />
      </button>
    </div>
  );
};
