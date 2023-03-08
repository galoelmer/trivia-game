import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";

import LoaderAnimation from "components/loader-animation";
import AnswerItem from "./answer-item";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";
import { useCountdown } from "./useCountdown";

import { DEFAULT_COUNTDOWN } from "./constants";
import { getTriviaData } from "services/api";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    ...(Platform.OS === "web" && { minWidth: "375px", maxWidth: "650px" }),
    maxHeight: 480,
    width: "90%",
    marginHorizontal: 30,
  },
  questionText: {
    textAlign: "center",
    backgroundColor: "whitesmoke",
    fontWeight: "bold",
    fontSize: Platform.OS === "web" ? 28 : 22,
    letterSpacing: 1,
    lineHeight: 30,
    padding: 10,
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
  },
  answerImage: {
    flex: 1,
  },
  answersList: {
    flex: Platform.OS === "web" ? 2 : 1,
    flexDirection: "column",
  },
  answerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  timer: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 1,
    padding: 15,
    backgroundColor: "teal",
  },
});
