import {
  StyleSheet,
  Text,
  View,
  Modal as RNModal,
  Pressable,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Baloo_Regular400 } from "@expo-google-fonts/baloo";

import { useTriviaContext } from "../../context";

const Modal = () => {
  const { displayResults, setDisplayResults, results, setResults } =
    useTriviaContext();

  let [fontsLoaded] = useFonts({
    Baloo_Regular400,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleButtonPress = () => {
    setDisplayResults(false);
    setResults({ correctAnswers: 0, wrongAnswers: 0 });
  };

  return (
    <View style={styles.centeredView}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={displayResults}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}>
              <Text style={[styles.modalTextHeader]}>Final Score</Text>
              <Text style={[styles.modalTextBody]}>
                Correct: {results.correctAnswers} {"\n"} Incorrect:{" "}
                {results.wrongAnswers}
              </Text>
            </View>
            <Pressable style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    justifyContent: "space-between",
    width: "85%",
    height: "35%",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 6,
    borderStyle: "dashed",
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
    fontFamily: "Baloo_Regular400",
    fontSize: 28,
    marginBottom: 5,
    letterSpacing: 2,
  },
  modalTextBody: {
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
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Baloo_Regular400",
    fontSize: 22,
    letterSpacing: 2,
  },
});
