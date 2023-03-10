import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
  },
  buttonHighlight: {
    borderRadius: 50,
    marginHorizontal: 10,
    maxWidth: 425,
    minWidth: 320,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(36, 188, 248, 0.9)",
    borderWidth: 8,
    borderColor: "rgb(255, 255, 255)",
    borderRadius: 50,
    padding: 20,
  },
  buttonText: {
    fontFamily: "Nunito-Bold",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});

export default styles;
