import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useTranslate } from "context/i18n";

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

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: "Baloo-ExtraBold",
    letterSpacing: 8,
    lineHeight: 46,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "#BABABA",
    textShadowRadius: 1,
    left: 0,
    right: 0,
    paddingTop: 20,
  },
  text1: {
    textShadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text2: {
    position: "absolute",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text3: {
    position: "absolute",
    textShadowOffset: {
      width: 0,
      height: 6,
    },
  },
});

export default Header;
