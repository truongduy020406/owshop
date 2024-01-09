import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from './locales/vi.json';
import en from './locales/en.json';
import jp from './locales/jp.json';
import kr from './locales/kr.json';

const defaultLanguage = 'vi';

export const defaultNamespace = 'default';

export const resources = {
  vi: {
    [defaultNamespace]: vi,
  },
  en: {
    [defaultNamespace]: en,
  },
  jp: {
    [defaultNamespace]: jp,
  },
  kr: {
    [defaultNamespace]: kr,
  },
};

i18n.use(initReactI18next).init({
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});
