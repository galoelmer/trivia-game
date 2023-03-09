import { LanguageCodeType, localeType } from "context/i18n";

type LanguageData = {
  id: string;
  name: string;
  code: LanguageCodeType;
  locale: localeType;
};

export default [
  { id: "1", name: "English", code: "en", locale: "en-US" },
  { id: "2", name: "Spanish", code: "es", locale: "es-US" },
] as LanguageData[];
