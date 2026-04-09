import indoLang from '@/locales/id.json';
import engLang from '@/locales/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    id: {
        translation: indoLang
    },
    en: {
        translation: engLang
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "id",
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'lang',
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;