import { Heart, Eye } from "lucide-react";
import { useState } from "react";

import gamepadImg from "../../assets/Gamepad.png";
import keyboardImg from "../../assets/Keyboard.png";
import monitorImg from "../../assets/Monitor.png";
import coolerImg from "../../assets/Cpu.png";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: string;
}

const products: Product[] = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", image: gamepadImg, discount: "-40%" },
  { id: 2, name: "AK-900 Wired Keyboard", image: keyboardImg, discount: "-35%" },
  { id: 3, name: "IPS LCD Gaming Monitor", image: monitorImg, discount: "-30%" },
  { id: 4, name: "RGB Liquid CPU Cooler", image: coolerImg, discount: "-30%" },
];

export default function RelatedItems() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full max-w-[1170px] mx-auto mt-16 px-4">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-6 bg-[#DB4444] rounded-sm" />
        <h2 className="text-[#DB4444] font-semibold text-xl">Related Items</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const isWishlisted = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="relative group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col items-center"
            >
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </span>

              {/* Wishlist & View Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isWishlisted
                      ? "bg-[#DB4444] border-[#DB4444] text-white"
                      : "bg-white border-gray-300 text-black hover:bg-gray-100"
                  }`}
                >
                  <Heart size={18} fill={isWishlisted ? "white" : "none"} />
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border bg-white border-gray-300 hover:bg-gray-100 transition-all">
                  <Eye size={18} />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mt-6 mb-3"
              />

              {/* Product Name */}
              <h3 className="text-sm text-gray-900 text-center font-medium">
                {product.name}
              </h3>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white rounded mt-4 py-2 opacity-0 group-hover:opacity-100 transition-all">
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
