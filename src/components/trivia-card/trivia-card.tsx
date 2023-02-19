import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";

import { getTriviaData } from "../../api";
import LoaderAnimation from "../loader-animation";
import AnswerItem from "./answer-item";

import { useCountdown } from "./useCountdown";

interface props {
  setDisplayTrivia: React.Dispatch<React.SetStateAction<boolean>>;
}

const TriviaCard: React.FC<props> = ({ setDisplayTrivia }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const { countdown, setCountdown, resetCountdown } = useCountdown({
    startCountAt: 1255,
  });

  const { data, loading } = getTriviaData();
  const isIntervalTimeOut = countdown === "0";

  useEffect(() => {
    if (isIntervalTimeOut && selectedAnswer === null) {
      resetCountdown();
      setTimeout(() => {
        setCountdown(5);
        setIndexQuestion((index) => ++index);
        setMessage(null);
      }, 4500);
    }
  }, [countdown]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (indexQuestion === data.length) {
    resetCountdown();
    setMessage(null);
    setIndexQuestion(0);
    setDisplayTrivia(false);
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{data[indexQuestion].question}</Text>
      <View style={styles.answersContainer}>
        {isIntervalTimeOut && (
          <Image
            source={{ uri: data[indexQuestion].image.url }}
            resizeMode="cover"
            style={styles.answerImage}
          />
        )}
        <View style={styles.answersList}>
          {data[indexQuestion].answersList.map((answer) => (
            <View key={answer} style={styles.answerItem}>
              <AnswerItem
                answer={answer}
                correctAnswer={data[indexQuestion].correctAnswer}
                isTimeOut={isIntervalTimeOut}
                resetCountdown={resetCountdown}
                setSelectAnswer={setSelectedAnswer}
                setMessage={setMessage}
                setIndexQuestion={setIndexQuestion}
                setCountdown={setCountdown}
              />
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.timer}>
        {message ??
          (countdown === "0" ? "Time Out!" : `Time Left: ${countdown}`)}
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
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 25,
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
