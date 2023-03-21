import React, { useEffect, useState, useRef, memo } from "react";
import { Text, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";

import { generateHash } from "utils/generateHash";

import styles from "./styles";

interface FontAwesomeIconProps {
  name?: "check" | "close";
  color?: "#ddd" | "red";
}

interface props {
  answer: string;
  correctAnswer: string;
}

const AnswerItem: React.FC<props> = ({ answer, correctAnswer }) => {
  const [textStyle, setTextStyle] = useState({});
  const [iconProps, setIconProps] = useState<FontAwesomeIconProps>({});
  const [loading, setLoading] = useState(true);

  const answerHashRef = useRef<string | null>(null);
  const isCorrectAnswer = correctAnswer === answerHashRef.current;

  const {
    setSelectedAnswer,
    setIndexQuestion,
    indexQuestion,
    questions,
    setIsCountdownOver,
    isCountdownOver,
    setMessage,
  } = useTriviaContext();
  const { translate } = useTranslate();

  const setNextQuestion = () => {
    setTimeout(() => {
      setMessage(null);
      setIconProps({});
      setIsCountdownOver(false);
      if (indexQuestion !== questions.length - 1) {
        setSelectedAnswer(null);
        setIndexQuestion(indexQuestion + 1);
      }
    }, 4500);
  };

  const handleOnPress = () => {
    if (isCountdownOver) return;
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
    if (isCountdownOver) {
      setTextStyle(isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer);
      isCorrectAnswer && setIconProps({ name: "check" });
    }
  }, [isCountdownOver]);

  if (loading) {
    return null;
  }

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={isCountdownOver ? "#fff" : "rgba(27, 145, 192, 0.9)"}
      style={styles.highlight}
      onPress={handleOnPress}
    >
      <Text style={[styles.answerText, textStyle]}>
        {answer} {isCountdownOver && <FontAwesome size={24} {...iconProps} />}
      </Text>
    </TouchableHighlight>
  );
};

export default memo(AnswerItem);
