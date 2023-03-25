import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import LoaderAnimation from "components/loader-animation";
import AnswerItem from "../answer-items";
import TriviaFooter from "../trivia-footer";

import { useTriviaContext } from "context/trivia";
import { useTranslateContext } from "context/i18n";

import { getTriviaData } from "services/api";

import styles from "./styles";

const TriviaCard: React.FC = () => {
  const { locale } = useTranslateContext();
  // TODO: Add error handling for API call
  const { loading, data: questions } = getTriviaData({ locale });

  const {
    setQuestions,
    selectedAnswer,
    indexQuestion,
    setIndexQuestion,
    setSelectedAnswer,
    isCountdownOver,
    setMessage,
  } = useTriviaContext();

  useEffect(() => {
    if (!loading && questions.length) {
      setQuestions(questions);
    }
  }, [loading, questions]);

  // Continue to next question if countdown is over
  useEffect(() => {
    if (isCountdownOver && selectedAnswer === null) {
      setSelectedAnswer("No Answer");
      setMessage(null);
      if (indexQuestion !== questions.length - 1) {
        setTimeout(() => {
          setSelectedAnswer(null);
          setIndexQuestion(indexQuestion + 1);
        }, 4500);
      }
    }
  }, [isCountdownOver]);

  if (loading) {
    return <LoaderAnimation />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {questions[indexQuestion]?.question}
      </Text>
      <View style={styles.answersContainer}>
        {isCountdownOver && (
          <Animatable.View style={{ flex: 1 }} animation="slideInLeft">
            <Image
              source={{ uri: questions[indexQuestion]?.image?.url ?? "" }}
              resizeMode="cover"
              style={styles.answerImage}
            />
          </Animatable.View>
        )}
        <Animatable.View
          style={styles.answersList}
          animation={isCountdownOver ? "slideInLeft" : "lightSpeedIn"}
        >
          {questions[indexQuestion]?.answersList?.map((answer) => (
            <View key={answer} style={styles.answerItem}>
              <AnswerItem
                answer={answer ?? ""}
                correctAnswer={questions[indexQuestion]?.correctAnswer ?? ""}
              />
            </View>
          ))}
        </Animatable.View>
      </View>
      <TriviaFooter />
    </View>
  );
};

export default TriviaCard;
