import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textShadowContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 65,
    fontFamily: "Pepsi",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#00ffcc",
    textShadowColor: "#3a738f",
    textShadowRadius: 1,
    transform: [{ skewY: "-10deg" }],
    width: "100%",
  },
  text1: {
    textShadowOffset: {
      width: 2,
      height: 4,
    },
  },
  text2: {
    position: "absolute",
    textShadowOffset: {
      width: 4,
      height: 6,
    },
  },
  text3: {
    position: "absolute",
    textShadowOffset: {
      width: 6,
      height: 8,
    },
  },
  subtext: {
    fontSize: 30,
    color: "#00ffcc",
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: "Pepsi",
    transform: [{ skewY: "-10deg" }],
    textShadowColor: "#3a738f",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
  },
});

export default styles;
