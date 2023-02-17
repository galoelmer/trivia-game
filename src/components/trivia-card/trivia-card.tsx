import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";

import { getTriviaData } from "../../api";
import LoaderAnimation from "../loader-animation";

import { useCountdown } from "./useCountdown";

const TriviaCard: React.FC = () => {
  const { data, loading } = getTriviaData();
  const { timeLeft } = useCountdown({ startCountdown: 5 });

  if (loading) {
    return <LoaderAnimation />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{data.question}</Text>
      <View style={styles.answersContainer}>
        {timeLeft === "0" && (
          <Image
            source={{ uri: data.image.url }}
            resizeMode="cover"
            style={styles.answerImage}
          />
        )}
        <View style={styles.answersList}>
          {data.answersList.map((answer) => (
            <View style={styles.answerItem}>
              <Text key={answer} style={styles.answerText}>
                {answer}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.timer}>
        {timeLeft === "0" ? "Time Out!" : timeLeft}
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
  answerText: {
    fontSize: 24,
    letterSpacing: 1,
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
