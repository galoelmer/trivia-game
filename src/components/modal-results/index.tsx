import { Text, View, Modal as RNModal, Pressable } from "react-native";
import React from "react";

import { useTriviaContext } from "context/trivia";
import { useTranslate } from "context/i18n";

import styles from "./styles";

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
