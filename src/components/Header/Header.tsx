// TODO: add font family and fix web view text
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useFonts } from "expo-font";
import { Baloo_Regular400 } from "@expo-google-fonts/baloo";

enum Style {
  text1 = 1,
  text2,
  text3,
}

type ITextStyleIndex = { textStyleIndex: number };

const TextWithShadow = ({ textStyleIndex }: ITextStyleIndex) => {
  const shadowStyle = {
    [`${Style.text1}`]: styles.text1,
    [`${Style.text2}`]: styles.text2,
    [`${Style.text3}`]: styles.text3,
  };

  return (
    <Text style={[styles.text, shadowStyle[textStyleIndex + 1]]}>
      General Knowledge Trivia
    </Text>
  );
};

const Header: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Baloo_Regular400,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontFamily: "Baloo_Regular400",
    letterSpacing: 8,
    lineHeight: 46,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "600",
    textShadowColor: "#BABABA",
    textShadowRadius: 1,
    left: 0,
    right: 0,
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
