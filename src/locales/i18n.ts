import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: en,
      },
    },
  });

export default i18n;
