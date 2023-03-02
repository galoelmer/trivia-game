import React, { memo } from "react";
import Ztext from "react-ztext";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Baloo_Regular400 } from "@expo-google-fonts/baloo";

import { useTranslate } from "../../context/i18n";

const addNewLineAfterEachWord = (str: string) => {
  return str.split(" ").map((word, index) => (
    <span key={index}>
      {word} <br />
    </span>
  ));
};

const HeaderWithShadow = memo(({ text }: { text: string }) => {
  const headerText = addNewLineAfterEachWord(text);
  return (
    <View style={styles.container} key={text}>
      <Ztext
        depth="0.5rem"
        direction="both"
        event="none"
        eventRotation="0deg"
        eventDirection="default"
        fade={false}
        layers={10}
        perspective="500px"
        style={{
          textAlign: "center",
          color: "#fff",
          fontFamily: "Baloo_Regular400, monospace",
          fontSize: "3.2em",
          letterSpacing: 6,
          lineHeight: 1,
          textTransform: "uppercase",
          marginTop: "2rem",
          textShadow: "0px 5px #BABABA",
        }}
      >
        {headerText}
      </Ztext>
    </View>
  );
});

const Header: React.FC = () => {
  const { translate } = useTranslate();

  let [fontsLoaded] = useFonts({
    Baloo_Regular400,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <HeaderWithShadow text={translate("generalKnowledgeTrivia")} />;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
