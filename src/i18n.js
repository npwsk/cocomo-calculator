import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru';

i18n.use(initReactI18next).init({
  resources: {
    ru,
  },
  lng: 'ru',
  fallbackLng: 'ru',
});

export default i18n;
