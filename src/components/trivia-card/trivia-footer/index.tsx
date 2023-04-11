import { View, Text } from "react-native";
import React, { useEffect, useCallback } from "react";

import { useTriviaContext } from "context/trivia";
import { useCountdown } from "../useCountdown";
import useTranslation from "hooks/useTranslation";

import { DEFAULT_COUNTDOWN, NEXT_QUESTION_DELAY } from "../constants";
import styles from "./styles";

const TriviaFooter = () => {
  const { translate } = useTranslation();
  const { setIsCountdownOver, message, selectedAnswer } = useTriviaContext();
  const { countdown, setCountdown, resetCountdown } = useCountdown({
    startCountAt: DEFAULT_COUNTDOWN,
  });

  const handleTimeIsUp = useCallback(() => {
    setIsCountdownOver(true);
    setTimeout(() => {
      setCountdown(DEFAULT_COUNTDOWN);
      setIsCountdownOver(false);
    }, NEXT_QUESTION_DELAY);
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
            : translate("timeLeft", { countdown }))}
      </Text>
    </View>
  );
};

export default TriviaFooter;
