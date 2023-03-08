import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  selectButton: {
    marginTop: 25,
  },
  selectButtonText: {
    fontFamily: "Baloo-Regular",
    fontSize: 18,
    textTransform: "capitalize",
    letterSpacing: 1,
    textAlign: "center",
    color: "#fff",
    textDecorationLine: "underline",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
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
    fontFamily: "Baloo-Bold",
    fontSize: 24,
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  itemsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  items: {
    width: "75%",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsSelected: {
    backgroundColor: "#000",
  },
  itemText: {
    fontFamily: "Baloo-Medium",
    fontSize: 18,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  itemTextSelected: {
    color: "#fff",
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
    fontFamily: "Baloo-Bold",
    fontSize: 22,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    color: "#fff",
  },
  textIcon: {
    marginLeft: 10,
  },
});

export default styles;
