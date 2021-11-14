import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import zh from "../locales/zh.json";

const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: zh,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: navigator.language.startsWith("zh") ? "zh" : "en",
    interpolation: {
        escapeValue: false,
    },
});

(window as any).i18n = i18n;
