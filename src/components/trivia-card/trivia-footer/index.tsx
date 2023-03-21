import { View, Text } from "react-native";
import React, { useEffect, useCallback } from "react";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";
import { useCountdown } from "../useCountdown";

import { DEFAULT_COUNTDOWN } from "../constants";
import styles from "./styles";

const TriviaFooter = () => {
  const { translate } = useTranslate();
  const { setIsCountdownOver, message, selectedAnswer } = useTriviaContext();
  const { countdown, setCountdown, resetCountdown } = useCountdown({
    startCountAt: DEFAULT_COUNTDOWN,
  });

  const handleTimeIsUp = useCallback(() => {
    setIsCountdownOver(true);
    setTimeout(() => {
      setCountdown(DEFAULT_COUNTDOWN);
      setIsCountdownOver(false);
    }, 4500);
  }, []);

  useEffect(() => {
    if (selectedAnswer) {
      resetCountdown();
      setCountdown(0);
      handleTimeIsUp();
    }
  }, [selectedAnswer]);

  useEffect(() => {
    if (countdown === "0") {
      handleTimeIsUp();
    }
  }, [countdown]);

  return (
    <View>
      <Text style={styles.timer}>
        {message ??
          (countdown === "0"
            ? translate("timeIsUp")
            : `${translate("timeLeft")}: ${countdown}s`)}
      </Text>
    </View>
  );
};

export default TriviaFooter;
