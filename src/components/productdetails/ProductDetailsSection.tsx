import React, { useState } from "react";
import { ProductTitle } from "./ProductTitle";
import { ProductRating } from "./ProductRating";
import { ProductPrice } from "./ProductPrice";
import { ProductDescription } from "./ProductDescription";
import { ProductSizeSelector } from "./ProductSizeSelector";
import { ProductColorSelector } from "./ProductColorSelector";
import { ProductQuantitySelector } from "./ProductQuantitySelector";
import { AddToCartSection } from "./AddToCartSection";
import { DeliveryReturnSection } from "./DeliveryReturnSection";

import gamepad1 from "../../assets/Frame 894.png";
import gamepad2 from "../../assets/Frame 895.png";
import gamepad3 from "../../assets/Frame 896.png";
import gamepad4 from "../../assets/Frame 897.png";

export const ProductDetailsSection: React.FC = () => {
  const images = [gamepad1, gamepad2, gamepad3, gamepad4];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section
      className="
        w-full max-w-[1170px] mx-auto 
        flex flex-col lg:flex-row 
        gap-6 sm:gap-8 lg:gap-[50px] 
        mt-10 sm:mt-12 lg:mt-[60px] 
        mb-12 sm:mb-16 lg:mb-[80px]
        px-4 sm:px-6 lg:px-0
      "
    >
      {/* LEFT SIDE - Images */}
      <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-[16px] items-center lg:items-start">
        {/* Thumbnails */}
        <div
          className="
            flex flex-row lg:flex-col 
            gap-3 sm:gap-4 lg:gap-[39px] 
            justify-center lg:justify-start 
            overflow-x-auto lg:overflow-visible
            w-full lg:w-auto
            scrollbar-hide
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setMainImage(img)}
              className={`cursor-pointer rounded-[4px] border-2 overflow-hidden flex-shrink-0
                w-[80px] sm:w-[100px] md:w-[130px] lg:w-[170px]
                h-[70px] sm:h-[90px] md:h-[110px] lg:h-[140px]
                transition-all duration-200 
                ${
                  mainImage === img
                    ? "border-[#DB4444]"
                    : "border-gray-200 hover:border-[#DB4444]/50"
                }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-contain bg-[#F5F5F5]"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div
          className="
            w-full max-w-[500px] sm:max-w-[550px] lg:w-[600px] 
            h-auto lg:h-[680px] aspect-square 
            bg-[#F5F5F5] rounded-[4px] 
            flex items-center justify-center overflow-hidden
          "
        >
          <img
            src={mainImage}
            alt="Main Product"
            className="w-[90%] h-auto object-contain"
          />
        </div>
      </div>

      {/* RIGHT SIDE - Product Info */}
      <div
        className="
          flex flex-col justify-between 
          w-full lg:max-w-[400px] 
          h-auto lg:h-[600px] 
          mt-6 lg:mt-0
        "
      >
        {/* Product Info Section */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[12px] flex-1">
          <ProductTitle />
          <ProductRating />
          <ProductPrice />
          <ProductDescription />
          <div className="w-full h-[1px] bg-[#000000]/50 my-[8px]" />
          <ProductColorSelector />
          <ProductSizeSelector />

          {/* Quantity + Add to Cart Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-start sm:justify-between gap-4 sm:gap-[12px]">
            <ProductQuantitySelector />
            <AddToCartSection />
          </div>
        </div>

        {/* Delivery Section */}
        <div className="mt-6 lg:mt-auto flex justify-start">
          <DeliveryReturnSection />
        </div>
      </div>
    </section>
  );
};
