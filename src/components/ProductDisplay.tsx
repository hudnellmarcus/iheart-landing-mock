import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

type ProductDisplayProps = {
  title: string;
  products: Product[];
};

export default function ProductDisplay({ title, products }: ProductDisplayProps) {
  return (
    <div className="w-[70vw] mb-8">
      <div className="rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-sm font-medium text-blue-800">{title}</h2>
        </div>
        
        <div className="flex space-x-10">
          {products.map(product => (
          <div key={product.id} className="hover:scale-105 transition-transform duration-200">
            <ProductCard key={product.id} product={product} />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
