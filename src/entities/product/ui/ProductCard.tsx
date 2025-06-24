import { memo } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../model/ProductTypes';
import { Button } from '@/shared/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(({ product }: ProductCardProps) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border-l-8 border-teal-500 transition duration-300 flex flex-col"
      whileHover={{ y: -4, scale: 1.015 }}
    >
      {/* Градиентный бордер снизу при наведении */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-0 hover:ring-4 ring-teal-300 transition duration-300"></div>

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-52 object-contain bg-slate-50 p-5"
      />

      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>

        <p className="text-sm text-slate-500 line-clamp-4 mb-4">{product.description}</p>

        <Button
          variant="outline"
          to={`/products/${product.id}`}
          className="w-full flex items-center justify-center gap-2 text-teal-600 border-teal-500 hover:bg-teal-50 hover:shadow-sm transition"
        >
          Подробнее
          <FaArrowRight className="text-sm" />
        </Button>
      </div>
    </motion.div>
  );
});
