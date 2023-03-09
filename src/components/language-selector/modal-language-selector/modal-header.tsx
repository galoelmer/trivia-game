import { View, Text } from "react-native";
import React from "react";

import { useTranslate } from "context/i18n";
import styles from "../styles";

const ModalHeader = () => {
  const { translate } = useTranslate();

  return (
    <View style={styles.modalHeader}>
      <Text style={styles.modalHeaderText}>{translate("selectLanguage")}</Text>
    </View>
  );
};

export default ModalHeader;
