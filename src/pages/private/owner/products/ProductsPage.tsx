import { useState } from 'react';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { mockProducts } from '@/entities/product/model/ProductMock';
import { ProductList } from '@/entities/product/ui/ProductList';
import { ProductModal } from '@/entities/product/ui/ProductModal';
import type { Product } from '@/entities/product/model/ProductTypes';

export const ProductsPage = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-slate-900">
                    <FaShoppingBag className="text-teal-500" />
                    {t('products.title')}
                </div>

                <div className="relative w-full md:w-1/3">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        placeholder={t('products.searchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
            </div>

            <p className="text-slate-600">
                {t('products.subtitle')}
            </p>

            <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};
