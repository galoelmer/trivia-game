import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { en, es } from "./supportedLanguages";

const supportedLanguages = Object.assign({}, en, es);
export type TranslationKeys = keyof typeof supportedLanguages;
export type LanguageCodeType = "en" | "es";
export type localeType = "en-US" | "es-US";

interface ITranslateContext {
  translate: (key: TranslationKeys) => string;
  languageCode: LanguageCodeType;
  setLanguageCode: (languageCode: LanguageCodeType) => void;
  locale: localeType;
  setLocale: (locale: localeType) => void;
}

export const TranslateContext = createContext<ITranslateContext>({
  translate: (key: string) => key,
  languageCode: "en",
  setLanguageCode: () => {},
  locale: "en-US",
  setLocale: () => {},
});

export const useTranslate = () => useContext(TranslateContext);

export const TranslateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [languageCode, setLanguageCode] = useState<LanguageCodeType>("en");
  const [locale, setLocale] = useState<localeType>("en-US");

  const i18n = new I18n({ en, es });
  i18n.locale = languageCode;
  i18n.enableFallback = true;

  const translate = (key: TranslationKeys) => i18n.t(key);

  const value = useMemo(
    () => ({ languageCode, setLanguageCode, locale, setLocale, translate }),
    [languageCode, setLanguageCode, locale, setLocale, translate]
  );

  useEffect(() => {
    const code = Localization.getLocales()[0].languageCode as LanguageCodeType;
    setLanguageCode(code);
  }, []);

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  );
};
