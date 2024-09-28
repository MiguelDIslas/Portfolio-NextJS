import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageEnum } from "@Enum/LanguageEnum";

import en from "./translations/en.json";
import es from "./translations/es.json";

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: "v3",
  lng: LanguageEnum.EN,
  fallbackLng: LanguageEnum.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
