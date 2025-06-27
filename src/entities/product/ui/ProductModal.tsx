import { Product } from '../model/ProductTypes';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-2xl shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col"
                >
                    <header className="p-4 sm:p-6 flex justify-between items-start border-b sticky top-0 bg-white rounded-t-2xl z-10">
                         <h2 className="text-xl sm:text-2xl font-bold text-slate-800 pr-8">{product.name}</h2>
                         <button
                            onClick={onClose}
                            className="text-slate-500 hover:text-slate-800 flex-shrink-0"
                            aria-label="Закрыть"
                        >
                            <FaTimes size={20} />
                        </button>
                    </header>
                    
                    <div className="p-4 sm:p-6 overflow-y-auto">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 sm:h-64 object-contain bg-slate-50 rounded-lg mb-4"
                        />
                        <p className="text-slate-700 mb-6">{product.description}</p>
                    
                        {product.provider && (
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h3 className="font-semibold text-slate-800 mb-3">Поставщик:</h3>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Название:</strong> {product.provider.name}</p>
                                    <p><strong>Тип:</strong> {product.provider.type}</p>
                                    {product.provider.city && <p><strong>Город:</strong> {product.provider.city}</p>}
                                    {product.provider.address && <p><strong>Адрес:</strong> {product.provider.address}</p>}
                                    {product.provider.phone && <p><strong>Телефон:</strong> {product.provider.phone}</p>}
                                    {product.provider.link && <p><strong>Сайт:</strong> <a href={product.provider.link} className="text-teal-600 underline break-all">{product.provider.link}</a></p>}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};