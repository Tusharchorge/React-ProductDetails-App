import React, { useState } from "react";

export const ProductColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    { name: "Red", hex: "#E07575" },
    { name: "Blue", hex: "#A0BCE0" },
  ];

  return (
    <div className="flex flex-row items-center gap-6 mt-4">
      <span className="font-inter text-[18px] tracking-[0.03em] text-black">
        Colours:
      </span>

      <div className="flex flex-row gap-3">
        {colors.map((color) => {
          const isActive = selectedColor === color.hex;
          return (
            <button
              key={color.hex}
              onClick={() => setSelectedColor(color.hex)}
              className={`w-6 h-6 rounded-full transition-all duration-200 ${
                isActive ? "ring-2 ring-black" : "hover:ring-1 hover:ring-gray-400"
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
            />
          );
        })}
      </div>
    </div>
  );
};
