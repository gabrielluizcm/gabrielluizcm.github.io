import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationPt from './locales/pt.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translationEn,
    },
    pt: {
      translation: translationPt,
    },
  }
});

export default i18n;
