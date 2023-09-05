import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hideModal: {
    display: "none",
  },
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  modalView: {
    width: "90%",
    minWidth: 320,
    maxWidth: 500,
    backgroundColor: "#fff",
    borderRadius: 20,
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
  modalHeader: {
    margin: 10,
  },
  modalHeaderText: {
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  modalButton: {
    width: "85%",
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "rgba(36, 188, 248, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonText: {
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    color: "#fff",
  },
});

export default styles;
