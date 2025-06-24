
import { FaShoppingBag } from 'react-icons/fa';

export const ProductsPage = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaShoppingBag className="text-teal-500" />
                    Товары и Услуги
                </h1>
                <p className="mt-2 text-slate-600">Рекомендованные товары и услуги от наших партнеров.</p>
            </header>

            <div className="p-8 bg-white rounded-xl shadow-md text-center text-slate-500">
                <p>Содержимое страницы товаров в разработке...</p>
                {/* TODO: Здесь будет фича <FilterProducts /> и сущность <ProductsList /> */}
            </div>
        </div>
    );
};