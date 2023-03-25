import { Text, Pressable } from "react-native";
import React from "react";

import { useTranslateContext } from "context/i18n";
import useTranslation from "hooks/useTranslation";
import styles from "../styles";
import languagesData from "../language-data";

interface ModalActionButtonProps {
  selectedLanguage: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalActionButton = ({
  selectedLanguage,
  setModalVisible,
}: ModalActionButtonProps) => {
  const { setLanguageCode, setLocale } = useTranslateContext();
  const { translate } = useTranslation();

  const handleOnPress = () => {
    const language =
      languagesData.find((language) => language.name === selectedLanguage) ??
      languagesData[0]; // default to English

    setLanguageCode(language.code);
    setLocale(language.locale);
    setModalVisible((prev: boolean) => !prev);
  };

  return (
    <Pressable onPress={handleOnPress} style={styles.modalButton}>
      <Text style={styles.modalButtonText}>{translate("accept")}</Text>
    </Pressable>
  );
};

export default ModalActionButton;
