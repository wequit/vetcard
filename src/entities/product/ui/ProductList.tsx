import type { Product } from "../model/ProductTypes";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};