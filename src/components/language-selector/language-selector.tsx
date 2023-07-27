import React, { useEffect, useState } from "react";
import { Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import ModalLanguageSelector from "./modal-language-selector";

import useAsyncStorage from "hooks/useAsyncStorage";
import { useTranslateContext } from "context/i18n";
import useTranslation from "hooks/useTranslation";
import languagesData from "./language-data";
import styles from "./styles";

const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { languageCode } = useTranslateContext();
  const { translate } = useTranslation();
  const [storageValue] = useAsyncStorage("@language");

  useEffect(() => {
    const language =
      languagesData.find((language) => language.code === languageCode) ??
      languagesData[0]; // default to English

    setSelectedLanguage(language.name);
  }, []);

  useEffect(() => {
    const language =
      languagesData.find((language) => language.code === storageValue?.code) ??
      languagesData[0]; // default to English

    setSelectedLanguage(language.name);
  }, [storageValue]);

  return (
    <>
      <Pressable
        style={styles.selectButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <FontAwesome name="language" size={20} color="#ffffff" />
        <Text style={styles.selectButtonText}>{translate("language")}</Text>
      </Pressable>
      <ModalLanguageSelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </>
  );
};

export default LanguageSelector;
