import { Product } from '../model/ProductTypes';
import { FaTimes } from 'react-icons/fa';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <FaTimes size={20} />
            </button>
      
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{product.name}</h2>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-contain bg-slate-50 mb-4"
            />
            <p className="text-slate-700 mb-4">{product.description}</p>
      
            {product.provider && (
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-700 mb-2">Поставщик:</h3>
                <p><strong>Название:</strong> {product.provider.name}</p>
                <p><strong>Тип:</strong> {product.provider.type}</p>
                {product.provider.city && <p><strong>Город:</strong> {product.provider.city}</p>}
                {product.provider.address && <p><strong>Адрес:</strong> {product.provider.address}</p>}
                {product.provider.phone && <p><strong>Телефон:</strong> {product.provider.phone}</p>}
                {product.provider.link && <p><strong>Сайт:</strong> <a href={product.provider.link} className="text-teal-600 underline">{product.provider.link}</a></p>}
              </div>
            )}
          </div>
        </div>
      );      
};
