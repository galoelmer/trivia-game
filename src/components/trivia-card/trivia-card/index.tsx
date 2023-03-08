import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";

import LoaderAnimation from "components/loader-animation";
import AnswerItem from "../answer-items";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";
import { useCountdown } from "../useCountdown";

import { DEFAULT_COUNTDOWN } from "../constants";
import { getTriviaData } from "services/api";

import styles from "./styles";

const TriviaCard: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const { countdown, setCountdown, resetCountdown } = useCountdown({
    startCountAt: DEFAULT_COUNTDOWN,
  });

  const { translate, locale } = useTranslate();
  const { loading, data: questions } = getTriviaData({ locale });

  const {
    setQuestions,
    setDisplayTrivia,
    selectedAnswer,
    indexQuestion,
    setIndexQuestion,
    setSelectedAnswer,
  } = useTriviaContext();

  const isIntervalTimeOut = countdown === "0";

  useEffect(() => {
    if (!loading && questions.length) {
      setQuestions(questions);
    }
  }, [loading, questions]);

  // Continue to next question if countdown is over
  useEffect(() => {
    if (isIntervalTimeOut && selectedAnswer === null) {
      resetCountdown();
      setSelectedAnswer("No Answer");
      setMessage(null);
      if (indexQuestion !== questions.length - 1) {
        setTimeout(() => {
          setCountdown(DEFAULT_COUNTDOWN);
          setSelectedAnswer(null);
          setIndexQuestion(indexQuestion + 1);
        }, 4500);
      }
    }
  }, [isIntervalTimeOut]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (indexQuestion === questions.length) {
    resetCountdown();
    setMessage(null);
    setIndexQuestion(0);
    setDisplayTrivia(false);
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {questions[indexQuestion]?.question}
      </Text>
      <View style={styles.answersContainer}>
        {isIntervalTimeOut && (
          <Animatable.View style={{ flex: 1 }} animation="slideInLeft">
            <Image
              source={{ uri: questions[indexQuestion]?.image?.url ?? "" }}
              resizeMode="cover"
              style={styles.answerImage}
            />
          </Animatable.View>
        )}
        <Animatable.View
          style={styles.answersList}
          animation={isIntervalTimeOut ? "slideInLeft" : "lightSpeedIn"}
        >
          {questions[indexQuestion]?.answersList?.map((answer) => (
            <View key={answer} style={styles.answerItem}>
              <AnswerItem
                answer={answer ?? ""}
                correctAnswer={questions[indexQuestion]?.correctAnswer ?? ""}
                isTimeOut={isIntervalTimeOut}
                resetCountdown={resetCountdown}
                setMessage={setMessage}
                setCountdown={setCountdown}
              />
            </View>
          ))}
        </Animatable.View>
      </View>
      <Text style={styles.timer}>
        {message ??
          (countdown === "0"
            ? translate("timeIsUp")
            : `${translate("timeLeft")}: ${countdown}s`)}
      </Text>
    </View>
  );
};

export default TriviaCard;
