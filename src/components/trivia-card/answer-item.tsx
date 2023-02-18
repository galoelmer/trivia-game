import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

interface FontAwesomeIconProps {
  name?: "check" | "close";
  color?: "#ddd" | "red";
}

interface props {
  answer: string;
  correctAnswer: string;
  isTimeOut: boolean;
  stopCountdown: () => void;
  setSelectAnswer: (answer: string) => void;
  setMessage: (message: string) => void;
}

const AnswerItem: React.FC<props> = ({
  answer,
  correctAnswer,
  isTimeOut,
  stopCountdown,
  setSelectAnswer,
  setMessage,
}) => {
  const isCorrectAnswer = answer === correctAnswer;
  const [textStyle, setTextStyle] = useState({});
  const [iconProps, setIconProps] = useState<FontAwesomeIconProps>({});

  const addTextStyle = () => {
    setTextStyle(isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer);
  };

  const handleOnPress = () => {
    stopCountdown();
    setSelectAnswer(answer);
    setMessage(isCorrectAnswer ? "Correct Answer!" : "Wrong Answer!");
    setIconProps({
      name: isCorrectAnswer ? "check" : "close",
      ...(!isCorrectAnswer && { color: "red" }),
    });
  };

  useEffect(() => {
    if (isTimeOut) {
      addTextStyle();
      isCorrectAnswer && setIconProps({ name: "check" });
    }
  }, [isTimeOut]);

  return (
    <TouchableHighlight onPress={handleOnPress}>
      <Text style={[styles.answerText, textStyle]}>
        {answer} {isTimeOut && <FontAwesome size={24} {...iconProps} />}
      </Text>
    </TouchableHighlight>
  );
};

export default AnswerItem;

const styles = StyleSheet.create({
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
