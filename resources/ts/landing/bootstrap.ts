import axios from "axios";
import i18n from "i18next";
import FetchBackend from "i18next-fetch-backend";
import { initReactI18next } from "react-i18next";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const language =
    localStorage.getItem("language") ||
    (navigator.language.startsWith("zh") ? "zh" : "en");

axios.defaults.headers.common["X-Language"] = language;

i18n.use(FetchBackend)
    .use(initReactI18next)
    .init({
        ns: ["common", "landing-home"],
        lng: language,
        supportedLngs: ["en", "zh"],
        interpolation: {
            escapeValue: false,
        },
        backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    });

(window as any).i18n = i18n;
