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

export default i18n;
