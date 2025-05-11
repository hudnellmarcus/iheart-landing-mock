import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, imageUrl, price, cashbackPercent } = product;
  return (
    <div className="flex flex-col items-center justify-center w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="relative w-full pt-[100%] bg-gray-100">
        <Image src={imageUrl} alt={name} fill className="object-contain absolute inset-0 p-2" />
      </div>
      <div className="w-full text-center h-20 flex flex-col items-center mt-2">
        <h3 className="text-sm font-medium mb-1">{name}</h3>
        <div className="flex items-center space-x-1 mt-2">
          <span className="font-bold">${price.toFixed(2)}</span>
          {cashbackPercent > 0 && (
            <span className="text-xs text-iheart-red">
              ({cashbackPercent}% CB)
            </span>
          )}
          <button className="px-3 py-1 bg-iheart-red text-white text-xs rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
