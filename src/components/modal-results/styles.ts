import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    justifyContent: "space-between",
    width: "85%",
    maxWidth: 500,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 6,
    borderStyle: Platform.OS === "android" ? "solid" : "dashed",
    borderColor: "rgba(27, 145, 192, 0.9)",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    alignItems: "center",
  },
  modalTextHeader: {
    fontFamily: "Nunito-Bold",
    fontSize: 28,
    marginBottom: 5,
    letterSpacing: 2,
  },
  modalTextBody: {
    fontFamily: "Nunito",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 22,
    letterSpacing: 1,
    lineHeight: 34,
  },
  button: {
    width: "80%",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: "rgba(27, 145, 192, 0.9)",
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 22,
    letterSpacing: 2,
  },
});

export default styles;
