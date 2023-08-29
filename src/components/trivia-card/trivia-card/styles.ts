import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
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
  cardBody: {
    flex: 1,
  },
  cardQuestion: {
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    letterSpacing: 0.65,
    lineHeight: 28,
  },
  cardAnswersList: {
    flexGrow: 1,
    alignItems: "center",
  },
  cardAnswer: {
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    borderColor: "rgb(218, 218, 218)",
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default styles;
