import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./locales/en.json"
import vi from "./locales/vi.json"

const resources = {
    en,
    vi
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;