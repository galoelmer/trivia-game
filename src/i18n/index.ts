import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { en, es } from './supportedLanguages';

type TranslationKeys = keyof typeof en;
type LanguageCodeType = "en" | "es";

let selectedLanguageCode = Localization.getLocales()[0].languageCode;

const i18n = new I18n({ en, es });
i18n.locale = selectedLanguageCode;
i18n.enableFallback = true;

const t = (key: TranslationKeys) => i18n.t(key);

export { t as translate };

export const selectLanguageCode = (languageCode: LanguageCodeType) => {
    selectedLanguageCode = languageCode;
};



