import React from 'react';
import type { Product } from '../model/ProductTypes';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md bg-white p-4 flex flex-col items-center max-w-xs">
      <img
        src={product.img_url}
        alt={product.name_ru}
        className="w-32 h-32 object-cover rounded mb-3 border"
      />
      <h2 className="text-lg font-bold mb-1 text-center">{product.name_ru}</h2>
      <p className="text-slate-600 text-sm mb-2 text-center">{product.description}</p>
      <div className="text-xs text-slate-400">Пользователь: {product.user}</div>
    </div>
  );
};
