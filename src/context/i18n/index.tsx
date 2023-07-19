import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import translations from "./translations";
import useAsyncStorage from "hooks/useAsyncStorage";

export type LanguageCodeType = keyof typeof translations;
export type TranslationKeys<Key extends LanguageCodeType> =
  keyof (typeof translations)[Key]["translation"];
export type localeType = "en-US" | "es-US";

interface ITranslateContext {
  languageCode: LanguageCodeType;
  setLanguageCode: (languageCode: LanguageCodeType) => void;
  locale: localeType;
  setLocale: (locale: localeType) => void;
  isI18Initialized?: boolean;
}

export const TranslateContext = createContext<ITranslateContext>({
  languageCode: "en",
  setLanguageCode: () => {},
  locale: "en-US",
  setLocale: () => {},
  isI18Initialized: undefined,
});

export const useTranslateContext = () => useContext(TranslateContext);

export const TranslateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [languageCode, setLanguageCode] = useState<LanguageCodeType>("en");
  const [locale, setLocale] = useState<localeType>("en-US");
  const [storageValue, setStorageValue] = useAsyncStorage("@language");

  const i18Init = React.useCallback(() => {
    i18n.use(initReactI18next).init({
      resources: translations,
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      // debug: true,
      compatibilityJSON: "v3",
    });
  }, []);

  const isI18Initialized = useMemo(
    () => i18n.isInitialized,
    [i18n.isInitialized]
  );

  const value = useMemo(
    () => ({
      languageCode,
      setLanguageCode,
      locale,
      setLocale,
      isI18Initialized,
    }),
    [languageCode, setLanguageCode, locale, setLocale, isI18Initialized]
  );

  useEffect(() => {
    const { languageCode } = getLocales()[0];
    setLanguageCode(storageValue?.code ?? languageCode);
    if (!i18n.isInitialized) {
      i18Init();
    }
  }, []);

  useEffect(() => {
    setStorageValue({ code: languageCode, locale });
    i18n.changeLanguage(languageCode);
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
