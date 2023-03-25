import { View, Text } from "react-native";
import React from "react";

import useTranslation from "hooks/useTranslation";
import styles from "../styles";

const ModalHeader = () => {
  const { translate } = useTranslation();

  return (
    <View style={styles.modalHeader}>
      <Text style={styles.modalHeaderText}>{translate("selectLanguage")}</Text>
    </View>
  );
};

export default ModalHeader;
