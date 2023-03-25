import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { TranslationKeys, LanguageCodeType } from "context/i18n";

export default () => {
  const { t } = useTranslation();

  const translate = useCallback(
    (key: TranslationKeys<LanguageCodeType>, options = {}) => t(key, options),
    []
  );

  return { translate };
};
