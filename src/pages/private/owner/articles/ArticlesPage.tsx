
import { FaNewspaper } from 'react-icons/fa';

export const ArticlesPage = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaNewspaper className="text-teal-500" />
                    База знаний
                </h1>
                <p className="mt-2 text-slate-600">Полезные статьи и советы по уходу за вашими питомцами.</p>
            </header>

            <div className="p-8 bg-white rounded-xl shadow-md text-center text-slate-500">
                <p>Содержимое страницы статей в разработке...</p>
                {/* TODO: Здесь будет фича <SearchArticles /> и сущность <ArticlesList /> */}
            </div>
        </div>
    );
};