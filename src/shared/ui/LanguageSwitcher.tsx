import { changeLanguage, getCurrentLanguage } from '@/locale/i18n';

export const LanguageSwitcher = () => {
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (language: 'ru' | 'kg') => {
    changeLanguage(language);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('ru')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLanguage === 'ru'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => handleLanguageChange('kg')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLanguage === 'kg'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        KG
      </button>
    </div>
  );
}; 