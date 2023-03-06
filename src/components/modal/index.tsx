import {
  StyleSheet,
  Text,
  View,
  Modal as RNModal,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";

const Modal = () => {
  const { displayResults, setDisplayResults, results, setResults } =
    useTriviaContext();
  const { translate } = useTranslate();

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
              <Text style={[styles.modalTextHeader]}>
                {translate("finalScore")}
              </Text>
              <Text style={[styles.modalTextBody]}>
                {translate("correct")}: {results.correctAnswers} {"\n"}
                {translate("incorrect")}: {results.wrongAnswers}
              </Text>
            </View>
            <Pressable style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.buttonText}>{translate("ok")}</Text>
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
    fontFamily: "Baloo-Bold",
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
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Baloo-Bold",
    fontSize: 22,
    letterSpacing: 2,
  },
});
