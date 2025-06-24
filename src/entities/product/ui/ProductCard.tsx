import { memo } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../model/ProductTypes';
import { Button } from '@/shared/ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-52 object-contain bg-slate-50 p-4"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
        <p className="text-sm text-slate-500 mt-2 line-clamp-4">{product.description}</p>
        <Button variant="outline" to={`/products/${product.id}`} className="mt-4 w-full">
          Подробнее
        </Button>
      </div>
    </motion.div>
  );
});
