import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import it from "./locales/it.json";

const stored = window.localStorage.getItem("lang");
const initial =
    stored === "en" || stored === "it"
        ? stored
        : navigator.language.toLowerCase().startsWith("it")
            ? "it"
            : "en";

i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, it: { translation: it } },
    lng: initial,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

document.documentElement.lang = initial;
i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    window.localStorage.setItem("lang", lng);
});

export default i18n;