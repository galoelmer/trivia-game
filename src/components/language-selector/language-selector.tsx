import React, { useEffect, useState } from "react";
import { Text, Pressable } from "react-native";

import ModalLanguageSelector from "./modal-language-selector";

import { useTranslate } from "context/i18n";
import languagesData from "./language-data";
import styles from "./styles";

const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { languageCode, translate } = useTranslate();

  useEffect(() => {
    const language =
      languagesData.find((language) => language.code === languageCode) ??
      languagesData[0]; // default to English

    setSelectedLanguage(language.name);
  }, []);

  return (
    <>
      <Pressable
        style={styles.selectButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.selectButtonText}>
          {translate("selectLanguage")}
        </Text>
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
