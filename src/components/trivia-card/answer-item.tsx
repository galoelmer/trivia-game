import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { DEFAULT_COUNTDOWN } from "./trivia-card";

interface FontAwesomeIconProps {
  name?: "check" | "close";
  color?: "#ddd" | "red";
}

interface props {
  answer: string;
  correctAnswer: string;
  isTimeOut: boolean;
  resetCountdown: () => void;
  setSelectAnswer: React.Dispatch<React.SetStateAction<string | null>>;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setIndexQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
}

const AnswerItem: React.FC<props> = ({
  answer,
  correctAnswer,
  isTimeOut,
  resetCountdown,
  setSelectAnswer,
  setMessage,
  setIndexQuestion,
  setCountdown,
}) => {
  const isCorrectAnswer = answer === correctAnswer;
  const [textStyle, setTextStyle] = useState({});
  const [iconProps, setIconProps] = useState<FontAwesomeIconProps>({});

  const setNextQuestion = () => {
    setTimeout(() => {
      setCountdown(DEFAULT_COUNTDOWN);
      setIndexQuestion((index) => ++index);
      setMessage(null);
      setIconProps({});
      setSelectAnswer(null);
    }, 4500);
  };

  const handleOnPress = () => {
    if (isTimeOut) return;
    resetCountdown();
    setNextQuestion();
    setSelectAnswer(answer);
    setMessage(isCorrectAnswer ? "Correct Answer!" : "Wrong Answer!");
    setIconProps({
      name: isCorrectAnswer ? "check" : "close",
      ...(!isCorrectAnswer && { color: "red" }),
    });
  };

  useEffect(() => {
    if (isTimeOut) {
      setTextStyle(isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer);
      isCorrectAnswer && setIconProps({ name: "check" });
    }
  }, [isTimeOut]);

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={isTimeOut ? "#fff" : "rgba(27, 145, 192, 0.9)"}
      style={styles.highlight}
      onPress={handleOnPress}
    >
      <Text style={[styles.answerText, textStyle]}>
        {answer} {isTimeOut && <FontAwesome size={24} {...iconProps} />}
      </Text>
    </TouchableHighlight>
  );
};

export default AnswerItem;

const styles = StyleSheet.create({
  highlight: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  answerText: {
    fontSize: 24,
    letterSpacing: 1,
  },
  correctAnswer: {
    color: "green",
  },
  wrongAnswer: {
    color: "#ddd",
  },
});
