import React from "react";
import { Star } from "lucide-react";

export const ProductRating: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-4 mt-2">
      {/* Stars + Review Count */}
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row items-center">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-[#FFAD33] stroke-[#FFAD33]"
            />
          ))}
          <Star
            size={20}
            className="stroke-[#000000] opacity-25"
          />
        </div>

        <p className="font-poppins text-[14px] text-black opacity-50">
          (150 Reviews)
        </p>
      </div>

      {/* Divider + Stock Info */}
      <div className="flex flex-row items-center gap-3">
        <div className="w-px h-4 bg-black opacity-40" />
        <p className="font-poppins text-[14px] text-[#00FF66]">
          In Stock
        </p>
      </div>
    </div>
  );
};
