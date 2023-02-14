import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import React from "react";

import { getTriviaData } from "../../api";
import LoaderAnimation from "../loader-animation";

const TriviaCard: React.FC = () => {
  const { data, loading } = getTriviaData();

  if (loading) {
    return <LoaderAnimation />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{data.question}</Text>
      <View style={styles.answersContainer}>
        <Image
          source={{ uri: data.image.url }}
          resizeMode="cover"
          style={styles.answerImage}
        />
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
      <Text style={styles.timer}>Timer goes here</Text>
    </View>
  );
};

export default TriviaCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    // minWidth: "375px",
    // maxWidth: "280px",
    maxHeight: 480,
    marginHorizontal: 10,
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 2,
    },
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
    flex: 1,
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
