import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTranslate, LanguageCodeType, TranslationKeys } from "context/i18n";
import styles from "./styles";

const languagesData = [
  { id: "1", name: "English", code: "en", locale: "en-US" },
  { id: "2", name: "Spanish", code: "es", locale: "es-US" },
];

// TODO: REFACTOR THIS COMPONENT
const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { languageCode, setLanguageCode, locale, setLocale, translate } =
    useTranslate();

  useEffect(() => {
    const language = languagesData.find(
      (language) => language.code === languageCode
    )?.name as string;

    setSelectedLanguage(language);
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{ backgroundColor: "red" }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>
                  {translate("selectLanguage")}
                </Text>
              </View>
              <FlatList
                data={languagesData}
                renderItem={({ item }) => (
                  <View style={styles.itemsWrapper}>
                    <TouchableOpacity
                      onPress={() => {
                        setSelectedLanguage(item.name);
                      }}
                      style={[
                        styles.items,
                        selectedLanguage === item.name && styles.itemsSelected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          selectedLanguage === item.name &&
                            styles.itemTextSelected,
                        ]}
                      >
                        {translate(item.name.toLowerCase() as TranslationKeys)}
                      </Text>
                      {selectedLanguage === item.name && (
                        <FontAwesome
                          style={styles.textIcon}
                          name="check-circle"
                          size={24}
                          color="#fff"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
              <Pressable
                onPress={() => {
                  const language = languagesData.find(
                    (language) => language.name === selectedLanguage
                  );
                  // TODO: FIX THIS typescript error
                  setLanguageCode(language.code);
                  setLocale(language.locale);
                  setModalVisible(!modalVisible);
                }}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>
                  {translate("accept")}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default LanguageSelector;
