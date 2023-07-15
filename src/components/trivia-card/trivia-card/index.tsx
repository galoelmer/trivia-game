import React, { useEffect, useMemo } from "react";
import { Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import _shuffle from "lodash.shuffle";

import LoaderAnimation from "components/loader-animation";
import AnswerItem from "../answer-items";
import TriviaFooter from "../trivia-footer";

import { useTriviaContext } from "context/trivia";
import { useTranslateContext } from "context/i18n";

import { getTriviaData } from "services/api";
import { NEXT_QUESTION_DELAY } from "../constants";

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

  const answersList = useMemo(
    () => _shuffle(questions[indexQuestion]?.answersList),
    [questions[indexQuestion]?.answersList]
  );

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
        }, NEXT_QUESTION_DELAY);
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
              style={{ flex: 1 }}
            />
          </Animatable.View>
        )}
        <Animatable.View
          style={styles.answersList}
          animation={isCountdownOver ? "slideInLeft" : "lightSpeedIn"}
        >
          {answersList.map((answer) => (
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
