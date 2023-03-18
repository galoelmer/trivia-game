import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
// TODO: use a different library for localization i18next or react-intl
// https://github.com/i18next/react-i18next

import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import translations from "./translations";
import useAsyncStorage from "hooks/useAsyncStorage";

export type LanguageCodeType = keyof typeof translations;
export type TranslationKeys<Key extends LanguageCodeType> =
  keyof typeof translations[Key];
export type localeType = "en-US" | "es-US";

interface ITranslateContext {
  translate: (key: TranslationKeys<LanguageCodeType>) => string;
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
  const [storageValue, setStorageValue] = useAsyncStorage("@language");

  const i18n = new I18n(translations);
  i18n.locale = languageCode;
  i18n.enableFallback = true;

  const translate = (key: TranslationKeys<LanguageCodeType>) => i18n.t(key);

  const value = useMemo(
    () => ({ languageCode, setLanguageCode, locale, setLocale, translate }),
    [languageCode, setLanguageCode, locale, setLocale, translate]
  );

  useEffect(() => {
    const { languageCode } = getLocales()[0];
    setLanguageCode(storageValue?.code ?? languageCode);
  }, []);

  useEffect(() => {
    setStorageValue({ code: languageCode, locale });
  }, [languageCode, locale]);

  useEffect(() => {
    setLanguageCode(storageValue?.code ?? "en");
    setLocale(storageValue?.locale ?? "en-US");
  }, [storageValue]);

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  );
};
