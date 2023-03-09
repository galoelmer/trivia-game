import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { useTranslate } from "context/i18n";

import styles from "./styles";

enum Style {
  text1 = 1,
  text2,
  text3,
}

type ITextStyleIndex = { textStyleIndex: number };

const TextWithShadow = ({ textStyleIndex }: ITextStyleIndex) => {
  const { translate } = useTranslate();

  const shadowStyle = {
    [`${Style.text1}`]: styles.text1,
    [`${Style.text2}`]: styles.text2,
    [`${Style.text3}`]: styles.text3,
  };

  return (
    <Text style={[styles.text, shadowStyle[textStyleIndex + 1]]}>
      {translate("generalKnowledgeTrivia")}
    </Text>
  );
};

const Header: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        {Array(3)
          .fill(true)
          .map((_, i) => (
            <TextWithShadow key={`text-${i}`} textStyleIndex={i} />
          ))}
      </View>
    </SafeAreaView>
  );
};

export default Header;
