import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CountdownTimer from "../countdown-timer";
import Modal from "components/modal";

import { useTriviaContext } from "context/trivia";
import { IGetTriviaQuestions } from "context/trivia/types";

import styles from "./styles";

interface TriviaCardProps {
  trivia: IGetTriviaQuestions[number];
}

const TriviaCard = ({ trivia }: TriviaCardProps) => {
  const [displayModal, setDisplayModal] = useState(false);
  const { indexQuestion, questions, setDisplayTrivia } = useTriviaContext();

  const displayExitModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleExitTrivia = () => {
    setDisplayTrivia(false);
  };

  if (!trivia || !trivia.answersList) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.questionNumber}>
            <FontAwesome name="question-circle" size={18} color="#797979" />
            <Text style={styles.textQuestionNumber}>
              {indexQuestion + 1}/{questions.length}
            </Text>
          </View>
          <Pressable onPress={displayExitModal}>
            <FontAwesome name="close" size={20} color="#797979" />
          </Pressable>
        </View>
        <View style={styles.countdownContainer}>
          <CountdownTimer max={5} />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardQuestion}>{trivia?.question}</Text>
          <View style={styles.cardAnswersList}>
            {trivia?.answersList.map((answer, index) => {
              const letter = ["A", "B", "C", "D"][index] || "";

              return (
                <View style={styles.cardAnswer}>
                  <Text
                    style={{
                      paddingHorizontal: 5,
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    {letter}
                  </Text>
                  <View
                    style={{
                      backgroundColor: "rgb(201, 201, 201)",
                      width: 2,
                      marginHorizontal: 15,
                      height: "70%",
                    }}
                  ></View>
                  <Text
                    style={{
                      paddingHorizontal: 5,
                      fontWeight: "500",
                      letterSpacing: 1.2,
                      fontSize: 16,
                    }}
                  >
                    {answer}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <Modal
        visible={displayModal}
        callToAction={handleExitTrivia}
        closeModal={displayExitModal}
      />
    </>
  );
};

export default TriviaCard;
