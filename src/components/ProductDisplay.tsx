import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

type ProductDisplayProps = {
  title: string;
  products: Product[];
};

export default function ProductDisplay({ title, products }: ProductDisplayProps) {
  return (
    <div className="w-full mb-6 px-2 sm:px-0">
      <div className="flex flex-col rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-sm md:text-base font-medium text-black">{title}</h2>
        </div>
        
        <div className="flex overflow-x-auto md:overflow-hidden space-x-3 md:space-x-6">
          {products.map(product => (
          <div key={product.id} className="md:hover:scale-105 transition-transform duration-200">
            <ProductCard key={product.id} product={product} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
