import { Text, View, TouchableHighlight } from "react-native";
import React, { useCallback } from "react";

import { useTriviaContext } from "context/trivia";
import useTranslation from "hooks/useTranslation";

import styles from "./styles";

const Button: React.FC = () => {
  const { displayTrivia, setDisplayTrivia } = useTriviaContext();
  const { translate } = useTranslation();

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
