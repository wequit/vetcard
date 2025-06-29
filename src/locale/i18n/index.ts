import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './ru.json';
import kg from './kg.json'; // у тебя файл называется kg.json, а не ky.json

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    kg: { translation: kg },
  },
  lng: 'ru', // язык по умолчанию
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

// Функция для переключения языка
export const changeLanguage = (language: 'ru' | 'kg') => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
};

// Функция для получения текущего языка
export const getCurrentLanguage = () => {
  return i18n.language;
};

// Инициализация языка из localStorage при загрузке
const savedLanguage = localStorage.getItem('language') as 'ru' | 'kg';
if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'kg')) {
  i18n.changeLanguage(savedLanguage);
}

export default i18n;
