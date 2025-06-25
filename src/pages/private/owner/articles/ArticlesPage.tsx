
import { useState, useMemo } from 'react'; 
import { FaNewspaper } from 'react-icons/fa';
import { mockArticles } from '@/entities/article/model/mock';
import { ArticleCard } from '@/entities/article/ui/ArticleCard';
import { SearchArticles } from '@/features/search-articles/ui/SearchArticles';

const categories = ['Все', 'Питание', 'Уход', 'Здоровье', 'Поведение'];

export const ArticlesPage = () => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = useMemo(() => {
        let articles = mockArticles;

        if (activeCategory !== 'Все') {
            articles = articles.filter(article => article.category === activeCategory);
        }

        if (searchQuery.trim() !== '') {
            articles = articles.filter(article => 
                article.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return articles;
    }, [activeCategory, searchQuery]);

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                        <FaNewspaper className="text-teal-500" />
                        База знаний
                    </h1>
                    <p className="mt-2 text-slate-600">Полезные статьи и советы по уходу за вашими питомцами.</p>
                </div>
                <SearchArticles value={searchQuery} onChange={setSearchQuery} />
            </header>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                            activeCategory === category 
                                ? 'bg-teal-500 text-white shadow' 
                                : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-slate-700">Статьи не найдены</h3>
                    <p className="text-slate-500 mt-2">Попробуйте изменить запрос или выбрать другую категорию.</p>
                </div>
            )}
        </div>
    );
};