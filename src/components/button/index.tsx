import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useCallback } from "react";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";

const Button: React.FC = () => {
  const { displayTrivia, setDisplayTrivia } = useTriviaContext();
  const { translate } = useTranslate();

  const handleOnPress = useCallback(() => {
    setDisplayTrivia(!displayTrivia);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttonHighlight}
        onPress={handleOnPress}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{translate("startTrivia")}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
  },
  buttonHighlight: {
    borderRadius: 50,
    marginHorizontal: 10,
    maxWidth: 425,
    minWidth: 320,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(36, 188, 248, 0.9)",
    borderWidth: 8,
    borderColor: "rgb(255, 255, 255)",
    borderRadius: 50,
    padding: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});
