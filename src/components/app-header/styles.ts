import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textShadowContainer: {
    width: "90%",
    marginHorizontal: "5%",
  },
  text: {
    fontSize: 40,
    fontFamily: "Baloo-ExtraBold",
    letterSpacing: 8,
    lineHeight: 46,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "#BABABA",
    textShadowRadius: 1,
    left: 0,
    right: 0,
    paddingTop: 20,
  },
  text1: {
    textShadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text2: {
    position: "absolute",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text3: {
    position: "absolute",
    textShadowOffset: {
      width: 0,
      height: 6,
    },
  },
});

export default styles;
