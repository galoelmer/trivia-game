import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  questionNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textQuestionNumber: {
    fontFamily: "Nunito",
    fontStyle: "italic",
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "rgb(79, 79, 79)",
  },
  countdownContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
