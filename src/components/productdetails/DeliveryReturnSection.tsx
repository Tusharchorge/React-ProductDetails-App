import React, { useState } from "react";
import { Truck, RotateCcw } from "lucide-react";

export const DeliveryReturnSection: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [postalCode, setPostalCode] = useState("");

  return (
    <div
      className="
        w-full max-w-[400px]
        border border-black/50 rounded-md
        flex flex-col justify-between
        p-4
        mt-6
      "
    >
      <div className="flex flex-row items-center gap-4">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <Truck strokeWidth={2} color="#000000" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-medium font-poppins text-black">
            Free Delivery
          </p>

          {showInput ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="border border-black/40 rounded px-2 py-1 text-[12px] w-[150px] focus:outline-none"
              />
              <button
                className="bg-[#DB4444] text-white text-[12px] px-3 py-1 rounded hover:bg-[#b83a3a]"
                onClick={() =>
                  alert(`Checking availability for ${postalCode}...`)
                }
              >
                Check
              </button>
            </div>
          ) : (
            <p
              className="text-[12px] font-medium font-poppins text-black underline cursor-pointer"
              onClick={() => setShowInput(true)}
            >
              Enter your postal code for Delivery Availability
            </p>
          )}
        </div>
      </div>

      <div className="w-full border-t border-black/50 opacity-50 my-4"></div>

      <div className="flex flex-row items-center gap-4">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <RotateCcw strokeWidth={2} color="#000000" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-medium font-poppins text-black">
            Return Delivery
          </p>
          <p className="text-[12px] font-medium font-poppins text-black">
            Free 30 Days Delivery Returns. Details
          </p>
        </div>
      </div>
    </div>
  );
};
