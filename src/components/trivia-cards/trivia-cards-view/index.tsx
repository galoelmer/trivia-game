import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";

import _shuffle from "lodash.shuffle";

import LoaderAnimation from "components/loader-animation";
import StackCards from "components/stack-cards";

import { useTriviaContext } from "context/trivia";
import { useTranslateContext } from "context/i18n";

import { getTriviaData } from "services/api";

//TODO: Create new Trivia Card component
// Trivia Card Mock component
const TriviaCard = ({ question }: { question: string }) => {
  const { indexQuestion, setIndexQuestion } = useTriviaContext();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30 }}>{question}</Text>
      <Button
        title="Next Question"
        onPress={() => setIndexQuestion(indexQuestion + 1)}
      />
    </View>
  );
};

const TriviaCards = () => {
  const { locale } = useTranslateContext();
  // TODO: Add error handling for API call
  const { loading, data } = getTriviaData({ locale });

  const { setQuestions, indexQuestion, questions } = useTriviaContext();

  useEffect(() => {
    if (!loading && data.length) {
      setQuestions(_shuffle(data));
    }
  }, [loading, data]);

  if (loading) {
    return <LoaderAnimation />;
  }

  const cards = questions.map((item) => (
    <TriviaCard key={item?.question} question={item?.question ?? ""} />
  ));

  return (
    <View>
      <StackCards list={cards} index={indexQuestion} />
    </View>
  );
};

export default TriviaCards;
