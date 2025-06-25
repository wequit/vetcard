
import { FaSearch } from 'react-icons/fa';

interface SearchArticlesProps {
    value: string;
    onChange: (query: string) => void;
}

export const SearchArticles = ({ value, onChange }: SearchArticlesProps) => {
    return (
        <div className="relative w-full max-w-sm">
            <input 
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Найти статью по названию..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <FaSearch />
            </div>
        </div>
    );
};