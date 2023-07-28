import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
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
    backgroundColor: "#24bcf8",
    borderWidth: 4,
    borderColor: "#ffffff",
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    fontFamily: "Nunito-Bold",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 4,
    textTransform: "uppercase",
  },
});

export default styles;
