import React, { useEffect, useState, useRef, memo } from "react";
import { Text, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";

import { generateHash } from "utils/generateHash";
import { DEFAULT_COUNTDOWN } from "../constants";

import styles from "./styles";

interface FontAwesomeIconProps {
  name?: "check" | "close";
  color?: "#ddd" | "red";
}

interface props {
  answer: string;
  correctAnswer: string;
  isTimeOut: boolean;
  resetCountdown: () => void;
  setMessage: (text: string | null) => void;
  setCountdown: (countdown: number) => void;
}

const AnswerItem: React.FC<props> = ({
  answer,
  correctAnswer,
  isTimeOut,
  resetCountdown,
  setMessage,
  setCountdown,
}) => {
  const [textStyle, setTextStyle] = useState({});
  const [iconProps, setIconProps] = useState<FontAwesomeIconProps>({});
  const [loading, setLoading] = useState(true);

  const answerHashRef = useRef<string | null>(null);
  const isCorrectAnswer = correctAnswer === answerHashRef.current;

  const { setSelectedAnswer, setIndexQuestion, indexQuestion, questions } =
    useTriviaContext();
  const { translate } = useTranslate();

  const setNextQuestion = () => {
    setTimeout(() => {
      setMessage(null);
      setIconProps({});
      setSelectedAnswer(null);
      if (indexQuestion !== questions.length - 1) {
        setCountdown(DEFAULT_COUNTDOWN);
        setIndexQuestion(indexQuestion + 1);
      }
    }, 4500);
  };

  const handleOnPress = () => {
    if (isTimeOut) return;
    resetCountdown();
    setNextQuestion();
    setSelectedAnswer(answerHashRef.current);
    setMessage(
      isCorrectAnswer ? translate("correctAnswer") : translate("wrongAnswer")
    );
    setIconProps({
      name: isCorrectAnswer ? "check" : "close",
      ...(!isCorrectAnswer && { color: "red" }),
    });
  };

  useEffect(() => {
    (async () => {
      answerHashRef.current = await generateHash(answer);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (isTimeOut) {
      setTextStyle(isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer);
      isCorrectAnswer && setIconProps({ name: "check" });
    }
  }, [isTimeOut]);

  if (loading) {
    return null;
  }

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

export default memo(AnswerItem);
