import { StyleSheet } from "react-native";

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

export default styles;
