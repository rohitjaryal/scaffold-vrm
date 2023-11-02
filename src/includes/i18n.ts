import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import common_en from "@/translations/en/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ["common"],
    resources: {
      en: {
        // common: common_en,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
