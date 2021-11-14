import axios from "axios";
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

const language =
    localStorage.getItem("language") ||
    (navigator.language.startsWith("zh") ? "zh" : "en");

axios.defaults.headers.common["X-Language"] = language;

i18n.use(initReactI18next).init({
    resources,
    lng: language,
    supportedLngs: ["en", "zh"],
    interpolation: {
        escapeValue: false,
    },
});

(window as any).i18n = i18n;
