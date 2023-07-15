import { StyleSheet } from "react-native";
import { isWeb } from "utils/checkCurrentOS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    maxHeight: 480,
    width: "90%",
    marginHorizontal: 30,
    ...(isWeb && { minWidth: 375, maxWidth: 650 }),
  },
  questionText: {
    textAlign: "center",
    backgroundColor: "whitesmoke",
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    fontSize: isWeb ? 28 : 22,
    letterSpacing: 1,
    lineHeight: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
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
  timer: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 1,
    padding: 15,
    backgroundColor: "teal",
  },
});

export default styles;
