import React from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Baloo_Regular400 } from "@expo-google-fonts/baloo";

import Ztext from "react-ztext";

const Header: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Baloo_Regular400,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
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
        General <br /> Knowledge <br />
        Trivia
      </Ztext>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
