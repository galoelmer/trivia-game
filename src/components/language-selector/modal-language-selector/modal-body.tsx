import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTranslate, TranslationKeys } from "context/i18n";
import styles from "../styles";
import languagesData from "../language-data";

interface ModalBodyProps {
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
}

const ModalBody = ({
  selectedLanguage,
  setSelectedLanguage,
}: ModalBodyProps) => {
  const { translate } = useTranslate();

  return (
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
                selectedLanguage === item.name && styles.itemTextSelected,
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
  );
};

export default ModalBody;
